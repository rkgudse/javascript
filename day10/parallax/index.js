const coverWrap = document.querySelector('.coverWrap')
const contWrap = document.querySelector('.contWrap')
const title = document.querySelector('.title')

coverWrap.style.hight = window.innerHeight + 'px'
contWrap.style.marginTop = window.innerHeight + 'px'



window.addEventListener('scroll', ()=>{
    title.style.top = -window.scrollY / 5 + 'px';
    coverWrap.style.backgroundPosition = `center ${-window.scrollY}px`
})