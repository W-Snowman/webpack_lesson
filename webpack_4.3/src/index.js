//第一种方法
//import _ from 'lodash';

//console.log(_.join(['a', 'b', 'c'],'****'));

//第二种方法（手动code splitting）
//console.log(_.join(['a', 'b', 'c'],'****'));


//第三种方法（chunk）
//import _ from 'lodash';
//console.log(_.join(['a', 'b', 'c'],'****'));

//第四种方法（动态引入）
function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Wei','Jingguo'],'-');
        return element;
    });
};

getComponent().then(element => {
    document.body.appendChild(element);
});