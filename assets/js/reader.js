$(document).ready(function() {


// Add jQuery here

// menu spinning question mark
//$('.nav').click(function() {
//   $('.menu').toggleClass('showme');
// });


//click fake link game over appears

  $('.dummylink').on('click', function() {
            $('.gameover').addClass('active');

            // Start timeout images

            setTimeout(function () {
              $('.p1').fadeIn('fast');
            }, 200);

            setTimeout(function () {
              $('.p1').fadeIn('fast');
            }, 400);

            setTimeout(function () {
              $('.p1').fadeIn('fast');
            }, 500);

            setTimeout(function () {
              $('.p1').fadeIn('fast');
            }, 600);

  });
            // End timeout images

// counter
  var counter = document.getElementsByClassName("counter")[0];
      var min    = 0;
      var second = 00;
      var zeroPlaceholder = 0;
      var counterId = setInterval(function(){
                        countUp();
                      }, 1000);

      function countUp () {
          second++;
          if(second == 59){
            second = 00;
            min = min + 1;
          }
          if(second == 10){
              zeroPlaceholder = '';
          }else
          if(second == 00){
              zeroPlaceholder = 0;
          }

          counter.innerText = min+':'+zeroPlaceholder+second;
      }

      // rollover counter message //
      $('.counter').mouseenter(function() {
        $('.counter__message').fadeIn('fast');
      });

      $('.counter').mouseleave(function() {
        $('.counter__message').fadeOut('fast');
      });

// rollover willsmith image
$('.willsmith').mouseenter(function() {
   $('.willsmith__image').addClass('showme');
 });

   $('.willsmith').mouseleave(function() {
     $('.willsmith__image').removeClass('showme');
   });

// rollovergrocery image
   $('.grocery').mouseenter(function() {
      $('.grocery__image').addClass('showme');
    });

      $('.grocery').mouseleave(function() {
        $('.grocery__image').removeClass('showme');
      });

// rollover pizza image

  $('.pizza').mouseenter(function() {
    $('.pizza__image').addClass('showme');
  });

  $('.pizza').mouseleave(function() {
   $('.pizza__image').removeClass('showme');
  });


  $('.pizza').mouseleave(function() {
   $('.pizza__image').removeClass('showme');
  });

  //rollover chapter number
  $('.one').click(function() {
     $('.one__info').toggleClass('showme');
   });

   $('.two').click(function() {
      $('.two__info').toggleClass('showme');
    });

    $('.three').click(function() {
       $('.three__info').toggleClass('showme');
     });

  // Copy setTimeout, and change the 1000ms. You can target divs with the $ 'sign' and single quotes. Then try fadeIn, fadeOut, addClass, removeClass.

  $('.nav').click(function() {
     $('.menu').toggleClass('showme');
   });

  //  FADE IN TIMED NOTIFICATIONS:

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

    //   Fade in .t3 notifcation at 17second

    setTimeout(function () {
      $('.t3').fadeIn('fast');
    }, 17000);

  //   Fade out .t3 notifcation at 22second

    setTimeout(function () {
      $('.t3').fadeOut('fast');
    }, 20000);

    //   Fade in .t4 notifcation at 17second

    setTimeout(function () {
      $('.t4').fadeIn('fast');
    }, 20000);

  //   Fade out .t4 notifcation at 22second

    setTimeout(function () {
      $('.t4').fadeOut('fast');
    }, 25000);

    //   Fade in .t5 notifcation at 17second

    setTimeout(function () {
      $('.t5').fadeIn('fast');
    }, 22000);

  //   Fade out .t5 notifcation at 22second

    setTimeout(function () {
      $('.t5').fadeOut('fast');
    }, 25000);

    //   addClass new width notifcation at 12second

      setTimeout(function () {
        $('.text').addClass('new__width');
      }, 23000);

    //   Fade in .t6 notifcation at 17second

    setTimeout(function () {
      $('.t6').fadeIn('fast');
    }, 25000);

  //   Fade out .t5 notifcation at 22second

    setTimeout(function () {
      $('.t6').fadeOut('fast');
    }, 29000);

    //   Fade in .t7 notifcation at 17second

    setTimeout(function () {
      $('.t7').fadeIn('fast');
    }, 30000);

  //   Fade out .t5 notifcation at 22second

    setTimeout(function () {
      $('.t7').fadeOut('fast');
    }, 32000);

    //   Fade in .t8 notifcation at 17second

    setTimeout(function () {
      $('.t8').fadeIn('fast');
    }, 31000);

  //   Fade out .t8 notifcation at 22second

    setTimeout(function () {
      $('.t8').fadeOut('fast');
    }, 33000);

    //   Fade in .t9 notifcation at 17second

    setTimeout(function () {
      $('.t9').fadeIn('fast');
    }, 33000);

  //   Fade out .t9 notifcation at 22second

    setTimeout(function () {
      $('.t9').fadeOut('fast');
    }, 36000);

    //   Fade in .t10 notifcation at 17second

    setTimeout(function () {
      $('.t10').fadeIn('fast');
    }, 35000);

  //   Fade out .t10 notifcation at 22second

    setTimeout(function () {
      $('.t10').fadeOut('fast');
    }, 38000);

    //   Fade in .gym notifcation

    setTimeout(function () {
      $('.gym').fadeIn('fast');
    }, 37000);

  //   Fade out .gym notifcation

    setTimeout(function () {
      $('.gym').fadeOut('fast');
    }, 41000);

    //   Fade in .t11 notifcation

    setTimeout(function () {
      $('.t11').fadeIn('fast');
    }, 38000);

  //   Fade out .t11 notifcation

    setTimeout(function () {
      $('.t11').fadeOut('fast');
    }, 40000);

    //   Fade in .t12 notifcation

    setTimeout(function () {
      $('.t12').fadeIn('fast');
    }, 39500);

  //   Fade out .t12 notifcation

    setTimeout(function () {
      $('.t12').fadeOut('fast');
    }, 40000);

    //   Fade in .update notifcation

    setTimeout(function () {
      $('.update').fadeIn('fast');
    }, 46000);

  //   Fade out .update notifcation

    setTimeout(function () {
      $('.update').fadeOut('fast');
    }, 49000);

    //   Fade in .lowbatt notifcation

    setTimeout(function () {
      $('.lowbatt').fadeIn('fast');
    }, 48000);

  //   Fade out .lowbatt notifcation

    setTimeout(function () {
      $('.lowbatt').fadeOut('fast');
    }, 50000);

    //   Fade in .t13 notifcation

    setTimeout(function () {
      $('.t13').fadeIn('fast');
    }, 51000);

  //   Fade out .t13 notifcation

    setTimeout(function () {
      $('.t13').fadeOut('fast');
    }, 53000);

    //   Fade in .t14 notifcation

    setTimeout(function () {
      $('.t14').fadeIn('fast');
    }, 54000);

  //   Fade out .t14 notifcation

    setTimeout(function () {
      $('.t14').fadeOut('fast');
    }, 57000);

    //   Fade in .t15 notifcation

    setTimeout(function () {
      $('.t15').fadeIn('fast');
    }, 57000);

  //   Fade out .t15 notifcation

    setTimeout(function () {
      $('.t15').fadeOut('fast');
    }, 60000);

    //   Fade in .t16 notifcation

    setTimeout(function () {
      $('.t16').fadeIn('fast');
    }, 60000);

  //   Fade out .t16 notifcation

    setTimeout(function () {
      $('.t16').fadeOut('fast');
    }, 63000);

    //   Fade in .t17 notifcation

    setTimeout(function () {
      $('.t17').fadeIn('fast');
    }, 63000);

  //   Fade out .t17 notifcation

    setTimeout(function () {
      $('.t17').fadeOut('fast');
    }, 66000);

    //   Fade in .p1 notifcation at 19second

    setTimeout(function () {
      $('.p1').fadeIn('fast');
    }, 60000);

  //   Remove p1 and all notifications on click

  $('.notification, .popup, .notification__image').on('click', function() {
            $(this).remove();
          });
  });

  // stolen scrollchecker
  var checkScrollSpeed = (function(settings){
      settings = settings || {};

      var lastPos, newPos, timer, delta,
          delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

      function clear() {
        lastPos = null;
        delta = 0;
      }

      clear();

      return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll
          delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
  })();

  // listen to "scroll" event
  window.onscroll = function(){


    var speed = checkScrollSpeed();
  // if speed is faster than 30ms, adjust if needed

    if (speed > 100) {
      $('.slowdown').addClass('show');
    }
    if (speed < 30) {
      $('.slowdown').removeClass('show');
    }


  };
