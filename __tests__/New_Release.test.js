import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { setupServer } from 'msw/node';
import {  rest } from "msw";

import New_Release from "@/pages/Components/New_Release";
import { MainProvider } from "@/utils/context";
import { result } from "@/test_data/result_new_release";


const server = setupServer(

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

    rest.post('/api/newRelease', async (req, res, context)=>{
        console.log('fetch received')
        return res(
            context.json(
                // {error: 'failed'}
                {albums:{
                    items: result
                }}
            )
        )

    })
)


beforeAll(() => server.listen())
afterAll(() => server.close())

describe('new_relesase component', ()=>{

    it('return default loading screen during fetch', ()=>{

        render(
            <MainProvider>
                <New_Release />
            </MainProvider>
        )

        screen.debug()

        const plsWait = screen.getAllByText(/please wait/i)
        expect(plsWait.length).toEqual(8)
    })

    it('renders fetch results and remove loading spinner, images source contains correct url', async ()=>{


        Object.defineProperty(crypto, 'randomUUID', {
            
            writable: true,
            value: jest.fn().mockReturnValue(123)
          });

        render(
            <MainProvider>
                <New_Release />
            </MainProvider>
        )


        await waitForElementToBeRemoved(()=>screen.queryAllByText(/please wait/i)[0])

        expect(screen.getAllByText(/new release/i).length).toBeGreaterThan(7)

        const images = screen.getAllByRole('img')
        images.forEach(img => {
            expect(img.src).toMatch(/(i.scdn.co)/i)
        })

        screen.debug()

    })

    
})

