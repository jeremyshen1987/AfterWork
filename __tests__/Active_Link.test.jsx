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

    it('renders link and text', () => {

        render(
            <Active_Link href='/search'>
                Search
            </Active_Link>
        );
    
        const router = useRouter()

        screen.debug()
        
        const anchor = screen.getByRole('link', {name: 'Search'})
        expect(anchor).toBeInTheDocument();
        expect(anchor).toHaveAttribute('href', '/search')

    });
});