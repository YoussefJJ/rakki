export const mediaReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ANIME':
            return {
                ...state,
                mediaList: {
                    ...state.mediaList,
                    anime: [...state.mediaList.anime, action.payload.id]
                }
            }
        case 'REMOVE_ANIME':
            return {
                ...state,
                mediaList: {
                    ...state.mediaList,
                    anime: [...state.mediaList.anime.filter(id => id !== action.payload.id)]
                }
            }
        case 'ADD_MANGA':
            return {
                ...state,
                mediaList: {
                    ...state.mediaList,
                    manga: [...state.mediaList.manga, action.payload.id]
                }
            }
        case 'REMOVE_MANGA':
            return {
                ...state,
                mediaList: {
                    ...state.mediaList,
                    manga: [...state.mediaList.manga.filter(id => id !== action.payload.id)]
                }
            }

        default:
            return state;
    }
}