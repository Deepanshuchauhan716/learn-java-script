// CSS MANIPULATION

// js ki help se kisi HTML element ki css (color,size,background,border,class,etc) ko change krna CSS MANIPULATION hai!!

// css manipulation ke main topics

//*******************  */ 1 => STYLE ***************************

// ye sbse basic trika hai css change krne ka 

                // <h1 id="tittle">Hello</h1>

                // abhi html me kuch esa code hai 

const tittle = document.getElementById("tittle");
tittle.style.color = "red"; // hello ka color black ki jgh red ho jaayega
tittle.style.backgroundColor = "pink"; // pink background
tittle.style.fontSize = "50px"

// so is property se hum js ki help se style me change kr skte hai





// *********************** 2 => className ************************

// className kisi bhi element ke class ko replace krta hai

                    //  <div class="OldClass">deepanshu</div>
                    // html me kuch esa code hai

const NewClass = document.querySelector(".OldClass");
NewClass.className = "Hello"; // ab humare pass OldClass remove hokar Hello class add ho gyi 



// *********************** 3 => ClassList **************************

// professional project me sbse jyaada use hota hai ye classes ko manage krta hai
// class list ek property hai jo kisi element ki saari classes ko list form me return krti hai isme add,remove,toggle.contain jaise method hote hai jo class manipulation krna bahut easy banate hai

// ************ class list ke 5 main method() ************** //

// 1 => add() method element me ek se jyaada class ko add kr skta hai

const div = document.querySelector("#Boss");
div.classList.add("list"); // boss id se hatkr list class add ho gyi 

// 2 => remove() method 

const rm = document.querySelector(".first");
rm.classList.remove("first") // humari first class remove ho gyi 

// 3 => toggle() class ko on/off krta hai agar class hai to remove krega nhi hai to add krega
rm.classList.toggle("list") // add nhi thi isliye add kiya
rm.classList.toggle("list") // ab add thi to remove kr dia


// 4 => contain() class hai ya nhi check krta hai
 if(div.classList.contains("list")){
    console.log("Class present");
 }
 else{
    console.log("Not present");
 }
// answer is "Class present " jo ki bilkul right hai

// 5 => replace() class ko replace kr deta hai aaps me

// jaise is time humare pass div me list class present hai ab hum use first se replace krna chate hai

div.classList.replace("list","first"); // to div ke andr list replace hoke first add ho gya



