export default async function validate_token(cb, ...args){

    let token;
    const time = (new Date()).getTime();

    if(localStorage.getItem('access_token') !== null && time < parseInt(localStorage.getItem('expires_in'))){

        console.log('valid token found')
        token = localStorage.getItem('access_token');
        
    } else{


        const response = await fetch('/api/token');
        const res_json = await response.json();
    
        const access_token = res_json.result.access_token;
        const expires_in = (new Date()).getTime() + res_json.result.expires_in * 1000;
    
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('expires_in', expires_in)
    
        console.log('token generalted', access_token)
        console.log('token expires: ', expires_in)
    
        token = access_token;

    }


    if(typeof cb === 'function'){
        
        return cb(token, ...args)
    }

}