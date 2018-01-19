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