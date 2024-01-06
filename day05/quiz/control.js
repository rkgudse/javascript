// 1. 숫자 입력받고
// 홀수면 홀수입니다. 짝수면 짝수입니다.

// 2. 키넣고 130 이상이면 롤러코스터 탈 수 있습니다. 아니면 못탑니다

// 짝수판별기 : if (a % 2 ==0 )

// const a = parseInt(window.prompt('숫자 입력:'))
// if (a % 2 ==0){
//     alert('짝수')
// }
// else(){
//     alert('홀수')
// }
// --------
// const height = document.querySelector('.height')
// const button = document.querySelector('.button')


// if( b >= 130 ){
//     window.alert('롤러코스터 탈 수 있습니다.')
// }

// else{window.alert('못탑니다.')} 

// button.addEventListener('click', function(){

// })

// ------

// 10글자 넘기면 빨간색 안 넘기면 회색
// const text = document.querySelector('.text')
// const redLine = '1px solid red';
// const greyLine = '1px solid grey'
// text.addEventListener('input', function(e){
//     const istenover = e.target.value.length > 10
//     text.style.border = istenover ? redLine : greyline
// })


// -----
// const box = document.querySelector('.box');
// for(let i = 0; i < 1000; i++){
//     const newd = document.createElement('div')
//     newd.innerHTML = i
//     box.appendChild(newd)
// }


const n = parseInt.prompt('숫자')
for(let i =0; i < 100; i++){
    if(i % 3 == 0){
        console.log(i)
    }
}



