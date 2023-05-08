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

    if(typeof items === 'undefined' || items === null){
        return
    }

    return(


        <Wrapper_Synopsis key={type} name={type}>

            {items.map((item, idx) => {
                return(
                    <>
                        <Link key={idx} href={`/${item.type}/${item.id}`} >
                            <Card_Overview key={idx} type={type} item={item}/>
                        </Link>
                    
                    </>
                )
            })}
            
        </Wrapper_Synopsis>

    )

}