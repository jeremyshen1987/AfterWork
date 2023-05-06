import { useState } from "react"
import Cards_Group from "./Cards_Group"
import upperCase from "@/utils/upperCase"


export default function SearchResult({results, selectCategories}){

    // results: {albums, artists, tracks, playlists}

    try{
        const types = selectCategories.length === 0 ? Object.keys(results)
        : selectCategories


        return (types.map((type, idx)=> {



            const items = results[type].items


            return(
            <>
            <Cards_Group key={idx} type={upperCase(type)} items={items}/>
            </>

            )


        }))

    } catch(err){

        console.log(err)
    }


    
 

}
