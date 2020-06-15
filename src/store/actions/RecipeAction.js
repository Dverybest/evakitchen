import RequestProcessor from '../../api/RequestProcessor'

export const handleAddRecipe = (payload) => {

    return (dispatch, getState) => new Promise((resolve, reject) => {
        let requestProcessor = new RequestProcessor();
        requestProcessor.sendPost('/post/addpost', payload).then(result => {

            // console.log("add recp res", result)
            if (result.success) {
                resolve({ success: result.success, message: result.message });
            } else {
                reject({ success: false, message: result.message });
            }

        }).catch(error => {
            console.log("add recp error",error)
            reject({ success: false, message: error.message })
        });
    });
}

export const handleGetCategory = () => {

    return (dispatch, getState) => new Promise((resolve, reject) => {
        let requestProcessor = new RequestProcessor();
        requestProcessor.sendGet('/category/getallcategories').then(result => {
            // console.log("get cat res", result)
            resolve({ success: result.success, data: result.data });
        }).catch(error => {
            // console.log("get cat error", error)
            reject({ success: false, message: error.message })
        });
    });
}
