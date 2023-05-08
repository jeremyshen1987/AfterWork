import { useState,useEffect } from "react"

import Cards_Group from "./Cards_Group"

import validate_token from "@/utils/validate_token"
import new_release from "@/utils/newRelease"


export default function New_Release() {

    const [newRelease, setNewRelease] = useState([])


    useEffect(()=>{


        (async function fetchData(){

            try{
                const data = await validate_token(new_release)
                const items = data.items
                setNewRelease(items)

            }catch(err){
                console.log('error: ', err)
            }

        })()
        
    }, [])


    return(
        // <div className="main_container">
            <Cards_Group key='new_release' type='New Release' items={newRelease}/>
        // </div>
    )


}