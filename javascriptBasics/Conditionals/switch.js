//SWITCH in Javascript
/*
let officeCharacter = "Jim";

switch (officeCharacter) {
    case "Michael": //in the case the officeCharacter is Michael, console.log "my mind is going a mile an hour"
        console.log("My mind is going a mile an hour")
        break;
    case "Dwight": // in the case the officeCharacter is Dwight, console.log "Perfectenschlag"
        console.log("Perfectenschlag")
        break;
    case "Jim":
        console.log("Bears, Beets, Battlestar Galactica.") //in the case the officeCharacter is Jim, console.log Bears, beets, battlestar galactica"
        break;
    default: //if no other conditions are met - then default to this
        console.log(`I'm Sorry, ${officeCharacter}, but do I know you?`)
}

if (officeCharacter === "Michael") {
    console.log("My mind is going a mile an hour")
} else if (officeCharacter === "Dwight") {
    console.log("Perfectenschlag")
} else if (officeCharacter === "Jim") {
    console.log("Bears, Beets, Battlestar Galactica.")
} else {
    console.log(`I'm Sorry, ${officeCharacter}, but do I know you?`)
}


*/
//CHALLENGE
// Write a dessert menu;
//IF the dessert is pie - console pie pie me oh my
//if the dessert is cake, console log cake is great
//if the dessert is ice cream, console log i scream for ice cream
//Otherwise, have your switch statement consolelog not on the menu...

let dessert = "carrots"

switch (dessert) {
    case "pie":
        console.log("Pie, pie, oh me oh my")
        break;
    case "cake":
        console.log("Cake is great!")
        break;
    case "ice cream":
        console.log("I scream for ice cream")
        break;
    default:
        console.log("Not on the menu.")
};

//I DID IT!!!  Yay!

// But can I do it using a ternarie???
(dessert === "pie") ? console.log("Pie, pie, oh me oh my"): console.log("I don't know what it is");
// THIS WORKED... but can you use ternaries with more strings...?