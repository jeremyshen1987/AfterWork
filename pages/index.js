import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import New_Release from './Components/New_Release'
import Recently_Viewed from './Components/Recently_Viewed'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <>
      <Recently_Viewed />
      <New_Release />
    </>
  )
}

// export async function getServerSideProps(context) {

//   const {req} = context

//   let referer = req.headers.referer ?? ''
//   console.log('referer props: ', referer)
//   console.log('root headers: ', req.headers)


//   return {
//     props:{
//       referer
//     }
      
//   };
// }
