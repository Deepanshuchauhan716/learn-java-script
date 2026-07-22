// LOOP KA BASIC MATLAB HOTA HAI EKI CODE KO BAAR BAAR EXECUTE KRNA JB TAK KOI CONDITION TRUE HO

// =================================== EXAMPLE ===============================================

// Maanlo tumhe 100 bar likhna hai hello 

console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")

// this is very tricky and bad practice
// ab hum ese situation ke liye use krte hai loops ka

for(let i = 0; i <= 100; i++){
    console.log(`${i} Hello`);
}

// this is very simple and easiest way to execute one code more time

// ============================== NEED OF LOOPS ====================

//  1 Repeated work
//  2 array traversing
//  3 pattern making
//  4 print table
//  5 games
//  6 data process and etc work

// =========================================== TYPES OF LOOPS IN JAVA SCRIPT =========================

// 1 FOR LOOP
// 2 WHILE LOOP
// 3 DO WHILE LOOP
// 4 FOR OF LOOP
// 5 FOR IN LOOP


// --------------------------------------- for loop -----------------------------

// Syntax

                          // for( initialization; condition ; update){
                                     //code
                                // }

// ###################################  EXAMPLE ##########################

for(let i = 1; i <= 5; i++){
    console.log("Deepanshu");
}



//  ---------------------------------------- WHILE LOOP ---------------------------
// ye loop pahle condition check krta hai agar condition true hai tabhi loop chlega

// syntax
                        // while(condition){
                                // code 
                            // }

//   ===================================== EXAMPLE =================================

 let i = 1;
 while(i <= 5){
    console.log(i);
    i++;
 }


//  -------------------------------- DO-WHILE LOOP -------------------------------------

// ISME CODE KAM SE KAM EK BAAR EXECUTE HOTA HAI 

// %%%%%%%%%%%%%%%%%%%%%% EXAMPLE %%%%%%%

let a = 10;
do{
    console.log(a)
} while(a < 5); // condition false thi fir bhi code ek baar chla

