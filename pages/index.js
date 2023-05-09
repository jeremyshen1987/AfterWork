import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import New_Release from './Components/New_Release'
import Recently_Viewed from './Components/Recently_Viewed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Recently_Viewed />
      <New_Release />
    </>
  )
}
