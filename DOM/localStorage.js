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
localStorage.clear();

// ******************** 5 => key() ********************* //

// index se key nikaalta hai
console.log(localStorage.key(0));


// 6 => length

// length btata hai ki kitni keys hai

console.log(localStorage.length);


// ************* HOW TO STORE OBJECT ************* //

// localStorage me object directly store nhi hote kyoki localstorage me strig store hote hai

const user = {
    name : "Deepanshu",
    gmail : "deepanshu@gmail.com"
};

//localStorage.setItem("user",user); // output aayega [object object]

// isliye hum use krte hai stringify() ka 
// stringify object ko string me convert kr deta hai aur uske baad localstorage me save krta hai

const str = JSON.stringify(user);
console.log(typeof user); // object

// store array

let fruit = ["apple","mango","litchi"];
localStorage.setItem("fruit",JSON.stringify(fruit));

// isliye stringify ka use krte hai taaki jab humare pass bda data ho store krne ke liye to hum use store kr ske

// ************************ JOSN.parse() ********************************* //

// JSON.parse() string ko object me convert krta hai

// ab agar appko actual data type waapis chaiye kyoki aapka data to localStorage me string form me store hua hai but aapko actual data type chaiye


let data1 = JSON.parse(localStorage.getItem("fruit"));
console.log(data1);// ab aapko actual array return hoga

// isliye parse() ka use hota hai