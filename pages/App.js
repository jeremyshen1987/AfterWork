import Link from "next/link";
import { useState, useEffect } from "react";
import Search from './Components/Search'
import SearchResult from "./Components/SearchResult";
import New_Release from "./Components/New_Release";

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
            setSearchResult({})
            return;
        }
        console.log('effect query', searchObj.query)

        const timeout = setTimeout(() => {
            validate_token(search, searchObj, setSearchResult)
            const overlay = document.getElementById('overlay')
            overlay.style.display = 'none'
        }, 500);

        return ()=>{clearTimeout(timeout)}
    
    }, [searchObj.query])
   

    if (typeof window !== 'undefined'){
        validate_token()
    }


    return(
        <>
       
        <div className="main_container">
            <Search categories={categories} selectCategories={selectCategories} setSelectCategories={setSelectCategories} 
                    handleChange={(e)=>handleChange(e, searchObj, setSearchObj)} />

            <SearchResult results={searchResult} selectCategories={selectCategories}/>
            
            {searchObj.query === '' ? <New_Release /> : null}

        </div>
        </>
    )
}






