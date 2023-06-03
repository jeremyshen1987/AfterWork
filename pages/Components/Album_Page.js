import Link from "next/link"
import Image from "next/image"
import { useMainContext } from "@/utils/context"
import Playlist from "./Album_Playlist"
import upperCase from "@/utils/upperCase"
import toggleLike from "@/utils/toggleLike"
import setHistory from "@/utils/setHistory"
import setColor from "@/utils/setColor"
import { useEffect, useRef } from "react"

export default function Album_Page({data}){

    const {likes, setLikes} = useMainContext()

    useEffect(() => {

        function more_option(e){

            e.stopPropagation()

            const spotify_link = document.getElementsByClassName('to_spotify')[0]

            if(e.target.classList.contains('options_img')){

                //toggle 
                spotify_link.style.visibility = spotify_link.style.visibility === 'visible' ? 'hidden' : 'visible'
                return
            }

            spotify_link.style.visibility = 'hidden'
        }

        document.addEventListener('click', more_option)

        return () => {
            document.removeEventListener('click', more_option)
        }

    }, [])

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
                        
                        <div className="artists_album">
                        {artists.map(artist => {
                            return(
                                <div key={artist.id}>
                                    
                                    <Link href={`/${artist.type}/${artist.id}`}><p className="track_artist_clickable">{artist.name}</p></Link>
                                </div>
                            )
                        })}
                        </div>
                            
                        <div className="album_year">
                            
                            <span>{(new Date(release_date)).getFullYear()}</span>
                            <span style={{margin: '0 5px'}}>•</span>
                            <span className="margin_right">{total_tracks} songs</span>

                            <span className="options_album_playlist">
                                <Image src='/option.svg' width={25} height={25} alt="Options" title="Options" className="options_img"></Image>
                                <a className="to_spotify" href={external_urls.spotify} target="_blank">View in Spotify</a>
                            </span>
                            <Image src={likes.filter(like => like.id === id).length > 0 ? '/heart_filled_green.svg' : '/heart_empty_green.svg'} width={50} height={50} alt="like"
                                onClick={()=>toggleLike(type, name, id, img_url, likes, setLikes)} className="round_btn like_btn">
                            </Image>
                        </div>
                        
                    </div>
    
                </div>
    
                <Playlist album_id={id} type={type} tracks={tracks} img_url={img_url} />
            </>
    
        )

    }catch(err){
        console.log(err.message)
    }

}