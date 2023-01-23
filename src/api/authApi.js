import {instance} from "./api";

export const authApi = {
    login: (email, password) => {
        return instance.post('auth/login/', {
            email,
            password
        })
    },
    register: (email, password) => {
        return instance.post('auth/register/', {
            email,
            password
        })
    }
}