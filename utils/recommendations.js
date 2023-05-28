export default async function recommendations(token, name, type, id, setRecommended){

    const response = await fetch('/api/recommendations', {
        method: 'POST',
        body: JSON.stringify({
            token: token,
            type: type,
            id: id

        })
    })

    const results = await response.json();
   
    setRecommended({results, name, id})

    // return results;
}