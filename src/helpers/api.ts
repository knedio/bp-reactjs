import axios from 'axios'
import Auth from '../auth/auth'
import store from '../store'

axios.defaults.headers.common['Authorization'] = `Bearer ${Auth.token()}`;
axios.defaults.headers.common['Accept'] = 'application/json';

// GET Method
export function get(url: string, payload = {}) {
    // console.log('api url', process.env.BASE_URL);
    // console.log('api url',process.env.API_URL + '/' + url);

    return axios({
    	method: 'GET',
        url: store.state.baseUrl + '/' + url,
        // url: process.env.API_URL + '/' + url,
        params:payload
    })
}

// POST Method
export function post(url: string, payload = {}) {
    return axios({
        method: 'POST',
        url: store.state.baseUrl + '/' + url,
        data: payload
    })
}

// PUT Method
export function put(url: string, payload = {}) {
    return axios({
        method: 'PUT',
        url: store.state.baseUrl + '/' + url,
        data: payload
    })
}

// PATCH Method
export function patch(url: string, payload = {}) {
    return axios({
        method: 'PATCH',
        url: store.state.baseUrl + '/' + url,
        data: payload
    })
}

// DELETE Method
export function del(url: string) {
    return axios({
        method: 'DELETE',
        url: store.state.baseUrl + '/' + url,
    })
}

// Interceptor
export function interceptors(cb: (arg0: any) => void) {
    axios.interceptors.response.use((res) => {
        return res;
    }, (err) => {
        cb(err)
        return Promise.reject(err)
    })
}

export function serverBaseUrl() {
    return store.state.url;
}

