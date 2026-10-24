// Level 4: Important Array Methods

// 1. slice() — Copy a part (original nahi badalta)

// Syntax
// js
// array.slice(start, end)

let arr1 = ["Hello","Deepanshu","i am","JavaScript"];

const res = arr1.slice(1,3);
console.log(res); // [ 'Deepanshu', 'i am' ]

console.log(arr1); // [ 'Hello', 'Deepanshu', 'i am', 'JavaScript' ]
// original me koi change nhi hota slice() ek new araay return krta hai

// give only starting value
const res1 = arr1.slice(2);
console.log(res1); // [ 'i am', 'JavaScript' ]

// agar sirf starting value doge to pura end last index tk result milega



// Nagetive index
const res2 = arr1.slice(-4,-3);
console.log(res2); //[ 'Hello' ]  beacause ulte se indexing start hogi last ka index -1 usse previous -2

// string

let arr2 = "Hello JavaScript";
console.log(arr2.slice(1,4)); // ell

// Ab slice() Ke 6 Important Cases

// Case 1: Koi Argument Nahi

const copy = arr2.slice();
console.log(copy);
console.log(copy === arr2);

// Case 2: Start > End
console.log(arr2.slice(3,1)); //empty araay

// Case 3: Start = End
console.log(arr2.slice(2,2)); // empty array

// Case 4: End > Length
console.log(arr2.slice(0,100)); //Hello JavaScript sirf end tk jaayega


// splice()!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// splice() = array me se items nikaalna, add karna, ya replace karna. Original array badal jaata hai.

// Naam se yaad rakho: Splice = "phenk do" (English word). Jaise kuch nikaal ke phenk diya — original se gayab.

// Syntax
// js
// array.splice(start, deleteCount, item1, item2, ...)

// Example 1: Items Nikaalna (Delete)

const arr3 = ["apple", "banana", "mango", "orange", "grape"];
const remvoe = arr3.splice(1,2);
console.log(remvoe); // original me se remove gyb ho gye

console.log(arr3);

// Example 2: Items Add Karna (Insert)

const insert = arr3.splice(1 , 0, "Litchi","Adrak");
console.log(arr3); // yaha pe insert lisliye print nhi krvaaya kyoki splice jo hai vo deleted item ka array return krta hai na ki insert item ka arrya isliye agr humne insert me change kiya to vo change arr3 me bhi hua hoga isliye humne arr3 print krvaaya

// Example 3: Items Replace Karna

arr3.splice(1,1,"Bhelpuri","lduu");
console.log(arr3);

// Example 4: Sirf Start Dena (Last Tak Delete)
arr3.splice(1);
console.log(arr3);

// Concat()!~~~~~~~~~~~~~~~~~~~~`````

// Pehle Ek Line Me
// concat() = jodna (merge karna). Do ya zyada arrays ko jod kar naya array banata hai. Original nahi badalta.

// Syntax
// js
// array1.concat(array2, array3, ...)

const res3 = arr1.concat(arr2);
console.log(res3);

// teen array jodna

const res4 = arr1.concat(arr2,arr3);
console.log(res4);

// Example 3: Values Bhi Jod Sakte Ho
const arr4 = [1,2,3,4,5];
const res5 = arr4.concat(6,7,8,9,10);
console.log(res5);//1 2 3 4  5 6 7 8 9 10

// Ab String Pe concat()
const str1 = "Hello ";
const str2 = "world";
console.log(str1.concat(str2)); // Hello world


// join() ~~~~~~~~~~~~~~~~~~~~~~`
// Pehle Ek Line Me
// join() = array ke saare items ko jod kar ek string bana deta hai. Beech me separator daal sakte ho.

// Naam se yaad rakho: Join = "jodna" — lekin string banane ke liye.

// Syntax
// js
// array.join(separator)

let arr5 = ["Hello","World","I am","JS"];
const res6 = arr5.join();
console.log(res6);
console.log(typeof res6); // string instead of array

console.log(arr5.join(" and ")); // Hello and World and I am and JS

// indexof / includes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Pehle Ek Line Me
// indexOf() = dhoondho, aur position (index) batao. Nahi mila to -1.

// includes() = dhoondho, aur haan/nahi (true/false) batao.

// 1️⃣ indexOf() — Position Dhoondho

const arr6 = ["MY","name","Is","Hritik","Roshan"];
console.log(arr6.indexOf("Hritik",0));

console.log(arr6.indexOf("name",2)); //-1 kyoki starting index 2 hai jbki name to 1 pe hai

// 2️⃣ includes() — Hai Ya Nahi?

console.log(arr6.includes("Hritik")); // only two values get true aur false


// reverse()~~~~~~~~~~~~~~~~~~~~~~~```

// Pehle Ek Line Me
// reverse() = array ka order ulta kar do. Pehla last, last pehla. Original array badal jaata hai.

// Syntax
// js
// array.reverse()

const arr7 = ["apple", "banana", "mango", "orange"];
arr7.reverse()
console.log(arr7);

// original array me change hota hai
// reverse sirf arrya pe kaam krta hai string pe nhi


// sort()~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Pehle Ek Line Me
// sort() = array ko order me lagata hai. Original array badal jaata hai. Default me string ki tarah sort karta hai — numbers ke liye compare function dena padta hai

const arr8 = ["banana", "apple", "mango", "orange"];
console.log(arr8.sort());
// console.log(arr8);

// Example 2: Number Sort — Yaha Problem Hai!
// js

const numbers = [10, 2, 30, 4, 5];

numbers.sort();
console.log(numbers);   // [10, 2, 30, 4, 5] 😲
// Kya hua? Sort nahi hua? Ya galat hua?

// kyoki sort number ko string ki treh sort krta hai

// use compare function
let a,b;
numbers.sort(function(a,b){
    return a - b;
})

console.log(numbers);

