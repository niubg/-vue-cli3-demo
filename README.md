# template

**配置：**
    vue-cli3、
    Babel7、
    Router、
    Vuex、
    Less、
    ESLint

**UI库：**
    ant-design

## 项目安装
```
npm install
```

### 运行项目
```
npm run start
or
npm start
```

###  项目打包
```
npm run build
```

### 项目代码规则校验
```
npm run lint
```
### 目录结构

    ├─dist                  // 打包后生成的文件     
    ├─node_modules          // node安装依赖包
    ├─src                   // 页面以及逻辑文件夹
    │ ├─assets       
    | | ├─less              // 全局less样式
    | | | ├─global.less
    | | ├─img               // 图片目录
    | | | ├─*.png/jpg
    │ ├─components          // 公共组件
    | | |─*.vue             // 公用的vue组件
    │ ├─views               // 视图页面
    | | |─home              // 当前业务视图文件夹
    | | | |─children        // 当前业务视图中的子组存放的文件夹
    | | | | |─children.vue  // 子组件
    | | | |─home.vue        // 当前业务视图入口文件
    | | | |─home.less       // 当前业务视图less文件
    │ ├─router              // 路由
    │ | ├─index.js       
    │ ├─store               // 状态
    │ | ├─index.js       
    │ ├─App.vue             // 页面入口文件
    │ ├─main.js             // 程序入口文件，加载各种公共组件
    ├─public
    │ ├─index.html          // 入口html文件
    │ ├─favicon.ico         // 图标
    ├─.eslintrc.js          // 代码规范化配置文件
    ├─.gitignore            // 忽略上传一些文件或配置
    ├─postcss.config.js     // 用js来处理css   
    ├─babel.config.js       // babel编译配置文件
    ├─package.json          // npm依赖包安装的索引文件
    ├─vue.config.js         // vue-cli3配置文件
    └─README.md             // 项目目录接口说明
