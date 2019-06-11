1. output配置：
    ```
    output: {
      path: path.resolve(__dirname,"../dist"),//dist文件夹放在根目录下
      filename: '[name].bundle.js',   //入口文件命名
      chunkFilename: '[name].chunk.js'    //其他js文件命名
    }
    ```

2. css代码分割

    a. 安装
    ```
    npm install --save-dev mini-css-extract-plugin
    ```
    b. 引入
    ```
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    ```
    c. 使用plugin
    ```
    new MiniCssExtractPlugin()
    ```

    d. webpack.common.js中，关于css配置项中的 'style-loader' 替换为 MiniCssExtractPlugin.loader

    e. 更改tree shaking配置，避免打包时忽略掉css文件
    ```
    webpack.common.js中:
      optimization: {
        usedExports: true,
      }
    package.json中:
      "sideEffects": [
        "*.css"
      ],
      ```
    f. 该插件已支持HMR热更新，不用区分dev和build

3. 对打包的css代码压缩

    a. 安装
    ```
    npm install --save-dev optimize-css-assets-webpack-plugin
    ```
    b. 引入
    ```
    const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
    ```
    c. 使用   在optimization中配置
    ```
    minimizer: [
        new OptimizeCSSAssetsPlugin({})
    ]
    ```
    d. 多个css文件打包到同一个css文件中,在optimization中配置
      ```
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      }
      ```
    e. 根据入口文件将css文件分别打包，在optimization中配置
      ```
      splitChunks: {
        cacheGroups: {
          fooStyles: {
            name: 'foo',
            test: (m, c, entry = 'foo') =>
              m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
            chunks: 'all',
            enforce: true,
          },
          barStyles: {
            name: 'bar',
            test: (m, c, entry = 'bar') =>
              m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
            chunks: 'all',
            enforce: true,
          },
        },
      }
      ```
    