<!--  -->
<template>
    <div class="LoginForm">
        <ElForm :model="formModel">
            <ElFormItem>
                <ElInput placeholder="请输入手机号" v-model="formModel.userName">
                    <template #prefix>
                        <ElIcon>
                            <User />
                        </ElIcon>
                    </template>
                </ElInput>
            </ElFormItem>
            <!-- <ElFormItem>
                <ElInput placeholder="请输入密码" show-password v-model="formModel.password">
                    <template #prefix>
                        <ElIcon>
                            <Key />
                        </ElIcon>
                    </template>
                </ElInput>
            </ElFormItem> -->
            <ElFormItem>
                <ElRow gutter="10">
                    <ElCol :span="15">
                        <ElInput placeholder="验证码" v-model="formModel.vCode"></ElInput>
                    </ElCol>
                    <ElCol :span="4">
                        <ElButton type="plain">发送验证码</ElButton>
                    </ElCol>
                </ElRow>
            </ElFormItem>
            <ElFormItem>
                <ElButton style="width: 100%;" type="primary">登录</ElButton>
            </ElFormItem>
            <!-- <ElFormItem>
                <ElButton style="width: 100%;" type="plain" @click="$emit('switch2Register')">注册账号</ElButton>
            </ElFormItem> -->
        </ElForm>
    </div>
</template>

<script setup>
import { ElForm, ElFormItem, ElInput, ElButton, ElIcon, ElRow, ElCol } from 'element-plus';
import { reactive } from 'vue';

const formModel = reactive({
    userName: '',
    password: '',
    vCode: '',
})


</script>
<style scoped lang="less">
.LoginForm {
    position: relative;
    width: 300px;
    height: 200px;
}
</style>