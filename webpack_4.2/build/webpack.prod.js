const merge = require("webpack-merge");
const commonWebpack = require("./webpack.common");
//plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
const prodWebpack = {
    mode: 'production',
    // development 模式下： cheap-module-eval-source-map
    // production 模式下： cheap-module-source-map
    devtool: 'cheap-module-source-map'
}

module.exports = merge(commonWebpack, prodWebpack);


