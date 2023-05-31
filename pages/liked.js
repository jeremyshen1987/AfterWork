import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMainContext } from "@/utils/context";
import sortLike from "@/utils/sortLikes";
import upperCase from "@/utils/upperCase";
import recommendations from "@/utils/recommendations";
import { remove_like } from "@/utils/remove_like";
import validate_token from "@/utils/validate_token";


export default function Liked(){

    const router = useRouter()

    const {likes, setLikes, recommended, setRecommended}= useMainContext()

    const sortedArr = sortLike(likes, 'type')
    const typeArr = Object.keys(sortedArr)


    if(likes.length === 0){
        return(
            <>
                <h1 className="central_display">No liked items</h1>
            </>
        )
    }

    let banner = null
    if(likes.length > 0 && typeArr.includes('track') === false && typeArr.includes('artist') === false){
       
        banner = <div className="notification">Like Track or Artist to get recommendations!</div>
           
    }

    return(
        <>
        {banner}
        <div className="container_like_items">   
            {typeArr.map(type => {
                return(
                    <>
                        <h1 key={window.crypto.randomUUID()}>{upperCase(type)}</h1>
                
                        {sortedArr[type].map( i=> {

                            const id = i.id
                            const name = i.name
                            const url = `/${type}/${id}`
                            
                            const recommend_btn = id === recommended.id ? <button className="round_btn" disabled>Rcmd'ed!</button>
                                                                        : <button className="round_btn" 
                                                                            onClick={(e) => {e.preventDefault(),
                                                                                            validate_token(recommendations, name, type, id, setRecommended),
                                                                                            router.push('/')}}>
                                                                            Rcmd
                                                                        </button>

                            return(
                                

                                <div key={id} className='wrapper_like_item relative'>

                                    <img key={window.crypto.randomUUID()} src={i.img_url} className='img_tiny'></img>
                                    <Link href={url} key={window.crypto.randomUUID()} className="flex1">
                                        <div key={window.crypto.randomUUID()} className='like_item_text'>

                                            <p className='grey'>{upperCase(type)}</p>   
                                            <p className='album_link_text'>{name}</p>  

                                        </div>
                                    </Link>
                                    <span key={window.crypto.randomUUID()} className="clear_like" onClick={()=>{remove_like(id, setLikes)}}><Image src='/cancel_red.svg' width={30} height={30} alt="cancel" /></span>

                                
                                    {type === 'artist' || type === 'track' ? recommend_btn : null}

                                </div>

                                
                            )
                        })}
                        
                    </>
                )
            })}
        </div>
        </>
    )

}


  

