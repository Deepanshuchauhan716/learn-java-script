// PRACTICE QUE 
// LEVEL 1 EASY

console.log("5" + 5); // 55 because string + number ek string bnta hai to java script "5" ko aur 5 ko as a string treat kri hai!

console.log("5" - 5) // 0  beacause - operator concate krne ke jgh number banane ki kosis krta hai

console.log("5" * 5) // 25  beacause * operator bhi concate krne ke jgh number banane ki kosis krta hai

console.log("20" / 4) // 5  beacause / operator bhi concate krne ke jgh number banane ki kosis krta hai

console.log("20" % 3) // 2 beacause % operator concate krne ke jgh number banane ki kosis krta hai

// LEVEL 2 BOOLEAN

console.log(true + 5) // 6 beacuse true =  1 so java script as a number treat kr rhi hai true ko so 5 + 1 = 6

console.log(false + 5) // 5 beacause false = 0 

console.log(true + true) //2 beacause 1 + 1 = 2

console.log(true + false) // 1

console.log(true * 10) // 10 

// LEVEL 3 STRING + BOOLEAN

console.log(true + "5"); // true5 java script ne true ko bhi as a string traet kiya 

console.log("5" + false) // 5false

console.log(false + "10") // false10

console.log("hello" + true ) //hellotrue

console.log("JS" + false + true) //JSfalsetrue

// LEVEL 4 (NULL AND UNDEFINED)

console.log(null + 10) // 10 beacuse null = 0

console.log(undefined + 10) //Nan

console.log(undefined + "10") //undefined10

console.log(null * 10) // 0 

// LEVEL 5 (OPETATOR PRECEDENCE)

console.log(10 + "5" * 2) //20 because * operator number banane ki kosis krta hai to "5" * 2 = 10 and 10 + 10  = 20

console.log("10" - "2" + 5) // 13 beacuse - bhi number bnane ki kosis krta hai 

console.log(10 + 5 + "2") //152 

console.log("2" + 10 + 5) //2105

console.log("10" + 5 * 2) //1010

// LEVEL 6 (INTERVIEW LEVEL)

console.log("100" - true) // 99

console.log("100" + true) // 100true

console.log("50" * false) //0

console.log("hello" - true) //NaN

console.log(true + false + "10") //110

// BONUS TRICKY

console.log(5 + "5" - 2) //53

console.log("5" - 2 + "3") //33

console.log(true + true + "5") //25

console.log("5" + true + false) //5truefalse

console.log("10" * "2" + "5") //205