// 제어문(control_statement)
// -조건문(condition_statement)
// -if, switch

// const a = 5 > 1 / true

const a = document.querySelector('.box');
if (a == null){
    window.alert('해당 태그 없음!')
}


const b = parseInt(window.prompt('숫자:'))
if (b > 0){
    window.alert('양수')
}

else if(c === 0){
    window.alert('0')
}

else{
    window.alert('0 또는 음수')
}