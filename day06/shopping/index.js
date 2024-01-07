const minus = document.querySelector('.minus');
const count = document.querySelector('.count');
const plus = document.querySelector('.plus');
const buy = document.querySelector('.buy');

function increase(){
    count.innerHTML = parseInt(count.innerHTML) + 1;
}
plus.addEventListener('click', increase);


minus.addEventListener('click', function(e){
    if(parseInt(count.innerHTML) === 0){
        count.innerHTML = 0
    }
    else{
    count.innerHTML = parseInt(count.innerHTML) - 1
    }
});



buy.addEventListener('click', function(e){
    if(parseInt(count.innerHTML) > 0){
        alert(`${parseInt(count.innerHTML)} 구매완료!`)
    }
    else{
        alert(`${parseInt(count.innerHTML)} 개 입력 다시 구매 입력하세요!`)
    }

});