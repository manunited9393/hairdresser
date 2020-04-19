/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/images.js":
/*!********************************!*\
  !*** ./src/js/parts/images.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function images() {
    const imgPopup = document.createElement('div'),
          bigImg = document.createElement('img'),
          workSection = document.querySelector(".portfolio");

    imgPopup.classList.add('overlay');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        
        if (target && target.matches("a img")) {

            imgPopup.style.display = "flex";
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.display = "block";
            bigImg.style.width = "400px";
            bigImg.classList.add("faded");
            imgPopup.classList.add("faded");
            document.body.style.overflow = "hidden";

        }

        if (target && target.matches('div.overlay')) {
            imgPopup.style.display = "none";
            bigImg.style.display = "none";
            document.body.style.overflow = "";
        }
    });
        
}

module.exports = images;

/***/ }),

/***/ "./src/js/parts/scroll.js":
/*!********************************!*\
  !*** ./src/js/parts/scroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showUp() {
    window.addEventListener('scroll', () => {

        let btnUp = document.querySelector(".up");

        if (window.pageYOffset > 700) {
            btnUp.style.display = "block";
        } else {
            btnUp.style.display = "none";
        }
    });

}



module.exports = showUp;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let showUp = __webpack_require__(/*! ./parts/scroll */ "./src/js/parts/scroll.js"),
        images = __webpack_require__(/*! ./parts/images */ "./src/js/parts/images.js");



    // showUp();
    images();
    
    new WOW().init();


    

});

$(document).ready(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        speed: 1000,
        dots: true,
        prevArrow: '<button type = "button" class = "arrows slick-prev"><img src="icons/arrow-prev.png"></img></button>',
        nextArrow: '<button type = "button" class = "arrows slick-next"><img src="icons/arrow-next.png"></img></button>'
    });


    $(".menu, button, .footer__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form, .appointment .title, .appointment__info, .appointment__require').fadeOut();
            $('body').css({'overflow' : 'hidden'});
            $(".overlay").fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    $('.close').on('click', function() {
        $(".overlay").fadeOut();
        $('body').css({'overflow' : ''});
        $('form, appointment title, appointment__info, .appointment__require').fadeIn();
    });


    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
      $('input[name="phone"]').click(function(){
        $(this).setCursorPosition(3);  // set position number
      });

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map