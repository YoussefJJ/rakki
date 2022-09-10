import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { mediaReducer } from "../reducers/mediaReducer";

export const MediaContext = createContext();

const checkLocalStorage = (data) => {
    try {
        return JSON.parse(data).mediaList && 
        JSON.parse(data).mediaList.anime && JSON.parse(data).mediaList.manga
        && Array.isArray(JSON.parse(data).mediaList.anime) && Array.isArray(JSON.parse(data).mediaList.manga)

    } catch (e) {
        return false;
    }
}

const MediaContextProvider = (props) => {
    const [medias, dispatch] = useReducer(mediaReducer, {mediaList: {
        anime: [],
        manga: []
    }}, () => {
        const localData = localStorage.getItem('mediaList');
        //check correct form

        return checkLocalStorage(localData) ? JSON.parse(localData) : {
            mediaList: {
                anime: [],
                manga: []
            }}
    });

    useEffect(() => {
        localStorage.setItem('mediaList', JSON.stringify(medias))
    }, [medias])
    
    return (
        <MediaContext.Provider value={{ medias, dispatch }}>
            {props.children}
        </MediaContext.Provider>
    );
}

export default MediaContextProvider;