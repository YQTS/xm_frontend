import request from './index'

export const getCode = (params) => {
    return request.post('/xm/user/identifyCode', { ...params })
}

export const login = (phone, code) => {
    return request.get(`/xm/user/login/${phone}/${code}`)
}

export const getUserByPhone = (phone) => {
    return request.get(`/xm/user/getUserByPhoneNumber/${phone}`)
}



