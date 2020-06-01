import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/RootReducer';

const ConfigureStore = ()=>{
    var store = createStore(rootReducer,applyMiddleware(thunk));
    return store;
}

export default ConfigureStore;