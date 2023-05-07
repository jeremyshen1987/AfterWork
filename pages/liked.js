import { useMainContext } from "@/utils/context";


export default function Liked(){


    const {num, setNum}= useMainContext()

    return(
        <div className="main_container">
            <h1>you are number</h1>
            <button onClick={()=>{setNum(5)}}>click</button>
        </div>
    )

}