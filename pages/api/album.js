export default async function track(req, res){

    const body = JSON.parse(req.body)
    const {token} = body

    let url;
    
    switch(type){

        case 'album':
            url = `https://api.spotify.com/v1/albums/${id}`
            break;
        case 'artist':
            url = `https://api.spotify.com/v1/artists/${id}`
            break;
        case 'playlist':
            url = `https://api.spotify.com/v1/playlists/${id}`
            break;
        
        case 'track':
            url = `https://api.spotify.com/v1/tracks/${id}`
            break;
    }

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