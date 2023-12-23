<template>
    <div id="paging">
        <div @click="changePage(false)" :class="{ disabled: currentPage === 1 }">上一页</div>
        <span v-if="currentPage > 3">...</span>
        <span @click="changePage(item)" v-for="item in list" :key="item" :class="{ active: currentPage === item }">{{ item
        }}</span>
        <span v-if="currentPage < totalPage - 2">...</span>
        <div @click="changePage(true)" :class="{ disabled: currentPage === totalPage }">下一页</div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref, useAttrs } from 'vue';

const props = defineProps({
    // 一页中的条数
    pageLimit: Number,
    // 总共有多少数据
    itemNumber: Number
})

const attrs = useAttrs()

// 总页数
const totalPage = computed(() => Math.ceil(props.itemNumber / props.pageLimit))
// 当前页数
const currentPage = ref(attrs.page || 1)

const list = computed(() => {
    const result = []
    if (totalPage.value <= 5) {
        for (let i = 1; i <= totalPage.value; i++) {
            result.push(i)
        }
    } else {
        if (currentPage.value <= 2) {
            for (let i = 1; i <= 5; i++) {
                result.push(i)
            }
        } else if (currentPage.value >= totalPage.value - 1) {
            for (let i = totalPage.value - 4; i <= totalPage.value; i++) {
                result.push(i)
            }
        } else {
            for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
                result.push(i)
            }
        }
    }
    return result
})



const emit = defineEmits(['change_page'])


function changePage(select) {
    if (select === true) {
        if (currentPage.value === totalPage.value) {
            return
        } else {
            currentPage.value += 1
        }
    } else if (select === false) {
        if (currentPage.value === 1) {
            return
        } else {
            currentPage.value -= 1
        }
    } else {
        currentPage.value = select
    }
    emit('change_page', currentPage.value)
}

</script>

<style scoped lang="less">
#paging {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    user-select: none;

    >span {
        display: inline-block;
        position: relative;
        text-align: center;
        width: 30px;
        padding: 2px 0;
        margin: 0 5px;
        background-color: #F4F4F5;
        color: #606266;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            color: #5cacf2;
        }

        &.active {
            background-color: #5cacf2;
            color: white;
        }
    }


    >div {
        display: inline-block;
        position: relative;
        text-align: center;
        width: 50px;
        padding: 2px 0;
        background-color: #F4F4F5;
        color: #606266;
        cursor: pointer;

        &:hover {
            color: #5cacf2;
        }

        &.disabled {
            background-color: #F5F7FA;
            color: #B2B5BB;
            cursor: not-allowed;
        }
    }
}
</style>