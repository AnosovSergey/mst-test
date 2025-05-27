const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');
const menuBackdrop = document.querySelector('#menu-backdrop');

const menuClick = () => {
    menuBackdrop.classList.toggle('modal-menu--opened');
    menu.classList.toggle('modal-menu--opened');
    menuToggle.classList.toggle('header__menu-toggle--opened');
}

menuToggle.addEventListener('click', menuClick);
menuBackdrop.addEventListener('click', menuClick);