import {apiInstance} from "./axios";
import axios from "axios";

export const userApi = {
    login: (email, password) => {
        return axios.post('https://backend.bitroxmining.com/auth/login/', {
            email,
            password
        }, {headers: {'Content-Type': 'application/json'}})
    },
    register: (email, password, code = '') => {
        const url = code ? `https://backend.bitroxmining.com/auth/register/?code=${code}` : `https://backend.bitroxmining.com/auth/register/`
        return axios.post(url, {
            email,
            password
        }, {headers: {'Content-Type': 'application/json'}})
    },
    logout: (refresh_token) => {
        return apiInstance.post('auth/logout/', {refresh: refresh_token}, {headers: {'Content-Type': 'application/json'}})
    },
    checkAuth: (refresh) => {
        return apiInstance.post('auth/token/refresh/', {refresh}, {
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

