import Link from "next/link"
import conversion_ms_minute from "@/utils/conversion_ms_minute"

export default function Playlist({type, tracks}){

    if(typeof tracks === 'undefined' || tracks === null){
        return
    }
    
    const items = tracks.items

    if(type === 'album'){

        return(
            <div>
                {items.map(item => {
    
                    const {name, id, artists, track_number, duration_ms } = item
    
                    return(
                        <Link key={id} href={`/track/${id}`}>
                        <div key={id} className="playlist">
                            <span className="track_num">{track_number}</span>
                            
                            <div className="list_container">
                                <div className="title_artist">
                                    <div>{name}</div>
    
                                    <div className="track_artist">
                                        {artists.map( (art, idx) => {
                                           
                                            if(idx < artists.length -1){
                                                return<span key={idx}>{art.name},</span>
                                            }else{
                                                return <span key={idx}>{art.name}</span>
                                            }
                                        
                                        })}
                                    </div>
                                </div>
                   
                                <div className="duration">
                                    {conversion_ms_minute(duration_ms)}
                                </div>
    
                            </div>
                        </div>
                        </Link>
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
                    const url = track.album.external_urls.spotify
                    const name = track.album.name
                    const duration_ms = track.duration_ms
    
                    return(
                        <Link href={url} key={idx}>
                        <div className="playlist">
                            <span className="track_num">{track_number}</span>
                            
                            <div className="list_container">
                                <div className="title_artist">
                                    <div>{name}</div>
    
                                    <div className="track_artist">
                                        {artists.map( (art, idx) => {
                                           
                                            if(idx < artists.length -1){
                                                return<span key={idx}>{art.name},</span>
                                            }else{
                                                return <span key={idx}>{art.name}</span>
                                            }
                                        
                                        })}
                                    </div>
                                </div>
                   
                                <div className="duration">
                                    {conversion_ms_minute(duration_ms)}
                                </div>
    
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        )
    }


}