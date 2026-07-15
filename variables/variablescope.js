// varibale scope 

//Program ke kis area me koi variable accessible ho sakta hai 
                    // or
// variable ko kahan se access kar skte hai aur kahan se nhi 

// 3 types of scope

// 1 => gloabal scope
// 2 => block scope
// 3 => function scope

// 1 ===> GLOBAL SCOPE 
// jo variable sab jagah use ho sakta hai 

let name = "deepanshu";

function greet (){
    console.log(name);
}

console.log(name);

greet();