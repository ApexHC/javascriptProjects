//TERNARIES - much more simple than IF THEN statements - and take up less space.
// From the module:
let cookies = 5;
(cookies > 0) ? console.log("I am going to eat a cookie"): console.log("I have no cookies");

let num = 6;

(num > 0) ? console.log("Yes"): console.log("no");

// This is the same as doing an if/else statement like below:
if (num > 0) {
    console.log("yes")
} else {
    console.log("no")
};

/* 

let age = 30;

if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything fun.");
} */

// CHALLENGE - WRITE THE ABOVE AS TERNARIES

let age = 30;
(age >= 25) ?
console.log("Yay, you can rent a car"): (age >= 21) ?
    console.log("Yay, you can drink") :
    (age >= 18) ?
    console.log("Yay, you can vote") :
    console.log("Sorry, you're too young to do anything fun");

// CHALLENGE - Convert the if else statement below into a ternary
let pet = "dog";

if (pet === "dog") {
    console.log("woof!")
} else {
    console.log("definitely not woof!")
};

(pet === "frog") ? console.log("Woof!"): console.log("Definitely not woof!");