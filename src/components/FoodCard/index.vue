<!--  -->
<template>
    <div class="card">
        <div class="foodImg">
            <img src="@/assets/food1.jpeg"
                @click="$router.push({ path: '/foodSpecific', query: { id: food.dishDto.dish.dishId } })" />
        </div>
        <div class="foodInfo">
            <div class=" infoItem feature">
                <span>{{ food.dishDto.dish.laId }}</span>
            </div>
            <div class=" infoItem name">{{ food.dishDto.dish.name }}</div>
            <div class="infoItem location">
                <el-icon>
                    <Location color="#A3B745" />
                </el-icon>
                <span style="margin-left: 2px;">{{ food.store.address }}</span>
            </div>
            <div class=" infoItem detail">
                <!-- <div class="detailItem">
                    <el-icon>
                        <Clock color="#A3B745" />
                    </el-icon>
                    <span style="margin-left: 2px;">{{ food.createDate}}</span>
                </div> -->
                <!-- <div class="detailItem">
                    <el-icon>
                        <Notebook color="#A3B745" />
                    </el-icon>
                    <span style="margin-left: 2px;">
                        {{ food.articleNum }}
                    </span>
                </div> -->

            </div>

        </div>
    </div>
</template>

<script setup>
import { ElIcon } from 'element-plus'
import { useRouter } from 'vue-router'
const props = defineProps({
    food: {
        type: Object,
        required: true,
        default: () => { }
    }
})

</script>
<style scoped lang="less">
.card {
    border-radius: 8px;
    width: 240px;
    background-color: #fff;
    overflow: hidden;

    .foodImg {

        &:hover {
            cursor: pointer;
        }

        img {
            width: 100%;
            height: 180px;
        }
    }

    .foodInfo {
        display: flex;
        flex-direction: column;
        padding: 0 20px;

        .infoItem {
            margin: 8px 0;
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

        .name {
            font-size: 25px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }

        .detail {
            display: flex;

            .detailItem {
                display: flex;
                align-items: center;
                margin-right: 10px;
                color: #969795;
                font-size: small;

            }
        }

        .location {
            display: flex;
            align-items: center;
            font-size: 14px;


        }
    }
}
</style>