
export default async function recommendations(req, res){

    const body = JSON.parse(req.body)
    const {token, type, id} = body

    const artists = '71jzN72g8qWMCMkWC5p1Z0'
    const genres = 'classical'
    const tracks = '6mIuQuKlOK7l6HkQnHfvpQ'

    // const {search_string} = req.query
    // seed_artists=${artists}&seed_genres=${genres}&seed_tracks=${tracks}
    
    const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_${type}s=${id}`, {
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