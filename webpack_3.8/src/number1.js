function item1(){
    var num1 = document.createElement("div");
    num1.innerHTML = 1;
    num1.onclick = function() {
        num1.innerHTML = parseInt(num1.innerHTML, 10) + 1;
    };
    document.body.appendChild(num1);
}

export default item1;