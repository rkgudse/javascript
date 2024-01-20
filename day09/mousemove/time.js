// setInterval(() => {
//    console.log('삼겹살') 
// }, 1000);



setInterval((e)=>{
    const time = document.querySelector('.time')
    const parseTime = parseInt(time.innerHTML)
    time.innerHTML = parseTime > 0 ? parseTime -1 : 0;

}, 1000)

