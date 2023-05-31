import { createContext, useContext, useState } from "react";

const MainContext = createContext();


export function MainProvider({ children }) {

    const [recommended, setRecommended] = useState({})

    const [newRelease, setNewRelease] = useState([])

    // type prop is useless for now. will integrate ticketmaster show in the future
    const [searchObj, setSearchObj] = useState({
        type: 'music',
        query: ''
    })

    const [searchResult, setSearchResult] = useState({
        isReady: true,
        results: null
    })
    // nested objects {type, name, id, img_url}
    const [likes, setLikes] = useState([])

    //track name is for used to replace warning message if you select a different track
    const [player, setPlayer] = useState({
        isPlaying: false,
        album_id: null,
        track_num: null,
        track_name: null
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