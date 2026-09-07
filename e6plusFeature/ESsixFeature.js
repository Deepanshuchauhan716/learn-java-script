// ES6 hota kya hai?

// JavaScript ki ek official standard/specification hai jiska naam ECMAScript hai.

// JavaScript ko improve karte rehne ke liye naye versions/features aate rahe.

// 2015 mein JavaScript ka ek bahut bada update aaya tha.

// Is update mein bahut saare naye features aaye, jaise:

// ES6+
//  │
//  ├── let
//  ├── const
//  ├── arrow function
//  ├── template literal
//  ├── destructuring
//  ├── spread operator
//  ├── classes
//  ├── promises
//  ├── async/await
//  └── etc.

//  ├── destructuring -------------------------


// Destructuring ka matlab hai kisi Array ya Object ke andar ki values ko nikaal kar directly alag variables mein rakhna.

const student = {
    "name" : "deepanshu",
    "course" : "BCA",
    "roll_no" : 259123,
    "section" : "A"
};

const{name,course,roll_no} = student;

console.log(name);
console.log(course);
console.log(roll_no);

// Simple answer:

// Destructuring koi compulsory cheez nahi hai.
// Ye bas code ko short aur convenient banata hai, especially jab same object ki multiple values baar-baar use karni ho.

// complete✅✅✅✅✅✅✅✅


//  ├── spread operator ---------------------------- 

// 🔹 Spread Operator kya karta hai?

// Spread = failana / khol dena

// ... kisi array ya object ke andar ki values ko spread (faila) deta hai.

let fruit1 = ["Apple","Mango","Banana"];
let fruit2 = ["Grapes","litchi","Gwawa"];

let allFruit = [...fruit1,...fruit2];
console.log(allFruit);

// iska use array me bhut se cases me hota hai

// 🔹 Object me bhi Spread Operator ----------------------------

let stu = {
    name : "Deepanshu",
    class: "bca",
    Roll_no : 259123
};

let newStu = {
    ...stu,
    "course" : "MCA"
};

console.log(newStu);