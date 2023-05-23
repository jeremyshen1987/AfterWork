import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link"
import Active_Link from "./Active_Link";
import { useMainContext } from "@/utils/context";


export default function Menu(){

    const {likes, setLikes} = useMainContext()
    const num = likes.filter(like => like.id !== null).length

    useEffect(()=>{
      // Liked array stored in LS
      let liked_LS = JSON.parse(localStorage.getItem('liked_after_work'))
  
      if(liked_LS === null){
  
        return
      }
  
      if(Array.isArray(liked_LS)){
        setLikes(liked_LS)
      }
  
    }, [])


    return(
        <div className="main_tabs">

            <div className="container_logo">
                <h4>Powered by:</h4>
                <Link href='https://open.spotify.com/'><Image src="/spotify_logo.svg" width={180} height={120} alt="sportify logo" priority='true' className="menu_svg" /></Link>
            </div>


                <Active_Link href='/'>Home</Active_Link>
                <Active_Link href='/search'>Search</Active_Link>
                <li className="relative">
                    <Active_Link href='/liked'>Liked</Active_Link>

                    {num > 0 && <span className="num_like">{num}</span>}
                </li>
        </div>
    )

}

