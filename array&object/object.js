// 🫡🫡 object MOST important topic

// object => object ek collection hota hai jisme related data aur function ko ek saath store kiya jaata hai
// maanlo ek student ke baare me
// Name
// age
// city

// ye sab ek student ki information hai isliye hum inhe store krne  ke liye object bnaate hai

// ########## syntax ############

const objectName = {
    //code here
}

// {} ko object literal khte hai

// Properties

const student ={
    name : "deepanshu",
    age : 29,
    city : "delhi"
}

// name => key property and "deepanshu" uski value
// age => key property and 29 uski value

// ################# how to access object ###############

console.log(student.name);

// Access multiple value 
console.log(student.name);
console.log(student.city);
// console.log(student.age);

// property change krna 

student.age = 40;
console.log(student.age);

// add new property

student.country = "india";
console.log(student.country);

// property delete krna

delete student.name;

// ab city waali property remove ho jaayegi


// object ke andr different data type

const person = {

    name : "Deepanshu",//string
    age : 20,// number
    IsStudent: true, //boolean
    marks: [23,45,56] //array
};

console.log(person.name);


// Function inside object

const fun = {
    name : "Deep",

    greet: function(){
        console.log("Function inside object")
    }
}

fun.greet();

