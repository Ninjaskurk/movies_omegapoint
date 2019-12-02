let defaultState={
    ...{}
}


export const movieReducer=(state=defaultState, action) => {
    switch(action.type) {
        case "UPDATE_MOVIE":
            return {
                ...state,
                movies: {
                    [action.movie.id]: action.movie
                }
            }
        case "UPDATE_MOVIES":
            return {
                ...state,
                ...action.movies
            }
        default :
            return {
                ...state
        }
    }
}
