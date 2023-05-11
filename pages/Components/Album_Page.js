import { useEffect } from "react"
import Link from "next/link"
import { useMainContext } from "@/utils/context"
import Playlist from "./Album_Playlist"
import upperCase from "@/utils/upperCase"
import toggleLike from "@/utils/toggleLike"
import setHistory from "@/utils/setHistory"
import setColor from "@/utils/setColor"

export default function Album_Page({data}){

    const {likes, setLikes} = useMainContext()


    if(typeof data === 'undefined' || data === null){
        return
    }

    try{
        const {artists, external_urls, images, release_date, name, tracks, total_tracks, type, id} = data
        const img_url = images[0].url

        setHistory(type, name, id, img_url)

        // set background color based on album color
        setColor(img_url, "album_detail")

        return(
            <>
                <div key={id} className="album_overview">

                    <img src={img_url} className="album_img_small"></img>

                    <div className="album_detail" id="album_detail">
                        <p className="album_type">{upperCase(type)}</p>
                        <h1>{name}</h1>
                        
                        {artists.map(artist => {
                            return(
                                <div key={artist.id}>

                                    {/* to do: */}
                                    {/* <img src="" className="img_mini"></img> */}
                                    
                                    <Link href={`/${artist.type}/${artist.id}`} style={{ textDecoration: 'none', color: 'white' }}><p className="track_artist_clickable">{artist.name}</p></Link>
                                </div>
                            )
                        })}
                            
                        <div className="album_year">
                            
                            <span>{(new Date(release_date)).getFullYear()}</span>
                            <span style={{margin: '0 5px'}}>•</span>
                            <span>{total_tracks} songs</span>
                            <button onClick={()=>toggleLike(type, name, id, img_url, likes, setLikes)} className="round_btn like_btn">
                                {likes.filter(like => like.id === id).length > 0 ? 'Unlike' : 'Like this album'}
                            </button>
                        </div>
                        
                    </div>
    
                </div>
    
                <Playlist type={type} tracks={tracks}/>
            </>
    
        )

    }catch(err){
        console.log(err)
    }

}