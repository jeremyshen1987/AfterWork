import { useState, useEffect } from "react";
import Image from "next/image";
import Suggestion_Panel from "./Suggestion_Panel";

import { useMainContext } from "@/utils/context";
import Button_Round from "./Button_Round";
import changeCategories from "@/utils/changeCategories";
import overlay_on from "@/utils/overlay_on";
import overlay_auto_shut from "@/utils/overlay_auto_shut";

import handleClickEvent from "@/utils/handleClickEvent";

export default function Search({categories = [], selectCategories, setSelectCategories, handleChange}){


    const {searchObj, setSearchObj, setSearchResult} = useMainContext()


    useEffect(()=>{

        window.addEventListener('click', handleClickEvent)

        return ()=>{window.removeEventListener('click', handleClickEvent)}
    }, [])


    return(
        <>
            <div className="flex center flex_width search_bar relative">
                <input  value={searchObj.query} onChange={handleChange} onFocus={(e)=>overlay_on(e, overlay, panel)}  className="flex1 round_btn search_do_not_touch" id="search" name="query" maxLength="24"  placeholder="Search Albums, Songs, Artists, Playlists..."  />
                {searchObj.query === '' ? null : <span className="clear_search" onClick={()=>{setSearchObj({...searchObj, query: ''}), setSearchResult({})}}><Image src='/cancel.svg' width={30} height={30} alt="cancel" /></span>}
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