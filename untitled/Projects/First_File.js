console.log("Hello, World!");


let x = 42;
let y = 12;
let z = x + y;


console.log( '\n' + z)

let blockScopedVariable;

if (true) {
    blockScopedVariable = "I'm only accessible inside this block!";
}

console.log( '\n' + blockScopedVariable);


let a = "apple";
let b = 120;
let c = 120.1;

console.log( '\n' + '\n' + a + '\n' + b + '\n' + c)
