// sbhi input ko cathch kro >>>>
const signUp = document.getElementById('signup_form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const confPass = document.getElementById('conforim');

// user exist or not function 

function usersExist(userNameVal,emailVal){

    const stored = localStorage.getItem("users")

    if(!stored){
        return false;
    }
    const users = JSON.parse(stored);

    const found = users.find(user => {
        return user.username === userNameVal || user.email === emailVal;
    })

    if(found){
        return true;
    }else{
        return false;
    }


}

signUp.addEventListener("submit",(e) =>{
    e.preventDefault(); // page reload hone se rokta hai

    // ab saari values ko uthaao input se
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passVal = passWord.value;
    const confPassVal = confPass.value;

    if(userNameVal == ""|| emailVal == "" || passVal== "" || confPassVal == ""){
        alert("Please fill the form");
        return;
    }

    const emailPattern =   /^[^\s@]+@gmail\.com$/;
    if(!emailPattern.test(emailVal)){
        alert("Enter Valid Email");
    }

    if(passVal !== confPassVal){
        alert("Enter Same password in password field");
    }

    if(usersExist(userNameVal,emailVal)){
        alert("user already exist");
        return;
    }

    usersObj = {
        username : userNameVal,
        email : emailVal,
        password : passVal
    };



    console.log(userNameVal,emailVal,passVal,confPassVal);

})