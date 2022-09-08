import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { mediaReducer } from "../reducers/mediaReducer";

export const MediaContext = createContext();

const MediaContextProvider = (props) => {
    const [medias, dispatch] = useReducer(mediaReducer, {mediaList: {
        anime: [],
        manga: []
    }}, () => {
        const localData = localStorage.getItem('mediaList');
        return localData ? JSON.parse(localData) : {
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