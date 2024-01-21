let x = 0;
let targetX = 0; 
const speed = 0.05; 

// contentwrap img 안에 있는, contentwrap > img 첫번째 자식만
const images = document.querySelectorAll('.contentwrap img')

const shadow = images[0]
const human = images[1]
const text = images[2]


window.addEventListener('mousemove', (e)=>{
    //window.innerWidth/2; -> 윈도우 크기를 고려해서 움직임
    x = e.pageX - window.innerWidth/2;
   
})


const loop = () => {
    targetX += (x - targetX) * speed;
    shadow.style.transform = `translateX(${targetX/50}px)`
    human.style.transform = `translateX(${targetX/20}px)`
    text.style.transform = `translateX(${targetX/40}px)`
    window.requestAnimationFrame(loop);

}
loop()