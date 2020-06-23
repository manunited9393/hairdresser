"use strict";

function hamburger(btnSelector, menuSelector) {
  var ham = document.querySelector(btnSelector),
      menu = document.querySelector(menuSelector);
  var div = document.createElement("div");
  div.style.position = "fixed";
  div.style.left = "0";
  div.style.right = "0";
  div.style.top = "0";
  div.style.bottom = "0";
  ham.addEventListener('click', function () {
    menu.classList.toggle("menu_active");
    ham.classList.toggle("hamburger_active");
    document.body.appendChild(div);
  });
  menu.addEventListener('click', function (e) {
    if (e.target && e.target.matches('li a')) {
      menu.classList.remove("menu_active");
      ham.classList.remove("hamburger_active");
      div.remove();
    }
  });
  div.addEventListener('click', function () {
    ham.classList.remove("hamburger_active");
    menu.classList.remove("menu_active");
    div.remove();
  });
  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      ham.style.opacity = ".5";
    } else {
      ham.style.opacity = "1";
    }
  });
}

module.exports = hamburger;