import {AUTH_KEY} from '../Constants';

const initial_state ={
    userDetails:null
}
const AuthReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case AUTH_KEY:
            
            return {...state,userDetails:{...action.payload}};
    
        default:
           return state;
    }
}


export default AuthReducer;