import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Loading from "@/pages/Components/Loading";

describe('Loading component', ()=>{

    it('renders 8 items by default', ()=>{

        render(
            <Loading title='New Release' name='Loading...' type='Please Wait...' img_url='/reload_black.svg'/>
        )

        const images = screen.getAllByRole('img')
        expect(images.length).toEqual(8)

        images.forEach(img =>{
            expect(img).toHaveAttribute('src', '/reload_black.svg')
        })
        

        const plsWait = screen.getAllByText(/please wait/i)
        expect(plsWait.length).toEqual(8)

    })


    it('renders x times if optional args is provided', ()=>{

        render(
            <Loading num={3} title='New Release' name='Loading...' type='Please Wait...' img_url='/reload_black.svg'/>
        )

        const images = screen.getAllByRole('img')
        expect(images.length).toEqual(3)

    })


})