<!--  -->
<template>
    <div class="FoodSpecificBg">
        <div class="FoodSpecific">
            <div class="images">
                <div class="bigImage">
                    <img :src="foodInfo.list[0]">
                </div>
                <div class="smallImage">
                    <img v-for="item in foodInfo.list" :key="item" :src="item" @click="item => bigUrl.value = item">
                </div>
            </div>
            <div class="foodDetail">
                <div class="row">
                    <div class="name">
                        <span class="title">{{ foodInfo.dish.name }}</span>
                        <div class="location">
                            <el-icon color="#A3B745">
                                <Location />
                            </el-icon>
                            <span>{{ foodInfo.store.address }}</span>
                        </div>
                        <div class="rate">
                            <span>评分:</span>
                            <span class="score">{{ foodInfo.dish.score }}</span>
                        </div>
                    </div>
                </div>
                <div class="row feature">
                    <span>{{ foodInfo.dish.laId }}</span>
                </div>
                <div class="row">
                    <div class="shop">
                        <span>店铺名:</span>
                        <span>{{ foodInfo.store.name }}</span>
                    </div>
                </div>
                <div class="row">
                    <p>
                        {{ foodInfo.dish.introduction }}
                    </p>
                </div>
                <div class="row">
                    <div class="rate">
                        <span>打个分:</span>
                        <el-rate :disable="true" v-model="currentRate" :colors="colors"
                            :texts="['很差', '较差', '还行', '推荐', '力荐']" show-text />
                    </div>
                </div>
                <div class="row">
                    <ElButton type="success" style="width: 150px;" @click="handleComment">点评一下</ElButton>
                </div>
                <div class="row">
                    <div class="comment">
                        <span>相关点评:</span>
                        <el-icon color="#A3B745" size="30">
                            <Notebook />
                        </el-icon>
                        <span>8</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElRow, ElCol, ElIcon, ElButton } from 'element-plus'
import { ref, reactive, unref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDish } from '@/api/dish';

const route = useRoute()

const router = useRouter()

const currentRate = ref(0)

const foodInfo = ref({})

const getDishHandler = () => {
    if (route.query?.id) {
        getDish(route.query.id).then(
            res => {
                foodInfo.value = res.data.dishDto
            }
        ).catch(
            err => {
                return new Error(err)
            }
        )
    }
}

getDishHandler()


const handleComment = () => {
    const foodQuery = {
        name: foodInfo.dish.name,
        img: foodInfo.list[0],
        shop: foodInfo.store.name,
        location: foodInfo.store.address
    }
    router.push({
        path: '/foodComment',
        query: foodQuery
    })
}

const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])


</script>
<style scoped lang="less">
.FoodSpecificBg {
    padding: 50px 250px;
    background-color: var(--theme-color);
}

.FoodSpecific {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 50px 0;
    border-radius: 50px;
    gap: 20px;

    .foodDetail {

        width: 467px;
        height: 361px;

        .row {
            &:not(:last-child) {
                margin-bottom: 10px;
            }

            .name {
                display: flex;
                align-items: first baseline;
                gap: 20px;

                .title {
                    font-size: 30px;
                    font-weight: bold;
                }

                .location {
                    display: flex;
                    font-size: 15px;
                    align-items: center;
                }

                .rate {
                    display: flex;
                    align-items: baseline;
                    font-size: 12px;

                    .score {
                        font-size: 35px;
                        font-family: 'ink';
                    }
                }
            }

            .shop {
                display: flex;
                align-items: baseline;
                gap: 10px;

                span {
                    &:nth-child(1) {
                        font-size: 14px;
                    }
                }
            }

            .rate {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .comment {
                display: flex;
                align-items: center;
                font-size: 15px;
                gap: 10px;
                cursor: pointer;
            }
        }

        .feature {
            display: flex;
            align-items: center;
            gap: 10px;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                font-size: small;
                border-radius: 3px;
                color: white;
                background-color: #A3B745;
            }
        }
    }
}

.images {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 467px;
    height: 361px;
}

.images>.bigImage {
    width: 372px;
    height: 100%;
}

.bigImage>img {
    width: 372px;
    height: 100%;
}

.images>.smallImage {
    position: relative;
    width: 87px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}

.images>.smallImage::-webkit-scrollbar {
    position: relative;
    width: 3px;
}

.images>.smallImage::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.images>.smallImage::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.350);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.smallImage>img {
    width: 87px;
    height: 87px;
    cursor: pointer;
}

.smallImage>img:hover {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    border: 0.5px #8B6124 solid;
}
</style>