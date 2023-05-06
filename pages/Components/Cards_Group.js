import Link from "next/link"
import Card_Overview from "./Card_Overview"

function Wrapper_Synopsis({children, name}){

    return(
        <div className="wrapper_card_group">
            <div className="category_name">{name}</div>
            <div className="wrapper_card">
                {children}
            </div>
            
        </div>

    )


}

export default function Cards_Group({type, items}){

    return(


        <Wrapper_Synopsis name={type}>

            {items.length === 0 ? <h3>Sorry, nothing found!</h3> : items.map((item, idx) => {
                return(
                    <>
                        <Link href={`${item.type}/${item.id}`} >
                            <Card_Overview key={idx} type={type} item={item}/>
                        </Link>
                    
                    </>
                )
            })}
            
        </Wrapper_Synopsis>

    )

}