// Objects
const person = {
  name: "Jane",
  age: 25,
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

console.log(person.name);
console.log(person["age"]);
