import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus, { ElMessage } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import { setupStore } from './store'
import { useUserStore } from './store/module/user'
import '@/style/index.css'
import { storeToRefs } from 'pinia'
import { getUserByPhone } from './api/user'

const app = createApp(App)
setupStore(app)
app.use(ElementPlus)
app.use(router)

const userStore = useUserStore()

const { phoneNumber, userName, gender, birthday, userId, avatarUrl } = storeToRefs(userStore)

router.beforeEach((to, from, next) => {
    if (to.name === 'foodComment' || to.name === 'commentSuccess' ||
        to.name === 'basicInfo' || to.name === 'article'
    ) {
        if (localStorage.getItem('phoneNumber')) {
            phoneNumber.value = localStorage.getItem('phoneNumber')

            getUserByPhone(phoneNumber.value).then(
                res => {
                    const user = res.data
                    userName.value = user.nick
                    gender.value = user.gender
                    birthday.value = user.birthday
                    userId.value = user.userId
                    avatarUrl.value = user.imageURL
                    console.log(res)
                }
            ).catch(
                err => new Error(err)
            )

            // 请求，将信息存入store
            next()
        } else {
            localStorage.removeItem('phoneNumber')
            ElMessage.warning('请先登录')
            router.push({
                path: '/'
            })
        }
    } else {
        next()
    }

})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
