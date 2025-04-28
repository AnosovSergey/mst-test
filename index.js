const menuToggle = document.querySelector('.header__menu-toggle');
const nav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active');
    menuToggle.classList.toggle('header__menu-toggle--active');
});