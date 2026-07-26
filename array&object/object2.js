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



