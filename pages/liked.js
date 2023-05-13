import Link from "next/link";
import Image from "next/image";
import Loading from "./Components/Loading";
import { useMainContext } from "@/utils/context";
import sortLike from "@/utils/sortLikes";
import upperCase from "@/utils/upperCase";
import { remove_like } from "@/utils/remove_like";


export default function Liked(){

    const {likes, setLikes}= useMainContext()

    const items = likes.filter(like => like.id !== null)

    const sortedArr = sortLike(items, 'type')
    const typeArr = Object.keys(sortedArr)

    console.log(sortedArr)

    if(items.length === 0){
        return(
            <>
                <Loading words="No liked item, yet"/>
            </>
        )
    }

    return(
            <div className="container_like_items">   
                {typeArr.map(type => {
                    return(
                        <>
                            <h1 key={type}>{upperCase(type)}</h1>
                    
                            {sortedArr[type].map((i, idx) => {

                                const id = i.id
                                const url = `/${type}/${id}`

                                return(
                                    

                                    <div key={id} className='wrapper_like_item relative'>

                                        <img key={window.crypto.randomUUID()} src={i.img_url} className='img_tiny'></img>
                                        <Link href={url} key={window.crypto.randomUUID()} className="flex1">
                                            <div key={window.crypto.randomUUID()} className='like_item_text'>

                                                <p className='grey'>{upperCase(type)}</p>   
                                                <p className='album_link_text'>{i.name}</p>  

                                            </div>
                                        </Link>
                                        <span key={window.crypto.randomUUID()} className="clear_like" onClick={()=>{remove_like(id, setLikes)}}><Image src='/cancel_red.svg' width={30} height={30} alt="cancel" /></span>

                                    </div>

                                    
                                )
                            })}
                            
                        </>
                    )
                })}
           </div>
    )

}

