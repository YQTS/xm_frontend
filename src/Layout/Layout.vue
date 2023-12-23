<!--  -->
<template>
    <ElContainer>
        <ElHeader height="150px" style="padding: 0;">
            <headerPart></headerPart>
        </ElHeader>
        <ElMain style="padding: 0;">
            <RouterView class="view"></RouterView>
        </ElMain>
    </ElContainer>
</template>

<script setup>
import headerPart from '@/components/Header/index.vue'
import { ElContainer, ElHeader, ElMain } from 'element-plus'
</script>
<style scoped lang="less">
.view {
    background-color: var(--theme-color);
}
</style>