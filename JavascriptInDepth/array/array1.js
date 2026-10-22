// Level 0: Array Kya Hai?
// Ek line mein:

// Array = Ek list jisme multiple values ek saath store hoti hain.

// Real life: Tumhari shopping list — ek list mein multiple items.

// js

let fruits = ["apple", "banana", "cherry"];

// Yahan:

// fruits = array ka naam

// "apple", "banana", "cherry" = values

// [ ] = array ke brackets

// Level 1: Array Ka Syntax
// js
// let arrayName = [value1, value2, value3];
// Values kuch bhi ho sakti hain:

// js

let mixed = [1, "hello", true, { name: "Rahul" }, [1, 2]];

// Yahan:

// 1 = number

// "hello" = string

// true = boolean

// { name: "Rahul" } = object

// [1, 2] = array (nested)

// Level 2: Array Ke Elements Access Karna
// Index (0 se shuru):
// js

let fruits1 = ["apple", "banana", "cherry"];

console.log(fruits1[0]); // "apple"  (pehla element)
console.log(fruits1[1]); // "banana" (dusra element)
console.log(fruits1[2]); // "cherry" (teesra element)
console.log(fruits1[3]); // undefined (choutha nahi hai)

// Dhyan do: Index 0 se shuru hota hai, 1 se nahi.

console.log(fruits1.length-1);

// level 3 = array me value change, add , remove
// 1. Change (value badlo):

let arr1 = ["mango","Banana","apple"];
arr1[0] = "litchi";
console.log(arr1);

// value index ki wjh se add hoti hai

// 2. Add (end mein):

arr1.push("deepanshu");
console.log(arr1) // arr1 ke last me deepanshu add ho gya

// 3. Remove (end se):
arr1.pop(); // value daalne ki need nhi hai kyoki last ka hi element remove hoga
console.log(arr1);

// 4. Add (start mein):
arr1.unshift("Hello");
console.log(arr1); // starting me yaani 0 index pe helloo insert ho jaayega

// 5. Remove (start se):
arr1.shift();
console.log(arr1); // starting me value remove ho jaayegi


