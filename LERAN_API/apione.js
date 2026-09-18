// API Kya Hai?
// API = Application Programming Interface

// Ek line mein: API ek waiter jaisa hai — tum order dete ho, wo kitchen se laata hai.

// Restaurant Ki Kahani Se Samjho:
// Socho tum restaurant gaye ho:

// text
// Tum (Customer)  →  Waiter (API)  →  Kitchen (Server/Database)
//      ↑                  ↓                    ↑
//    Order do         Order le ke jaata       Khana banata
//      ↓                  ↓                    ↓
//    Khana khao     Khana laata hai         Khana ban chuka
// Tum kitchen mein nahi jaate. Tum waiter se order dete ho. Waiter kitchen se khana laata hai.

// API bilkul waiter jaisa hai:

// Tum request bhejte ho

// API server tak le jaata hai

// Server data deta hai

// API wapas tumhe laata hai

// Real Example: Weather App
// Tum apna weather app bana rahe ho. Tumhe Delhi ka temperature chahiye.

// Bina API:

// Tumhe khud weather station lagana padega

// Khud data collect karna padega

// Khud calculate karna padega

// Bahut mushkil

// API ke saath:

// js
// const response = await fetch("https://api.weather.com/delhi");
// const data = await response.json();

// console.log(data.temperature);   // 28°C
// Bas itna! API ne sab kaam kar diya — tumne sirf request bheji, data mil gaya.

// API Request Ka Structure:
// js
// fetch("https://api.example.com/users")
//   ↑
// URL — kahan request bhejni hai

// fetch("https://api.example.com/users", {
//     method: "GET"    // kya karna hai
// })

//  HTTP Methods Kya Hain?
// HTTP Methods = "kya kaam karna hai" — API ko batane ka tareeka.

// Socho aise: Jab tum restaurant jaate ho, tum kya bolte ho?

// "Menu dikhao" → GET

// "Order de do" → POST

// "Order badal do" → PUT

// "Order cancel kar do**" → DELETE

// HTTP Methods = API se kya kaam karwana hai — wo batane ke 4 tareeke.

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Rahul', age: 25 })
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));