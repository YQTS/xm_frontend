import request from './index'

export const getDish = (id) => {
    return request.get(`/xm/dish/getDishAndStoreById/${id}`)
}

export const getDishList = (size, currentPage) => {
    return request.get(`/xm/dish/getDishList/${size}/${currentPage}`)
}
