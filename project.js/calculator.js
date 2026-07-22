let firstNumber = 50;
let secondNumber = 34

let operator = Number(prompt("Enter operator 1 = +, 2 = -,3 = *,4 = /"));

switch(operator){
    case 1:
    console.log(firstNumber + secondNumber);
    break;

    case 2:
    console.log(firstNumber - secondNumber);
    break;

    case 3:
    console.log(firstNumber * secondNumber);
    break;

    case 4:
    console.log(firstNumber / secondNumber);
    break;

    default:
        console.log("select valid operator");

}