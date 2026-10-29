// Part 1: Ek Line Mein
// Destructuring = Array ya Object se values nikalna, aur unhe alag-alag variables mein daalna.

// Real life: Socho tumhare paas ek dabba hai jisme 3 cheezein hain — apple, banana, cherry. Tum ek-ek karke nikalte ho aur alag-alag rakhte ho.

// Yahi destructuring hai.

// Part 2: Bina Destructuring Ke Problem

let arr1 = ["Apple","fruit","banana"];

let first = arr1[0];
let second = arr1[1];
let third = arr1[2];

console.log(first,second,third);

// 3 baar fruits[...] likhna pada. Bahut mehnat.

// object

let obj = {name:"deepanshu",age:20,city:"delhi"};
let name = obj.name;
let age = obj.age;
let city = obj.city;

console.log(name,age,city);
// 3 baar obj. likhna pada. Bahut mehnat.

// Part 3: Destructuring Ke Saath (Array)

let number = [1,2,3,4,5];
// / Naya tarika (destructuring)
let[one,two,three,four,five] = number;
console.log(one);
console.log(two);
console.log(three);

// Bas itna hi! Ek line mein saari values alag-alag variables mein.

// Samjho:

// [one, two, three] = variables

// = number = array

// Pehla variable (one) = pehla element (1)

// Dusra variable (two) = dusra element (2)

// Teesra variable (three) = teesra element (3)

// Part 4: Destructuring Ke Saath (Object)

let person = {
    names:"Rahul",
    citys : "Delhi",
    ages : 20
};

// nya trika Destructuring
let{names,citys,ages} = person;

console.log(names);
console.log(city);

// Bas itna hi! Ek line mein saari values alag-alag variables mein.


