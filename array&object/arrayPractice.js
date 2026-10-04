// push() method 

let fruit = ["Apple","Deepanshu","Rohit"];
fruit.push("Anu");
console.log(fruit);

// array ke last me koi element add krne ke liye

// pop() kya karta hai?
// Array ke end (last) se ek element remove karta hai aur us removed element ko return karta hai.

let student = ["Deepanshu","Rohit","Anu","Soham"];
student.pop();
console.log(student);


// unshift() kya karta hai?
// Array ke start (beginning) me ek ya ek se zyada naye elements add karta hai.

let score = ["twelfth","ten","nine"];
score.unshift("One");
console.log(score);

// shift() kya karta hai?
// Array ke start (beginning) se ek element remove karta hai aur us removed element ko return karta hai.

let names = ["Hello","Deepanshu","How","Are","you"];
names.shift();
console.log(names);

// slice() kya karta hai?
// Array ka ek portion (hisssa) copy karke ek naya array return karta hai.

let fruits = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];
let newarr = fruits.slice(2,4)
console.log(newarr);

// splice() kya karta hai?
// Array me elements remove karta hai, naye add karta hai, ya dono karta hai — aur original array ko CHANGE karta hai. ⚠️

// Example 1: Sirf Remove karna
let fruits1 = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];
let remove = fruits1.splice(1,2);
console.log(remove);

// Example 2: Sirf Add karna (deleteCount = 0)

