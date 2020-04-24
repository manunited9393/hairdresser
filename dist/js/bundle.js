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

/***/ "./src/js/parts/hamburger.js":
/*!***********************************!*\
  !*** ./src/js/parts/hamburger.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hamburger(btnSelector, menuSelector) {
    let ham = document.querySelector(btnSelector),
        menu = document.querySelector(menuSelector);

    ham.addEventListener('click', () => {
        menu.classList.toggle("menu_active");
        ham.classList.toggle("hamburger_active");
    });

    // menuItem.forEach((item) => {
    //     item.addEventListener('click', () => {
    //     menu.classList.remove("menu_active");
    //     ham.classList.remove("hamburger_active");
    //     });
    // });

    menu.addEventListener('click', (e) => {
        if (e.target && e.target.matches('li a')) {
            menu.classList.remove("menu_active");
            ham.classList.remove("hamburger_active");
        }
    });
    let header = document.querySelector(".header");

    header.addEventListener('click', () => {
        ham.classList.remove("hamburger_active");
        menu.classList.remove("menu_active"); 
    });





    // menu.addEventListener('click', (e) => {
    //     let target = e.target;

    //     if (target && target.contains("menu__item")) {
    //         menu.classList.remove("menu_active");
    //         ham.classList.remove("hamburger_active");
    //     }
    // });


}

module.exports = hamburger;

/***/ }),

/***/ "./src/js/parts/images.js":
/*!********************************!*\
  !*** ./src/js/parts/images.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function images() {
    const imgPopup = document.createElement('div'),
          bigImg = document.createElement('img'),
          workSection = document.querySelector(".portfolio"),
          hideBlock = document.querySelectorAll(".hideJs");

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
            hideBlock.forEach((item) => item.style.display = "none");

        }

        if (target && target.matches('div.overlay')) {
            imgPopup.style.display = "none";
            bigImg.style.display = "none";
            document.body.style.overflow = "";
            hideBlock.forEach((item) => item.style.display = "block");
        }
    });
        
}

module.exports = images;

/***/ }),

/***/ "./src/js/parts/price-btn.js":
/*!***********************************!*\
  !*** ./src/js/parts/price-btn.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function pricesBtn() {
    
    let btnPrice = document.querySelectorAll(".block-serve__btn"),
        mainBlock = document.querySelectorAll(".block-serve__wrap"),
        additionBlock = document.querySelectorAll(".block-serve__main"),
        block = document.querySelector(".content"),
        backBtn = document.querySelectorAll(".block-serve__btn-back");

        block.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;
            
            if (target && target.classList.contains("block-serve__btn")) {
                for (let i = 0; i < btnPrice.length; i++) {
                    if (target == btnPrice[i]) {
                        mainBlock[i].classList.add("block-serve__wrap_active");
                        additionBlock[i].classList.add("block-serve__main_active");
                    }
                }
            }
            if (target && target.classList.contains("block-serve__btn-back")) {
                for (let i = 0; i < backBtn.length; i++) {
                    if (target == backBtn[i]) {
                        mainBlock[i].classList.remove("block-serve__wrap_active");
                        additionBlock[i].classList.remove("block-serve__main_active");
                    }
                }
            }
        });

    //     let btnMore = document.querySelectorAll(".tab-box__btn"),
    //     boxAdd = document.querySelectorAll(".tab-box__add");

 

    // tabContent[1].addEventListener('click', function(event) {
    //     let target = event.target;
    //     if (target && target.classList.contains("tab-box__btn")) {
    //         for (let i = 0; i < btnMore.length; i++) {
    //             if (target == btnMore[i]) {
    //                 boxAdd[i].classList.toggle("show");
    //             }
    //         }
    //     }
    // });

    


    // for (let i = 0; i < tab.length; i++) {
    //     if (target == tab[i]) {
    //         hideTabContent(0);
    //         showTabContent(i);
    //         removeActive();
    //         tab[i].classList.add("medicine-main__tab_active");
    //     }
    // }

}

module.exports = pricesBtn;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let images = __webpack_require__(/*! ./parts/images */ "./src/js/parts/images.js"),
        hamburger = __webpack_require__(/*! ./parts/hamburger */ "./src/js/parts/hamburger.js"),
        pricesBtn = __webpack_require__(/*! ./parts/price-btn */ "./src/js/parts/price-btn.js");
        // showUp = require("./parts/scroll")
        



    // showUp();
    images();
    hamburger(".hamburger", ".menu", ".menu__item");
    pricesBtn();
    
    new WOW().init();  

    // if (window.matchMedia('screen and (max-width: 400px)').matches) {
    //     alert("hello");
    //   } else {
    //       alert("goodbye");
    //   }


});

$(document).ready(function(){

    $('.mobile-slide').slick({
        infinite: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev arrows"><img src="icons/arrow-prev.png"></button>',
                nextArrow: '<button type="button" class="slick-next arrows"><img src="icons/arrow-next.png"></button>',
                // centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
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
            }
          ]
    });

    // light scroll
    $(".menu, button, .footer__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



    // send form
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




});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map