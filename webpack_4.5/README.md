splitChunks配置详情

1. 使用babel官方plugin异步引入包
    npm install babel-plugin-syntax-dynamic-import
2. 配置babelrc
    "plugins": ["syntax-dynamic-import"]
3. 魔法注释
    在异步引入模块时可以使用魔法注释对引入的模块命名打包后的名字:
    import(/* webpackChunkName: 'lodash.js' */'lodash').then(...)
4. 配置webpack.common.js
    optimization: {
        splitChunks: {
            chunks: 'all',          //async异步，initial同步， all异步同步,如果为all，则会走入vendors中，需要配置vendors
            minSize: 30000,         //文件最小30kb起，超过30kb做代码分割
            maxSize: 0,             //一般不用配置，对代码进行二次拆分
            minChunks: 1,           //某个模块至少使用多少次，进行代码分割
            maxAsyncRequests: 5,    //同时加载的模块数最多5个，超过5个的，不做代码分割，只分割前5个
            maxInitialRequests: 3,  //入口文件引入模块最多3个
            automaticNameDelimiter: '~',//打包后文件名的连接符
            name: true,
            cacheGroups: {          //缓存组，   同步引入的代码会走进这个配置里面，符合哪个配置，就会缓存进哪个配置里
                vendors: {
                    test: /[\\/]node_modules[\\/]/,     //文件来源于node_modules文件夹
                    priority: -10,              //优先级高于default，优先打包到vendors
                    filename: 'vendors.js'      //异步加载的文件在打包时不能使用filename配置打包后的文件名，上面的chunks应为all或者initial
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,   //如果一个模块重复使用了，只打包一次，直接使用被打包过的模块
                    filename: 'common.js'
                }
            }
            /* 异步加载的文件此处配置可为false
            cacheGroups: {      
                vendors: false,
                default: false
            }
            */
        }
    },