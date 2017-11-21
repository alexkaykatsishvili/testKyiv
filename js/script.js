;
(function($) {
    "use strict"

    $('.hamburger').on('click', function() {
        // if($('.menu').hasClass('open')){
        // 	$('.menu').removeClass('open');
        // } else {
        // 	$('.menu').addClass('open');
        // }
        $('.menu').toggleClass('open');
    });
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });

    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop();
        if (windowScroll > $('.works').offset().top - ($(window).height() / 1.2)) {
            $('.parent').each(function(i) {

                setTimeout(function() {
                    $('.parent').eq(i).addClass('is-showing');
                }, 400 * (i + 1));

            });
        }
    });
})(jQuery);