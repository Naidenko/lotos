var sliderTitle = document.querySelectorAll('.newbie__item'),
    sliderList = document.querySelector('.newbie__list'),
    sliderItem = document.querySelectorAll('.slider__item');

function hideSliderContent(a, item) {
    for (var i = a; i < item.length; i++) {
        item[i].classList.remove('show');
        item[i].classList.add('hide');
    }
}
hideSliderContent(1,sliderItem);

function showSliderContent(b, item) {
    item[b].classList.remove('hide');
    item[b].classList.add('show');
}

sliderList.addEventListener('click', function(event){
    var target = event.target;

    if(target && target.classList.contains('title__item')){
        hideSliderContent(0, sliderItem);
        for (var i = 0; i < sliderTitle.length; i++) {
            sliderTitle[i].classList.remove('active');
            if(target == sliderTitle[i]) {
                showSliderContent(i, sliderItem);
                target.classList.add('active');
            }
        }
    }
});

var teacherTitle = document.querySelectorAll('.teacher__item'),
    teacherList = document.querySelector('.teacher__list'),
    teacherItem = document.querySelectorAll('.teacher__text-wrap'),
    teacherImage = document.querySelectorAll('.teacher__picture');

hideSliderContent(1,teacherItem);
hideSliderContent(1,teacherImage);

teacherList.addEventListener('click', function(event){
    var target = event.target;

    if(target && target.classList.contains('title__item')){
        hideSliderContent(0, teacherItem);
        hideSliderContent(0, teacherImage);
        for (var i = 0; i < teacherTitle.length; i++) {
            teacherTitle[i].classList.remove('active');
            if(target == teacherTitle[i]) {
                showSliderContent(i, teacherItem);
                showSliderContent(i, teacherImage);
                target.classList.add('active');
            }
        }
    }
});

var reviewsTitle = document.querySelectorAll('.reviews__item'),
    reviewsList = document.querySelector('.reviews__list'),
    reviewsItem = document.querySelectorAll('.reviews__client');


hideSliderContent(0,reviewsItem);
showSliderContent(1, reviewsItem);


reviewsList.addEventListener('click', function(event){
    var target = event.target;

    if(target && target.classList.contains('title__item')){
        hideSliderContent(0, reviewsItem);
        for (var i = 0; i < reviewsTitle.length; i++) {
            reviewsTitle[i].classList.remove('active');
            if(target == reviewsTitle[i]) {
                showSliderContent(i, reviewsItem);
                target.classList.add('active');
            }
        }
    }
});

