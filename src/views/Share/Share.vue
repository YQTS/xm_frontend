<!-- 菜品路由 -->
<template>
    <div class="shareground">
        <div class="commentShow">
            <div class="commentShowItem">
                <div v-for="item in rows_1">
                    <CommentCard :food="item.dish" :article="item.article" :user="item.user" :address="item.address"
                        :list="item.list" @clickArticle="go2Detail">
                    </CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_2">
                    <CommentCard :food="item.dish" :article="item.article" :user="item.user" :address="item.address"
                        :list="item.list" @clickArticle="go2Detail">
                    </CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_3">
                    <CommentCard :food="item.dish" :article="item.article" :user="item.user" :address="item.address"
                        :list="item.list" @clickArticle="go2Detail">
                    </CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_4">
                    <CommentCard :food="item.dish" :article="item.article" :user="item.user" :address="item.address"
                        :list="item.list" @clickArticle="go2Detail">
                    </CommentCard>
                </div>
            </div>
            <div class="commentShowItem">
                <div v-for="item in rows_5">
                    <CommentCard :food="item.dish" :article="item.article" :user="item.user" :address="item.address"
                        :list="item.list" @clickArticle="go2Detail">
                    </CommentCard>
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
import { ElPagination } from 'element-plus';
import { reactive, ref, watch, toRef } from 'vue';
import CommentCard from '@/components/CommentCard'
import { usePagination } from '@/hooks/usePagination'
import { useRouter } from 'vue-router';
import { getArticleList } from '@/api/comment'



const rows = ref([])

const router = useRouter()

const rows_1 = ref([])
const rows_2 = ref([])
const rows_3 = ref([])
const rows_4 = ref([])
const rows_5 = ref([])

const { paginationInfo } = usePagination()


const go2Detail = (id) => {
    console.log('id', id)
    router.push({
        path: '/CommentDetail', query: {
            id: id
        }
    })
}


watch(
    () => rows.value,
    () => {
        rows.value.map((item, index) => {
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
    () => {
        getArticleList(paginationInfo.pageSize, paginationInfo.currentPage).then(
            res => {
                rows_1.value = []
                rows_2.value = []
                rows_3.value = []
                rows_4.value = []
                rows_5.value = []
                rows.value = res.data.records
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
.shareground {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
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