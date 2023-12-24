// insertAdjacentHTML

document.body.insertAdjacentHTML("beforeend", "<div class='container'></div>")
const container = document.querySelector(".container")
// 어디에, 무엇을
container.insertAdjacentHTML("beforeend", "<button class='button tomato'>버튼</button>")