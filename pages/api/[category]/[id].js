
export default async function getItems(req, res){
    
    const body = JSON.parse(req.body)
    const {token} = body

    const {category, id} = req.query

    if(category === 'artist'){


        const artist_info = await fetch(`https://api.spotify.com/v1/${category}s/${id}`, {
            method: 'GET',
            headers: { 
                'Authorization': `Bearer ${token}`
                
            }
        });

        const artist_album =  fetch(`https://api.spotify.com/v1/${category}s/${id}/albums?limit=10`, {
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
        const response = Promise.all([artist_info, artist_album, related_artist])
                        .then(results => Promise.all(results.map( r => r.json())))
                        .then(results => {
                            
                            const res1 = results[0]
                            const res2 = results[1]
                            const res3 = results[2]

                            const data = {
                                artist_info: {...res1},
                                artist_album: {...res2},
                                related_artist: {...res3}
                            }
                            res.status(200).json(data)

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