// 요소 추가하기
// 1. innerHTML에서 태그 추가는 못들은 거로
// 2. 정석

// 디브 태그 만든 상태
const new1 = document.createElement('div');
// 클래스를 준 상태
new1.className = 'box';
// 클래스주고 메리크리스마스라고 적어둠
new1.innerHTML = '메리크리스마스';


document.body.appendChild(new1)