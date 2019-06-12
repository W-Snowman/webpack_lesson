const webpack = require("webpack");
const merge = require("webpack-merge");
const commonWebpack = require("./webpack.common");
//plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
const devWebpack = {
    mode: 'development',
    // development 模式下： cheap-module-eval-source-map
    // production 模式下： cheap-module-source-map
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 3030,
        hot: true
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin()    //webpack的热更新模块插件
    ],
    output: {
        filename: '[name].bundle.js',   //入口文件命名
        chunkFilename: '[name].chunk.js'    //其他js文件命名
    }
}

module.exports = merge(commonWebpack, devWebpack);