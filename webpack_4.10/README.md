1. 把output分开配置，在webpack.prod.js中配置contenthash，每次内容改变时，生成不同的哈希值，可以让用户在刷新页面时读取文件名不同，浏览器不再读取缓存文件
```
output {
    filename: '[name].[contenthash].js',   //入口文件命名
    chunkFilename: '[name].[contenthash].js'    //其他js文件命名
}
```

    