const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [{
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
            test:  /\.(ttf|svg|eot|woff)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'font'
                }
            }
                

            ]
        }]
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    }
}

