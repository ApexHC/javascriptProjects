// ARRAYS

// Arrays use [] square brackets, square bracket notation
// Arrays have numerical indexes, starting at position zero 0

let list = ['donuts', 'pop tart', 'tofu'];
console.log(list); // Output: prints full array
console.log(list[1]); //Output: prints just pop tart

let students = ['Elijah', 'Martin', 19, true, ['Alexis', 'Marco']];

console.log(students[3]);
console.log(students[4]);

console.log(typeof students); //Output: displays datatype is object, arrays are technically objects or seen as objects or treated as objects by javascript.

console.log(students instanceof Array); //Output: true.  Instanceof operator is used to check the type of an object at run time.

// Challenge: create a name variable and give it a value of 'Marco'
let name = ['Otis', 'Toya', 'Marlon', ['Marco']];

console.log(name[3]); // Output is array of 'Marco'
console.log(name[3][0]); // Output is the string value of Marco

let name2 = students[4][1];
console.log(name2);

// Print name to the console in a message, using `backticks` and ${} to hold our variable
console.log(`Hello there, ${name2}`);

console.log('Hey there ' + name2);
console.log("Hello there, ", name2);

// ARRAY METHODS
// Methods are like verbs or actions that can be done on arrays

// LENGTH METHOD - check the number of items in an array
console.log(students.length);

// SHIFT METHOD - removes the first element from an array and returns that removed element
// Changes the original array and its length.

console.log('Before shift: ', students); //Output:  Before shift:  [ 'Elijah', 'Martin', 19, true, [ 'Alexis', 'Marco' ] ]
const firstItem = students.shift();

console.log(firstItem, 'After shift: ', students); // Output: Elijah After shift:  [ 'Martin', 19, true, [ 'Alexis', 'Marco' ] ]


// UNSHIFT METHOD - Add an element to the beginning of an array

console.log('Before: ', students); // Output: Before:  [ 'Martin', 19, true, [ 'Alexis', 'Marco' ] ]

students.unshift('Eli'); // Output - this added 'Eli' to the array

console.log('After: ', students); // Output: After:  [ 'Eli', 'Martin', 19, true, [ 'Alexis', 'Marco' ] ]

// POP METHOD: The Pop Method is similar to shift method, but it removes the last element from an array and returns that removed element.

// This changes the original array and its length.

console.log('Before pop: ', students); //this shows what students is like before the pop---  Before pop:  [ 'Eli', 'Martin', 19, true, [ 'Alexis', 'Marco' ] ]

const lastItem = students.pop();
console.log('After pop: ', students); // shows after pop ---  After pop:  [ 'Eli', 'Martin', 19, true ]
console.log(lastItem); //shows what was popped out  ---  [ 'Alexis', 'Marco' ]

// PUSH METHOD - adds an element to the end of the array.

console.log('before push: ', students); // Output: before push:  [ 'Eli', 'Martin', 19, true ]
students.push({ name: 'kate', teacher: true });
console.log(students); // Output:  [ 'Eli', 'Martin', 19, true, { name: 'kate', teacher: true } ]  We added 'kate and teacher: true to the array

// CHALLENGE: Dive into the current student array to console.log true

console.log(students[4]); // This gets us to the object
console.log(students[4].teacher); //students[4] grabs the object, then listing teacher allowed us to get the boolean response true