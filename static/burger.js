burger = document.querySelector('.burger');
navbar = document.querySelector('#navbar');
navlist = document.querySelector('.navlist');
logoblock = document.querySelector('.logoblock');

burger.addEventListener('click',()=>
{
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    logoblock.classList.toggle('logoblock');
})