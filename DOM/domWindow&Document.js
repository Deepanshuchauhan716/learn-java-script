// WINDOW OBJECT

// window browser ka global object hota hai in simple lang =>>>>>>> window = browser boss

// global object >>>>>>>>> global object vo object hote hai jo har jgh available hote hai

// >>>>>>>>>>>>> 

alert("Warning");
window.alert("Warning");

// dono same hi hai

// >>>>>>>>>>>>>>>>>>>>>>>>>>  Window ke andr kya kya hota hai <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

alert(); //popup dikhaata hai
prompt(); // input leta hai
confirm(); //ok/cancel box
console(); // print krta hai
setInterval(); //har ek second me chlega
setTimeout(); // time set krna
location(); //current url ki information
history(); // browser history
navigator(); //browser info
 
// ye sab window ke methods hai


// DOCUMENT OBJECT

// document current HTML page ko represent krta hai
// document = HTML page

// example

<h1>hello</h1>
// ye pure html page ko represent krega


// ******************** Document properties ******************** //

// tittle
document.title 
// read
console.log(document.title);
// change
document.title = "My website";
// url
document.URL;
// body
document.body
// head
document.head;
// images
document.images;
// links
document.links
// forms
document.forms


// ************************************* Document method ************************************ //

document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

// element bnanana
document.createElement();

