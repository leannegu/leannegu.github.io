$(document).ready(function() {


// Add jQuery here

$(document).ready(function() {
//   Always add doc ready..

$('.nav').click(function() {
   $('.menu').toggleClass('showme');
   $('.menu2').toggleClass('movedown');
      $('.articles').toggleClass('moveup');
 });

 /* to debug: help cursor disappeared, gif won't reappear each time 'title' is clicked*/

 $('.title').click(function() {
    $('.gif1').toggleClass('showme');

  });



// Copy setTimeout, and change the 1000ms. You can target divs with the $ 'sign' and single quotes. Then try fadeIn, fadeOut, addClass, removeClass.

// menu spinning quesiton mark
// $('.nav').click(function() {
  //  $('.menu').toggleClass('showme');
 // });

 //   Fade in .t1 notifcation at 3second

  setTimeout(function () {
    $('.t1').fadeIn('fast');
  }, 3000);

//   Fade out .t1 notifcation at 7second

  setTimeout(function () {
    $('.t1').fadeOut('fast');
  }, 7000);

//   Fade in .t2 notifcation at 10second

  setTimeout(function () {
    $('.t2').fadeIn('fast');
  }, 10000);

//   Fade out .t2 notifcation at 16second

  setTimeout(function () {
    $('.t2').fadeOut('fast');
  }, 16000);

//   addClass new width notifcation at 12second

  setTimeout(function () {
    $('.text').addClass('new__width');
  }, 12000);

  //   Fade in .t3 notifcation at 17second

  setTimeout(function () {
    $('.t3').fadeIn('fast');
  }, 17000);

//   Fade out .t3 notifcation at 22second

  setTimeout(function () {
    $('.t3').fadeOut('fast');
  }, 20000);


  //   Fade in .p1 notifcation at 19second

  setTimeout(function () {
    $('.p1').fadeIn('fast');
  }, 21000);

//   Remove p1 on click

$('.p1').on('click', function() {
          $('.p1').removeClass('p1');
        });
});




















  });
