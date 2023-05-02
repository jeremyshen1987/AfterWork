export default async function newRelease(req, res){

    const body = JSON.parse(req.body)
    const {token} = body


    const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
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