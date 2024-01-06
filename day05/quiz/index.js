// const year = window.prompt('태어난 년도 입력')
// const int_year = parseInt(year)
// window.alert(`당시의 나이는 ${2024 - int_year}`)


// const float_r = parseFloat(window.prompt('반지름 입력'))
// const round = 2 * 3.14 * float_r.toFixed(2)
// const width = float_r ** 2 * 3.14.toFixed(2)

// window.alert(`원의 둘레는 ${round}, 원의 넓이: ${width}`)


const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const bmi = document.querySelector('.bmi')
const button = document.querySelector('.button')



let heightValue = 0;
let weightValue = 0;

height.addEventListener('input', function(e){
   
    heightValue = parseFloat(e.target.value) / 100
})

weight.addEventListener('input', function(e){
    weightValue = parseFloat(e.target.value)
})

button.addEventListener('click', function(e){
    bmi.innerHTML = `당신의 bmi : ${weightValue / (heightValue ** 2)}`
})
