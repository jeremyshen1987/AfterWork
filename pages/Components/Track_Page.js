import Link from 'next/link'
import Cards_Group from './Cards_Group'
import upperCase from "@/utils/upperCase"

export default function Track_Page({data}){


    if(typeof data === 'undefined' || data === null){
        return
    }

    try{

        console.log('track data', data)

        const {album, id, artists, name, type, duration_ms} = data
        const {images, total_tracks, release_date} = album

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