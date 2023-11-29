// alert("testing");


var owl = $('.owl-carousel');
owl.owlCarousel({
    dots: false,
    items: 1,
    loop: true,
    margin: 0,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    center: true

});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})