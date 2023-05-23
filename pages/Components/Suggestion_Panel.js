import { forwardRef } from "react"
import Link from "next/link"

const Suggestion_Panel = forwardRef(function Suggestion_Panel(props, ref){


    return(
        <div className="flex center  suggestion_panel ">
            <div ref={ref} id='panel' className="panel suggestion_panel flex center relative">

                <h4>Album</h4>
                <ul>
                    <Link href='/album/3B61kSKTxlY36cYgzvf3cP'>
                        <li className="suggest_item"><b>Interstellar</b></li>
                    </Link>
                </ul>

                <h4>Artist</h4>
                <ul>
                    <Link href='/artist/7y97mc3bZRFXzT2szRM4L4'>
                        <li className="suggest_item"><b>Chopin</b></li>
                    </Link>
                </ul>

                <h4>Track</h4>
                <ul>
                    <Link href='/track/2jpBA7yJJtQHsctSvc3XmE'>
                        <li className="suggest_item"><b>Piano: Peaceful Sleep</b></li>
                    </Link>
                </ul>

                <h4>Playlist</h4>
                <ul>
                    <Link href='/playlist/37i9dQZF1DWWEJlAGA9gs0'>
                        <li className="suggest_item"><b>Classical Essentials</b></li>
                    </Link>
                </ul>      
            </div>
        </div>
    )
})

export default  Suggestion_Panel