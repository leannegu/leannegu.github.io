$(document).ready(function() {
  $('.image').click(function() {
    $(this).toggleClass('enlarge');
  });


  /*$('.title').click(function() {
    $('.source').toggleClass('showme');
  }); */

  $('.title').mouseenter(function() {
      $('.source').addClass('showme');
    });

    $('.title').mouseleave(function() {
   $('.source').removeClass('showme');
 });


  $('.number').mouseenter(function() {
      $('.footnote').addClass('showme');
    });

    $('.number').mouseleave(function() {
   $('.footnote').removeClass('showme');
 });







});
