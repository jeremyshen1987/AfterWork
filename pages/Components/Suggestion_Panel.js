import { forwardRef } from "react"
import Search_History from "./Search_History"

const Suggestion_Panel = forwardRef(function Suggestion_Panel(props, ref){


    return(
        <div className="flex center flex_width relative">
            <div ref={ref} className="panel flex center flex_width relative">

                <h2>Artist</h2>
                <ul>
                    <li>Taylor</li>
                    <li>Lang Lang</li>

                </ul>

                {/* <Search_History items={items}/> */}
            </div>
        </div>
    )
})

export default  Suggestion_Panel