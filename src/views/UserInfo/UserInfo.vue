<template>
    <div class="outerBg">
        <div class="userMain">
            <aside>
                <div class="item">
                    <img src="@/assets/user.png">
                    <router-link class="optionList" :to="{ name: 'basicInfo' }"
                        active-class="optionList-active">基本信息</router-link>
                </div>
                <div class="item">
                    <el-icon :size="25">
                        <Notebook />
                    </el-icon>
                    <router-link class="optionList" :to="{ name: 'article' }"
                        active-class="optionList-active">我的文章</router-link>
                </div>
            </aside>
            <article>
                <router-view></router-view>
            </article>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.outerBg {
    background-color: var(--theme-color);
    padding: 20px 200px;
}

.userMain {
    position: relative;
    display: flex;
    border-radius: 20px;
    min-height: 90vh;
    background-color: #fff;

    >aside {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding-top: 5%;
        border-right: 1px rgba(0, 0, 0, 0.098) solid;
    }

    >article {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 3;
    }
}

.item {
    position: relative;
    display: flex;
    align-items: center;
    width: 55%;
    margin-top: 10%;
    gap: 1rem;

    &:hover {
        font-weight: 600;
    }

    >img {
        width: 25px;
        height: 25px;
    }

    >.optionList-active {
        color: black;
        text-decoration: none;
        font-weight: 600;

        &::after {
            content: ' ';
            height: 100%;
            width: 5px;
            background-color: #F6A78D;
            border-radius: 25%;
            position: absolute;
            right: -42.5%;
            z-index: 1;
        }
    }

    >.optionList {
        color: black;
        text-decoration: none;
    }
}
</style>