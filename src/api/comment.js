import request from './index'

export const uploadArticle = (params) => {
    return request.post('/xm/article/addArticle', { ...params })
}

export const getUserArticle = (userId, size, page) => {
    return request.get(`/xm/article/personArticleList/${userId}/${size}/${page}`)
}

export const getArticleList = (size, page) => {
    return request.get(`/xm/article/list/${size}/${page}`)
}

export const getArticleById = (id, userId) => {
    let temp = userId ? userId : 0
    return request.get(`/xm/article/getArticleById?articleId=${id}&userId=${temp}`)
}