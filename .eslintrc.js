
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "no-undef": "off",
    "semi": [0, "always"], // 语句强制分号结尾
    "semi-spacing": [0, { before: false, after: true }],
    "indent": 0,
    "space-before-function-paren": [0, "always"], // 函数定义时括号前面要不要有空格
    "object-curly-spacing": "off", //大括号内是否允许不必要的空格
    "eol-last": 0, // 文件以单一的换行符结束
    "eqeqeq": 0, // 必须使用全等
    "no-unneeded-ternary": 0, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "spaced-comment": 0, //注释风格要不要有空格什么的
    "no-multi-spaces": 1, //不能用多余的空格
    "strict": 0, //使用严格模式
    "no-unused-vars": 0, // 不能有声明后未被使用的变量或参数
    "quotes": [0, "single"], // 引号类型 `` "" '',
    "no-new-object": 0,
    "handle-callback-err": 0, // 规定callback 如果有err参数，只能写出err 或者 error
    "no-tabs": 0,
    'vue/no-use-v-if-with-v-for': ['off'],
    'vue/component-name-in-template-casing': ['off'],
    'vue/name-property-casing': ['off'],
    'vue/no-unused-components': ['off'],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
