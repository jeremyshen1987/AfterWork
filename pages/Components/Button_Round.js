export default function Button_Round({children, fn}){

    return(
        <button id={children} onClick={fn} className="round_btn">
            {children}
        </button>

    )
}