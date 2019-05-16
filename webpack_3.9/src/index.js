//import "@babel/polyfill";//弥补低版本浏览器没有的方法

const arr = [
    new Promise(() => {}),
    new Promise(() => {})
];

arr.map(item => {
    console.log(item);
})