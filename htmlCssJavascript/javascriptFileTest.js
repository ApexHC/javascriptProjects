console.log('Hello World');

/*
You are out after dinner with friends in Indiana and the bill hits the table.
It's a whopping $132.96.  Instead of waiting on everyone to fumble with their phones and open a calculator app, or the friend who might solve it on a napkin, you decide you want to "flex your newfound programming skills and show off to your friends.
Everyone decides to split the bill evenly after calculating tax.
A quick survey of the table shows there are 4 people.
With the javascript knowledge you have, write out a procedure that gives everyone the correct amount to contribute toward the bill.

*/

let billAmount = 132.96;
let people = 4;
let taxAmount = billAmount * 0.07;
console.log(billAmount);
console.log(taxAmount)
let total = taxAmount + billAmount;
console.log(total);

let perPerson = total / people;

let rounded = perPerson.toFixed(2);

document.getElementById("results").innerText = rounded;

let pTag = document.getElementById('results');

pTag.addEventListener('click', () => console.log("I have been pressed"));
// Run a calculation
// do an animation
// you can do anything you want