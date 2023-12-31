// let str = "abcdef";
// let newstr = str.replace(/./g, '*')
let value;

const input = document.querySelector('.input');
input.addEventListener('input', function(event){
    value = event.target.value;
})

const button = document.querySelector('.button');
button.addEventListener('click', function(){
    let newValue = value;
    let starValue = newValue.replace(/./g, '*');
    input.value = starValue;
})


