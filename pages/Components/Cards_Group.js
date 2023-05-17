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

export default function Cards_Group({type, items, title = null}){

    if(typeof items === 'undefined' || items === null){
        return
    }

    if(typeof window !== 'undefined'){

        

        return(


            <Wrapper_Synopsis key={window.crypto.randomUUID()} name={title === null ? type : title}>
    
                {items.map((item) => {
                    return(
                        <>
                            <Link key={window.crypto.randomUUID()} href={`/${item.type}/${item.id}`} >
                                <Card_Overview key={window.crypto.randomUUID()} type={type} item={item}/>
                            </Link>
                        
                        </>
                    )
                })}
                
            </Wrapper_Synopsis>
    
        )
    }



}