!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),window.onscroll=function(e,t,n){var r,o,l,u,c;function i(){var a=Date.now()-u;a<t&&a>=0?r=setTimeout(i,t-a):(r=null,n||(c=e.apply(l,o),l=o=null))}null==t&&(t=100);var a=function(){l=this,o=arguments,u=Date.now();var a=n&&!r;return r||(r=setTimeout(i,t)),a&&(c=e.apply(l,o),l=o=null),c};return a.clear=function(){r&&(clearTimeout(r),r=null)},a.flush=function(){r&&(c=e.apply(l,o),l=o=null,clearTimeout(r),r=null)},a}(function(){const e=document.querySelector(".menu"),t=e.querySelector(".menu .blog-logo"),n=document.querySelector("header.banner").offsetTop;window.pageYOffset>.5*n?(e.classList.add("fixed"),t.style.display="none"):(t.style.display="flex",e.classList.remove("fixed"))},50),function(){const e=document.querySelector(".collapse-category");e.querySelector(".btn-collapse").addEventListener("click",t=>{t.preventDefault(),e.classList.toggle("show")})}()}]);