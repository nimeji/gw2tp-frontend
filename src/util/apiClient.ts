import axios from 'axios';
import keycloak from "../keycloak";

const apiClient =  axios.create({
    baseURL: "/",
});

apiClient.interceptors.request.use((config) => {
    if (config.headers && keycloak.authenticated) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
    }

    return config;
})

export default apiClient;