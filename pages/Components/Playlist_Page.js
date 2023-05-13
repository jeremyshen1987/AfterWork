import Link from "next/link"
import Playlist from "./Album_Playlist"
import { useMainContext } from "@/utils/context"
import upperCase from "@/utils/upperCase"
import setColor from "@/utils/setColor"
import setHistory from "@/utils/setHistory"
import toggleLike from "@/utils/toggleLike"

export default function Playlist_Page({data}){

    const {likes, setLikes} = useMainContext()

    if(typeof data === 'undefined' || data === null){
        return
    }

    try{

        console.log('playlist data', data)
        const {name, external_urls, followers, images, owner, tracks, type, id} = data
        const img_url = images[0].url

        setHistory(type, name, id, img_url)
        setColor(img_url, "album_detail")

        return(
            <>
                <div key={id} className="album_overview">

                    <img src={img_url} className="album_img_small"></img>

                    <div className="album_detail" id="album_detail">
                        <p className="album_type">{upperCase(type)}</p>
                        <h1>{name}</h1>
                        
                     
                        <div key={owner.id}>
                            <p className="playlist_artist">Created by: {owner.display_name}</p>
                        </div>
             
                            
                        <div className="album_year">
                            
                            <span>{followers.total} Likes</span>
                            <span style={{margin: '0 5px'}}>•</span>
                            <span>{tracks.total} songs</span>
                            <button onClick={()=>toggleLike(type, name, id, img_url, likes, setLikes)} className="round_btn like_btn">
                                {likes.filter(like => like.id === id).length > 0 ? 'Unlike' : 'Like this album'}
                            </button>
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