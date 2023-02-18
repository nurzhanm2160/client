<<<<<<< HEAD
import axios, {apiInstance} from "axios";
=======
import {API} from "./api";
>>>>>>> refs/remotes/origin/main

export const authApi = {
    login: (email, password) => {
        return apiInstance.post('auth/login/', {
            email,
            password
        })
    },
    register: (email, password) => {
        return apiInstance.post('auth/register/', {
            email,
            password
        })
    },
    logout: (refresh_token) => {
        return apiInstance.post('auth/logout/', {refresh_token})
    },
    checkAuth: (refresh) => {
        return apiInstance.post('auth/token/refresh/', { refresh }, {
            withCredentials: true
        });
    },
    getUserData: () => {
<<<<<<< HEAD
        return apiInstance.get('auth/my-profile/')
    }
=======
        return API.get('auth/my-profile/')
    },
>>>>>>> refs/remotes/origin/main
}

