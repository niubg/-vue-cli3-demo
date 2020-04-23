import { defineConfig } from 'umi';
import router from './router/index'

export default defineConfig({
    locale: { antd: true },
    nodeModulesTransform: {
      type: 'none',
    },
    routes: router,
});