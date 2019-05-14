const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
//plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
module.exports = {
    mode: 'development',
    // development 模式下： cheap-module-eval-source-map
    // production 模式下： cheap-module-source-map
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 3030,
        hot: true,
        hotOnly: true
    },
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',//为webpack和js之间搭建桥梁
            options: {
                presets: [["@babel/preset-env",{
                    useBuiltIns: 'usage'
                }]]//对es6语法进行转换
            }
        },{
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                    limit: 20480
                }
            }]
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader'
                },
                'sass-loader',
                'postcss-loader'
            ]
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        },{
            test:  /\.(ttf|svg|eot|woff)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'font'
                }
            }]
        }]
    },
    plugins: [
        //HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js文件自动引入。
        new HtmlWebpackPlugin({
            template: 'src/index.html'  //配置模板
        }),
        //在打包之前运行，自动清除之前打包的内容，即打包输出output.path路径下的内容
        new CleanWebpackPlugin(),   //2.0之后的版本不用添加参数了,
        new webpack.HotModuleReplacementPlugin()    //webpack的热更新模块插件
    ],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: '[name].bundle.js'
    }
}


