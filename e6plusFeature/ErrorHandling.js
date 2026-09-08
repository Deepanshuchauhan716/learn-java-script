// ❌ Error handling kya hota hai?

// Programming mein kabhi-kabhi kaam successful nahi hota.

// Jaise Instagram par:

// Tumne profile search ki
//        ↓
// Server ko request bheji
//        ↓
// ❌ User nahi mila

// Ab app crash karne ke bajaye user ko batana chahiye:

// "User not found"

// Error ko detect karke properly handle karna = Error Handling.


// 🔥 Promise mein error handling

getUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });

// Agar getUser() successful hua:

// resolve(user);

// to:

// .then()

// chalega.

// Agar problem hui:

// reject("User not found");

// to:

// .catch()

// chalega.

// Flow:
//              getUser()
//                 ↓
//           ┌─────┴─────┐
//           ↓           ↓
//        Success      Error
//           ↓           ↓
//        resolve      reject
//           ↓           ↓
//         .then()    .catch()


// 🔥 Async/Await mein Error Handling

// Async/await ke saath hum generally:

// try
// catch

// use karte hain.

async function showUser() {

    try {

        let user = await getUser();

        console.log(user);

    }
    catch (error) {

        console.log(error);

    }
}
// Iska matlab:
// try
//  ↓
// "Ye kaam try karo"

//    ↓

// Success → aage chalo

//    ❌ Error

//    ↓

// catch
//  ↓
// "Error aa gaya, ab ye handle karo"