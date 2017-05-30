$(document).ready(function() {


// Add jQuery here

$(document).ready(function() {
//   Always add doc ready..

$('.spinner').click(function() {
   $('.menu').toggleClass('showme');
   $('.menu2').toggleClass('movedown');
      $('.articles').toggleClass('moveup');
 });

 /* to debug: help cursor disappeared, gif won't reappear each time 'title' is clicked*/

 $('.title').click(function() {
    $('.gif1').addClass('showme');

    setTimeout(function () {
      $('.gif1').removeClass('showme');
    }, 2000);



  });




});




















  });
