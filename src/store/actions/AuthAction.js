import {AUTH_KEY} from '../Constants'
import RequestProcessor from '../../api/RequestProcessor'


export const LoginAuthentication = (payload)=>{

    return (dispatch,getState) => new Promise((resolve,reject)=>{
        let requestProcessor = new RequestProcessor();
        requestProcessor.sendPost('/users/signin',payload).then(result=>{
            if(result.success){
                dispatch({ type: AUTH_KEY, payload: result.user })
                resolve({ success: result.success,message:result.message});
            }else{
                reject({ success: false,message: result.message});
            }
           
        }).catch(error=>{
            //console.log("Login error",error)
            reject({ success: false, message: error.message })
        });
    });
}
