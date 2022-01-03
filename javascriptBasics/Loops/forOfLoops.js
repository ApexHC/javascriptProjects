// FOR OF LOOPS

// FOR OF LOOPS - tend to be better to use for arrays because of the way that they work.
// If you use FOR IN on an array, it tends to not work as well.

// These are probably the least used for loop

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'siamese'];

for (cat of catArray) {
    console.log(cat)
};

for (let i = 0; i < catArray.length; i++)(
    console.log(cat[i])
)

let dog = "Finn";

for (letter of dog) {
    console.log(letter)
}

// Create an array called grocery list with at least 3 items
//Use a for of loop to iterate through each item in the array

let shopList = ['carrots', 'apples', 'oranges'];

for (items of shopList) {
    console.log(items)
};