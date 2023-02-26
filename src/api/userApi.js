import {apiInstance} from "./axios";
import axios from "axios";

export const userApi = {
    login: (email, password) => {
        return axios.post('http://66.29.139.175:8000/auth/login/', {
            email,
            password
        }, {headers: {'Content-Type': 'application/json'}})
    },
    register: (email, password, code = '') => {
        const url = code ? `http://66.29.139.175:8000/auth/register/?code=${code}` : `http://66.29.139.175:8000/auth/register/`
        return axios.post(url, {
            email,
            password
        }, {headers: {'Content-Type': 'application/json'}})
    },
    logout: (refresh_token) => {
        return apiInstance.post('auth/logout/', {refresh: refresh_token}, {headers: {'Content-Type': 'application/json'}})
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

