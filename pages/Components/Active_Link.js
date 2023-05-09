import { useRouter } from "next/router"

export default function Active_Link({children, href}){

    const router = useRouter()
    const highlight = router.asPath === href ? 'brightWhite' : null

    function toRoute(e){
        // to prevent state loss. Arghhh...
        e.preventDefault()
        router.push(href)
    }

    return(

        <a href={href} id={highlight} onClick={toRoute}>
            {children}
        </a>
    )

}


