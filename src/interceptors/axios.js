import axios from 'axios';
import {API} from "../api/api";

let refresh = false;

API.interceptors.response.use(resp => resp, async error => {
    if(error.response.status === 401 && !refresh) {
        refresh = true;
        const response = await API.post('auth/token/refresh/',
            {refresh: localStorage.getItem('refresh_token')},
            {withCredentials: true}
        )

        if (response.status === 200) {
            console.log(response)
            axios.defaults.headers.common['Authorization'] = `Token ${response.data['access']}`;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            return axios(error.config);
        }
    }
    refresh = false;
    return error;
})