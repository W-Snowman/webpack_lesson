1. 打包分析
  package.json中的scripts中对webpack命令添加如下代码：
  --profile --json > stats.json
  更改后：
  scripts: {
    "dev-build": "webpack --profile --json > stats.json --config ./build/webpack.dev.js",
  }
  使用以上命令打包后，根目录会生成一个stats.json文件，在网站 http://webpack.github.io/analyse/ 中打开这个文件可以查看打包分析

2. preload与profetch

    webpack的splitChunks默认只对异步加载的代码进行codeSplitting，在异步引入模块时，使用魔法注释，打开profetch，可以让浏览器在带宽空闲时预加载暂时不使用的代码，提升用户体验:
    import (/* webpackPrefetch: true */ './click.js')

    不推荐使用preload，它会让不使用的代码和主代码一起加载

3. chrome中使用Coverage 工具动态分析代码覆盖率，优化用户体验

