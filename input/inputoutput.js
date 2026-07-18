// input ouput ka matalb hai kisi user se koi input lena aur us hisaab se code ka output dikhana
// EXAMPLE
// name
// age 
// city
// password
// email

// kisi bi user se input lene ke liye prompt("example") ka use hota hai

let name = prompt("enter your name");
console.log(name)

let age = prompt("enter your age");
console.log(age);

// ye sab input hote hai


// OUTPUT
// output ka matlab hai user ko result dikhaana  jaava script me output dene ke kai treeke hote hai

// 1 => console.log()
console.log("hello world");

let name = "deepanshu";
console.log(name);

// multiple value print kraana 
let name = "deepanshu";
let age = 20;

console.log(name,age);

// 2 => alert()
// Browser me popup dikhaata hai

alert("heelo deepanshu");
// screen par aate hi heelo deepanshu aayega !!

// 3 => document.write()
// HTML PAGE PAR LIKHTA HAI

document.write("welcome");

//CONSOLE.LOG() KE EXTRA METHOD

console.error("error") // error massage dikhata hai
console.warn("warning") // warning dikhata hai
// console.table() data ko table form me dikhaata hai

let student = {
    name : "deepanshu",
    age : 20
};

console.table(student);
