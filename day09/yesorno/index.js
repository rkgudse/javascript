const circleBox = document.querySelector('.circleBox')
const circle = document.querySelector('.circle')


let x = 0;
let y = 0;
let targetX = 0; 
let targetY = 0;
const speed = 0.05; 

window.addEventListener('mousemove', (e)=>{
    x = e.pageX
    y = e.pageY
})

const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;
    circleBox.style.transform = `translate(${targetX}px, ${targetY}px)`
    window.requestAnimationFrame(loop);

}
loop()



const buttons = document.querySelectorAll('a')
buttons.forEach((value)=>{
    value.addEventListener('mouseover', ()=>{
        circle.style.transform = 'scale(0.3)'
    })
    value.addEventListener('mouseleave', ()=>{
        circle.style.transform = 'scale(1)'
    })
})


const topBox = document.querySelector('.top')

topBox.addEventListener('mouseover', ()=>{
    topBox.style.fontSize = '60px'
})

topBox.addEventListener('mouseleave', ()=>{
    topBox.style.fontSize = '30px'
})


