import {apiInstance} from "./axios";
import axios from "axios";

export const userApi = {
    login: (email, password) => {
        return axios.post('http://localhost:8000/auth/login/', {
            email,
            password
        })
    },
    register: (email, password, code = '') => {
        const url = code ? `http://localhost:8000/auth/register/?code=${code}` : `http://localhost:8000/auth/register/`
        return axios.post(url, {
            email,
            password
        })
    },
    logout: (refresh_token) => {
        return apiInstance.post('auth/logout/', {refresh: refresh_token})
    },
    checkAuth: (refresh) => {
        return apiInstance.post('auth/token/refresh/', { refresh }, {
            withCredentials: true
        });
    },
    getUserData: () => {
        return apiInstance.get('auth/my-profile/')
    },
    getAllReferrals: () => {
        return apiInstance.post('auth/referrals/')
    },
    getUserWallets: () => {
        return apiInstance.get('auth/my_wallets/')
    },
}

