let addNote = document.getElementById("addNewNote");
let popup = document.querySelector(".popup");
let cut = document.querySelector(".cut");


// Add note box par click
addNote.addEventListener("click", function () {
    popup.classList.add("show");
});


// × par click
cut.addEventListener("click", function () {
    popup.classList.remove("show");
});