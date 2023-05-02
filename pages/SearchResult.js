import { useState } from "react"
import Cards_Group from "./Components/Cards_Group"


export default function SearchResult({results, selectCategories}){

    // results: {albums, artists, tracks, playlists}

    const types = selectCategories.length === 0 ? Object.keys(results)
                                                : selectCategories


    return (types.map((type, idx)=> {
        
        
           
        const items = results[type].items


        return(
            <>
            <Cards_Group key={idx} type={type} items={items}/>
            </>
            
        )

        
    }))

    
 

}
