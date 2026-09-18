const btn = document.getElementById('btn');

function getUser(){
    const stored = localStorage.getItem("Currentuser");
    return stored ? JSON.parse(stored) : null;
}
btn.addEventListener("click",(Currentuser) => {

   const Currentuser = getUser();
   
   if(Currentuser){
    window.location.href = "dashbaord.html";
    return;
   }

   const user = localStorage.getItem(users);
   
   if(users){
    window.location.href = "login.html";
   }else{
    window.location.href = "create.html";
   }
});
