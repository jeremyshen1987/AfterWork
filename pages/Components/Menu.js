import { useContext } from "react"
import Link from "next/link"
import { useMainContext } from "@/utils/context";


export default function Menu(){


    return(
        <ul className="main_tabs">
            <li><Link href='/'>Home</Link></li>
            <li onClick={()=>refocus(router)}>Search</li>
            <li><Link href='/liked'>Liked</Link></li>
        </ul>
    )

}

