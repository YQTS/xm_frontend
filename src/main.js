import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus, { ElMessage } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import { setupStore } from './store'
import '@/style/index.css'

const app = createApp(App)
setupStore(app)
app.use(ElementPlus)
app.use(router)

router.beforeEach((to, from, next) => {
    console.log(to.name)
    if (to.name === 'foodComment' || to.name === 'commentSuccess' ||
        to.name === 'basicInfo' || to.name === 'article'
    ) {
        if (localStorage.getItem('token')) {
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
