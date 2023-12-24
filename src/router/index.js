import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/share',
    component: () => import('@/Layout/Layout.vue'),
    children: [
      {
        path: '/share',
        name: 'share',
        component: () => import('@/views/Share/Share.vue')
      },
      {
        path: '/food',
        name: 'food',
        component: () => import('@/views/Food/Food.vue')
      },
      {
        path: '/foodSpecific',
        name: 'foodspecific',
        component: () => import('@/views/FoodSpecific/FoodSpecific.vue')
      },
      {
        path: '/foodComment',
        name: 'foodComment',
        component: () => import('@/views/FoodComment/FoodComment.vue')
      },
      {
        path: '/commentSuccess',
        name: 'commentsuccess',
        component: () => import('@/views/CommentSuccess/CommentSuccess.vue')
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        redirect: '/userInfo/basicInfo',
        component: () => import('@/views/UserInfo/UserInfo.vue'),
        children: [
          {
            path: '/userInfo/basicInfo',
            name: 'basicInfo',
            component: () => import('@/views/UserInfo/components/BasicInfo.vue')
          },
          {
            path: '/userInfo/article',
            name: 'article',
            component: () => import('@/views/UserInfo/components/Article.vue')
          }
        ]
      },
      {
        path: '/commentDetail',
        name: 'commentDetail',
        component: () => import('@/views/CommentDetail/CommentDetail')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
