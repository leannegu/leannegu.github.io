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



// rollover oase image
$('.oase').mouseenter(function() {
   $('.oase__image').addClass('showme');
 });

   $('.oase').mouseleave(function() {
     $('.oase__image').removeClass('showme');
   });

// rollover 93 image
   $('.c93').mouseenter(function() {
      $('.c93__image').addClass('showme');
    });

      $('.c93').mouseleave(function() {
        $('.c93__image').removeClass('showme');
      });

// rollover landscape image

  $('.landscape').mouseenter(function() {
    $('.landscape__image').addClass('showme');
  });

  $('.landscape').mouseleave(function() {
   $('.landscape__image').removeClass('showme');
  });

  //rollover chapter number
  $('.one').mouseenter(function() {
     $('.one__info').addClass('showme');
   });

     $('.one__info').click(function() {
       $(this).removeClass('showme');
     });

//  $('.showme').click(function() {
//     $(this).parent().remove();
//   });


  // Copy setTimeout, and change the 1000ms. You can target divs with the $ 'sign' and single quotes. Then try fadeIn, fadeOut, addClass, removeClass.

  $('.nav').click(function() {
     $('.menu').toggleClass('showme');
   });
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

  $('.notification, .popup').on('click', function() {
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
