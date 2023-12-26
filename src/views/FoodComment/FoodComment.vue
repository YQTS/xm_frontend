<!-- 点评页面 -->
<template>
    <div class="comment">
        <div class="mainArea">
            <div class="foodInfo">
                <img src="@/assets/food1.jpeg" />
                <div class="info">
                    <div class="name">{{ foodInfo.dish.name }}</div>
                    <div class="location">
                        <el-icon color="#A3B745">
                            <Location />
                        </el-icon>
                        <span>{{ foodInfo.address }}</span>
                        <span>({{ foodInfo.storeName }})</span>
                    </div>
                </div>
            </div>
            <div class="score">
                <ElForm>
                    <ElFormItem>
                        <ElInput :autosize="{ minRows: 4, maxRows: 8 }" type="textarea" placeholder="点评一下这道菜..."
                            resize="none" v-model="commentContent" :minlength="5" :maxlength="400" show-word-limit />
                    </ElFormItem>
                    <ElFormItem>
                        <div class="btn">
                            <ElButton type="success" @click="upload">发布</ElButton>
                        </div>
                    </ElFormItem>
                </ElForm>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElForm, ElButton, ElFormItem, ElInput, ElMessage } from 'element-plus'
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { uploadArticle } from '@/api/comment'
import { useUserStore } from '@/store/module/user';
import { storeToRefs } from 'pinia';
import { getArticleById } from '@/api/comment';
import { getDish } from '@/api/dish'

const route = useRoute()

const foodId = route.query.id

const articleId = route.query.articleId
const commentContent = ref('')

const foodInfo = ref({
    user: {
        nick: ''
    },
    dish: {
        name: ''
    },
    article: {
        text: ''
    },
    address: '',
    storeName: ''
})

if (articleId) {
    getArticleById(articleId).then(
        res => {
            if (res.status === 200) {
                commentContent.value = res.data.article.text
                foodInfo.value = res.data
            }
        }
    )
}

if (foodId) {
    getDish(foodId).then(
        res => {
            if (res.status === 200) {
                const data = res.data
                foodInfo.value.dish.name = data.dishDto.dish.name
                foodInfo.value.address = data.store.address
                foodInfo.value.storeName = data.store.name
            }
        }
    ).catch(
        err => new Error(err)
    )
}

const router = useRouter()

const userStore = useUserStore()
const { userId } = storeToRefs(userStore)



const upload = () => {
    let params = {
        userId: userId.value,
        dishId: foodId,
        text: commentContent.value
    }
    uploadArticle(params).then(
        res => {
            if (res.data) {
                ElMessage.success(res.data)
                router.push({
                    path: 'commentSuccess'
                })
            }
        }
    ).catch(
        err => new Error(err)
    )

}

</script>
<style scoped lang="less">
.comment {
    display: flex;
    justify-content: center;
    padding: 50px 250px;
    background-color: var(--theme-color);

    .mainArea {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 50px;
        padding: 50px 100px;
        width: 467px;
        height: 361px;
        background-color: #fff;

        .foodInfo {
            display: flex;
            align-items: center;
            gap: 20px;

            img {
                width: 100px;
                height: 100px;
            }

            .info {
                display: flex;
                flex-direction: column;
                gap: 20px;

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

        .score {

            .btn {
                display: flex;
                justify-content: flex-end;
                width: 100%;
            }
        }
    }
}
</style>