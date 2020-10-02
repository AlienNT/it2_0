let now = new Date();
$('input[type=datetime-local]').val(new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().substring(0, 19));



let activeLink = $('.nav_col');
activeLink.on('click', function () {
    activeLink.siblings().removeClass('link_active');
    $(this).addClass('link_active');
})


