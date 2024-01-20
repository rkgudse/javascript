// Math.random()*2000 //0~2000px 소수점 반올림, 수뽑기

// window.addEventListener('resize', (e)=>{
   
//    scope.style.left = e.pageX - (scope.offsetWidth / 2) + "px"
//    scope.style.top = e.pageY - (scope.offsetWidth / 2) + "px"

// })

const makeMoles = (number)=>{

    for(let i=0; i<100; i++){
        const x = Math.floor(Math.random() * 2000)
        const y = Math.floor(Math.random() * 1100)
        document.body.insertAdjacentHTML('beforeend',`
        <div style="left: ${x}px; top: ${y}px" class="moleBox">
            <img src="mole.png" alt="">
        </div>
        
        `)
    }
}
makeMoles(100)
//DOMContentLoaded(끝나면 로드해줘) defer랑 같음
document.addEventListener('DOMContentLoaded', (e)=>{
    const molesBox = document.querySelectorAll('.moleBox')
    const left = document.querySelector('.left')
    let moleLeft = molesBox.length
    left.innerHTML = `남은 두더지 수 : ${moleLeft}`

    // 각각에 해당
    molesBox.forEach((value) =>{
        value.addEventListener('click',function(){
            this.remove();
            moleLeft--;
            left.innerHTML = `남은 두더지 수 : ${moleLeft}`
        })
    })
})

