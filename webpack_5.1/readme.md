打包类库文件时，需要在output中配置如下： 
```
output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'library.js',
    library: 'library',     //如果使用script标签引入该类库，在引入后就可以使用  library.方法名  来调用类库的方法了
    libraryTarget: 'umd',   //使自己的类库可以用commonjs，AMD等语法引入
}
```
引入方法 esmodule  commonjs 等
```
import library from 'library'

const library = require('library');

require(['library'],function(){

})


<script src = 'library.js'></script>

//使用
library.math
```

若类库文件中包含其他类库，避免重复打包导致文件过大，可在webpack中配置externals
```
externals: ['lodash'],      //库文件已经引入了lodash，为避免重复打包，此处打包库文件时可以不打包lodash，用户引用此类库时可以再引用一次lodash
```