// const fullName = "Maurice Wa";
//
// let firstName = fullName.slice(0, 7);
// let lastName = fullName.slice(8);
//
// let firstChar = fullName.slice(0,1);
// let firstChar = fullName.slice(-1);
// console.log(firstChar);
// console.log(lastChar);


// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") +1);

// console.log(firstName);
// console.log(lastName);


// const email = "murillowaaijer2@outlook.com";
//
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
//
// console.log(username)
// console.log(extension)
//


// let username = window.prompt("Enter your username");
//
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
//
// console.log(username);


// const temp = 20;
//
// // if(temp > 0 && temp <= 30 ) {
// //     console.log("The weather is good.");
// // }
// // else{
// //     console.log("The weather is bad.");
// // }
//
// if(temp <= 0 || temp >= 30 ) {
//     console.log("The weather is good.");
// }
// else{
//     console.log("The weather is bad.");
// }

const isSunny = true;

if(!isSunny){
    console.log("It is cloudy.");
}
else{
    console.log("It is sunny.");
}