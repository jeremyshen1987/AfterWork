import { useContext } from "react"
import Link from "next/link"
import { useMainContext } from "@/utils/context";


export default function Menu(){

    const {likes} = useMainContext()

    const num = likes.filter(like => like.id !== null).length

    return(
        <div className="main_tabs">

            <div className="container_logo">
                <h4>Powered by:</h4>
                <Link href='https://open.spotify.com/'><img src="/spotify_logo.svg" alt="sportify logo" className="menu_svg"></img></Link>
            </div>


                <Link href='/'>Home</Link>
                <Link href='/search'>Search</Link>
                <li className="relative">
                    <Link href='/liked'>Liked</Link>
                    {num > 0 && <span className="num_like">{num}</span>}
                </li>
        </div>
    )

}

