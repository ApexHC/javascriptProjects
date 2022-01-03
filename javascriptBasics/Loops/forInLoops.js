// FOR IN LOOPS

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
};

for (item in student) {
    console.log(item)
    console.log(student[item])
};

// THIS creates student and an additional attribute using [], which allows you to hone in on individual attribute.

let name = 'dANieLLe'
let capName;

for (i in name) {
    console.log(i)
    if (i == 0) {
        capName = name[i].toUpperCase();
        console.log(capName)
    } else {
        capName += name[i].toLowerCase();
        console.log(capName)
    }
}
console.log(capName);