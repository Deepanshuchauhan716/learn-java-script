// Closure — 0 Se Advanced Tak
// Level 0: Closure Kya Hai?
// Ek line mein:

// Closure = Function apne bahar wale variables ko yaad rakhta hai, chahe woh function khatam ho jaye.

// Level 1: Bina Closure Ke Kya Hota Hai?

function outer(){
    let name = "Deepanshu";
}

outer();
 console.log(name);// error name is not defiened

// Level 2: Ab Closure Dekho

function outer(){
    let name1 = "Deepanshu";

    function inner(){
        console.log(name1);
    }

    return inner;
}

const myfun = outer();
myfun();

