import Link from "next/link"

export default function Menu(){

    return(
        <ul className="main_tabs">
            <li><Link href='/'>Home</Link></li>
            <li onClick={()=>validate_token(new_release)}>Search</li>
            <li><Link href='/album/03'>Library</Link></li>
        </ul>
    )

}