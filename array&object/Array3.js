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



// ********************************* LENGTH ********************************** //
// length java script me array ki total value ki counting hoti hai 

let count = ["Hello","World","How","Are","You"];
// ab agar tumhe pta lgaana hai ki kitne element hai to length method ka use krte hai 

console.log(count.length); // 5

// is trh se hum kisi array ki length ka pta lgaate hai

// *************************************** ARRAY TYPES ************************ //

// java script me array ko kai trah se classify kiya ja skta hai basic level par ye types sbse common hote hai 

// 1 => One dimensional array

// isme value ek hi line me hoti hai 

let Val = ["10","20","30","40","50"]; //this is called one dimensional array



// 2 => Two dimensional Array

// isme array ko row and column ki form me store krte hai 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]; // ise two dimensional array kehte hai 



// 3 => multi dimensional array

// jab 2D se bhi jaada level hote hai (3d,4d,etc) use multidimensional array kehte hai

let data =[
    [
        [1,2],
        [3,4]
    ],
    [
        [5,6],
        [7,8]
    ]
] // ise multi dimensional array kehte hai


// ****************************** push() ,pop() ,shift(),unshift() ***************************** //

// push() java script ka array method hai jo array ke end me ek ya ek se jyaada values add krta hai

let push = ["one","two","three"];
console.log(push); // one two three
push.push("four");
console.log(push); // one tow three four

let number = [1,2,3];
console.log(number);// 1 2 3
number.push(4,5,6);
console.log(number); //1 2 3 4 5 6 

// This is called push method

// pop() bhi js me ek array method hai jo array ke last se ek element ko remove karta hai

let popMethod = ["Hello","World","Welcome"];
console.log(popMethod);// Helllo World Welcome
popMethod.pop();
console.log(popMethod); // Hello World

// pop method me value isliye nhi daalte kyoki ye automatic hi last value hi delete krta hai 

// this is called pop method

// shift() js ka ek array method hai jo array ke shuru se ek element delete krta hai

let names = ["Hii","Coder","How"];
console.log(names); // Hii Coder How
names.shift();
console.log(names); // Coder How

// starting se element delete krta hai first element

// this is called shift()

// unshift() js ka ek array method hai jo array ke shuru me ek ya ek se jyaada element ad krta hai

let us = ["html","css","js","python"];
console.log(us); // "html","css","js","python"
us.unshift("go","github");
console.log(us); // "go","github","html","css","js","python"

// elements ko starting me add krta hai ek ya ek se jyaada

// ******************************** For Loop ************************************** // 

// loops ka matlab hai eki code ko jitni baar chae exexute kraana jiske liye looops ka use krte hai 
// Array me for loops ka use isliye krte hai ki jab aapke pass bahut saari values ho to har value ko console krna uski index value ki help se bad practice and difficult work hai isliye hum for loop ka use kret hai aarray ki values ko print krvaane ke liye

// without for loop

let fuck = ["my","name","is","Deepanshu","chauhan"];
console.log(fuck[0]);
console.log(fuck[1]);
console.log(fuck[2]);
console.log(fuck[3]);
console.log(fuck[4]);

// ese me saari value to print ho jaayegi par code lengthy ho jaayega aur baar baar index value bhi bdlni pdegi

// with for loop

for(let i = 0; i < fuck.length; i++) {
    console.log(fuck[i]);
} // this is simple and easy to print all values

// This is for loop 

// ************************************* For of loop *********************************************** //

// for of loop js ka ek special loop hai jo array ki values ko directly ek ek  krke deta hia isme hume index value ki need nhi hoti

for(let fu of fuck){
    console.log(fu); // fu ke andr aapke fuck array ki saari value ek ek krke aati hai aur fir console hoti hai
}

let fur = ["Apple","Banana","Grapes","litchi","Kela"];
for(let fruit of fur){
    console.log(fruit); // fruit ke andr aapki fur array ki saari value ek ek krke aati hai aur code execute hota hai
}