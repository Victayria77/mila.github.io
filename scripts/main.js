let text = document.querySelector("h1")
let btn_1 = document.getElementById("myReset")
let btn_2 = document.getElementById("change")

// function fun_reset () { 
//     text.style.color = 'black'
// }

// function fun_change() {
//     text.style.color = 'red'
// }

btn_1.onclick = function () { 
    text.style.color = 'black';
 }
btn_2.onclick = function () { 
    text.style.color = 'red';
 }