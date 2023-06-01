export default async function search(token, searchObj, setSearchResult){

    try{

        const {query, type} = searchObj
        const encoded_query = encodeURI(query)
    
    
        let types;
        
        if(type === 'album' || type === 'artist'){
            types = type
        }else{
            types = 'album,artist,track,playlist'
        }
    
        const response = await fetch(`/api/search/${encoded_query}&type=${types}&limit=8`, {
            method: 'POST',
            body: JSON.stringify({
                token: token,
    
            })
        })
    
    
        const results = await response.json();
    
        setSearchResult({
            isReady: true,
            results:results
        })

    } catch(err){
        console.log(err)
    }



    
}