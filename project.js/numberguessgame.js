alert("Welcome to the number guessing game")

let SecretNumber = 50;
let inputNumber = Number(prompt("Enter numbers"));

while(inputNumber !== SecretNumber){

   if(inputNumber > SecretNumber){
    alert(`secret number is less than ${inputNumber}`);
}
else{
     alert(`secret number is greater than ${inputNumber}`);
}
 inputNumber = Number(prompt("Try again"));
} 

alert("Congratulation !")
