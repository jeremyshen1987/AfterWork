import Cards_Group from './Cards_Group'
import upperCase from "@/utils/upperCase"

export default function Artist_Page({data}){


    if(typeof data === 'undefined' || data === null){
        return
    }

    try{

        console.log('artist data', data)
        const {artist_info, artist_album, related_artist} = data

        const {external_urls, images, followers, id, name, type} = artist_info

        return(
            <>
            <div key={id} className="album_overview">
    
                <img src={images[0].url} className="album_img_small round_img"></img>
    
                <div className="album_detail">
                    <p className="album_type">{upperCase(type)}</p>
                    <h1>{name}</h1>
                    
    
                        
                    <div>
                        <span>{followers.total} Likes</span>
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