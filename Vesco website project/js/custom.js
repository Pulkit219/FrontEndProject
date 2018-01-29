/*=========================
SERVICES
=======================*/
$(function () {

    new WOW().init();

});


/*=========================
WORK
=======================*/

$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});

/*=========================
TEAM
=======================*/
$(function () {

    $("#team-members").owlCarousel({
            items: 3,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true
        }

    );

});

/*=========================
TESTOMONIAL
=======================*/
$(function () {

    $("#customer-testimonials").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true
        }

    );

});

/*=========================
COUNTER
=======================*/
$(function(){
    $('.counter').counterUp({
    delay:10,
    time:3000
});
})

/*=========================
CLIENTS
=======================*/
$(function () {

    $("#clients-list").owlCarousel({
            items: 6,
            autoplay: true,
            smartSpeed:700,
            loop: true,
            autoplayHoverPause: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items:1
                },
                // breakpoint from 480 up
                480 : {
                    items: 3
                },
                // breakpoint from 768 up
                768 : {
                    items: 5
                },
                992: {
                    items : 6
            }
}
        }

    );

});
/*=========================
NAVIGATION
=======================*/
$(function(){
    $(window).scroll(function(){
        
        if($(this).scrollTop() <50)
            {
                $("nav").removeClass("vesco-top-nav");
                $("#back-to-top").fadeOut();
            }
        else{
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    })
})

//close mobile menu on click
$(function() {

    $(".navbar-collapse ul li a").on("click touch",function(){
        $(".navbar-toggle").click();
        
    });

});