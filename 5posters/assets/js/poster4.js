$(document).ready(function() {

  var audioBell = document.createElement('audio');
          audioBell.setAttribute('src', 'https://ia801305.us.archive.org/27/items/fartingmadness/Dotting%20The%20I.mp3');
          $.get();
          audioBell.addEventListener("load", function() {
            audioBell.play();
          }, true);

          $('.a, .e, .g, .k').mouseenter(function() {
                 audioBell.play();
             });
            //  $('.a, .e, .g, .k').mouseleave(function() {
            //         audioBell.pause();
            //     });

           var audioFart = document.createElement('audio');
                   audioFart.setAttribute('src', 'https://ia801305.us.archive.org/27/items/fartingmadness/Echole.mp3');
                   $.get();
                   audioFart.addEventListener("load", function() {
                     audioFart.play();
                   }, true);

                   $('.b, .h, .m').mouseenter(function() {
                          audioFart.play();
                      });
                      // $('.b, .h, .m').mouseleave(function() {
                      //        audioFart.pause();
                      //    });

                    var audioToot = document.createElement('audio');
                            audioToot.setAttribute('src', 'https://ia801305.us.archive.org/27/items/fartingmadness/George%20Push.mp3');
                            $.get();
                            audioToot.addEventListener("load", function() {
                              audioToot.play();
                            }, true);

                            $('.c, .i, .l').mouseenter(function() {
                                   audioToot.play();
                               });
                              //  $('.c, .i, .l').mouseleave(function() {
                              //         audioToot.pause();
                              //     });

                             var audioGas = document.createElement('audio');
                                     audioGas.setAttribute('src', 'https://ia801305.us.archive.org/27/items/fartingmadness/Jurassic%20Farts.mp3');
                                     $.get();
                                     audioGas.addEventListener("load", function() {
                                       audioGas.play();
                                     }, true);

                                     $('.d, .f, .j').mouseenter(function() {
                                            audioGas.play();
                                        });
                                        // $('.d, .f, .j').mouseleave(function() {
                                        //        audioGas.pause();
                                        //    });


    });
