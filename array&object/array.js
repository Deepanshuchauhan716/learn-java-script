// *********************** 1 => ARRAY **************************** //

// ARRAY EK SPECIAL OBJECT HAI JO EK HI VARIABLE ME MULTIPLE VALUE KO ORDER KE SAATH STORE KARTA HAI

// ****** WITHOUT ARRAY *********//

let s1 = "Deep";
let s2 = "Rohit";
let s3 = "Aman";
let s4 = "Ankit"; // bahut saare variable banane pde

// **** *** WITH ARRAY **** *** //

const studentName = ["Deep","Rohit","Rahul","Aman","ankit"]; // ek hi variable me sab values aa gye

// [] => array
// "Rohit","Deep" => Element
// array ke andr jo bhi value hoti hai use element kehte hai

const number = [12,34,45,67,89];
console.log(number);

// * * * * 2 => INDEX * * * * //

// index value kya hoti hai?? 
// jab bhi hum array me koi element store krte hai to har ek element ko ek index value milti hai index value 0 se shuru hoti hai

// jaise const number = [12,34,45,67,89];  isme 12 ko 0 index milega fir 34 ko 1 fir 45 ko 2 ese hi aage bdta rhega

// * * * * * * * * * * * 3 => ELEMENT ACCESS KRNA * * * * * * * * * //

const fruit = ["Apple","banana","Mango","litchi"];
console.log(fruit[1]); // 1 ka matlab yaha index value se hai kyoki 1 index pe banana hai to hume console krke banana milega

// multiple value access
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

// *** 4 => array length ****//

console.log(fruit.length); // 4 kyoki 4 element hai

// * * * * * 5 => value update krna * * * * * * //

fruit[1] = "orange";
console.log(fruit);

// java script me array ke andr alg alg data type store kr skte hai


const dataType = [20,"Deepanshu",true,null];
console.log(dataType);

// Array ko hum index value se acces krte hai aur object ko key vlaue se





