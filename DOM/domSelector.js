// dom selector js ki help se html ke kisi element ko select krne ka trika hota hai
// ****************************** or *********************************************//
// HTML me jis element par kaam krna hai pehle usko select krna pdta hai

// example

// abhi humne html file me kuch esa code likha 

                    // <h1 id="tittle">Hello world</h1>
                    // <p class="text">HTML</p>
                    // <p class="text">CSS</p>
                    // <button>click me</button>


// jisme id aur class ka use hua hai ab hum chate hai ki hum js ki help se h1 ke text ko ya color ko change kre to hume phle h1 ko select krna pdega par kaise to hum use krte hai dom selector


// dom selector ke method kis kis trike se hum element ko select kr skte hai 

// ####### 1 =>  getElementById(); isme hum id ke name se element ko select krke code perform krte hai ek id sirf ek element ko mil skti hai 

// how to select ??

const h1selectTest = document.getElementById("tittle"); // h1 select ho gya ab hum uspe kuch bhi perform kr skte hai
h1selectTest.innerText = "Hello deepanshu";
h1selectTest.style.backgroundColor = "red"; 
        // ab html ke webpage me hello world ki jgh hello deepanshu show hoga

// is trike se getElementById() method se element ko select krte hai

// ######## 2 => getElementByClassName(); isme hum class se element ko select krte hai aur ek class bahut saare element  ke pass ho skti hai

//  *******   ***********   ************ *********  note *********  ******** ******************** ************************ 

// getElementsByClassName() me ek bahut bada difference hota hai ye aapko array return krta hai instead of single element isliye jab bhi aap getElementByid() ka use krte hai to jis element ko change krna hota hai uski index value bhi likhte hain jabki is me esa nhi hota hai kyoki js ko pta hai ki id unique hai isliye vo sidha element return krta hai instead of array

// how to select??

const para = document.getElementsByClassName("text"); // claas name se hume <p> tag ko select kr lia
para[0].innerText = "Iam coder"; // yaha humare pass 2 class thi par hume 0 index waale ko change kiya uski index value ki help se ab humare 0 index ke p tag ke andr "i am coder" show ho rha hai


// ################ 3 => querySelector();  ye css selector ki trh kaam krta hai Id ke liye # aur class ke liye (.) ye single element return krta hai na ki koi nodelist ya array 

// how to select ???

const selection = document.querySelector("#query") // id ko select krne ke liye # ka use hua 
selection.style.color = "green";

const selection1 = document.querySelector(".query1") // class ko select krne ke liye . ka use hua 
selection1.style.color = "red";

const selection2 = document.querySelector("button") // tag ko select krne ke liye tag name ka use hua 
selection2.style.height = "30px";
selection2.style.width = "100px";

// ############### 4 => querySelectorAll(); ye saare matching element ko ek saath select krke return krta hai

// abhi humare pass html me kuch esa code hai 

                                    // <div class="All">Iam bca student</div>
                                    // <div class="All">Iam bca student</div>
                                    // <div class="All">Iam bca student</div>
                                    // <div class="All">Iam bca student</div>
                                    // <div class="All">Iam bca student</div>


// agar aap in sbko ek saath change krna chate ho to querySelector all ka use hota hai 

// how to select !!

const Allinone = document.querySelectorAll(".All");
Allinone.forEach(el=> {
    el.style.backgroundColor = "pink";
});

// agar yhi kaam hum querySelector se krte to browser ko har baar scan krna pdta hi .All kha kha hai aur uspe kya kaam krna haii isliye hume all ka use kiya 






