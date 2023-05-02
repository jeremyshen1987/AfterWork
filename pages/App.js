import { useState, useEffect } from "react";
import Search from './Search'
import SearchResult from "./SearchResult";
import New_Release from "./New_Release";

import search from '../utils/search'
import validate_token from "@/utils/validate_token";
import handleChange from "@/utils/handleChange";

export default function App(){

    const [searchObj, setSearchObj] = useState({
        type: 'show',
        query: ''
    })

    const [searchResult, setSearchResult] = useState({})
    const [selectCategories,setSelectCategories]= useState([])  

    const categories = Object.keys(searchResult)


    useEffect(()=>{

        if(searchObj.query === ''){
            return;
        }
        console.log('effect query', searchObj.query)

        const timeout = setTimeout(() => {
            validate_token(search, searchObj, setSearchResult)
        }, 500);

        return ()=>{clearTimeout(timeout)}
    
    }, [searchObj.query])



    if (typeof window !== 'undefined'){
        validate_token()
    }


    return(
        <>
        <ul className="main_tabs">
            <li onClick={validate_token}>Home</li>
            <li onClick={()=>validate_token(new_release)}>Search</li>
            <li >Library</li>
        </ul>
       
        <div className="main_container">
            <Search categories={categories} selectCategories={selectCategories} setSelectCategories={setSelectCategories} 
                    handleChange={(e)=>handleChange(e, searchObj, setSearchObj)} />

            <SearchResult results={searchResult} selectCategories={selectCategories}/>

            <New_Release />
            {/* {searchObj.query === '' ? <New_Release /> : null} */}

        </div>
        </>
    )
}






