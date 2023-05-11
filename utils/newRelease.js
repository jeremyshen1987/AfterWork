export default async function new_release(token){

    console.log('release start')
    const response = await fetch('/api/newRelease', {
        method: 'POST',
        body: JSON.stringify({
            token: token,

        })
    })

    const results = await response.json();
   
    return results.albums;
}