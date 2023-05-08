import Link from 'next/link'
import { useMainContext } from '@/utils/context'
import Cards_Group from './Cards_Group'
import upperCase from "@/utils/upperCase"
import toggleLike from '@/utils/toggleLike'

export default function Track_Page({data}){

    const {likes, setLikes} = useMainContext()

    if(typeof data === 'undefined' || data === null){
        return
    }

    try{

        console.log('track data', data)

        const {album, id, artists, name, type, duration_ms} = data
        const {images, total_tracks, release_date} = album
        const img_url = images[0].url

        return(
            <>
            

            <div key={id} className="album_overview">

                <img src={img_url} className="album_img_small"></img>
        
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
                        
                    <div className='like_song'>
                        <span>{(new Date(release_date)).getFullYear()}</span>
                        <span style={{margin: '0 5px'}}>•</span>
                        <span>{total_tracks} songs</span>
                        <button onClick={()=>toggleLike(type, name, id, img_url, likes, setLikes)} className="round_btn like_btn">
                                {likes.filter(like => like.id === id).length > 0 ? 'Unlike' : 'Like this album'}
                        </button>
                    </div>
                    
                </div>



    
            </div>
            
            <div className='track_album_container '>
                <img src={images[0].url} className='img_tiny'></img>
                <div className='track_album_text'>
                    <p className='grey'>From the album</p>
                    <Link href={`/album/${album.id}`}>
                        <p className='album_link_text'>{album.name}</p>
                    </Link>
                </div>
            </div>

            </>

        )



    } catch(err){
        console.log(err)
    }

    

}