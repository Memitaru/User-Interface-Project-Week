// JS goes here

let nav = document.querySelector('nav');
let hamburger = document.querySelector('.hamburger');
let icon = document.querySelector('.icon');

hamburger.addEventListener('click', () => {nav.classList.toggle('nav-open')})

icon.addEventListener('click', () => {
    if (icon.src.endsWith('nav-hamburger.png')) {
        icon.src = 'img/nav-hamburger-close.png';
    } else if (icon.src.endsWith('nav-hamburger-close.png')) {
        icon.src = 'img/nav-hamburger.png';
    }
})

// Animations

// Home Page

TweenMax.from(".main-page-big-text", 1.5, {opacity: 0, scale: 0.7});