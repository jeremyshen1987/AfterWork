import {render, screen, waitFor} from '@testing-library/react';
import { setupServer } from 'msw/node';
import {  rest } from "msw";
import userEvent from '@testing-library/user-event'

import App from '@/pages/search';
import { MainProvider } from "@/utils/context";
import { search_result_generic } from '@/test_data/search_result_generic';


const server = setupServer(

    // mock return access token required by spotfy api
    rest.get('/api/token', async(req, res, context)=>{
        console.log('fetch received')
        return res(
            context.json(
                {
                    result:{
                        access_token: 'abcd',
                        expires_in: 9999
                    }

                }
            )
        )

    }),

    // mock response search query 'chopin'
    rest.post('http://localhost/api/search/chopin&type=album,artist,track,playlist&limit=8', async (req, res, context) => {


        // offset search debouncing 
        context.delay(600)
        return res(
            context.json(
                search_result_generic
            )
        )

    })
)


beforeAll(() => server.listen())
afterAll(() => server.close())

beforeEach(() => {

    render(
        <MainProvider>
            <App />
        </MainProvider>
    )
})

afterEach(() => server.resetHandlers())


describe('search and search result component', ()=>{

    Object.defineProperty(crypto, 'randomUUID', {
            
        writable: true,
        // generate random num for react children key prop
        value: jest.fn().mockReturnValue(Math.floor(Math.random() * 1000))
    });




    it('input element is rendered without query text. Search result is not displayed when query is empty string, new release section is displayed instead', ()=>{


        screen.debug()
        
        // new release compoonent fallback to loading cards since we didnt implement fetch response
        const plsWait = screen.getAllByText(/please wait/i)
        expect(plsWait.length).toEqual(8)

        const input = screen.getByRole('textbox', {value: ''})
        expect(input).toBeInTheDocument()

    }),

    it('user can type in input field and query string is received by api after a short delay. Search results are returned from all four categories. Each category button will narrow down results to corresponding cat.  New release section dismount', async () => {

        expect(screen.getByText(/new release/i)).toBeInTheDocument()

        await userEvent.click(screen.getByRole('textbox'))
        await userEvent.type(screen.getByRole('textbox'), 'chopin')

        expect(screen.getByRole('textbox', {value: 'chopin'})).toBeInTheDocument()

        expect(screen.queryByText(/new release/i)).not.toBeInTheDocument()

        await waitFor(() => {

            // ensure category buttons are present
            expect(screen.getByRole('button', {name: 'All'})).toBeInTheDocument()
            expect(screen.getByRole('button', {name: 'albums'})).toBeInTheDocument()
            expect(screen.getByRole('button', {name: 'artists'})).toBeInTheDocument()
            expect(screen.getByRole('button', {name: 'tracks'})).toBeInTheDocument()

            // return 8 search results across all categories
            expect(screen.getAllByText(/album/i).length).toBeGreaterThanOrEqual(8)
            expect(screen.getAllByText(/artist/i).length).toBeGreaterThanOrEqual(8)
            expect(screen.getAllByText(/track/i).length).toBeGreaterThanOrEqual(8)
            expect(screen.getAllByText(/playlist/i).length).toBeGreaterThanOrEqual(8)
        })


        const artist_btn = screen.getByRole('button', {name: 'artists'})

        await userEvent.click(artist_btn)
        // selected category buton became active
        expect(artist_btn).toHaveClass('active_btn')


        // categories other than 'artist' disappears, only a button and suggestion panel contain category name
        expect(screen.getAllByText(/album/i).length).toEqual(2)
        expect(screen.getAllByText(/track/i).length).toEqual(2)
        expect(screen.getAllByText(/playlist/i).length).toEqual(2)

        expect(screen.getAllByText(/artist/i).length).toBeGreaterThanOrEqual(8)

        // one of artists is Frédéric Chopin with his page quoted below  
        expect(screen.getAllByRole('link').some( i => i.href = '/artist/7y97mc3bZRFXzT2szRM4L4')).toBeTruthy()


        const select_all_btn = screen.getByRole('button', {name: 'All'})

        await userEvent.click(select_all_btn)
        // active button switch from 'artist' to 'all'
        expect(select_all_btn).toHaveClass('active_btn')
        expect(artist_btn).not.toHaveClass('active_btn')

        expect(screen.getAllByText(/album/i).length).toBeGreaterThanOrEqual(8)
        expect(screen.getAllByText(/artist/i).length).toBeGreaterThanOrEqual(8)
        expect(screen.getAllByText(/track/i).length).toBeGreaterThanOrEqual(8)
        expect(screen.getAllByText(/playlist/i).length).toBeGreaterThanOrEqual(8)

        // screen.debug()

    })

})