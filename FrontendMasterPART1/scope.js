var nama = "John Doe";
let age = 30;

function sayHello() {
  nama = "Jane Doe";
  age = 25;
  return `Hello, ${nama} and I am ${age} years old.`;
}

console.log(sayHello());

console.log(`Hello, ${nama} and I am ${age} years old.`);
