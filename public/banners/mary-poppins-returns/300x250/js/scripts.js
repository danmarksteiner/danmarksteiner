(function() {
  //strict mode
  'use strict';

  //global variables
  var dbug = false; // debug

  //greensock timelines
  var _tl = new TimelineLite();
  var tl = new TimelineMax({ ease: Power1.easeOut });
  var tl1;

  //selector helper
  function $(el) {
    return document.querySelector(el);
  }

  //hover effect helper
  function exitHover(el) {
    $(el).addEventListener('mouseenter', function() {
      this.classList.add('hover');

      this.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
      });
    });
  }

  // Exit fullscreen
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  //sprite sheet helper
  //syntax - spriteSheet('#frame1_cta', 0.25, 133, 2);
  function spriteSheet(el, duration, elWidth, steps) {
    var sprite = new TimelineMax({ ease: Power1.easeOut });

    function hover() {
      var lastPosition = (0 - elWidth) * (steps - 1) + 'px';
      sprite.to(el, duration, {
        backgroundPosition: lastPosition,
        ease: SteppedEase.config(steps - 1)
      });
    }

    $(el).addEventListener('mouseenter', hover);

    function skipReset() {
      sprite.to(el, duration, {
        backgroundPosition: '0px',
        ease: SteppedEase.config(steps - 1)
      });
    }

    $(el).addEventListener('mouseleave', skipReset);
  }

  //start date checker
  var DateChecker = function(release_date, pre_release) {
    var d = new Date().toISOString().slice(0, 10);
    var today = new Date(d);
    var release_date = new Date(release_date);
    var dayBefore = new Date(release_date.getTime());
    dayBefore.setDate(release_date.getDate() - 1);
    var d = release_date - today - 86400000;

    if (pre_release) var pre_release = new Date(pre_release);

    if (pre_release) {
      if (release_date < pre_release) {
        throw new Error(
          'release_date is before pre_release. Reverse their order'
        );
      }
      if (today < pre_release) {
        return 'release_1';
      }
      if (today < release_date) {
        if (d == 0) {
          return 'release_3';
        } else {
          return 'release_2';
        }
      }
    }
    if (today < release_date) {
      return 'release_1';
    } else {
      return 'release_4';
    }
  };

  //release line switch
  function switch_release(release_date, pre_release) {
    switch (DateChecker(release_date, pre_release)) {
      case 'release_1':
        break;

      case 'release_2':
        document.getElementById('frame1_release').src = 'images/release2.png';
        document.getElementById('frame1_release').alt = 'In Cinemas Friday';
        break;

      case 'release_3':
        document.getElementById('frame1_release').src = 'images/release2.png';
        document.getElementById('frame1_release').alt = 'In Cinemas Friday';
        break;

      case 'release_4':
        document.getElementById('frame1_release').src = 'images/release3.png';
        document.getElementById('frame1_release').alt = 'In Cinemas Now';
        break;

      default:
      // Do nothing
    }
  }

  //cta switch
  // function switch_cta(release_date, pre_release) {

  // 	switch (DateChecker(release_date, pre_release)) {

  // 		case "release_1":
  // 			break;

  // 		case "release_2":
  // 			break;

  // 		case "release_3":
  // 			break;

  // 		case "release_4":
  // 			break;

  // 		default:
  // 			//do nothing
  // 	}
  // }

  //doubleclick enabler
  window.onload = function() {
    if (Enabler.isInitialized()) {
      doubleclick_init();
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.INIT,
        doubleclick_init
      );
    }
    function doubleclick_init() {
      if (Enabler.isPageLoaded()) {
        polite_load();
      } else {
        Enabler.addEventListener(
          studio.events.StudioEvent.PAGE_LOADED,
          polite_load
        );
      }
    }
    function polite_load() {
      switch_release('2018-12-21', '2018-12-17');
      tl.to('#main_exit', 0.25, { autoAlpha: 1 }, 'start')
        .to('#global_bg', 0.25, { autoAlpha: 1 }, 'start')
        .to('#global_border', 0.25, { autoAlpha: 1 }, 'start')
        .to('#frame1', 0.25, { autoAlpha: 1 }, 'start');
      banner();
    }
  };

  //banner animation
  function banner() {
    tl1 = new TimelineMax();
    var dur = 0.25;

    // Frame 1
    tl1.from(
      '#frame1_mary',
      dur * 4,
      { ease: Power2.easeOut, autoAlpha: 0 },
      'frame1+=0.25'
    );
    tl1.from(
      '#frame1_sparkle',
      dur * 4,
      { autoAlpha: 0, delay: 0.75 },
      'frame1+=0.25'
    );
    tl1.from(
      '#frame1_blossom',
      dur * 8,
      { ease: Power2.easeOut, autoAlpha: 0 },
      'frame1+=0.5'
    );
    tl1.from(
      '#frame1_blossom',
      dur * 12,
      { ease: Power2.easeOut, y: -20 },
      'frame1+=0.5'
    );
    tl1.from(
      '#frame1_tt',
      dur * 4,
      { ease: Power2.easeOut, autoAlpha: 0, y: -10 },
      'frame1+=0.75'
    );
    tl1.from(
      '#frame1_release',
      dur * 4,
      { ease: Power2.easeOut, autoAlpha: 0, y: -10 },
      'frame1+=1'
    );
    tl1.from(
      '#cta_exit',
      dur * 4,
      { ease: Power2.easeOut, autoAlpha: 0, y: -10 },
      'frame1+=1.25'
    );
    tl1.from(
      '#frame1_legal',
      dur * 4,
      { ease: Power2.easeOut, autoAlpha: 0 },
      'frame1+=1.5'
    );

    var tl2 = new TimelineMax({ repeat: 4 });
    tl2.to(
      '#frame1_sparkle',
      dur * 12,
      { scale: 2, rotation: 540, transformOrigin: 'center center' },
      'frame2'
    );
    tl2.to(
      '#frame1_sparkle',
      dur * 12,
      { scale: 1, rotation: 540, transformOrigin: 'center center' },
      'frame2+=3'
    );

    //hover effects
    document
      .querySelector('#banner_ad')
      .addEventListener('mouseenter', function() {
        document.querySelector('#cta_exit').classList.add('hover');
        this.addEventListener('mouseleave', function() {
          document.querySelector('#cta_exit').classList.remove('hover');
        });
      });

    //log total duration
    if (dbug === true) {
      console.log(
        'animation length = ' +
          parseFloat(Math.round(tl1.totalDuration() * 100) / 100).toFixed(2) +
          's'
      );
    }
  }

  //exit functions
  function exit() {
    //extra tlProgress call is used to push past the video function as this includes a timeline pause which would halt progress to last frame
    tl1.totalProgress(1);
    // tl1.play();
    // tl1.totalProgress(1);
    // setTimeout(
    // 	function(){
    // 		video1.pause();
    // 	},
    // 200);
  }

  //cta Exit
  $('#cta_exit').addEventListener('click', function() {
    Enabler.exit('CTA Exit');
    exit();
  });

  //main Exit
  $('#main_exit').addEventListener('click', function() {
    Enabler.exit('Main Exit');
    exit();
  });
  console.log = function() {};
})();
