import conversion_ms_minute from "@/utils/conversion_ms_minute"

export default function Playlist({tracks}){
    
    const items = tracks.items

    return(
        <div>
            {items.map(item => {

                const {name, artists, track_number, duration_ms } = item

                return(
                    <div className="playlist">
                        <span className="track_num">{track_number}</span>
                        
                        <div className="list_container">
                            <div className="title_artist">
                                <div>{name}</div>

                                <div className="track_artist">
                                    {artists.map( (art, idx) => {
                                       
                                        if(idx < artists.length -1){
                                            return<span>{art.name},</span>
                                        }else{
                                            return <span>{art.name}</span>
                                        }
                                    
                                    })}
                                </div>
                            </div>
               
                            <div className="duration">
                                {conversion_ms_minute(duration_ms)}
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )

}