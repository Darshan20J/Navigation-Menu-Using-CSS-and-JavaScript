const menuDrawer = document.querySelector('.menu-drawer');
const specialMenu = document.querySelector('.special-menu');
const closeMenu = document.querySelector('.close-menu');

menuDrawer.addEventListener('click', () => {
    specialMenu.style.display = "flex";
    specialMenu.classList.add('animate__animated', 'animate__backInLeft');
})

closeMenu.addEventListener('click', () => {
    specialMenu.style.display = "none";
})
