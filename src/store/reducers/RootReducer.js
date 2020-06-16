import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CategoriesReducer from './categoriesReducer';

const rootReducers= combineReducers({
    auth: AuthReducer,
    category: CategoriesReducer,
});

export default rootReducers;