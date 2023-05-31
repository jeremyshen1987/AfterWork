import { createContext, useContext, useState } from "react";

const MainContext = createContext();


export function MainProvider({ children }) {

    const [recommended, setRecommended] = useState({})

    const [newRelease, setNewRelease] = useState([])

    // to do: integrate ticketmaster show
    const [searchObj, setSearchObj] = useState({
        type: 'music',
        query: ''
    })

    const [searchResult, setSearchResult] = useState({})
    // nested objects {type, name, id, img_url}
    const [likes, setLikes] = useState([])

    const [player, setPlayer] = useState({
        isPlaying: false,
        album_id: null,
        track_num: null,
        position_ms: null
    })

    return (
        <MainContext.Provider value={{recommended, setRecommended, newRelease, setNewRelease, searchResult, setSearchResult, searchObj, setSearchObj, likes, setLikes, player, setPlayer}}>
            {children}
        </MainContext.Provider>
    );
}

export function useMainContext() {
    return useContext(MainContext);
}