import '@/styles/globals.css'
import { MainProvider } from '@/utils/context'
import Menu from './Components/Menu'


export default function App({ Component, pageProps }) {

  return(
    <>
      <MainProvider >
        <Menu />
          <div className="main_container">
            <Component {...pageProps} />
          </div>
      </MainProvider>

    </>
  ) 
}
