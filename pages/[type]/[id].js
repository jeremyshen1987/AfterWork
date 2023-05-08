import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Album_Page from "../Components/Album_Page";
import Artist_Page from "../Components/Artist_Page";
import Track_Page from "../Components/Track_Page";
import Playlist_Page from "../Components/Playlist_Page";

import validate_token from "@/utils/validate_token";
import search_by_id from "@/utils/search_by_id";


export default function Album_Artist_Playlist(){
    
    const router = useRouter()
    const {type, id} = router.query

    const [data, setData] = useState(null)

    useEffect(()=>{

        if(router.isReady){
        
            (async function getItems(){
                
                const response = await validate_token(search_by_id, type, id)
                setData(response)
            })()

        }
    }, [type, id])


    switch(type){

        case 'album':

            return (
                <Album_Page data={data}/>
            )
            
        case 'playlist':
            return(
                <Playlist_Page data={data}/>
            )
        
        case 'artist':
            return(
                <Artist_Page key={id} data={data}/>
            )
        case 'track':
            return(
                 <Track_Page key={id} data={data}/>
            )
        default:
            return null
    }

    




}