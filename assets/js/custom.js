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
});