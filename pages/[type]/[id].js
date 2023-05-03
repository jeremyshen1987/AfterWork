import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Album_detail from "../Components/Album_detail";
import validate_token from "@/utils/validate_token";
import search_by_id from "@/utils/search_by_id";

export default function Album_Page(){
    
    const router = useRouter()
    const {type, id} = router.query

    const [data, setData] = useState({})


    useEffect(()=>{

        if(router.isReady){
            

            (async function getItems(){
            
                console.log('effect type and id: ', type, id)
                const response = await validate_token(search_by_id, type, id)
                setData(response)
                console.log('data: ', response)
            })()

        }
    }, [type])


    if(type === 'album'){

        

        return(

            <div className="main_container">
                <Album_detail data={data}/>
            </div>
    
        )
    }


}