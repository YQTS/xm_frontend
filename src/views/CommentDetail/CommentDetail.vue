<!--  -->
<template>
    <div class="bg">
        <div class="commentDetail">
            <div class="userInfo">
                <div class="user">
                    <img style="width: 50px; height: 50px;border-radius: 50%;" src="@/assets/food1.jpeg" />
                    <div class="userDetail">
                        {{ formData.user.nick }}
                    </div>
                </div>
                <div class="star" @click="starArticle">
                    <el-icon :size="25" v-if="!formData.likesByMe">
                        <Star color="#A3B745" />
                    </el-icon>
                    <el-icon :size="25" v-else>
                        <StarFilled color="#A3B745" />
                    </el-icon>
                </div>
            </div>
            <div class="content">
                <p>{{ formData.article.text }}</p>
            </div>
            <div class="food">
                <img style="width: 80px;height: 80px;" src="@/assets/food1.jpeg" />
                <div class="info">
                    <div class="name">{{ formData.dish.name }}</div>
                    <div class="location">
                        <el-icon color="#A3B745">
                            <Location />
                        </el-icon>
                        <span>{{ formData.address }}</span>
                        <span>({{ formData.storeName }})</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElIcon, ElMessage } from 'element-plus';
import { useRoute } from 'vue-router'
import { getArticleById } from '@/api/comment';
import { ref } from 'vue';
import { likeArticle } from '@/api/user'
import { useUserStore } from '@/store/module/user';

const userStore = useUserStore()

const route = useRoute()

const formData = ref({
    user: {
        nick: '',
    },
    dish: {
        name: ''
    },
    article: {
        text: ''
    },
    likesByMe: false,
    address: '',
    storeName: ''
})


const starArticle = () => {
    const userId = formData.value.user.userId
    const articleId = formData.value.article.articleId
    if (userId && articleId) {
        likeArticle(userId, articleId).then(
            res => {
                if (res.status === 200) {
                    ElMessage.success(res.data)
                    formData.value.likesByMe = true
                }
            }
        ).catch(
            err => new Error(err)
        )
    }
}

getArticleById(route.query?.id, userStore.userId).then(
    res => {
        formData.value = res.data
    }
).catch(
    err => new Error(err)
)


</script>
<style scoped lang="less">
.bg {
    display: flex;
    justify-content: center;
    background-color: var(--theme-color);
    min-height: 80vh;
    padding: 50px 250px;

    .commentDetail {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 50px;
        padding: 50px 100px;
        width: 467px;
        background-color: #fff;

        .userInfo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            .user {
                display: flex;
                align-items: center;
                gap: 20px;

            }

            .star {
                cursor: pointer;
            }
        }

        .content {
            p {
                text-indent: 2em;
            }
        }

        .food {
            display: flex;
            padding: 20px;
            gap: 20px;
            background-color: #F6F2DC;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);

            .info {
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 300px;

                .name {
                    font-size: 25px;
                    font-weight: bold;
                }

                .location {
                    display: flex;
                    align-items: center;
                    font-size: 15px;
                }
            }
        }
    }
}
</style>