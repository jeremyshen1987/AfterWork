import Link from "next/link"

export default function Album_detail({data}){

    try{
        const {artists, external_urls, images, release_date, name, tracks, total_tracks, type, id} = data

        return(
            <>
                <div key={id} className="overview">

                    <img src={images[0].url} className="img_small"></img>

                    <div className="flex">
                        <p>{type}</p>
                        <h1>{name}</h1>
                        
                        {artists.map(artist => {
                            return(
                                <div key={artist.id}>
                                    {/* <img src="" className="img_mini"></img> */}
                                    <Link href={`artists/${artist.id}`} style={{ textDecoration: 'none', color: 'white' }}><p>{artist.name}</p></Link>
                                </div>
                            )
                        })}
                            
                        <div>
                            <span>{(new Date(release_date)).getFullYear()} -</span>
                            <span>{total_tracks} songs, </span>
                            <span></span>
                        </div>
                        
                    </div>
    
                </div>
    
              
            </>
    
        )

    }catch(err){
        console.log(err)
    }

}