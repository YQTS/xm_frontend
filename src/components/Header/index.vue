<!--  -->
<template>
    <div class="head">
        <div class="container">
            <div class="lp">
                <div class="logo">
                    <!-- <img src="@/assets/schoolIcon.jpeg"> -->
                    Nuist美食分享网
                </div>
                <div class="bp" @click="() => router.push({ name: 'share' })">美食分享</div>
                <div class="bp" @click="() => router.push({ name: 'food' })">美食广场</div>
                <!-- <div class="bp" @click="() => router.push({ name: 'food' })">店铺点评</div> -->
                <div class="bp" @click="() => router.push({ name: 'food' })">联系我们</div>
            </div>
            <div class="rp">
                <div class="bp" @click="setTheme">Aa</div>
                <div class="bp" v-if="!token">
                    <Login></Login>
                </div>
                <div class="bp userInfo" v-else>
                    <img src="@/assets/food1.jpeg" />
                    <el-dropdown trigger="click">
                        <span>
                            {{ userName }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>个人信息</el-dropdown-item>
                                <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import Login from '@/components/Login'
import { useUserStore } from '@/store/module/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()

const { token, userName, avatarUrl } = storeToRefs(userStore)

const setTheme = () => {
    const htmlNode = document.documentElement
    if (htmlNode.className === '' || htmlNode.className === 'light') {
        htmlNode.className = 'dark'
    } else {
        htmlNode.className = 'light'
    }
}

const loginOut = () => {
    userStore.$reset()
    localStorage.removeItem('token')
    console.log(userStore)
}

</script>
<style scoped lang="less">
.head {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 16px;
    // background-color: var(--theme-color);
    background: url('@/assets/food-bg1.jpeg');
    background-size: cover;
    background-position: center;

    .container {
        display: flex;
        justify-content: space-between;
        background-color: var(--header-bg);
        color: var(--theme-text-color);
        border-radius: 15px;
        padding: 0 20px;
        width: 80%;
        height: 80px;
        margin-top: 30px;
        opacity: 0.7;
        box-shadow: rgba(0, 0, 0, 0.114) 0px 3.26688px 4.0836px 0px, rgba(0, 0, 0, 0.098) 0px 0.816721px 8.16721px 0px, rgba(0, 0, 0, 0.165) 0px 1.63344px 3.26688px -0.816721px;

        .lp {
            display: flex;
            height: 100%;
            align-items: center;

            .logo {
                font-family: 'ink', sans-serif;
                font-size: 40px;
                color: #1567B1;
            }

            .bp {
                display: flex;
                align-items: center;
                margin: 0 20px;
                padding: 0 10px;
                height: 100%;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    background-color: var(--header-hover);
                }
            }

        }

        .rp {
            display: flex;
            height: 100%;
            align-items: center;

            .bp {
                display: flex;
                align-items: center;
                margin: 0 20px;
                padding: 0 20px;
                height: 100%;
                cursor: pointer;

                &:hover {
                    background-color: var(--header-hover);
                }
            }

            .userInfo {
                display: flex;
                align-items: center;
                gap: 10px;

                img {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>