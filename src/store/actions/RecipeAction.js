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

export const handleGetAllRecipes = () => {

    return  new Promise((resolve, reject) => {
        let requestProcessor = new RequestProcessor();
        requestProcessor.sendGet('/post/getallpost').then(result => {
            // console.log("get post res", result)
            resolve({ success: result.success, data: result.data });
        }).catch(error => {
            console.log("get post error", error)
            reject({ success: false, message: error.message })
        });
    });
}
