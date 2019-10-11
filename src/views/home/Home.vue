<template>
    <div class="home">
        <Navbar :navTitle="navTitle"/>
        <div class="myInfo">
            <div class="userInfo">您好！天线宝宝</div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/Navbar"
export default {
    components: {
        Navbar
    },
    props: [],
    data() {
        return {
            navTitle: "作者专区"
        }
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="less" scoped>
    @import "./home.less";
</style>