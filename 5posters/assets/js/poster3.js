$(document).ready(function() {
  $('.circle').mouseenter(function() {
      $('.title').addClass('showme');
    });

    $('.circle').mouseleave(function() {
   $('.title').removeClass('showme');
  });

  $('.square').mouseenter(function() {
      $('.artists').addClass('showme');
    });

    $('.square').mouseleave(function() {
   $('.artists').removeClass('showme');
  });

    });
