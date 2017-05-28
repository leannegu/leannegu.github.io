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
    }, 43000);

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

    //   Fade in .t18 notifcation

    setTimeout(function () {
      $('.t18').fadeIn('fast');
    }, 66000);

  //   Fade out .t18 notifcation

    setTimeout(function () {
      $('.t18').fadeOut('fast');
    }, 69000);

    //   Fade in .t19 notifcation

    setTimeout(function () {
      $('.t19').fadeIn('fast');
    }, 69000);

  //   Fade out .t19 notifcation

    setTimeout(function () {
      $('.t19').fadeOut('fast');
    }, 72000);

    //   Fade in .t20 notifcation

    setTimeout(function () {
      $('.t20').fadeIn('fast');
    }, 72000);

  //   Fade out .t20 notifcation

    setTimeout(function () {
      $('.t20').fadeOut('fast');
    }, 75000);

    //   Fade in .t21 notifcation

    setTimeout(function () {
      $('.t21').fadeIn('fast');
    }, 75000);

  //   Fade out .t21 notifcation

    setTimeout(function () {
      $('.t21').fadeOut('fast');
    }, 78000);

    //   Fade in .t22 notifcation

    setTimeout(function () {
      $('.t22').fadeIn('fast');
    }, 81000);

  //   Fade out .t22 notifcation

    setTimeout(function () {
      $('.t22').fadeOut('fast');
    }, 84000);

    //   Fade in .t23 notifcation

    setTimeout(function () {
      $('.t23').fadeIn('fast');
    }, 84000);

  //   Fade out .t23 notifcation

    setTimeout(function () {
      $('.t23').fadeOut('fast');
    }, 87000);

    //   Fade in .t24 notifcation

    setTimeout(function () {
      $('.t24').fadeIn('fast');
    }, 87000);

  //   Fade out .t24 notifcation

    setTimeout(function () {
      $('.t24').fadeOut('fast');
    }, 90000);

    //   Fade in .t25 notifcation

    setTimeout(function () {
      $('.t25').fadeIn('fast');
    }, 90000);

  //   Fade out .t25 notifcation

    setTimeout(function () {
      $('.t25').fadeOut('fast');
    }, 93000);

    //   Fade in .fb1 notifcation

    setTimeout(function () {
      $('.fb1').fadeIn('fast');
    }, 93000);

  //   Fade out .fb1 notifcation

    setTimeout(function () {
      $('.fb1').fadeOut('fast');
    }, 96000);

    //   Fade in .t26 notifcation

    setTimeout(function () {
      $('.t26').fadeIn('fast');
    }, 96000);

  //   Fade out .t26 notifcation

    setTimeout(function () {
      $('.t26').fadeOut('fast');
    }, 99000);

    //   Fade in .fb2 notifcation

    setTimeout(function () {
      $('.fb2').fadeIn('fast');
    }, 99000);

  //   Fade out .fb2 notifcation

    setTimeout(function () {
      $('.fb2').fadeOut('fast');
    }, 102000);

    //   Fade in .fb3 notifcation

    setTimeout(function () {
      $('.fb3').fadeIn('fast');
    }, 102000);

  //   Fade out .fb3 notifcation

    setTimeout(function () {
      $('.fb3').fadeOut('fast');
    }, 105000);

    //   Fade in .fb4 notifcation

    setTimeout(function () {
      $('.fb4').fadeIn('fast');
    }, 105000);

  //   Fade out .fb4 notifcation

    setTimeout(function () {
      $('.fb4').fadeOut('fast');
    }, 108000);

    //   Fade in .fb5 notifcation

    setTimeout(function () {
      $('.fb5').fadeIn('fast');
    }, 108000);

  //   Fade out .fb5 notifcation

    setTimeout(function () {
      $('.fb5').fadeOut('fast');
    }, 111000);

    //   Fade in .fb6 notifcation

    setTimeout(function () {
      $('.fb6').fadeIn('fast');
    }, 111000);

  //   Fade out .fb6 notifcation

    setTimeout(function () {
      $('.fb6').fadeOut('fast');
    }, 114000);

    //   Fade in .t27 notifcation

    setTimeout(function () {
      $('.t27').fadeIn('fast');
    }, 114000);

  //   Fade out .t27 notifcation

    setTimeout(function () {
      $('.t27').fadeOut('fast');
    }, 117000);

    //   Fade in .fb7 notifcation

    setTimeout(function () {
      $('.fb7').fadeIn('fast');
    }, 117000);

  //   Fade out .fb7 notifcation

    setTimeout(function () {
      $('.fb7').fadeOut('fast');
    }, 120000);

    //   Fade in .fb8 notifcation

    setTimeout(function () {
      $('.fb8').fadeIn('fast');
    }, 120000);

  //   Fade out .fb8 notifcation

    setTimeout(function () {
      $('.fb8').fadeOut('fast');
    }, 123000);

    //   Fade in .t28 notifcation

    setTimeout(function () {
      $('.t28').fadeIn('fast');
    }, 123000);

  //   Fade out .t28 notifcation

    setTimeout(function () {
      $('.t28').fadeOut('fast');
    }, 126000);

    //   Fade in .t29 notifcation

    setTimeout(function () {
      $('.t29').fadeIn('fast');
    }, 126000);

  //   Fade out .t29 notifcation

    setTimeout(function () {
      $('.t29').fadeOut('fast');
    }, 129000);

    //   Fade in .fb9 notifcation

    setTimeout(function () {
      $('.fb9').fadeIn('fast');
    }, 129000);

  //   Fade out .fb9 notifcation

    setTimeout(function () {
      $('.fb9').fadeOut('fast');
    }, 132000);

    //   Fade in .fb10 notifcation

    setTimeout(function () {
      $('.fb10').fadeIn('fast');
    }, 132000);

  //   Fade out .fb10 notifcation

    setTimeout(function () {
      $('.fb10').fadeOut('fast');
    }, 135000);

    //   Fade in .t30 notifcation

    setTimeout(function () {
      $('.t30').fadeIn('fast');
    }, 135000);

  //   Fade out .t30 notifcation

    setTimeout(function () {
      $('.t30').fadeOut('fast');
    }, 138000);

    //   Fade in .t31 notifcation

    setTimeout(function () {
      $('.t31').fadeIn('fast');
    }, 138000);

  //   Fade out .t31 notifcation

    setTimeout(function () {
      $('.t31').fadeOut('fast');
    }, 141000);

    //  shrink text

      setTimeout(function () {
        $('.text').addClass('new__size');
        $('.chapter').addClass('shrink');
      }, 140000);


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
