<!--  -->
<template>
    <div class="basicInfo">
        <ElRow>
            <ElCol>
                <img style="width: 200px; height: 200px; border-radius: 50%;" :src="userBasicInfo.avatarUrl" />
            </ElCol>
        </ElRow>
        <ElRow>
            <ElCol :span="10">
                <div class="colItem">
                    <div class="label">昵称</div>
                    <ElInput disabled v-model="userBasicInfo.nick"></ElInput>
                </div>
            </ElCol>
            <ElCol :span="10">
                <div class="colItem">
                    <div class="label">手机号</div>
                    <ElInput disabled v-model="userBasicInfo.phoneNumber"></ElInput>
                </div>
            </ElCol>
        </ElRow>
        <ElRow>
            <ElCol :span="10">
                <div class="colItem">
                    <div class="label">性别</div>
                    <ElInput disabled v-model="userBasicInfo.gender"></ElInput>
                </div>
            </ElCol>
            <ElCol :span="10">
                <div class="colItem">
                    <div class="label">生日</div>
                    <ElInput disabled v-model="userBasicInfo.birthday"></ElInput>
                </div>
            </ElCol>
        </ElRow>
    </div>
</template>

<script setup>
import { ElForm, ElButton, ElRow, ElCol, ElFormItem, ElInput } from 'element-plus';
import { reactive } from 'vue';
import { useUserStore } from '@/store/module/user'
import { storeToRefs } from 'pinia';
import { getUserByPhone } from '@/api/user'

const userBasicInfo = reactive({
    nick: '',
    gender: '',
    birthday: '',
    phoneNumber: '',
    avatarUrl: '',
})
getUserByPhone(localStorage.getItem('phoneNumber')).then(
    res => {
        const user = res.data.user
        userBasicInfo.nick = user.nick
        userBasicInfo.gender = user.gender
        userBasicInfo.birthday = user.birthday
        userBasicInfo.userId = user.userId
        userBasicInfo.avatarUrl = user.imageURL
        console.log(res)
    }
).catch(
    err => new Error(err)
)


console.log(userBasicInfo)




</script>
<style scoped lang="less">
.basicInfo {
    width: 100%;
    padding: 50px;

    .el-row {
        margin-bottom: 40px;
    }

    .colItem {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 40px;

        .label {
            width: 120px;
        }
    }
}
</style>