/* TODO Implement Reducers for:
    
*/

const initialState = {
    shows: []
}

export default showReducer = (state = initialState, action) => {
    switch(action.type){
        case TRENDING_SHOWS: return {
            ...state,
            shows: action.payload
        }

        default: return state
    }
}