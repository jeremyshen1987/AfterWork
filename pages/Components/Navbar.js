import { useRouter } from "next/router"
import Image from "next/image"

export default function Navbar({referer}){
    
    const router = useRouter()


    return(
        <>
        <Image onClick={()=> router.back()} src='/go_back_white.svg' width={30} height={30} alt="go back" id="go_back"></Image>
        </>

    )
}