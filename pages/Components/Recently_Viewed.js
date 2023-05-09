import Link from "next/link"
import { useEffect, useState } from "react"

export default function Recently_Viewed(){

    const [data, setData] = useState([])

    useEffect(()=>{

        const history_list = JSON.parse(localStorage.getItem('history_after_work'))

        if(history_list === null || !Array.isArray(history_list)){
            return
        }

        setData(history_list)

    }, [])

    if(data.length > 0){

        return(

            <div className="wrapper_card_group">
                <div className="category_name">
                    Recently Viewed
                </div>
                <div className="wrapper_card">

                    {data.map(li => {

                        const {type, name, id, img_url} = li
                        return(

                            <Link href={`/${type}/${id}`}>
                                <div key={id} className="card_overview">
                                    <img src={img_url} className={type === 'Artists' || type === 'Artist' ? 'round_img img_small' : 'img_small'}></img>
                        
                                    <div className="card_overview_text">
                                        <p> {name}</p>
                                        <p>{type}</p>
                                    </div>
                                </div>
                            </Link>
                        
                        )
                        
                    })}

                </div>
            </div>
        )
    }

}


