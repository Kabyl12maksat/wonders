const burgerOpen = document.getElementById('burger');
const menuList = document.getElementById('menu-list');

console.log(menuList)

burgerOpen.addEventListener('click', function () {
    if (this.classList.contains('close')) {
        this.classList.remove('close');
        menuList.classList.remove('open');
    } else {
        this.classList.add('close');
        menuList.classList.add('open');
    }
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











