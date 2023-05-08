import Link from "next/link";
import Loading from "./Components/Loading";
import { useMainContext } from "@/utils/context";
import sortLike from "@/utils/sortLikes";
import upperCase from "@/utils/upperCase";


export default function Liked(){

    const {likes, setLikes}= useMainContext()

    const items = likes.filter(like => like.id !== null)

    const sortedArr = sortLike(items, 'type')
    const typeArr = Object.keys(sortedArr)

    console.log(sortedArr)

    if(items.length === 0){
        return(
            <Loading words="No liked item, yet"/>
        )
    }

    return(
            <div className="container_like_items">   
                {typeArr.map(type => {
                    return(
                        <>
                            <h1>{upperCase(type)}</h1>
                    
                            {sortedArr[type].map((i, idx) => {

                                const id = i.id
                                const url = `/${type}/${id}`

                                return(
                                    

                                        <div key={idx} className='wrapper_like_item relative'>

                                            <img src={i.img_url} className='img_tiny'></img>
                                            <Link href={url} key={idx} className="flex1">
                                                <div className='like_item_text'>

                                                    <p className='grey'>{upperCase(type)}</p>   
                                                    <p className='album_link_text'>{i.name}</p>  

                                                </div>
                                            </Link>
                                            <span className="clear_like" onClick={()=>{setLikes(items.filter(i => i.id !== id))}}>\uD83D\uDDD9</span>

                                        </div>

                                    
                                )
                            })}
                            
                        </>
                    )
                })}
           </div>
    )

}

