// Promise ek aisa object hai jo bolta hai: "Abhi result nahi hai, lekin future me result dunga."

// Real-life example:

// Tumne online food order kiya 🍕.

// Order karte time pizza turant nahi milta.

// Order placed
//      ↓
//    Waiting
//      ↓
// Pizza ready / delivered

// Yahi idea JavaScript Promise me hota hai.

// 🔹 Promise ki 3 states hoti hain
// Promise
//   │
//   ├── Pending    → abhi result nahi aaya
//   │
//   ├── Fulfilled  → kaam successfully complete
//   │
//   └── Rejected   → kaam fail ho gaya

let promise = new Promise((resolve, reject) => {

    let pizzaAvailable = true;

    if (pizzaAvailable) {
        resolve("Pizza mil gaya");
    } else {
        reject("Pizza nahi mila");
    }

});

promise.then(() => {
    console.log("Pizza mil gya");
})

// Ab .then() kya hai?

// Ye sabse important part hai.

// Socho tumne pizza order kiya aur waiter se kaha:

// "Jab pizza aa jaye, mujhe bata dena."

// JavaScript me:

// promise.then(() => {
//     console.log("Pizza aa gaya");
// });

// .then() ka matlab:

// "Jab Promise successful ho jaye, ye kaam karna."

promise.catch(() => {
    console.log("Pizza mil gya");
})

// .catch() kya hai?
// promise.catch(() => {
//     console.log("Pizza nahi mila");
// });

// .catch() ka matlab:

// "Agar Promise fail ho jaye, ye kaam karna."