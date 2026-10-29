// Async/Await — 0 Se Advanced Tak

// Level 0: Async/Await Kya Hai?
// Ek line mein:

// Async/Await = Promise ko likhne ka naya, easy tarika. Bas.

// Promise = .then() .catch() se likhte the
// Async/Await = await se likhte hain (jaise normal code)

// Level 1: Bina Async/Await (Promise)
// js

fetch("/api/user")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Problem: .then() chain lambi ho jati hai. Padhna mushkil.

// Level 2: Async/Await Ke Saath

async function Greet() {
    try{
        // let result = await fetch(//./api/example);
        let data = await JSON.parse(result);
        console.log(data);
    }catch(eror){
        console.log(err);
    }
}

// Level 3: async Kya Karta Hai?
// async function ke do kaam hain:

// Function promise return karta hai (hamesha)

// Andar await use kar sakte ho


