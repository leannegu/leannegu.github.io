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

  $('.triangle').mouseenter(function() {
      $('.info').addClass('showme');
    });

    $('.triangle').mouseleave(function() {
   $('.info').removeClass('showme');
  });

    });
