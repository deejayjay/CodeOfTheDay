"use strict";

/* const friends = ["Michael", "Steve", "Peter"];
console.log(friends);
console.log(friends[0], friends[1], friends[2]);
console.log(`I have ${friends.length} friends...`);
console.log(friends[friends.length - 1]);

console.log("for...in");
for (const friend in friends) {
    console.log(friend);
}

console.log("for...of");
for (const friend of friends) {
    console.log(friend);
}

const deepak = ["Deepak", "Joy Jose", new Date().getFullYear() - 1988, friends];
console.log(deepak);

// Exercise
const calcAge = function (birthYear) {
    return new Date().getFullYear() - birthYear;
};

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];

console.log(ages); */

/* Basic Array Operations (Methods) */
// Add elements
/* const friends = ["Michael", "Steve", "Peter"];
console.log(`Before push: ${friends}`);
friends.push("Arun");
console.log(`After push: ${friends}`);

friends.unshift("John");
console.log(`After unshift: ${friends}`);

// Remove elements
friends.pop();
console.log(`After pop: ${friends}`);
friends.shift();
console.log(`After shift: ${friends}`);

console.log(`Steve is at index ${friends.indexOf("Steve")}.`);
console.log("Hello world".includes("Hello"));

if (friends.includes("Peter")) {
    console.log("You have a friend named Peter");
} */

/* Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data
below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip


Test data: 125, 555 and 44


Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) */

/* const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) return bill * 0.15;
    else return bill * 0.2;
};

console.log(`Bill: ${100}`, `Tip: ${calcTip(100)}`);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`tips: ${tips}`);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`totals: ${totals}`); */

// Introduction to Objects
/* const deepak = {
    firstName: "Deepak",
    lastName: "Joy Jose",
    age: new Date().getFullYear() - 1988,
    friends: ["Michael", "Steve", "Peter"],
};

console.log(
    `My name is ${deepak.firstName} ${deepak.lastName} and I am ${deepak.age} years old. My friends are: ${deepak.friends}`
); */

// const interestedIn = prompt(
//     "What do you want to know about Deepak? [Firstname, Lastname, Age, Friends]"
// );

// let propertyName;

// if (interestedIn.toLowerCase() === "firstname") propertyName = "firstName";
// else if (interestedIn.toLowerCase() === "lastname") propertyName = "lastName";
// else if (interestedIn.toLowerCase() === "age") propertyName = "age";
// else if (interestedIn.toLowerCase() === "friends") propertyName = "friends";
// else alert("Invalid property for Deepak!!!");

// console.log(`propertyName: ${deepak[propertyName]}`);

/* deepak.location = "Canada";
deepak["git"] = "deejayjay";

console.log(deepak);
console.log(
    `${deepak.firstName} has ${deepak.friends.length} friends, and his best friend is ${deepak.friends[0]}.`
); */

// Object Methods
/* const deepak = {
    firstName: "Deepak",
    lastName: "Joy Jose",
    birthYear: 1988,
    job: "Student",
    friends: ["Michael", "Steve", "Peter"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${
            this.job
        }, and he ${
            this.hasDriversLicense ? "has" : "does not have"
        } a driver's license.`;
    },
};

console.log(deepak.calcAge());
console.log(deepak.age);
console.log(deepak.age);
console.log(deepak.age);

console.log(deepak.getSummary());
 */

/* 
Coding Challenge #3
---------------------
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

/* const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2).toFixed(2);
        return this.BMI;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2).toFixed(2);
        return this.BMI;
    },
};

if (mark.calcBMI() > john.calcBMI())
    console.log(
        `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})!`
    );
else if (mark.BMI < john.BMI)
    console.log(
        `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})!`
    );
else
    console.log(
        `Both ${mark.fullName} and ${john.fullName} have the same BMI!!!`
    ); */

// Iteration - For Loop
/* for (let count = 1; count <= 10; count++) {
    console.log(`Lifting weights repitition #${count} 🏋️‍♂️🏋️‍♂️🏋️‍♂️`);
} */

// Looping Arrays, Break and Continue
const deepak = [
    "Deepak",
    "Joy Jose",
    new Date().getFullYear() - 1988,
    "Student",
    ["Michael", "Steve", "Peter"],
    true
];

const types = [];

for (let i = 0; i < deepak.length; i++) {
    console.log(deepak[i]);
    // types[i] = typeof deepak[i];
    types.push(typeof deepak[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(new Date().getFullYear() - years[i]);
}

console.log(ages);

// Continue & Break
for (let i = 0; i < deepak.length; i++) {
    if (typeof deepak[i] !== "string") continue; // Log only string elements to the console
    console.log(deepak[i]);
}

for (let i = 0; i < deepak.length; i++) {
    if (typeof deepak[i] === "number") break; // Log only until the first element which is of type number
    console.log(deepak[i]);
}
