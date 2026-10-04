// Part 1: Input/Output Kya Hota Hai?
// Input = User se data lena (keyboard, mouse, file, API)
// Output = User ko data dikhana (screen, console, file, API)

// Simple analogy:

// Input = Aapne kuch bola (mic mein)

// Output = Speaker se awaaz aayi

// JavaScript mein I/O 2 environments mein hota hai:

// Browser (Frontend)

// Node.js (Backend)

// Part 2: Browser Mein Output
// 1. console.log() — Sabse Common
// js

console.log("Hello World");
console.log(42);
console.log(true);
console.log([1, 2, 3]);
console.log({ name: "Rahul", age: 25 });
// Console Methods:

// Method	Use
console.log()	//Normal output
console.error()	//Error output (red)
console.warn()	//Warning (yellow)
console.info()	//Info
console.table()	//Table format
console.group()	//Group output
console.time()	//Timer start
console.timeEnd()	//Timer end
console.clear()	//Clear console

// Table
console.table([
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 30 }
]);

// Group
console.group("User Info");
console.log("Name: Rahul");
console.log("Age: 25");
console.groupEnd();

// Timer
console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop");

// alert("Hello User!");

// let name = prompt("What's your name?");
// console.log("Hello " + name);

// let result = confirm("Are you sure?");
// console.log(result); // true ya false

