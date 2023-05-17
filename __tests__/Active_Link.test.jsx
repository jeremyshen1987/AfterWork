import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Active_Link from '@/pages/Components/Active_Link';
import '@testing-library/jest-dom';
 
describe('Active_Link', () => {


    jest.mock('next/router', () => ({
        useRouter: jest.fn()
    }))


    it('renders a link', () => {

        useRouter.mockReturnValue({ query: {}})

        render(
            <Active_Link href='/search'>
                test page
            </Active_Link>
        );
    

        screen.debug()
        // const heading = screen.getByRole('heading', {
        //   name: /welcome to next\.js!/i,
        // });
    
        // expect(heading).toBeInTheDocument();


    });
});