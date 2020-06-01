import axios from 'axios';
import baseUrl  from './config';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";



class processRequest{

    async sendGet(url){
        return new Promise((resolve,reject)=>{
            axios.get(url).then(result => {
                resolve(result.data);
            }).catch(error=>{
                reject(error);
            })
        })
    }

    async sendPost(url,payload) {
        return new Promise((resolve, reject) => {
            axios.post(url,payload).then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error);
            })
        })
    }
}

export default processRequest;