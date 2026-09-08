    //           getUser()
    //               ↓
    //           Promise
    //               ↓
    //          Pending ⏳
    //               ↓
    //          2 seconds
    //          /        \
    //         ↓          ↓
    //    resolve()     reject()
    //        ↓             ↓
    //     .then()       .catch()
    //        ↓             ↓
    //   User data       Error

let searchbtn = document.querySelector("#searchBtn");
let result = document.querySelector("#result");



function getuser () {

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            let userAvailable = true;

            if(userAvailable){
                resolve({
                    name: "Deepanshu",
                    course : "BCA",
                    Section : "A"
                });
            }else{
                    reject("user not found")
                }
        },2000)
    });
}

getuser()
.then((user) => {
    console.log(user);
});

getuser()
.catch((user)=>{
    console.log(error);
})



searchbtn.addEventListener("click",() => {
    result.innerHTML = "Loading..."


    getuser()
    .then((user)=>{

        result.innerHTML = `
        <h2>name : ${user.name}</h2>
        <p>course : ${user.course}</p>
        <p>section : ${user.Section}</p>
        `;
    })

    .catch((user)=> {
        result.innerHTML = error;
    });
});