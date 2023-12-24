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

const app = createApp(App)
setupStore(app)
app.use(ElementPlus)
app.use(router)

const userStore = useUserStore()

const { phoneNumber } = storeToRefs(userStore)

router.beforeEach((to, from, next) => {
    if (to.name === 'foodComment' || to.name === 'commentSuccess' ||
        to.name === 'basicInfo' || to.name === 'article'
    ) {
        if (localStorage.getItem('phoneNumber')) {
            phoneNumber.value = localStorage.getItem('phoneNumber')
            // 请求，将信息存入store
            next()
        } else {
            ElMessage.warning('请先登录')
            router.push({
                path: '/'
            })
        }
    }
    next()
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
