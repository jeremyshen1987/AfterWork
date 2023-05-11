export default async function newRelease(req, res){

    const body = JSON.parse(req.body)
    const {token, type, id} = body



    const response = await fetch('https://api.spotify.com/v1/browse/new-releases?limit=10', {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    });

    const results = await response.json()

    res.json(results)

}