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

// box.addEventListener("dblclick",() => {
//     insideBox.innerHTML = "Hello world";
// })

// ye sb events hote hai!!!!!!!!!!!!!!!!!!!!!!!!!!


// ***************************** EVENT OBJECT ********************************* //

// event object ek esa object hai jo browser aapko event hone par provide krta hai

// information like *******

// kis element par click hua
// konsa key press hua
// mouse ki x/y position kya hai
// event  kab hua
box.addEventListener("click",(e)=>{
    insideBox.innerHTML = `
    <strong> Event information </strong><br>
    type : ${e.type}<br>
    target : ${e.target}<br>
    mouse X : ${e.clientX}<br>
    mouse Y : ${e.clientY}<br>
    `
})

box.addEventListener("keydown",(evt) => {
    insideBox.innerHTML = `
    <strong>key information</strong><br>
    keycode : ${evt.keycode}
    key : ${evt.key}
    `
})



// event object ki 10 important properties

// type
// target 
// currentTarget
// clientX
// clientY
// key 
// keyCode
// preventDefault() 
// stopPropogation
// timestamp 

const color = document.querySelector("#color");
color.addEventListener("click",(evt) => {
    const para = document.querySelector("#para");
    para.innerHTML = `
    <strong>Information about event object</strong><br>
    target : ${evt.target}<br>;
    keycode : ${evt.keycode}<br>;
    key: ${evt.key}<br>;
    Mouse X: ${evt.clientX}<br>;
    Mouse Y: ${evt.clientY}<br>;
    `
})

// this all information is event object
