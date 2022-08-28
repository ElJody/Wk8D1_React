import { apiNoAuth, apiTokenAuth } from "./client";

const endpoint ="/book"

const get = async(cancelToken) =>{
    let error;
    let categories;

    const response = await apiNoAuth(cancelToken).get(endpoint);
    if (response.ok) {
        categories = response.data.categories;
    
    }else{
        error = "Something went wrong. Please Try again later";
    }
    return {error, categories}
}

const post = async(token, catName, cancelToken) =>{
    let error;

    const response = await apiTokenAuth(token, cancelToken).post(endpoint, {name:catName});
    if (!response.ok) {
        error = "Something went wrong. Please Try again later";   
    }
    return {error}
}

const put = async(token, id, catName, cancelToken) =>{
    let error;

    const response = await apiTokenAuth(token, cancelToken).put(endpoint+'/'+id, {name:catName});
    if (!response.ok) {
        error = "Something went wrong. Please Try again later";   
    }
    return {error}
}

const del = async(token, id,  cancelToken) =>{
    let error;

    const response = await apiTokenAuth(token, cancelToken).delete(endpoint+'/'+id);
    if (!response.ok) {
        error = "Something went wrong. Please Try again later";   
    }
    return {error}
}

const apiCategory={
    get,
    post,
    put,
    del
}

export default apiCategory;