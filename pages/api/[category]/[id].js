
export default async function getItems(req, res){

    console.log('getItem route')
    
    const body = JSON.parse(req.body)
    const {token} = body

    const {category, id} = req.query

    


    if(category === 'artist'){

        console.log('cat and id: ', category, id)

        const artist_album =  fetch(`https://api.spotify.com/v1/${category}s/${id}/albums`, {
            method: 'GET',
            headers: { 
                'Authorization': `Bearer ${token}`
                
            }
        });

        const related_artist =  fetch(`https://api.spotify.com/v1/${category}s/${id}/related-artists`, {
            method: 'GET',
            headers: { 
                'Authorization': `Bearer ${token}`
                
            }
        });

        // return nested objects
        const response = Promise.all([artist_album, related_artist])
                        .then(results => Promise.all(results.map( r => r.json())))
                        .then(results => {
                            const res1 = results[0]
                            const res2 = results[1]
                            const data = {
                                artist_album: {...res1},
                                related_artist: {...res2}
                            }
                            res.json(data)
                        }).catch(err => res.json(err))

        return
    }


    const response = await fetch(`https://api.spotify.com/v1/${category}s/${id}`, {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`
            
        }
    });

    let result = await response.json()



    res.json(result)
    
}