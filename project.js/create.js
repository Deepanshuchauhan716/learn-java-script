// sbhi input ko cathch kro >>>>
const signUp = document.getElementById('signup_form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const confPass = document.getElementById('conforim');

signUp.addEventListener("submit",(e) =>{
    e.preventDefault(); // page reload hone se rokta hai

    // ab saari values ko uthaao input se
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passVal = passWord.value;
    const confPassVal = confPass.value;

    if(userNameVal == ""|| emailVal == "" || passVal== "" || confPassVal == ""){
        alert("Please fill the form");
    }

    const emailPattern =   /^[^\s@]+@gmail\.com$/;
    if(!emailPattern.test(emailVal)){
        alert("Enter Valid Email");
    }

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passPattern.test(passVal)){
        alert("Password must be at least 8 characters and contain uppercase, lowercase, number and special character");
        return;
    }

    console.log(userNameVal,emailVal,passVal,confPassVal);

})