$(document).ready(function(){
    $(".home-carousel").owlCarousel({
        items:1,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop: true,
        dots: true
    });
    $('.mobile-menu-bar').on('click', function () {
        $('.mobile-menu-content').addClass('open')
    });
    $('.close-menu').on('click', function () {
        $('.mobile-menu-content').removeClass('open')
    })

});