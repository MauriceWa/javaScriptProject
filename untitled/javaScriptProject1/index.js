// let students = 30

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 2;

// students += 1;
// students -= 1;
// students *= 1;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;
// console.log(students);


// let result = 1 + 2 * 3 + 4 ** 2;

// console.log(result)


// prompt to use windowbox to gain user input
// let username;
//
// username = window.prompt("What's your username?")
//
// console.log(username)


// correct way to gain user input

// let username;
//
// document.getElementById("mySubmit").onclick = function (){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
//     }


//  let age = window.prompt("How old are you?");
// age = Number(age);
// age +=1;
//
// console.log(age, typeof age);


// let x = "pizza";
// let y = "pizza";
// let z = "pizza";
//
// x = Number(x);
// y = String(y);
// z = Boolean(z);
//
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


const PI = 3.14159;
let radius;
let circumference;



document.getElementById("mySubmit").onclick = function (){
    radius = document.getElementById("myText").value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference;
}