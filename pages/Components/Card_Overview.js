
export default function Card_Overview({type, item}){

    if(typeof item === 'undefined' || item === null){
        return
    }

    try{

        let img_url;
        let data;

        if(type === 'Tracks'){

            data = item.album
            img_url = item.album.images[0].url
            
        }else{
            data = item
            img_url = data.images[0].url
        }
    
        return(
            <div key={window.crypto.randomUUID()} className="card_overview">
                <img src={img_url} className={type === 'Artists' || type === 'Artist' ? 'round_img img_small' : 'img_small'}></img>

                <div key={window.crypto.randomUUID()} className="card_overview_text">
                    <p> {data.name}</p>
                    <p>{type}</p>
                </div>
            </div>
        )

    } catch(err){
        console.log(err)
    }

}