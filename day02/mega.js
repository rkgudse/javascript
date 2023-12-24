// 이벤트 만듦
function show(){
    const mega = document.querySelector(".mega");
    mega.style.display = "block";
}

const btn = document.querySelector(".open-button");
btn.addEventListener("click", show);



function hidden(){
    const mega = document.querySelector(".mega");
    mega.style.display = "none";
}

const btn1 = document.querySelector(".close-button");
btn1.addEventListener("click", hidden);



