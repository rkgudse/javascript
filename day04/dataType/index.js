// string type 문자 타입
// '', "", ``  문자열 표시 
// const a = "mega" -> 문자열 처리 
// const a = mega -> 문자가 아닌 변수로 처리함
// mega.에서 .표시는 문자열을 엮는 것들 표시(문자열에 관련된 것들이 나오는 것임)
// const numbers = 123
// numbers .에서는 숫자열 관련된 것들이 나옴


const mega = "mega"
const Big_mega = mega.toUpperCase()
window.console.log(Big_mega)

const hasMega = mega.includes("ga")
window.console.log(hasMega)

// number type