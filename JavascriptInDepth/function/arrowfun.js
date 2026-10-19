// Part 1: Arrow Function Kya Hai?
// Arrow Function = Function likhne ka short tarika (ES6, 2015).

// Purana tarika:

const fun1 = function(){
    console.log("good morning 1");
}

fun1();

// Naya tarika (arrow function):

const fun2 = () => { // Dekha? function keyword hata, => (arrow) laga diya.
    console.log("Good morning 2");
}

fun2();

// Part 2: Syntax Ke 3 Forms

// Form 1: No Parameters

const fun3 = () => {
    console.log("Hello guys");
}

fun3();

// Form 2: One Parameter (Parentheses Optional)

const fun4 = name => {
    console.log("Hello ",name);
}

fun4("Deepanshu");

// Ya:

const fun5 = (name)=>{
    console.log("Hello ",name);
}

fun5("Priya");


// Form 3: Multiple Parameters (Parentheses Required)

const fun6 = (name,age,clg)=>{
    console.log("Helllo ",name,"Iam ",age,"year old and my clg name is ",clg)
}

fun6("Deepanshu",20,"SAITM");

// Part 3: Implicit Return (Shortest Form)

// Agar function sirf ek line ka hai aur return karta hai, toh { } aur return hata sakte ho:

// Normal:

const fun7= (a, b) => {
  return a + b;
};

console.log(fun7(2,3));

// Short (Implicit Return):

const fun8 = (a,b) => a + b;
console.log(fun8(3,4));

// this Keyword Kya Hota Hai?
// Part 1: Ek Line Mein
// this batata hai ki "abhi kaam kaun kar raha hai" — matlab kis object ke saath kaam ho raha hai.


// Part 2: Real Life Analogy
// Socho tum class mein ho.

// Teacher ne kaha: "Apna homework dikhao"

// Ab kaun dikhayega? — Jispe baat ho rahi hai, woh

// this = "jo abhi baat kar raha hai"

// Agar teacher Rahul se bole → this = Rahul
// Agar teacher Amit se bole → this = Amit

// this badalta rehta hai — situation ke hisaab se.

// Part 3: this Ka Value Kya Hota Hai?
// this ki value 4 rules se decide hoti hai. Priority order:

// new binding (sabse high)

// Explicit binding (call, apply, bind)

// Implicit binding (object method)

// Default binding (global / undefined)

// Chalo ek-ek karke samjho.

// Part 4: Rule 1 — Default Binding (Global)
// Jab function aksar call hota hai (koi object ke saath nahi), toh this global object hota hai.

function fun9(){
    console.log(this)
}

fun9();

// Part 5: Rule 2 — Implicit Binding (Object Method)
// Jab function object ke saath call hota hai, toh this woh object hota ha

const person = {
    name:"Rahul",
    age : 12,
    roll_no : 1234,
    greet : function(){
        console.log(this.name);
    }
};

person.greet();

