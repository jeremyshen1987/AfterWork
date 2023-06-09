import Link from "next/link"
import Image from "next/image"
import { Like_Btn_on, Like_Btn_off } from "@/utils/toggle_like_btn"
import { Player_Btn_on, Player_Btn_off } from "@/utils/toggle_player_btn"
import { mock_play_pause } from "@/utils/play_pause"
import toggleLike from "@/utils/toggleLike"
import conversion_ms_minute from "@/utils/conversion_ms_minute"
import { useMainContext } from "@/utils/context"
import { useState, useEffect } from "react"

export default function Playlist({album_id, type, tracks, img_url}){

    const {likes, setLikes, player, setPlayer} = useMainContext()

    const [audio, setAudio] = useState(null) 

    useEffect(() => {

        setAudio(new Audio('/sample.mp3'))

    }, [])
    
    useEffect(() => {

        if(audio !== null){
            player.isPlaying ? audio.play() : audio.pause()
        }

    }, [player.isPlaying])

    useEffect(() => {

        if(audio !== null){
            return()=>{

                audio.pause()
    
                setPlayer({
                    ...player,
                    isPlaying: false
                })
            }
        }

    }, [audio])


    if(typeof tracks === 'undefined' || tracks === null){
        return
    }

    const items = tracks.items
    

    if(type === 'album'){

        return(
            <div >
                {items.map(item => {
    
                    const {name, id, artists, track_number, duration_ms } = item
    
                    return(
                        
                        <div key={id} className="playlist" id={track_number} onMouseOver={(e)=>{Like_Btn_on(e), Player_Btn_on(e, album_id, track_number, player)}} onMouseLeave={(e)=>{Like_Btn_off(e), Player_Btn_off(e, album_id, track_number, player)}}>
                            
                            <Image src={(player.isPlaying === true && player.track_num === track_number) ? '/pause_dark_green.svg' : '/play_green.svg'} width={40} height={40} alt="play button" className="play_btn" onClick={(e) => mock_play_pause(e, album_id, track_number, name, player, setPlayer)}></Image>
                            <span className="track_num">{track_number}</span>
                            
                            <div className="list_container">
                                
                                <div className="title_artist">
                                    <Link key={id} href={`/track/${id}`}>
                                    <div id="track_name">{name}</div>
                                    </Link>
    
                                    <div className="track_artist">
                                        {artists.map( (art, idx) => {

                                            const{type, id} = art
                                           
                                            if(idx < artists.length -1){

                                                return <Link key={id} href={`/${type}/${id}`}>
                                                        <span key={id}>{art.name},</span>
                                                        </Link>
                                            }else{

                                                return <Link key={id} href={`/${type}/${id}`}>
                                                        <span key={id}>{art.name}</span>
                                                        </Link>
                                            }
                                        
                                        })}
                                    </div>
                                </div>
                                
                   
                                <div className="duration">
                                    <div id="like_playlist_track">
                                        <Image src={likes.filter(like => like.id === id).length === 0 ? '/heart_empty.svg' : '/heart_filled.svg'} className="imgage" width={25} height={25} alt="Like button" 
                                        onClick={(e)=>{e.stopPropagation(), toggleLike('track', name, id, img_url, likes, setLikes)}}/>
                                    </div>
                                    <span className="track_duration" >{conversion_ms_minute(duration_ms)}</span>
                                </div>
    
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        )
    }

    if(type === 'playlist'){

        return(
            <div>
                {items.map((item, idx) => {
    
                    const {track} = item
                    const track_number = idx + 1
                    const artists = track.artists
                    const genres = artists.genres
                    const id = track.id
                    const url = track.album.external_urls.spotify
                    const name = track.album.name
                    const duration_ms = track.duration_ms
    
                    return(

                        <div key={id} className="playlist" id={track_number} onMouseOver={(e)=>{Like_Btn_on(e), Player_Btn_on(e, album_id, track_number, player)}} onMouseLeave={(e)=>{Like_Btn_off(e), Player_Btn_off(e, album_id, track_number, player)}}>
                            
                            <Image src={(player.isPlaying === true && player.track_num === track_number) ? '/pause_dark_green.svg' : '/play_green.svg'} width={40} height={40} alt="play button" className="play_btn" onClick={(e) => mock_play_pause(e, album_id, track_number, name, player, setPlayer)}></Image>

                            <span className="track_num">{track_number}</span>                            
                            
                            <div className="list_container">
                                <div className="title_artist">
                                    <Link href={`/track/${id}`} >
                                        <div id="track_name">{name}</div>
                                    </Link>
    
                                    <div className="track_artist">
                                    {artists.map( (art, idx) => {

                                    const{type, id} = art

                                    if(idx < artists.length -1){

                                        return <Link key={id} href={`/${type}/${id}`}>
                                                <span key={id}>{art.name},</span>
                                                </Link>
                                    }else{

                                        return <Link key={id} href={`/${type}/${id}`}>
                                                <span key={id}>{art.name}</span>
                                                </Link>
                                    }

                                    })}
                                    </div>
                                </div>
                   
                                <div className="duration">
                                    <div id="like_playlist_track">
                                        <Image src={likes.filter(like => like.id === id).length === 0 ? '/heart_empty.svg' : '/heart_filled.svg'} width={25} height={25} alt="Like button" 
                                        onClick={(e)=>{e.stopPropagation(), toggleLike('track', name, id, img_url, likes, setLikes)}}/>
                                    </div>
                                    <span className="track_duration">{conversion_ms_minute(duration_ms)}</span>
                                </div>
    
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


}

