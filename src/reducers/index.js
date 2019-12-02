import { combineReducers } from 'redux';
import { movieReducer } from '@app/reducers/movie';
import popupReducer from '@app/reducers/popup';

const reducers = combineReducers({
    movies: movieReducer,
    popup: popupReducer
})

export default reducers;