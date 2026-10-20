// avaScript Objects — 0 Se Advanced Tak
// Level 0: Object Kya Hai?
// Ek line mein:

// Object = Ek dabba jisme multiple values "naam ke saath" store hoti hain.

let student = {
    name : "Deepanshu",
    age : 20,
    course : "BCA"
};

// Level 1: Object Ka Syntax
// let objectName = {
//     key1: value1,
//     key2: value2,
//     key3: value3
//   };


  let person = {
    name: "Rahul",      // string
    age: 25,            // number
    isStudent: true,    // boolean
    hobbies: ["coding"],// array
    address: {          // nested object
      city: "Delhi"
    },
    greet: function() { // function (method)
      console.log("Hello");
    }
  };

//   Level 2: Object Access Kaise Karein?
// 1. Dot Notation (.):

console.log(person.name);
console.log(person.age);
console.log(person.address.city);


// 2. Bracket Notation ([]):

console.log(person["name"]);

// Kab bracket use karo?

// Jab key dynamic ho (variable mein ho)

// Jab key mein space ya special character ho



// Level 3: Object Mein Value Change/Add/Delete

// chnage
person.name = "Deepansu";
person.age = 30;

// add
person.email = "rahul@gamil.com";
person["phone"] = 44646756867;


// delete
delete person.email;
delete person["phone"];


// check property exist or not
console.log("name" in person);
console.log("email" in person);

// Level 4: Object Methods
 let hello = {
    name : "Ritesh",
    greet:function(){
        console.log("Hello ",this.name); // this ka mtlb current object
    }
 }
hello.greet();


// Level 6: Object Ko Loop Kaise Karein?

// 1. for...in (Keys Ke Liye):

for(let key in person){
    console.log(key); // key
}

//agar value bhi chaiye to []

for(let key in person){
    console.log(key,person[key]); // key value
}

// 2. Object.keys() (Keys Ka Array):
console.log(Object.keys(person));

// 3. Object.values() (Values Ka Array):
console.log(Object.values(person));

// 4. Object.entries() (Key-Value Pairs):
console.log(Object.entries(person));


// Level 7: Object Copy (Shallow vs Deep)

// shallow copy
// Shallow Copy = upar-upar se copy. Sirf pehla level copy hota hai. Andar ki cheezein (nested objects/arrays) share hoti hain.

const original  = {
    names : "Deepanshu",
    age:20,
    address : {
        city : "Delhi",
        state : "Delhi"
    }
}

// Ab tum chahte ho ek copy banao, taaki original ko bina badle naya object use kar sako.
// Shallow Copy = naya object banao, aur usme pehle level ki saari properties daal do.

// 2 coomom ways : 1=> spread operator 2=> assign object

const shallowCopy = {...original};
console.log(shallowCopy.names);

//Ab dono alag hain. Pehle level ki values copy ho gayi
// Lekin Shallow Copy Me Problem Kya Hai?

// Problem tab aati hai jab object ke andar object/array ho.

// jaise original object ke andr adress object hai

// ab kya hua

// ┌─────────────────────────┐
// │   original              │
// ├─────────────────────────┤
// │   name: "Rahul"         │  ← copy hua (naya)
// │   address: ────────┐    │  ← sirf REFERENCE copy hua
// └────────────────────│────┘
//                      │
//                      ↓
//               ┌──────────────┐
//               │  address     │  ← YE SHARED HAI!
//               ├──────────────┤
//               │  city: Delhi │
//               │  pin: 110001 │
//               └──────────────┘
//                      ↑
//                      │
// ┌────────────────────│────┐
// │   shallowCopy      │    │
// ├────────────────────│────┤
// │   name: "Rahul"    │    │  ← naya
// │   address: ────────┘    │  ← same reference
// └─────────────────────────┘

// shallow copy me address copy nhi hua blki  shared hua jiska mtlb agar hum copy me change krenge to original me bhi change hoga

shallowCopy.address.city = "mumbai";
console.log(original.address.city); //mumbai output jabki original me delhi tha

// to yha pe problem aati hai shallow copy me

// Shallow Copy Kaise Banate Hain? — 2 Tarike

// 1. Spread Operator ... (Sabse Common)

// 2. Object.assign()


// SHALLOW COPY:

// original                          copy
// ┌──────────────────┐         ┌──────────────────┐
// │ name: "Rahul"    │         │ name: "Rahul"    │  ← COPY (naya)
// │ age: 25          │         │ age: 25          │  ← COPY (naya)
// │ address: ────┐   │         │ address: ────┐   │
// └──────────────│───┘         └──────────────│───┘
//                │                            │
//                └──────────┬─────────────────┘
//                           │
//                           ↓
//                   ┌──────────────┐
//                   │  address     │  ← SHARED (same object)
//                   ├──────────────┤
//                   │  city: Delhi │
//                   └──────────────┘


// Kya tumhe sirf BAHAR ki cheez badalni hai?
//   (naam, box, color, username)
//         │
//         ├── Haan → Shallow Copy ✅
//         │
//         └── Nahi, ANDAR ki cheez badalni hai
//             (members, khana, books, posts)
//                     │
//                     └── Deep Copy ✅


// Deep Copy Kya Hai? — Ek Line Me
// Deep Copy = poora object copy karo, andar tak. Koi cheez share nahi hoti. Sab kuch naya banta hai..


// SHALLOW COPY:

// original                          shallow
// ┌──────────────────┐         ┌──────────────────┐
// │ name: "Rahul"    │         │ name: "Rahul"    │  ← COPY
// │ address: ────┐   │         │ address: ────┐   │
// └──────────────│───┘         └──────────────│───┘
//                │                            │
//                └──────────┬─────────────────┘
//                           │
//                   ┌──────────────┐
//                   │  address     │  ← SHARED (same)
//                   └──────────────┘


// DEEP COPY:

// original                          deep
// ┌──────────────────┐         ┌──────────────────┐
// │ name: "Rahul"    │         │ name: "Rahul"    │  ← COPY
// │ address: ────┐   │         │ address: ────┐   │
// └──────────────│───┘         └──────────────│───┘
//                │                            │
//                ↓                            ↓
//         ┌──────────────┐           ┌──────────────┐
//         │  address     │           │  address     │  ← ALAG (copy)
//         │  city: Delhi │           │  city: Delhi │
//         └──────────────┘           └──────────────┘



const original1 = {
    name: "Rahul",
    address: { city: "Delhi" },
    hobbies: ["reading"],
    date: new Date(),
    address : {
        state:"Delhi",
        city:"Gujrat"
    }
}

const shalowCopy = {...original1};
shalowCopy.address.city = "Chennai";
console.log(original1.address.city); // chennai isne original me bhi change kr diya

const DeepCopy = structuredClone(original1);
DeepCopy.address.city = "Uttrakhand";
console.log(DeepCopy.address.city); // uttrakhand kyoki isne deep change kiya

// Dhyaan do: function copy nahi hota — reference share hota hai. Kyunki function ka code copy karna possible nahi.

// Level 8: Object.freeze() Aur Object.seal()

// Object.freeze() = object ko poora freeze kar do. Kuch bhi badal nahi sakte.

// Object.seal() = object ko seal kar do. Nayi property add nahi kar sakte, purani delete nahi kar sakte. Lekin purani values badal sakte ho.

// 1️⃣ Object.freeze() — Poora Freeze

const anu = {
    names : "Deepanshu",
    age : 20,
    course : "BCA"
};

// Object.freeze(anu);

anu.names = "Anuu";
console.log(anu.names);


// 2️⃣ Object.seal() — Sirf Seal

const temp = {
    names : "Saskhi",
    age : 20,
    course : "BBA"
}

Object.seal(temp)

// kya nhi kr skte
// user.city = "Delhi";        // ❌ nayi property add nahi hogi
// delete user.age;            // ❌ delete nahi hoga

temp.names = "Rohan";        // ✅ badal sakte ho (existing property)
temp.age = 26;              // ✅ badal sakte ho

console.log(temp.names);


