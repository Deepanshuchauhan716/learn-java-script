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

    // humesa window likhna jruri nhi hai

        // *************************************** Chapter 3 DOM selector (most important) ****************************** //

 
        // selector javascript ko batata hai ki HTML ka konsa element select krna hai //

        //   <h1 id="Text">Hello</h1>
        //  <h1 class="Text2">Hello1</h1>
        //  <div>Hello2</div>
        
    //  ************ java script ki help se in element,id,class ya tag ko kaise catch kre *************** //

    // is kaam ko hum dom selector ki help se pura krte hai

    // 5 main dom selector in javascript

    //  1 = > getElementById(); id ko catch krne ke liye

    <h1 id="Text">Deepanshu</h1>

    const idTest = document.getElementById('Text'); //ab humne h1 ko catch kr lia jiski id Text hai Id sirf ek element ko assign krte hai 

    // 2 = > getElementByClassName(); class ko catch krne ke liye 

      <h1 class="Text1">Deepanshu</h1>

    const ClassTest = document.getElementsByClassName('Text1'); //ab humne h1 ko catch kr lia jiski class Text1 hai Class multiple element ko assign kr skte hai

    // 3 = > getElementByTagName(); jiske pass na id ho na class to to tag se catch krte hai

    <div>Tag</div>

    const TagName = document.getElementsByTagName('div'); 

    // 4 = > querySelector(); id aur class dono ko catch kr skta hai but id ke liye #IdName and class ke liye .ClassName

    <nav id="Nav"></nav>

    const Query = document.querySelector('#Nav'); // # id ke liye

    <mark class="Mark"></mark>

    const Query1 = document.querySelector('.Mark'); // . class ke liye

    // 5 = > querySelectorAll(); All ka matlba hai jis bhi id ya class ya tag ko select kroge vo sbhi catch ho jaayegi 

    // <h1></h1>
    // <h1></h1>
    // <h1></h1>

   const para = document.querySelectorAll('h1') // saare h1 select ho jaayennge

    
   
   
   //    **************************************  chapter 4 => Content manipulation (InnerHTML,innerText,TextContent) ************** //
    // java script ki help se Html element ke andr ka contant badlna ya padna Manipulation kehlaata hai

    // abhi html file me ye text hai 
    //    <h1 id="test">Welcome world</h1> 

    const heading = document.getElementById("test").innerText = "Deepanshu"; //ab html file me welcome world ki jgh deepanshu dikega

    // innerHtml

    // innerHTML element ke andr ka html content read ya change krta hai

    //Text content

    // element ke andr ka text return krta hai chae vo hidden ho ya visible

    



    

        
            