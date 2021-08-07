$(document).ready(function(){
    $('.mobile-menu-bar').on('click', function () {
        $('.mobile-menu-content').addClass('open')
    });
    $('.close-menu').on('click', function () {
        $('.mobile-menu-content').removeClass('open')
    })

});