//  map :치환, 변경 , 함수만 

// const num = [1,2,3,4,5]
// num.map((elem) => elem*2)


const coffees = [
    {
        name: 'americano',
        price: 3100,
    },
    {
        name: 'americano',
        price: 3200,
    },    
    {
        name: 'latte',
        price: 2000,
    },   
     {
        name: 'valina',
        price: 3000,
    },
]

const a = coffees.filter((x) => x.price < 3000)
console.log(a)


// coffees.map((x) =>{
//     const {name} = x
//     x.upper =  name.toUpperCase() 
//     return x
// })





// coffees.map((x) => {
//     const {price} = x
//     if(x > 3000){
//         x.isDiscont = true;
//     }
//     else x.isDiscont = false;
//     return x
// })



//filter


const fruits = ['mango', 'grape', 'watermelon']
const b = fruits.filter((x) => x.length <= 5 && x.includes('e'))

console.log(b);

