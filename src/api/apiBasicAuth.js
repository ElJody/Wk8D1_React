import { apiClientBasicAuth } from "./clients";

const endpoint ='api/login'

export const getUser = async(email, password, cancelToken) =>{
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, cancelToken).get(endpoint);
    if (response.ok) {
        user = response.data;
    }else if (response.status === 401) {
        error = "Invalid Email or Password";
    }else{
        error = "Something went wrong. Please Try again later";
    }
    return {user, error}
}

