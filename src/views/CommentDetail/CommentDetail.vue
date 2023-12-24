<!--  -->
<template>
    <div class="bg">
        <div class="commentDetail">
            <div class="userInfo">
                <div class="user">
                    <img style="width: 50px; height: 50px;border-radius: 50%;" src="@/assets/food1.jpeg" />
                    <div class="userDetail">
                        缘起庭树
                    </div>
                </div>
                <div class="star">
                    <el-icon :size="25">
                        <Star color="#A3B745" />
                    </el-icon>
                </div>
            </div>
            <div class="content">
                <p>
                    这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容
                    这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容
                    这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容
                    这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容
                    这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容
                    这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容
                </p>
            </div>
            <div class="food">
                <img style="width: 80px;height: 80px;" src="@/assets/food1.jpeg" />
                <div class="info">
                    <div class="name">黄焖鸡米饭</div>
                    <div class="location">
                        <el-icon color="#A3B745">
                            <Location />
                        </el-icon>
                        <span>新食堂一楼</span>
                        <span>黄焖鸡米饭</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElIcon } from 'element-plus';
// 根据文章id获取信息
</script>
<style scoped lang="less">
.bg {
    display: flex;
    justify-content: center;
    background-color: var(--theme-color);
    padding: 50px 250px;

    .commentDetail {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 50px;
        padding: 50px 100px;
        width: 467px;
        background-color: #fff;

        .userInfo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            .user {
                display: flex;
                align-items: center;
                gap: 20px;

            }

            .star {
                cursor: pointer;
            }
        }

        .content {
            p {
                text-indent: 2em;
            }
        }

        .food {
            display: flex;
            padding: 20px;
            gap: 20px;
            background-color: #F6F2DC;

            .info {
                display: flex;
                flex-direction: column;
                gap: 20px;

                .name {
                    font-size: 25px;
                    font-weight: bold;
                }

                .location {
                    display: flex;
                    align-items: center;
                    font-size: 15px;
                }
            }
        }
    }
}
</style>