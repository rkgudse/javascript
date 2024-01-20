// const x = document.querySelector(.x)
// const y = document.querySelector(.y)
// window.addEventListener('mousemove', (e)=>{
//     x.innerHTML = `마우스 x의 좌표: ${e.pageX}`
//     y.innerHTML = `마우스 y의 좌표: ${e.pagey}`
// })


const scope = document.querySelector('.scope');
window.addEventListener('mousemove', (e)=>{
   
   scope.style.left = e.pageX - (scope.offsetWidth / 2) + "px"
   scope.style.top = e.pageY - (scope.offsetWidth / 2) + "px"

})


