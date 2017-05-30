$(document).ready(function() {


// Add jQuery here

$(document).ready(function() {
//   Always add doc ready..

$('.spinner').click(function() {
   $('.menu').toggleClass('showme');
   $('.menu2').toggleClass('movedown');
      $('.articles').toggleClass('moveup');
 });



 $('.title').click(function() {
    $('.gif1').addClass('showme');

    setTimeout(function () {
      $('.gif1').removeClass('showme');
    }, 2000);



  });




});




















  });
