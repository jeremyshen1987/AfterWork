import { useState, useEffect } from "react"
import Cards_Group from "./Cards_Group"
import recommendations from "@/utils/recommendations"
import validate_token from "@/utils/validate_token"
import { useMainContext } from "@/utils/context"


export default function Recommendations(){

    const {likes, setLikes, recommended, setRecommended}= useMainContext()

    // if an artist or track is Liked, auto select first item to make recommendations
    const keys = likes.map(like => like.type)

    if((keys.includes('track') || keys.includes('artist')) && typeof recommended.id === 'undefined'){
        const key = keys.includes('track') ? 'track' : 'artist'
        const item = likes.filter(like => like.type === key)

        const {name, type, id} = item[0]
        validate_token(recommendations, name, type, id, setRecommended)
    }

    if(Object.keys(recommended).length === 0){
        return
    }

    
    const {name, results} = recommended

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