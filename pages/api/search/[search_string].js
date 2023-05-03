export default async function search(req, res){

    const body = JSON.parse(req.body)
    const {token} = body

    const {search_string} = req.query
    
    const response = await fetch(`https://api.spotify.com/v1/search?q=${search_string}`, {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`
            
        }
    });

    const results = await response.json()

    res.json({
        results
    })

    

}