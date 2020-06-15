import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/RootReducer';

const ConfigureStore = ()=>{
    var assumedState={};
    try {
        assumedState = sessionStorage.getItem("_eva_kitchen")? JSON.parse(sessionStorage.getItem("_eva_kitchen")):{};
    } catch (error) {
        console.log('getError',error)
    }
    
    var intialState = {};
    if(assumedState){
        intialState = assumedState;
        console.log('intialState',intialState);
    }
    const saver = (store) => next => action => {
        let result;
        result = next(action);
        let stateToSave = store.getState();
        sessionStorage.setItem('_eva_kitchen', JSON.stringify({ ...stateToSave}))
        return result;
    }


    var store = createStore(rootReducer, intialState, compose(applyMiddleware(thunk, saver)));
    return store;
}

export default ConfigureStore;