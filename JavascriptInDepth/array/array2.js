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
