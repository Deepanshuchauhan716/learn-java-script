// object ek container hota hai jisme hum kisi ek cheez ki related information ko ek saath store kr skte hai

// example
// kisi student se related

// name => rohit
// class => 12th
// city => delhi
// country => india 

// ye sb eki student ka data ya info hai isliye ise store krne ke liye hum object ka use krte hai

// object syntax

const object = {
    // code here
}

// yaha {} ko object khte hai

// object me data kaise store krte hai

const student = {
    name : "Rohit",
    age : 20,
    city : "Delhi",
    country:"India"
};

// name , age , city , country ye sab keys hai and Rohit age city country ye sab  values hai

// how to print object ~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(student);

// kisi ek property ko access krna 
console.log(student.name);

// multiple propertiess access krna
console.log(student.age)
console.log(student.city)
console.log(student.country)

// ######## property change krna ################

student.age = 30;
console.log(student.age); // 30

// ########3 new property add krna ###########

student.marks = 20;
console.log(student);

// ################ property delete krna ########

delete student.age;
console.log(student);


// Property exist krti hai ya nhi
console.log("marks" in student); // true

//  ##########        #################### #####     ###########  object method ######## #################3          ###############33

// jab object ke andr kisi property ki value ek function hoti hai to us function ko method kehte hai

// method = object ke andr waala function

//  1 => NORMAL OBJECT 

const test = {
    name:"car",
    model: 2025
};

// 2 => object method 

const test2 ={
    car:"BMW",

    greet: function(){
        console.log("Start");
    }
};

//  yaha car ek property hai
// aur greet ek function hai 

// METHOD KO CALL KAISE KRTE HAI
test2.greet();

// multiple method

const calculator = {
    add : function(a,b){
        console.log(a + b);
    },
    sub:function(c,d){
        console.log(c - d)
    }
};

calculator.add(10,20);
calculator.sub(20,10);


// ################################### THIS KEYWORD ###########################

// this keyword ek special keyword hota hai jo current object ko refer krta hai
// this = ye waala object

const thisTest = {
    name : "Chetan",

    greet: function(){
        console.log(this.name);//instead of thisTest.name  yaha this ka matlab hai thisTest.name
    }
};

thisTest.greet();

const MobileInfo = {
    name :"Redmi",
    model : "12 5g",

    showInfo(){
        console.log(this.name)
        console.log(this.model);
    }
};

MobileInfo.showInfo();

// this ki jrurt isliye pdi kyoki agar future me Student ya object ke variable ka naam badal diya to problem ho skti hai
