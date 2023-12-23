
import { onMounted, reactive, toRef, watch } from "vue"

export const usePagination = () => {
    const paginationInfo = reactive({
        pageSize: 10,
        total: 10,
        currentPage: 1
    })

    onMounted(() => {
        // 发请求
        paginationInfo.total = 100
    })

    return {
        paginationInfo
    }
}