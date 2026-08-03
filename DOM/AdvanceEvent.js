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