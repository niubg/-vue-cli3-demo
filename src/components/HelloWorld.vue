<template>
  <div class="hello">
    <div>{{this.$store.state.name}}</div>
    <div>{{this.$store.state.storeBranch.name}}</div>
    <div v-if="provideShow">方法暴露</div>
    <Button type="info">按钮</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Button } from 'vant';
export default {
  name: 'HelloWorld',
  components: {
    Button
  },
  props: {
    msg: String
  },
  data() {
    return {
      provideShow: false
    }
  },
  created() {
    this.$hybrid.provide = this.provide
    // window.TaduNative.showConfirmDialog("离开", "是否保存当前内容", "确认", "取消", "provide")
  },
  mounted() {},
  methods: {
    ...mapActions(['getInfo']),
    provide() {
      this.provideShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
