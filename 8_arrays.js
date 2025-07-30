// Arrays
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");
fruits.pop();
fruits.shift();
fruits.unshift("grape");

fruits.forEach(f => console.log(f));
let mapped = fruits.map(f => f.toUpperCase());
let filtered = fruits.filter(f => f.startsWith("a"));
