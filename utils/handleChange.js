import search from "./search"

export default function handleChange(e, searchObj ,setSearchObj){
    setSearchObj({
        ...searchObj,
        [e.target.name]: e.target.value
    })
    console.log('search obj', searchObj)
}


// handleSearch={()=>validate_token(search, searchObj, setSearchResult)}