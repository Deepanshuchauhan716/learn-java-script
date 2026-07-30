// ** DOM (DOCUMENT OBJECT MODEL) HMML PAGE KA JAVASCRIPT VERSION HOTA HAI JISE JAVA SCRIPT READ AND CHANGE KR SKTI HAI

// DOM JAVA SCRIPT AUR HTML KE BEECH KA BRIDGE HAI

// EXAMPLE

    <h1>Hello world</h1> 
    
    // html ise sirf text ki trh nhi dekhta hai
    // wo iska ek tree bnata hai

    // document -> html -> body -> h1 -> hello world

    // is tree ko DOM tree khte hai

    // EXAMPLE 

    // HTML 
    // <h2 id="Tittle">Hello deepanshu</h2>  

    // JS 
    // const heading = document.getElementById("Tittle"); 

    // ab java script ko h2 ko catch kr liya jiski id Tittle hai

    // HTML ka text change krna 

    // heading.innerText = "Welcome" 

    // * * ** * * * * * * * * * * DOM kyo jruri hai  * * * * * * * * * * //

    // dom ke bina javascript sirf calculation kar skti thi

    // but with dom * * * 

            // button click handle kr skti hai
            // text change kr skti hai 
            // image change kr skti hai
            // css change kr skti hai
            // form validation kr skti hai
            // games bna skti hai

        // example

            // <button>click me</button> 
            // <h3>Hello</h3>
        
        // button par click krte hi hello print hoga 

        // IMPORTANT TERMS

        // DOCUMENT => PURA WEB PAGE
        // ELEMENT => HTML TAG(<H1>,<P>  ETC)
        // NODE => DOM TREE KA HAR PART
        // DOM TREE => BROWSER KA BNAAYA HAR EK STRUCTURE

        
    // * ********************************** DOM chapter 2 (window object aur document object) ************************************************* //

    // jab hum browser me koi website kholte hai to browser humare liye ek gloabal object bnaata hai //

    // usi object ka naam WINDOW hai
    // browser ka boss = window

    // example 
    alert("hello");
    window.alert("Hello");

    // example 2
    prompt("Enter your name")
    window.prompt("Enter name");

    
            
            