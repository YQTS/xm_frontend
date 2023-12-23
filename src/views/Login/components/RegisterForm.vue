<!--  -->
<template>
    <div class="RegisterForm">
        <ElForm>
            <ElFormItem>
                <ElInput placeholder="手机号">
                    <template #prefix>
                        <ElIcon>
                            <Phone />
                        </ElIcon>
                    </template>
                </ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElInput show-password placeholder="密码">
                    <template #prefix>
                        <ElIcon>
                            <Key />
                        </ElIcon>
                    </template>
                </ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElInput show-password placeholder="确认密码">
                    <template #prefix>
                        <ElIcon>
                            <Key />
                        </ElIcon>
                    </template>
                </ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElRow gutter="10">
                    <ElCol :span="15">
                        <ElInput placeholder="验证码"></ElInput>
                    </ElCol>
                    <ElCol :span="4">
                        <ElButton type="plain">发送验证码</ElButton>
                    </ElCol>
                </ElRow>
            </ElFormItem>
            <ElFormItem>
                <ElButton type="primary" style="width: 100%;">注册</ElButton>
            </ElFormItem>
            <ElFormItem>
                <ElButton type="plain" style="width: 100%;" @click="$emit('switch2Login')">返回登录</ElButton>
            </ElFormItem>
        </ElForm>
    </div>
</template>

<script setup>
import { ElForm, ElFormItem, ElInput, ElButton, ElIcon, ElRow, ElCol } from 'element-plus';
import { reactive } from 'vue';
</script>
<style scoped lang="less">
.RegisterForm {
    position: relative;
    width: 300px;
    height: 200px;
}
</style>