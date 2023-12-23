<!--  -->
<template>
    <div class="cs">
        <div class="me">
            <el-icon color="#67C23A" :size="50">
                <SuccessFilled />
            </el-icon>
            <span>发布成功!</span>
            <div class="goBack" @click="goBack">
                点击返回
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
    router.go(-2)
}
</script>
<style scoped lang="less">
.cs {
    display: flex;
    justify-content: center;
    min-height: 80vh;

    .me {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
        font-size: 30px;
        font-weight: bold;

        .goBack {
            margin-top: 20px;
            font-size: 15px;
            font-weight: normal;

            &:hover {
                color: rgb(73, 73, 244);
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}
</style>