$(document).ready(function() {


// Add jQuery here

// menu spinning question mark
//$('.nav').click(function() {
//   $('.menu').toggleClass('showme');
// });

$('.dummylink').click(function() {
   $('.loading').addClass('showme');

   setTimeout(function () {
     $('.loading').removeClass('showme');
   }, 5000);

//click fake link game over appears

////  $('.dummylink').on('click', function() {
////            $('.gameover').addClass('active');

            // Start timeout images

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 200);

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 400);

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 500);

//            setTimeout(function () {
//              $('.p1').fadeIn('fast');
//            }, 600);

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
        $('.counter__message').addClass('showme');
      });

      $('.counter').mouseleave(function() {
        $('.counter__message').removeClass('showme');
      });

      // rollover downarrow scroll message //
      $('.downarrow').mouseenter(function() {
        $('.scroll').addClass('showme');
      });

      $('.downarrow').mouseenter(function() {
        $('.scroll').removeClass('showme');
      });

$( function() {
        $( ".draggable" ).draggable();
      } );

  //click chapter number
  $('.link__one').click(function() {
     $('.footnote__one').toggleClass('showme');
   });

   $('.link__two').click(function() {
      $('.footnote__two').toggleClass('showme');
    });

   $('.link__three').click(function() {
      $('.footnote__three').toggleClass('showme');
    });

    $('.link__four').click(function() {
       $('.footnote__four').toggleClass('showme');
     });

     $('.link__five').click(function() {
        $('.footnote__five').toggleClass('showme');
      });

  // Copy setTimeout, and change the 1000ms. You can target divs with the $ 'sign' and single quotes. Then try fadeIn, fadeOut, addClass, removeClass.

  //  FADE IN TIMED NOTIFICATIONS:

   //   Fade in .t1 notifcation at 3second

    setTimeout(function () {
      $('.t1').addClass('show');
    }, 4000);

  //   Fade out .t1 notifcation at 7second **fade out not working for all

    setTimeout(function () {
      $('.t1').removeClass('show');
    }, 8000);

  //   Fade in .t2 notifcation at 10second

    setTimeout(function () {
      $('.t2').addClass('show');
    }, 9500);

  //   Fade out .t2 notifcation at 16second

    setTimeout(function () {
      $('.t2').removeClass('show');
    }, 14500);

    //   Fade in .t3 notifcation at 17second

    setTimeout(function () {
      $('.t3').addClass('show');
    }, 12000);

  //   Fade out .t3 notifcation at 22second

    setTimeout(function () {
      $('.t3').removeClass('show');
    }, 14500);

    //   Fade in .t4 notifcation at 17second

    setTimeout(function () {
      $('.t4').addClass('show');
    }, 16000);

  //   Fade out .t4 notifcation at 22second

    setTimeout(function () {
        $('.t4').removeClass('show');
    }, 18000);

    //   Fade in .t5 notifcation at 17second

    setTimeout(function () {
      $('.t5').addClass('show');
    }, 22000);

  //   Fade out .t5 notifcation at 22second

    setTimeout(function () {
      $('.t5').removeClass('show');
    }, 25000);

    //   addClass new width notifcation at 12second

      setTimeout(function () {
        $('.text').addClass('new__width');
        $('.intro').addClass('new__width');
        $('.heading').addClass('new__width');
      }, 23000);

    //   Fade in .t6 notifcation at 17second

    setTimeout(function () {
      $('.t6').addClass('show');
    }, 26000);

  //   Fade out .t6 notifcation at 22second

    setTimeout(function () {
      $('.t6').removeClass('show');
    }, 29000);

  // fade in popup

    setTimeout(function () {
      $('.congratulations').fadeIn('fast');
    }, 31000);

    //   Fade in .t7 notifcation at 17second

    setTimeout(function () {
      $('.t6a').addClass('show');
    }, 33000);

  //   Fade out .t7 notifcation at 22second

    setTimeout(function () {
      $('.t6a').removeClass('show');
    }, 42000);

    //   Fade in .t7 notifcation at 17second

    setTimeout(function () {
      $('.t7').addClass('show');
    }, 35000);

  //   Fade out .t7 notifcation at 22second

    setTimeout(function () {
      $('.t7').removeClass('show');
    }, 42000);

    //   Fade in .t8 notifcation at 17second

    setTimeout(function () {
      $('.t8').addClass('show');
    }, 37000);

  //   Fade out .t8 notifcation at 22second

    setTimeout(function () {
      $('.t8').fadeOut('fast');
    }, 42000);

    //   Fade in .t9 notifcation at 17second

    setTimeout(function () {
      $('.t9').addClass('show');
    }, 39000);

  //   Fade out .t9 notifcation at 22second

    setTimeout(function () {
      $('.t9').fadeOut('fast');
    }, 42000);

    //   Fade in .t10 notifcation at 17second

    setTimeout(function () {
      $('.t10').addClass('show');
    }, 1000000);

  //   Fade out .t10 notifcation at 22second

    setTimeout(function () {
      $('.t10').fadeOut('fast');
    }, 38000);

    //   Fade in .gym notifcation

    setTimeout(function () {
      $('.gym').addClass('show');
    }, 1000000);

  //   Fade out .gym notifcation ***slide in not working, fade out not working

    setTimeout(function () {
      $('.gym').removeClass('show');
      $('.gym').fadeOut('fast');
    }, 39000);

    //   Fade in .t11 notifcation

    setTimeout(function () {
      $('.t11').addClass('show');
    }, 1000000);

  //   Fade out .t11 notifcation

    setTimeout(function () {
      $('.t11').fadeOut('fast');
    }, 40000);

    //   Fade in .t12 notifcation

    setTimeout(function () {
      $('.t12').addClass('show');
    }, 1000000);

  //   Fade out .t12 notifcation

    setTimeout(function () {
      $('.t12').fadeOut('fast');
    }, 43000);

    //   Fade in .update notifcation ***slide in not working

    setTimeout(function () {
      $('.update').addClass('show');
    }, 1000000);

  //   Fade out .update notifcation ***slide out/fade out not working

    setTimeout(function () {
      $('.update').fadeOut('fast');
    }, 49000);

    //   Fade in .lowbatt notifcation ***slide in not working

    setTimeout(function () {
      $('.lowbatt').addClass('show');
    }, 1000000);

  //   Fade out .lowbatt notifcation ***slide out/fade out not working

    setTimeout(function () {
      $('.lowbatt').fadeOut('fast');
    }, 50000);

    //   Fade in .t13 notifcation

    setTimeout(function () {
      $('.t13').addClass('show');
    }, 1000000);

  //   Fade out .t13 notifcation

    setTimeout(function () {
      $('.t13').fadeOut('fast');
    }, 53000);

    //   Fade in .t14 notifcation

    setTimeout(function () {
      $('.t14').addClass('show');
    }, 1000000);

  //   Fade out .t14 notifcation

    setTimeout(function () {
      $('.t14').fadeOut('fast');
    }, 57000);

    //   Fade in .t15 notifcation

    setTimeout(function () {
      $('.t15').addClass('show');
    }, 1000000);

  //   Fade out .t15 notifcation

    setTimeout(function () {
      $('.t15').fadeOut('fast');
    }, 60000);

    //   Fade in .t16 notifcation

    setTimeout(function () {
      $('.t16').addClass('show');
    }, 1000000);

  //   Fade out .t16 notifcation

    setTimeout(function () {
      $('.t16').fadeOut('fast');
    }, 63000);

    //   Fade in .t17 notifcation

    setTimeout(function () {
      $('.t17').addClass('show');
    }, 1000000);

  //   Fade out .t17 notifcation

    setTimeout(function () {
      $('.t17').fadeOut('fast');
    }, 66000);

    //   Fade in .t18 notifcation

    setTimeout(function () {
      $('.t18').addClass('show');
    }, 1000000);

  //   Fade out .t18 notifcation

    setTimeout(function () {
      $('.t18').fadeOut('fast');
    }, 69000);

    //   Fade in .t19 notifcation

    setTimeout(function () {
      $('.t19').addClass('show');
    }, 1000);

  //   Fade out .t19 notifcation

    setTimeout(function () {
      $('.t19').fadeOut('fast');
    }, 72000);

    //   Fade in .t20 notifcation

    setTimeout(function () {
      $('.t20').addClass('show');
    }, 1000000);

  //   Fade out .t20 notifcation

    setTimeout(function () {
      $('.t20').fadeOut('fast');
    }, 75000);

    //   Fade in .t21 notifcation

    setTimeout(function () {
      $('.t21').addClass('show');
    }, 75000);

  //   Fade out .t21 notifcation

    setTimeout(function () {
      $('.t21').fadeOut('fast');
    }, 78000);

    //   Fade in .t22 notifcation

    setTimeout(function () {
      $('.t22').addClass('show');
    }, 81000);

  //   Fade out .t22 notifcation

    setTimeout(function () {
      $('.t22').fadeOut('fast');
    }, 84000);

    //   Fade in .t23 notifcation

    setTimeout(function () {
      $('.t23').addClass('show');
    }, 84000);

  //   Fade out .t23 notifcation

    setTimeout(function () {
      $('.t23').fadeOut('fast');
    }, 87000);

    //   Fade in .t24 notifcation

    setTimeout(function () {
      $('.t24').addClass('show');
    }, 87000);

  //   Fade out .t24 notifcation

    setTimeout(function () {
      $('.t24').fadeOut('fast');
    }, 90000);

    //   Fade in .t25 notifcation

    setTimeout(function () {
      $('.t25').addClass('show');
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
      $('.t26').addClass('show');
    }, 96000);

  //   Fade out .t26 notifcation

    setTimeout(function () {
      $('.t26').fadeOut('fast');
    }, 101000);

    //   Fade in .fb2 notifcation

    setTimeout(function () {
      $('.fb2').fadeIn('fast');
    }, 99000);

  //   Fade out .fb2 notifcation

    setTimeout(function () {
      $('.fb2').fadeOut('fast');
    }, 101000);

    //   Fade in .fb3 notifcation

    setTimeout(function () {
      $('.fb3').fadeIn('fast');
    }, 102000);

  //   Fade out .fb3 notifcation

    setTimeout(function () {
      $('.fb3').fadeOut('fast');
    }, 110000);

    //   Fade in .fb4 notifcation

    setTimeout(function () {
      $('.fb4').fadeIn('fast');
    }, 105000);

  //   Fade out .fb4 notifcation

    setTimeout(function () {
      $('.fb4').fadeOut('fast');
    }, 110000);

    //   Fade in .fb5 notifcation

    setTimeout(function () {
      $('.fb5').fadeIn('fast');
    }, 108000);

  //   Fade out .fb5 notifcation

    setTimeout(function () {
      $('.fb5').fadeOut('fast');
    }, 110000);

    //   Fade in .fb6 notifcation

    setTimeout(function () {
      $('.fb6').fadeIn('fast');
    }, 109000);

  //   Fade out .fb6 notifcation

    setTimeout(function () {
      $('.fb6').fadeOut('fast');
    }, 110000);

    //   Fade in .t27 notifcation

    setTimeout(function () {
      $('.t27').addClass('show');
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
    }, 123000);

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
      $('.t28').addClass('show');
    }, 123000);

  //   Fade out .t28 notifcation

    setTimeout(function () {
      $('.t28').fadeOut('fast');
    }, 126000);

    //   Fade in .t29 notifcation

    setTimeout(function () {
      $('.t29').addClass('show');
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
    }, 130000);

  //   Fade out .fb10 notifcation

    setTimeout(function () {
      $('.fb10').fadeOut('fast');
    }, 132000);

    //   Fade in .t30 notifcation

    setTimeout(function () {
      $('.t30').addClass('show');
    }, 135000);

  //   Fade out .t30 notifcation

    setTimeout(function () {
      $('.t30').fadeOut('fast');
    }, 138000);

    //   Fade in .t31 notifcation

    setTimeout(function () {
      $('.t31').addClass('show');
    }, 138000);

  //   Fade out .t31 notifcation

    setTimeout(function () {
      $('.t31').fadeOut('fast');
    }, 141000);

    //  shrink text

      setTimeout(function () {
        $('.text').addClass('new__size');
        $('.chapter').addClass('shrink');
        $('.intro').addClass('shrink');
        $('.heading').addClass('shrink');
        $('.new').addClass('shrink');
        $('.gif').addClass('shrink');
        $('.footnote').addClass('shrink');
        $('.downarrow').addClass('shrink');
      }, 140000);
//
      //   Fade in .t32 notifcation

      setTimeout(function () {
        $('.t32').addClass('show');
      }, 145000);

    //   Fade out .t32 notifcation

      setTimeout(function () {
        $('.t32').fadeOut('fast');
      }, 148000);

      //  regrow text

        setTimeout(function () {
          $('.text').removeClass('new__size');
          $('.chapter').removeClass('shrink');
          $('.intro').removeClass('shrink');
          $('.heading').removeClass('shrink');
          $('.new').removeClass('shrink');
          $('.gif').removeClass('shrink');
          $('.footnote').removeClass('shrink');
          $('.downarrow').removeClass('shrink');
        }, 147000);

        //   Fade in .t32b notifcation

        setTimeout(function () {
          $('.t32b').addClass('show');
        }, 146000);

      //   Fade out .t32b notifcation

        setTimeout(function () {
          $('.t32b').fadeOut('fast');
        }, 149000);

        //   Fade in .t33 notifcation

        setTimeout(function () {
          $('.t33').addClass('show');
        }, 147000);

      //   Fade out .t33 notifcation

        setTimeout(function () {
          $('.t33').fadeOut('fast');
        }, 150000);

        //   Fade in .t34 notifcation

        setTimeout(function () {
          $('.t34').addClass('show');
        }, 155000);

      //   Fade out .t34 notifcation

        setTimeout(function () {
          $('.t34').fadeOut('fast');
        }, 158000);

        //   Fade in .t35 notifcation

        setTimeout(function () {
          $('.t35').addClass('show');
        }, 163000);

      //   Fade out .t35 notifcation

        setTimeout(function () {
          $('.t35').fadeOut('fast');
        }, 167000);


        //  shrink text

          setTimeout(function () {
            $('.text').addClass('new__size');
            $('.chapter').addClass('shrink');
            $('.intro').addClass('shrink');
            $('.heading').addClass('shrink');
            $('.downarrow').addClass('shrink');
          }, 162000);

          //  regrow text

            setTimeout(function () {
              $('.text').removeClass('new__size');
              $('.chapter').removeClass('shrink');
              $('.intro').removeClass('shrink');
              $('.heading').removeClass('shrink');
              $('.downarrow').removeClass('shrink');
            }, 163000);

            //  shrink text

              setTimeout(function () {
                $('.text').addClass('new__size');
                $('.chapter').addClass('shrink');
                $('.intro').addClass('shrink');
                $('.heading').addClass('shrink');
              }, 164000);

              //  regrow text

                setTimeout(function () {
                  $('.text').removeClass('new__size');
                  $('.chapter').removeClass('shrink');
                  $('.intro').removeClass('shrink');
                  $('.heading').removeClass('shrink');
                }, 165000);

                //  shrink text

                  setTimeout(function () {
                    $('.text').addClass('new__size');
                    $('.chapter').addClass('shrink');
                    $('.intro').addClass('shrink');
                    $('.heading').addClass('shrink');
                  }, 166000);

                  //  regrow text

                    setTimeout(function () {
                      $('.text').removeClass('new__size');
                      $('.chapter').removeClass('shrink');
                      $('.intro').removeClass('shrink');
                      $('.heading').removeClass('shrink');
                    }, 167000);



  //   Remove p1 and all notifications on click

  $('.notification, .draggable, .notification__image').on('click', function() {
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

    if (speed > 110) {
      $('.slowdown').addClass('show');
    }
    if (speed < 30) {
      $('.slowdown').removeClass('show');
    }


  };
