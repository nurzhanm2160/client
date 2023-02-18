import axios, {apiInstance} from "axios";

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
        return apiInstance.get('auth/my-profile/')
    }
}

