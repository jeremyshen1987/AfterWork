import '@/styles/globals.css'
import { useState } from 'react'
import {MainProvider} from '@/utils/context'
import Menu from './Components/Menu'


export default function App({ Component, pageProps }) {

  const str = 'hey'
  const arr = 'there'


  return(
    <>
      <MainProvider >
        <Menu />
        <Component {...pageProps} />
      </MainProvider>

    </>
  ) 
}
