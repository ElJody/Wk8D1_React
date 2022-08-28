import { apiClientNoAuth, apiClientTokenAuth } from "./client";

const endpoint ="/book"

const get = async(cancelToken) =>{
    let error;
    let items;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if (response.ok) {
        items = response.data.items;
    
    }else{
        error = "Something went wrong. Please Try again later";
    }
    return {error, items}
}

const getItem = async(id, cancelToken) =>{
    let error;
    let item;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+id);
    if (response.ok) {
        item = response.data;
    }else if (response.status === 404) {
        error = "Item not found";
    }else{
        error = "Something went wrong with GetItem";
    }
    return {error, items}
}

const getByCat = async(id, cancelToken) =>{
    let error;
    let items;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/category/'+id);
    if (response.ok) {
        items = response.data.items;
    }else if (response.status === 404) {
        error = "Category not found";
    }else{
        error = "Something went wrong with Get Category";
    }
    return {error, items}
}

const post = async(token, data, cancelToken) =>{
    let error;

    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, {name:data});
    if (!response.ok) {
        error = "Something went wrong with Post Request";   
    }
    return {error}
}

const put = async(token, id, data, cancelToken) =>{
    let error;

    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, {name:data});
    if (!response.ok) {
        error = "Something went wrong with PUT Request";     
    }
    return {error}
}

const del = async(token, id,  cancelToken) =>{
    let error;

    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint+'/'+id);
    if (!response.ok) {
        error = "Something went wrong with Delete";   
    }
    return {error}
}

const apiItem={
    get,
    getItem,
    getByCat,
    post,
    put,
    del
}

export default apiItem