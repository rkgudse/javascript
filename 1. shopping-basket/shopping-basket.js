function show(){
    const select = document.querySelector(".container2");
    select.style.display = "block";
}

const btn1 = document.querySelector(".add");
btn1.addEventListener("click", show);

function close(){
    const cancel = document.querySelector(".container2");
    cancel.style.display = "none";
}

const btn2 = document.querySelector(".cancel");
btn2.addEventListener("click", close);


function decrease(){
    const mb = document.querySelector(".number");
    mb.innerHTML = window.parseInt(mb.innerHTML) - 1;
}

const minus = document.querySelector(".minus");
minus.addEventListener("click", decrease);



function increase(){
    const mb = document.querySelector(".number")
    mb.innerHTML = window.parseInt(mb.innerHTML) + 1;

}

const plus = document.querySelector(".plus");
plus.addEventListener("click", increase);










