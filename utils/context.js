import { createContext, useContext, useState } from "react";

const MainContext = createContext();


export function MainProvider({ children }) {


    // to do: integrate ticketmaster show
    const [searchObj, setSearchObj] = useState({
        type: 'show',
        query: ''
    })

    const [searchResult, setSearchResult] = useState({})

    const [likes, setLikes] = useState([{
        type: null,
        name: null,
        id: null,
        img_url: null
    }])

    return (
        <MainContext.Provider value={{searchResult, setSearchResult, searchObj, setSearchObj, likes, setLikes}}>
            {children}
        </MainContext.Provider>
    );
}

export function useMainContext() {
    return useContext(MainContext);
}