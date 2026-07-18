// STRING => NUMBER CONVERSION

let age = "20";
let num = Number(age);

console.log(num);

// STRING TO BOOLEAN

let a = Boolean("hello");
console.log(a); //true

let b = Boolean("");
console.log(b); // false

//NUMBER TO STRING 

let st = String(100);
console.log(st) //100 is a string here not a number 

// BOOLEAN TO STRING

let bool = String(true);
console.log(bool);

// BOOLEAN TO STRING 
let string =  Boolean("hello");
console.log(string);

// ye sab hota  hai typeconversion jisme hum manually ek data type ko dusre data type me convert krte hai 

// AUTOMATIC CONVERSION

console.log("10" + 5); // 105 instead of 15 java script make 10 is string

console.log("10" - 5); // 5 instead of 105 java script make 10 number

console.log("6" * 5) // 30 java script make 6 number 

console.log("20" / 4) // 5 java script make 20 is a number

// + OPERATOR AND ETC OPERATOR ME EK FRK HOTA HAI KI + NUMBER KO BHI STRING BNA DETA HAI AKASAR JABKI BAAKI OPEARATOR STRING KO NUMBER BNANE KI KOSIS KRTE HAI

// BOOLEAN KE SAATH 
console.log(true + 1) // 2 because true = 1 and 1 + 1 = 2 ;

