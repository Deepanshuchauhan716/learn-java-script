// Level 0: Callback Function Kya Hai?
// Ek line mein:

// Callback Function = Woh function jo kisi doosre function ko argument ki tarah diya jata hai, aur baad mein call hota hai.

// Simple shabdon mein: Ek function jo doosre function ke andar "baad mein chalane ke liye" diya jata hai.

// Level 1: Real Life Analogy
// Socho tum Swiggy pe order karte ho.

// Tumne apna phone number diya. Swiggy ne kaha: "Khana aane pe hum tumhe call karenge."

// Tumhara phone number = Callback (tumhe baad mein call kiya jayega)
// Swiggy = Main function
// Khana aana = Kaam khatam hona

// Jab kaam khatam hua, Swiggy ne tumhe call kiya.

// Yahi callback hai
// Level 2: Bina Callback Ke Problem

function grett(name){
    console.log("Hello "+name);
}

grett("deepanshu");

// Yeh normal function hai. Turant chalta hai.

// Lekin agar kaam ke baad kuch karna ho? Jaise:

// Data fetch hone ke baad print karo

// File read hone ke baad process karo

// Timer khatam hone ke baad alert karo

// Yahan callback chahiye.

function greet(name,callback){
    console.log("Hello " + name);
    callback();
}

greet("Rahul", function(){
    console.log("Work done");
});

// callback with argument

function calculate(a,b,callback){
    let result = callback(a,b);
    console.log("Result : ",result);
}

calculate(3,4,function(x,y){
    return x + y;
})

