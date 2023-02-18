import axios from 'axios'

const url = 'http://localhost:8000/';

export const apiInstance = axios.create({
    baseURL: url,
})

apiInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const originalRequest = error.config;

            if (originalRequest.url === `${url}auth/token`) {
                localStorage.clear();
                // window.location.href = '/login';
                return Promise.reject(error);
            }

            if (!originalRequest._retry) {
                originalRequest._retry = true;
                const refreshToken = localStorage.getItem('refresh_token');

                if (refreshToken) {
                    return axios
                        .post(`${url}auth/token/refresh/`, { refresh: refreshToken }, {
                            headers: {
                                Authorization: `Bearer ${refreshToken}`
                            }
                        })
                        .then((res) => {
                            if (res.status === 201 || res.status === 200) {
                                localStorage.setItem('refresh_token', res.data.refresh_token);
                                localStorage.setItem('access_token', res.data.access_token);
                                originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
                                return axios(originalRequest);
                            }
                        })
                        .catch((err) => {
                            localStorage.clear();
                            // window.location.href = '/login';
                        });
                } else {
                    localStorage.clear();
                    // window.location.href = '/login';
                }
            }
        }

        return Promise.reject(error);
    }
);