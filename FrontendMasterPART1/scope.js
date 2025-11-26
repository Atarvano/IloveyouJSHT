var nama = "John Doe";
let age = 30;

function sayHello() {
  nama = "Jane Doe";
  age = 25;
  console.log("Hello, " + nama + " and I am " + age + " years old.");
}

sayHello();

console.log(`Hello, ${nama} and I am ${age} years old.`);
