// BASICALLY CONTROL FLOW KA MATLAB HOTA HAI PROGRAM KIS ORDER ME EXECUTE HOGAA AUR KONSE CODE KAB CHLEGA THIS IS CALLED CONTROL FLOW!!

// EXAMPLE======> (normal flow)
    console.log("A");
    console.log("B");
    console.log("C");

// agar decision lena ho tabh

let age = 20;

if (age >= 18){
    console.log("you can vote!!")
} 
    
// yahaan js pehle condition check kregi agar condition true hui tbhi code chlega if ke andr ka 
// aur agar false hui to hum use krenge else

if( age >= 18){
    console.log("vote!")
}else{
    console.log("you are not eligible");
}

// agar if ki condition false hui to else ki condition print hogi


// ===============CONTROL FLOW ========================

// SEQUENTIAL FLOW
// CONDITIONAL FLOW 
// LOOPING FLOW
// FUNCTION FLOW
// EXCEPTION FLOW
// ASYNC FLOW

// 1=> SEQUENTIAL FLOW

// CODE LINE BY LINE CHLTA HAI

    console.log("one");
    console.log("two");
    console.log("three");

// 2 => CONDITIONAL FLOW

// CONDITION KE BASIC PAR DECISION 

let marks = 22;
if(marks >= 33){
    console.log("Pass");
}else{
    console.log("fail");
}

// 3 => LOOPING FLOW 

for (let i = 0; i<= 5; i++){
    console.log(i);
}

// 4 FUNCTIONN FLOW 
// FUNCTION TABHI CHLEGA JAB USKO CALL HOGA

function hello(){
    console.log("hello")
}

hello();

// 5 EXCEPTION FLOW
// AGAR ERROR AAYA TO PROGRAM KA FLOW BADAL SKTA HAI 

try{
    console.log(A);
}catch(err){
    console.log("error");
}

// 6 ASYNC FLOW (ADVANCED)
// YE TAB HOTA HAI JAB KOI KAAM TIME LETA HAI 

setTimeout(() => {
    console.log("2 second baad")
}, 2000);

// CONTROL FLOW
// IF-ELSE
// ELSE IF
// SWITCH
// FOR 
// WHILE
// DO WHILE
// BREAK
// CONTINUE
// RETURN
// TRY CATCH
// PROMISE
// ASYNC WAIT