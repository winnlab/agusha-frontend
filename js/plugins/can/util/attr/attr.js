steal("can/util/can.js",function(t){var e=t.global.setImmediate||function(t){return setTimeout(t,0)},r={MutationObserver:t.global.MutationObserver||t.global.WebKitMutationObserver||t.global.MozMutationObserver,map:{"class":"className",value:"value",innertext:"innerText",textcontent:"textContent",checked:!0,disabled:!0,readonly:!0,required:!0,src:function(t,e){return null==e||""===e?(t.removeAttribute("src"),null):(t.setAttribute("src",e),e)},style:function(t,e){return t.style.cssText=e||""}},defaultValue:["input","textarea"],set:function(e,n,a){n=n.toLowerCase()
var u
r.MutationObserver||(u=r.get(e,n))
var i,o=(""+e.nodeName).toLowerCase(),l=r.map[n]
"function"==typeof l?i=l(e,a):l===!0?(i=e[n]=!0,"checked"===n&&"radio"===e.type&&t.inArray(o,r.defaultValue)>=0&&(e.defaultChecked=!0)):l?(i=a,e[l]!==a&&(e[l]=a),"value"===l&&t.inArray(o,r.defaultValue)>=0&&(e.defaultValue=a)):(e.setAttribute(n,a),i=a),r.MutationObserver||i===u||r.trigger(e,n,u)},trigger:function(r,n,a){return t.data(t.$(r),"canHasAttributesBindings")?(n=n.toLowerCase(),e(function(){t.trigger(r,{type:"attributes",attributeName:n,target:r,oldValue:a,bubbles:!1},[])})):void 0},get:function(t,e){e=e.toLowerCase()
var n=r.map[e]
return"string"==typeof n&&t[n]?t[n]:t.getAttribute(e)},remove:function(t,e){e=e.toLowerCase()
var n
r.MutationObserver||(n=r.get(t,e))
var a=r.map[e]
"function"==typeof a&&a(t,void 0),a===!0?t[e]=!1:"string"==typeof a?t[a]="":t.removeAttribute(e),r.MutationObserver||null==n||r.trigger(t,e,n)},has:function(){var e=t.global.document&&document.createElement("div")
return e&&e.hasAttribute?function(t,e){return t.hasAttribute(e)}:function(t,e){return null!==t.getAttribute(e)}}()}
return r})