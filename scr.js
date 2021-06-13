// DOM

const bars = document.querySelector('.menu-btn');
const menuBranding = document.querySelector('.menu-branding');
const menu = document.querySelector('.menu');
const menuUl = document.querySelector('.menu-ul');
const munuItems = document.querySelectorAll('.menu-ul li');
const btnLines = document.querySelectorAll('.menu-btn div');

// actions

bars.addEventListener('click',toggleMenu);

function toggleMenu(){
    menu.classList.toggle('show');
    menuBranding.classList.toggle('show');
    menuUl.classList.toggle('show');
    munuItems.forEach(item=>item.classList.toggle('show'));
    btnLines.forEach(bar=>bar.classList.toggle('show'));
}