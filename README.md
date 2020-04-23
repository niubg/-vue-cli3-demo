# umi project

## Getting Started

**配置：**
    umi、
    typeScript、
    Router、
    Less、
    axios



## 项目安装
```yarn
or
npm install
```

### 运行项目
```
yarn start
or
npm run start
```

###  项目打包
```
yarn run build
or
npm run build
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
    | | |─*.tsx             // 公用的tsx组件
    │ ├─views               // 视图页面
    | | |─home              // 当前业务视图文件夹
    | | | |─children        // 当前业务视图中的子组存放的文件夹
    | | | | |─children.tsx  // 子组件
    | | | |─home.tsx        // 当前业务视图入口文件
    | | | |─home.less       // 当前业务视图less文件
    │ ├─router              // 路由
    │ | ├─index.js       
    ├─.gitignore            // 忽略上传一些文件或配置
    ├─package.json          // npm依赖包安装的索引文件
    ├─.umirc                // umi配置文件
    └─README.md             // 项目目录接口说明