// JavaScript me jab hamara code bahut bada ho jaata hai, toh hum usko alag-alag files me divide kar dete hain.

// Har file ko ek module ki tarah use kar sakte hain.

// Maan lo tumhara project hai:

// MyProject
// │
// ├── main.js
// ├── calculator.js
// └── user.js

// 🔹 Problem kya thi?

// Maan lo calculator.js me:

// function add(a, b) {
//     return a + b;
// }

// Aur tum main.js me is function ko use karna chahte ho.

// Normal situation me main.js ko directly pata nahi ki add() function kaha hai.

// Iske liye export/import use karte hain.

// ---------------- EXPORT ------------

export function add(a,b){
    return a + b;
}

// export ka matlab:

// "Bhai, mere is function ko doosri JS file bhi use kar sakti hai."

// 2️⃣ Import

// ESsixfeature.js  me kiya hai

// import { add } from "./calculator.js";

// console.log(add(10, 20));

// JavaScript Project
// │
// ├── calculator.js → calculations
// ├── user.js       → users
// ├── api.js        → API
// └── main.js       → main code

// Module = code ko alag files me divide karke, export aur import ke through ek file ka code doosri file me use karna.