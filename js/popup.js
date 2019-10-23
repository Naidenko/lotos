let popupForm = document.querySelectorAll('.discount__form'),
    popup = document.querySelector('.thank'),
    popupWrap = document.querySelector('.popup__wrap'),
    popupFeedback = document.querySelector('.popup__feedback'),
    contactkButton = document.querySelector('.contact__button-wrap'),
    feedbackForm = document.querySelector('.feedback__form'),
    feedbackClose = document.querySelector('.feedback__close');

function openForm() {
    popupFeedback.classList.remove('hide');
    popupFeedback.classList.add('show');
    popupWrap.classList.remove('hide');
    popupWrap.classList.add('show');
}

contactkButton.addEventListener('click', openForm);


for (let i = 0; i < popupForm.length; i++) {
    popupForm[i].addEventListener('submit', function (event) {
        event.preventDefault();
        popup.classList.remove('hide');
        popup.classList.add('show');
        popupWrap.classList.remove('hide');
        popupWrap.classList.add('show');
    })
}

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    popupFeedback.classList.remove('show');
    popupFeedback.classList.add('hide');
    popupWrap.classList.add('hide');
    popupWrap.classList.remove('show');
});

popup.addEventListener('click', function () {
    popup.classList.remove('show');
    popup.classList.add('hide');
    popupWrap.classList.remove('show');
    popupWrap.classList.add('hide');
});

popupWrap.addEventListener('click', function () {
    popupWrap.classList.remove('show');
    popupWrap.classList.add('hide');
    if(popup.classList.contains('show')){
        popup.classList.remove('show');
        popup.classList.add('hide');
    }
    if(popupFeedback.classList.contains('show')){
        popupFeedback.classList.remove('show');
        popupFeedback.classList.add('hide');
    }
});

feedbackClose.addEventListener('click', function () {
    popupWrap.classList.remove('show');
    popupWrap.classList.add('hide');
    popupFeedback.classList.remove('show');
    popupFeedback.classList.add('hide');
});