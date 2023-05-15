import { useState,useEffect } from "react"
import { useMainContext } from "@/utils/context"
import Loading from "./Loading"
import Cards_Group from "./Cards_Group"

import validate_token from "@/utils/validate_token"
import new_release from "@/utils/newRelease"



export default function New_Release() {

    const {newRelease, setNewRelease} = useMainContext()
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{


        (async function fetchData(){

            try{
                const data = await validate_token(new_release)
                const items = data.items
                setMounted(true)
                setNewRelease(items)

            }catch(err){
                console.log('error: ', err)
            }

        })()
        
    }, [])



    if(newRelease.length === 0){
        return(
            <Loading title='New Release' name='Loading...' type='Please Wait...' img_url='/reload_black.svg'/>
        )
    }




    return(

        mounted && <Cards_Group type='New Release' items={newRelease}/>
    )

    


}