<!--  -->
<template>
    <div class="FoodSpecificBg" v-loading="loading">
        <div class="FoodSpecific">
            <div class="images">
                <div class="bigImage">
                    <img :src="bigURL">
                </div>
                <div class="smallImage">
                    <img v-for="item in foodInfo.dishDto.list" :key="item" :src="item.imgUrl" @click="switchPic(item)">
                </div>
            </div>
            <div class="foodDetail">
                <div class="row">
                    <div class="name">
                        <span class="title">{{ foodInfo.dishDto.dish.name }}</span>
                        <div class="location">
                            <el-icon color="#A3B745">
                                <Location />
                            </el-icon>
                            <span>{{ foodInfo.store.address }}</span>
                        </div>
                        <div class="rate">
                            <span>评分:</span>
                            <span class="score">{{ foodInfo.dishDto.dish.score }}分</span>
                        </div>
                    </div>
                </div>
                <div class="row feature">
                    <span>{{ foodInfo.dishDto.dish.laId === 1 ? '不辣' : '微辣' }}</span>
                </div>
                <div class="row">
                    <div class="shop">
                        <span>店铺名:</span>
                        <span>{{ foodInfo.store.name }}</span>
                    </div>
                </div>
                <div class="row">
                    <p>
                        {{ foodInfo.dishDto.dish.introduction }}
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
                <!-- <div class="row">
                    <div class="comment">
                        <span>相关点评:</span>
                        <el-icon color="#A3B745" size="30">
                            <Notebook />
                        </el-icon>
                        <span>8</span>
                    </div>
                </div> -->
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

const loading = ref(true)

const foodInfo = ref({
    dishDto: {
        dish: {
            dishId: 1,
            name: '',
            laId: 1,
            introduction: "",
            score: 0,
            numScore: 20,
            state: 1,
            stordId: 1
        },
        list: [],
    },
    store: {
        name: '',
        img: null,
        address: "",
        score: 9,
        state: 1,
        storeId: 1
    }
})

const bigURL = ref('')

const getDishHandler = () => {
    if (route.query?.id) {
        getDish(route.query.id).then(
            res => {
                console.log(res.data, '111')
                foodInfo.value = res.data
                bigURL.value = foodInfo.value.dishDto.list[0].imgUrl
                loading.value = false
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
    console.log(foodInfo.value)
    router.push({
        path: '/foodComment',
        query: {
            id: foodInfo.value.dishDto.dish.dishId
        }
    })
}

const switchPic = (item) => {
    bigURL.value = item.imgUrl
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
    min-height: 80vh;

    .foodDetail {

        width: 467px;
        height: 361px;

        .row {
            &:not(:last-child) {
                margin-bottom: 20px;
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