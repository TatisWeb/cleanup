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