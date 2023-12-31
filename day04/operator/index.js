// arithmath operator

const a = 5 % 3 //2
const b = 5 / 3 // 1.xxx

let x;
const even = x % 2 // 0: 짝수 1: 홀수
const exop = 2 ** 10 // **(제곱연산자) 2의 10제곱

let a1 = 1;
a1 = a1 + 1; //1을 더함. 이걸 쉽게 표현하면 아래와 같음.

a1++; // 2
a1--; // 1

//복합 할당 연산자
b1 +=3;

//비교 연산자 [결과가 boolean]
// >, >=, <, <=
const c1 = 3 > 1; //true

// ==(같다), !=(다르다) / -> 가급적 ===를 사용 권장
const c2 = 100 == 100 // true
const c3 = 50 != 3 // true

// ===(타입도 같은지 확인)





// 삼항 연산자
// '조건식' ? '값' : '값'
const f1 = 300 
const f2 = 200
const f3 = f1 > f2 ? 'f1이 크네요' 'f2가 크네요';

// typeof 연산자
const h1 = typeof '123' //string
const h2 = typeof 123 //number
const h3 = typeof !'' // boolean
const h4 = typeof 3 > 1 // boolean


// nullish  연산자(??)

const h5 = 123 ?? '로딩중' //123