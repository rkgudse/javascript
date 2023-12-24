// // 정의
// function call(x){
//     window.alert(x);
// }
// // 호출-사용하기

// call("메리크리스마스");

function makeButton(){
    const btn = document.createElement('button');
    btn.innerHTML = "버튼";
    document.body.appendChild(btn);
}

const btn = document.querySelector(".button");
btn.addEventListener("click", makeButton);


// makeButton('메리 크리스마스');
// makeButton('나홀로집에 많관부!');

function makeskyButton(){
    const sbtn = document.createElement('button')
    sbtn.innerHTML = "하늘색 버튼";
    sbtn.style.backgroundColor = "skyblue";
    document.body.appendChild(sbtn);

}

const sbtn1 = document.querySelector('.sky-button');
sbtn1.addEventListener("click", makeskyButton);



function {

}
