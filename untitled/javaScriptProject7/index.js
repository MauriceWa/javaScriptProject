// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message)

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon!";
// console.log(greeting)

// let isStudent = true;
// let message = isStudent ? "You are as student" : "You are not a student";
// console.log(message)

// let purchaseAmount = 125;
// let discount = purchaseAmount > 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)} `)

// let day = 1;
// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`)
// }

// let testScore = 92;
// let letterGrade;
//
// switch(true){
//     case testScore >=90:
//         letterGrade = "A";
//         break;
//     case testScore >=80:
//         letterGrade = "B";
//         break;
//     case testScore >=70:
//         letterGrade = "C";
//         break;
//     case testScore >=60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
// }

// let userName = "     Maurice Wa   ";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("r"));
// console.log(userName.lastIndexOf("a"))
// console.log(userName.length)
//
// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// userName = userName.repeat(3);
//
// console.log(userName)

// let result = userName.startsWith(" ")
// console.log(result)
//
// if(result) {
//     console.log("You're username can't begin with ' ' ");
// }
// else{
//     console.log(userName);
// }

// let result = userName.includes(" ")
// if(result) {
//     console.log("You're username can't include with ' ' ");
// }


let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);