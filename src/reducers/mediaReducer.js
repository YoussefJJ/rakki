export const mediaReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MEDIA':
            return {
                ...state,
                mediaList: [
                    ...state.mediaList,
                    action.payload.id
                ]
            }
        case 'REMOVE_MEDIA':
            return {
                ...state,
                mediaList: [
                    ...state.mediaList.filter(id => id !== action.payload.id)
                ]
            }
        default:
            return state;
    }
}