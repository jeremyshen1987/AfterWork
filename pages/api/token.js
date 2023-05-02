import 'dotenv'

export default async function getToken(req, res){

    
    const client_id = process.env.CLIENT_ID
    const client_secret = process.env.SECRET

    const url = 'https://accounts.spotify.com/api/token'
    const options = {

        method: 'POST',
        headers: {  
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
        
    }

    const response = await fetch(url, options)
    const result = await response.json()

    res.json({
        result
    })


}