let addNote = document.getElementById("addNewNote");
let popup = document.querySelector(".popup");
let cut = document.querySelector(".cut");

let tittleinp = document.getElementById("tittle_input");
let discriptioninp = document.getElementById("discription_input")
let noteform = document.getElementById("noteForm");

addNote.addEventListener("click", function () {
    popup.classList.add("show");
});


cut.addEventListener("click", function () {
    popup.classList.remove("show");
});

noteform.addEventListener("submit",(event) => {
    event.preventDefault();

    let tittle = tittleinp.value
    let discription = discriptioninp.value;

    if(tittle === "" || discription === ""){
        alert("please fill the tittle and discription");
        return;
    }

    
});