import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import Search from './Components/Search'
import SearchResult from "./Components/SearchResult";
import New_Release from "./Components/New_Release";

import { useMainContext } from "@/utils/context";

import search from '../utils/search'
import validate_token from "@/utils/validate_token";
import handleChange from "@/utils/handleChange";

export default function App(){

    const {searchResult, setSearchResult, searchObj, setSearchObj} = useMainContext()

    const [selectCategories,setSelectCategories]= useState([])  

    const categories = Object.keys(searchResult)


    useEffect(()=>{

        if(searchObj.query === ''){
            setSearchResult({})
            return;
        }

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
       
            <Search categories={categories} selectCategories={selectCategories} setSelectCategories={setSelectCategories} 
                    handleChange={(e)=>handleChange(e, searchObj, setSearchObj)} />

            <SearchResult results={searchResult} selectCategories={selectCategories}/>
            
            
            {searchObj.query === '' ? <New_Release /> : null}

        </>
    )
}





