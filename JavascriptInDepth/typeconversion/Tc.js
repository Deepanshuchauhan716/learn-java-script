// Part 1: Type Conversion Kya Hota Hai?
// Type Conversion = Ek data type ki value ko dusre data type mein badalna.

// Simple analogy:

// Aapke paas "25" (string) hai

// Aap chahte ho 25 (number)

// Yeh conversion hai

// JavaScript mein 2 tarah ka conversion hota hai:

// Type	Kaun Karta Hai	Example
// Implicit (Coercion)	JS engine automatically	"5" + 5 → "55"
// Explicit (Manual)	Developer manually	Number("5") → 5

// Part 2: Implicit Conversion (Coercion)
// JS engine automatically type badal deta hai jab different types ke operands same operation mein aate hain.

console.log("5" + 5);       // "55"
console.log(5 + "5");       // "55"
console.log("5" + true);    // "5true"
console.log("5" + null);    // "5null"
console.log("5" + undefined);// "5undefined"
console.log("5" + [1,2]);   // "51,2"
console.log("5" + {});      // "5[object Object]"


console.log("5" - 2);       // 3
console.log("5" * 2);       // 10
console.log("5" / 2);       // 2.5
console.log("5" % 2);       // 1
console.log(true - 1);      // 0
console.log(null - 1);      // -1
console.log(undefined - 1); // NaN

if ("hello") console.log("Truthy");  // Truthy
if (0) console.log("Falsy");         // Falsy (nahi chalega)
if ([]) console.log("Truthy");       // Truthy
if ({}) console.log("Truthy");       // Truthy
if (null) console.log("Falsy");      // Falsy

console.log(5 == "5");           // true
console.log(0 == false);         // true
console.log(null == undefined);  // true
console.log("" == false);        // true
console.log([] == false);        // true
console.log([1] == 1);           // true

// Part 3: Explicit Conversion (Manual)
// 1. Number() — String/Object → Number

Number("5")         // 5
Number("5.5")       // 5.5
Number("")          // 0
Number("   ")       // 0
Number("hello")     // NaN
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN
Number([])          // 0
Number([5])         // 5
Number([1,2])       // NaN
Number({})          // NaN

String(5)           // "5"
String(true)        // "true"
String(null)        // "null"
String(undefined)   // "undefined"
String([1,2,3])     // "1,2,3"
String({})          // "[object Object]"
String(function(){})// "function(){}"

Boolean(1)          // true
Boolean(0)          // false
Boolean("hello")    // true
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(NaN)        // false
Boolean([])         // true
Boolean({})         // true