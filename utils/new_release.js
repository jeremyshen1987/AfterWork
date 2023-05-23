export default async function new_release(token){

    const response = await fetch('/api/newRelease', {
        method: 'POST',
        body: JSON.stringify({
            token: token,

        })
    })

    const results = await response.json();
    
    if(results.error){
        return{
            error: results.error.message ?? 'unknown error'
        }
    }
    
    return results.albums;

}