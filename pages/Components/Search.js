import { useState, useRef } from "react";
import Button_Round from "./Button_Round";
import changeCategories from "@/utils/changeCategories";
import overlay_on from "@/utils/overlay_on";
import overlay_off from "@/utils/overlay_off";
import Suggestion_Panel from "./Suggestion_Panel";

export default function Search({categories, selectCategories, setSelectCategories, handleChange, handleSearch}){

    const overlay = useRef()
    const panel = useRef()

    return(
        <>
            <div className="flex center flex_width">
                <input name="query" onChange={handleChange} onFocus={(e)=>overlay_on(e, overlay, panel)} onBlur={(e)=>overlay_off(e, overlay, panel)} maxLength="24" type="text" placeholder="Search Albums, Songs, Artists, Playlists..." className="flex1 round_btn" />
            </div>

            <Suggestion_Panel ref={panel}/>
            
            <div ref={overlay} id="overlay"></div>

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