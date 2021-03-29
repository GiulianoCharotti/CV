$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
            $('#toBottomBtn').fadeOut();

        } else {
            $('#toTopBtn').fadeOut();
            $('#toBottomBtn').fadeIn();
        }
    });

    $('#toTopBtn').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});
