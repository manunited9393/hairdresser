"use strict";

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.find");

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var images = require("./parts/images"),
      hamburger = require("./parts/hamburger"),
      pricesBtn = require("./parts/price-btn"),
      bilingual = require("./parts/bilingual"),
      inputValue = require("./parts/inputs");

  images();
  hamburger(".hamburger", ".menu", ".menu__item");
  pricesBtn();
  bilingual();
  inputValue();

  new WOW().init();
});
$(document).ready(function () {
  $('.mobile-slide').slick({
    infinite: true,
    responsive: [{
      breakpoint: 800,
      settings: {
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev arrows"><img src="icons/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next arrows"><img src="icons/arrow-next.png"></button>',
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        // centerMode: true,
        dots: true
      }
    }]
  }); // light scroll

  $(".menu, .to-appointment, .footer__nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  }); // send form

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('form, .appointment .title, .appointment__info, .appointment__require').fadeOut();
      $('body').css({
        'overflow': 'hidden',
        'marginRight' : '15px'
      });
      $(".overlay").fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });
  $('.close, .overlay').on('click', function () {
    $('form, .appointment .title, .appointment__info, .appointment__require').fadeIn();
    $(".overlay").fadeOut();
    $('body').css({
      'overflow': '',
      'marginRight' : ""
    });
    $('form, appointment title, appointment__info, .appointment__require').fadeIn();
  });
});