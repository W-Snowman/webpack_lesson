/*
import './style.css';

var btn = document.createElement('button');
btn.innerHTML = "点击";
document.body.appendChild(btn);

btn.onclick = function() {
    var list = document.createElement("div");
    list.innerHTML = "哈哈哈";
    document.body.appendChild(list);
}
*/

import number1 from './number1';
import number2 from './number2';

number1();
number2();

if(module.hot){
    module.hot.accept('./number2',() => {
        document.body.removeChild((document.getElementById('num2')));
        number2();
    });
}