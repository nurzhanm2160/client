import {API} from "./api";
import axios from "axios";

export const authApi = {
    login: (email, password) => {
        return API.post('auth/login/', {
            email,
            password
        })
    },
    register: (email, password) => {
        return API.post('auth/register/', {
            email,
            password
        })
    },
    logout: (refreshToken) => {
        return API.post('auth/logout/', {
            refresh_token: refreshToken,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('refresh_token'),
            }
        })
    }
}

