<template>
  <div class="home">
    <Button>按钮</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button, message } from 'ant-design-vue'
export default {
  name: 'Home',
  components: {
    Button,
    message
  }
}
</script>
