// Part 1: Template Literal Kya Hai?
// Template Literal = String likhne ka modern tarika jisme aap:

// Backticks (`) use karte ho

// Variables ko directly embed kar sakte ho

// Multi-line strings likh sakte ho

// Expressions (calculations, functions) chala sakte ho

// Purana tarika (ES5):

// js

var names = "Rahul";
var greeting = "Hello " + names + "!";
console.log(greeting)

// Naya tarika (ES6):

// js
const name = "Rahul";
const greetings = `Hello ${name}!`;
console.log(greetings)
// Bas itna difference hai — lekin bahut powerful hai.


// Part 2: Syntax — Backticks Aur ${}
// Basic Syntax:
// js

const name = "Rahul";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// "My name is Rahul and I am 25 years old."