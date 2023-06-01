
import styles from '@/styles/Home.module.css'
import Recommendations from './Components/Recommendations'
import New_Release from './Components/New_Release'
import Recently_Viewed from './Components/Recently_Viewed'

export default function Home() {
  return (
    <>
      <Recommendations />
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
