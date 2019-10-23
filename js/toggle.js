let button = document.querySelector('.page-header__open'),
    wrap = document.querySelector('.page-header__wrapper'),
    nav = document.querySelector('.main-nav');

button.addEventListener('click', function () {
   if(nav.classList.contains('nav--close')) {
       nav.classList.remove('nav--close');
       wrap.classList.remove('open--menu');
       wrap.classList.add('close--menu');
   } else {
       nav.classList.add('nav--close');
       wrap.classList.remove('close--menu');
       wrap.classList.add('open--menu');
   }
});

nav.addEventListener('click', function (event) {
   if(event.target.classList.contains('main-nav__item')){
       nav.classList.add('nav--close');
       wrap.classList.remove('close--menu');
       wrap.classList.add('open--menu');
   }
});