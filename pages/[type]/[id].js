import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Album_Page from "../Components/Album_Page";
import Playlist_Page from "../Components/Playlist_Page";
import validate_token from "@/utils/validate_token";
import search_by_id from "@/utils/search_by_id";
import Artist_Page from "../Components/Artist_Page";

export default function Album_Artist_Playlist(){
    
    const router = useRouter()
    const {type, id} = router.query

    const [data, setData] = useState({})


    useEffect(()=>{

        if(router.isReady){
        
            (async function getItems(){
                
                const response = await validate_token(search_by_id, type, id)
                setData(response)
            })()

        }
    }, [type])

    switch(type){

        case 'album':

            return (

                <div className="main_container">
                    <Album_Page data={data}/>
                </div>
        
            )
            
        case 'playlist':
            return(
                <div className="main_container">
                    <Playlist_Page data={data}/>
                </div>
            )
        
        case 'artist':
            console.log('artist cat', data)
            return(
                <div className="main_container">
                    <Artist_Page data={data}/>
                </div>
            )
        
        default:
            return null
    }

    // if(type === 'album'|| type === 'playlist'){

    
    // }


}