// FUNCTIONS 
// Functions are a chunk of code that performs a set action when called.

// SYNTAX
// function nameOfMyFunction() {
// some kind of action goes here
// }

// Functions can contain arrays, loops, conditions, etc.

// Write a function that console.logs hi

function sayHi() {
    console.log("hi")
}

// CALLING / INVOKING THE FUNCTION
// Calling a function is what triggers the chunk of code to run.  Like an on switch or a button being clicked.

// nameOfMyFunction()

sayHi()

function car() {
    console.log("go vroom vroom")
}

car()

function callDork() {
    console.log("Dork")
}

callDork()

// PARAMETERS (AKA - things in the parenthesis)

// FUNCTIONS PARAMETERS are place holders for data that we give the function.  SYNTAX FOLLOWS:

// Function nameofFunction(placeholder1, placeholder2) {
// action using placeholder1 and placeholder2
//  }

// nameofFunction(data1, data2)

function getBatAvg(atBat, numHits) {
    let myAvg = numHits / atBat;
    return myAvg;
}
console.log(getBatAvg(250, 91));

//--------------------

function groceryCart(cereal) {
    console.log(cereal);
}
groceryCart("lucky charms");
groceryCart("specialK");
groceryCart("fruit Loops");

// -------------------

function greetings(name) {
    console.log(`Hi, I'm ${name}`)
}

greetings('Marty');
greetings('Shai');

// -----------------------

function makeCoffee(coffeeGrounds, water) {
    console.log(`I'm brewing with ${coffeeGrounds} tbsp of coffee and ${water} ounces of water`)
}

makeCoffee(2, 20);

// STRING INTERPOLATION - allows us to use variables inside of strings.  Backticks(above the tab button), dollar sign ($), and curly braces with the name of the variable inside of the curly braces.

//------------------------ Calculate my Test Score Average using Return function

function avgScore(numTests, totScore) {
    let testAvg = (totScore / numTests);
    return testAvg
}

console.log(avgScore(10, 944));

//---------------------- ADD TWO SUMS

function add(x, y) {
    let sum = x + y;
    return sum;
}
console.log(add(1, 1));

// -------------Fname and Lname

function fullName(last, first) {
    let wholeName = first + " " + last;
    return wholeName;
}

console.log(fullName("Garcia", "Ethan"));

//------------------------------- Calculate Tax and return total price

function calcPrice(quantity, price) {
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calcPrice(10, 5));


// -----------------------
let list1 = ["milk", "oranges", "oreos"];
let list2 = ["cranberries", "turkey", "vegan roast", "potatoes"]

function groceryShopping(shoppingList) {
    let cart = [];
    // for(item of shoppingList) {
    //   cart.push(item)
    //   shoppingList.shift();
    // }
    for (let i = 0; i < shoppingList.length; i++) {
        cart.push(shoppingList[i]);
    }
    console.log("cart", cart);
}

groceryShopping(list1);
groceryShopping(list2);





// Splice takes in three  arguments (1) location where we want to remove items from and (2) number of elements you want to remove, and (3 - optional) if we want to add in any items.


/* The easiest way to know you're working with fat arrow function is if there is a fat arrow (  =>) vs. ->


FAT ARROW FUNCTIONS
Arrow functions declare a function but behaves differently from traditional functions of Javascript

Fat arrow functions are a handy tool to write more code in fewer lines.  
Using it you don't have to keep typing "function" keyword over and over again

Arrow functions can contain other arrow functions or regular functions.

invoked the same way as every other function.


// Old way...



functionName();
let variableName = "something"
block body
let functionName = () => {
    console.log("Hi!")
}

*/
// BLOCK BODY
let conciseFunction = () => console.log("I'm short");

let applesBlock = (x) => {
    console.log(`I have ${x} apples`)
}
applesBlock(5)
    // CONCISE BODY
let applesConcise = x => console.log(`I have ${x} apples`);
applesConcise(4)

//RETURN STATEMENTS
// Functions use the keyword of return to make data accessible outside of its body ({}) so that another function can use that data.

let hello = (name) => {
    return `Hi ${name}`;
}

//Pasting one of my examples from above to work on making concise body

function getBatAvg(atBat, numHits) {
    let myAvg = numHits / atBat;
    return myAvg;
}
console.log(getBatAvg(250, 91));

// Now written with fat arrow function:


let getBatAvg = (atBat, numHits) => {
    let myAvg = numHits / atBat;
    return myAvg;
}

console.log(getBatAvg(250, 91));


// SO, we can use this same idea to get a test average based on total points and number of tests.  Below is another example I did earlier written in block format.

/*
function avgScore(numTests, totScore) {
    let testAvg = (totScore / numTests);
    return testAvg
}

console.log(avgScore(10, 944));

*/

//--------Now written in concise form

let avgScore = (numTests, totScore) => {
    let testAvg = (totScore / numTests);
    return testAvg
}

console.log(avgScore(10, 944));




//-----------------
// Here, we created a function named hello.  It takes in a parameter called name and it returns a string of `Hi ${name}`;

let hello = (name) => {
    return `Hi ${name}`;
}

// Here we create a new variable called greeting.  This variable captures the return statement from the function hello.
let greeting = hello("Ethan");
console.log(greeting) // Output: Hi Ethan

//----------------

let greeting = hello("Ingeborg");
console.log(greeting)
console.log(hello("Shai"))
    //console.log(name)

function fixName(name) {
    let capName = '';
    for (let i = 0; i < name.length; i++) { // looping over each letter in the name
        if (i === 0) { // checking if this is the first letter (0 === 0)
            // console.log("i === 0", name[i])
            capName = capName + name[i].toUpperCase(); //capitalize this letter and add it to capName
        } else { // if it is not the first letter
            // console.log("else", name[i]);
            capName = capName + name[i].toLowerCase() //lowercase this letter and add it to capName
        }
    }
    return capName
}

// let alteredName = fixName("inGeBorG");
// console.log(alteredName)

let funkyNames = ["inGeBorG", "aDAM", "tAylOr"];
let newNames = [];

for (name of funkyNames) { //loop over each name in my funkyNames array. The variable (name) now each time is different.
    let alteredName = fixName(name);
    console.log(alteredName) // => fixed version of the name
    newNames.push(alteredName)
}

console.log(newNames);