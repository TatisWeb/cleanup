//slider owl corusel 2
$(document).ready(function() {

 $(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
   items: 2,
   margin: 0,
   loop: true,
   nav: false,
   dots: true
  });

  owl.owlCarousel();
  $('.js-owl-prev').click(function() {
   owl.trigger('next.owl.carousel');
  });
  $('.js-owl-next').click(function() {
   owl.trigger('prev.owl.carousel');
  });
  //допустим инстанс содержится в переменной slider, тогда

 });

});

// button menu burger open

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});

$('.menu-btn').on('click', function(m) {
 m.preventDefault();
 $(this).toggleClass('menu-btn_active');
});

//button menu burger close

$('.menu-close-btn').on('click', function(u) {
 u.preventDefault();
 $('.menu').removeClass('menu_active');
 $('.content').removeClass('content_active');
 $('.menu-btn').removeClass('menu-btn_active'); });