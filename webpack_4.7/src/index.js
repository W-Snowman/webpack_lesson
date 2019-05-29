//静态引入
// import _ from 'lodash';
// var element = document.createElement('div');
// element.innerHTML = _.join(['Wei','Jingguo'],'-');
// document.body.appendChild(element);

//console.log(_.join(['a', 'b', 'c'],'****'));

//异步引入  懒加载
// function getComponent() {
//     return import(/* webpackChunkName: 'lodash.js' */'lodash').then(({ default: _ }) => {      //使用魔法注释
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Wei','Jingguo'],'-');
//         return element;
//     });
// };

//使用es7 异步函数简化代码
 async function getComponent() {
    const { default: _} = await import(/* webpackChunkName: 'lodash.js' */'lodash');
    const element = document.createElement('div');
    element.innerHTML = _.join(['Wei','Jingguo'],'-');
    return element;
 }


document.addEventListener('click',() => {
    getComponent().then(element => {
        document.body.appendChild(element);
    });
});





