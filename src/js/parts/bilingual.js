"use strict";

function bilingual() {
  var eng = document.querySelectorAll(".btn-eng"),
      ru = document.querySelectorAll(".btn-ru"),
      engClass = document.querySelectorAll(".eng"),
      ruClass = document.querySelectorAll(".ru"),
      engClassInline = document.querySelectorAll(".eng-inline"),
      ruClassInline = document.querySelectorAll(".ru-inline"),
      changeBtnNode = document.querySelectorAll(".block-serve__btn"),
      changeBtnBack = document.querySelectorAll(".block-serve__btn-back"),
      lowLetterSpace = document.querySelectorAll(".eng_lower-lspace");

  


  eng.forEach(function (item) {
    item.addEventListener('click', function () {

      changeBtnNode.forEach(item => {
        item.textContent = "price list";
      });
      changeBtnBack.forEach(item => {
        item.textContent = "back";
      });

      ruClass.forEach(function (item) {
        item.style.display = "none";
      });
      ruClassInline.forEach(function (item) {
        item.style.display = "none";
      });
      engClass.forEach(function (item) {
        item.style.display = "block";
        item.style.letterSpacing = "1.4px";

        // var elFontSize = getComputedStyle(item).fontSize;
        // item.style.fontSize = `calc(${elFontSize} + 1px)`

      });
      
      engClassInline.forEach(function (item) {
        item.style.display = "flex";

        // var elFontSize = getComputedStyle(item).fontSize;
        // item.style.fontSize = `calc(${elFontSize} + 1px)`
        item.style.letterSpacing = "1.4px";
      });

      lowLetterSpace.forEach(item => {
        item.style.letterSpacing = ".5px";
        item.style.marginBottom = "6px";
      });
    });
  });


  ru.forEach(function (item) {
    item.addEventListener('click', function () {

      changeBtnNode.forEach(item => {
        item.textContent = "смотреть цены";
      });
      changeBtnBack.forEach(item => {
        item.textContent = "назад";
      });

      // engClass.forEach(item => {
      //   var elFontSize = getComputedStyle(item).fontSize;
      //   item.style.fontSize = `calc(${elFontSize} - 1px)`
      // });
      // engClassInline.forEach(item => {
      //   var elFontSize = getComputedStyle(item).fontSize;
      //   item.style.fontSize = `calc(${elFontSize} - 1px)`
      // });
      
      

      ruClass.forEach(function (item) {
        item.style.display = "block";
      });
      ruClassInline.forEach(function (item) {
        item.style.display = "flex";
      });
      engClass.forEach(function (item) {
        item.style.display = "none";
      });
      engClassInline.forEach(function (item) {
        item.style.display = "none";
      });
    });
  });


}

module.exports = bilingual;