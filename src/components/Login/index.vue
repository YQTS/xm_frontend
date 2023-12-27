<!--  -->
<template>
    <div class="login">
        <div class="bp" @click="dialogVisible = !dialogVisible">登录</div>
        <ElDialog v-model="dialogVisible" width="30%" top="30vh" :lock-scroll="true" :close-on-click-modal="false"
            :show-close="true" :append-to-body="true" title="登录">
            <div class="content">
                <ElForm :model="loginForm" :rules="rules" ref="loginFormRef">
                    <ElFormItem prop="phone">
                        <ElInput placeholder="请输入手机号" v-model="loginForm.phone">
                            <template #prefix>
                                <ElIcon>
                                    <User />
                                </ElIcon>
                            </template>
                        </ElInput>
                    </ElFormItem>
                    <ElFormItem prop="code">
                        <ElRow :gutter="10">
                            <ElCol :span="20">
                                <ElInput placeholder="验证码" v-model="loginForm.code">
                                    <template #prefix>
                                        <ElIcon>
                                            <Key />
                                        </ElIcon>
                                    </template>
                                </ElInput>
                            </ElCol>
                            <ElCol :span="4">
                                <ElButton type="default" @click="getCodeHandler">发送验证码</ElButton>
                            </ElCol>
                        </ElRow>
                    </ElFormItem>
                </ElForm>
                <div class="dialog-footer">
                    <ElRow>
                        <ElCol>
                            <ElButton type="primary" style="width: 100%;" @click="handleLogin">登录</ElButton>
                        </ElCol>
                    </ElRow>
                </div>
            </div>
        </ElDialog>
    </div>
</template>

<script setup>
import { ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElRow, ElCol, ElIcon, ElLoading, ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import { useUserStore } from '@/store/module/user';
import { storeToRefs } from 'pinia';
import { getCode, login } from '@/api/user';

const userStore = useUserStore()

const { userName, avatarUrl, phoneNumber, userId } = storeToRefs(userStore)

const dialogVisible = ref(false)

const loginFormRef = ref(null)

const loginForm = reactive({
    phone: '',
    code: ''
})
const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
const phoneValidate = (rule, value, cb) => {
    if (reg.test(loginForm.phone)) cb()
    cb(new Error('请输入有效的手机号'))
}

const rules = reactive({
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { validator: phoneValidate, trigger: 'blur' }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 5, max: 5, message: '验证码错误', trigger: 'blur' }
    ]
})

const getCodeHandler = async () => {
    if (!loginFormRef) return
    const loading = ElLoading.service({
        lock: true,
        text: "登录中...",
        background: 'rgba(0, 0, 0, 0.7)'
    })
    if (reg.test(loginForm.phone)) {
        getCode({ phoneNumber: loginForm.phone }).then(
            res => {
                if (res.data) {
                    ElMessage.success('验证码发送成功')
                }
            }
        ).catch(
            err => {
                return Promise.reject(err)
            }
        )
    }
    loading.close()

}

const handleLogin = async () => {
    if (!loginFormRef) return
    const loading = ElLoading.service({
        lock: true,
        text: "登录中...",
        background: 'rgba(0, 0, 0, 0.7)'
    })
    await loginFormRef.value.validate((valid, field) => {
        if (valid) {
            login(loginForm.phone, loginForm.code).then(
                res => {
                    if (res.data) {
                        ElMessage.success('登录成功')
                        userName.value = res.data.user?.nick || ''
                        avatarUrl.value = res.data.user?.imgUrl || ''
                        phoneNumber.value = res.data.user?.phoneNumber || ''
                        userId.value = res.data.user?.userId || ''
                        localStorage.setItem('phoneNumber', phoneNumber.value)
                    } else {
                        ElMessage.error('登录失败')
                    }
                }
            )

        }

    })
    loading.close()
}

</script>
<style scoped lang="less">
.login {
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
</style>