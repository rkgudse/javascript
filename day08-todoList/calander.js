const date = new Date()

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dateInfo = {
    year : date.getFullYear(),
    month : monthNames[date.getMonth()],
    date : date.getDate(),

}

document.querySelector('#date').innerHTML = dateInfo.date
document.querySelector('#mont').innerHTML = dateInfo.month
document.querySelector('#year').innerHTML = dateInfo.year

