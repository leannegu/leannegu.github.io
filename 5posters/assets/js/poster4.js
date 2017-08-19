$(document).ready(function() {

  var audioBell = document.createElement('audio');
          audioBell.setAttribute('src', '/Users/leannegu/Documents/Uni/Semester 2/dpub/github/leannegu.github.io/5posters/assets/audio/fart1.mp3');
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
                   audioFart.setAttribute('src', '/Users/leannegu/Documents/Uni/Semester 2/dpub/github/leannegu.github.io/5posters/assets/audio/fart2.mp3');
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
                            audioToot.setAttribute('src', '/Users/leannegu/Documents/Uni/Semester 2/dpub/github/leannegu.github.io/5posters/assets/audio/fart3.mp3');
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
                                     audioGas.setAttribute('src', '/Users/leannegu/Documents/Uni/Semester 2/dpub/github/leannegu.github.io/5posters/assets/audio/fart4.mp3');
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
