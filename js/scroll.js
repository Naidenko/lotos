var section = [];
var sectionIdToOffset = {};
var currentAnchor = -1;
var isAnimating  = false;
var scrollButton = $('.next-page');
var pagebutton = $('.footer__button');
var navToggle = $('.main-nav__item');
var sectionNames = [
    'Направления и классы',
    'Пробное занятие',
    'Преподаватели',
    'Абонементы',
    'Расписание',
    'Отзывы',
    'Оставить заявку',
    'Контакты',
    'Вернуться'
];

$(function(){

    //сдвиг страницы не больше, чем сдвиг секции
    function updateAnchors() {
        section = [];
        sectionIdToOffset = {};
        $('.section').each(function(i, element){
            section.push( $(element).offset().top );
            if($(element).attr('id')) {
                sectionIdToOffset[$(element).attr('id')] = section.length - 1;
            }
        });
        for (let i = 0; i < section.length; i++) {
            if(document.documentElement.scrollTop >= section[i]){
                currentAnchor = i;
            }
        }
        pageFunction(currentAnchor);
        $('#next-section-name').text(sectionNames[currentAnchor]);
    }

    function pageFunction(currentAnchor){
        isAnimating  = true;
        if(currentAnchor >= section.length) {
            $('#next-section-name').text(sectionNames[0]);
        } else {
            $('#next-section-name').text(sectionNames[currentAnchor]);
        }
        if(section.length < 10) {
            $('.all-page').html('- 0' + section.length).toString();
            if(currentAnchor < 9) {
                $('.current-page').html('0' + (currentAnchor + 1).toString());
            } else {
                $('.current-page').html('01').toString();
            }
        } else {
            $('.current-page').html('0' + (currentAnchor + 1).toString());
            $('.all-page').html(section.length).toString();
        }
        if( currentAnchor == section.length -1) {
            pagebutton.css("transform", "rotate(180deg)");
        } else {
            pagebutton.css( "transform","rotate(0)");
        }
        $('html, body').animate({
            scrollTop: parseInt( section[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    }

    document.addEventListener("mousewheel", function (e) {
        if( isAnimating ) {
            return false;
        }
        e.preventDefault();
        e.stopPropagation();
        if( e.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (section.length - 1)
            || currentAnchor < 0 ) {
            currentAnchor = 0;
        }

        pageFunction(currentAnchor);
    }, {passive: false} );

    document.addEventListener("DOMMouseScroll", function (e) {
        if( isAnimating ) {
            return false;
        }
        e.preventDefault();
        e.stopPropagation();
        var rolled = 0;
        if ('wheelDelta' in event) {
            rolled = event.wheelDelta;
        }
        else {  // Firefox
            // The measurement units of the detail and wheelDelta properties are different.
            rolled = -40 * event.detail;
        }
        if( rolled >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (section.length - 1)
            || currentAnchor < 0 ) {
            currentAnchor = 0;
        }

        pageFunction(currentAnchor);
    }, {passive: false} );

    scrollButton.on("click", function (e) {
        if( isAnimating ) {
            return false;
        }
        if( currentAnchor > (section.length - 1)
            || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        currentAnchor++;

        pageFunction(currentAnchor);
    });

    navToggle.on("click", function(e){
        e.preventDefault();
        currentAnchor = sectionIdToOffset[$(e.target).attr('href').substring(1)];
        pageFunction(currentAnchor);
    });

    updateAnchors();
});