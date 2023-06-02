import { screen, render, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { setupServer } from 'msw/node';
import {  rest } from "msw";
import  userEvent from '@testing-library/user-event';

import Album_Artist_Playlist from '@/pages/[type]/[id]';
import Liked from '@/pages/liked';
import Menu from '@/pages/Components/Menu';

import { MainProvider } from '@/utils/context';
import { artist_page_data } from '@/test_data/artist_page_data';

// to override setColor function later
import * as colorModule from '@/utils/setColor'; 

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))


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
    rest.post('/api/artist/71jzN72g8qWMCMkWC5p1Z0', async (req, res, context) => {


        // offset search debouncing 
        // context.delay(600)
        return res(
            context.json(
                artist_page_data
            )
        )

    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

Object.defineProperty(crypto, 'randomUUID', {
            
    writable: true,
    // generate random num for react children key prop
    value: jest.fn().mockReturnValue(Math.floor(Math.random() * 1000))
});



describe('dynamic route rendering based on router query type and id', () => {

    it('renders error page if type or id do not exist', () => {

        useRouter.mockReturnValue({
            query: {
                type: 'abcd',
                id: '123'
            },
            asPath: '/search',
            isReady: true
        })

        render(
            <MainProvider>
                <Album_Artist_Playlist />
            </MainProvider>
        )

        expect(screen.getByText(/error/i)).toBeInTheDocument()

    })


    it('renders artist page with pre-defined data, toggle like button will add/remove item to liked page', async () => {

        useRouter.mockReturnValue({
            query: {
                type: 'artist',
                id: '71jzN72g8qWMCMkWC5p1Z0'
            },
            asPath: '/search',
            isReady: true
        }),

        // override setColor method within Artist_Page since its not relevant to our test
        colorModule.setColor = jest.fn().mockReturnValue(null)


        render(
            <MainProvider>
                <Album_Artist_Playlist />
                <Liked />
                <Menu />
            </MainProvider>
        )

        await waitFor(() => {

            // expect element: <h1>Alexandre Desplat</h1> <button>Like this artist</button>
            expect(screen.getByRole('heading', {name: 'Alexandre Desplat', level: 1})).toBeInTheDocument()
            expect(screen.getByRole('button', {name: 'Like this artist'})).toBeInTheDocument()
        })

        await screen.findByRole('button', {name: 'Like this artist'})

        // after click 'like' button, button text changed to 'Unlike', artist object added to the 'liked' page and it has 'Rcmd' button (for recommendation)
        await userEvent.click(screen.getByRole('button', {name: 'Like this artist'}))

        expect(screen.getByRole('button', {name: 'Unlike'})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'Rcmd'})).toBeInTheDocument()

        // number of liked items are reflected on 'liked' tab in Menu page, as well as containing 'num_like' class
        const liked_num = screen.getByText(1)
        expect(liked_num).toBeInTheDocument()
        expect(liked_num).toHaveClass('num_like')

        // click 'Unlike' button to remove artist object and number of likes from 'liked' page 
        await userEvent.click(screen.getByRole('button', {name: 'Unlike'}))

        expect(screen.queryByRole('button', {name: 'Rcmd'})).not.toBeInTheDocument()
        expect(screen.queryByText(1)).not.toBeInTheDocument()

        screen.debug()

    })

})