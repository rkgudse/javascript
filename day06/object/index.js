// object 타입
// key[중복x] - value[any타입]
const car = {
    'name' : 'k5',
    'color' : 'black',
    'price' : 25000000,
    'isNew' : true,
    'company' : 'hyundai',
    'imageSrc' : 'https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20231026_208%2F1698289063643OLVmw_PNG%2F6539d5a617e41413520a30a6.png&type=o&size=976x278&ttype=input',
    'option': {
        'sheet' : false,
        'navigation': false,
        'hipass' : true,
    }
}

const card =  document.createElement('div')
card.className = 'card'
const img = document.createElement('img')
img.src = car.imageSrc
img.className = 'card-img-top'
card.appendChild(img)


const cardBody = 'card-body'
const 




// // 속성확인
// console.log(car.name)
// console.log(car['name'])

// // 추가  및 삭제
// car.company = 'hyundai'
// delete car.isNew

// // 속성 유무 확인
// "company" in car //불리언 타입

