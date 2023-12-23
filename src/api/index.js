import router from "@/router";
import axios from "axios";

axios.defaults.baseURL = '/xm'

axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // const token = localStorage.getItem("markettoken")
    // // 请求的时候把token带上
    // config.headers.Authorization = `Bearer ${token}`
    return config
}, function (error) {
    return Promise.reject(error)
})


// 响应拦截器
axios.interceptors.response.use(function (response) {
    // // 获取token
    // const {authorization} = response.headers
    // authorization && localStorage.setItem("markettoken",authorization)
    return response
}, function (error) {
    // if(error.response.status === 401){
    //     // 后端返回无权访问则跳转到登录页面
    //     localStorage.removeItem("markettoken")
    //     router.push('/LoginandRegister/loginPart')
    // }
    return Promise.reject(error)
})

export default axios