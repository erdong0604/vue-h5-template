## Vue H5模板

开箱即用。


## 使用方式

``` shell
# clone the project
git clone https://github.com/erdong0604/vue-h5-template.git

# enter the project directory
cd vue-h5-template

# install dependency
yarn or npm install

# develop
yarn serve or npm run serve
```


## 目录


```
|-- mygithub
    |-- public
    |   |-- favicon.ico  
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- apis  api入口
        |   |-- index.js
        |-- assets  静态资源文件夹
        |   |-- images
        |-- components  公用组件
        |-- request  axios封装
        |   |-- config.js  axios配置
        |   |-- encryParams.js  参数加密
        |   |-- index.js  入口
        |-- router  路由
        |   |-- config.js  路由配置
        |   |-- index.js  路由入口
        |   |-- routes.js  路由路径
        |-- store  vuex
        |   |-- index.js
        |-- styles  样式配置
        |   |-- index.less  公共样式
        |   |-- reset.less  reset样式
        |   |-- variables.less  less全局变量
        |-- utils  工具库
        |   |-- domain.js  域名
        |   |-- format.js  date转换
        |   |-- validate.js  校验
        |-- views  组件
            |-- home
                |-- index.vue
    |-- .browserslistrc 
    |-- .eslintrc.js  eslint
    |-- .gitignore  
    |-- README.md  
    |-- babel.config.js
    |-- package.json
    |-- postcss.config.js  postcss配置
    |-- vue.config.js
    |-- yarn.lock
    


```