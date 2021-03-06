const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
//plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
module.exports = {
    entry: {
        main: './src/index.js',
        //lodash: './src/lodash.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',//为webpack和js之间搭建桥梁
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
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: 'vendors.js'  //异步加载的文件在打包时不能使用filename配置打包后的文件名，上面的chunks应为all或者initial
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,
                    filename: 'common.js'
                }
                
            }
        }
    },
    output: {
        path: path.resolve(__dirname,"../dist"),//dist文件夹放在根目录下
        filename: '[name].bundle.js'
    }
}


