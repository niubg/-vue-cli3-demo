import { defineConfig } from 'umi';
import routers from './src/router/index';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: routers,
});
