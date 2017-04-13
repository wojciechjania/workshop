$(function init() {
    console.log("działa")

    var nav = $('nav');
    var ul = $('.menu');
    var positionUl = nav.offset();

    function navItem() {
        var scrollTop = $(document).scrollTop();
        if (positionUl.top < scrollTop) {
            ul.addClass('sticky');
        } else {
            ul.removeClass('sticky');
        }
    }

    $(window).on('scroll', function () {
        navItem();
    });

    $(window).on('resize', function () {
        positionUl = nav.offset();
        navItem();
    });

});
