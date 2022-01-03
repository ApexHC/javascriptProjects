let isOn = true;

/*
if (isOn == true) {
    console.log('The light is on!')
}
// whats in the parenthesis () is whats being checked on.  

if (isOn) {
    console.log('Wow, the light is on!')
}; 
*/



// The second console.log prints still... even without an operator - if (isOn) is actually true -- it defaults to true.
// check out the following two console logs...

console.log(isOn == true); //output: true
console.log(isOn) //output: true

//whatever is in parentheses is evaluated first (order of operations)

let weather = 65;

if (weather < 70) {
    console.log('Wear a jacket')
};

console.log(weather < 70);

// ? In a conditional, whatever is in the parenthesis will evaluate to TRUE or FALSE

// IF ELSE STATEMENTS are next