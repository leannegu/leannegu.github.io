$(document).ready(function() {
  $('.poster1').mouseenter(function() {
      $('.poster1italic, .poster1').addClass('showme');
    });

    $('.poster1').mouseleave(function() {
   $('.poster1italic, .poster1').removeClass('showme');
  });


  $('.poster2').mouseenter(function() {
      $('.poster2italic, .poster2').addClass('showme');
    });

    $('.poster2').mouseleave(function() {
   $('.poster2italic, .poster2').removeClass('showme');
  });

  $('.poster3').mouseenter(function() {
      $('.poster3italic').addClass('showme');
    });

    $('.poster3').mouseleave(function() {
   $('.poster3italic').removeClass('showme');
  });

  $('.poster4').mouseenter(function() {
      $('.poster4italic').addClass('showme');
    });

    $('.poster4').mouseleave(function() {
   $('.poster4italic').removeClass('showme');
  });

  $('.poster5').mouseenter(function() {
      $('.poster5italic').addClass('showme');
    });

    $('.poster5').mouseleave(function() {
   $('.poster5italic').removeClass('showme');
  });

    });
