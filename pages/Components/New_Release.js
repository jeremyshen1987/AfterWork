import { useState,useEffect } from "react"
import { useMainContext } from "@/utils/context"
import Loading from "./Loading"
import Cards_Group from "./Cards_Group"

import validate_token from "@/utils/validate_token"
import new_release from "@/utils/new_release"



export default function New_Release() {

    const {newRelease, setNewRelease} = useMainContext()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(()=>{


        (async function fetchData(){

            try{

                const data = await validate_token(new_release)

                // console.log('new release data', data)
                if(data.error){
                    
                    setLoading(false)
                    
                    throw new Error(data.error)
                }

                const items = data.items

                setError('')
                setLoading(false)
                setNewRelease(items)

            }catch(err){
                setError(err.message)
            }

        })()
        
    }, [])


    if(loading){
        return(
            <Loading title='New Release' name='Loading...' type='Please Wait...' img_url='/reload_black.svg'/>
        )
    }

    if(error !== ''){
        return <h1 className="error">Error: {error}</h1>
    }

    return(

        <Cards_Group type='New Release' items={newRelease}/>
    )

}