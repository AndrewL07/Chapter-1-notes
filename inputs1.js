const readline= require('readline-sync');
//1
let answer = readline.question("Would you like to here a joke?\nyes or no\nYour answer: ");
console.log(answer);
if (answer == "yes") {
    console.log(`How does a cucumber become a pickle? It goes through a jarring experience.`);
} else {
    console.log("it's okay")
}

//2 % 3
let number = readline.question("give me a number");
if(number%2 ==0){
    console.log("divisible by 2");
} else {
    console.log("not divisible by 2");
}
if(number%6 ==0){
    console.log("divisible by 6");
} else {
    console.log("not divisible by 6");
}
if (number%3 ==0){
    console.log("divisible by 3");
} else {
    console.log( "not divisible by 3");
}
if (number%4 ==0){
    console.log("divisible by 4");
} else {
    console.log( "not divisible by 4");
}
if (number%5 ==0){
    console.log("divisible by 5");
} else {
    console.log( "not divisible by 5");
}


