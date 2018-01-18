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

    $(".owl-carousel").owlCarousel({
        items:3,
        autoplay:true,
        loop:true
    }
      
    );

});