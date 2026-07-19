// TEMPLATE LITERAL EK SPECIAL TYPE KI STRING HOTI HAI 
// IISE HUM

// => VARIABLE KO STRING KE ANDR DAAL SKTE HAI
// =>EXPRESSION KO CALCULATE KRKE STRING ME DIKHA SKTE HAI
// =>MULTI LINE STRING LIKH SKTE HAI

// ==========================================String banane ke 3 trike hote hai ======================

  let name = 'deepanshu';// ================ 1=> SINGLE QUOTES 
  let name1 = "deepanshu";// ================ 2=> DOUBLE QUOTES
  let name2 = `deepanshu`;// ================ 3=> TEMPLATE LITERAL (BACKTICKS)


//   =======NEED OF TEMPLATE LITERAL

let nam = "deepanshu";
let age = 20;
let city = "delhi";

console.log("my name is " + nam + "I am " + age + "Year old and i live in " + city);

// so this code is not clean and very tricky now enter the template literal

console.log(`my name is ${nam}, I am ${age} year old and i live in ${city}`);

// =============SO THIS IS THE DIFFERENCE ===============  ${} isko expression placeholder ya interpolation kehte hai

// =========SYNTAX=======
// `${expression}`

// EXAMPLES

let name3 =  "deepanshu"
console.log(`hello ${name3}`);

let age3 = 20;
console.log(`age = ${age3}`);

let a = 10;
let b = 20;
console.log(`${a + b}`);

function greet(){
    return "hello";
}

console.log(`${greet()} user`);

let first = "deepa";
let last = "anshu";
console.log(`${first}${last}`);