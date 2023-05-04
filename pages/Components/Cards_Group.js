import Link from "next/link"
import Card_Overview from "./Card_Overview"

function Wrapper_Synopsis({children, name}){

    return(
        <div className="wrapper_card_group">
            <h2>{name}</h2>
            <div className="flex wrap center gap_20">
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
                        <Link href={`${item.type}/${item.id}`} style={{ textDecoration: 'none' }}>
                            <Card_Overview key={idx} type={type} item={item}/>
                        </Link>
                    
                    </>
                )
            })}
            
        </Wrapper_Synopsis>

    )

}