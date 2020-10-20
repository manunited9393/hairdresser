"use strict";

$(document).ready(function () {
  $('.mobile-slide').slick({
    infinite: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev arrows"><img src="icons/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next arrows"><img src="icons/arrow-next.png"></button>',
        // centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        dots: true
      }
    }]
  });
});