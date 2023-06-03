import { useEffect } from 'react'
import Image from 'next/image'
import Cards_Group from './Cards_Group'
import upperCase from "@/utils/upperCase"
import toggleLike from '@/utils/toggleLike'
import setHistory from '@/utils/setHistory'
import setColor from '@/utils/setColor'
import { useMainContext } from "@/utils/context"

export default function Artist_Page({data}){

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

        const {artist_info, artist_album, related_artist} = data
        const {images, followers, id, name, type} = artist_info
        const img_url = images[0].url

        console.log('artist info', artist_info)

        setHistory(type, name, id, img_url)
        setColor(img_url, "album_detail")

        return(
            <>
            <div key={id} className="album_overview">
    
                <img src={img_url} className="album_img_small round_img"></img>
    
                <div className="album_detail" id='album_detail'>
                    <p className="album_type">{upperCase(type)}</p>
                    <h1>{name}</h1>
                    
    
                        
                    <div className='like_artist'>
                        <span className='margin_right'>{followers.total} Likes</span>


                        <span className="options_album_playlist">
                                <Image src='/option.svg' width={25} height={25} alt="Options" title="Options" className="options_img"></Image>
                                <a className="to_spotify" href={artist_info.external_urls.spotify} target="_blank">View in Spotify</a>
                        </span>

                        <button onClick={()=>toggleLike(type, name, id, img_url, likes, setLikes)} className="round_btn like_artist_btn">
                                {likes.filter(like => like.id === id).length > 0 ? 'Unlike' : 'Like this artist'}
                        </button>
                    </div>
                    
                </div>
    
            </div>

            <Cards_Group key='artist_album' type='Album' items={artist_album.items}/>
            <Cards_Group key='related_artist' type='Artist' items={related_artist.artists}/>
        </>
        )

    } catch(err){
        console.log(err)
    }

    

}