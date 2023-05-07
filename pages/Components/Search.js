import { useState, useEffect } from "react";
import { useMainContext } from "@/utils/context";

import Button_Round from "./Button_Round";
import changeCategories from "@/utils/changeCategories";
import overlay_on from "@/utils/overlay_on";
import Suggestion_Panel from "./Suggestion_Panel";
import handleClickEvent from "@/utils/handleClickEvent";

export default function Search({categories, selectCategories, setSelectCategories, handleChange}){


    const {searchObj} = useMainContext()

    // avoid useRef inside useEffect since it return undefined sometime
    useEffect(()=>{

        const overlay = document.getElementById('overlay')
        const panel = document.getElementById('panel')

        console.log('effect: ', overlay.current)
        window.addEventListener('click', (e)=>handleClickEvent(e, overlay, panel))
        return()=>{window.removeEventListener('click', handleClickEvent)}
    }, [])

    if(typeof categories === 'undefined' || categories === null){
        return
    }


    return(
        <>
            <div className="flex center flex_width">
                <input name="query" value={searchObj.query} onChange={handleChange} onFocus={(e)=>overlay_on(e, overlay, panel)}  maxLength="24" type="text" placeholder="Search Albums, Songs, Artists, Playlists..." className="flex1 round_btn search_bar" />
            </div>

            <Suggestion_Panel/>
            
            <div id="overlay"></div>

            {/* available categories based on search result  */}
            <div className="categories_btn flex gap_8 flex_width">

                {categories.length > 0 && <Button_Round key='all' fn={(e)=>changeCategories(e, selectCategories, setSelectCategories, 'all')}>All</Button_Round>} 

                {categories.map((cat, idx) => {

                    return(
                        <Button_Round key={idx} fn={(e)=>changeCategories(e, selectCategories, setSelectCategories, cat)}>{cat}</Button_Round>
                    )
                })}
                
            </div>
        </>
    )
}