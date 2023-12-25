<!-- 点评页面 -->
<template>
    <div class="comment">
        <div class="mainArea">
            <div class="foodInfo">
                <img src="@/assets/food1.jpeg" />
                <div class="info">
                    <div class="name">{{ foodInfo.name }}</div>
                    <div class="location">
                        <el-icon color="#A3B745">
                            <Location />
                        </el-icon>
                        <span>{{ foodInfo.location }}</span>
                        <span>({{ foodInfo.shop }})</span>
                    </div>
                </div>
            </div>
            <div class="score">
                <ElForm>
                    <ElFormItem>
                        <ElInput :autosize="{ minRows: 4, maxRows: 8 }" type="textarea" placeholder="点评一下这道菜..."
                            resize="none" v-model="commentContent" :minlength="5" :maxlength="200" show-word-limit />
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

const route = useRoute()

const foodId = route.query.id

console.log(route)



const router = useRouter()

const foodInfo = ref(route.query)

const userStore = useUserStore()
const { userId } = storeToRefs(userStore)

const commentContent = ref('')

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