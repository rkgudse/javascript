function increase(){
    const number = document.querySelector(".number");
    //  window에 있는 parseInt 숫자를 정수로 해석해주세요
    number.innerHTML = window.parseInt(number.innerHTML) + 1;
}
const plusbutton = document.querySelector('.plus');
plusbutton.addEventListener("click", increase);


function decrease(){
    const number = document.querySelector(".number");
    number.innerHTML = window.parseInt(number.innerHTML) - 1;
}
const minusbutton = document.querySelector(".minus")
minusbutton.addEventListener("click", decrease)


// const < > let

let num 