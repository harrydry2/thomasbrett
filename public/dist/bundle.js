!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){t.exports=o(2)},function(t,e,o){},function(t,e,o){"use strict";o.r(e);o(1);const n=document.querySelector.bind(document);document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(t,e){this.addEventListener(t,e)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(t,e){this.forEach(o=>{o.on(t,e)})};const r=n(".speakerOn"),s=n(".speakerOff"),i=n("video"),c=n(".bottom__one"),l=n(".bottom__one-inner"),u=n(".bottom__two");n(".bottom__none");r.on("click",()=>{r.classList.toggle("speakerNone"),s.classList.toggle("speakerNone"),i.muted=!1}),s.on("click",()=>{r.classList.toggle("speakerNone"),s.classList.toggle("speakerNone"),i.muted=!0}),l.on("click",()=>{c.classList.toggle("bottom__none"),u.classList.toggle("bottom__none"),n("body").classList.toggle("noScroll")}),u.on("click",()=>{c.classList.toggle("bottom__none"),u.classList.toggle("bottom__none"),n("body").classList.toggle("noScroll")})}]);