import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';

import Active_Link from '@/pages/Components/Active_Link';


jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

useRouter.mockReturnValue({
    query: {},
    asPath: '/',
    push: () => {}
})

 
describe('Active_Link', () => {

    // beforeEach(()=>{


    // })

    it('display correct text and url', () => {

        render(
            <Active_Link href='/search'>
                Search
            </Active_Link>
        );

        screen.debug()
        
        const anchor = screen.getByRole('link', {name: 'Search'})
        expect(anchor).toBeInTheDocument();
        expect(anchor).toHaveAttribute('href', '/search')

    });

    it('have correct element id attribute if href and current path are the same', ()=>{

        render(
            <Active_Link href='/'>
                Home
            </Active_Link>
        );

        const router = useRouter()
        const anchor = screen.getByRole('link', {name: 'Home'})
        expect(anchor).toHaveAttribute('id', 'brightGreen')

    })


});