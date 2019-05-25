Code Splitting  代码分割

1. 未做代码分割
    假设index.js引入的lodash文件有1Mb
    逻辑代码index.js本身有1Mb
    打包后的main.js  为2Mb
    若逻辑代码改变，用户需重新加载main.js，用户体验差。


2. 手动代码分割
    在src目录下新建lodash.js,把index.js引入lodash的代码移动到这个文件内
    webpack.common.js中配置入口文件lodash

    此时打包后会输出两个js文件:main.js和lodash.js，逻辑代码改变，用户只需加载main.js，而lodash.js则在用户的浏览器中缓存，改善用户体验

3. 使用webpack自带的chunk代码分割（静态引入包）(推荐)
    webpack.common.js中配置optimization如下：
    optimization:{
        splitChunks: {
            chunks: 'all'
        }
    }

    打包输出两个js： main.js和vendors~main.js

4. 动态引入组件
    npm install babel-plugin-dynamic-import-webpack -D
    在.babelrc文件中添加配置：
    "plugins": ["dynamic-import-webpack"],

    打包输出两个js文件： main.js和0.js