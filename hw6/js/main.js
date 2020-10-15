navFunc = $('.nav_col');
$('.hamburger').on('click', function () {
    navFunc.toggleClass('nav_active')
    $(this).toggleClass('hamburger_active')
    $('.authorization_col').toggleClass('authorization_active')
    $('.header').toggleClass('header_active')
});

$(".nav_col ul li a").on('click',(function () {
    href = $(this).attr('href');
    setTimeout(function () {
        window.location = href
    }, 100);
    return false;
}));
$('.nav_col ul li a').on('click', function (){
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
})

var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 105 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
    if (navFunc.hasClass('nav_active')) {
        header.removeClass('out');
    } else {

    }
});

