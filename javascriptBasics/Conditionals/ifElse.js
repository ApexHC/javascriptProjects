// IF ELSE STATEMENTS
/*
let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket') // When we run this... it does nothing because weather is greater than 70
} else {
    console.log('No jacket needed') // Now that we added the ELSE statement, this code has an executable instruction.
};

let name = 'Danielle';

if (name === 'Danielle') { //we strictly assign name to Danielle
    console.log(`Hello, my name is ${name}`)
} else {
    console.log('Hello what is your name?') //This outputs 'Hello my name is Danielle'.  If we change then name to something else, it will print 'Hello what is your name?'
};

*/

/*
? Use this string: let name = 'zAchARy';

? Bronze:
    ? Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    ? If it is not console.log 'hey, this isn't written correctly'
    ? METHOD: .toUpperCase()
    
? Silver:
    ? If the first letter of a string is uppercase, only console.log that letter
    ? if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
? Gold:
    ? If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    ? If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
/*

let name = 'zAchARy';

console.log(name[0]); // This string output each indicated letter - with it I figured out it is not spelled correctly.
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);

// * BRONZE SOLUTION

let name = 'zAchARy';

// console.log(name);
// console.log(name[0]);
// console.log(name[0].toUpperCase());

//? z     ===        Z
if (name[0] === name[0].toUpperCase()) {
    console.log(name)
} else {
    console.log('Hey that string is not written correctly')
};

// * SILVER SOLUTION

let name = 'zAchARy';

// console.log(name.slice(1));
// console.log(name.slice(1).toLowerCase());

if (name[0] === name[0].toUpperCase()) {
    console.log(name[0])
} else {
    console.log(name.slice(1).toLowerCase())
};

// * GOLD SOLUTION

let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase()
    console.log("#1", isUppercase)
} else {
    let notUppercase = name[0].toUpperCase() + name.slice(1).toLowerCase()
    console.log("#2", notUppercase)
};


*/

let age = 19;

// *The order here is reversed. You will not get the correct results for 21 or greater
if (age >= 18) {
    console.log("Yay, you can vote!")
} else if (age >= 21) {
    console.log("Yay, you can drink!")
} else if (age >= 25) {
    console.log("Yay, you can rent a car!")
} else {
    console.log('You are too young to do anything cool.')
}

// *Correct order
if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything fun.");