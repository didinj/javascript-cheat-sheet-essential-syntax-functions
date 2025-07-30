// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let n = 0;
while (n < 3) {
  n++;
}

do {
  n--;
} while (n > 0);

let items = ["a", "b", "c"];
for (let item of items) {
  console.log(item);
}

let obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
