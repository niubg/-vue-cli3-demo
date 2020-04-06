
const path = require('path');
const Timestamp = new Date().getTime(); // 时间戳
module.exports = {
  publicPath: process.env.VUE_APP_baseURL == 'dev'
    ? "http://dev.tadu.com/"
    : process.env.VUE_APP_baseURL == 'test' 
    ? 'http://test.tadu.com/'
    : "./",
  outputDir: "dist",
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        filename: `js/[name].${process.env.TERM_PROGRAM_VERSION}.${Timestamp}.js`,
        chunkFilename: `js/[name].${process.env.TERM_PROGRAM_VERSION}.${Timestamp}.js`
      }
  },
  css: {
    // 配置css模块
		loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
		}

  },
  productionSourceMap: false,
  devServer: {
    open: "Chrome",
    port: 8080,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://api.niubg.vip/api/",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/global.less')]
    }
  },
  chainWebpack: config => {
    // console.log('打包环境1', process.env)
    console.log('打包环境', process.env.VUE_APP_baseURL)
    console.log("版本", process.env.TERM_PROGRAM_VERSION)
    // console.log('打包环境3', config)
   
  }
}