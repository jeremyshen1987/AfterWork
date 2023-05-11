export default async function search_by_id(token, type, id){

    const response = await fetch(`/api/${type}/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            token: token,

        })
    })

    const res_json = await response.json();
    const results = res_json

    console.log('search by id result :', results);
    return results;
}