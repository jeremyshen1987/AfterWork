import { useState } from "react";
import Button_Round from "./Components/Button_Round";
import changeCategories from "@/utils/changeCategories";

export default function Search({categories, selectCategories, setSelectCategories, handleChange, handleSearch}){

    

    return(
        <>

            <div className="flex center flex_width">

                <select name="type" id="search_type" className="round_btn" onClick={handleChange}>
                    <option value='show'>Show</option>
                    <option value='album'>Album</option>
                    <option value='artist'>Artist</option>
                </select>

                <input name="query" onChange={handleChange} className="flex1 round_btn"></input>
            </div>


            {/* available categories based on search result */}
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