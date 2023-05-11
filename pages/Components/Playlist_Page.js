import Link from "next/link"
import Playlist from "./Album_Playlist"
import upperCase from "@/utils/upperCase"

export default function Playlist_Page({data}){

    if(typeof data === 'undefined' || data === null){
        return
    }

    try{

        console.log('playlist data', data)
        const {name, external_urls, followers, images, owner, tracks, type, id} = data
        const img_url = images[0].url

        return(
            <>
                <div key={id} className="album_overview">

                    <img src={img_url} className="album_img_small"></img>

                    <div className="album_detail">
                        <p className="album_type">{upperCase(type)}</p>
                        <h1>{name}</h1>
                        
                     
                        <div key={owner.id}>
                            <p className="playlist_artist">Created by: {owner.display_name}</p>
                        </div>
             
                            
                        <div>
                            
                            <span>{followers.total} Likes</span>
                            <span style={{margin: '0 5px'}}>•</span>
                            <span>{tracks.total} songs</span>
                        </div>
                        
                    </div>
    
                </div>
    
                <Playlist type={type} tracks={tracks} img_url={img_url} />
            </>
    
        )

    }catch(err){
        console.log(err)
    }

}