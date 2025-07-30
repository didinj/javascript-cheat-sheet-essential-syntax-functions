// Functions
function greet(name) {
  return `Hello, ${name}`;
}

const add = function(a, b) {
  return a + b;
};

const multiply = (x, y) => x * y;

function log(message = "Default") {
  console.log(message);
}

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
