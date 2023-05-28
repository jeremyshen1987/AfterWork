import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { useRouter } from 'next/router';
import Menu from '@/pages/Components/Menu';
import { MainProvider } from '@/utils/context';



jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

useRouter.mockReturnValue({
    query: {},
    asPath: '/',
    push: () => {}
})



describe('Menu sidebar', ()=>{

    beforeEach(()=>{
        render (
            <MainProvider >
                <Menu />
            </MainProvider>
        )
    })

    it('have 3 tabs', ()=>{


        expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument()
        expect(screen.getByRole('link', {name: 'Search'})).toBeInTheDocument()
        expect(screen.getByRole('link', {name: 'Liked'})).toBeInTheDocument()

        screen.debug()

    })

    it('have spotify logo, number of likes - 0 is not visible', ()=>{

        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.queryByText('0')).not.toBeInTheDocument()

    })

})