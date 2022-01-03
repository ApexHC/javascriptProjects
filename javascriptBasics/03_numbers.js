// NUMBERS

/*There are many different ways to represent numbers in the AudioWorkletNode.  From decimal places, using a dash to denote negative numbers, and even adding an "i" to create imaginary numbers (math can be funky).  In JavaScript, there is one singular type called NUMBER to represent most kinds of numbers.  Whole numbers, rational numbers, negative numbers, etc.

*/

// Numbers in JavaScript

0
1
.99
    -
    42
NaN

//if you run the file right now nothing will print out...  In order to see it you would have to console.log

console.log("1");

//JavaScript only has one number type to represent all numbers.

//STORING NUMBERS IN VARIABLES
/* What good is a number you can't interact with?  Storing numbers is as easy as assigning that number as a value to a variable!  Examples:  */
/*
let the MeaningofLife = 42;
const indianaIncomeTaxRate = 0.0323;
let powerLevel = 9001;

// SIMPLE MATHEMATICS

1 + 1;
12 - 10;
125 * 1.07;
125 / 4;
//10 ** 2;
15 % 2; //Modulus - take 1st number divided by 2nd number and return the remainder

*/
//WEIRD BEHAVIOR

//You would think that this is 0.3 right?

console.log(0.1 + .02);

// THeres something fishy going on here?
console.log(1.1 + 1.1);

//this outputs weird SVGAnimatedNumberList.apply.apply. due to floating point math