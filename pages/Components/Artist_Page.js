import upperCase from "@/utils/upperCase"

export default function Artist_Page({data}){

    try{

        console.log('artist data', data)
        // const {external_urls, images, followers, id, name, type} = data

        // return(
        //     <>
        //     <div key={id} className="album_overview">
    
        //         <img src={images[0].url} className="album_img_small"></img>
    
        //         <div className="album_detail">
        //             <p className="album_type">{upperCase(type)}</p>
        //             <h1>{name}</h1>
                    
    
                        
        //             <div>
        //                 <span>{followers.total} Likes</span>
        //             </div>
                    
        //         </div>
    
        //     </div>
        // </>
        // )

    } catch(err){
        console.log(err)
    }

    

}