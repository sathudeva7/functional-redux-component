import {combineReducers} from 'redux';
import { homeReducer } from './homeReducers';
import { categoryReducer } from './categoryReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    homeReducer,
    cartReducer,
    categoryReducer,
    
})

export default rootReducer;