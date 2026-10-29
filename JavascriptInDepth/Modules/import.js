// Level 0: Module Kya Hai?
// Ek line mein:

// Module = Code ka ek tukda jo apna alag file hota hai. Aur usko doosri files mein import/export kar sakte hain.

// Real life: Socho tumhare paas ek badi book hai. Usko chapters mein baant diya. Har chapter alag hai, lekin ek doosre se juda bhi hai.

// Module = Ek chapter. Import/Export = Chapters ko jodna.

// Level 1: Module Kyun Chahiye?
// Bina Module (Sab kuch ek file mein):

// js
// app.js — 5000 lines

// function add(a, b) { return a + b; }
// function subtract(a, b) { return a - b; }
// function multiply(a, b) { return a * b; }

// ... 1000 functions
// ... 500 variables
// ... bahut messy

// Problems:

// File bahut badi

// Global pollution (sab variables global)

// Reuse mushkil

// Team work mushkil

// math.js se hum function ko import krenge
import{fuc} from "./export.js";
console.log(fuc(2,3)); //5

// Fayde:

// Code organized

// No global pollution

// Reuse aasan

// Team work aasan


// Level 3: ES Modules — Export
// 1. Named Export (Multiple Cheezein):

import{add} from "./export.js";
import{sub} from "./export.js";
import{mul} from "./export.js";

console.log(add(10,20)); // 30
console.log(sub(20,10)); //20
console.log(mul(10,20)); //200

// 3. Default Export (Sirf Ek Cheez):

import greet from "./export.js";
console.log(greet("deepanshu"));

import{add as sum} from "./export.js";
console.log(sum(2,3));

// 4. Saara Import (*):
import * as math from "./export.js";


