"use strict";

function images() {
  var imgPopup = document.createElement('div'),
      bigImg = document.createElement('img'),
      workSection = document.querySelector(".portfolio"),
      hideBlock = document.querySelectorAll(".hideJs"),
      scroll = calcScroll();
  imgPopup.classList.add('overlay');
  workSection.appendChild(imgPopup);
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";
  imgPopup.appendChild(bigImg);
  workSection.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target && target.matches("a img")) {
      imgPopup.style.display = "flex";
      var path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
      bigImg.style.display = "block";
      bigImg.style.width = "400px";
      bigImg.classList.add("faded");
      imgPopup.classList.add("faded");
      document.body.style.overflow = "hidden";
      hideBlock.forEach(function (item) {
        return item.style.opacity = "0";
      });
      document.body.style.marginRight = "".concat(scroll, "px");
    }

    if (target && target.matches('div.overlay')) {
      imgPopup.style.display = "none";
      bigImg.style.display = "none";
      document.body.style.overflow = "";
      hideBlock.forEach(function (item) {
        return item.style.opacity = "1";
      });
      document.body.style.marginRight = "0px";
    }
  }); // hidden scroll

  function calcScroll() {
    var div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "red";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  var profileImg = document.querySelector(".about__img");
  profileImg.addEventListener('click', function (e) {
    e.preventDefault();
    var newPath = profileImg.getAttribute('href');
    imgPopup.style.display = "flex";
    bigImg.setAttribute('src', newPath);
    bigImg.style.display = "block";
    bigImg.style.width = "400px";
    bigImg.classList.add("faded");
    imgPopup.classList.add("faded");
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "".concat(scroll, "px");
  });
}

module.exports = images;