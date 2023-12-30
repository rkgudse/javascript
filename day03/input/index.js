let value;

const input = document.querySelector('.search');
input.addEventListener('input', function(event){
    value = event.target.value
})

const button = document.querySelector('.button');
button.addEventListener('click', function(){
    const span = document.createElement('span');
    span.innerHTML = value;
    const note = document.querySelector('.note');
    note.appendChild(span);
    const blank = document.querySelector('.search')
    blank.value = '';
})