let coffee = {
    name:'latte',
    price: 3000,
    shot: 2,
}

console.log(coffee);
// 안에 있는 내용을 보고 싶음 for  사용
for(let key in coffee){
    console.log(key);
// 아래 코드 2줄은 같은 것.
    console.log(coffee.key);
    console.log(coffee.[key]);
// 코드 정리하면 아래와 같음
    console.log(`key:${key} value:${coffee.[key]}`);
}

// structurting? <-> destructurting? 역으로 구조 뽑기
const {name, price} = coffee
console,log(name, price)

if 등을 사용해서 value 값을 나오게 할 수 있음.


