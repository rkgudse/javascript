const number = parseInt(prompt('점수를 입력해주세요.(90 이상 A, 80 B, 70 C, 나머지 F)'))

if(number >= 90){
    alert("A")
}

else if(number >= 80){
    alert("B")
}

else if(number >= 70){
    alert("C")
}

else{alert("F")}
    
    

const number2 = parseFloat(prompt('숫자를 입력해주세요.(정수를 입력을 했을 때, 양의 홀수 양의 짝수 0 음의 홀수 음의 짝수)'))

if(number2 > 0){
    if(number2 % 2 == 0){
        alert('양의 짝수')
    }

    else{
        alert('양의 홀수')
    }
}

else if(number2 < 0){
    if(number2 % 2 == 0){
        alert('음의 짝수')
    }

    else{
        alert('음의 홀수')
    }
}

else{
    alert('0')
}



for(let i=1; i < 21; i++){
    console.log(i)
}

const input = document.querySelector('.input');
const span = document.querySelector('.span');
const button = document.querySelector('button');

input.addEventListener('input', function(e){
    inputValue = parseInt(e.target.value)
});

button.addEventListener('click', function(){
    let result = 0;
    for(let i=1; i <= 9; i++){
        result += `${inputValue} x ${i} = ${inputValue * i}\n`
    }  
    span.innerHTML = result;

})




