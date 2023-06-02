import { render, screen, waitFor} from '@testing-library/react';
import Recently_Viewed from '@/pages/Components/Recently_Viewed';
import { viewed } from '@/test_data/recentViewed_data_LS';

const localStorageMock = (function () {
    let store = {};
  
    return {
      getItem(key) {
        return store[key];
      },
  
      setItem(key, value) {
        store[key] = value;
      },
  
      clear() {
        store = {};
      },
  
      removeItem(key) {
        delete store[key];
      },
  
      getAll() {
        return store;
      },
    };
})();
  
Object.defineProperty(window, "localStorage", { value: localStorageMock });


describe('recently viewed component', ()=>{

    it('nothing should be displayed when user did not view any album/tracks/artist', ()=>{

      localStorage.setItem('history_after_work', null)

        render(<Recently_Viewed />)

        expect(screen.queryAllByText(/recently viewed/i).length).toEqual(0)
        screen.debug()

    })

    it('recently viewed items are displayed if it exist in localStorage', async ()=>{


        localStorage.setItem('history_after_work', viewed)

        render(<Recently_Viewed />)

        await waitFor(()=>{
            expect(screen.getByText(/recently viewed/i)).toBeInTheDocument()
            expect(screen.getByText('artist')).toBeInTheDocument()
            expect(screen.getAllByRole('link')).toHaveLength(3)
        })

        screen.debug()

    })


})