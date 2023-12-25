<!--  -->
<template>
    <div class="basicInfo">
        <ElRow>
            <ElCol>
                <img style="width: 200px; height: 200px; border-radius: 50%;" src="@/assets/food1.jpeg" />
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

const userStore = useUserStore()

const { phoneNumber, userName, birthday, gender } = storeToRefs(userStore)

const userBasicInfo = reactive({
    nick: userName.value,
    gender: gender.value,
    birthday: birthday.value,
    phoneNumber: phoneNumber.value
})




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