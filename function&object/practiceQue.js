// QUESTION => function kya hota hai ?? iski definition aur use likho
// ANS => function ek code block hota hai jo ek specific task ko perform krne ke liye design hota hai jab use call kiya jaata hai . uses code reusablity, code organization, event handling, callback, data processing


// QUESTION => difference between declaration and calling 
//  declaration ka basic matlab hota hai ki kisi function ko create krna aur calling ka matlab hota hai ki us function ko execute krna 

// QUESTION => parameter vs argument 
// fucntion bnaate time likha gya variable  parameter hai . aur function call krte time pass ki gyi value argument hai

// QUESTION => function ko call na kre to kya hoga
//  function ko call na kre to function execute nhi hoga 

function greet(name){
    console.log(name);
}
// no call no execute

// QUESTION => console.log() vs return me 5 difference
//  console => browser console par value print krta hai, debugging purpose ,function execution ko nhi rokta ,store nhi hota
// return => function ki value wapas bhejta hai , output/result purpose, function execution ko turant rok det ahi, value store kr skta hai

// ================================= CODING QUE ===========================================

// question => ek sayHello() function bnaao jo hello world print krega

function sayHello(){
    console.log("Hello world");
}

sayHello();

// question => ek welcome (name) function bnaao jo welcome user_name output de

function welcome(name){
    console.log(`welcome ${name}`);
}

welcome("deepanshu");

// question => ek add(a,b) function bnaao jo sum return kre

function add(a,b){
    return a + b;
}

let result = add(4,5);
console.log(result);

// question => ek multiply(a,b) function bnaao jo console.log se print kre ouput

function multiply(a,b){
    console.log(a*b);
}
multiply(4,5);

// question => ek square function bnnao jo square return kre

function square(a){
    return a * a;
}

let sq = square(12);
console.log(sq);

// question => ek cube function bnnao jo cube return kre

function cube(a){
    return a * a * a;
}

let cu = cube(12);
console.log(cu);

// question => ek isAdult(age) function bnaao agar age 18 ya usse jaada ho to adult nhi to minor return kre

function isAdult(age){
    if(age >= 18){
        return "adult"
    }
    return "minor"
}

let ad = isAdult(10);
console.log(ad);

// ek defaultPara(name = "guest") function bnaao defaultPara(),defaultPara("Deepanshu") dono ka output dikaao

function defaultPara(name  = "Guest"){
    console.log(`welcome ${name}`)
}

defaultPara(); // welcome guest
defaultPara("Deepanshu"); //welcome deepanshu

// question => ek function bnaao jo 2 number ka evrage nikaale

function avg(num1,num2){
    console.log((num1 + num2) / 2)
}

avg(2,3);

