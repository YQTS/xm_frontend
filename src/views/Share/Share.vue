<!-- 菜品路由 -->
<template>
    <div class="shareground">
        <div class="commentShow">
            <div class="commentShowItem">
                <div v-for="item in rows_1">
                    <CommentCard :food="item.food" :article="item.article"></CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_2">
                    <CommentCard :food="item.food" :article="item.article"></CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_3">
                    <CommentCard :food="item.food" :article="item.article"></CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_4">
                    <CommentCard :food="item.food" :article="item.article"></CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_5">
                    <CommentCard :food="item.food" :article="item.article"></CommentCard>
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
import CommentCard from '@/components/CommentCard'
import { usePagination } from '@/hooks/usePagination'

const rows = ref([
    {
        article: {
            user: '缘起庭树',
            createTime: '2023/12/23',
            content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容'
        },
        food: {
            name: '黄焖鸡米饭',
            img: [],
            shop: '青海老乡鸡',
            location: '西苑新食堂一楼'
        }
    },
    {
        article: {
            user: '缘起庭树',
            createTime: '2023/12/23',
            content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容'
        },
        food: {
            name: '黄焖鸡米饭',
            img: [],
            shop: '青海老乡鸡',
            location: '西苑新食堂一楼'
        }
    },
    {
        article: {
            user: '缘起庭树',
            createTime: '2023/12/23',
            content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容'
        },
        food: {
            name: '黄焖鸡米饭',
            img: [],
            shop: '青海老乡鸡',
            location: '西苑新食堂一楼'
        }
    },
    {
        article: {
            user: '缘起庭树',
            createTime: '2023/12/23',
            content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容'
        },
        food: {
            name: '黄焖鸡米饭',
            img: [],
            shop: '青海老乡鸡',
            location: '西苑新食堂一楼'
        }
    },
    {
        article: {
            user: '缘起庭树',
            createTime: '2023/12/23',
            content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容'
        },
        food: {
            name: '黄焖鸡米饭',
            img: [],
            shop: '青海老乡鸡',
            location: '西苑新食堂一楼'
        }
    },
    {
        article: {
            user: '缘起庭树',
            createTime: '2023/12/23',
            content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容'
        },
        food: {
            name: '黄焖鸡米饭',
            img: [],
            shop: '青海老乡鸡',
            location: '西苑新食堂一楼'
        }
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
.shareground {
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 20px 80px;

    .commentShow {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .commentShowItem {
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