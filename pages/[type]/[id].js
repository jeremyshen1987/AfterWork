import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Album_Page from "../Components/Album_Page";
import Artist_Page from "../Components/Artist_Page";
import Track_Page from "../Components/Track_Page";
import Playlist_Page from "../Components/Playlist_Page";
import Error_API from "../Components/Error_API";

import validate_token from "@/utils/validate_token";
import search_by_id from "@/utils/search_by_id";


export default function Album_Artist_Playlist({referer}){
    
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
                    console.log('id err', err)
                }

            })()

        }
    }, [type, id])

    // catch errors from all types except artist
    if(data !== null && typeof data.error !== 'undefined'){
        
        const err_msg = typeof data.error.message !== 'undefined' ? data.error.message : 'Something went wrong'
        return <Error_API err={err_msg} />
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

            if(data !== null && typeof data.artist_info.error !== 'undefined'){
                return <Error_API err={typeof data.error.message !== 'undefined' ? data.artist_info.error.message : 'Something went wrong' } />
            }

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
            return null
    }

}

  