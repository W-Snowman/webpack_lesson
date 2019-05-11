const express = require('express');
const webpack = require("webpack");
const config = require("./webpack.config");
const complier = webpack(config);
const WebpackDevMiddleware = require("webpack-dev-middleware");

const app = express();

app.use(WebpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}));

app.listen(3000, () => {
    console.log("server is running");
});