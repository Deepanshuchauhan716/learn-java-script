// 1 => function declaration js me function banane ka sbse basic aur traditional treeka hai 

// hum ek function ko function keyword se declare krte hai

// syntax 

function functionName(){
    //function body
}

// function -> keyword
// functionName -> function ka name
//  () -> parantheses
//  {} -> function body

// #################################### Basic example ##########################################

function greet(){
    console.log("Hello world");
}

// output kuch nhi aayega kyoki humnne abhi function ko call nhi kiya hai abhi function sirf decalre hua jai

// function call
greet(); // ab function ko call hua and ab function execute hoga

// ######## function ke name kaise hone chaiye #########

// function add()
// function GetName()
// function CalculateTotalPrice

//  ek function dusre function ko call kar skta hai

function first(){
    console.log("First");

}

function second(){
    first();
    console.log("Second");
}

second();

// !!!!!!!!!!!!!!!!! function ke andr function declare krna !!!!!!!!!!!

function outer(){

    function inner(){
        console.log("Inner");
    }

    inner();
}

outer();