$('.responsive').slick({
    appendArrows: $('.slider-row'),
    autoPlay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.hamburger').on('click', function (){
    $(this).toggleClass('hamburger_active')
    $('.navigation_cont').toggleClass('nav_active')
    $('.header').toggleClass('header_active')
})