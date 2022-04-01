/*! For license information please see app.js.LICENSE.txt */
(()=>{var e={2:function(e,t,n){var o,r;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),i=window.setTimeout((function(){t(o+r)}),r);return e=o+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n},a=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},c=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(l,u){var s,d,f,m,h={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||c("scrollCancel",s)},animateScroll:function(o,l,u){h.cancelScroll();var d=n(s||t,u||{}),p="[object Number]"===Object.prototype.toString.call(o),v=p||!o.tagName?null:o;if(p||v){var g=e.pageYOffset;d.header&&!f&&(f=document.querySelector(d.header));var w,y,b,S,E,x,k,O,A=i(f),L=p?o:function(t,n,o,i){var a=0;if(t.offsetParent)for(;a+=t.offsetTop,t=t.offsetParent;);return a=Math.max(a-n-o,0),i&&(a=Math.min(a,r()-e.innerHeight)),a}(v,A,parseInt("function"==typeof d.offset?d.offset(o,l):d.offset,10),d.clip),M=L-g,T=r(),q=0,C=(w=M,b=(y=d).speedAsDuration?y.speed:Math.abs(w/1e3*y.speed),y.durationMax&&b>y.durationMax?y.durationMax:y.durationMin&&b<y.durationMin?y.durationMin:parseInt(b,10)),D=function(t){var n,r,i;S||(S=t),q+=t-S,x=g+M*(r=E=1<(E=0===C?0:q/C)?1:E,"easeInQuad"===(n=d).easing&&(i=r*r),"easeOutQuad"===n.easing&&(i=r*(2-r)),"easeInOutQuad"===n.easing&&(i=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(i=r*r*r),"easeOutCubic"===n.easing&&(i=--r*r*r+1),"easeInOutCubic"===n.easing&&(i=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(i=r*r*r*r),"easeOutQuart"===n.easing&&(i=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(i=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(i=r*r*r*r*r),"easeOutQuint"===n.easing&&(i=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(i=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(i=n.customEasing(r)),i||r),e.scrollTo(0,Math.floor(x)),function(t,n){var r=e.pageYOffset;if(t==n||r==n||(g<n&&e.innerHeight+r)>=T)return h.cancelScroll(!0),a(o,n,p),c("scrollStop",d,o,l),!(m=S=null)}(x,L)||(m=e.requestAnimationFrame(D),S=t)};0===e.pageYOffset&&e.scrollTo(0,0),k=o,O=d,p||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:k.id},document.title,k===document.documentElement?"#top":"#"+k.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?a(o,Math.floor(L),!1):(c("scrollStart",d,o,l),h.cancelScroll(!0),e.requestAnimationFrame(D))}}},p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(l))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var n,r;try{n=o(decodeURIComponent(d.hash))}catch(t){n=o(d.hash)}if("#"===n){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),h.animateScroll(r,d))}},v=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||h.animateScroll(t,null,{updateURL:!1})}};return h.destroy=function(){s&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",v,!1),h.cancelScroll(),m=f=d=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),s=n(t,u||{}),f=s.header?document.querySelector(s.header):null,document.addEventListener("click",p,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",v,!1)}(),h}}(r)}.apply(t,[]),void 0===o||(e.exports=o)},128:(e,t,n)=>{var o;!function(){var r,i,a,c,l={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},u=l,s=!1,d={x:0,y:0},f=!1,m=document.documentElement,h=[],p=/^Mac/.test(navigator.platform),v=37,g=38,w=39,y=40,b=32,S=33,E=34,x=35,k=36,O={37:1,38:1,39:1,40:1};function A(){if(!f&&document.body){f=!0;var e=document.body,t=document.documentElement,n=window.innerHeight,o=e.scrollHeight;if(m=document.compatMode.indexOf("CSS")>=0?t:e,r=e,u.keyboardSupport&&U("keydown",D),top!=self)s=!0;else if(se&&o>n&&(e.offsetHeight<=n||t.offsetHeight<=n)){var c,l=document.createElement("div");l.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(l),a=function(){c||(c=setTimeout((function(){l.style.height="0",l.style.height=m.scrollHeight+"px",c=null}),500))},setTimeout(a,10),U("resize",a);if((i=new ee(a)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=n){var d=document.createElement("div");d.style.clear="both",e.appendChild(d)}}u.fixedBackground||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var L=[],M=!1,T=Date.now();function q(e,t,n){var o,r;if(o=(o=t)>0?1:-1,r=(r=n)>0?1:-1,(d.x!==o||d.y!==r)&&(d.x=o,d.y=r,L=[],T=0),1!=u.accelerationMax){var i=Date.now()-T;if(i<u.accelerationDelta){var a=(1+50/i)/2;a>1&&(a=Math.min(a,u.accelerationMax),t*=a,n*=a)}T=Date.now()}if(L.push({x:t,y:n,lastX:t<0?.99:-.99,lastY:n<0?.99:-.99,start:Date.now()}),!M){var c=te(),l=e===c||e===document.body;null==e.$scrollBehavior&&function(e){var t=I(e);if(null==_[t]){var n=getComputedStyle(e,"")["scroll-behavior"];_[t]="smooth"==n}return _[t]}(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto");var s=function(o){for(var r=Date.now(),i=0,a=0,c=0;c<L.length;c++){var d=L[c],f=r-d.start,m=f>=u.animationTime,h=m?1:f/u.animationTime;u.pulseAlgorithm&&(h=oe(h));var p=d.x*h-d.lastX>>0,v=d.y*h-d.lastY>>0;i+=p,a+=v,d.lastX+=p,d.lastY+=v,m&&(L.splice(c,1),c--)}l?window.scrollBy(i,a):(i&&(e.scrollLeft+=i),a&&(e.scrollTop+=a)),t||n||(L=[]),L.length?Z(s,e,1e3/u.frameRate+1):(M=!1,null!=e.$scrollBehavior&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))};Z(s,e,0),M=!0}}function C(e){f||A();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if($(r,"embed")||$(t,"embed")&&/\.pdf/i.test(t.src)||$(r,"object")||t.shadowRoot)return!0;var n=-e.wheelDeltaX||e.deltaX||0,o=-e.wheelDeltaY||e.deltaY||0;p&&(e.wheelDeltaX&&J(e.wheelDeltaX,120)&&(n=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&J(e.wheelDeltaY,120)&&(o=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),n||o||(o=-e.wheelDelta||0),1===e.deltaMode&&(n*=40,o*=40);var i=z(t);return i?!!function(e){if(!e)return;h.length||(h=[e,e,e]);e=Math.abs(e),h.push(e),h.shift(),clearTimeout(c),c=setTimeout((function(){try{localStorage.SS_deltaBuffer=h.join(",")}catch(e){}}),1e3);var t=e>120&&V(e),n=!V(120)&&!V(100)&&!t;return e<50||n}(o)||(Math.abs(n)>1.2&&(n*=u.stepSize/120),Math.abs(o)>1.2&&(o*=u.stepSize/120),q(i,n,o),e.preventDefault(),void P()):!s||!ae||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function D(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==b;document.body.contains(r)||(r=document.activeElement);var o=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||$(t,"input")&&!o.test(t.type)||$(r,"video")||function(e){var t=e.target,n=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(n=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return n}(e)||t.isContentEditable||n)return!0;if(($(t,"button")||$(t,"input")&&o.test(t.type))&&e.keyCode===b)return!0;if($(t,"input")&&"radio"==t.type&&O[e.keyCode])return!0;var i=0,a=0,c=z(r);if(!c)return!s||!ae||parent.keydown(e);var l=c.clientHeight;switch(c==document.body&&(l=window.innerHeight),e.keyCode){case g:a=-u.arrowScroll;break;case y:a=u.arrowScroll;break;case b:a=-(e.shiftKey?1:-1)*l*.9;break;case S:a=.9*-l;break;case E:a=.9*l;break;case k:c==document.body&&document.scrollingElement&&(c=document.scrollingElement),a=-c.scrollTop;break;case x:var d=c.scrollHeight-c.scrollTop-l;a=d>0?d+10:0;break;case v:i=-u.arrowScroll;break;case w:i=u.arrowScroll;break;default:return!0}q(c,i,a),e.preventDefault(),P()}function H(e){r=e.target}var B,F,I=(B=0,function(e){return e.uniqueID||(e.uniqueID=B++)}),Y={},R={},_={};function P(){clearTimeout(F),F=setInterval((function(){Y=R=_={}}),1e3)}function N(e,t,n){for(var o=n?Y:R,r=e.length;r--;)o[I(e[r])]=t;return t}function j(e,t){return(t?Y:R)[I(e)]}function z(e){var t=[],n=document.body,o=m.scrollHeight;do{var r=j(e,!1);if(r)return N(t,r);if(t.push(e),o===e.scrollHeight){var i=K(m)&&K(n)||Q(m);if(s&&X(m)||!s&&i)return N(t,te())}else if(X(e)&&Q(e))return N(t,e)}while(e=e.parentElement)}function X(e){return e.clientHeight+10<e.scrollHeight}function K(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function Q(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function U(e,t,n){window.addEventListener(e,t,n||!1)}function W(e,t,n){window.removeEventListener(e,t,n||!1)}function $(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{h=localStorage.SS_deltaBuffer.split(",")}catch(e){}function J(e,t){return Math.floor(e/t)==e/t}function V(e){return J(h[0],e)&&J(h[1],e)&&J(h[2],e)}var G,Z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)},ee=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,te=(G=document.scrollingElement,function(){if(!G){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),G=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return G});function ne(e){var t,n;return(e*=u.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(n=Math.exp(-1))+(1-Math.exp(-e))*(1-n)),t*u.pulseNormalize}function oe(e){return e>=1?1:e<=0?0:(1==u.pulseNormalize&&(u.pulseNormalize/=ne(1)),ne(e))}var re=window.navigator.userAgent,ie=/Edge/.test(re),ae=/chrome/i.test(re)&&!ie,ce=/safari/i.test(re)&&!ie,le=/mobile/i.test(re),ue=/Windows NT 6.1/i.test(re)&&/rv:11/i.test(re),se=ce&&(/Version\/8/i.test(re)||/Version\/9/i.test(re)),de=(ae||ce||ue)&&!le,fe=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){fe=!0}}))}catch(e){}var me=!!fe&&{passive:!1},he="onwheel"in document.createElement("div")?"wheel":"mousewheel";function pe(e){for(var t in e)l.hasOwnProperty(t)&&(u[t]=e[t])}he&&de&&(U(he,C,me),U("mousedown",H),U("load",A)),pe.destroy=function(){i&&i.disconnect(),W(he,C),W("mousedown",H),W("keydown",D),W("resize",a),W("load",A)},window.SmoothScrollOptions&&pe(window.SmoothScrollOptions),void 0===(o=function(){return pe}.call(t,n,t,e))||(e.exports=o)}()},661:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o={id:"arrow-usage",viewBox:"0 0 16 11",url:"/images/sprite/sprite.svg#arrow-usage",toString:function(){return this.url}}},421:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o={id:"dribbble-usage",viewBox:"0 0 64 64",url:"/images/sprite/sprite.svg#dribbble-usage",toString:function(){return this.url}}},94:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o={id:"linkedin-usage",viewBox:"0 0 50 50",url:"/images/sprite/sprite.svg#linkedin-usage",toString:function(){return this.url}}},853:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o={id:"skype-usage",viewBox:"0 0 30 30",url:"/images/sprite/sprite.svg#skype-usage",toString:function(){return this.url}}},77:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o={id:"submit-usage",viewBox:"0 0 16 14",url:"/images/sprite/sprite.svg#submit-usage",toString:function(){return this.url}}},432:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o={id:"twitter-usage",viewBox:"0 0 30 30",url:"/images/sprite/sprite.svg#twitter-usage",toString:function(){return this.url}}},543:(e,t,n)=>{var o={"./arrow.svg":661,"./dribbble.svg":421,"./linkedin.svg":94,"./skype.svg":853,"./submit.svg":77,"./twitter.svg":432};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=543}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";function e(e,t){var n;return function(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,r),n=null}),e)}}function t(e){return e instanceof Function}var o=function(n){if(n||t(n)){var o=function(){n(window.pageYOffset)};window.addEventListener("scroll",e(15,o)),o()}},r=n(2),i=n.n(r),a=(n(128),!0),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,t=document.querySelector("body");if(a){var n=document.querySelectorAll(".lockPadding");n.forEach((function(e){e.style.paddingRight="".concat(window.innerWidth-document.querySelector(".wrapper").offsetWidth,"px")})),t.style.paddingRight="".concat(window.innerWidth-document.querySelector(".wrapper").offsetWidth,"px"),document.documentElement.classList.add("pageLock"),a=!1,setTimeout((function(){a=!0}),e)}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,t=document.querySelector("body");if(a){var n=document.querySelectorAll(".lockPadding");setTimeout((function(){n.forEach((function(e){e.style.paddingRight="0px"})),t.style.paddingRight="0px",document.documentElement.classList.remove("pageLock")}),e),a=!1,setTimeout((function(){a=!0}),e)}};function u(){var e=document.querySelector(".iconMenu");e&&e.addEventListener("click",(function(e){a&&(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;document.documentElement.classList.contains("pageLock")?l(e):c(e)}(),document.documentElement.classList.toggle("menuOpen"))}))}var s="activeState",d=[];function f(e){var t=e.getBoundingClientRect(),n=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}function m(e){var t={speedAsDuration:!0,speed:500,header:"",offset:70,easing:"easeOutQuad"};(new(i())).animateScroll(e,"",t)}var h=document.querySelectorAll(".gotoBlock");h.length&&(h.forEach((function(e){var t=e,n=t.getAttribute("href").replace("#","");""!==n&&d.indexOf(n)&&d.push(n),t.addEventListener("click",(function(e){document.querySelector(".menuOpen")&&(l(),document.documentElement.classList.remove("menuOpen"),l());var n=t.getAttribute("href").replace("#","");m(document.querySelector(".".concat(n))),e.preventDefault()}))})),o((function(){var e=document.querySelectorAll(".gotoBlock.".concat(s));e.length&&e.forEach((function(e){e.classList.remove(s)})),d.forEach((function(e){var t=e,n=document.querySelector(".".concat(t));if(n){var o=f(n).top,r=n.offsetHeight;window.scrollY>o-window.innerHeight/3&&window.scrollY<o+r-window.innerHeight/3&&document.querySelectorAll('.gotoBlock[href="#'.concat(t,'"]')).forEach((function(e){var t=e;t.classList.add(s),console.log(t)}))}}))})));var p=document.querySelectorAll(".goTo");p.length&&p.forEach((function(e){var t=e;t.addEventListener("click",(function(e){var n=t.getAttribute("href").replace("#","");m(document.querySelector(".".concat(n))),e.preventDefault()}))}));var v=document.querySelectorAll(".animateItem");function g(){var e=window.scrollY,t=document.querySelector("header.header");null!==t&&(e>10?t.classList.add("headerScroll"):t.classList.remove("headerScroll")),v.length&&v.forEach((function(t){var n=t,o=f(n).top,r=n.offsetHeight,i=window.innerHeight-(window.innerHeight-r)/1.5;window.innerHeight>r&&(i=window.innerHeight-r/1.5),e>o-i&&e<o+r&&n.classList.add(s)}))}setTimeout((function(){document.addEventListener("DOMContentLoaded",g),g()}),100),o(g);var w=document.querySelector(".hero_section"),y=w.querySelector(".hero_section_sun__in"),b=w.querySelector(".hero_section_cloud__in"),S=0,E=0,x=0,k=0;function O(){S+=.02*(x-S),E+=.02*(k-E),y.style.cssText="transform: translate(".concat(S/30,"%,").concat(E/30,"%)"),b.style.cssText="transform: translate(".concat(S/7,"%,").concat(E/7,"%)"),requestAnimationFrame(O)}function A(){if(w){O(),w.addEventListener("mousemove",(function(e){var t=w.offsetWidth,n=w.offsetHeight,o=e.pageX-t/2,r=e.pageY-n/2;x=o/t*100,k=r/n*100}));for(var e=[],t=0;t<=1;t+=.005)e.push(t);new IntersectionObserver((function(e,t){!function(e){y.parentElement.style.cssText="transform: translate(0%,-".concat(e/12,"%);"),b.parentElement.style.cssText="transform: translate(0%,-".concat(e/2,"%);")}(window.pageYOffset/w.offsetHeight*100)}),{threshold:e}).observe(document.querySelector(".work_section"))}}var L,M;((L=function(){u(),A()})||t(L))&&document.addEventListener("DOMContentLoaded",L),function(e){(e||t(e))&&window.addEventListener("load",e)}((function(){})),(M=n(543)).keys().forEach(M)})()})();