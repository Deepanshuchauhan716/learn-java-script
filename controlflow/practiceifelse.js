// GRADE SYSTEM

let marks = 85;
let name = "deepanshu";

if(marks >= 90){
    console.log(`A grade ${name}`)
}
else if(marks >= 80){
    console.log(`B grade ${name}`)
}
else if(marks >= 75){
    console.log(`C grade ${name}`)
}
else if(marks >= 50){
    console.log(`D grade ${name}`)
}
else{
    console.log(`fail ${name} sorry`);
}

// TAX CALCULATE

let salary = 40000;
if(salary <= 30000){
    console.log("No tax")
}
else if(salary <= 40000){
    console.log("5% tax")
}
else if(salary <= 50000){
    console.log("7% Tax")
}else{
    console.log("20% Tax")
}