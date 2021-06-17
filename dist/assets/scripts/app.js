(()=>{"use strict";var t=function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cardId=e,this.merchantName=n,this.amount=r};function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,e,n){return(c=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var e,o,c,l,s=(e=f,o=i(),function(){var t,n=u(e);if(o){var c=u(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return r(this,t)});function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).renderHook=document.getElementById(t),e.cssClasses="ui striped three column green very compact small single line table",e}return c=f,(l=[{key:"render",value:function(t){if(0===t.length)return this.innerHTML="\n        <p>No Transactions</p>\n      ",void this.renderHook.appendChild(this);t.sort((function(t,e){return Date.parse(e.enteredDate)-Date.parse(t.enteredDate)}));var e=document.createElement("table");e.classList=this.cssClasses;var n=document.createElement("tbody");t.forEach((function(t){var e=new Date(t.enteredDate),r=(1+e.getMonth()).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0"),c=e.getFullYear();n.innerHTML+="\n        <tr>\n          <td>\n            ".concat(t.merchantName," - ").concat(r,"/").concat(o,"/").concat(c,'\n          </td>\n          <td>\n            <i class="green money bill alternate outline icon"></i>\n            ').concat(t.purchaser," - $").concat(t.amount.toFixed(2),"\n          </td>\n          <td>\n            Status: ").concat(t.archived?"Archived":"Active","\n          </td>\n        </tr>")})),e.append(n),this.appendChild(e),this.renderHook.appendChild(this)}}])&&n(c.prototype,l),f}(o(HTMLElement));function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){var e="function"==typeof Map?new Map:void 0;return(y=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return m(t,arguments,g(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,t)})(t)}function m(t,e,n){return(m=b()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&v(o,n.prototype),o}).apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.define("recent-transactions-table",l);var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(i,t);var e,n,r,o,c=(e=i,n=b(),function(){var t,r=g(e);if(n){var o=g(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return d(this,t)});function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=c.call(this)).renderHook=document.getElementById(t),e}return r=i,(o=[{key:"render",value:function(t){var e=f(t.entries()).reduce((function(t,e){return e[1].transactionTotal>t[1].transactionTotal?e:t})),n=f(t.entries()).reduce((function(t,e){return e[1].transactionTotal<t[1].transactionTotal?e:t})),r=[];if(t.forEach((function(t){r.push(t.transactionTotal)})),r.every((function(t,e,n){return t===n[0]})))return this.innerHTML='\n        <h2 style="margin:0">\n          We\'re Even!\n        </h2>\n        <h3 style="margin-top:4px">\n          <i class="green thumbs up outline icon"></i>\n        </h3>',void this.renderHook.appendChild(this);this.innerHTML='\n      <h2 style="margin:0">\n        '.concat(n[0],'\n        <i class="right green triangle icon"></i>\n        ').concat(e[0],'\n      </h2>\n      <h3 style="margin-top:4px">\n        <i class="green money bill alternate icon"></i>\n        $').concat((e[1].transactionTotal-n[1].transactionTotal).toFixed(2),"\n      </h3>\n    "),this.renderHook.appendChild(this)}}])&&p(r.prototype,o),i}(y(HTMLElement));function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){var e="function"==typeof Map?new Map:void 0;return(M=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return O(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),j(r,t)})(t)}function O(t,e,n){return(O=I()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&j(o,n.prototype),o}).apply(null,arguments)}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.define("tally-section",w);var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(i,t);var e,n,r,o,c=(e=i,n=I(),function(){var t,r=_(e);if(n){var o=_(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return T(this,t)});function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=c.call(this)).renderHook=document.getElementById(t),e.innerHTML='\n      <div class="ui basic modal">\n        <div class="ui icon header"></div>\n        <div class="ui content" style="text-align: center"></div>\n        <div class="actions" style="text-align: center"></div>\n      </div>\n    ',e}return r=i,(o=[{key:"init",value:function(){this.renderHook.appendChild(this)}},{key:"setError",value:function(t){this.querySelector(".header").innerHTML='\n      <i class="orange exclamation triangle icon"></i>\n      There Was A Problem!\n    ',this.querySelector(".content").innerHTML="\n      <p>".concat(t,"</p>\n    "),this.querySelector(".actions").innerHTML='\n      <div class="ui orange ok inverted button">\n        <i class="checkmark icon"></i>\n        Go Back\n      </div>\n    '}},{key:"setConfirm",value:function(t,e){this.querySelector(".header").innerHTML='\n      <i class="green question circle outline icon"></i>\n      Submit the Following Transaction?\n    ',this.querySelector(".content").innerHTML='\n      <h3 style="color: var(--semantic-green)">Payee: '.concat(t,"</h3>\n      <p><strong>Merchant: </strong>").concat(e.merchantName,"</p>\n      <p><strong>Amount: </strong>$").concat(e.amount.toFixed(2),"</p>\n      <p><strong>Card: </strong>").concat(e.cardId,"</p>\n    "),this.querySelector(".actions").innerHTML='\n      <div class="ui red basic cancel inverted button">\n        <i class="remove icon"></i>\n        Cancel\n      </div>\n      <div class="ui green ok inverted button">\n        <i class="checkmark icon"></i>\n        Submit\n      </div>\n    '}}])&&E(r.prototype,o),i}(M(HTMLElement));function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("basic-modal",k),(new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.API_URI="https://who-owes-who-api.herokuapp.com",this.merchantList=[],this.recentTransactions=[],this.tally=new Map,this.merchantSelectField=document.getElementById("merchant-select-field"),this.merchantSelect=document.getElementById("merchant-select"),this.newMerchantField=document.getElementById("new-merchant-field"),this.newMerchantInput=document.getElementById("new-merchant-input"),this.merchantToggleBtn=document.getElementById("merchant-toggle-btn"),this.amountInput=document.getElementById("amount-input"),this.submitBtnSection=document.getElementById("submit-btn-section"),this.tallySection=new w("tally-section"),this.recentTransactionsTable=new l("recent-transactions"),this.basicModal=new k("basic-modal")}var n,r;return n=e,(r=[{key:"init",value:function(){var e=this;this.basicModal.init(),fetch("".concat(this.API_URI,"/transactions")).then((function(t){return t.json()})).then((function(t){t.forEach((function(t){e.tally.has(t.cardholder)||e.tally.set(t.cardholder,{transactionTotal:0}),t.transactions.forEach((function(n){n.purchaser=t.cardholder,e.recentTransactions.push(n),e.tally.get(t.cardholder).transactionTotal+=n.amount}))})),e.tallySection.render(e.tally),e.recentTransactionsTable.render(e.recentTransactions)})).catch((function(t){return console.log(t)})),$("select.dropdown").dropdown(),fetch("".concat(this.API_URI,"/merchants")).then((function(t){return t.json()})).then((function(t){t.forEach((function(t){e.merchantList.push(t)}))})).then((function(){e.merchantList.sort((function(t,e){var n=t.name.toUpperCase(),r=e.name.toUpperCase();return n<r?-1:n>r?1:0})),e.merchantList.forEach((function(t){var n=document.createElement("option");n.setAttribute("value",t.name),n.innerText=t.name,e.merchantSelect.appendChild(n)}))})).then((function(){e.merchantSelect.parentElement.classList.remove("loading")})).catch((function(t){return console.log(t)})),this.merchantToggleBtn.addEventListener("click",(function(t){t.preventDefault(),e.merchantSelectField.classList.toggle("hidden"),e.merchantSelect.value=null,e.merchantSelect.parentElement.childNodes[3].classList.add("default"),e.merchantSelect.parentElement.childNodes[4].childNodes.forEach((function(t){return t.classList.remove("active","selected")})),e.merchantSelect.parentElement.childNodes[3].innerText="Select Merchant",e.newMerchantField.classList.toggle("hidden"),e.newMerchantInput.value=null,e.merchantSelectField.classList.contains("hidden")?e.merchantToggleBtn.innerText="Existing Merchant":e.merchantToggleBtn.innerText="New Merchant"})),fetch("".concat(this.API_URI,"/cards")).then((function(t){return t.json()})).then((function(n){n.forEach((function(n){var r=document.createElement("button");r.classList="ui green button card-btn",r.dataset.cardId=n.id,r.dataset.cardholder=n.cardholder,r.innerText=n.id,e.submitBtnSection.appendChild(r),r.addEventListener("click",(function(n){var r=e.newMerchantInput.value?e.newMerchantInput.value:e.merchantSelect.value;try{if(!r)throw new Error("Missing Merchant");if(!e.amountInput.value)throw new Error("Missing Amount");var o=+(+e.amountInput.value).toFixed(2);if(!o>0)throw new Error("Amount Must Be More Than $0");if(isNaN(o))throw new Error("Amount Is Not A Number");if(!n.currentTarget.dataset.cardId)throw new Error("Missing Card ID");var c=n.target.dataset.cardholder,i=new t(n.currentTarget.dataset.cardId,r,o);e.basicModal.setConfirm(c,i),$(".ui.basic.modal").modal({closable:!1,detachable:!1,duration:200,onApprove:function(){fetch("".concat(e.API_URI,"/transactions"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(t){location.reload()})).catch((function(t){console.log(t),e.basicModal.setError(t.message),$(".ui.basic.modal").modal({closable:!1,detachable:!1,duration:200}).modal("show")}))}}).modal("show")}catch(t){e.basicModal.setError(t.message),$(".ui.basic.modal").modal({closable:!1,detachable:!1,duration:200}).modal("show")}}))}))})).catch((function(t){return console.log(t)}))}}])&&L(n.prototype,r),e}())).init()})();