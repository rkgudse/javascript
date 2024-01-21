let x = 0;
let targetX = 0; 
const speed = 0.05; 

const card = document.querySelector('.card')
// contentwrap img 안에 있는, contentwrap > img 첫번째 자식만
const images = document.querySelectorAll('.card img')
// const text = document.querySelector('.sports')
const item = images[0]
const logo = images[1]



window.addEventListener('mousemove', (e)=>{
    //window.innerWidth/2; -> 윈도우 크기를 고려해서 움직임
    x = e.pageX - window.innerWidth/2;
   
})


const loop = () => {
    targetX += (x - targetX) * speed;
    card.style.transform = `translateX(${targetX/70}px)`
    item.style.transform = `translateX(${targetX/50}px)`
    logo.style.transform = `translateX(${targetX/20}px)`
    // sports.style.transform = `translateX(${targetX/30}px)`
    window.requestAnimationFrame(loop);

}
loop()