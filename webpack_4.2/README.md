使用webpack时需要切换开发模式和生产模式，为方便使用这两个模式，可以将webpack的配置文件修改如下：
1. 在根目录下新建build文件夹
2. build下新建webpack.common.js, webpack.dev.js, webpack.build.js
3. 把两个模式公用的配置项都放在webpack.common.js中
4. npm install webpack-merge -D
5. 在webpack.dev.js和webpack.build.js中，分别写开发模式和生产模式所需的配置，最后合并。
引入：       const merge = require("webpack-merge");
            const commonWebpack = require("./webpack.common");
导出：       module.exports = merge(commonWebpack, prodWebpack);
6. package.json中配置scripts
  "scripts": {
    "dev": "webpack-dev-server --config ./build/webpack.dev.js",
    "build": "webpack --config ./build/webpack.prod.js"
  },

7.  运行：
    development:  npm run dev
    production:   npm run build
