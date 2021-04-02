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


const bgImageArray = ["1_ozdgvm.jpg", "2_vjtjfy.jpg", "3_oxpdx2.jpg"],
  base = "https://res.cloudinary.com/iolamide/image/upload/v1604569872/home_banner_";
  
bgImageArray.forEach(function(img) {
  new Image().src = base + img;
  // caches images, avoiding white flash between background replacements
});
  
$('.carousel'). on('slide.bs.carousel', function(e) {
  $('.animated-bg').css({
    backgroundImage: `url(${base}${bgImageArray[e.to]})`
  });
});