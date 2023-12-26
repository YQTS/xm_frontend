<!--  -->
<template>
    <div class="articleMain">
        <div class="rows">
            <div class="article" v-for="item in commentRows" :key="item.article.articleId">
                <CommentCard :showUser="false" :article="item.article" :food="item.dish" :address="item.address"
                    @clickArticle="editArticle" />
            </div>
        </div>
        <div class="pagination">
            <ElPagination background layout="prev, pager, next" :total="paginationInfo.total"
                v-model:page-size="paginationInfo.pageSize" v-model:current-page="paginationInfo.currentPage">
            </ElPagination>
        </div>
    </div>
</template>

<script setup>
import CommentCard from '@/components/CommentCard'
import { usePagination } from '@/hooks/usePagination'
import { getUserArticle } from '@/api/comment'
import { useUserStore } from '@/store/module/user';
import { ref, toRef, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ElPagination } from 'element-plus';
const userStore = useUserStore()

const { userId } = userStore

const { paginationInfo } = usePagination()

paginationInfo.pageSize = 6

const commentRows = ref([])

const router = useRouter()

const editArticle = (articleId) => {
    router.push({ path: '/foodComment', query: { articleId } })
}

watch(
    () => toRef(paginationInfo, 'currentPage'),
    () => {
        getUserArticle(userId, paginationInfo.pageSize, paginationInfo.currentPage).then(
            res => {
                commentRows.value = res.data.records
                paginationInfo.total = res.data.total
            }
        ).catch(
            err => new Error(err)
        )
    },
    {
        immediate: true
    }
)




</script>
<style scoped lang="less">
.articleMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-left: 10px;
    width: 100%;
    height: 95%;
    padding-top: 40px;
    position: relative;

    .rows {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .article {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 240px;
            box-shadow: rgba(1, 6, 20, 0.12) 0px 30px 50px 0px;
        }
    }
}

.pagination {
    position: absolute;
    bottom: 20px;
}
</style>