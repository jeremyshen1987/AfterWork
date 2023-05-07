import { createContext, useContext, useState } from "react";

const MainContext = createContext();


export function MainProvider({ children }) {

    const [searchResult, setSearchResult] = useState({})
    const [searchObj, setSearchObj] = useState({
        type: 'show',
        query: ''
    })

    const [likes, setLikes] = useState([{
        type: null,
        name: null,
        id: null,
        url: null
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