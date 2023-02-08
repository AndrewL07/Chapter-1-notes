const readline= require('readline-sync');

let answer = readline.question("What day is it?\nYour answer: ");
console.log(answer);

let username= readline.question("Enter username ");
let password= readline.question("Enter Password ");
if(password == "abc"){
    console.log('Welcome ${username}');
} else {
    console.log("invalid");
}

let currentPrice = readLine.question("Enter current price: ");
let originalPrice = readLine.question("Enter original price: ");
let diff = originalPrice-currentPrice;
let discount = (diff/originalPrice).toFixed(2);
console.log(`discount: ${discount}`);

//Exponents
let base = Number(readline.question("Enter the base: "));
let esp = Number(readline.question("Entter the exponent: "));
let answer2 = base ** exp
console.log('${base} to the power of ${exp} = ${answer2}');

//Rounding
console.log(5.7);
console.log(Math.round(5.7));
Console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));