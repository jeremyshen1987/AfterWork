export default async function search_by_id(token, type, id){

    const response = await fetch(`/api/${type}/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            token: token,

        })
    })

    const results = await response.json();

    // console.log('search by id result :', results);
    return results;
}