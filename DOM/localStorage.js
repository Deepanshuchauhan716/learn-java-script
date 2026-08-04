// local storage browser ka ek parmanent storage hota hai jisme hum data save krte hai
// browser ke andar ek choti si almari hoti hai jahan tum data rakh sakte hai

// maanlo tumne ek variable bnaaya 

let name = "deepanshu";
// console.log(name);

// ab agar page refersh kroge to data delete ho jaayega
// kyokki variable RAM me tha

// agr local storage me save krdo

localStorage.setItem("UserName","Deepanshu");

// ab ye data local storage me save ho gya hai jo ki page ko refresh krne ke baad bhi delete nhi hoga

// local Storage me kitna data store kr skte hai
// approx => 5mb-10mb

// *** local storage sirf string store krta hai ***//

localStorage.setItem("age",20);
// actully browser isse store krega

// "20" 

// string form me


// *********************** Local storage ke main method *********************** //

// ********** 1 => setItem() **************** //

// data save krta hai

// SYNTAX ===== >>>>>>>> localStorage.setItem(Key,value) 

localStorage.setItem("Name","Deepanshu");

// UserName => ek key hai
// Deepanshu => value hai

// data ko local storage tak le jaan setItem() ka kaam hai ye data ko local storage me save krta hai


// **** 2 => getItem() ******

// data ko nikaalta hai jo data user ne save kiya hota hai use get krne ka kaam getItem() krta hai

let data = localStorage.getItem("Name");
console.log(data);

// agr key na mile to null output milgega


// ************* 3 =>removeItem() ****************** //

// data ko delete kr deta hai

localStorage.removeItem("Name");


// ********************  4 => localStorage.clear() ******* //

// pura ka pura localStorage ka data hi delete hi kr deta hai

// ******************** 5 => key() ********************* //

// index se key nikaalta hai
console.log(localStorage.key(0));


// 6 => length

// length btata hai ki kitni keys hai
console.log(localStorage.length);
