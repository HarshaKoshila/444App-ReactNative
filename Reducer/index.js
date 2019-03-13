import {combineReducers} from 'redux';
import {languageReducer, userReducer} from './main'; 

const allReducers = combineReducers({
    language: languageReducer,
    user: userReducer 
});

export default allReducers