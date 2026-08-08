const increment = document.querySelectorAll(".btn");
const count = document.querySelector("#count");
const input = document.querySelector("#inp");
const reset = document.querySelector("#reset")

let count1 = 0 

increment[0].addEventListener("click",() => {

    let num = Number(input.value);

    if(input.value === ""){
        count1++;
        count.innerHTML = count1;
    }else{
        count1 = count1 + num;
        count.innerHTML = count1;
    }
})
increment[1].addEventListener("click",() => {

    let num = Number(input.value);

    if(input.value === ""){
        count1--;
        count.innerHTML = count1;
    }
    else{
        count1 = count1 - num;
        count.innerHTML = count1;
    }
})

reset.addEventListener("click",()=>{
    input.value = "";
    count1 = 0;
    count.innerHTML = count1;
})



