!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(S,t),d?y(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function S(){var e=p();if(w(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return s?b(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=p(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(p())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),w=document.querySelector("input"),S=document.querySelector("textarea");O.addEventListener("input",e(t)((function(){var e=new FormData(O),t=Object.fromEntries(e);localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),O.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=t.email,r=t.message,o=new FormData(O),i=Object.fromEntries(o);""!==n.value&&""!==r.value?(localStorage.removeItem("feedback-form-state"),O.reset(),console.log(i)):alert("Fill up the fields first!")}));var h=JSON.parse(localStorage.getItem("feedback-form-state"));null!==h&&(w.value=h.email,S.value=h.message)}();
//# sourceMappingURL=03-feedback.14027f1c.js.map
