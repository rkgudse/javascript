//  object
const shopping = {
    'name' : {
        'maratang'  : '미미관 누들마라탕',          
        'nabe' : '밀푀유나베 + 소고기야끼소바 밀키트',
        'gimbap' : '단백김밥 화르르 불닭 1팩',
    },
    'price' : {
        'high' : 22410,
        'middle' : 12670,
        'low' : 5900,
    },

    'maratangImage' : {
        'imageSrc' : 'https://gdimg.gmarket.co.kr/3285709904/still/280?ver=1698740788',
    },
    'nabeImage' : {
        'imageSrc' : 'https://gdimg.gmarket.co.kr/1916915565/still/280?ver=1645097682',
    },
    'gimbapImage' : {
        'imageSrc' : 'https://gdimg.gmarket.co.kr/2738701168/still/280?ver=1673240186',

    },


}
const section = document.createElement('section')
// 마라 누들 이미지
const card = document.createElement('div');
card.className = 'card'
const img = document.createElement('img')
img.className = 'card-img-top'
img.src = shopping.maratangImage.imageSrc
const cardBody = document.createElement('div')
cardBody.className = 'card-body'
const cardTitle = document.createElement('h5')
cardTitle.className = 'card-title'
cardTitle.innerHTML = shopping.name.maratang
const cardText = document.createElement('p')
cardText.className = 'card-text'
cardText.innerHTML = `가격 : ${shopping.price.middle}`
 //마라 버튼 태그    
const buttonTag = document.createElement('div')
const minusButton = document.createElement('button')
minusButton.className = 'btn btn-primary'
minusButton.innerHTML = '-'
const spanZero= document.createElement('span')
spanZero.innerHTML = 1
const plusButton = document.createElement('button')
plusButton.className = 'btn btn-success'
plusButton.innerHTML = '+'

// 마라 스타일
card.style.width = '160px'
card.style.height = '160px'
card.style.display = 'flex'
card.style.flexDirection = 'row'
cardTitle.style.display = 'flex'
cardText.style.display = 'flex'
minusButton.style.display = 'flex'
cardBody.style.whiteSpace = 'nowrap'
buttonTag.style.display = 'flex'
buttonTag.style.gap = '8px'

buttonTag.appendChild(minusButton)
buttonTag.appendChild(spanZero)
buttonTag.appendChild(plusButton)
cardBody.appendChild(cardTitle)
cardBody.appendChild(cardText)
cardBody.appendChild(buttonTag)
card.appendChild(img)
card.appendChild(cardBody)
section.appendChild(card)

minusButton.addEventListener('click', function(e){
    if(parseInt(spanZero.innerHTML) === 1){
        spanZero.innerHTML = 1
    }
    else{
        spanZero.innerHTML = parseInt(spanZero.innerHTML) -1;
        shopping.price.middle = parseInt(shopping.price.middle) - 12670;
        cardText.innerHTML = `가격 : ${shopping.price.middle}`
    }
});

plusButton.addEventListener('click', function(e){ 
    spanZero.innerHTML = parseInt(spanZero.innerHTML) + 1;
    shopping.price.middle = parseInt(shopping.price.middle) + 12670;
    cardText.innerHTML = `가격 : ${shopping.price.middle}`
});

// 나베 이미지
const card2 = document.createElement('div');
card2.className = 'card'
const img2 = document.createElement('img')
img2.className = 'card-img-top'
img2.src = shopping.nabeImage.imageSrc
const cardBody2 = document.createElement('div')
cardBody2.className = 'card-body'
const cardTitle2 = document.createElement('h5')
cardTitle2.className = 'card-title'
cardTitle2.innerHTML = shopping.name.nabe
const cardText2 = document.createElement('p')
cardText2.className = 'card-text'
cardText2.innerHTML = `가격 : ${shopping.price.high}`
const buttonTag2 = document.createElement('div')
const minusButton2 = document.createElement('button')
minusButton2.className = 'btn btn-primary'
minusButton2.innerHTML = '-'
const spanZero2 = document.createElement('span')
spanZero2.innerHTML = 1
const plusButton2 = document.createElement('button')
plusButton2.className = 'btn btn-success'
plusButton2.innerHTML = '+'
// 나베 스타일
card2.style.width = '160px'
card2.style.height = '160px'
card2.style.display = 'flex'
card2.style.flexDirection = 'row'
cardTitle2.style.display = 'flex'
cardText2.style.display = 'flex'
buttonTag2.style.display = 'flex'
buttonTag2.style.gap = '8px'
cardBody2.style.whiteSpace = 'nowrap'

buttonTag2.appendChild(minusButton2)
buttonTag2.appendChild(spanZero2)
buttonTag2.appendChild(plusButton2)
cardBody2.appendChild(cardTitle2)
cardBody2.appendChild(cardText2)
cardBody2.appendChild(buttonTag2)
card2.appendChild(img2)
card2.appendChild(cardBody2)
section.appendChild(card2)

minusButton2.addEventListener('click', function(e){
    if(parseInt(spanZero2.innerHTML) === 1){
        spanZero2.innerHTML = 1
    }
    else{
        spanZero2.innerHTML = parseInt(spanZero2.innerHTML) - 1
        shopping.price.high = parseInt(shopping.price.high) - 22410
        cardText2.innerHTML = `가격 ${shopping.price.high}`
    }
});

plusButton2.addEventListener('click', function(){
    spanZero2.innerHTML = parseInt(spanZero2.innerHTML) + 1
    shopping.price.high = parseInt(shopping.price.high) + 22410
    cardText2.innerHTML = `가격 : ${shopping.price.high}`
});


// 김밥 이미지
const card3 = document.createElement('div');
card3.className = 'card'
const img3 = document.createElement('img')
img3.className = 'card-img-top'
img3.src = shopping.gimbapImage.imageSrc
const cardBody3 = document.createElement('div')
cardBody3.className = 'card-body'
const cardTitle3 = document.createElement('h5')
cardTitle3.className = 'card-title'
cardTitle3.innerHTML = shopping.name.gimbap
const cardText3 = document.createElement('p')
cardText3.className = 'card-text'
cardText3.innerHTML = `가격 : ${shopping.price.low}`
const buttonTag3 = document.createElement('div')
const minusButton3 = document.createElement('button')
minusButton3.className = 'btn btn-primary'
minusButton3.innerHTML = '-'
const spanZero3 = document.createElement('span')
spanZero3.innerHTML = 1
const plusButton3 = document.createElement('button')
plusButton3.className = 'btn btn-success'
plusButton3.innerHTML = '+'
// 김밥 스타일
card3.style.width = '160px'
card3.style.height = '160px'
card3.style.display = 'flex'
card3.style.flexDirection = 'row'
cardTitle3.style.display = 'flex'
cardText3.style.display = 'flex'
buttonTag3.style.display = 'flex'
buttonTag3.style.gap = '8px'
cardBody3.style.whiteSpace = 'nowrap'

buttonTag3.appendChild(minusButton3)
buttonTag3.appendChild(spanZero3)
buttonTag3.appendChild(plusButton3)
cardBody3.appendChild(cardTitle3)
cardBody3.appendChild(cardText3)
cardBody3.appendChild(buttonTag3)
card3.appendChild(img3)
card3.appendChild(cardBody3)
section.appendChild(card3)



minusButton3.addEventListener('click', function(e){
    if(parseInt(spanZero3.innerHTML) === 1){
        spanZero3.innerHTML = 1
    }
    else{
        spanZero3.innerHTML = parseInt(spanZero3.innerHTML) - 1
        shopping.price.low = parseInt(shopping.price.low) - 5900
        cardText3.innerHTML = `가격 : ${shopping.price.low}`
    }
})

plusButton3.addEventListener('click', function(){
    spanZero3.innerHTML = parseInt(spanZero3.innerHTML) + 1
    shopping.price.low = parseInt(shopping.price.low) + 5900
    cardText3.innerHTML = `가격 : ${shopping.price.low}`
})

document.body.appendChild(section)
// 전체 상품 담기 버튼 생성
const shoppingButton = document.createElement('button')
shoppingButton.className = 'badge text-bg-warning'
shoppingButton.innerHTML = '전체 상품 담기'
shoppingButton.style.marginBottom = '10px'

document.body.appendChild(shoppingButton)

// 장바구니 section
const section2 = document.createElement('section')
section2.innerHTML = '장바구니'
const buttomSpan = document.createElement('span')


section2.appendChild(buttomSpan)
document.body.appendChild(section2)
// 장바구니에 담는 이벤트

shoppingButton.addEventListener('click', function(p){
    // 시작!!---------
    const section = document.createElement('section')
    // 마라 누들 이미지
    const card = document.createElement('div');
    card.className = 'card'
    const img = document.createElement('img')
    img.className = 'card-img-top'
    img.src = shopping.maratangImage.imageSrc
    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    const cardTitle = document.createElement('h5')
    cardTitle.className = 'card-title'
    cardTitle.innerHTML = shopping.name.maratang
    const cardText = document.createElement('p')
    cardText.className = 'card-text'
    cardText.innerHTML = `가격 : ${shopping.price.middle}`
     //마라 버튼 태그    
    const buttonTag = document.createElement('div')
    const minusButton = document.createElement('button')
    minusButton.className = 'btn btn-primary'
    minusButton.innerHTML = '-'
    const spanZero= document.createElement('span')
    spanZero.innerHTML = 1
    const plusButton = document.createElement('button')
    plusButton.className = 'btn btn-success'
    plusButton.innerHTML = '+'
    
    // 마라 스타일
    card.style.width = '160px'
    card.style.height = '160px'
    card.style.display = 'flex'
    card.style.flexDirection = 'row'
    cardTitle.style.display = 'flex'
    cardText.style.display = 'flex'
    minusButton.style.display = 'flex'
    cardBody.style.whiteSpace = 'nowrap'
    buttonTag.style.display = 'flex'
    buttonTag.style.gap = '8px'
    
    buttonTag.appendChild(minusButton)
    buttonTag.appendChild(spanZero)
    buttonTag.appendChild(plusButton)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(buttonTag)
    card.appendChild(img)
    card.appendChild(cardBody)
    section.appendChild(card)
    
    // minusButton.addEventListener('click', function(e){
    //     if(parseInt(spanZero.innerHTML) === 1){
    //         spanZero.innerHTML = 1
    //     }
    //     else{
    //         spanZero.innerHTML = parseInt(spanZero.innerHTML) -1;
    //         shopping.price.middle = parseInt(shopping.price.middle) - 12670;
    //         cardText.innerHTML = `가격 : ${shopping.price.middle}`
    //     }
    // });
    
    // plusButton.addEventListener('click', function(){ 
    //     spanZero.innerHTML = parseInt(spanZero.innerHTML) + 1;
    //     shopping.price.middle = parseInt(shopping.price.middle) + 12670;
    //     cardText.innerHTML = `가격 : ${shopping.price.middle}`
    // });
    
    // 나베 이미지
    const card2 = document.createElement('div');
    card2.className = 'card'
    const img2 = document.createElement('img')
    img2.className = 'card-img-top'
    img2.src = shopping.nabeImage.imageSrc
    const cardBody2 = document.createElement('div')
    cardBody2.className = 'card-body'
    const cardTitle2 = document.createElement('h5')
    cardTitle2.className = 'card-title'
    cardTitle2.innerHTML = shopping.name.nabe
    const cardText2 = document.createElement('p')
    cardText2.className = 'card-text'
    cardText2.innerHTML = `가격 : ${shopping.price.high}`
    const buttonTag2 = document.createElement('div')
    const minusButton2 = document.createElement('button')
    minusButton2.className = 'btn btn-primary'
    minusButton2.innerHTML = '-'
    const spanZero2 = document.createElement('span')
    spanZero2.innerHTML = 1
    const plusButton2 = document.createElement('button')
    plusButton2.className = 'btn btn-success'
    plusButton2.innerHTML = '+'
    // 나베 스타일
    card2.style.width = '160px'
    card2.style.height = '160px'
    card2.style.display = 'flex'
    card2.style.flexDirection = 'row'
    cardTitle2.style.display = 'flex'
    cardText2.style.display = 'flex'
    buttonTag2.style.display = 'flex'
    buttonTag2.style.gap = '8px'
    cardBody2.style.whiteSpace = 'nowrap'
    
    buttonTag2.appendChild(minusButton2)
    buttonTag2.appendChild(spanZero2)
    buttonTag2.appendChild(plusButton2)
    cardBody2.appendChild(cardTitle2)
    cardBody2.appendChild(cardText2)
    cardBody2.appendChild(buttonTag2)
    card2.appendChild(img2)
    card2.appendChild(cardBody2)
    section.appendChild(card2)
    
    // minusButton2.addEventListener('click', function(e){
    //     if(parseInt(spanZero2.innerHTML) === 1){
    //         spanZero2.innerHTML = 1
    //     }
    //     else{
    //         spanZero2.innerHTML = parseInt(spanZero2.innerHTML) - 1
    //         shopping.price.high = parseInt(shopping.price.high) - 22410
    //         cardText2.innerHTML = `가격 ${shopping.price.high}`
    //     }
    // });
    
    // plusButton2.addEventListener('click', function(){
    //     spanZero2.innerHTML = parseInt(spanZero2.innerHTML) + 1
    //     shopping.price.high = parseInt(shopping.price.high) + 22410
    //     cardText2.innerHTML = `가격 : ${shopping.price.high}`
    // });
    
    
    // 김밥 이미지
    const card3 = document.createElement('div');
    card3.className = 'card'
    const img3 = document.createElement('img')
    img3.className = 'card-img-top'
    img3.src = shopping.gimbapImage.imageSrc
    const cardBody3 = document.createElement('div')
    cardBody3.className = 'card-body'
    const cardTitle3 = document.createElement('h5')
    cardTitle3.className = 'card-title'
    cardTitle3.innerHTML = shopping.name.gimbap
    const cardText3 = document.createElement('p')
    cardText3.className = 'card-text'
    cardText3.innerHTML = `가격 : ${shopping.price.low}`
    const buttonTag3 = document.createElement('div')
    const minusButton3 = document.createElement('button')
    minusButton3.className = 'btn btn-primary'
    minusButton3.innerHTML = '-'
    const spanZero3 = document.createElement('span')
    spanZero3.innerHTML = 1
    const plusButton3 = document.createElement('button')
    plusButton3.className = 'btn btn-success'
    plusButton3.innerHTML = '+'
    // 김밥 스타일
    card3.style.width = '160px'
    card3.style.height = '160px'
    card3.style.display = 'flex'
    card3.style.flexDirection = 'row'
    cardTitle3.style.display = 'flex'
    cardText3.style.display = 'flex'
    buttonTag3.style.display = 'flex'
    buttonTag3.style.gap = '8px'
    cardBody3.style.whiteSpace = 'nowrap'
    
    buttonTag3.appendChild(minusButton3)
    buttonTag3.appendChild(spanZero3)
    buttonTag3.appendChild(plusButton3)
    cardBody3.appendChild(cardTitle3)
    cardBody3.appendChild(cardText3)
    cardBody3.appendChild(buttonTag3)
    card3.appendChild(img3)
    card3.appendChild(cardBody3)
    section.appendChild(card3)
    
    
    
    // minusButton3.addEventListener('click', function(e){
    //     if(parseInt(spanZero3.innerHTML) === 1){
    //         spanZero3.innerHTML = 1
    //     }
    //     else{
    //         spanZero3.innerHTML = parseInt(spanZero3.innerHTML) - 1
    //         shopping.price.low = parseInt(shopping.price.low) - 5900
    //         cardText3.innerHTML = `가격 : ${shopping.price.low}`
    //     }
    // })
    
    // plusButton3.addEventListener('click', function(){
    //     spanZero3.innerHTML = parseInt(spanZero3.innerHTML) + 1
    //     shopping.price.low = parseInt(shopping.price.low) + 5900
    //     cardText3.innerHTML = `가격 : ${shopping.price.low}`
    // })


// 끝
document.body.appendChild(section)
    section2.appendChild(section);



    buttomSpan.innerHTML = `총 금액 : ${shopping.price.high + shopping.price.middle + shopping.price.low}`

    
})



