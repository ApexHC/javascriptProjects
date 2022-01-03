// OBJECTS
// Objects are a datatype that consists of key/value pairs
// Objects are best used to store volumes of data

// SYNTAX
//  (1)   (2)   
let name = {
    //  (3)(4)   (5)
    key: "value",
};
/*     
(1) "name" - Is a (declaration) variable and is the name of the object, how its identified/called.
(2) "{" All of an object's data is contained/wrapped in curly braces {}.
(3) "key" The key is the name of the specific data inside the object.
(4) The data name and value are separated by a ":" colon.
(5) "value" is the Value of the data, each key/value pair ends with a comma (,).
*/

console.log(name); // Output:  { key: 'value' }

// My own example is below:

let billy = {
    word: "dork"
};

console.log(billy); //Output:  { word: 'dork' }

/* 
So... billy = {} is essentially saying that "billy" is an object and;
that "word" is the key which identifies the value "dork".


Below, create and object...
*/

let myFavShow = {
    title: "Squid Games",
    numberOfEp: 9,
    creator: "Hwang Dong-hyuk",
    spoilers: false
}

console.log("Whole data object: ", myFavShow);
/* output of the above console.log:

Whole data object:  {
  title: 'Squid Games',
  numberOfEp: 9,
  creator: 'Hwang Dong-hyuk',
  spoilers: false

  */

console.log("Title of show: ", myFavShow.title, "Created by: ", myFavShow.creator);

// DOT NOTATION: How we access object values using a (period) and its keys.

myFavShow.haveWatched = true; //Via dot notation, we added to the above string.  

console.log(myFavShow);
/* This console.log outputs the following:

{
  title: 'Squid Games',
  numberOfEp: 9,
  creator: 'Hwang Dong-hyuk',
  spoilers: false,
  haveWatched: true
}

Dot notation can add new properties to the object.
For important coding, however, we would want it hard coded to the original string.

Syntax to do this:  objectName.keyName = "key value";  (can be any value datatype) 

*/

let spaceJam = {
    toonSquad: {
        human: "Michael Jordan",
        rabbit: "Lola Bunny",
        duck: "Daffy Duck"
    },
    monstars: [
        "Bang",
        "Nawt",
        "Blanko"
    ]

};

// OBJECT.KEYS() - Gives us the keys of an object and returns it as an array.
console.log(Object.keys(spaceJam.toonSquad)); // Output: [ 'human', 'rabbit', 'duck' ]

//OBJECT.VALUES () - Gives us the keys of an object and returns it as an array.

console.log(Object.values(spaceJam.toonSquad)); // Output:  [ 'Michael Jordan', 'Lola Bunny', 'Daffy Duck' ]
console.log(Object.values(spaceJam));
/*

Output:  
[
    { human: 'Michael Jordan', rabbit: 'Lola Bunny', duck: 'Daffy Duck' },
    [ 'Bang', 'Nawt', 'Blanko' ]
  ]

  */

/* WHY ARE OBJECTS IMPORTANT?

  - They can hold a LOT of data of all data types.
  - JSON JavaScript Object Notation <-- we will use this later...
  - JSON looks and acts like an object.  It is a lightweight data interchange format.
     *Its a way to send data back and forth from clients to servers (web apps)
*/

//USING SQUARE BRACKET NOTATION WITH OBJECTS

// We can use [] square brackets in objects to find a value within the object.
// It is still different from how we use it with ARRAYS.

let garden = {
    veggie: 'hot pepper',
    flower: 'small',
    fruit: 'extra spicy pep',
    sun: true,
    water: true,
    size: 12
}

console.log(garden.veggie); // Output:  hot pepper

console.log(garden['veggie']); // Output: hot pepper

let x = 'veggie';
console.log(garden[x]); // Output:  hot pepper

// console.log(garden.x);  Output:  Undefined  There is no property/key called "x"