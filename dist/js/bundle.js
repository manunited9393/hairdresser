!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){window.addEventListener("DOMContentLoaded",()=>{"use strict";let e=o(1),t=o(2),n=o(3);e(),t(".hamburger",".menu",".menu__item"),n(),(new WOW).init();let r=document.querySelectorAll(".btn-eng"),l=document.querySelectorAll(".btn-ru"),i=document.querySelectorAll(".eng"),s=document.querySelectorAll(".ru"),c=document.querySelectorAll(".eng-inline"),a=document.querySelectorAll(".ru-inline");r.forEach(e=>{e.addEventListener("click",()=>{s.forEach(e=>{e.style.display="none"}),a.forEach(e=>{e.style.display="none"}),i.forEach(e=>{e.style.display="block",e.style.letterSpacing="1.4px"}),c.forEach(e=>{e.style.display="flex",e.style.letterSpacing="1.4px"})})}),l.forEach(e=>{e.addEventListener("click",()=>{s.forEach(e=>{e.style.display="block"}),a.forEach(e=>{e.style.display="flex"}),i.forEach(e=>{e.style.display="none"}),c.forEach(e=>{e.style.display="none"})})})}),$(document).ready((function(){$(".mobile-slide").slick({infinite:!0,responsive:[{breakpoint:800,settings:{arrows:!0,prevArrow:'<button type="button" class="slick-prev arrows"><img src="icons/arrow-prev.png"></button>',nextArrow:'<button type="button" class="slick-next arrows"><img src="icons/arrow-next.png"></button>',centerPadding:"40px",slidesToShow:3}},{breakpoint:576,settings:{arrows:!1,slidesToShow:1,adaptiveHeight:!0,dots:!0}}]}),$(".menu, .to-appointment, .footer__nav").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("body,html").animate({scrollTop:o},1500)})),$("form").submit((function(e){return e.preventDefault(),$.ajax({type:"POST",url:"mailer/smart.php",data:$(this).serialize()}).done((function(){$(this).find("input").val(""),$("form, .appointment .title, .appointment__info, .appointment__require").fadeOut(),$("body").css({overflow:"hidden"}),$(".overlay").fadeIn("slow"),$("form").trigger("reset")})),!1})),$(".close").on("click",(function(){$(".overlay").fadeOut(),$("body").css({overflow:""}),$("form, appointment title, appointment__info, .appointment__require").fadeIn()}))}))},function(e,t){e.exports=function(){const e=document.createElement("div"),t=document.createElement("img"),o=document.querySelector(".portfolio"),n=document.querySelectorAll(".hideJs"),r=function(){let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.backgroundColor="red",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}();e.classList.add("overlay"),o.appendChild(e),e.style.justifyContent="center",e.style.alignItems="center",e.style.display="none",e.appendChild(t),o.addEventListener("click",o=>{o.preventDefault();let l=o.target;if(l&&l.matches("a img")){e.style.display="flex";const o=l.parentNode.getAttribute("href");t.setAttribute("src",o),t.style.display="block",t.style.width="400px",t.classList.add("faded"),e.classList.add("faded"),document.body.style.overflow="hidden",n.forEach(e=>e.style.opacity="0"),document.body.style.marginRight=r+"px"}l&&l.matches("div.overlay")&&(e.style.display="none",t.style.display="none",document.body.style.overflow="",n.forEach(e=>e.style.opacity="1"),document.body.style.marginRight="0px")});let l=document.querySelector(".about__img");l.addEventListener("click",o=>{o.preventDefault();const n=l.getAttribute("href");e.style.display="flex",t.setAttribute("src",n),t.style.display="block",t.style.width="400px",t.classList.add("faded"),e.classList.add("faded"),document.body.style.overflow="hidden",document.body.style.marginRight=r+"px"})}},function(e,t){e.exports=function(e,t){let o=document.querySelector(e),n=document.querySelector(t),r=document.createElement("div");r.style.position="fixed",r.style.left="0",r.style.right="0",r.style.top="0",r.style.bottom="0",o.addEventListener("click",()=>{n.classList.toggle("menu_active"),o.classList.toggle("hamburger_active"),document.body.appendChild(r)}),n.addEventListener("click",e=>{e.target&&e.target.matches("li a")&&(n.classList.remove("menu_active"),o.classList.remove("hamburger_active"),r.remove())}),r.addEventListener("click",()=>{o.classList.remove("hamburger_active"),n.classList.remove("menu_active"),r.remove()})}},function(e,t){e.exports=function(){let e=document.querySelectorAll(".block-serve__btn"),t=document.querySelectorAll(".block-serve__wrap"),o=document.querySelectorAll(".block-serve__main"),n=document.querySelector(".content"),r=document.querySelectorAll(".block-serve__btn-back");n.addEventListener("click",n=>{n.preventDefault();let l=n.target;if(l&&l.classList.contains("block-serve__btn"))for(let n=0;n<e.length;n++)l==e[n]&&(t.forEach(e=>{e.classList.remove("block-serve__wrap_active")}),o.forEach(e=>{e.classList.remove("block-serve__main_active")}),t[n].classList.add("block-serve__wrap_active"),o[n].classList.add("block-serve__main_active"));if(l&&l.classList.contains("block-serve__btn-back"))for(let e=0;e<r.length;e++)l==r[e]&&(t[e].classList.remove("block-serve__wrap_active"),o[e].classList.remove("block-serve__main_active"))})}}]);
//# sourceMappingURL=bundle.js.map