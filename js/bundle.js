!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t){var n,i,o,s=document.querySelector(".brands-swiper"),r=document.querySelector(".techs-swiper"),a=document.querySelector(".prices-swiper");document.querySelector(".swiper-pagination-brands"),document.querySelector(".swiper-pagination-techs"),document.querySelector(".swiper-pagination-prices");window.addEventListener("load",(function(){window.innerWidth<768&&"false"===s.dataset.mobile&&(n=new Swiper(s,{direction:"horizontal",spaceBetween:16,slidesPerView:"auto",freeMode:!0,slidesOffsetBefore:16,slidesOffsetAfter:16,pagination:{el:".swiper-pagination-brands",clickable:!0}}),s.dataset.mobile="true"),window.innerWidth>=768&&(s.dataset.mobile="false",s.classList.contains("swiper-initialized")&&n.destroy()),window.innerWidth<768&&"false"===r.dataset.mobile&&(i=new Swiper(r,{direction:"horizontal",spaceBetween:16,slidesPerView:"auto",freeMode:!0,slidesOffsetBefore:16,slidesOffsetAfter:16,pagination:{el:".swiper-pagination-techs",clickable:!0}}),r.dataset.mobile="true"),window.innerWidth>=768&&(r.dataset.mobile="false",r.classList.contains("swiper-initialized")&&i.destroy()),window.innerWidth<768&&"false"===a.dataset.mobile&&(o=new Swiper(a,{direction:"horizontal",spaceBetween:16,slidesPerView:"auto",freeMode:!0,slidesOffsetBefore:16,slidesOffsetAfter:16,pagination:{el:".swiper-pagination-prices",clickable:!0}}),a.dataset.mobile="true"),window.innerWidth>=768&&(a.dataset.mobile="false",a.classList.contains("swiper-initialized")&&o.destroy())})),window.addEventListener("resize",(function(){window.innerWidth<768&&"false"===s.dataset.mobile&&(n=new Swiper(s,{direction:"horizontal",spaceBetween:16,slidesPerView:"auto",freeMode:!0,slidesOffsetBefore:16,slidesOffsetAfter:16,pagination:{el:".swiper-pagination-brands",clickable:!0}}),s.dataset.mobile="true"),window.innerWidth>=768&&(s.dataset.mobile="false",s.classList.contains("swiper-initialized")&&n.destroy()),window.innerWidth<768&&"false"===r.dataset.mobile&&(i=new Swiper(r,{direction:"horizontal",spaceBetween:16,slidesPerView:"auto",freeMode:!0,slidesOffsetBefore:16,slidesOffsetAfter:16,pagination:{el:".swiper-pagination-techs",clickable:!0}}),r.dataset.mobile="true"),window.innerWidth>=768&&(r.dataset.mobile="false",r.classList.contains("swiper-initialized")&&i.destroy()),window.innerWidth<768&&"false"===a.dataset.mobile&&(o=new Swiper(a,{direction:"horizontal",spaceBetween:16,slidesPerView:"auto",freeMode:!0,slidesOffsetBefore:16,slidesOffsetAfter:16,pagination:{el:".swiper-pagination-prices",clickable:!0}}),a.dataset.mobile="true"),window.innerWidth>=768&&(a.dataset.mobile="false",a.classList.contains("swiper-initialized")&&o.destroy())}))},function(e,t){var n=document.querySelector(".modal-wrapper--call"),i=document.querySelector(".overlay--call"),o=document.querySelector(".modal-wrapper--feedback"),s=document.querySelector(".overlay--feedback"),r=document.querySelector(".round-button--call--sm"),a=document.querySelector(".round-button--call--header"),d=document.querySelector(".round-button--chat--sm"),c=document.querySelector(".round-button--chat--header"),l=document.querySelector(".round-button--cross--modal-call"),u=document.querySelector(".round-button--cross--modal-feedback");r.addEventListener("click",(function(){n.classList.add("modal-wrapper--show")})),a.addEventListener("click",(function(){n.classList.add("modal-wrapper--show")})),l.addEventListener("click",(function(){n.classList.remove("modal-wrapper--show")})),i.addEventListener("click",(function(e){e.target===i&&n.classList.remove("modal-wrapper--show")})),d.addEventListener("click",(function(){o.classList.add("modal-wrapper--show")})),c.addEventListener("click",(function(){o.classList.add("modal-wrapper--show")})),u.addEventListener("click",(function(){o.classList.remove("modal-wrapper--show")})),s.addEventListener("click",(function(e){e.target===s&&o.classList.remove("modal-wrapper--show")}))},function(e,t){var n=document.querySelector(".round-button--burger--s"),i=document.querySelector(".round-button--burger--md"),o=document.querySelector(".round-button--cross--sm"),s=document.querySelector(".sm-wrapper"),r=document.querySelector(".sm"),a=document.querySelector(".overlay--sm");n.addEventListener("click",(function(){s.classList.add("modal-wrapper--show"),r.classList.add("modal-wrapper--show")})),i.addEventListener("click",(function(){s.classList.add("modal-wrapper--show"),r.classList.add("modal-wrapper--show")})),o.addEventListener("click",(function(){s.classList.remove("modal-wrapper--show"),r.classList.remove("modal-wrapper--show")})),a.addEventListener("click",(function(e){e.target===a&&(s.classList.remove("modal-wrapper--show"),r.classList.remove("modal-wrapper--show"))})),window.addEventListener("resize",(function(){window.innerWidth>1366&&(s.classList.remove("modal-wrapper--show"),r.classList.remove("modal-wrapper--show"))}))},function(e,t){var n=document.querySelector(".expand-button--main-section"),i=document.querySelector(".expand-button--brands"),o=document.querySelector(".expand-button--techs"),s=document.querySelector(".main-section__text"),r=document.querySelector(".brands-swiper"),a=document.querySelector(".techs-swiper");n.addEventListener("click",(function(){n.classList.contains("expand-button--hide")?(n.textContent="Читать далее",s.classList.remove("expand"),n.classList.remove("expand-button--hide")):(s.classList.add("expand"),n.textContent="Скрыть",n.classList.add("expand-button--hide"))})),i.addEventListener("click",(function(){i.classList.contains("expand-button--hide")?(i.textContent="Показать все",r.classList.remove("expand"),i.classList.remove("expand-button--hide")):(r.classList.add("expand"),i.textContent="Скрыть",i.classList.add("expand-button--hide"))})),o.addEventListener("click",(function(){o.classList.contains("expand-button--hide")?(o.textContent="Показать все",a.classList.remove("expand"),o.classList.remove("expand-button--hide")):(a.classList.add("expand"),o.textContent="Скрыть",o.classList.add("expand-button--hide"))}))}]);
//# sourceMappingURL=bundle.js.map