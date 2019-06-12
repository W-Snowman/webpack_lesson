1. 为每个模块注入全局变量，即每个模块都能访问的变量（这样做代码的耦合度较高，除非每个模块都要用到），如引入jquery
```
plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
]
```

2. 对某些模块，需要将模块中的this指向改为window。当模块运行在commonJs环境中时，this是指向module.exports的。在这种情况下，你可以利用import-loader，其作用是将变量引入模块内部。例子如下：
```
module.exports = {
  module: {
    rules: [{
      test: require.resolve("some-module"),
      use: 'imports-loader?this=>window'
    }]
  }
};
```

    