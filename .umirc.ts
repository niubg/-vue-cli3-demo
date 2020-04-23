import { defineConfig } from 'umi';
import router from './src/router/index';

export default defineConfig({
  locale: { antd: true },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: router,
  proxy: {
    '/api': {
      target: 'http://api.niubg.com/api/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
});
