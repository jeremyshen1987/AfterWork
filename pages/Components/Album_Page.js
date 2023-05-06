import Link from "next/link"
import Playlist from "./Album_Playlist"
import upperCase from "@/utils/upperCase"

export default function Album_Page({data}){

    try{
        const {artists, external_urls, images, release_date, name, tracks, total_tracks, type, id} = data

        return(
            <>
                <div key={id} className="album_overview">

                    <img src={images[0].url} className="album_img_small"></img>

                    <div className="album_detail">
                        <p className="album_type">{upperCase(type)}</p>
                        <h1>{name}</h1>
                        
                        {artists.map(artist => {
                            return(
                                <div key={artist.id}>

                                    {/* to do: */}
                                    {/* <img src="" className="img_mini"></img> */}
                                    
                                    <Link href={`/${artist.type}/${artist.id}`} style={{ textDecoration: 'none', color: 'white' }}><p className="track_artist">{artist.name}</p></Link>
                                </div>
                            )
                        })}
                            
                        <div>
                            
                            <span>{(new Date(release_date)).getFullYear()}</span>
                            <span style={{margin: '0 5px'}}>•</span>
                            <span>{total_tracks} songs</span>
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