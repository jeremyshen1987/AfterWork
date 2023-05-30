import { useEffect } from "react"
import Cards_Group from "./Cards_Group"
import recommendations from "@/utils/recommendations"
import validate_token from "@/utils/validate_token"
import { useMainContext } from "@/utils/context"


export default function Recommendations(){

    const {likes, recommended, setRecommended}= useMainContext()

    useEffect(() => {

        const keys = likes.map(like => like.type)

        if(!keys.includes('track') && !keys.includes('artist') ){
            setRecommended({})
            return
        }

        if(typeof recommended.name !== "undefined"){
            return
        }

        // recommend the first eligible items in liked page
        const key = keys.includes('track') ? 'track' : 'artist'
        const item = likes.filter(like => like.type === key)

        const {name, type, id} = item[0]

        const trigger_recommend = setTimeout(() => {
            validate_token(recommendations, name, type, id, setRecommended)
        }, 200);
        
        return () => clearInterval(trigger_recommend)

    }, [])


    if(Object.keys(recommended).length === 0){
        return
    }

    
    const {name, results} = recommended

    return(
        <>
        <Cards_Group type='Tracks' items={results.tracks} title={`Recommendations for you since you liked: ${name}`}/>
        </>
        
    )
}