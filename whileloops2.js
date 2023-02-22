const readline= require('readline-sync');

// 1
let answer = readline.question("Do you want to quit Y or N: ");
while (answer!="Y" && answer!="N"){
    console.log("invalid choice");
    answer = readline.question("Enter Y or N ");
}
console.log(`You typed ${answer}`);

//2
let a = readline.question("Do you want to quit Y or N: ");
while (a!="Y" && a!="N" && a!="y" && a!="n"){
    console.log("invalid choice");
    answer = readline.question("Enter Y or N ");
}
console.log(`You typed ${answer}`);

// 3
let b = readline.question("Choose between option A,B, or C: ");
while (b!="A" && b!="B" && b!="C"){
    console.log("invalid choice");
    answer = readline.question("Choose between option A,B, or C ");
}
console.log(`You typed ${answer}`);

//4
let c = readline.question("Choose between option 1,2, or 3: ");
while (c!="1" && c!="2" && c!="3"){
    console.log("invalid choice");
    answer = readline.question("Choose between option 1,2, or 3 ");
}
console.log(`You typed ${answer}`);

//5
let d = readline.question("Choose between option between 0 and 10: ");
while (d!="0" && d!="1" && d!="2" && d!="3" && d!="4" && d!="5" && d!="6" && d!="7" && d!="8" && d!="9" && d!="10"){
    console.log("invalid choice");
    answer = readline.question("Choose between option between 0 and 10 ");
}
console.log(`You typed ${answer}`);

//16
let e = readline.question("Give me a positive number: ");
while (e < 0) {
    console.log("invalid choice");
}

//17
let f = readline.question("Give me a positive number: ");
while (f > 0) {
    console.log("invalid choice");

//18
    let g = readline.question("Give me a positive number: ");
    while (g+=2) {
        console.log("invalid choice");

//19
let h = readline.question("Choose between option between 0 and 10 or between 20 and 30: ");
while (h!="0" && h!="1" && h!="2" && h!="3" && h"4" && h!="5" && h!="6" && h!="7" && h!="8" && h!="9" && h!="10" h!="20" && h!="21 && h!="22" && h!="23" && h!="24" && h!="25" && h!="26" && h!="27" && h!=28" && h!="29" && h!="30"){
    console.log("invalid choice");
    answer = readline.question("Choose between option between 0 and 10 or between 20 and 30 ");
}
console.log(`You typed ${answer}`);
}

//20
let j = readline.question("Choose a month (1-12): ");
while (j!="1" && j!="2" && j!="3" && j!="4" && j!="5" && j!="6" && j!="7" && j!="8" && j!="9" && j!="10" && j!="11" && j!="12") {
    console.log("invalid. choose a month (1-12)");
}
if (j==){
    console . log("january has 31 days");
} else if (j==2){
    console.log("february has 28 days");
} else if (j==2) {
    console.log("march has days");
}  else if (j==2) {
    console.log("may has days");
}  else if (j==2) {
    console.log("april has days");
} else if (j==2) {
    console.log("june has 30 days");
} else if (j==2) {
    console.log("july has 31 days");
} else if (j==2) {
    console.log("august has 31 days");
} else if (j==2) {
    console.log("september has 30 days");
} else if (j==2) {
    console.log("ocober has 31 days");
} else if (j==2) {
    console.log("november has 30days");
} else if (j==2) {
    console.log("december has 31 days");
}