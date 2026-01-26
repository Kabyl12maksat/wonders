const burgerOpen = document.getElementById('burger');
const menuList = document.getElementById('menu-list');

console.log(menuList)

burger.addEventListener('click', function () {
    if (this.classList.contains('close')) {
        this.classList.remove('close');
        menuList.className = "hide-menu";
    } else {
        this.classList.add('close');
        menuList.className = "show-menu";
    }
})



