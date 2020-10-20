"use strict";

function pricesBtn() {
  var btnPrice = document.querySelectorAll(".block-serve__btn"),
      mainBlock = document.querySelectorAll(".block-serve__wrap"),
      additionBlock = document.querySelectorAll(".block-serve__main"),
      block = document.querySelector(".content"),
      backBtn = document.querySelectorAll(".block-serve__btn-back");

  function hideAllBlocks() {
    mainBlock.forEach(function (item) {
      item.classList.remove("block-serve__wrap_active");
    });
    additionBlock.forEach(function (item) {
      item.classList.remove("block-serve__main_active");
    });
  }

  block.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target && target.classList.contains("block-serve__btn")) {
      for (var i = 0; i < btnPrice.length; i++) {
        if (target == btnPrice[i]) {
          hideAllBlocks();
          mainBlock[i].classList.add("block-serve__wrap_active");
          additionBlock[i].classList.add("block-serve__main_active");
        }
      }
    }

    if (target && target.classList.contains("block-serve__btn-back")) {
      for (var _i = 0; _i < backBtn.length; _i++) {
        if (target == backBtn[_i]) {
          mainBlock[_i].classList.remove("block-serve__wrap_active");

          additionBlock[_i].classList.remove("block-serve__main_active");
        }
      }
    }
  });
}

module.exports = pricesBtn;