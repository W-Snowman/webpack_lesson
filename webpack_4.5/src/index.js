//静态引入
import _ from 'lodash';
var element = document.createElement('div');
element.innerHTML = _.join(['Wei','Jingguo'],'-');
document.body.appendChild(element);

//console.log(_.join(['a', 'b', 'c'],'****'));

//异步引入
// function getComponent() {
//     return import(/* webpackChunkName: 'lodash.js' */'lodash').then(({ default: _ }) => {      //使用魔法注释
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Wei','Jingguo'],'-');
//         return element;
//     });
// };

// getComponent().then(element => {
//     document.body.appendChild(element);
// });


//引入自定义文件
// import test from './test';
// console.log(test.name);


