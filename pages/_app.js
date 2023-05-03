import '@/styles/globals.css'
import Menu from './Components/Menu'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  ) 
}
