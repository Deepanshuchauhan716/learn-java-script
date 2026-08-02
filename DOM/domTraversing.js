// Dom traversing ka matalb hai DOM tree me ke node se doosri node tak move krna 
// agar tumhare pass ek element hai aur tum uske parent ,children,ya sibling tak phuchne chate ho to us process ko DOM traversing kehte hai

// DOM traversing ke main topics 

// 1 => parentElement kisi element ke parent ko return karta hai

// HTML CODE 
                // <div id="box">
                //         <h1 id="tittle">Hello html</h1>
                //  </div>

const tit = document.querySelector("#tittle");
console.log(tit.parentElement);


// 2 => children

// parent ke saare child element return krta hai

// HTML code

const box = document.querySelector("#box")
console.log(box.children);


// 3 => FirstElementChild

// pehla children return krta hai
console.log(box.firstElementChild);

// 4 => lastElementChild

// last children return krta hai

console.log(box.lastElementChild);

// 5 => nextElementsibling

// current element ke baad waala sibling return krta hai

console.log(box.nextElementSibling);

