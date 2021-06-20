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
const friends = ["Michael", "Steve", "Peter"];
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
}

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

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) return bill * 0.15;
    else return bill * 0.2;
};

console.log(`Bill: ${100}`, `Tip: ${calcTip(100)}`);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`tips: ${tips}`);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`totals: ${totals}`);
