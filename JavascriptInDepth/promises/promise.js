// JavaScript Promises — 0 Se Advanced Tak
// Level 0: Promise Kya Hai?
// Ek line mein:

// Promise = Ek "wada" jo future mein kuch result dega (ya error dega).

// Real life: Socho tumne Swiggy pe order kiya. Swiggy ne wada kiya: "30 minute mein khana aa jayega." Yeh promise hai.

// 3 states:

// Pending = Order abhi tak nahi aaya (waiting)

// Fulfilled = Khana aa gaya ✅

// Rejected = Order cancel ho gaya ❌

// Level 1: Promise Ke 3 States

// State	Matlab
// Pending	Kaam abhi chal raha hai
// Fulfilled	Kaam successful ✅
// Rejected	Kaam fail ❌
// Ek baar state change ho gayi, toh wapas nahi badal sakti.

// Level 2: Promise Kaise Banaate Hain?

let promises = new Promise(function(resolve,reject){

    let success = true;

    if(success){
        console.log("Work done");
    }else{
        console.log("Work reject");
    }
});

// Samjho:

// new Promise(...) → naya promise

// resolve → success ke liye

// reject → error ke liye

// Level 3: Promise Kaise Use Karein?

// 1. .then() — Success Ke Liye

let promise2 = new Promise(function(resolve,reject){
    resolve("Data find successFully");
});

promise2.then(function(result){
    console.log(result);
});

let promise3 = new Promise(function(resolve,reject){
    resolve("Data not found");
});

promise3.catch(function(error){
    console.log(error);
})

// .finally() humesa chlega chae error aaye ya sucess

new Promise(function(resolve, reject) {
    fetch("https://api.example.com/user")
      .then(function(response) {
        resolve(response.json());
      })
      .catch(function(error) {
        reject(error);
      });
  });

//   to complete flow kuch esa hota hai programmer ek promise bnaata hai matlb js ek andr ek promise object bnta hai jiske andr 2 cheez hai state : and value : jaise hi promise bna uske callback function ko call hua jisme 2 parameter hai resolve aur reject ye parameter khud me functions hai js callback funciton ke andr entry krta hai usne dekha are fetch tummm fetch ke andr jo url diya hota hai server ka uski wjh se js us url par jaati hai par jaate jaate ek promise return krti hai ki me kuch lekr aaonga mera wait krna par js yha pe stop nhi hota jab tk server par jaayega tbh tk then aur catch register honge dono cheeze register ho gyi abhi sb wait kr rhe hai ki fetch kya lekr aayega maanlo fetch data lekr aata hai fetch ne jo promise return kiya tha uski state hui fullfill value ke andr aayi jo data hai ab kyoki code then aur catch register hai to fetch ki state dekh ke then ya catch chlega kyoki fetch ka promise object ki state fullfill hai to chlega then then ke andr js aayi js ne dekha are yah bhi callback function chlo call kro aur kyoki function ke andr parameter me response hai to response me data aaya jo ki fetch ne diya hai  callback function call hua call back ke andr tha resolve function kyoki resolve function call hone se pehle .json() ne promise return kr diya ki abhi mt calll hona jab tk me data parse na krdu tbh tk wait kro jaise hi json ne parse kiya data ko resolve ke andr vo parse waala data aa gya abh resolve ke paas as parameter parse data hai abh resolve function call hoga resolve function call hua and resolve kyoki js ka function hai to uske andr ki state change ho jaayegi kyoki uske pass data aa gya value bhi aa jaayegi kyoki data uske passs hai
