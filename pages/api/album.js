export default async function track(req, res){

    const body = JSON.parse(req.body)
    const {token} = body

    const response = await fetch("https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl", {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`
            
        }
    });

    const result = await response.json()

    res.json({
        result
    })

}