// Most important topic in DOM

// event?? => user ya browser ke through hone waali kisis bhi activity ko event kehte hai
// jab user website par kuch karta hai ("click","type","scroll","submit") usse event kehte hai

// button click 
// keyboard se type krna
// mouse move
// scroll karna
// form submit karna
// iamgae laod hona

// event flow => user action -> event trigger -> java script function -> output

// ********** Event handling **********

// event ke hone par jo java script code chlte hai use event handling kehte hai

// ******************** 1 => onlick() event ****************

// sbse basic event jab user button par click kre to kya action perform ho

function hello(){
    alert("Warning");
}

// jab bhi user button par click krega alert aayega' ye hai onclick event professional project me ab onclick kam use hota hai

// ******************* 2 => addEventListener() *******************

// modern js me sbse jaada important method 

// syntax

// Element.addEventListener("Event",function(){

// });

const btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    alert("button clicked!!");
})

// with arrow function

btn.addEventListener("click",()=>{
    console.log("Hello");
})

// addEventListener ke faayde => ek hi element par multiple event lga skte ho

// types of event

// click
// dblclick
// mouseover
// mouseout
// mousedown
// mouseup
// mousemove
// keydown
// keyup
// input
// form event
// change
// blur and etc.

const box = document.querySelector("#box")
const insideBox = document.querySelector("#inBox");

box.addEventListener("dblclick",() => {
    insideBox.innerHTML = "Hello world";
})

// ye sb events hote hai!!!!!!!!!!!!!!!!!!!!!!!!!!


