const burgerOpen = document.getElementById('burger');
const menuList = document.getElementById('menu-list');
const menuListElem = document.querySelectorAll('#menu-list a');
const html = document.querySelector('html');

console.log(menuList)




burgerOpen.addEventListener('click', function () {
    if (this.classList.contains('close')) {
        this.classList.remove('close');
        menuList.classList.remove('open');
        html.style.overflow = 'auto';
    } else {
        this.classList.add('close');
        menuList.classList.add('open');
        html.style.overflow = 'hidden';

    }
})

menuListElem.forEach(function (e) {
    e.addEventListener('click', function () {
        burgerOpen.classList.remove('close');
        menuList.classList.remove('open')
    })
})


let counter = 1;
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const counterDisplay = document.getElementById('counter');

minusBtn.addEventListener('click', function () {
    if (counter > 1) {
        counter--;
        counterDisplay.textContent = counter;
    }
});

plusBtn.addEventListener('click', function () {
    counter++;
    counterDisplay.textContent = counter;
});

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];











