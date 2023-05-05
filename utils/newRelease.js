export default async function new_release(token){

    console.log('release start')
    const response = await fetch('/api/newRelease', {
        method: 'POST',
        body: JSON.stringify({
            token: token,

        })
    })

    const res_json = await response.json();
    const {results} = res_json

    console.log('album :', results.albums);
    return results.albums;
}