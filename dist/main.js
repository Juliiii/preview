!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.previewjs=t():e.previewjs=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;s(e);var t=f=document.createElement("div");t.setAttribute("class","preview-wrapper animated zoomIn"),d=document.createElement("div"),d.setAttribute("class","ratio"),d.innerText=v+"/"+h,p=document.createElement("i"),p.setAttribute("class","iconfont icon-delete icon-close"),o(e),t.appendChild(d),t.appendChild(p),u.appendChild(t),c()}function o(e){if(!e.length)throw new Error("srcs should not be empty");var t=document.createElement("div");t.setAttribute("class","preview-innerWrapper"),t.style.width=y*e.length+"px";for(var n=document.createDocumentFragment(),r=e.length,o=0;o<r;o++){var i=document.createElement("div"),a=document.createElement("img");i.setAttribute("class","img-wrapper"),i.style.width=y+"px",i.style.left=y*o+"px",a.setAttribute("class","img"),a.setAttribute("src",e[o]),i.appendChild(a),n.appendChild(i),m.push(i)}t.appendChild(n),f.appendChild(t)}function i(e){Promise.all([a(e,v-1,w,0),a(e,"pre"===e?v:v-2,w,"pre"===e?y:-y)]).then(function(){for(var t="pre"===e?y:-y,n=0;n<h;n++)("pre"===e&&n!==v&&n!==v-1||"next"===e&&n!==v-2&&n!==v-1)&&(m[n].style.left=parseInt(m[n].style.left)+t+"px")})}function a(e,t,n,r){return new Promise(function(o){var i=m[t];if("pre"===e)var a=setInterval(function(){var e=parseInt(i.style.left);e+n>=r?(i.style.left=r+"px",clearInterval(a),o()):i.style.left=e+n+"px"},20);else if("next"===e)var s=setInterval(function(){var e=parseInt(i.style.left);e-n<=r?(i.style.left=r+"px",clearInterval(s),o()):i.style.left=e-n+"px"},10)})}function s(e){f=null,f=null,p=null,d=null,b=null,g=null,m=[],v=1,h=e.length,y=document.documentElement.clientWidth||document.body.clientWidth,u=document.getElementsByTagName("body")[0]}function l(e){f.setAttribute("class","preview-wrapper animated zoomOut"),f.removeEventListener("click",function(){}),f.removeEventListener("touchstart",function(){}),f.removeEventListener("touchmove",function(){}),f.removeEventListener("touchend",function(){}),e.stopPropagation(),setTimeout(function(){return u.removeChild(f)},500)}function c(){f.addEventListener("click",l),f.addEventListener("touchstart",function(e){b=e.targetTouches[0].pageX}),f.addEventListener("touchmove",function(e){g=e.targetTouches[0].pageX;var t=g-b;if(!(t>0&&1===v||t<0&&v===h)){var n=t<0?parseInt(m[v-1].style.left)-w:parseInt(m[v-1].style.left)+w;t<0&&n<=-y||t>0&&n>=y||(t<0?(m[v-1].style.left=parseInt(m[v-1].style.left)-w+"px",m[v].style.left=parseInt(m[v].style.left)-w+"px"):(m[v-1].style.left=parseInt(m[v-1].style.left)+w+"px",m[v-2].style.left=parseInt(m[v-2].style.left)+w+"px"))}}),f.addEventListener("touchend",function(e){if(null!==g){if(g>b&&g>b+40){if(1===v)return;v--,i("pre")}else if(g<b&&g<b+40){if(v===m.length)return;v++,i("next")}d.innerText=v+"/"+h}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,n(1);var u=void 0,f=void 0,p=void 0,d=void 0,m=void 0,v=void 0,h=void 0,y=void 0,b=void 0,g=void 0,w=25,x=[]},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(3)(void 0),t.push([e.i,"@import url(//at.alicdn.com/t/font_425490_k9piwgj0rrckrzfr.css);",""]),t.push([e.i,".preview-wrapper{position:absolute;left:0;top:0;background-color:#000;height:100%;width:100%;overflow:hidden}.preview-innerWrapper{height:100%}.img-wrapper{position:absolute;top:0;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.icon-close,.ratio{position:absolute;top:60px;color:#fff}.ratio{right:5%;font-size:30pt}.icon-close{left:5%;font-size:36pt}.img{width:90%}.animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));m[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],c=i[3],u={css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function i(e,t){var n=h(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=b++;n=y||(y=s(t)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),y=null,b=0,g=[],w=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=m[s.id];l.refs--,i.push(l)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete m[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}])});