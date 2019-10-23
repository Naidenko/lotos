$(window).on('load resize', function() {
    if ($(window).width() < 640) {
        $('.newbie__slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
        });
    } else {
        $(".newbie__slider.slick-initialized").slick("unslick");
    }
});

$(window).on('load resize', function() {
    if ($(window).width() < 640) {
        $('.teacher__slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
        });
    } else {
        $(".teacher__slider.slick-initialized").slick("unslick");
    }
});


$(window).on('load resize', function() {
    if ($(window).width() < 640) {
        $('.reviews__slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
        });
    } else {
        $(".reviews__slider.slick-initialized").slick("unslick");
    }
});