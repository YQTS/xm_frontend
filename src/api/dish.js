import request from './index'

export const getDish = (id) => {
    return request.get(`/xm/user/login/${id}`)
}

export const getDishList = (size, currentPage) => {
    return request.get(`/xm/user/login/${size}/${currentPage}`)
}
