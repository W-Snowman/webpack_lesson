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
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    }
}

