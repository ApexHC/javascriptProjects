// DATA TYPES 

// BOOLEAN - booleans have only two possible values: true or false.

let on = true;
console.log(on);

let off = false;
console.log(off);

// NULL - null is an empty value

let empty = null;
console.log(empty);

// UNDEFINED - no value is assigned and does not act as an empty container.

let undef = undefined;
console.log(undef);

// Write like this instead:

let correct; //here, we set the variable but don't give it a value
console.log(correct);

// NUMBERS - Javascript simply treats numbers as numbers. No need for anything special to write them.

let degrees = 89;
console.log(degrees);

let precise = 999999999999999
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = Number("33"); // THIS IS A NUMBER CONSTRUCTOR
console.log(a);


// STRINGS - Strings are a data type used to represent text and are wrapped in either single or double quotes - 'single' or "double" quotes.
// STRINGS are a primitive data type.

let stringOne = "Double quotes";
let stringTwo = 'Single quotes';
console.log(stringOne, stringTwo);

// NUMBERS VS STRINGS
let first = 1050 + 100; //Output 1150
let second = '1050' + '100'; //1050100
console.log(first);
console.log(second);

// TYPEOF is used to help us define what type the variable is.
console.log(typeof first); //Output: number
console.log(typeof second); //Output: string

// OBJECTS - A datatype used to store many values instead of a singular value.
// OBJECT is made of properties of key and value pairs

let frodo = {
    race: "hobbit", //Here we are using colon instead of equal symbol
    rings: 1, //Number doesnt need quotes
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

//ARRAYS - arrays are containers that hold lists of items.
//ARRAYS use square brackets [] and each item regardless of datatype is separated by commas.
//Array "keys" are indexed numbers starting with zero (0, 1, 2, 3, 4, etc...)

let list = ["item1", "item2", "item3"];
console.log(list);

let burrito = ["From Chipotle", 9.99, true];

console.log(burrito);
// Javascript types arrays as an object
console.log(typeof burrito);

// DATATYPE LITERALS - a literal represents a fixed value that developers insert into the code.

// STRING LITERAL - value characters wrapped in quotes ""
let car = "Jeep";

//NUMERIC LITERAL - integers 
let dec = 6;

// BOOLEAN LITERAL - true/false
let tired = true;

// OBJECT LITERAL - key and value pairs
let Ethan = {
    hobby1: "data modeling",
    hobby2: "litigation",
    pets: 5
}

// OBJECTS use notation to dive into its contents, use the key to grab the value.
console.log(Ethan.hobby1);

// ARRAY LITERAL - lists 
let weekend = ['friday', 'saturday', 'sunday'];

console.log(weekend.length);
console.log(weekend[0]);