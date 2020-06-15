import RequestProcessor from '../../api/RequestProcessor'

export const handleAddCategory = (payload)=>{

    return (dispatch,getState) => new Promise((resolve,reject)=>{
        let requestProcessor = new RequestProcessor();
        requestProcessor.sendPost('/category/addcategory',payload).then(result=>{
            
            // console.log("add cat res", result)
            if(result.success){
                resolve({ success: result.success,message:result.message});
            }else{
                reject({ success: false,message: result.message});
            }
           
        }).catch(error=>{
            //console.log("add cat error",error)
            reject({ success: false, message: error.message })
        });
    });
}

export const handleGetCategory = () => {

    return new Promise((resolve, reject) => {
        let requestProcessor = new RequestProcessor();
        requestProcessor.sendGet('/category/getallcategories').then(result => {
            //  console.log("get cat res", result)
            resolve({ success: result.success, data: result.data });
        }).catch(error => {
            //  console.log("get cat error", error)
            reject({ success: false, message: error.message })
        });
    });
}
