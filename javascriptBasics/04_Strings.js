// STRINGS IN JAVASCRIPT

//There are three ways to write a string.  You can use single or double quotes, or use a back tick.

let userName = `oakgibbon12`;
const stateName = 'Indiana';
let currentLanguage = "JavaScript";

// There are some weird situations such as ESCAPE SEQUENCES:  Check this out - 

let escapedString = 'I just can\'t believe it\'s not butter!';
let withAQuote = "The doctor said, \"where is the patient?\", while he ran out the door.";

// DYNAMIC STRINGS - TEMPLATE STRINGS

let firstName = 'Jane';
let cartItems = 5;
let greeting = `Welcome, ${ firstName }!  You have ${ cartItems } units in your cart`;
// Using a back tick above gives you the ability to craft spaces in a string.