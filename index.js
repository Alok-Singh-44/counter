let incbtn = document.querySelector("#increase");
let decbtn = document.querySelector("#decrease");
let resbtn = document.querySelector("#reset");
let text = document.querySelector("#txt");

let i = 0;

function increase(){
    text.innerText= ++i;
    console.log("CLI");
}
function decrease(){
    text.innerText= --i;
    console.log("CLI");
}
function reset(){
    text.innerText= i = 0;
    console.log("CLI");
}


incbtn.addEventListener("click", increase);
decbtn.addEventListener("click", decrease);
resbtn.addEventListener("click", reset);
