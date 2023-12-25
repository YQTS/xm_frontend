<!--  -->
<template>
    <div class="article">
        <div class="rows">
            <div class="article" v-for="item in commentRows" :key="item.article.articleId">
                <CommentCard :showUser="false" :article="item.article" :food="item.dish" @clickArticle="editArticle" />
            </div>
        </div>
        <ElPagination background layout="prev, pager, next" :total="paginationInfo.total"
            v-model:page-size="paginationInfo.pageSize" v-model:current-page="paginationInfo.currentPage" />
    </div>
</template>

<script setup>
import CommentCard from '@/components/CommentCard'
import { usePagination } from '@/hooks/usePagination'
import { getUserArticle } from '@/api/comment'
import { useUserStore } from '@/store/module/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElPagination } from 'element-plus';
const userStore = useUserStore()

const { userId } = userStore

const { paginationInfo } = usePagination()

paginationInfo.pageSize = 6

const commentRows = ref([])

getUserArticle(userId, paginationInfo.pageSize, paginationInfo.currentPage).then(
    res => {
        console.log(res.data)
        commentRows.value = res.data.records
    }
).catch(
    err => new Error(err)
)
const router = useRouter()
const editArticle = (id) => {
    console.log(id)
    router.push({ path: '/foodComment', query: { id: id } })
}



</script>
<style scoped lang="less">
.article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-left: 10px;

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
</style>