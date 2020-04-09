<template>
  <div id="app">
    <div>
       <!--缓存组件-->
       <transition>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
       </transition>
      
      <!--end 缓存组件-->
      <router-view v-if="!$route.meta.keepAlive"></router-view>

      <!--全局加载框-->
      <div class="loadingBg" v-show="this.$store.state.globalLoading"></div>
      <div class="loading" v-show="this.$store.state.globalLoading">
            <van-loading type="spinner" color="#fff" size="36px" vertical>加载中...</van-loading>
      </div>
      </div>
      <!--end 全局加载框-->
  </div>
</template>
<script>
import { Loading } from 'vant';
export default {
  name: 'App',
  components: {
    [Loading.name]: Loading
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 750px;
  margin: 0 auto;
}
</style>
