/* tree shaking 只支持ES Module语法，不支持CommonJs
作用：在打包时，只打包使用的模块代码，未使用的忽略
1. webpack.config.js中，development模式下，配置
optimization: {
    usedExports: true
},
production模式下，不需要配置optimization,
2. package.json中配置
    "sideEffects": false,  (false表示不需要忽略任何文件)
或
    "sideEffects": ["*.css","@babel/polyfill"],  (数组中的文件都在打包时会被tree shaking 忽略掉，这些文件的特点是都没有导出)
*/

import { add } from "./math.js";

add(1,2);