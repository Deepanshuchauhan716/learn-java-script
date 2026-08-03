// ADVANCE EVENT 

// ****************** 1 => preventDefault() ************************* //

// preventDefault browser ke default behavior ko roke deta hai
// ******************* Or ********************************//

// Browser kuch kaam khud se krta hai agar tum nhi chate ki browser vo kaam vo kaam kare to preventDefault ka use hota hai !!

// browser ka default behavior like :
// 1 => form submit -> page reload hota hai
// 2 => <a></a> tag par par click hote hi dusre page par chla jaata hai
// 3 => checkbox -> check/uncheck ho jaata hai
// 4 => right click krte hi context menu khul jaata hai

// ye sab browser apne aap kart hai

                        //  <form id="form">
                        //         <input type="text">
                        //         <button>submit</button>
                        //     </form>

// submit button par click krte hi page reload hora hai jisse form submit nhi hota

// preventDefault  isi problem ko solve krta hai

const form = document.querySelector("#form")
form.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log("form submited without relaod");
});

// example 2

const gog = document.querySelector("#google");

gog.addEventListener("click",(e) => {
    e.preventDefault();
    console.log("Google not open"); // ab anchor tag kaam nhi krega
})

// ye saare brower ke behavior ko stop krne ke liye use hota hai

// ***************************** event bubbling ******************************* //

// jab kisi child par event hota hai to wo event parent ,phit grandparent aur aakhiri me document tak pahuch jaata hai is process ko event bubbling khte hai 

// event humesa niche se upper travel krta hai

const son = document.querySelector("#son")
son.addEventListener("click",function(){
    alert("son hu me")
})

const parent = document.querySelector("#parent")
parent.addEventListener("click",function(){
    alert("parent hu me")
})

const grandPar = document.querySelector("#grandPar")
grandPar.addEventListener("click",function(){
    alert("grand parent hu me");
})

// jab hum sirf son waale div par click kr rhe hai to parent and grand parent waale event bhi apne app chal rhe hai

// ise kehte hai event bubbling ki agar son pe click hoga to parent and grand parent and starting tk phuch jaayega event jabki agar grand parent par click krte hai to sirf usi ka event chlega 

// agr son par click hua to -> parent and grand parent automatic chlenge 
// agar parent par click hua to -> grand parent par apne app chlega
// agr grand parent par hua tbh kuch nhi chlega grand parent ke alaava

// this is called bubbling

// **************************************** stopPropagation ********************************* //

// Event bubbling ki problem ko solve krta hai stopPropogation

const son = document.querySelector("#son")
son.addEventListener("click",function(e){
    e.stopPropagation();
    alert("son hu me")
})

const parent = document.querySelector("#parent")
parent.addEventListener("click",function(){
    e.stopPropagation();
    alert("parent hu me")
})

const grandPar = document.querySelector("#grandPar")
grandPar.addEventListener("click",function(){
    alert("grand parent hu me");
})

// ab agr son par click hoga to event bubble hokr uske parent ya grand parent par nhi jaayega aur ese hi parent ke saath hoga
// this is called stop propagation


// ****************************** Event capturing **************************************** //
// event captiring event bubbling ka ulta hai isme event niche se upper nhi blki upper se nicehe aataa hai

// event capturing ka ek phla phase hai jisme event window se start hokar target element tak phuchta hai

const son = document.querySelector("#son")
son.addEventListener("click",function(e){
    alert("son hu me")
},true)

const parent = document.querySelector("#parent")
parent.addEventListener("click",function(){
    alert("parent hu me")
},true)

const grandPar = document.querySelector("#grandPar")
grandPar.addEventListener("click",function(){
    alert("grand parent hu me");
},true)

//ab agr chlid par click hoga to grand parent ka event phle chlega fir parent fir son

// yhi event capturing hai

