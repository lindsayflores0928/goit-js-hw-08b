function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function j(e){return l=e,u=setTimeout(O,t),c?y(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function O(){var e=v();if(w(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function h(e){return u=void 0,p&&r?y(e):(r=o=void 0,a)}function S(){var e=v(),n=w(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=g(t)||0,b(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:h(v())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j=document.querySelector("input"),w=document.querySelector("textarea");y.addEventListener("input",e(t)((()=>{const e=new FormData(y),t=Object.fromEntries(e);localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.addEventListener("submit",(e=>{e.preventDefault();const{email:t,message:n}=e.target,r=new FormData(y),o=Object.fromEntries(r);""!==t.value&&""!==n.value?(localStorage.removeItem("feedback-form-state"),y.reset(),console.log(o)):alert("Fill up the fields first!")}));let O=JSON.parse(localStorage.getItem("feedback-form-state"));null!==O&&(j.value=O.email,w.value=O.message);
//# sourceMappingURL=03-feedback.1272a71a.js.map
