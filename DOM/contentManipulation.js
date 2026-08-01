// CONTENT MANIPULATION

// JAVAscript ki help se HTML element ke andr ka content padhna ya badlna content Manipulation kehlaata hai
// ******************************* or ******************************************
// Page par jo text ya HTML dikh rha hai usko javaScript se change krna hi content manipulation hai 

// abhi humare pass html me kuch esa code hai 
                                    
                                    // <h1 id="tittle">Hello</h1>

const heading = document.getElementById("tittle");
heading.innerText = "Welcome";

// content manipulation ke 3 main properties

// 1 => innerHTML

            // element ke andr ka HTML code read aur write karta hai 
            // humare pass html me kuch esa code hai 

            
        //     <div id="box">
        // <h1>Deepanshu</h1>
        //     </div>

        const box = document.getElementById("box");

        box.innerHTML = `<h1>java script</h1>
        <p>DOM</p>
        <button>Click me bro</button>`

        // 3 naye element page par ban jaayenge


// 2 => innerText

                    // sirf visible text ko read aur write krta hai 
                    const inT = document.getElementById("grib");
                    inT.innerText = "Me halku hu re";
// 3 => textcontent

                // element ke andr ka text return krta hai chae vo hidden ho ya visible
                
                                        // <div id="box1">
                                        //     Hello
                                        //     <span style="display: none;">world</span>
                                        // </div>
            // humare pass html me kuch esa code hai jisme "world" hide hai

            


