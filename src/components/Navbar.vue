<template>
    <div class="header">
        <van-nav-bar
            fixed
            :left-text= "navTitle"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
import { NavBar, Toast } from 'vant'
export default {
    components: {
        [NavBar.name]: NavBar,
        Toast
    },
    props: ["navTitle"],
    data() {
        return {
            title: "返回"
        }
    },
    created() {},
    mounted() {},
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        }
    }
}
</script>

<style lang="less" scoped>
    .van-nav-bar {
        height: 92px;
        line-height: 92px;
    }
    .van-nav-bar__left {
        .van-icon {
            font-size: 45px;
            color: @default-fontColor;
        }
        .van-nav-bar__text {
            font-size: 37.5px;
            color: @default-fontColor;
        }
    }
</style>