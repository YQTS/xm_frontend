<!--  -->
<template>
    <div class="card">
        <div class="cardItem user">
            <img src="@/assets/food1.jpeg" />
            <span>{{ article.user }}</span>
        </div>
        <div class="cardItem food">
            <img src="@/assets/food1.jpeg" />
            <div class="detail">
                <span class="foodName">{{ food.name }}</span>
                <div class="location">
                    <el-icon>
                        <Location color="#A3B745" />
                    </el-icon>
                    <span style="margin-left: 2px;">{{ food.location }}</span>
                </div>
            </div>
        </div>
        <div class="cardItem article">
            <p @click="() => $router.push({ path: '/commentDetail', query: { articleId: article.id } })">{{ article.content
            }}</p>
        </div>
        <div class="cardItem aInfo">
            <div class="star">
                <el-icon :size="20">
                    <Star color="#A3B745" />
                </el-icon>
                <span>8</span>
            </div>
            <div class="date">
                <el-icon :size="20">
                    <Clock color="#A3B745" />
                </el-icon>
                <span style="margin-left: 2px;">{{ article.createTime }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElIcon } from 'element-plus';
const props = defineProps({
    article: {
        type: Object,
        required: true,
        default: () => { }
    },
    food: {
        type: Object,
        required: true,
        default: () => { }
    }
})
</script>
<style scoped lang="less">
.card {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 240px;
    padding: 10px;
    background-color: #fff;
    overflow: hidden;


    .cardItem {
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    .user {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        margin-left: 10px;
        cursor: pointer;

        img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }

        span {
            opacity: 0.7;
        }
    }

    .food {
        display: flex;
        gap: 10px;
        padding: 5px;
        border-radius: 5px;
        background-color: #F6F2DC;
        cursor: pointer;

        img {
            width: 80px;
            height: 80px;
        }

        .detail {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .foodName {
                font-size: 20px;
                font-weight: bold;
            }

            .location {
                display: flex;
                align-items: center;
            }
        }
    }

    .article {
        padding: 10px;
        cursor: pointer;

        p {
            text-indent: 2em;

            &:hover {
                text-decoration: underline dashed #0000006c;
            }

        }
    }

    .aInfo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 15px;
        color: #00000059;
        gap: 20px;

        .star {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .date {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
}
</style>