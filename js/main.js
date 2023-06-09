$(function () {


    $('.sc_slide').on('init afterChange', function (e, s, c) {
        const current = $('.sc_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.sc_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.sc_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)

        $('.sc_visual .menu li').eq(0).addClass('on');
        $('.sc_visual .menu li').eq(c).addClass('on').siblings().removeClass('on');
    });


    $('.sc_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        pauseOnHover: false,
        fade: true,


    });

    $('.sc_visual .arrows .left').on('click', function (e) {
        $('.sc_slide').slick('slickPrev')
    });
    $('.sc_visual .arrows .right').on('click', function (e) {
        $('.sc_slide').slick('slickNext')
    });

    $('.sc_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.sc_slide').slick('slickGoTo', idx)
    })



    $('.product_slide').slick({
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    });



    $('.pic_slide').slick({
        vertical: true,
        asNavFor: ".product_slide",

    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    })

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    })


})