AOS.init();

$('.not-shown').hide();
$('.form-check-input').click(function () {
    if ($('#flexRadioDefault1').is(':checked')) {
        $('.not-shown').fadeIn();
    }
    else {
        $('.not-shown').fadeOut();
    }
})

// dropdown code
if ($(window).width() > 992){
$('.drop-contain').hover(function () {
    $('.dropbox').slideDown('medium');
    $('.drop-contain>a').addClass('active');
},
    function () {
        $('.dropbox').hide();
        $('.drop-contain>a').removeClass('active');
    }
)}

// if ($(window).width() < 992) {
//     $('.drop-contain>a').removeAttr('href');
// }

$(window).scroll(function () {
    $('.dropbox').hide();
    $('.drop-contain>a').removeClass('active');
})

// $(".drop-contain").hover(function () {
//     $('.dropbox').addClass("hovered");
//     $('.dropbox').slideDown('medium');
//     $('.drop-contain>a').addClass('active');
// });

// $(document).on('click', function (e) {
//     if (!$(e.target).closest('.dropbox').length) {
//         $('.dropbox').removeClass('hovered');
//         $('.dropbox').slideUp('fast');
//         $('.drop-contain>a').removeClass('active');
//     }
// }
// );

// $(window).scroll(function () {
//     $('.dropbox').hide();
//     $('.drop-contain>a').removeClass('active');
// })

// navbar code

var prevScrollpos = window.pageYOffset;
$(window).on('scroll', function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // Scrolling up
        $('.navbar').addClass('fixed');
    } else {
        // Scrolling down
        if (currentScrollPos > 100) {
            $('.navbar').removeClass('fixed');
        }
        else {
            $('.navbar').addClass('fixed');
        }
    }
    prevScrollpos = currentScrollPos;
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('scroll');
        $('header').removeAttr("data-aos");
    } else {
        $('.navbar').removeClass('scroll');
    }
});


// tick code

var tick = '<img src="assets/img/vector/tick.png" class="me-2" alt="tick">';
$('.tick-vector').prepend(tick);
$('.stages-cardbody>p').addClass('tick-vector d-flex').prepend(tick);
$('.stages-cardbody>.tick-vector img').addClass('pt-1');
$('.stages-cardbody>.tick-vector>span').addClass('font-700 secondary-text red-color d-content');
$('.stages-cardbody .tertary-header span').addClass('blue-color tertary-header d-content font-700');


var tick2 = '<i class="fa-solid fa-circle-check red-color pt-1 me-2"></i>';
$('.tick-vector2').prepend(tick2);
$('.tick-vector2').addClass('d-flex');



// owlCarousel1 code

let items = '';
let items1 = '';
let items2 = '';

if ($(window).width() > 991) {
    $('.slider').addClass('owl-carousel1');
}

$(window).resize(function () {
    if ($(window).width() > 991) {
        $('.slider').addClass('owl-carousel1');
    }
})


$(document).ready(function () {
    $(".owl-carousel1").owlCarousel();
    $(".owl-carousel2").owlCarousel();
});

const owl = $('.owl-carousel1');
const ow2 = $('.owl-carousel2');
if ($(window).width() > 1200) {
    items = 4;
    items1 = 5;
    items2 = 3
} else if ($(window).width() > 767 && $(window).width() < 1200) {
    items1 = 4;
    items = 3;
    items2 = 2
}
else {
    items = 3;
    items1 = 3;
    items2 = 1
}
owl.owlCarousel({
    items: items,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

var owl1 = $('.owl-carousel');
owl1.owlCarousel({
    items: items1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
});

var owl2 = $('.owl-carousel2');
owl2.owlCarousel({
    items: items2,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
});

$('.owl-nav').hide();
$('.owl-dots').hide();


$('#search').on('input', function () {
    let val = $(this).val();
    if (val.length > 2) {
        $('#find').attr('data-bs-dismiss', 'modal');
    } else if (val.length <= 2) {
        $('#find').removeAttr('data-bs-dismiss');
    }
})

// Home slider script

$(document).ready(function () {
    var currentIndex = 0;
    var totalElements1 = $('.heroslider1 .heroslider-content').length;
    var totalElements2 = $('.heroslider2 .heroslider-content').length;
    var sliderelement1 = $('.heroslider1 .heroslider-content')
    var sliderelement2 = $('.heroslider2 .heroslider-content')

    $(sliderelement1).eq(currentIndex).addClass('active');
    $(sliderelement2).eq(currentIndex).addClass('active');

    $('.next').click(function () {
        currentIndex++;
        $(sliderelement1).removeClass('active');
        $(sliderelement2).removeClass('active');

        if (currentIndex >= totalElements1 && totalElements2) {
            currentIndex = 0;
        }

        $(sliderelement1).eq(currentIndex).addClass('active');
        $(sliderelement2).eq(currentIndex).addClass('active');
    });

    $('.prev').click(function () {
        currentIndex--;
        $(sliderelement1).removeClass('active');
        $(sliderelement2).removeClass('active');

        if (currentIndex <= 0) {
            currentIndex = totalElements1 - 1;
        }

        $(sliderelement1).eq(currentIndex).addClass('active');
        $(sliderelement2).eq(currentIndex).addClass('active');
    });

    // auto sliding function

    var intervalId = setInterval(function () {
        currentIndex++;
        $(sliderelement1).removeClass('active');
        $(sliderelement2).removeClass('active');

        if (currentIndex >= totalElements1 && totalElements2) {
            currentIndex = 0;
        }

        $(sliderelement1).eq(currentIndex).addClass('active');
        $(sliderelement2).eq(currentIndex).addClass('active');
    }, 3000);

    // hover functions

    $('.sliding-content').mouseenter(function () {
        clearInterval(intervalId);
    });

    $('.sliding-content').mouseleave(function () {
        intervalId = setInterval(function () {
            currentIndex++;
            $(sliderelement1).removeClass('active');
            $(sliderelement2).removeClass('active');

            if (currentIndex >= totalElements1 && totalElements2) {
                currentIndex = 0;
            }

            $(sliderelement1).eq(currentIndex).addClass('active');
            $(sliderelement2).eq(currentIndex).addClass('active');
        }, 3000);
    });

});




$('.offcanvas.offcanvas-start.full-width .offcanvas-body').addClass('main-bg pt-5 p-0');

$('.set-height')

var parentHeight = $('.set-height').height();
$('.straight-border').height(parentHeight);

//   sticky code

if ($(window).width() > 991) {
    var sticky1 = $('.position-sticky');

    $(window).scroll(function () {
        var viewportHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();

        $(sticky1).each(function () {
            var bottomDivTop = $(this).offset().top;
            if (scrollPosition >= bottomDivTop) {
                $(this).addClass("active");
                var height1 = $('.position-sticky').parents('.container').width();
                $('.position-sticky.active').width(height1);
                $('.position-sticky.active').parent().css("padding", '0');
            }
            else {
                $(this).removeClass("active");
                $(this).css("width", "");
            }
        });
    });
}


$(".new-form input").focus(function(){
    $(this).addClass("active")
});

$(".new-form input").focus(function(){
    $(this).siblings('label').addClass('active')
});

$(".new-form textarea").focus(function(){
    $(this).siblings('label').addClass('active')
});

$(".new-form textarea").focus(function(){
    $(this).addClass('active')
});

$(".new-form input").blur(function(){
    $(this).removeClass("active")
});

$(".new-form input").blur(function(){
    $(this).siblings('label').removeClass('active')
});

$(".new-form textarea").blur(function(){
    $(this).siblings('label').removeClass('active')
});

$(".new-form textarea").blur(function(){
    $(this).removeClass('active')
});