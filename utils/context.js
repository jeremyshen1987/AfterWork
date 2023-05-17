import { createContext, useContext, useState } from "react";

const MainContext = createContext();


export function MainProvider({ children }) {

    const [recommended, setRecommended] = useState({})

    const [newRelease, setNewRelease] = useState([])

    // to do: integrate ticketmaster show
    const [searchObj, setSearchObj] = useState({
        type: 'show',
        query: ''
    })

    const [searchResult, setSearchResult] = useState({})
    // nested objects {type, name, id, img_url}
    const [likes, setLikes] = useState([])

    return (
        <MainContext.Provider value={{recommended, setRecommended, newRelease, setNewRelease, searchResult, setSearchResult, searchObj, setSearchObj, likes, setLikes}}>
            {children}
        </MainContext.Provider>
    );
}

export function useMainContext() {
    return useContext(MainContext);
}