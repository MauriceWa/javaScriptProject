// console.log(math.PI)
// let x = 3;
// let y = 2;
// let z = 1;
//
// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z)
// let min = Math.max(x, y, z)
//
//
//
//
//
//
// console.log(max);



// const min = 50;
// const max = 100;
//
//
// let randomNum = Math.floor(Math.random() *(max - min) + min);
// console.log(randomNum);


const myBtn = document.getElementById("myBtn")
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random( ) * max) + min;
    randomNum2 = Math.floor(Math.random( ) * max) + min;
    randomNum3 = Math.floor(Math.random( ) * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}





