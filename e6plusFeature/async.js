// async ek keyword hai jo kisi function ko asynchronous function banata hai. async function hamesha ek Promise return karta hai.

// async lagane ke baad function ka result Promise ke form me milta hai.

// Maan lo tum YouTube par video open karte ho.

// Tumhara browser server ko bolta hai:

// "Video ka data bhejo"
//        ↓
//      Server
//        ↓
//    ⏳ Data aa raha hai
//        ↓
//    Video load

// Video ka data turant nahi aata. Server ko time lag sakta hai.

// Ab JavaScript me hum ek function bana sakte hain:

// async function loadVideo() {
    // server se video data lena
// }

// Yaha async ka matlab hai:

// "Is function me asynchronous kaam ho sakta hai, aur ye function Promise return karega."

// example--------------------

console.log("one")
console.log("two")

setTimeout(()=> {
    console.log("hello");
},4000);

console.log("three")
console.log("four")

// agar code sync me chlta to phle one two print hota fir js 4 second wait krti jab tk 4 second me hello print na ho jaaye fir three and four print hote par js me esa nhi hua 

// ise kehte hai asynchrinous programming