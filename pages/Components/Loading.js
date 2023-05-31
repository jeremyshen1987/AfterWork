export default function Loading({num = 8, title, name, type, img_url='/reload_black.svg'}){

    let arr = []

    for(let i = 0; i < num; i++){
        arr.push(i)
    }
    

    return(

        <div className="wrapper_card_group">
            <div className="category_name">
                {title}
            </div>
            <div className="wrapper_card">

                {arr.map(i => {
                    return(
                        // arr is not gonna change; safe to use index as key
                        <Card_Loading key={i} name={name} type={type} img_url={img_url}/>
                    )
                })}
                
            </div>
        
        </div>

    )
}


function Card_Loading({name, type, img_url}){

    return(
        <div className="card_overview">
            <img src={img_url} className={type === 'Artists' || type === 'Artist' ? 'round_img img_small' : 'img_small'}></img>

            <div className="card_overview_text">
                <p> {name}</p>
                <p>{type}</p>
            </div>
        </div>
    )

}