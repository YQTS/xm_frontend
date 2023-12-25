
import { onMounted, reactive, toRef, watch } from "vue"

export const usePagination = () => {
    const paginationInfo = reactive({
        pageSize: 10,
        total: 10,
        currentPage: 1
    })

    return {
        paginationInfo
    }
}