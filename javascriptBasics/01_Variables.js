// Javascript Variable Declaration
var myFirstVariable;

var dinnerChoice;

// A variable is a named box that holds something in JavaScript.  console.log opens the console.  
console.log(dinnerChoice);

// Initialize a variable with a new value
var patientID; // Declaration
patientID = 120023; // Initialization
// patientID now has a value assigned to it of 120023


var orangeJuiceContainer = "empty";

dinnerChoice = "Donuts, steak, cookies, pizza, and tacos";
console.log(dinnerChoice);

dinnerChoice = "Chicken Tikka Masala and Palak Paneer";
console.log(dinnerChoice);

// VAR LET and CONST
//Declare and Initialize on same line.

var coffeeType = "Doubleshot Breve no Classic";

// Other kinds of variables
let favoriteDay = "Sunday";

const salesTax = 0.07;

// LET creates a variable that can be modified (a mutable variable)
// CONST creates a variable that cannot be modified (immutable)

/* 

Variables are created using the following keywords:
- var
- let
- const

Variable names cannot start with numbers, and cannot be javascript keywords\

Variable names follow camelCasing in javaScript

*/

//Var and Hoisting
programmer = "Ada Lovelace";
var programmer;

//Let and Hoisting
jsVersion = "es6";
let jsVersion;

//Const and Re-Initialization
const humansBestFriend = "dog";
humansBestFriend = "frog"