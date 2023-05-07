import { forwardRef } from "react"
import Link from "next/link"
import Search_History from "./Search_History"

const Suggestion_Panel = forwardRef(function Suggestion_Panel(props, ref){


    return(
        <div className="flex center flex_width relative">
            <div ref={ref} id='panel' className="panel flex center flex_width relative">

                <h2>Album</h2>
                <ul>
                    <Link href='/album/6WWL32UxPnjrIWlgLdzoir'>
                        <li className="suggest_item">Elden Ring</li>
                    </Link>
                </ul>

                <h2>Artist</h2>
                <ul>
                    <Link href='/artist/7y97mc3bZRFXzT2szRM4L4'>
                        <li className="suggest_item">Chopin</li>
                    </Link>
                </ul>

                {/* <Search_History items={items}/> */}
            </div>
        </div>
    )
})

export default  Suggestion_Panel