(function ($, root, undefined) {$(function () {'use strict'; // on ready start
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
//        general
///////////////////////////////////////

  // css tricks snippet - http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

  // inserts current year
  $('.js-year').html(new Date().getFullYear());

  // detects touch device
  if ("ontouchstart" in document.documentElement){
    $('html').addClass('touch');
  }


///////////////////////////////////////
//        Navigation
///////////////////////////////////////

  // mobile nav toggle open & close
  $('.js-toggle-mobile-nav').on('click', function(e) {
    $('.mobile-nav').toggleClass('is-open').toggleClass('is-closed');
  });

  // // current page nav highlight
  // var currentPage = $('body').data('current-page');
  // $('.' + currentPage + ' .site-nav__item--' + currentPage).addClass('site-nav__item--current');


///////////////////////////////////////
//    Sticky header
///////////////////////////////////////

$(window).scroll(function(){
  var nav = $('.intro__nav');

  var st = $(document).scrollTop();
  var offset = $('.intro').offset().top + $('.intro').outerHeight() - nav.outerHeight();

  if ( st > offset ){
    nav.addClass('is-stuck');
  } else {
    nav.removeClass('is-stuck');
  }
});


///////////////////////////////////////
//      SVG image swap
///////////////////////////////////////

  // finds image with class and swaps .png with .svg in img source string
  if (Modernizr.svgasimg) {
    var svgSwap = $('img.js-svg-swap');
    svgSwap.each( function() {
      var currentSrc = $(this).attr('src'),
          newSrc = currentSrc.replace('.png', '.svg');
      $(this).attr('src', newSrc);
    });
  }



  // ///////////////////////////////////////
  // //           Image slider
  // ///////////////////////////////////////
  //
  // var backgrounds    = $('.js-fading-background'),
  //     counter        = 0,
  //     slideTime      = 5000,
  //     transitionTime = 1000;
  //
  // // hide all but first
  // $(backgrounds).hide();
  // $(backgrounds[0]).show();
  //
  // setInterval(function() {
  //   $(backgrounds[counter]).fadeOut(transitionTime);
  //   counter++;
  //   if (counter === backgrounds.length) {
  //     counter = 0;
  //   }
  //   $(backgrounds[counter]).fadeIn(transitionTime);
  // }, slideTime);


    ///////////////////////////////////////
    //       Background overlay fade
    ///////////////////////////////////////

    $(document).scroll(function() {
    	var st = $(document).scrollTop();
    	var wh = $(window).height();

    	$('.banner__overlay').css({
        "opacity": st / (wh*1.5) + 0.15
    	});
    });



///////////////////////////////////////////////////////////////////////////////
});})(jQuery, this); // on ready end