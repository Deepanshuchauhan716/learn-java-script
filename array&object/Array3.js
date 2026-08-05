// ******************************** ARRAY ********************************** //

// ARRAY JS ME EK SPECIAL VARIABLE HOTA HAI JO EK SAATH BAHUT SAARI VALUE KO STORE KR SKTA HAI

// NORMAL VARIABLE ME AAM TAUR PAR EK HI VALUE STORE HOTI HAI

let name = "Deepanshu";

// lekin agar tumhe kai value ko ek hi jgh rakhna hai to array use krte hai

let fruits = ["Apple","Mango","Banana"]; 
// fruits ek array hai , jisme 3 value ek saath rkhi gyi hai 


//  ************************ INDEX *********************************** //

// index ka matlab hota hai array ke andr har value ka address ya position number 
// jaise ek train me har seat ka apna seat number hota hai waise hi array har value ka apna index hota hai

let student = ["Rohit","chetan","Deepanshu","Anu"];

// is student array me har ek value ki apni position hai un position ko INDEX kehte hai 

// Rohit ka index value 0 hai
// chetan ki 1
// deepanshu ki 2
// anu ki 3

// index humesa 0 se shuru hota hai  isliye phli value ka index humesa 0 hota hai


// *************************** ACCESS ARRAY  ********************************* // 

// access ka  matlab hota hai kisi value tak phuchna ya use lena

let access =  ["first","Second","third"];
// maanlo tumhe first chaiye to tum use kaise access kroge to hum array ko access krne ke use krte hai unki index value

// console.log(access[0]); // first ko acess kr skte hai 
// console.log(access[1]); // second ko acess kr skte hai 
// console.log(access[2]); // third ko acess kr skte hai 


// aise hum array ke andr ke value ko access krte hai //

// ********************************* UPDATE ARRAY **************************** //

// update ka matlab hota hai pehle se present value ko badalna 
// maanlo value hai "Rahul" aur tum use krna chate ho "Rohit" to kaise krenge

let new_student = ["Anuu","Deepanshu","Reshma","Rohit"];
console.log(new_student);//without update

// ab agar hum chate hai ki Rohit ki jgh chetan aa jaaye to kaise krenge
// hum use krenge index value ka 

new_student[3] = "Chetan";
console.log(new_student); // ab rohit ki jgh chetan aayega ese hum kisi value ko update kr skte hai