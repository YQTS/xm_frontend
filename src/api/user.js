import request from './index'

export const getCode = (params) => {
    return request.post('/user/identifyCode', { ...params })
}