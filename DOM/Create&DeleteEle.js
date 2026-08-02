// Java script ki help se naye HTML element banana ,page me add karna replace karna ya delete karna hi Create & delete element hai!!

// browser me bina html change kiye js ki help se element bnana ya delete krna

// Main topics

// 1 => CreateElement
// 2 => append()
// 3 => appendChild
// 4 => prepend()
// 5 => before
// 6 => after()
// 7 => remove()
// 8 => removeChild()
// 9 => replaceChild()
// 10 => cloneNode()

// *************** 1 => CreateElement() **************** //

// Nya HTML element create krta hai

const h1 = document.createElement("h1") // abhi ye sirf memory me bana hai page par show nhi hoga

h1.innerText = "Hello deepanshu"; // abhi bhi ye show nhi hoga kyoki ise append nhi kiya hai
// isi trh hum bahut saare element bna skte hai

const div = document.createElement("div");
const para = document.createElement("p")
const ul = document.createElement("ul")


// *************** 2 => append() ********************** //

// element ko parent ke last me add krna
const box = document.querySelector("#box");

const h2 = document.createElement("h2")
h2.innerText = "Hello Coder";

box.append(h2);
console.log(box.children)


// **************** 3 => appendChild() ***************** //
// appendChild kisi parent element ke andr last child ki trah ek new element add krta hai

const para2 = document.createElement("p");
para2.textContent = "iam new paragraph";

box.appendChild(para2);

console.log(box.lastChild)
console.log(box.firstChild)

// append ek se jaada element ko append kr skta hai jabki appendchild sirf ek element ko append krta hai
// append text node ko bhi append kr kr skta hai jbki appendchild nhi

// ****************** 4 => prepend() ***************************//

// prepend() kisi parent element ke andr first child ki trh ek ya ek se jyaada element add krta hai
// ye ek nye element ko bilkul starting me add kr deta hai aur multiple element add kr skta hai

const div1 = document.createElement("div")
div1.innerText = "No iam not python";

box.prepend(div1);
console.log(box.firstChild);

// **************** 5 => before() ************************** //

// before() kisi selected element ke theek pehle ek ya ek se jyaada element add krta hai (ouside add krta hai)

const test = document.querySelector("#box1");

const el = document.createElement("h1");
h1.innerText = "Hii deepanshu";

test.before(h1);
console.log(test.previousSibling)


// prepend() parent ke andr starting me add krta hai
// before() parent ke bhar starting me add krta hai

// *********************** 6 => after() *************************** //

// after kisi selected element ke theek baad ek ya ek se jyaada element add krta hai (outside)

const pa = document.createElement("p");
pa.innerText = "Wow grib"

test.after(pa);
console.log(test.nextSibling);

// ********************** 7 => remove () ************************** //
// elements ko delete krta hai

const te = document.querySelector("#test");
te.remove(); // test remove


// ***************** 8 => removeChild() **************************** //

// parent apne child ko delete krta hai
const fist = document.querySelector("#first");

fist.removeChild(second); // remove second child




