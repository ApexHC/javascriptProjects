// JAVASCRIPT LOOPS

// TO STOP AN INFINITE LOOP - CNTRL + C

// IF LOOP STILL RUNNING, CLOSE VS CODE!
//     (1)       (2)   (3)
for (let i = 0; i < 10; i++) { // i++ is shorthand for i + 1
    console.log(i)
}

// 1 - Initial Expression (starting point)
// 2 - Condition (stopping point - whenever the condition is mete loop will stop)
// 3 - Increment Expression (How much the loop variable will increase or decrease each iteration)

for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

for (let i = 20; i >= 0; i -= 2) {
    console.log(i)
}

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let name = "Ethan"
    // console.log(name.length)
for (let i = 0; i < name.length; i++) {
    console.log(i, name[i])
}

//CHALLENGE = Make a for loop where you add up all the numbers from 1 - 50 (should result in 1275) - needs variable outside of for loop to work.

let sum = 0

//SYNTAX 
//        for(start, stop, increment){
//        ADDITION TO CODE
//}

// BELOW IS WHAT I GOT...

for (let i = 0; i <= 50; i++)
    console.log(i)

//ANSWER BELOW

for (let i = 1; i <= 50; i++) { // on next line we are going to redefine sum
    sum += i // If written longhand it would be:   sum = sum + i
}
console.log(sum);

// USING THE FOR LOOP IDEAS FROM ABOVE - GENERATE A FIBONACCI SEQUENCE

var i;
var fibonacci = []; // Initialize array!

fibonacci[0] = 0;
fibonacci[1] = 1;
for (i = 2; i <= 100; i++) {
    // Next fibonacci number = previous + one before previous
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    console.log(fibonacci[i]);
}