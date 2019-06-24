### webpack模块化工具学习

### 如何将js文件进行模块化
    #### module.exports require()
    #### 自定义文件，引入是需要使用 ./
    #### npm 下载的文件，不需要 ./

### 如何使用第三方
    #### 1.在npm服务器中下载第三方
    #### 2.require（）第三方

### 如何将静态文件模块化
    #### 1.创建css文件
    #### 2.下载对应的加载器
    #### 2.修饰我们的css文件  ！CSS-loader

#### 如何配置webpack.config.js
    #### 出口文件  入口文件  模块 加载器

#### 如何使用package.json   启动项目
    #### scripts “build”  “start”

#### 如何将es6语法转换为es5
    #### babel  包括一下三个指令安装
    npm install babel-loader --save-dev
    npm install babel-core --save-dev
    npm install babel-preset-env  --save-dev