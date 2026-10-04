// Part 1: Operator Kya Hota Hai?
// Operator = Ek symbol ya keyword jo values (operands) pe kuch operation perform karta hai.

// Simple analogy:

// Operand = Aap (cheez)

// Operator = Kaam (kya karna hai)

// Result = Kaam ka result

// js

let result = 5 + 3;
//  ↑        ↑   ↑
// result    5   3   (operands)
//          └─ + ─┘ (operator)

// Part 2: Operator Ke Types (Categories)
// JavaScript mein 8 categories ke operators hain:

// #	Category	     Example
// 1	Arithmetic	     +, -, *, /
// 2	Assignment	     =, +=, -=
// 3	Comparison	     ==, ===, >, <
// 4	Logical	         &&, ||, !
// 5	Bitwise	         &, |, ^, ~, <<, >>
// 6	Unary	         ++, --, typeof, !
// 7	Ternary	         ? :
// 8	Special	         ,, ?., ??, delete, in, instanceof

// Part 3: Arithmetic Operators
// js
let a = 10, b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7  (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.3333 (division)
console.log(a % b);   // 1  (modulus / remainder)
console.log(a ** b);  // 1000 (exponentiation — ES2016)

// + Operator Ka Special Behavior (String Concat)
// js


console.log(5 + 5);        // 10 (number addition)
console.log("5" + 5);      // "55" (string concat)
console.log(5 + "5");      // "55"
console.log("5" + 5 + 5);  // "555"
console.log(5 + 5 + "5");  // "105"
// Rule: Agar koi bhi operand string hai, toh + concat karega.

// % Modulus Ka Use Case
// js

console.log(10 % 2);   // 0 (even)
console.log(10 % 3);   // 1
console.log(-10 % 3);  // -1 (negative allowed)
console.log(10 % 0);   // NaN (division by zero)


// ** Exponentiation
// js

console.log(2 ** 3);   // 8 (2^3)
console.log(2 ** 0.5); // 1.414... (square root)
console.log((-2) ** 2); // 4 (must use parens with negative)
