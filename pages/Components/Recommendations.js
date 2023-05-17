import { useState, useEffect } from "react"
import Cards_Group from "./Cards_Group"
import recommendations from "@/utils/recommendations"
import validate_token from "@/utils/validate_token"
import { useMainContext } from "@/utils/context"


export default function Recommendations(){

    const {likes, setLikes, recommended, setRecommended}= useMainContext()
    const [mounted, setMounted] = useState(false)

    if(Object.keys(recommended).length === 0){
        return
    }

    const {name, results} = recommended



    console.log('recommend comp', results.tracks)

    if(typeof results !== 'undefined'){
        return  <List name={name} results={results}/>
    }
 
}

function List({name, results}){

    return(
        <>
        <Cards_Group type='Tracks' items={results.tracks} title={`Recommendations for you since you liked: ${name}`}/>
        </>
        
    )
    

}