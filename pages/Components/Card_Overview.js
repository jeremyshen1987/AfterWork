
export default function Card_Overview({type, item}){

    try{

        let img_url;
    
        switch(type){

            case 'tracks':
                img_url = item.album.images[0].url
                break;

            default:
                img_url = item.images[0].url
                break;
        }

        return(
            <div key={item.id} className="card_overview border">
                <img src={img_url} className={type === 'artists' ? 'round_img img_small' : 'img_small'}></img>

                <div className="card_overview_text">
                    <p> {item.name}</p>
                    <p>{type}</p>
                </div>
            </div>
        )

    } catch(err){
        console.log(err)
    }

}