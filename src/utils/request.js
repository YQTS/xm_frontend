import router from "@/router";
import axios from "axios";

let instance = axios.create({
    baseURL: '/api',
    timeout: 5000
})


// 请求拦截器
instance.interceptors.request.use(function (config) {
    const token = getToken()
    // 请求的时候把token带上
    if (token)
        config.headers.Authorization = `Bearer ${token}`
    return config
}, function (error) {
    return Promise.reject(error)
})


// 响应拦截器
instance.interceptors.response.use(function (response) {

    return response
}, function (error) {

    return Promise.reject(error)
})

export default instance