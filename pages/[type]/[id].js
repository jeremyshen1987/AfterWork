import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Album_Page from "../Components/Album_Page";
import Artist_Page from "../Components/Artist_Page";
import Track_Page from "../Components/Track_Page";
import Playlist_Page from "../Components/Playlist_Page";
import Error_Page from "../Components/Error_Page";
import validate_token from "@/utils/validate_token";
import search_by_id from "@/utils/search_by_id";


export default function Album_Artist_Playlist(){
    
    const router = useRouter()
    const {type, id} = router.query

    const [data, setData] = useState(null)

    useEffect(()=>{

        if(router.isReady){
        
            (async function getItems(){
                
                try{
                    const response = await validate_token(search_by_id, type, id)
                    setData(response)
                }
                catch(err){
                    console.log('id err', err.message)
                }

            })()

        }
    }, [type, id])

    // catch errors from all types
    if(data !== null && typeof data.error !== 'undefined'){
        
        const err_msg = data.error.message ?? 'Something went wrong'
        return <Error_Page err={err_msg} />
    }

    switch(type){

        case 'album':
            return (
                <>
                <Navbar />
                <Album_Page data={data}/>
                </>
            )
            
        case 'playlist':
            return(
                <>
                <Navbar />
                <Playlist_Page data={data}/>
                </>
            )
        
        case 'artist':
            return(
                <>
                <Navbar />
                <Artist_Page key={id} data={data}/>
                </>
            )
        case 'track':
            return(
                <>
                <Navbar />
                <Track_Page key={id} data={data}/>
                </>
            )
        default:
            return (
                <Error_Page err='Resource do not exist' />
            )
    }

}

  