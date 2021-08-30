
const topNavOne = document.querySelector('.navbar-nav-right');
const topNavTwo = document.querySelector('.navbar-nav-left');

const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
    topNavOne.classList.toggle('showNav');
    topNavTwo.classList.toggle('showNav');
});