<!-- 菜品路由 -->
<template>
    <div class="foodground">
        <div class="foodShow">
            <div class="foodShowItem">
                <div v-for="item in rows_1">
                    <FoodCard :food="item"></FoodCard>
                </div>
            </div>
            <div class="foodShowItem">
                <div v-for="item in rows_2">
                    <FoodCard :food="item"></FoodCard>
                </div>
            </div>
            <div class="foodShowItem">
                <div v-for="item in rows_3">
                    <FoodCard :food="item"></FoodCard>
                </div>
            </div>
            <div class="foodShowItem">
                <div v-for="item in rows_4">
                    <FoodCard :food="item"></FoodCard>
                </div>
            </div>
            <div class="foodShowItem">
                <div v-for="item in rows_5">
                    <FoodCard :food="item"></FoodCard>
                </div>
            </div>
        </div>
        <div class="pagination">
            <ElPagination background layout="prev, pager, next" :total="paginationInfo.total"
                v-model:page-size="paginationInfo.pageSize" v-model:current-page="paginationInfo.currentPage">
            </ElPagination>
        </div>
    </div>
</template>

<script  setup>
import FoodCard from '@/components/FoodCard';
import { ElPagination } from 'element-plus';
import { reactive, ref, watch, toRef } from 'vue';
import { usePagination } from '@/hooks/usePagination'

const rows = ref([
    {
        id: '0',
        imgUrl: '@/assets/food1.jpeg',
        name: '黄焖鸡米饭',
        feature: ['咸口', '微辣'],
        blogTotal: 8,
        createDate: '2023/12/20',
        location: '西苑新食堂一楼'
    },
    {
        id: '1',
        imgUrl: '@/assets/food1.jpeg',
        name: '黄焖鸡米饭',
        feature: ['咸口', '微辣'],
        blogTotal: 8,
        createDate: '2023/12/20',
        location: '西苑新食堂一楼'
    },
    {
        id: '2',
        imgUrl: '@/assets/food1.jpeg',
        name: '黄焖鸡米饭',
        feature: ['咸口', '微辣'],
        blogTotal: 8,
        createDate: '2023/12/20',
        location: '西苑新食堂一楼'
    },
    {
        id: '3',
        imgUrl: '@/assets/food1.jpeg',
        name: '黄焖鸡米饭',
        feature: ['咸口', '微辣'],
        blogTotal: 8,
        createDate: '2023/12/20',
        location: '西苑新食堂一楼'
    },
    {
        id: '4',
        imgUrl: '@/assets/food1.jpeg',
        name: '黄焖鸡米饭黄焖鸡米饭黄焖鸡米饭黄焖鸡米饭',
        feature: ['咸口', '微辣'],
        blogTotal: 8,
        createDate: '2023/12/20',
        location: '西苑新食堂一楼'
    },
    {
        id: '5',
        imgUrl: '@/assets/food1.jpeg',
        name: '哇相机米饭',
        feature: ['咸口', '微辣'],
        blogTotal: 8,
        createDate: '2023/12/20',
        location: '西苑新食堂一楼'
    }
])

const rows_1 = ref([])
const rows_2 = ref([])
const rows_3 = ref([])
const rows_4 = ref([])
const rows_5 = ref([])

const { paginationInfo } = usePagination()


watch(
    () => rows.value,
    () => {
        rows.value.map((item, index) => {
            console.log(index % 5)
            switch (index % 5) {
                case 0:
                    rows_1.value.push(item)
                    break
                case 1:
                    rows_2.value.push(item)
                    break
                case 2:
                    rows_3.value.push(item)
                    break
                case 3:
                    rows_4.value.push(item)
                    break
                case 4:
                    rows_5.value.push(item)
                    break
            }
        })
    },
    {
        immediate: true
    }
)

watch(
    () => toRef(paginationInfo, 'currentPage'),
    (v) => {
        console.log('变了', v.value)
    }
)


</script>
<style scoped lang="less">
.foodground {
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 20px 80px;

    .foodShow {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .foodShowItem {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
    }

}
</style>