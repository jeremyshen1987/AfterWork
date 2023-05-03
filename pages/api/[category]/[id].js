
export default async function getItems(req, res){

    console.log('getItem route')
    
    const body = JSON.parse(req.body)
    const {token} = body

    const {category, id} = req.query

    console.log('cat and id: ', category, id)


    const response = await fetch(`https://api.spotify.com/v1/${category}s/${id}`, {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`
            
        }
    });

    const result = await response.json()


    res.json(result)


}