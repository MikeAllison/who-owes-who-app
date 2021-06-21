(()=>{"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function r(t){var n="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return o(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function o(t,n,e){return(o=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(f,t);var r,o,u,l,s=(r=f,o=i(),function(){var t,n=a(r);if(o){var i=a(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return e(this,t)});function f(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(n=s.call(this)).renderHook=document.getElementById(t),n.cssClasses="ui striped three column green very compact small single line table",n.innerHTML="\n      <h2>Recent Transactions</h2>\n    ",n}return u=f,(l=[{key:"render",value:function(t){if(0===t.length)return this.innerHTML+="\n        <p>No Transactions</p>\n      ",void this.renderHook.appendChild(this);t.sort((function(t,n){return Date.parse(n.enteredDate)-Date.parse(t.enteredDate)}));var n=document.createElement("table");n.classList=this.cssClasses;var e=document.createElement("tbody");t.forEach((function(t){var n=new Date(t.enteredDate),r=(1+n.getMonth()).toString().padStart(2,"0"),o=n.getDate().toString().padStart(2,"0"),i=n.getFullYear();e.innerHTML+="\n        <tr class=".concat(t.archived?"disabled":"",'>\n          <td>\n            <i class="green money bill alternate outline icon"></i>\n            ').concat(t.merchantName," - ").concat(r,"/").concat(o,"/").concat(i,'\n          </td>\n          <td>\n            <i class="green user alternate outline icon"></i>\n            ').concat(t.purchaser," - $").concat(t.amount.toFixed(2),'\n          </td>\n          <td>\n            <i class="green save outline icon"></i>\n            ').concat(t.archived?"Archived":"Active","\n          </td>\n        </tr>")})),n.append(e),this.appendChild(n),this.renderHook.appendChild(this)}}])&&n(u.prototype,l),f}(r(HTMLElement));function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function h(t){var n="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return y(t,arguments,v(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),b(r,t)})(t)}function y(t,n,e){return(y=m()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&b(o,e.prototype),o}).apply(null,arguments)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function b(t,n){return(b=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.define("recent-transactions-table",u);var g=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&b(t,n)}(c,t);var n,e,r,o,i=(n=c,e=m(),function(){var t,r=v(n);if(e){var o=v(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return d(this,t)});function c(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this)).renderHook=document.getElementById(t),n}return r=c,(o=[{key:"render",value:function(t){var n=s(t.entries()).reduce((function(t,n){return n[1].transactionTotal>t[1].transactionTotal?n:t})),e=s(t.entries()).reduce((function(t,n){return n[1].transactionTotal<t[1].transactionTotal?n:t})),r=[];if(t.forEach((function(t){r.push(t.transactionTotal)})),r.every((function(t,n,e){return t===e[0]})))return this.innerHTML='\n        <h2 style="margin:0">\n          We\'re Even!\n        </h2>\n        <h3 style="margin-top:4px">\n          <i class="green thumbs up outline icon"></i>\n        </h3>',void this.renderHook.appendChild(this);this.innerHTML='\n      <h2 style="margin:0">\n        '.concat(e[0],'\n        <i class="right green triangle icon"></i>\n        ').concat(n[0],'\n      </h2>\n      <h3 style="margin-top:4px">\n        <i class="green money bill alternate icon"></i>\n        $').concat((n[1].transactionTotal-e[1].transactionTotal).toFixed(2),"\n      </h3>\n    "),this.renderHook.appendChild(this)}}])&&p(r.prototype,o),c}(h(HTMLElement));function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t,n){return!n||"object"!==w(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function M(t){var n="function"==typeof Map?new Map:void 0;return(M=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return E(t,arguments,P(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),j(r,t)})(t)}function E(t,n,e){return(E=O()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&j(o,e.prototype),o}).apply(null,arguments)}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function j(t,n){return(j=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.define("tally-section",g);var _=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&j(t,n)}(c,t);var n,e,r,o,i=(n=c,e=O(),function(){var t,r=P(n);if(e){var o=P(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return T(this,t)});function c(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this)).renderHook=document.getElementById(t),n.innerHTML='\n      <div class="ui basic modal">\n        <div class="ui icon header"></div>\n        <div class="ui content" style="text-align: center"></div>\n        <div class="actions" style="text-align: center"></div>\n      </div>\n    ',n}return r=c,(o=[{key:"init",value:function(){this.renderHook.appendChild(this)}},{key:"setError",value:function(t){this.querySelector(".header").innerHTML='\n      <i class="orange exclamation triangle icon"></i>\n      There Was A Problem!\n    ',this.querySelector(".content").innerHTML="\n      <p>".concat(t,"</p>\n    "),this.querySelector(".actions").innerHTML='\n      <div class="ui orange ok inverted button">\n        <i class="checkmark icon"></i>\n        Go Back\n      </div>\n    '}},{key:"setConfirm",value:function(t,n){this.querySelector(".header").innerHTML='\n      <i class="green question circle outline icon"></i>\n      Submit the Following Transaction?\n    ',this.querySelector(".content").innerHTML='\n      <h3 style="color: var(--semantic-green)">Payee: '.concat(t,"</h3>\n      <p><strong>Merchant: </strong>").concat(n.merchantName,"</p>\n      <p><strong>Amount: </strong>$").concat(n.amount.toFixed(2),"</p>\n      <p><strong>Card: </strong>").concat(n.cardId,"</p>\n    "),this.querySelector(".actions").innerHTML='\n      <div class="ui red basic cancel inverted button">\n        <i class="remove icon"></i>\n        Cancel\n      </div>\n      <div class="ui green ok inverted button">\n        <i class="checkmark icon"></i>\n        Submit\n      </div>\n    '}}])&&S(r.prototype,o),c}(M(HTMLElement));customElements.define("basic-modal",_);var L=function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.cardId=n,this.merchantName=e,this.amount=r};function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,n){return!n||"object"!==I(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function H(t){var n="function"==typeof Map?new Map:void 0;return(H=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return x(t,arguments,B(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),A(r,t)})(t)}function x(t,n,e){return(x=C()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&A(o,e.prototype),o}).apply(null,arguments)}function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function A(t,n){return(A=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var F=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&A(t,n)}(c,t);var n,e,r,o,i=(n=c,e=C(),function(){var t,r=B(n);if(e){var o=B(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return k(this,t)});function c(t,n,e){var r;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this)).API_URI=t,r.appModal=n,r.renderHook=document.getElementById(e),r.innerHTML='\n      <h2>Transaction Details</h2>\n      <form class="ui form">\n        <div class="field" id="merchant-select-field">\n          <select\n            name="merchant-select"\n            id="merchant-select"\n            class="ui search loading dropdown"\n          >\n            <option value="">Select Merchant</option>\n          </select>\n        </div>\n        <div class="display-hidden field" id="new-merchant-field">\n          <div class="ui fluid left icon input">\n            <input placeholder="Merchant Name" id="new-merchant-input" />\n            <i class="cart plus icon"></i>\n          </div>\n        </div>\n        <div class="field">\n          <button class="ui green basic button" id="merchant-toggle-btn">\n            <i class="green cart plus icon"></i>\n            New Merchant\n          </button>\n        </div>\n        <div class="field">\n          <div class="ui labeled fluid input">\n            <label for="amount-input" class="ui label">$</label>\n            <input\n              inputmode="decimal"\n              placeholder="Amount"\n              id="amount-input"\n            />\n          </div>\n        </div>\n      </form>\n      <section class="ui green center aligned segment">\n        <h2>Select Card</h2>\n        <div class="spaced" id="submit-btn-section"></div>\n      </section>\n    ',r.merchantSelectField=r.querySelector("#merchant-select-field"),r.merchantSelect=r.querySelector("#merchant-select"),r.newMerchantField=r.querySelector("#new-merchant-field"),r.newMerchantInput=r.querySelector("#new-merchant-input"),r.merchantToggleBtn=r.querySelector("#merchant-toggle-btn"),r.amountInput=r.querySelector("#amount-input"),r.submitBtnSection=r.querySelector("#submit-btn-section"),r}return r=c,(o=[{key:"render",value:function(t,n){var e=this;t.sort((function(t,n){var e=t.name.toUpperCase(),r=n.name.toUpperCase();return e<r?-1:e>r?1:0})),t.forEach((function(t){var n=document.createElement("option");n.setAttribute("value",t.name),n.innerText=t.name,e.merchantSelect.appendChild(n)})),this.merchantToggleBtn.addEventListener("click",(function(t){t.preventDefault(),e.merchantSelectField.classList.toggle("display-hidden"),e.merchantSelect.value=null,e.merchantSelect.parentElement.childNodes[3].classList.add("default"),e.merchantSelect.parentElement.childNodes[4].childNodes.forEach((function(t){return t.classList.remove("active","selected")})),e.merchantSelect.parentElement.childNodes[3].innerText="Select Merchant",e.newMerchantField.classList.toggle("display-hidden"),e.newMerchantInput.value=null,e.merchantSelectField.classList.contains("display-hidden")?e.merchantToggleBtn.innerHTML='\n          <i class="shopping cart icon"></i>\n          Existing Merchant\'\n        ':e.merchantToggleBtn.innerHTML='\n        <i class="cart plus icon"></i>\n          New Merchant\n        '})),n.forEach((function(t){var n=document.createElement("button");n.classList="ui green button card-btn",n.dataset.cardId=t.id,n.dataset.cardholder=t.cardholder,n.innerHTML='<i class="credit card outline icon"></i> '.concat(t.id),e.submitBtnSection.appendChild(n),n.addEventListener("click",(function(t){var n=e.newMerchantInput.value?e.newMerchantInput.value:e.merchantSelect.value;try{if(!n)throw new Error("Missing Merchant");if(!e.amountInput.value)throw new Error("Missing Amount");var r=+(+e.amountInput.value).toFixed(2);if(isNaN(r))throw new Error("Amount Is Not A Number");if(!r>0)throw new Error("Amount Must Be More Than $0");if(!t.currentTarget.dataset.cardId)throw new Error("Missing Card ID");var o=t.target.dataset.cardholder,i=new L(t.currentTarget.dataset.cardId,n,r);e.appModal.setConfirm(o,i),$(e.appModal.children[0]).modal({closable:!1,detachable:!1,duration:200,onApprove:function(){fetch("".concat(e.API_URI,"/transactions"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(t){location.reload()})).catch((function(t){e.basicModal.setError(t.message),$(e.appModal.children[0]).modal({closable:!1,detachable:!1,duration:200}).modal("show")}))}}).modal("show")}catch(t){e.appModal.setError(t.message),$(e.appModal.children[0]).modal({closable:!1,detachable:!1,duration:200}).modal("show")}}))})),$(this.merchantSelect).dropdown(),this.renderHook.appendChild(this),this.merchantSelect.parentElement.classList.remove("loading")}}])&&R(r.prototype,o),c}(H(HTMLElement));function N(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("transaction-form",F),(new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.API_URI="https://who-owes-who-api.herokuapp.com",this.merchantList=[],this.cardList=[],this.recentTransactions=[],this.tally=new Map,this.loadingMessage=document.getElementById("loading-message"),this.basicModal=new _("basic-modal"),this.tallySection=new g("tally-section"),this.transactionForm=new F(this.API_URI,this.basicModal,"transaction-form"),this.recentTransactionsTable=new u("recent-transactions")}var n,e;return n=t,(e=[{key:"init",value:function(){var t=this;this.basicModal.init();var n=new Promise((function(n,e){fetch("".concat(t.API_URI,"/transactions")).then((function(t){return t.json()})).then((function(e){e.forEach((function(n){t.tally.has(n.cardholder)||t.tally.set(n.cardholder,{transactionTotal:0}),n.transactions.forEach((function(e){e.purchaser=n.cardholder,t.recentTransactions.push(e),t.tally.get(n.cardholder).transactionTotal+=e.amount}))})),n()})).catch((function(t){e(),console.log(t)}))})),e=new Promise((function(n,e){fetch("".concat(t.API_URI,"/merchants")).then((function(t){return t.json()})).then((function(e){e.forEach((function(n){t.merchantList.push(n)})),n()})).catch((function(t){e(),console.log(t)}))})),r=new Promise((function(n,e){fetch("".concat(t.API_URI,"/cards")).then((function(t){return t.json()})).then((function(e){e.forEach((function(n){t.cardList.push(n)})),n()})).catch((function(t){e(),console.log(t)}))}));Promise.all([n,e,r]).then((function(){t.loadingMessage.classList.add("display-hidden"),t.tallySection.render(t.tally),t.transactionForm.render(t.merchantList,t.cardList),t.recentTransactionsTable.render(t.recentTransactions)})).catch((function(t){return console.log(t)}))}}])&&N(n.prototype,e),t}())).init()})();