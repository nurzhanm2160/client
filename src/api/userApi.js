import {apiInstance} from "./axios";

export const userApi = {
    login: (email, password) => {
        return apiInstance.post('auth/login/', {
            email,
            password
        })
    },
    register: (email, password, code = '') => {
        const url = code ? `auth/register/?code=${code}` : `auth/register/`
        return apiInstance.post(url, {
            email,
            password
        })
    },
    logout: (refresh_token) => {
        return apiInstance.post('auth/logout/', {refresh_token}, {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('access_token')
            }
        })
    },
    checkAuth: (refresh) => {
        return apiInstance.post('auth/token/refresh/', { refresh }, {
            withCredentials: true
        });
    },
    getUserData: () => {
        return apiInstance.get('auth/my-profile/', {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('access_token')
            }
        })
    },
    getAllReferrals: () => {
        return apiInstance.post('auth/referrals/', {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('access_token')
            }
        })
    },
    getUserWallets: () => {
        return apiInstance.get('auth/my_wallets/', {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('access_token')
            }
        })
    }
}

