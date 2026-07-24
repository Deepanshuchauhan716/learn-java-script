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










// ############################################## Function expression ##################################3

// function expression jab hum function ko kisi variable me store krte hai use function expression kehte hai

// SYNTAX ######

// data_type variableName = function(){
    // function body
// }

// ######## example ##########

const printName = function(){ // isme function ka name kaha hai?? hum ise variable ke name se access kr skte hai
    console.log("Hello deepanshu");
}

printName(); // call

// const => variable keyword
// printName => variable name
// = => assignment operator
// function => function keyword
// () => parantheses
// {} => function body
// ; => statement end

// variable ka name use krke hum call kr skte hai function ko

// ############### ek function ko dusre varibale me store krna ##############333

const hello = function(){
    console.log("hello");
}

const x = hello;
x();

// Fucntion expression me parameter

const add = function(a,b){
    return a + b;
};

console.log(add(10,20));


// Default parameter

const gret = function(name = "User"){
    console.log(name);
}

gret();
gret("Himanshu");

// ################## function expression ke andr function #################

const fst = function(){
    const second = function(){
        console.log("Hii");
    }
    second();
}

fst();




// ########################################## ANONYMOUS FUNCTION #################################

// jis function ka apna koi naam nhi hota hai use anonymous function khte hai

// anonymous function = without name

// Basic example

const gues = function(){
    console.log("Guest");
}

gues(); // function ka naam nhi blki variable ka naam hai
//  anonymous function ko variable ke naam se call krte hai

// function(){
//     console.log("Hello"); // function ka ye part anonymous function khlaata hai
// }
 
// ################################# NAMED function expression ##################################3

// jab function expression ke andr function ka bhi naam hota hai use named functionn expression kehte hai

const Ex = function hello(){ // Ex variable name hello function name
    console.log("Ex");
}
Ex();