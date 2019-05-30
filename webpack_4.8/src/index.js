//使用es7 异步函数简化代码
//  async function getComponent() {
//     const { default: _} = await import(/* webpackChunkName: 'lodash.js' */'lodash');
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Wei','Jingguo'],'-');
//     return element;
//  }


// document.addEventListener('click',() => {
//     getComponent().then(element => {
//         document.body.appendChild(element);
//     });
// });

document.addEventListener('click',() => {
    import (/* webpackPrefetch: true */ './click.js').then(({ default: func }) => {
        func();
    });
});




