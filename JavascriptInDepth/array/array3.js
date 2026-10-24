// Pehle Ek Line Me
// Array loop = array ke har item pe jaana, aur kuch kaam karna.

// 1️⃣ for Loop — Sabse Purana

const arr1 = ["One","Two","Three","Four"];
for(let i = 0; i < arr1.length; i++){
    console.log(i,arr1[i]);
}

// 2️⃣ for...of — Sabse Simple (Modern)
for(let val of arr1){ // val ke andr arr1 ke saare item ek ek krke aayenge and print hote rhenge
    console.log(val);
}

// index print
for(let [index,value] of arr1.entries()){
    console.log(index,value);
}

// 4️⃣ forEach() — Har Item Pe Kaam

// array ke har item pe jaao aur kuch n kuch kaam kro
const arr2 = ["Hello","My","Name","Is","JavaScript"];

arr2.forEach(function(arr2){
    console.log(arr2);
})

// using arrow function

arr2.forEach((val)=>{
    console.log(val);
})


// Level 6: Higher-Order Methods (Sabse Important)

// 1. map() — Har element ko transform karo

// map() = har item pe kuch karo, aur naya array banao. Original nahi badalta

const arr3 = [1,2,3,4,5,6];
const copy = arr3.map((num)=>{
    return num * 2;
});

console.log(arr3);
console.log(copy);

// original nhi badlta hai ek new array return hota hai
// map() har item pe function chalata hai, aur return value ko naye array me daalta hai.

const arr4 = ["Apple","Banana","Mango"];

const res4 = arr4.map((index,values)=>{
    return `${index + 1},${values}`;
})

console.log(arr4);
console.log(res4);

const names = ["Deepanshu","Anuradha"];
const upperCase = names.map((values)=>{
    return values.toUpperCase();
})

console.log(upperCase);

const user = [
    { name : "Deepanshu", age : 20},
    { name : "Himanshu",age : 23},
    { name : "Anu",age : 17}
];


const Username = user.map((user)=>{
    return user.name;
})

console.log(Username);


// map ka simple meaning har ek element pe jaao array ke aur kuch operation kro

// Pehle Ek Line Me~~~~~~~~~~~~~~~~~~~~~~~``
// filter() = condition ke hisaab se items chhaanto. Jo condition pass kare, wo naye array me aaye. Original nahi badalta.

const Allnum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const even = Allnum.filter((even)=>{
    return even % 2 == 0;
})

console.log(even); // print even number
console.log(Allnum); // original array safe

const Greater = Allnum.filter((Number)=>{
    return Number > 10;
})

console.log(Greater);

const Fru = ["Ananaya","Aarushi","Anuradha","Himanshu","Himesh","Hemant"];
const Aname = Fru.filter((NameVal) => {
    return NameVal[0] === "A";
})

console.log(Aname);

const Product = [
    {name : "Laptop",price : 20000},
    {name : "Mobile",price : 30000},
    {name : "I Pad",price : 31000},
    {name : "I Phone",price : 40000}
];

const Expensive = Product.filter((pro)=>{
    return pro.price > 20000;
})

console.log(Expensive);

const InstaUser = [
    {name : "Deepanshu",active:true},
    {name : "Anuradha",active:false},
    {name : "Chetan",active:true},
    {name : "Priya",active : false}
];

const Blocked = InstaUser.filter((IUsers) => {
    return IUsers.active == false;
})

console.log(Blocked);

// Pehle Ek Line Me
// reduce() = poore array ko ek value me badal do. Jaise saare numbers ka sum, ya max, ya string — kuch bhi ek.

const digit = [1,2,3,4,5,6,7,8];
const sum1 = digit.reduce((total,num) => {
    return total + num;
},0);

console.log(sum1);
// original array nhi change hota hai

