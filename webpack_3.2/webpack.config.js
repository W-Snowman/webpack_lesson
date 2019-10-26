const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images', 
                    limit: 20480
                }
            }]
        }]
    },
    output: {
        path: path.resolve(__dirname,"dist"),  
        filename: 'bundle.js'
    }
}

