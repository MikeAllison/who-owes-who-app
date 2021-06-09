(()=>{"use strict";var t=function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cardId=e,this.merchantName=n,this.amount=r};function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)})(t)}function o(t,e,n){return(o=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return n&&i(c,n.prototype),c}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(f,t);var e,c,o,l,s=(e=f,c=a(),function(){var t,n=u(e);if(c){var o=u(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return r(this,t)});function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).renderHook=document.getElementById(t),e.cssClasses="ui striped two column green very compact small table",e}return o=f,(l=[{key:"render",value:function(t){var e=document.createElement("table");e.classList=this.cssClasses,t.forEach((function(t){var n=new Date(t.date),r=(1+n.getMonth()).toString().padStart(2,"0"),c=n.getDate().toString().padStart(2,"0"),o=n.getFullYear();e.innerHTML+="\n        <tr>\n          <td>".concat(t.merchant," - ").concat(r,"/").concat(c,"/").concat(o,'</td>\n          <td>\n            <i class="green money bill alternate outline icon"></i>\n            ').concat(t.purchaser," - $").concat(t.amount,"\n          </td>\n        </tr>")})),this.appendChild(e),this.renderHook.appendChild(this)}}])&&n(o.prototype,l),f}(c(HTMLElement));function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("active-transactions-table",l),(new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.API_URI="https://who-owes-who-api.herokuapp.com",this.merchantList=[],this.activeTransactions=[],this.merchantSelectField=document.getElementById("merchant-select-field"),this.merchantSelect=document.getElementById("merchant-select"),this.newMerchantField=document.getElementById("new-merchant-field"),this.newMerchantInput=document.getElementById("new-merchant-input"),this.merchantToggleBtn=document.getElementById("merchant-toggle-btn"),this.amountInput=document.getElementById("amount-input"),this.submitBtnSection=document.getElementById("submit-btn-section"),this.activeTransactionsTable=new l("active-transactions")}var n,r;return n=e,(r=[{key:"init",value:function(){var e=this;fetch("".concat(this.API_URI,"/transactions/active")).then((function(t){return t.json()})).then((function(t){t.forEach((function(t){t.transactions.forEach((function(n){n.purchaser=t.cardholder,e.activeTransactions.push(n)}))})),e.activeTransactions.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)})),e.activeTransactionsTable.render(e.activeTransactions)})).catch((function(t){return console.log(t)})),$("select.dropdown").dropdown(),fetch("".concat(this.API_URI,"/merchants")).then((function(t){return t.json()})).then((function(t){t.forEach((function(t){e.merchantList.push(t)}))})).then((function(){e.merchantList.forEach((function(t){var n=document.createElement("option");n.setAttribute("value",t.name),n.innerText=t.name,e.merchantSelect.appendChild(n)}))})).catch((function(t){return console.log(t)})),this.merchantToggleBtn.addEventListener("click",(function(t){t.preventDefault(),e.merchantSelectField.classList.toggle("hidden"),e.merchantSelect.value=null,e.merchantSelect.parentElement.childNodes[3].classList.add("default"),e.merchantSelect.parentElement.childNodes[4].childNodes.forEach((function(t){return t.classList.remove("active","selected")})),e.merchantSelect.parentElement.childNodes[3].innerText="Select Merchant",e.newMerchantField.classList.toggle("hidden"),e.newMerchantInput.value=null,e.merchantSelectField.classList.contains("hidden")?e.merchantToggleBtn.innerText="Existing Merchant":e.merchantToggleBtn.innerText="New Merchant"})),fetch("".concat(this.API_URI,"/cards")).then((function(t){return t.json()})).then((function(n){n.forEach((function(n){var r=document.createElement("button");r.classList="ui green button card-btn",r.dataset.cardId=n.id,r.innerText=n.id,e.submitBtnSection.appendChild(r),r.addEventListener("click",(function(n){var r=e.newMerchantInput.value?e.newMerchantInput.value:e.merchantSelect.value,c=new t(n.currentTarget.dataset.cardId,r,e.amountInput.value);console.dir(c),e.amountInput.value=null}))}))})).catch((function(t){return console.log(t)}))}}])&&s(n.prototype,r),e}())).init()})();