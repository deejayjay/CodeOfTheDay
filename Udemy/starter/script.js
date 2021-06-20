"use strict";

const friends = ["Michael", "Steve", "Peter"];
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

console.log(ages);
