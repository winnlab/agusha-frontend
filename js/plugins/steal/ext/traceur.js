!function(e){"use strict"
function t(e,t,r){for(var n=[t],i=0;i<r.length;i++)n[i+1]=r[i]
var s=A(Function.prototype.bind,e,n)
return s}function r(e,r){var n=new(t(e,null,r))
return n}function n(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++R+"$__"}function i(e){return x[e]}function s(){var e=n()
return x[e]=!0,e}function a(e,t,r){return[w,e,t,r]}function o(e){return e&&e[0]===w}function c(){C=s(),Function.prototype.call=u(function(){var e=p(function(e){for(var t=[],r=1;r<arguments.length;++r)t[r-1]=arguments[r]
var n=a(this,e,t)
return n},this,arguments)
return e}),Function.prototype.apply=u(function(){var e=p(function(e,t){var r=a(this,e,t)
return r},this,arguments)
return e})}function u(e){return null===C&&c(),e[C]=!0,e}function l(e){return!!e[C]}function p(e,t,r){var n=r[0]
if(o(n))return n=A(e,t,n[3])
for(n=a(e,t,r);;){if(n=l(e)?A(e,n[2],[n]):A(e,n[2],n[3]),!o(n))return n
e=n[1]}}function f(){var e
return e=l(this)?r(this,[a(null,null,arguments)]):r(this,arguments)}if(!e.$traceurRuntime){var h=Object,m=TypeError,d=h.create,g=h.defineProperties,y=h.defineProperty,_=h.freeze,S=h.getOwnPropertyDescriptor,v=h.getOwnPropertyNames,b=h.keys,T=h.prototype.hasOwnProperty,j=(h.prototype.toString,Object.preventExtensions),E=Object.seal,O=Object.isExtensible,A=Function.prototype.call.bind(Function.prototype.apply),R=0,x=d(null),w=Object.create(null),C=null
!function(){function t(e){return{configurable:!0,enumerable:!1,value:e,writable:!0}}function r(e){return"object"==typeof e&&e instanceof l}function o(e){return r(e)?"symbol":typeof e}function c(e){var t=new l(e)
if(!(this instanceof c))return t
throw new TypeError("Symbol cannot be new'ed")}function l(e){var t=n()
y(this,q,{value:this}),y(this,Q,{value:t}),y(this,K,{value:e}),R(this),J[t]=this}function A(e){var t=e[Z]
return t&&t.self===e?t:O(e)?(te.hash.value=re++,te.self.value=e,ee.value=d(null,te),y(e,Z,ee),ee.value):void 0}function R(e){return A(e),_.apply(this,arguments)}function w(e){return A(e),j.apply(this,arguments)}function C(e){return A(e),E.apply(this,arguments)}function P(e){return J[e]||x[e]}function L(e){return r(e)?e[Q]:e}function I(e){for(var t=[],r=0;r<e.length;r++)P(e[r])||t.push(e[r])
return t}function N(e){return I(v(e))}function M(e){return I(b(e))}function k(e){for(var t=[],r=v(e),n=0;n<r.length;n++){var i=J[r[n]]
i&&t.push(i)}return t}function F(e,t){return S(e,L(t))}function $(e){return T.call(this,L(e))}function B(t){return e.$traceurRuntime.options[t]}function D(e,t,n){return r(t)&&(t=t[Q]),y(e,t,n),e}function V(e){y(e,"defineProperty",{value:D}),y(e,"getOwnPropertyNames",{value:N}),y(e,"getOwnPropertyDescriptor",{value:F}),y(e.prototype,"hasOwnProperty",{value:$}),y(e,"freeze",{value:R}),y(e,"preventExtensions",{value:w}),y(e,"seal",{value:C}),y(e,"keys",{value:M})}function G(e){for(var t=1;t<arguments.length;t++)for(var r=v(arguments[t]),n=0;n<r.length;n++){var i=r[n]
P(i)||!function(t,r){y(e,r,{get:function(){return t[r]},enumerable:!0})}(arguments[t],r[n])}return e}function U(e){return null!=e&&("object"==typeof e||"function"==typeof e)}function z(e){if(null==e)throw m()
return h(e)}function H(e){if(null==e)throw new TypeError("Value cannot be converted to an Object")
return e}function Y(e,t){e.Symbol||(e.Symbol=t,Object.getOwnPropertySymbols=k),e.Symbol.iterator||(e.Symbol.iterator=t("Symbol.iterator")),e.Symbol.observer||(e.Symbol.observer=t("Symbol.observer"))}function X(e){Y(e,c),e.Reflect=e.Reflect||{},e.Reflect.global=e.Reflect.global||e,V(e.Object)}var W=t,Q=n(),K=n(),q=n(),J=d(null)
y(c.prototype,"constructor",t(c)),y(c.prototype,"toString",W(function(){var e=this[q]
return e[Q]})),y(c.prototype,"valueOf",W(function(){var e=this[q]
if(!e)throw TypeError("Conversion from symbol to string")
return B("symbols")?e:e[Q]})),y(l.prototype,"constructor",t(c)),y(l.prototype,"toString",{value:c.prototype.toString,enumerable:!1}),y(l.prototype,"valueOf",{value:c.prototype.valueOf,enumerable:!1})
var Z=s(),ee={value:void 0},te={hash:{value:void 0},self:{value:void 0}},re=0
R(l.prototype),X(e),e.$traceurRuntime={call:p,checkObjectCoercible:H,construct:f,continuation:a,createPrivateName:s,defineProperties:g,defineProperty:y,exportStar:G,getOwnHashObject:A,getOwnPropertyDescriptor:S,getOwnPropertyNames:v,initTailRecursiveFunction:u,isObject:U,isPrivateName:i,isSymbolString:P,keys:b,options:{},setupGlobals:X,toObject:z,toProperty:L,"typeof":o}}()}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),function(){function e(e,t,r,n,i,s,a){var o=[]
return e&&o.push(e,":"),r&&(o.push("//"),t&&o.push(t,"@"),o.push(r),n&&o.push(":",n)),i&&o.push(i),s&&o.push("?",s),a&&o.push("#",a),o.join("")}function t(e){return e.match(o)}function r(e){if("/"===e)return"/"
for(var t="/"===e[0]?"/":"",r="/"===e.slice(-1)?"/":"",n=e.split("/"),i=[],s=0,a=0;a<n.length;a++){var o=n[a]
switch(o){case"":case".":break
case"..":i.length?i.pop():s++
break
default:i.push(o)}}if(!t){for(;s-->0;)i.unshift("..")
0===i.length&&i.push(".")}return t+i.join("/")+r}function n(t){var n=t[c.PATH]||""
return n=r(n),t[c.PATH]=n,e(t[c.SCHEME],t[c.USER_INFO],t[c.DOMAIN],t[c.PORT],t[c.PATH],t[c.QUERY_DATA],t[c.FRAGMENT])}function i(e){var r=t(e)
return n(r)}function s(e,r){var i=t(r),s=t(e)
if(i[c.SCHEME])return n(i)
i[c.SCHEME]=s[c.SCHEME]
for(var a=c.SCHEME;a<=c.PORT;a++)i[a]||(i[a]=s[a])
if("/"==i[c.PATH][0])return n(i)
var o=s[c.PATH],u=o.lastIndexOf("/")
return o=o.slice(0,u+1)+i[c.PATH],i[c.PATH]=o,n(i)}function a(e){if(!e)return!1
if("/"===e[0])return!0
var r=t(e)
return r[c.SCHEME]?!0:!1}var o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),c={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7}
$traceurRuntime.canonicalizeUrl=i,$traceurRuntime.isAbsolute=a,$traceurRuntime.removeDotSegments=r,$traceurRuntime.resolveUrl=s}(),function(e){"use strict"
function t(e,t){this.url=e,this.value_=t}function r(e,t){this.message=this.constructor.name+": "+this.stripCause(t)+" in "+e,t instanceof r||!t.stack?this.stack="":this.stack=this.stripStack(t.stack)}function n(e,t){var r=[],n=t-3
0>n&&(n=0)
for(var i=n;t>i;i++)r.push(e[i])
return r}function i(e,t){var r=t+1
r>e.length-1&&(r=e.length-1)
for(var n=[],i=t;r>=i;i++)n.push(e[i])
return n}function s(e){for(var t="",r=0;e-1>r;r++)t+="-"
return t}function a(e,r){t.call(this,e,null),this.func=r}function o(e){if(e){var t=y.normalize(e)
return m[t]}}function c(e){var t=arguments[1],r=Object.create(null)
return Object.getOwnPropertyNames(e).forEach(function(n){var i,s
if(t===g){var a=Object.getOwnPropertyDescriptor(e,n)
a.get&&(i=a.get)}i||(s=e[n],i=function(){return s}),Object.defineProperty(r,n,{get:i,enumerable:!0})}),Object.preventExtensions(r),r}var u,l=$traceurRuntime,p=l.canonicalizeUrl,f=l.resolveUrl,h=l.isAbsolute,m=Object.create(null)
u=e.location&&e.location.href?f(e.location.href,"./"):"",r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.stripError=function(e){return e.replace(/.*Error:/,this.constructor.name+":")},r.prototype.stripCause=function(e){return e?e.message?this.stripError(e.message):e+"":""},r.prototype.loadedBy=function(e){this.stack+="\n loaded by "+e},r.prototype.stripStack=function(e){var t=[]
return e.split("\n").some(function(e){return/UncoatedModuleInstantiator/.test(e)?!0:void t.push(e)}),t[0]=this.stripError(t[0]),t.join("\n")},a.prototype=Object.create(t.prototype),a.prototype.getUncoatedModule=function(){if(this.value_)return this.value_
try{var t
return void 0!==typeof $traceurRuntime&&$traceurRuntime.require&&(t=$traceurRuntime.require.bind(null,this.url)),this.value_=this.func.call(e,t)}catch(a){if(a instanceof r)throw a.loadedBy(this.url),a
if(a.stack){var o=(""+this.func).split("\n"),c=[]
a.stack.split("\n").some(function(e){if(e.indexOf("UncoatedModuleInstantiator.getUncoatedModule")>0)return!0
var t=/(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(e)
if(t){var r=parseInt(t[2],10)
c=c.concat(n(o,r)),c.push(s(t[3])+"^"),c=c.concat(i(o,r)),c.push("= = = = = = = = =")}else c.push(e)}),a.stack=c.join("\n")}throw new r(this.url,a)}}
var d=Object.create(null),g={},y={normalize:function(e,t){if("string"!=typeof e)throw new TypeError("module name must be a string, not "+typeof e)
if(h(e))return p(e)
if(/[^\.]\/\.\.\//.test(e))throw Error("module name embeds /../: "+e)
return"."===e[0]&&t?f(t,e):p(e)},get:function(e){var t=o(e)
if(!t)return void 0
var r=d[t.url]
return r?r:(r=c(t.getUncoatedModule(),g),d[t.url]=r)},set:function(e,t){e+="",m[e]=new a(e,function(){return t}),d[e]=t},get baseURL(){return u},set baseURL(e){u=e+""},registerModule:function(e,t,r){var n=y.normalize(e)
if(m[n])throw Error("duplicate module named "+n)
m[n]=new a(n,r)},bundleStore:Object.create(null),register:function(e,t,r){t&&(t.length||r.length)?this.bundleStore[e]={deps:t,execute:function(){var e=arguments,n={}
t.forEach(function(t,r){return n[t]=e[r]})
var i=r.call(this,n)
return i.execute.call(this),i.exports}}:this.registerModule(e,t,r)},getAnonymousModule:function(t){return new c(t.call(e),g)},getForTesting:function(e){var t=this
return this.testingPrefix_||Object.keys(d).some(function(e){var r=/(traceur@[^\/]*\/)/.exec(e)
return r?(t.testingPrefix_=r[1],!0):void 0}),this.get(this.testingPrefix_+e)}},_=new c({ModuleStore:y})
y.set("@traceur/src/runtime/ModuleStore",_),y.set("@traceur/src/runtime/ModuleStore.js",_)
var S=$traceurRuntime.setupGlobals
$traceurRuntime.setupGlobals=function(e){S(e)},$traceurRuntime.ModuleStore=y,e.System={register:y.register.bind(y),registerModule:y.registerModule.bind(y),get:y.get,set:y.set,normalize:y.normalize},$traceurRuntime.getModuleImpl=function(e){var t=o(e)
return t&&t.getUncoatedModule()}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),System.registerModule("traceur@0.0.87/src/runtime/async.js",[],function(){"use strict"
function e(){}function t(){}function r(e){return e.prototype=u(t.prototype),e.__proto__=t,e}function n(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i=u(t.prototype)
return i[l]=this,i[p]=r,i[f]=e,i}function i(e,t){return new Promise(function(r,n){var i=e({next:function(e){return t.call(i,e)},"throw":function(e){n(e)},"return":function(e){r(e)}})})}function s(e){return Promise.resolve().then(e)}function a(e,t){return new g(e,t)}if("object"!=typeof $traceurRuntime)throw Error("traceur runtime not found.")
var o=$traceurRuntime.createPrivateName,c=$traceurRuntime.defineProperty,u=($traceurRuntime.defineProperties,Object.create),l=o(),p=o(),f=o()
e.prototype=t,t.constructor=e,c(t,"constructor",{enumerable:!1})
var h=function(e){var t=this
this.decoratedObserver=$traceurRuntime.createDecoratedGenerator(e,function(){t.done=!0}),this.done=!1,this.inReturn=!1}
$traceurRuntime.createClass(h,{"throw":function(e){if(!this.inReturn)throw e},"yield":function(e){if(this.done)throw void(this.inReturn=!0)
var t
try{t=this.decoratedObserver.next(e)}catch(r){throw this.done=!0,r}if(void 0!==t){if(t.done)throw this.done=!0,void(this.inReturn=!0)
return t.value}},yieldFor:function(e){var t=this
return $traceurRuntime.observeForEach(e[$traceurRuntime.toProperty(Symbol.observer)].bind(e),function(e){if(t.done)return void this["return"]()
var r
try{r=t.decoratedObserver.next(e)}catch(n){throw t.done=!0,n}if(void 0!==r)return r.done&&(t.done=!0),r})}},{}),t.prototype[Symbol.observer]=function(e){var t=this[f],r=new h(e)
return $traceurRuntime.schedule(function(){return t(r)}).then(function(e){r.done||r.decoratedObserver["return"](e)})["catch"](function(e){r.done||r.decoratedObserver["throw"](e)}),r.decoratedObserver},c(t.prototype,Symbol.observer,{enumerable:!1})
var m=Symbol(),d=Symbol(),g=function(e,t){this[m]=e,this[d]=t}
return $traceurRuntime.createClass(g,{next:function(e){var t=this[m].next(e)
return void 0!==t&&t.done&&this[d].call(this),t},"throw":function(e){return this[d].call(this),this[m]["throw"](e)},"return":function(e){return this[d].call(this),this[m]["return"](e)}},{}),$traceurRuntime.initAsyncGeneratorFunction=r,$traceurRuntime.createAsyncGeneratorInstance=n,$traceurRuntime.observeForEach=i,$traceurRuntime.schedule=s,$traceurRuntime.createDecoratedGenerator=a,{}}),System.registerModule("traceur@0.0.87/src/runtime/classes.js",[],function(){"use strict"
function e(e,t){var r=h(e)
do{var n=f(r,t)
if(n)return n
r=h(r)}while(r)
return void 0}function t(e){return e.__proto__}function r(t,r,n){var i=e(r,n)
return i?i.get?i.get.call(t):i.value:void 0}function n(t,r,n,i){var s=e(r,n)
if(s&&s.set)return s.set.call(t,i),i
throw c("super has no setter '"+n+"'.")}function i(e){for(var t={},r=d(e),n=0;n<r.length;n++){var i=r[n]
t[i]=f(e,i)}for(var s=g(e),n=0;n<s.length;n++){var a=s[n]
t[$traceurRuntime.toProperty(a)]=f(e,$traceurRuntime.toProperty(a))}return t}function s(e,t,r,n){return p(t,"constructor",{value:e,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof n&&(e.__proto__=n),e.prototype=u(a(n),i(t))):e.prototype=t,p(e,"prototype",{configurable:!1,writable:!1}),l(e,i(r))}function a(e){if("function"==typeof e){var t=e.prototype
if(o(t)===t||null===t)return e.prototype
throw new c("super prototype must be an Object or null")}if(null===e)return null
throw new c("Super expression must either be null or a function, not "+typeof e+".")}var o=Object,c=TypeError,u=o.create,l=$traceurRuntime.defineProperties,p=$traceurRuntime.defineProperty,f=$traceurRuntime.getOwnPropertyDescriptor,h=($traceurRuntime.getOwnPropertyNames,Object.getPrototypeOf),m=Object,d=m.getOwnPropertyNames,g=m.getOwnPropertySymbols
return $traceurRuntime.createClass=s,$traceurRuntime.superConstructor=t,$traceurRuntime.superGet=r,$traceurRuntime.superSet=n,{}}),System.registerModule("traceur@0.0.87/src/runtime/destructuring.js",[],function(){"use strict"
function e(e){for(var t,r=[],n=0;!(t=e.next()).done;)r[n++]=t.value
return r}return $traceurRuntime.iteratorToArray=e,{}}),System.registerModule("traceur@0.0.87/src/runtime/generators.js",[],function(){"use strict"
function e(e){return{configurable:!0,enumerable:!1,value:e,writable:!0}}function t(e){return Error("Traceur compiler bug: invalid state in state machine: "+e)}function r(){this.state=0,this.GState=y,this.storedException=void 0,this.finallyFallThrough=void 0,this.sent_=void 0,this.returnValue=void 0,this.oldReturnValue=void 0,this.tryStack_=[]}function n(e,t,r,n){switch(e.GState){case _:throw Error('"'+r+'" on executing generator')
case v:if("next"==r)return{value:void 0,done:!0}
if(n===j)return{value:e.returnValue,done:!0}
throw n
case y:if("throw"===r){if(e.GState=v,n===j)return{value:e.returnValue,done:!0}
throw n}if(void 0!==n)throw g("Sent value to newborn generator")
case S:e.GState=_,e.action=r,e.sent=n
var i
try{i=t(e)}catch(s){if(s!==j)throw s
i=e}var a=i===e
return a&&(i=e.returnValue),e.GState=a?v:S,{value:i,done:a}}}function i(){}function s(){}function a(e,t,n){var i=l(e,n),s=new r,a=d(t.prototype)
return a[E]=s,a[O]=i,a}function o(e){return e.prototype=d(s.prototype),e.__proto__=s,e}function c(){r.call(this),this.err=void 0
var e=this
e.result=new Promise(function(t,r){e.resolve=t,e.reject=r})}function u(e,t){var r=l(e,t),n=new c
return n.createCallback=function(e){return function(t){n.state=e,n.value=t,r(n)}},n.errback=function(e){p(n,e),r(n)},r(n),n.result}function l(e,t){return function(r){for(;;)try{return e.call(t,r)}catch(n){p(r,n)}}}function p(e,t){e.storedException=t
var r=e.tryStack_[e.tryStack_.length-1]
return r?(e.state=void 0!==r["catch"]?r["catch"]:r["finally"],void(void 0!==r.finallyFallThrough&&(e.finallyFallThrough=r.finallyFallThrough))):void e.handleException(t)}if("object"!=typeof $traceurRuntime)throw Error("traceur runtime not found.")
var f=$traceurRuntime.createPrivateName,h=$traceurRuntime.defineProperties,m=$traceurRuntime.defineProperty,d=Object.create,g=TypeError,y=0,_=1,S=2,v=3,b=-2,T=-3,j={}
r.prototype={pushTry:function(e,t){if(null!==t){for(var r=null,n=this.tryStack_.length-1;n>=0;n--)if(void 0!==this.tryStack_[n]["catch"]){r=this.tryStack_[n]["catch"]
break}null===r&&(r=T),this.tryStack_.push({"finally":t,finallyFallThrough:r})}null!==e&&this.tryStack_.push({"catch":e})},popTry:function(){this.tryStack_.pop()},maybeUncatchable:function(){if(this.storedException===j)throw j},get sent(){return this.maybeThrow(),this.sent_},set sent(e){this.sent_=e},get sentIgnoreThrow(){return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",this.sent_},end:function(){switch(this.state){case b:return this
case T:throw this.storedException
default:throw t(this.state)}},handleException:function(e){throw this.GState=v,this.state=b,e},wrapYieldStar:function(e){var t=this
return{next:function(t){return e.next(t)},"throw":function(r){var n
if(r===j){if(e["return"]){if(n=e["return"](t.returnValue),!n.done)return t.returnValue=t.oldReturnValue,n
t.returnValue=n.value}throw r}if(e["throw"])return e["throw"](r)
throw e["return"]&&e["return"](),g("Inner iterator does not have a throw method")}}}}
var E=f(),O=f()
return i.prototype=s,m(s,"constructor",e(i)),s.prototype={constructor:s,next:function(e){return n(this[E],this[O],"next",e)},"throw":function(e){return n(this[E],this[O],"throw",e)},"return":function(e){return this[E].oldReturnValue=this[E].returnValue,this[E].returnValue=e,n(this[E],this[O],"throw",j)}},h(s.prototype,{constructor:{enumerable:!1},next:{enumerable:!1},"throw":{enumerable:!1},"return":{enumerable:!1}}),Object.defineProperty(s.prototype,Symbol.iterator,e(function(){return this})),c.prototype=d(r.prototype),c.prototype.end=function(){switch(this.state){case b:this.resolve(this.returnValue)
break
case T:this.reject(this.storedException)
break
default:this.reject(t(this.state))}},c.prototype.handleException=function(){this.state=T},$traceurRuntime.asyncWrap=u,$traceurRuntime.initGeneratorFunction=o,$traceurRuntime.createGeneratorInstance=a,{}}),System.registerModule("traceur@0.0.87/src/runtime/relativeRequire.js",[],function(){"use strict"
function e(e,r){function n(e){return"/"===e.slice(-1)}function i(e){return"/"===e[0]}function s(e){return"."===e[0]}return t=t||"undefined"!=typeof require&&require("path"),n(r)||i(r)?void 0:require(s(r)?t.resolve(t.dirname(e),r):r)}var t
return $traceurRuntime.require=e,{}}),System.registerModule("traceur@0.0.87/src/runtime/spread.js",[],function(){"use strict"
function e(){for(var e,t=[],r=0,n=0;n<arguments.length;n++){var i=$traceurRuntime.checkObjectCoercible(arguments[n])
if("function"!=typeof i[$traceurRuntime.toProperty(Symbol.iterator)])throw new TypeError("Cannot spread non-iterable object.")
for(var s=i[$traceurRuntime.toProperty(Symbol.iterator)]();!(e=s.next()).done;)t[r++]=e.value}return t}return $traceurRuntime.spread=e,{}}),System.registerModule("traceur@0.0.87/src/runtime/type-assertions.js",[],function(){"use strict"
function e(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i]
var s=n,a=$traceurRuntime.getOwnHashObject(e).hash
s[a]||(s[a]=Object.create(null)),s=s[a]
for(var o=0;o<t.length-1;o++)a=$traceurRuntime.getOwnHashObject(t[o]).hash,s[a]||(s[a]=Object.create(null)),s=s[a]
var c=t[t.length-1]
return a=$traceurRuntime.getOwnHashObject(c).hash,s[a]||(s[a]=new r(e,t)),s[a]}var t={any:{name:"any"},"boolean":{name:"boolean"},number:{name:"number"},string:{name:"string"},symbol:{name:"symbol"},"void":{name:"void"}},r=function(e,t){this.type=e,this.argumentTypes=t}
$traceurRuntime.createClass(r,{},{})
var n=Object.create(null)
return $traceurRuntime.GenericType=r,$traceurRuntime.genericType=e,$traceurRuntime.type=t,{}}),System.registerModule("traceur@0.0.87/src/runtime/runtime-modules.js",[],function(){"use strict"
return System.get("traceur@0.0.87/src/runtime/relativeRequire.js"),System.get("traceur@0.0.87/src/runtime/spread.js"),System.get("traceur@0.0.87/src/runtime/destructuring.js"),System.get("traceur@0.0.87/src/runtime/classes.js"),System.get("traceur@0.0.87/src/runtime/async.js"),System.get("traceur@0.0.87/src/runtime/generators.js"),System.get("traceur@0.0.87/src/runtime/type-assertions.js"),{}}),System.get("traceur@0.0.87/src/runtime/runtime-modules.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/utils.js",[],function(){"use strict"
function e(e){return e>>>0}function t(e){return e&&("object"==typeof e||"function"==typeof e)}function r(e){return"function"==typeof e}function n(e){return"number"==typeof e}function i(e){return e=+e,v(e)?0:0!==e&&S(e)?e>0?_(e):y(e):e}function s(e){var t=i(e)
return 0>t?0:T(t,E)}function a(e){return t(e)?e[Symbol.iterator]:void 0}function o(e){return r(e)}function c(e,t){return{value:e,done:t}}function u(e,t,r){t in e||Object.defineProperty(e,t,r)}function l(e,t,r){u(e,t,{value:r,configurable:!0,enumerable:!1,writable:!0})}function p(e,t,r){u(e,t,{value:r,configurable:!1,enumerable:!1,writable:!1})}function f(e,t){for(var r=0;r<t.length;r+=2){var n=t[r],i=t[r+1]
l(e,n,i)}}function h(e,t){for(var r=0;r<t.length;r+=2){var n=t[r],i=t[r+1]
p(e,n,i)}}function m(e,t,r){r&&r.iterator&&!e[r.iterator]&&(e["@@iterator"]&&(t=e["@@iterator"]),Object.defineProperty(e,r.iterator,{value:t,configurable:!0,enumerable:!1,writable:!0}))}function d(e){O.push(e)}function g(e){O.forEach(function(t){return t(e)})}var y=Math.ceil,_=Math.floor,S=isFinite,v=isNaN,b=Math.pow,T=Math.min,j=$traceurRuntime.toObject,E=b(2,53)-1,O=[]
return{get toObject(){return j},get toUint32(){return e},get isObject(){return t},get isCallable(){return r},get isNumber(){return n},get toInteger(){return i},get toLength(){return s},get checkIterable(){return a},get isConstructor(){return o},get createIteratorResultObject(){return c},get maybeDefine(){return u},get maybeDefineMethod(){return l},get maybeDefineConst(){return p},get maybeAddFunctions(){return f},get maybeAddConsts(){return h},get maybeAddIterator(){return m},get registerPolyfill(){return d},get polyfillAll(){return g}}}),System.registerModule("traceur@0.0.87/src/runtime/polyfills/Map.js",[],function(){"use strict"
function e(e,t){if(i(t)){var r=o(t)
return r&&e.objectIndex_[r.hash]}return"string"==typeof t?e.stringIndex_[t]:e.primitiveIndex_[t]}function t(e){e.entries_=[],e.objectIndex_=Object.create(null),e.stringIndex_=Object.create(null),e.primitiveIndex_=Object.create(null),e.deletedCount_=0}function r(e){var t=e,r=t.Object,n=t.Symbol
e.Map||(e.Map=l)
var i=e.Map.prototype
void 0===i.entries&&(e.Map=l),i.entries&&(s(i,i.entries,n),s(r.getPrototypeOf((new e.Map).entries()),function(){return this},n))}var n=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),i=n.isObject,s=n.maybeAddIterator,a=n.registerPolyfill,o=$traceurRuntime.getOwnHashObject,c=Object.prototype.hasOwnProperty,u={},l=function(){var e,r,n=arguments[0]
if(!i(this))throw new TypeError("Map called on incompatible type")
if(c.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised")
if(t(this),null!==n&&void 0!==n){var s=!0,a=!1,o=void 0
try{for(var u=void 0,l=n[$traceurRuntime.toProperty(Symbol.iterator)]();!(s=(u=l.next()).done);s=!0){var p=u.value,f=(e=p[$traceurRuntime.toProperty(Symbol.iterator)](),(r=e.next()).done?void 0:r.value),h=(r=e.next()).done?void 0:r.value
this.set(f,h)}}catch(m){a=!0,o=m}finally{try{s||null==l["return"]||l["return"]()}finally{if(a)throw o}}}}
return $traceurRuntime.createClass(l,{get size(){return this.entries_.length/2-this.deletedCount_},get:function(t){var r=e(this,t)
return void 0!==r?this.entries_[r+1]:void 0},set:function(t,r){var n=i(t),s="string"==typeof t,a=e(this,t)
if(void 0!==a)this.entries_[a+1]=r
else if(a=this.entries_.length,this.entries_[a]=t,this.entries_[a+1]=r,n){var c=o(t),u=c.hash
this.objectIndex_[u]=a}else s?this.stringIndex_[t]=a:this.primitiveIndex_[t]=a
return this},has:function(t){return void 0!==e(this,t)},"delete":function(e){var t,r,n=i(e),s="string"==typeof e
if(n){var a=o(e)
a&&(t=this.objectIndex_[r=a.hash],delete this.objectIndex_[r])}else s?(t=this.stringIndex_[e],delete this.stringIndex_[e]):(t=this.primitiveIndex_[e],delete this.primitiveIndex_[e])
return void 0!==t?(this.entries_[t]=u,this.entries_[t+1]=void 0,this.deletedCount_++,!0):!1},clear:function(){t(this)},forEach:function(e){for(var t=arguments[1],r=0;r<this.entries_.length;r+=2){var n=this.entries_[r],i=this.entries_[r+1]
n!==u&&e.call(t,i,n,this)}},entries:$traceurRuntime.initGeneratorFunction(function p(){var e,t,r
return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){case 0:e=0,n.state=12
break
case 12:n.state=e<this.entries_.length?8:-2
break
case 4:e+=2,n.state=12
break
case 8:t=this.entries_[e],r=this.entries_[e+1],n.state=9
break
case 9:n.state=t===u?4:6
break
case 6:return n.state=2,[t,r]
case 2:n.maybeThrow(),n.state=4
break
default:return n.end()}},p,this)}),keys:$traceurRuntime.initGeneratorFunction(function f(){var e,t,r
return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){case 0:e=0,n.state=12
break
case 12:n.state=e<this.entries_.length?8:-2
break
case 4:e+=2,n.state=12
break
case 8:t=this.entries_[e],r=this.entries_[e+1],n.state=9
break
case 9:n.state=t===u?4:6
break
case 6:return n.state=2,t
case 2:n.maybeThrow(),n.state=4
break
default:return n.end()}},f,this)}),values:$traceurRuntime.initGeneratorFunction(function h(){var e,t,r
return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){case 0:e=0,n.state=12
break
case 12:n.state=e<this.entries_.length?8:-2
break
case 4:e+=2,n.state=12
break
case 8:t=this.entries_[e],r=this.entries_[e+1],n.state=9
break
case 9:n.state=t===u?4:6
break
case 6:return n.state=2,r
case 2:n.maybeThrow(),n.state=4
break
default:return n.end()}},h,this)})},{}),Object.defineProperty(l.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:l.prototype.entries}),a(r),{get Map(){return l},get polyfillMap(){return r}}}),System.get("traceur@0.0.87/src/runtime/polyfills/Map.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/Set.js",[],function(){"use strict"
function e(e){e.map_=new a}function t(e){var t=e,r=t.Object,n=t.Symbol
e.Set||(e.Set=c)
var s=e.Set.prototype
s.values&&(i(s,s.values,n),i(r.getPrototypeOf((new e.Set).values()),function(){return this},n))}var r=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),n=r.isObject,i=r.maybeAddIterator,s=r.registerPolyfill,a=System.get("traceur@0.0.87/src/runtime/polyfills/Map.js").Map,o=($traceurRuntime.getOwnHashObject,Object.prototype.hasOwnProperty),c=function(){var t=arguments[0]
if(!n(this))throw new TypeError("Set called on incompatible type")
if(o.call(this,"map_"))throw new TypeError("Set can not be reentrantly initialised")
if(e(this),null!==t&&void 0!==t){var r=!0,i=!1,s=void 0
try{for(var a=void 0,c=t[$traceurRuntime.toProperty(Symbol.iterator)]();!(r=(a=c.next()).done);r=!0){var u=a.value
this.add(u)}}catch(l){i=!0,s=l}finally{try{r||null==c["return"]||c["return"]()}finally{if(i)throw s}}}}
return $traceurRuntime.createClass(c,{get size(){return this.map_.size},has:function(e){return this.map_.has(e)},add:function(e){return this.map_.set(e,e),this},"delete":function(e){return this.map_["delete"](e)},clear:function(){return this.map_.clear()},forEach:function(e){var t=arguments[1],r=this
return this.map_.forEach(function(n,i){e.call(t,i,i,r)})},values:$traceurRuntime.initGeneratorFunction(function u(){var e,t
return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){case 0:e=r.wrapYieldStar(this.map_.keys()[Symbol.iterator]()),r.sent=void 0,r.action="next",r.state=12
break
case 12:t=e[r.action](r.sentIgnoreThrow),r.state=9
break
case 9:r.state=t.done?3:2
break
case 3:r.sent=t.value,r.state=-2
break
case 2:return r.state=12,t.value
default:return r.end()}},u,this)}),entries:$traceurRuntime.initGeneratorFunction(function l(){var e,t
return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){case 0:e=r.wrapYieldStar(this.map_.entries()[Symbol.iterator]()),r.sent=void 0,r.action="next",r.state=12
break
case 12:t=e[r.action](r.sentIgnoreThrow),r.state=9
break
case 9:r.state=t.done?3:2
break
case 3:r.sent=t.value,r.state=-2
break
case 2:return r.state=12,t.value
default:return r.end()}},l,this)})},{}),Object.defineProperty(c.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:c.prototype.values}),Object.defineProperty(c.prototype,"keys",{configurable:!0,writable:!0,value:c.prototype.values}),s(t),{get Set(){return c},get polyfillSet(){return t}}}),System.get("traceur@0.0.87/src/runtime/polyfills/Set.js"),System.registerModule("traceur@0.0.87/node_modules/rsvp/lib/rsvp/asap.js",[],function(){"use strict"
function e(e,t){f[o]=e,f[o+1]=t,o+=2,2===o&&a()}function t(){return function(){process.nextTick(s)}}function r(){var e=0,t=new l(s),r=document.createTextNode("")
return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function n(){var e=new MessageChannel
return e.port1.onmessage=s,function(){e.port2.postMessage(0)}}function i(){return function(){setTimeout(s,1)}}function s(){for(var e=0;o>e;e+=2){var t=f[e],r=f[e+1]
t(r),f[e]=void 0,f[e+1]=void 0}o=0}var a,o=0,c=e,u="undefined"!=typeof window?window:{},l=u.MutationObserver||u.WebKitMutationObserver,p="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,f=Array(1e3)
return a="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?t():l?r():p?n():i(),{get default(){return c}}}),System.registerModule("traceur@0.0.87/src/runtime/polyfills/Promise.js",[],function(){"use strict"
function e(e){return e&&"object"==typeof e&&void 0!==e.status_}function t(e){return e}function r(e){throw e}function n(e){var n=void 0!==arguments[1]?arguments[1]:t,s=void 0!==arguments[2]?arguments[2]:r,a=i(e.constructor)
switch(e.status_){case void 0:throw TypeError
case 0:e.onResolve_.push(n,a),e.onReject_.push(s,a)
break
case 1:l(e.value_,[n,a])
break
case-1:l(e.value_,[s,a])}return a.promise}function i(e){if(this===S){var t=a(new S(y))
return{promise:t,resolve:function(e){o(t,e)},reject:function(e){c(t,e)}}}var r={}
return r.promise=new e(function(e,t){r.resolve=e,r.reject=t}),r}function s(e,t,r,n,i){return e.status_=t,e.value_=r,e.onResolve_=n,e.onReject_=i,e}function a(e){return s(e,0,void 0,[],[])}function o(e,t){u(e,1,t,e.onResolve_)}function c(e,t){u(e,-1,t,e.onReject_)}function u(e,t,r,n){0===e.status_&&(l(r,n),s(e,t,r))}function l(e,t){d(function(){for(var r=0;r<t.length;r+=2)p(e,t[r],t[r+1])})}function p(t,r,i){try{var s=r(t)
if(s===i.promise)throw new TypeError
e(s)?n(s,i.resolve,i.reject):i.resolve(s)}catch(a){try{i.reject(a)}catch(a){}}}function f(e){return e&&("object"==typeof e||"function"==typeof e)}function h(t,r){if(!e(r)&&f(r)){var n
try{n=r.then}catch(s){var a=v.call(t,s)
return r[b]=a,a}if("function"==typeof n){var o=r[b]
if(o)return o
var c=i(t)
r[b]=c.promise
try{n.call(r,c.resolve,c.reject)}catch(s){c.reject(s)}return c.promise}}return r}function m(e){e.Promise||(e.Promise=_)}var d=System.get("traceur@0.0.87/node_modules/rsvp/lib/rsvp/asap.js")["default"],g=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js").registerPolyfill,y={},_=function(e){if(e!==y){if("function"!=typeof e)throw new TypeError
var t=a(this)
try{e(function(e){o(t,e)},function(e){c(t,e)})}catch(r){c(t,r)}}}
$traceurRuntime.createClass(_,{"catch":function(e){return this.then(void 0,e)},then:function(i,s){"function"!=typeof i&&(i=t),"function"!=typeof s&&(s=r)
var a=this,o=this.constructor
return n(this,function(t){return t=h(o,t),t===a?s(new TypeError):e(t)?t.then(i,s):i(t)},s)}},{resolve:function(t){return this===S?e(t)?t:s(new S(y),1,t):new this(function(e){e(t)})},reject:function(e){return this===S?s(new S(y),-1,e):new this(function(t,r){r(e)})},all:function(e){var t=i(this),r=[]
try{var n=function(e){return function(n){r[e]=n,0===--s&&t.resolve(r)}},s=0,a=0,o=!0,c=!1,u=void 0
try{for(var l=void 0,p=e[$traceurRuntime.toProperty(Symbol.iterator)]();!(o=(l=p.next()).done);o=!0){var f=l.value,h=n(a)
this.resolve(f).then(h,function(e){t.reject(e)}),++a,++s}}catch(m){c=!0,u=m}finally{try{o||null==p["return"]||p["return"]()}finally{if(c)throw u}}0===s&&t.resolve(r)}catch(d){t.reject(d)}return t.promise},race:function(e){var t=i(this)
try{for(var r=0;r<e.length;r++)this.resolve(e[r]).then(function(e){t.resolve(e)},function(e){t.reject(e)})}catch(n){t.reject(n)}return t.promise}})
var S=_,v=S.reject,b="@@thenable"
return g(m),{get Promise(){return _},get polyfillPromise(){return m}}}),System.get("traceur@0.0.87/src/runtime/polyfills/Promise.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/StringIterator.js",[],function(){"use strict"
function e(e){var t=e+"",r=Object.create(u.prototype)
return r[s(o)]=t,r[s(c)]=0,r}var t,r=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),n=r.createIteratorResultObject,i=r.isObject,s=$traceurRuntime.toProperty,a=Object.prototype.hasOwnProperty,o=Symbol("iteratedString"),c=Symbol("stringIteratorNextIndex"),u=function(){}
return $traceurRuntime.createClass(u,(t={},Object.defineProperty(t,"next",{value:function(){var e=this
if(!i(e)||!a.call(e,o))throw new TypeError("this must be a StringIterator object")
var t=e[s(o)]
if(void 0===t)return n(void 0,!0)
var r=e[s(c)],u=t.length
if(r>=u)return e[s(o)]=void 0,n(void 0,!0)
var l,p=t.charCodeAt(r)
if(55296>p||p>56319||r+1===u)l=String.fromCharCode(p)
else{var f=t.charCodeAt(r+1)
l=56320>f||f>57343?String.fromCharCode(p):String.fromCharCode(p)+String.fromCharCode(f)}return e[s(c)]=r+l.length,n(l,!1)},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(t,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),t),{}),{get createStringIterator(){return e}}}),System.registerModule("traceur@0.0.87/src/runtime/polyfills/String.js",[],function(){"use strict"
function e(e){var t=this+""
if(null==this||"[object RegExp]"==m.call(e))throw TypeError()
var r=t.length,n=e+"",i=(n.length,arguments.length>1?arguments[1]:void 0),s=i?+i:0
isNaN(s)&&(s=0)
var a=Math.min(Math.max(s,0),r)
return d.call(t,n,s)==a}function t(e){var t=this+""
if(null==this||"[object RegExp]"==m.call(e))throw TypeError()
var r=t.length,n=e+"",i=n.length,s=r
if(arguments.length>1){var a=arguments[1]
void 0!==a&&(s=a?+a:0,isNaN(s)&&(s=0))}var o=Math.min(Math.max(s,0),r),c=o-i
return 0>c?!1:g.call(t,n,c)==c}function r(e){if(null==this)throw TypeError()
var t=this+""
if(e&&"[object RegExp]"==m.call(e))throw TypeError()
var r=t.length,n=e+"",i=n.length,s=arguments.length>1?arguments[1]:void 0,a=s?+s:0
a!=a&&(a=0)
var o=Math.min(Math.max(a,0),r)
return i+o>r?!1:-1!=d.call(t,n,a)}function n(e){if(null==this)throw TypeError()
var t=this+"",r=e?+e:0
if(isNaN(r)&&(r=0),0>r||r==1/0)throw RangeError()
if(0==r)return""
for(var n="";r--;)n+=t
return n}function i(e){if(null==this)throw TypeError()
var t=this+"",r=t.length,n=e?+e:0
if(isNaN(n)&&(n=0),0>n||n>=r)return void 0
var i,s=t.charCodeAt(n)
return s>=55296&&56319>=s&&r>n+1&&(i=t.charCodeAt(n+1),i>=56320&&57343>=i)?1024*(s-55296)+i-56320+65536:s}function s(e){var t=e.raw,r=t.length>>>0
if(0===r)return""
for(var n="",i=0;;){if(n+=t[i],i+1===r)return n
n+=arguments[++i]}}function a(){var e,t,r=[],n=Math.floor,i=-1,s=arguments.length
if(!s)return""
for(;++i<s;){var a=+arguments[i]
if(!isFinite(a)||0>a||a>1114111||n(a)!=a)throw RangeError("Invalid code point: "+a)
65535>=a?r.push(a):(a-=65536,e=(a>>10)+55296,t=a%1024+56320,r.push(e,t))}return String.fromCharCode.apply(null,r)}function o(){var e=$traceurRuntime.checkObjectCoercible(this),t=e+""
return u(t)}function c(c){var u=c.String
p(u.prototype,["codePointAt",i,"endsWith",t,"includes",r,"repeat",n,"startsWith",e]),p(u,["fromCodePoint",a,"raw",s]),f(u.prototype,o,Symbol)}var u=System.get("traceur@0.0.87/src/runtime/polyfills/StringIterator.js").createStringIterator,l=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),p=l.maybeAddFunctions,f=l.maybeAddIterator,h=l.registerPolyfill,m=Object.prototype.toString,d=String.prototype.indexOf,g=String.prototype.lastIndexOf
return h(c),{get startsWith(){return e},get endsWith(){return t},get includes(){return r},get repeat(){return n},get codePointAt(){return i},get raw(){return s},get fromCodePoint(){return a},get stringPrototypeIterator(){return o},get polyfillString(){return c}}}),System.get("traceur@0.0.87/src/runtime/polyfills/String.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/ArrayIterator.js",[],function(){"use strict"
function e(e,t){var r=a(e),n=new f
return n.iteratorObject_=r,n.arrayIteratorNextIndex_=0,n.arrayIterationKind_=t,n}function t(){return e(this,p)}function r(){return e(this,u)}function n(){return e(this,l)}var i,s=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),a=s.toObject,o=s.toUint32,c=s.createIteratorResultObject,u=1,l=2,p=3,f=function(){}
return $traceurRuntime.createClass(f,(i={},Object.defineProperty(i,"next",{value:function(){var e=a(this),t=e.iteratorObject_
if(!t)throw new TypeError("Object is not an ArrayIterator")
var r=e.arrayIteratorNextIndex_,n=e.arrayIterationKind_,i=o(t.length)
return r>=i?(e.arrayIteratorNextIndex_=1/0,c(void 0,!0)):(e.arrayIteratorNextIndex_=r+1,n==l?c(t[r],!1):n==p?c([r,t[r]],!1):c(r,!1))},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(i,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),i),{}),{get entries(){return t},get keys(){return r},get values(){return n}}}),System.registerModule("traceur@0.0.87/src/runtime/polyfills/Array.js",[],function(){"use strict"
function e(e){var t,r,n=arguments[1],i=arguments[2],s=this,a=v(e),o=void 0!==n,c=0
if(o&&!h(n))throw TypeError()
if(f(a)){t=m(s)?new s:[]
var u=!0,l=!1,p=void 0
try{for(var d=void 0,g=a[$traceurRuntime.toProperty(Symbol.iterator)]();!(u=(d=g.next()).done);u=!0){var y=d.value
o?t[c]=n.call(i,y,c):t[c]=y,c++}}catch(_){l=!0,p=_}finally{try{u||null==g["return"]||g["return"]()}finally{if(l)throw p}}return t.length=c,t}for(r=S(a.length),t=m(s)?new s(r):Array(r);r>c;c++)o?t[c]=void 0===i?n(a[c],c):n.call(i,a[c],c):t[c]=a[c]
return t.length=r,t}function t(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=this,n=e.length,i=m(r)?new r(n):Array(n),s=0;n>s;s++)i[s]=e[s]
return i.length=n,i}function r(e){var t=void 0!==arguments[1]?arguments[1]:0,r=arguments[2],n=v(this),i=S(n.length),s=_(t),a=void 0!==r?_(r):i
for(s=0>s?Math.max(i+s,0):Math.min(s,i),a=0>a?Math.max(i+a,0):Math.min(a,i);a>s;)n[s]=e,s++
return n}function n(e){var t=arguments[1]
return s(this,e,t)}function i(e){var t=arguments[1]
return s(this,e,t,!0)}function s(e,t){var r=arguments[2],n=void 0!==arguments[3]?arguments[3]:!1,i=v(e),s=S(i.length)
if(!h(t))throw TypeError()
for(var a=0;s>a;a++){var o=i[a]
if(t.call(r,o,a,i))return n?a:o}return n?-1:void 0}function a(s){var a=s,o=a.Array,p=a.Object,f=a.Symbol,h=l
f&&f.iterator&&o.prototype[f.iterator]&&(h=o.prototype[f.iterator]),d(o.prototype,["entries",c,"keys",u,"values",h,"fill",r,"find",n,"findIndex",i]),d(o,["from",e,"of",t]),g(o.prototype,h,f),g(p.getPrototypeOf([].values()),function(){return this},f)}var o=System.get("traceur@0.0.87/src/runtime/polyfills/ArrayIterator.js"),c=o.entries,u=o.keys,l=o.values,p=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),f=p.checkIterable,h=p.isCallable,m=p.isConstructor,d=p.maybeAddFunctions,g=p.maybeAddIterator,y=p.registerPolyfill,_=p.toInteger,S=p.toLength,v=p.toObject
return y(a),{get from(){return e},get of(){return t},get fill(){return r},get find(){return n},get findIndex(){return i},get polyfillArray(){return a}}}),System.get("traceur@0.0.87/src/runtime/polyfills/Array.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/Object.js",[],function(){"use strict"
function e(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function t(e){for(var t=1;t<arguments.length;t++){var r=arguments[t],n=null==r?[]:f(r),i=void 0,s=n.length
for(i=0;s>i;i++){var a=n[i]
p(a)||(e[a]=r[a])}}return e}function r(e,t){var r,n,i=l(t),s=i.length
for(r=0;s>r;r++){var a=i[r]
p(a)||(n=u(t,i[r]),c(e,i[r],n))}return e}function n(n){var i=n.Object
s(i,["assign",t,"is",e,"mixin",r])}var i=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),s=i.maybeAddFunctions,a=i.registerPolyfill,o=$traceurRuntime,c=o.defineProperty,u=o.getOwnPropertyDescriptor,l=o.getOwnPropertyNames,p=o.isPrivateName,f=o.keys
return a(n),{get is(){return e},get assign(){return t},get mixin(){return r},get polyfillObject(){return n}}}),System.get("traceur@0.0.87/src/runtime/polyfills/Object.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/Number.js",[],function(){"use strict"
function e(e){return a(e)&&f(e)}function t(t){return e(t)&&l(t)===t}function r(e){return a(e)&&h(e)}function n(t){if(e(t)){var r=l(t)
if(r===t)return p(r)<=m}return!1}function i(i){var s=i.Number
o(s,["MAX_SAFE_INTEGER",m,"MIN_SAFE_INTEGER",d,"EPSILON",g]),c(s,["isFinite",e,"isInteger",t,"isNaN",r,"isSafeInteger",n])}var s=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),a=s.isNumber,o=s.maybeAddConsts,c=s.maybeAddFunctions,u=s.registerPolyfill,l=s.toInteger,p=Math.abs,f=isFinite,h=isNaN,m=Math.pow(2,53)-1,d=-Math.pow(2,53)+1,g=Math.pow(2,-52)
return u(i),{get MAX_SAFE_INTEGER(){return m},get MIN_SAFE_INTEGER(){return d},get EPSILON(){return g},get isFinite(){return e},get isInteger(){return t},get isNaN(){return r},get isSafeInteger(){return n},get polyfillNumber(){return i}}}),System.get("traceur@0.0.87/src/runtime/polyfills/Number.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/fround.js",[],function(){"use strict"
function e(e,t,r){function n(e){var t=l(e),r=e-t
return.5>r?t:r>.5?t+1:t%2?t+1:t}var i,s,a,o,m,d,g,y=(1<<t-1)-1
for(e!==e?(s=(1<<t)-1,a=h(2,r-1),i=0):e===1/0||e===-(1/0)?(s=(1<<t)-1,a=0,i=0>e?1:0):0===e?(s=0,a=0,i=1/e===-(1/0)?1:0):(i=0>e,e=u(e),e>=h(2,1-y)?(s=f(l(p(e)/c),1023),a=n(e/h(2,s)*h(2,r)),a/h(2,r)>=2&&(s+=1,a=1),s>y?(s=(1<<t)-1,a=0):(s+=y,a-=h(2,r))):(s=0,a=n(e/h(2,1-y-r)))),m=[],o=r;o;o-=1)m.push(a%2?1:0),a=l(a/2)
for(o=t;o;o-=1)m.push(s%2?1:0),s=l(s/2)
for(m.push(i?1:0),m.reverse(),d=m.join(""),g=[];d.length;)g.push(parseInt(d.substring(0,8),2)),d=d.substring(8)
return g}function t(e,t,r){var n,i,s,a,o,c,u,l,p=[]
for(n=e.length;n;n-=1)for(s=e[n-1],i=8;i;i-=1)p.push(s%2?1:0),s>>=1
return p.reverse(),a=p.join(""),o=(1<<t-1)-1,c=parseInt(a.substring(0,1),2)?-1:1,u=parseInt(a.substring(1,1+t),2),l=parseInt(a.substring(1+t),2),u===(1<<t)-1?0!==l?NaN:c*(1/0):u>0?c*h(2,u-o)*(1+l/h(2,r)):0!==l?c*h(2,-(o-1))*(l/h(2,r)):0>c?-0:0}function r(e){return t(e,8,23)}function n(t){return e(t,8,23)}function i(e){return 0===e||!s(e)||a(e)?e:r(n(+e))}var s=isFinite,a=isNaN,o=Math,c=o.LN2,u=o.abs,l=o.floor,p=o.log,f=o.min,h=o.pow
return{get fround(){return i}}}),System.registerModule("traceur@0.0.87/src/runtime/polyfills/Math.js",[],function(){"use strict"
function e(e){if(e=j(+e),0==e)return 32
var t=0
return 0===(4294901760&e)&&(e<<=16,t+=16),0===(4278190080&e)&&(e<<=8,t+=8),0===(4026531840&e)&&(e<<=4,t+=4),0===(3221225472&e)&&(e<<=2,t+=2),0===(2147483648&e)&&(e<<=1,t+=1),t}function t(e,t){e=j(+e),t=j(+t)
var r=e>>>16&65535,n=65535&e,i=t>>>16&65535,s=65535&t
return n*s+(r*s+n*i<<16>>>0)|0}function r(e){return e=+e,e>0?1:0>e?-1:e}function n(e){return.4342944819032518*P(e)}function i(e){return 1.4426950408889634*P(e)}function s(e){if(e=+e,-1>e||O(e))return NaN
if(0===e||e===1/0)return e
if(-1===e)return-(1/0)
var t=0,r=50
if(0>e||e>1)return P(1+e)
for(var n=1;r>n;n++)n%2===0?t-=L(e,n)/n:t+=L(e,n)/n
return t}function a(e){return e=+e,e===-(1/0)?-1:E(e)&&0!==e?w(e)-1:e}function o(e){return e=+e,0===e?1:O(e)?NaN:E(e)?(0>e&&(e=-e),e>21?w(e)/2:(w(e)+w(-e))/2):1/0}function c(e){return e=+e,E(e)&&0!==e?(w(e)-w(-e))/2:e}function u(e){if(e=+e,0===e)return e
if(!E(e))return r(e)
var t=w(e),n=w(-e)
return(t-n)/(t+n)}function l(e){return e=+e,1>e?NaN:E(e)?P(e+I(e+1)*I(e-1)):e}function p(e){return e=+e,0!==e&&E(e)?e>0?P(e+I(e*e+1)):-P(-e+I(e*e+1)):e}function f(e){return e=+e,-1===e?-(1/0):1===e?1/0:0===e?e:O(e)||-1>e||e>1?NaN:.5*P((1+e)/(1-e))}function h(){for(var e=arguments.length,t=Array(e),r=0,n=0;e>n;n++){var i=arguments[n]
if(i=+i,i===1/0||i===-(1/0))return 1/0
i=R(i),i>r&&(r=i),t[n]=i}0===r&&(r=1)
for(var s=0,a=0,n=0;e>n;n++){var i=t[n]/r,o=i*i-a,c=s+o
a=c-s-o,s=c}return I(s)*r}function m(e){return e=+e,e>0?C(e):0>e?x(e):e}function d(e){if(e=+e,0===e)return e
var t=0>e
t&&(e=-e)
var r=L(e,1/3)
return t?-r:r}function g(g){var _=g.Math
b(_,["acosh",l,"asinh",p,"atanh",f,"cbrt",d,"clz32",e,"cosh",o,"expm1",a,"fround",y,"hypot",h,"imul",t,"log10",n,"log1p",s,"log2",i,"sign",r,"sinh",c,"tanh",u,"trunc",m])}var y,_,S=System.get("traceur@0.0.87/src/runtime/polyfills/fround.js").fround,v=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js"),b=v.maybeAddFunctions,T=v.registerPolyfill,j=v.toUint32,E=isFinite,O=isNaN,A=Math,R=A.abs,x=A.ceil,w=A.exp,C=A.floor,P=A.log,L=A.pow,I=A.sqrt
return"function"==typeof Float32Array?(_=new Float32Array(1),y=function(e){return _[0]=+e,_[0]}):y=S,T(g),{get clz32(){return e},get imul(){return t},get sign(){return r},get log10(){return n},get log2(){return i},get log1p(){return s},get expm1(){return a},get cosh(){return o},get sinh(){return c},get tanh(){return u},get acosh(){return l},get asinh(){return p},get atanh(){return f},get hypot(){return h},get trunc(){return m},get fround(){return y},get cbrt(){return d},get polyfillMath(){return g}}}),System.get("traceur@0.0.87/src/runtime/polyfills/Math.js"),System.registerModule("traceur@0.0.87/src/runtime/polyfills/polyfills.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/runtime/polyfills/utils.js").polyfillAll
e(Reflect.global)
var t=$traceurRuntime.setupGlobals
return $traceurRuntime.setupGlobals=function(r){t(r),e(r)},{}}),System.get("traceur@0.0.87/src/runtime/polyfills/polyfills.js"),System.registerModule("traceur@0.0.87/src/Options.js",[],function(){"use strict"
function e(e){var t=Object.create(null)
return Object.keys(e).forEach(function(r){Object.defineProperty(t,r,{enumerable:!0,value:e[r]})}),t}function t(e,t){l[e]=!0,t===h&&(p[e]=!0)
var r=t===m
u[e]=r}function r(e){u[e]=!1}function n(e){switch(e){case"false":return!1
case"true":case!0:return!0
default:return!!e&&e+""}}function i(e){return e.replace(/-\w/g,function(e){return e[1].toUpperCase()})}function s(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}function a(e,t){e.option("--referrer <name>","Bracket output code with System.referrerName=<name>",function(e){return t.setOption("referrer",e),System.map=System.semverMap(e),e}),e.option("--type-assertion-module <path>","Absolute path to the type assertion module.",function(e){return t.setOption("type-assertion-module",e),e}),e.option("--modules <"+f.join(", ")+">","select the output format for modules",function(e){t.modules=e}),e.option("--moduleName [true|false|default]","true for named, false for anonymous modules; default depends on --modules",function(e){e="true"===e?!0:"false"===e?!1:"default",t.moduleName=e}),e.option("--outputLanguage <es6|es5>","compilation target language",function(e){if("es6"!==e&&"es5"!==e)throw Error("outputLanguage must be one of es5, es6")
t.outputLanguage=e}),e.option("--source-maps [file|inline|memory]","sourceMaps generated to file or inline with data: URL",function(e){return t.sourceMaps=e}),e.option("--source-root <true|false|string>","sourcemap sourceRoot value. false to omit, true for directory of output file.",function(e){return"false"===e?e=!1:"true"===e&&(e=!0),t.sourceRoot=e}),e.option("--low-resolution-source-maps","Lower sourceMaps granularity to one mapping per output line",function(){return t.lowResolutionSourceMap=!0}),e.option("--experimental","Turns on all experimental features",function(){t.experimental=!0}),e.option("--atscript","Turns on all AtScript features",function(){t.atscript=!0}),Object.keys(t).forEach(function(r){var n=s(r)
if(!e.optionFor("--"+r)&&!e.optionFor("--"+n))if(r in l)e.option("--"+n+" [true|false|parse]",S[r]),e.on(n,function(e){return t.setOptionCoerced(n,e)})
else{if(null===t[r])throw Error("Unexpected null commandOption "+r)
e.option("--"+n,S[r]),e.on(n,function(){return t.setOption(n,!0)})}}),t.setDefaults()}var o=e({annotations:!1,arrayComprehension:!1,arrowFunctions:!0,asyncFunctions:!1,asyncGenerators:!1,blockBinding:!0,classes:!0,commentCallback:!1,computedPropertyNames:!0,debug:!1,debugNames:!1,defaultParameters:!0,destructuring:!0,exponentiation:!1,forOf:!0,forOn:!1,freeVariableChecker:!1,generatorComprehension:!1,generators:!0,inputSourceMap:!1,lowResolutionSourceMap:!1,memberVariables:!1,moduleName:"default",modules:"register",numericLiterals:!0,outputLanguage:"es5",properTailCalls:!1,propertyMethods:!0,propertyNameShorthand:!0,referrer:"",require:!1,restParameters:!0,script:!1,sourceMaps:!1,sourceRoot:!1,spread:!0,symbols:!1,templateLiterals:!0,typeAssertionModule:null,typeAssertions:!1,types:!1,unicodeEscapeSequences:!0,unicodeExpressions:!0,validate:!1}),c=o,u=Object.create(null),l=Object.create(null),p=Object.create(null),f=["amd","commonjs","closure","instantiate","inline","register"],h=0,m=1
t("arrowFunctions",m),t("blockBinding",m),t("classes",m),t("computedPropertyNames",m),t("defaultParameters",m),t("destructuring",m),t("forOf",m),t("generators",m),t("modules","SPECIAL"),t("numericLiterals",m),t("propertyMethods",m),t("propertyNameShorthand",m),t("restParameters",m),t("sourceMaps","SPECIAL"),t("spread",m),t("templateLiterals",m),t("unicodeEscapeSequences",m),t("unicodeExpressions",m),t("properTailCalls",h),t("symbols",h),t("annotations",h),t("arrayComprehension",h),t("asyncFunctions",h),t("asyncGenerators",h),t("exponentiation",h),t("forOn",h),t("generatorComprehension",h),t("memberVariables",h),t("require",h),t("types",h)
var d={}
Object.keys(l).forEach(function(e){Object.defineProperty(d,e,{get:function(){var t=this.proxiedOptions_[e]
return"parse"===t?!1:t},enumerable:!0})})
var g={}
Object.keys(l).forEach(function(e){Object.defineProperty(g,e,{get:function(){return!!this.proxiedOptions_[e]},enumerable:!0})}),r("commentCallback"),r("debug"),r("debugNames"),r("freeVariableChecker"),r("script"),r("typeAssertions"),r("validate")
var y=function(){var e=void 0!==arguments[0]?arguments[0]:Object.create(null)
this.reset(),Object.defineProperties(this,{modules_:{value:c.modules,writable:!0,enumerable:!1},sourceMaps_:{value:c.sourceMaps,writable:!0,enumerable:!1},sourceRoot_:{value:c.sourceRoot,writable:!0,enumerable:!1},transformOptions:{value:Object.create(d,{proxiedOptions_:{value:this,enumerable:!1}}),enumerable:!1},parseOptions:{value:Object.create(g,{proxiedOptions_:{value:this,enumerable:!1}}),enumerable:!1}}),this.setFromObject(e)},_=y
$traceurRuntime.createClass(y,{set experimental(e){var t=this
e=n(e),Object.keys(p).forEach(function(r){t[r]=e})},get experimental(){var e,t=this
return Object.keys(p).every(function(r){var n=t[r]
return void 0===e?(e=n,!0):n!==e?(e=null,!1):!0}),e},get atscript(){return this.types&&this.annotations&&this.memberVariables},set atscript(e){this.types=e,this.annotations=e,this.memberVariables=e},get modules(){return this.modules_},set modules(e){if("boolean"!=typeof e||e||(e="register"),-1===f.indexOf(e))throw Error("Invalid 'modules' option '"+e+"', not in "+f.join(", "))
this.modules_=e},get sourceMaps(){return this.sourceMaps_},set sourceMaps(e){if(null===e||"boolean"==typeof e)return void(this.sourceMaps_=e?"file":!1)
if("file"!==e&&"inline"!==e&&"memory"!==e)throw Error("Option sourceMaps should be [false|inline|file|memory], not "+e)
this.sourceMaps_=e},reset:function(){var e=arguments[0],t=this,r=void 0===e
Object.keys(u).forEach(function(e){t[e]=r&&u[e]}),this.setDefaults()},setDefaults:function(){this.modules="register",this.moduleName="default",this.outputLanguage="es5",this.referrer="",this.sourceMaps=!1,this.sourceRoot=!1,this.lowResolutionSourceMap=!1,this.inputSourceMap=!1,this.typeAssertionModule=null},setFromObject:function(e){var t=this
return Object.keys(this).forEach(function(r){r in e&&t.setOption(r,e[r])}),this.modules=e.modules||this.modules,("boolean"==typeof e.sourceMaps||"string"==typeof e.sourceMaps)&&(this.sourceMaps=e.sourceMaps),void 0!==e.sourceRoot&&(this.sourceRoot=e.sourceRoot),this},setOption:function(e,t){if(e=i(e),!(e in this))throw Error("Unknown option: "+e)
this[e]=t},diff:function(e){var t=this,r=[]
return Object.keys(this).forEach(function(n){t[n]!==e[n]&&r.push({key:n,now:$traceurRuntime.options[n],v01:e[n]})}),r}},{experimental:function(){return new _(p)},atscript:function(){return new _({types:!0,annotations:!0,memberVariables:!0})},listUnknownOptions:function(e){var t=[]
return Object.keys(e).forEach(function(e){e in o||t.push(e)}),t}})
var S={experimental:"Turns on all experimental features",require:"Generate require function argument for node when modules=register",sourceMaps:"Generate source map and ('file') write to .map or ('inline') append data URL"},v=function(){$traceurRuntime.superConstructor(b).apply(this,arguments)},b=v
return $traceurRuntime.createClass(v,{parseCommand:function(e){var t=/--([^=]+)(?:=(.+))?/,r=t.exec(e)
r&&this.setOptionCoerced(r[1],r[2])},setOptionCoerced:function(e,t){t=void 0!==t&&null!==t?n(t):!0,this.setOption(e,t)}},{fromString:function(e){return b.fromArgv(e.split(/\s+/))},fromArgv:function(e){var t=new b
return e.forEach(function(e){return t.parseCommand(e)}),t}},y),{get optionsV01(){return o},get versionLockedOptions(){return c},get Options(){return y},get CommandOptions(){return v},get toDashCase(){return s},get addOptions(){return a}}}),System.registerModule("traceur@0.0.87/src/syntax/TokenType.js",[],function(){"use strict"
var e="&",t="&=",r="&&",n="=>",i="@",s="`",a="!",o="|",c="|=",u="break",l="^",p="^=",f="case",h="catch",m="class",d=">",g="}",y=")",_="]",S=":",v=",",b="const",T="continue",j="debugger",E="default",O="delete",A="do",R="...",x="else",w="End of File",C="enum",P="=",L="==",I="===",N="error",M="export",k="extends",F="false",$="finally",B="for",D="function",V=">=",G="identifier",U="if",z="implements",H="import",Y="in",X="instanceof",W="interface",Q="<<",K="<<=",q="<=",J="let",Z="-",ee="-=",te="--",re="new",ne="no substitution template",ie="!=",se="!==",ae="null",oe="number literal",ce="<",ue="{",le="(",pe="[",fe="||",he="package",me="%",de="%=",ge=".",ye="+",_e="+=",Se="++",ve="private",be="protected",Te="public",je="?",Ee="regular expression literal",Oe="return",Ae=">>",Re=">>=",xe=";",we="/",Ce="/=",Pe="*",Le="*=",Ie="**",Ne="**=",Me="static",ke="string literal",Fe="super",$e="switch",Be="template head",De="template middle",Ve="template tail",Ge="this",Ue="throw",ze="~",He="true",Ye="try",Xe="typeof",We=">>>",Qe=">>>=",Ke="var",qe="void",Je="while",Ze="with",et="yield"
return{get AMPERSAND(){return e},get AMPERSAND_EQUAL(){return t},get AND(){return r},get ARROW(){return n},get AT(){return i},get BACK_QUOTE(){return s},get BANG(){return a},get BAR(){return o},get BAR_EQUAL(){return c},get BREAK(){return u},get CARET(){return l},get CARET_EQUAL(){return p},get CASE(){return f},get CATCH(){return h},get CLASS(){return m},get CLOSE_ANGLE(){return d},get CLOSE_CURLY(){return g},get CLOSE_PAREN(){return y},get CLOSE_SQUARE(){return _},get COLON(){return S},get COMMA(){return v},get CONST(){return b},get CONTINUE(){return T},get DEBUGGER(){return j},get DEFAULT(){return E},get DELETE(){return O},get DO(){return A},get DOT_DOT_DOT(){return R},get ELSE(){return x},get END_OF_FILE(){return w},get ENUM(){return C},get EQUAL(){return P},get EQUAL_EQUAL(){return L},get EQUAL_EQUAL_EQUAL(){return I},get ERROR(){return N},get EXPORT(){return M},get EXTENDS(){return k},get FALSE(){return F},get FINALLY(){return $},get FOR(){return B},get FUNCTION(){return D},get GREATER_EQUAL(){return V},get IDENTIFIER(){return G},get IF(){return U},get IMPLEMENTS(){return z},get IMPORT(){return H},get IN(){return Y},get INSTANCEOF(){return X},get INTERFACE(){return W},get LEFT_SHIFT(){return Q},get LEFT_SHIFT_EQUAL(){return K},get LESS_EQUAL(){return q},get LET(){return J},get MINUS(){return Z},get MINUS_EQUAL(){return ee},get MINUS_MINUS(){return te},get NEW(){return re},get NO_SUBSTITUTION_TEMPLATE(){return ne},get NOT_EQUAL(){return ie},get NOT_EQUAL_EQUAL(){return se},get NULL(){return ae},get NUMBER(){return oe},get OPEN_ANGLE(){return ce},get OPEN_CURLY(){return ue},get OPEN_PAREN(){return le},get OPEN_SQUARE(){return pe},get OR(){return fe},get PACKAGE(){return he},get PERCENT(){return me},get PERCENT_EQUAL(){return de},get PERIOD(){return ge},get PLUS(){return ye},get PLUS_EQUAL(){return _e},get PLUS_PLUS(){return Se},get PRIVATE(){return ve},get PROTECTED(){return be},get PUBLIC(){return Te},get QUESTION(){return je},get REGULAR_EXPRESSION(){return Ee},get RETURN(){return Oe},get RIGHT_SHIFT(){return Ae},get RIGHT_SHIFT_EQUAL(){return Re},get SEMI_COLON(){return xe},get SLASH(){return we},get SLASH_EQUAL(){return Ce},get STAR(){return Pe},get STAR_EQUAL(){return Le},get STAR_STAR(){return Ie},get STAR_STAR_EQUAL(){return Ne},get STATIC(){return Me},get STRING(){return ke},get SUPER(){return Fe},get SWITCH(){return $e},get TEMPLATE_HEAD(){return Be},get TEMPLATE_MIDDLE(){return De},get TEMPLATE_TAIL(){return Ve},get THIS(){return Ge},get THROW(){return Ue},get TILDE(){return ze},get TRUE(){return He},get TRY(){return Ye},get TYPEOF(){return Xe},get UNSIGNED_RIGHT_SHIFT(){return We},get UNSIGNED_RIGHT_SHIFT_EQUAL(){return Qe},get VAR(){return Ke},get VOID(){return qe},get WHILE(){return Je},get WITH(){return Ze},get YIELD(){return et}}}),System.registerModule("traceur@0.0.87/src/syntax/trees/ParseTreeType.js",[],function(){"use strict"
var e="ANNOTATION",t="ANON_BLOCK",r="ARGUMENT_LIST",n="ARRAY_COMPREHENSION",i="ARRAY_LITERAL_EXPRESSION",s="ARRAY_PATTERN",a="ARRAY_TYPE",o="ARROW_FUNCTION_EXPRESSION",c="ASSIGNMENT_ELEMENT",u="AWAIT_EXPRESSION",l="BINARY_EXPRESSION",p="BINDING_ELEMENT",f="BINDING_IDENTIFIER",h="BLOCK",m="BREAK_STATEMENT",d="CALL_EXPRESSION",g="CALL_SIGNATURE",y="CASE_CLAUSE",_="CATCH",S="CLASS_DECLARATION",v="CLASS_EXPRESSION",b="COMMA_EXPRESSION",T="COMPREHENSION_FOR",j="COMPREHENSION_IF",E="COMPUTED_PROPERTY_NAME",O="CONDITIONAL_EXPRESSION",A="CONSTRUCT_SIGNATURE",R="CONSTRUCTOR_TYPE",x="CONTINUE_STATEMENT",w="COVER_FORMALS",C="COVER_INITIALIZED_NAME",P="DEBUGGER_STATEMENT",L="DEFAULT_CLAUSE",I="DO_WHILE_STATEMENT",N="EMPTY_STATEMENT",M="EXPORT_DECLARATION",k="EXPORT_DEFAULT",F="EXPORT_SPECIFIER",$="EXPORT_SPECIFIER_SET",B="EXPORT_STAR",D="EXPRESSION_STATEMENT",V="FINALLY",G="FOR_IN_STATEMENT",U="FOR_OF_STATEMENT",z="FOR_ON_STATEMENT",H="FOR_STATEMENT",Y="FORMAL_PARAMETER",X="FORMAL_PARAMETER_LIST",W="FUNCTION_BODY",Q="FUNCTION_DECLARATION",K="FUNCTION_EXPRESSION",q="FUNCTION_TYPE",J="GENERATOR_COMPREHENSION",Z="GET_ACCESSOR",ee="IDENTIFIER_EXPRESSION",te="IF_STATEMENT",re="IMPORT_DECLARATION",ne="IMPORT_SPECIFIER",ie="IMPORT_SPECIFIER_SET",se="IMPORTED_BINDING",ae="INDEX_SIGNATURE",oe="INTERFACE_DECLARATION",ce="LABELLED_STATEMENT",ue="LITERAL_EXPRESSION",le="LITERAL_PROPERTY_NAME",pe="MEMBER_EXPRESSION",fe="MEMBER_LOOKUP_EXPRESSION",he="METHOD_SIGNATURE",me="MODULE",de="MODULE_DECLARATION",ge="MODULE_SPECIFIER",ye="NAMED_EXPORT",_e="NEW_EXPRESSION",Se="OBJECT_LITERAL_EXPRESSION",ve="OBJECT_PATTERN",be="OBJECT_PATTERN_FIELD",Te="OBJECT_TYPE",je="PAREN_EXPRESSION",Ee="POSTFIX_EXPRESSION",Oe="PREDEFINED_TYPE",Ae="PROPERTY_METHOD_ASSIGNMENT",Re="PROPERTY_NAME_ASSIGNMENT",xe="PROPERTY_NAME_SHORTHAND",we="PROPERTY_SIGNATURE",Ce="PROPERTY_VARIABLE_DECLARATION",Pe="REST_PARAMETER",Le="RETURN_STATEMENT",Ie="SCRIPT",Ne="SET_ACCESSOR",Me="SPREAD_EXPRESSION",ke="SPREAD_PATTERN_ELEMENT",Fe="STATE_MACHINE",$e="SUPER_EXPRESSION",Be="SWITCH_STATEMENT",De="SYNTAX_ERROR_TREE",Ve="TEMPLATE_LITERAL_EXPRESSION",Ge="TEMPLATE_LITERAL_PORTION",Ue="TEMPLATE_SUBSTITUTION",ze="THIS_EXPRESSION",He="THROW_STATEMENT",Ye="TRY_STATEMENT",Xe="TYPE_ARGUMENTS",We="TYPE_NAME",Qe="TYPE_PARAMETER",Ke="TYPE_PARAMETERS",qe="TYPE_REFERENCE",Je="UNARY_EXPRESSION",Ze="UNION_TYPE",et="VARIABLE_DECLARATION",tt="VARIABLE_DECLARATION_LIST",rt="VARIABLE_STATEMENT",nt="WHILE_STATEMENT",it="WITH_STATEMENT",st="YIELD_EXPRESSION"
return{get ANNOTATION(){return e},get ANON_BLOCK(){return t},get ARGUMENT_LIST(){return r},get ARRAY_COMPREHENSION(){return n},get ARRAY_LITERAL_EXPRESSION(){return i},get ARRAY_PATTERN(){return s},get ARRAY_TYPE(){return a},get ARROW_FUNCTION_EXPRESSION(){return o},get ASSIGNMENT_ELEMENT(){return c},get AWAIT_EXPRESSION(){return u},get BINARY_EXPRESSION(){return l},get BINDING_ELEMENT(){return p},get BINDING_IDENTIFIER(){return f},get BLOCK(){return h},get BREAK_STATEMENT(){return m},get CALL_EXPRESSION(){return d},get CALL_SIGNATURE(){return g},get CASE_CLAUSE(){return y},get CATCH(){return _},get CLASS_DECLARATION(){return S},get CLASS_EXPRESSION(){return v},get COMMA_EXPRESSION(){return b},get COMPREHENSION_FOR(){return T},get COMPREHENSION_IF(){return j},get COMPUTED_PROPERTY_NAME(){return E},get CONDITIONAL_EXPRESSION(){return O},get CONSTRUCT_SIGNATURE(){return A},get CONSTRUCTOR_TYPE(){return R},get CONTINUE_STATEMENT(){return x},get COVER_FORMALS(){return w},get COVER_INITIALIZED_NAME(){return C},get DEBUGGER_STATEMENT(){return P},get DEFAULT_CLAUSE(){return L},get DO_WHILE_STATEMENT(){return I},get EMPTY_STATEMENT(){return N},get EXPORT_DECLARATION(){return M},get EXPORT_DEFAULT(){return k},get EXPORT_SPECIFIER(){return F},get EXPORT_SPECIFIER_SET(){return $},get EXPORT_STAR(){return B},get EXPRESSION_STATEMENT(){return D},get FINALLY(){return V},get FOR_IN_STATEMENT(){return G},get FOR_OF_STATEMENT(){return U},get FOR_ON_STATEMENT(){return z},get FOR_STATEMENT(){return H},get FORMAL_PARAMETER(){return Y},get FORMAL_PARAMETER_LIST(){return X},get FUNCTION_BODY(){return W},get FUNCTION_DECLARATION(){return Q},get FUNCTION_EXPRESSION(){return K},get FUNCTION_TYPE(){return q},get GENERATOR_COMPREHENSION(){return J},get GET_ACCESSOR(){return Z},get IDENTIFIER_EXPRESSION(){return ee},get IF_STATEMENT(){return te},get IMPORT_DECLARATION(){return re},get IMPORT_SPECIFIER(){return ne},get IMPORT_SPECIFIER_SET(){return ie},get IMPORTED_BINDING(){return se},get INDEX_SIGNATURE(){return ae},get INTERFACE_DECLARATION(){return oe},get LABELLED_STATEMENT(){return ce},get LITERAL_EXPRESSION(){return ue},get LITERAL_PROPERTY_NAME(){return le},get MEMBER_EXPRESSION(){return pe},get MEMBER_LOOKUP_EXPRESSION(){return fe},get METHOD_SIGNATURE(){return he},get MODULE(){return me},get MODULE_DECLARATION(){return de},get MODULE_SPECIFIER(){return ge},get NAMED_EXPORT(){return ye},get NEW_EXPRESSION(){return _e},get OBJECT_LITERAL_EXPRESSION(){return Se},get OBJECT_PATTERN(){return ve},get OBJECT_PATTERN_FIELD(){return be},get OBJECT_TYPE(){return Te},get PAREN_EXPRESSION(){return je},get POSTFIX_EXPRESSION(){return Ee},get PREDEFINED_TYPE(){return Oe},get PROPERTY_METHOD_ASSIGNMENT(){return Ae},get PROPERTY_NAME_ASSIGNMENT(){return Re},get PROPERTY_NAME_SHORTHAND(){return xe},get PROPERTY_SIGNATURE(){return we},get PROPERTY_VARIABLE_DECLARATION(){return Ce},get REST_PARAMETER(){return Pe},get RETURN_STATEMENT(){return Le},get SCRIPT(){return Ie},get SET_ACCESSOR(){return Ne},get SPREAD_EXPRESSION(){return Me},get SPREAD_PATTERN_ELEMENT(){return ke},get STATE_MACHINE(){return Fe},get SUPER_EXPRESSION(){return $e},get SWITCH_STATEMENT(){return Be},get SYNTAX_ERROR_TREE(){return De},get TEMPLATE_LITERAL_EXPRESSION(){return Ve},get TEMPLATE_LITERAL_PORTION(){return Ge},get TEMPLATE_SUBSTITUTION(){return Ue},get THIS_EXPRESSION(){return ze},get THROW_STATEMENT(){return He},get TRY_STATEMENT(){return Ye},get TYPE_ARGUMENTS(){return Xe},get TYPE_NAME(){return We},get TYPE_PARAMETER(){return Qe},get TYPE_PARAMETERS(){return Ke},get TYPE_REFERENCE(){return qe},get UNARY_EXPRESSION(){return Je},get UNION_TYPE(){return Ze},get VARIABLE_DECLARATION(){return et},get VARIABLE_DECLARATION_LIST(){return tt},get VARIABLE_STATEMENT(){return rt},get WHILE_STATEMENT(){return nt},get WITH_STATEMENT(){return it},get YIELD_EXPRESSION(){return st}}}),System.registerModule("traceur@0.0.87/src/syntax/ParseTreeVisitor.js",[],function(){"use strict"
var e=function(){}
return $traceurRuntime.createClass(e,{visitAny:function(e){e&&e.visit(this)},visit:function(e){this.visitAny(e)},visitList:function(e){if(e)for(var t=0;t<e.length;t++)this.visitAny(e[t])},visitStateMachine:function(){throw Error("State machines should not live outside of the GeneratorTransformer.")},visitAnnotation:function(e){this.visitAny(e.name),this.visitAny(e.args)},visitAnonBlock:function(e){this.visitList(e.statements)},visitArgumentList:function(e){this.visitList(e.args)},visitArrayComprehension:function(e){this.visitList(e.comprehensionList),this.visitAny(e.expression)},visitArrayLiteralExpression:function(e){this.visitList(e.elements)},visitArrayPattern:function(e){this.visitList(e.elements)},visitArrayType:function(e){this.visitAny(e.elementType)},visitArrowFunctionExpression:function(e){this.visitAny(e.parameterList),this.visitAny(e.body)},visitAssignmentElement:function(e){this.visitAny(e.assignment),this.visitAny(e.initializer)},visitAwaitExpression:function(e){this.visitAny(e.expression)},visitBinaryExpression:function(e){this.visitAny(e.left),this.visitAny(e.right)},visitBindingElement:function(e){this.visitAny(e.binding),this.visitAny(e.initializer)},visitBindingIdentifier:function(){},visitBlock:function(e){this.visitList(e.statements)},visitBreakStatement:function(){},visitCallExpression:function(e){this.visitAny(e.operand),this.visitAny(e.args)},visitCallSignature:function(e){this.visitAny(e.typeParameters),this.visitAny(e.parameterList),this.visitAny(e.returnType)},visitCaseClause:function(e){this.visitAny(e.expression),this.visitList(e.statements)},visitCatch:function(e){this.visitAny(e.binding),this.visitAny(e.catchBody)},visitClassDeclaration:function(e){this.visitAny(e.name),this.visitAny(e.superClass),this.visitList(e.elements),this.visitList(e.annotations),this.visitAny(e.typeParameters)},visitClassExpression:function(e){this.visitAny(e.name),this.visitAny(e.superClass),this.visitList(e.elements),this.visitList(e.annotations),this.visitAny(e.typeParameters)},visitCommaExpression:function(e){this.visitList(e.expressions)},visitComprehensionFor:function(e){this.visitAny(e.left),this.visitAny(e.iterator)},visitComprehensionIf:function(e){this.visitAny(e.expression)},visitComputedPropertyName:function(e){this.visitAny(e.expression)},visitConditionalExpression:function(e){this.visitAny(e.condition),this.visitAny(e.left),this.visitAny(e.right)},visitConstructSignature:function(e){this.visitAny(e.typeParameters),this.visitAny(e.parameterList),this.visitAny(e.returnType)},visitConstructorType:function(e){this.visitAny(e.typeParameters),this.visitAny(e.parameterList),this.visitAny(e.returnType)},visitContinueStatement:function(){},visitCoverFormals:function(e){this.visitList(e.expressions)},visitCoverInitializedName:function(e){this.visitAny(e.initializer)},visitDebuggerStatement:function(){},visitDefaultClause:function(e){this.visitList(e.statements)},visitDoWhileStatement:function(e){this.visitAny(e.body),this.visitAny(e.condition)},visitEmptyStatement:function(){},visitExportDeclaration:function(e){this.visitAny(e.declaration),this.visitList(e.annotations)},visitExportDefault:function(e){this.visitAny(e.expression)},visitExportSpecifier:function(){},visitExportSpecifierSet:function(e){this.visitList(e.specifiers)},visitExportStar:function(){},visitExpressionStatement:function(e){this.visitAny(e.expression)},visitFinally:function(e){this.visitAny(e.block)},visitForInStatement:function(e){this.visitAny(e.initializer),this.visitAny(e.collection),this.visitAny(e.body)},visitForOfStatement:function(e){this.visitAny(e.initializer),this.visitAny(e.collection),this.visitAny(e.body)},visitForOnStatement:function(e){this.visitAny(e.initializer),this.visitAny(e.observable),this.visitAny(e.body)},visitForStatement:function(e){this.visitAny(e.initializer),this.visitAny(e.condition),this.visitAny(e.increment),this.visitAny(e.body)},visitFormalParameter:function(e){this.visitAny(e.parameter),this.visitAny(e.typeAnnotation),this.visitList(e.annotations)},visitFormalParameterList:function(e){this.visitList(e.parameters)},visitFunctionBody:function(e){this.visitList(e.statements)},visitFunctionDeclaration:function(e){this.visitAny(e.name),this.visitAny(e.parameterList),this.visitAny(e.typeAnnotation),this.visitList(e.annotations),this.visitAny(e.body)},visitFunctionExpression:function(e){this.visitAny(e.name),this.visitAny(e.parameterList),this.visitAny(e.typeAnnotation),this.visitList(e.annotations),this.visitAny(e.body)},visitFunctionType:function(e){this.visitAny(e.typeParameters),this.visitAny(e.parameterList),this.visitAny(e.returnType)},visitGeneratorComprehension:function(e){this.visitList(e.comprehensionList),this.visitAny(e.expression)},visitGetAccessor:function(e){this.visitAny(e.name),this.visitAny(e.typeAnnotation),this.visitList(e.annotations),this.visitAny(e.body)},visitIdentifierExpression:function(){},visitIfStatement:function(e){this.visitAny(e.condition),this.visitAny(e.ifClause),this.visitAny(e.elseClause)},visitImportedBinding:function(e){this.visitAny(e.binding)},visitImportDeclaration:function(e){this.visitAny(e.importClause),this.visitAny(e.moduleSpecifier)},visitImportSpecifier:function(e){this.visitAny(e.binding)},visitImportSpecifierSet:function(e){this.visitList(e.specifiers)},visitIndexSignature:function(e){this.visitAny(e.indexType),this.visitAny(e.typeAnnotation)},visitInterfaceDeclaration:function(e){this.visitAny(e.typeParameters),this.visitAny(e.objectType)},visitLabelledStatement:function(e){this.visitAny(e.statement)},visitLiteralExpression:function(){},visitLiteralPropertyName:function(){},visitMemberExpression:function(e){this.visitAny(e.operand)},visitMemberLookupExpression:function(e){this.visitAny(e.operand),this.visitAny(e.memberExpression)},visitMethodSignature:function(e){this.visitAny(e.name),this.visitAny(e.callSignature)},visitModule:function(e){this.visitList(e.scriptItemList)},visitModuleDeclaration:function(e){this.visitAny(e.binding),this.visitAny(e.expression)},visitModuleSpecifier:function(){},visitNamedExport:function(e){this.visitAny(e.moduleSpecifier),this.visitAny(e.specifierSet)},visitNewExpression:function(e){this.visitAny(e.operand),this.visitAny(e.args)},visitObjectLiteralExpression:function(e){this.visitList(e.propertyNameAndValues)},visitObjectPattern:function(e){this.visitList(e.fields)},visitObjectPatternField:function(e){this.visitAny(e.name),this.visitAny(e.element)},visitObjectType:function(e){this.visitList(e.typeMembers)},visitParenExpression:function(e){this.visitAny(e.expression)},visitPostfixExpression:function(e){this.visitAny(e.operand)},visitPredefinedType:function(){},visitScript:function(e){this.visitList(e.scriptItemList)},visitPropertyMethodAssignment:function(e){this.visitAny(e.name),this.visitAny(e.parameterList),this.visitAny(e.typeAnnotation),this.visitList(e.annotations),this.visitAny(e.body),this.visitAny(e.debugName)},visitPropertyNameAssignment:function(e){this.visitAny(e.name),this.visitAny(e.value)},visitPropertyNameShorthand:function(){},visitPropertyVariableDeclaration:function(e){this.visitAny(e.name),this.visitAny(e.typeAnnotation),this.visitList(e.annotations),this.visitAny(e.initializer)},visitPropertySignature:function(e){this.visitAny(e.name),this.visitAny(e.typeAnnotation)},visitRestParameter:function(e){this.visitAny(e.identifier),this.visitAny(e.typeAnnotation)},visitReturnStatement:function(e){this.visitAny(e.expression)},visitSetAccessor:function(e){this.visitAny(e.name),this.visitAny(e.parameterList),this.visitList(e.annotations),this.visitAny(e.body)},visitSpreadExpression:function(e){this.visitAny(e.expression)},visitSpreadPatternElement:function(e){this.visitAny(e.lvalue)},visitSuperExpression:function(){},visitSwitchStatement:function(e){this.visitAny(e.expression),this.visitList(e.caseClauses)},visitSyntaxErrorTree:function(){},visitTemplateLiteralExpression:function(e){this.visitAny(e.operand),this.visitList(e.elements)},visitTemplateLiteralPortion:function(){},visitTemplateSubstitution:function(e){this.visitAny(e.expression)},visitThisExpression:function(){},visitThrowStatement:function(e){this.visitAny(e.value)},visitTryStatement:function(e){this.visitAny(e.body),this.visitAny(e.catchBlock),this.visitAny(e.finallyBlock)},visitTypeArguments:function(e){this.visitList(e.args)},visitTypeName:function(e){this.visitAny(e.moduleName)},visitTypeParameter:function(e){this.visitAny(e.extendsType)},visitTypeParameters:function(e){this.visitList(e.parameters)},visitTypeReference:function(e){this.visitAny(e.typeName),this.visitAny(e.args)},visitUnaryExpression:function(e){this.visitAny(e.operand)},visitUnionType:function(e){this.visitList(e.types)},visitVariableDeclaration:function(e){this.visitAny(e.lvalue),this.visitAny(e.typeAnnotation),this.visitAny(e.initializer)},visitVariableDeclarationList:function(e){this.visitList(e.declarations)},visitVariableStatement:function(e){this.visitAny(e.declarations)},visitWhileStatement:function(e){this.visitAny(e.condition),this.visitAny(e.body)},visitWithStatement:function(e){this.visitAny(e.expression),this.visitAny(e.body)},visitYieldExpression:function(e){this.visitAny(e.expression)}},{}),{get ParseTreeVisitor(){return e}}}),System.registerModule("traceur@0.0.87/src/util/StringSet.js",[],function(){"use strict"
function e(e){if("string"!=typeof e)throw new TypeError}var t=function(){this.storage_=Object.create(null)}
return $traceurRuntime.createClass(t,{add:function(t){e(t),this.storage_[t]=!0},has:function(t){return e(t),void 0!==this.storage_[t]},"delete":function(t){e(t),delete this.storage_[t]},isEmpty:function(){for(var e in this.storage_)return!1
return!0},valuesAsArray:function(){return Object.keys(this.storage_)},forEach:function(e){for(var t in this.storage_)e(t)}},{}),{get StringSet(){return t}}}),System.registerModule("traceur@0.0.87/src/util/StringMap.js",[],function(){"use strict"
function e(e){if("string"!=typeof e)throw new TypeError}var t=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,r=function(){this.storage_=Object.create(null)}
return $traceurRuntime.createClass(r,{set:function(t,r){e(t),this.storage_[t]=r},get:function(t){return e(t),this.storage_[t]},"delete":function(t){e(t),delete this.storage_[t]},has:function(t){return e(t),void 0!==this.storage_[t]},keysAsArray:function(){return Object.keys(this.storage_)},keysAsSet:function(){var e=new t
return this.forEach(function(t){return e.add(t)}),e},forEach:function(e){for(var t in this.storage_)e(t,this.storage_[t])}},{}),{get StringMap(){return r}}}),System.registerModule("traceur@0.0.87/src/syntax/PredefinedName.js",[],function(){"use strict"
var e="$arguments",t="any",r="apply",n="arguments",i="Array",s="as",a="async",o="async star",c="await",u="bind",l="call",p="configurable",f="constructor",h="create",m="current",d="defineProperty",g="enumerable",y="freeze",_="from",S="Function",v="get",b="has",T="length",j="module",E="new",O="Object",A="Object",R="of",x="on",w="preventExtensions",C="prototype",P="push",L="set",I="slice",N="this",M="$traceurRuntime",k="undefined",F="writable"
return{get $ARGUMENTS(){return e},get ANY(){return t},get APPLY(){return r},get ARGUMENTS(){return n},get ARRAY(){return i},get AS(){return s},get ASYNC(){return a},get ASYNC_STAR(){return o},get AWAIT(){return c},get BIND(){return u},get CALL(){return l},get CONFIGURABLE(){return p},get CONSTRUCTOR(){return f},get CREATE(){return h},get CURRENT(){return m},get DEFINE_PROPERTY(){return d},get ENUMERABLE(){return g},get FREEZE(){return y},get FROM(){return _},get FUNCTION(){return S},get GET(){return v},get HAS(){return b},get LENGTH(){return T},get MODULE(){return j},get NEW(){return E},get OBJECT(){return O},get OBJECT_NAME(){return A},get OF(){return R},get ON(){return x},get PREVENT_EXTENSIONS(){return w},get PROTOTYPE(){return C},get PUSH(){return P},get SET(){return L},get SLICE(){return I},get THIS(){return N},get TRACEUR_RUNTIME(){return M},get UNDEFINED(){return k},get WRITABLE(){return F}}}),System.registerModule("traceur@0.0.87/src/semantics/util.js",[],function(){"use strict"
function e(e){for(var t=0;t<e.length;t++){if(!e[t].isDirectivePrologue())return!1
if(e[t].isUseStrictDirective())return!0}return!1}function t(e){return e.type===o?t(e.expression):e.type===s&&e.identifierToken.value===u}function r(e){return e.type===o?r(e.expression):e.type===c&&e.operator.type===l&&n(e.operand)}function n(e){return e.type===o?n(e.expression):e.type===a}var i=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),s=i.IDENTIFIER_EXPRESSION,a=i.LITERAL_EXPRESSION,o=i.PAREN_EXPRESSION,c=i.UNARY_EXPRESSION,u=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").UNDEFINED,l=System.get("traceur@0.0.87/src/syntax/TokenType.js").VOID
return{get hasUseStrict(){return e},get isUndefined(){return t},get isVoidExpression(){return r},get isLiteralExpression(){return n}}}),System.registerModule("traceur@0.0.87/src/semantics/isTreeStrict.js",[],function(){"use strict"
function e(t){switch(t.type){case n:case i:case u:return!0
case s:return h(t.statements)
case o:case a:case l:return e(t.body)
case r:return t.body.type===s?e(t.body):!1
case c:case f:return e(t.body)
case p:return h(t.scriptItemList)
default:return!1}}var t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),r=t.ARROW_FUNCTION_EXPRESSION,n=t.CLASS_DECLARATION,i=t.CLASS_EXPRESSION,s=t.FUNCTION_BODY,a=t.FUNCTION_DECLARATION,o=t.FUNCTION_EXPRESSION,c=t.GET_ACCESSOR,u=t.MODULE,l=t.PROPERTY_METHOD_ASSIGNMENT,p=t.SCRIPT,f=t.SET_ACCESSOR,h=System.get("traceur@0.0.87/src/semantics/util.js").hasUseStrict
return{get isTreeStrict(){return e}}}),System.registerModule("traceur@0.0.87/src/semantics/Scope.js",[],function(){"use strict"
function e(e,t,r){e.reportError(t.location&&t.location.start,"Duplicate declaration, "+r)}var t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),r=t.BLOCK,n=t.CATCH,i=System.get("traceur@0.0.87/src/util/StringMap.js").StringMap,s=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,a=System.get("traceur@0.0.87/src/semantics/isTreeStrict.js").isTreeStrict,o=function(e,t){this.parent=e,this.tree=t,this.variableDeclarations_=new i,this.lexicalDeclarations_=new i,this.strictMode=e&&e.strictMode||a(t),this.inGenerator=e?e.inGenerator||!1:!1}
return $traceurRuntime.createClass(o,{addBinding:function(e,t,r){t===s?this.addVar(e,r):this.addDeclaration(e,t,r)},addVar:function(t,r){var n=t.getStringValue()
return this.lexicalDeclarations_.has(n)?void e(r,t,n):(this.variableDeclarations_.set(n,{type:s,tree:t}),void(!this.isVarScope&&this.parent&&this.parent.addVar(t,r)))},addDeclaration:function(t,r,n){var i=t.getStringValue()
return this.lexicalDeclarations_.has(i)||this.variableDeclarations_.has(i)?void e(n,t,i):void this.lexicalDeclarations_.set(i,{type:r,tree:t})},renameBinding:function(e,t,r,n){t.getStringValue()
r===s?this.lexicalDeclarations_.has(e)&&(this.lexicalDeclarations_["delete"](e),this.addVar(t,n)):this.variableDeclarations_.has(e)&&(this.variableDeclarations_["delete"](e),this.addDeclaration(t,r,n),!this.isVarScope&&this.parent&&this.parent.renameBinding(e,t,r))},get isVarScope(){switch(this.tree.type){case r:case n:return!1}return!0},getVarScope:function(){return this.isVarScope?this:this.parent?this.parent.getVarScope():null},getBinding:function(e){var t=e.getStringValue()
return this.getBindingByName(t)},getBindingByName:function(e){var t=this.lexicalDeclarations_.get(e)
return t?t:(t=this.variableDeclarations_.get(e),t&&this.isVarScope?t:this.parent?this.parent.getBindingByName(e):null)},getAllBindingNames:function(){var e=this.variableDeclarations_.keysAsSet()
return this.lexicalDeclarations_.forEach(function(t){return e.add(t)}),e},getVariableBindingNames:function(){return this.variableDeclarations_.keysAsSet()},getLexicalBindingNames:function(){return this.lexicalDeclarations_.keysAsSet()},hasBindingName:function(e){return this.lexicalDeclarations_.has(e)||this.variableDeclarations_.has(e)},hasLexicalBindingName:function(e){return this.lexicalDeclarations_.has(e)},hasVariableBindingName:function(e){return this.variableDeclarations_.has(e)}},{}),{get Scope(){return o}}}),System.registerModule("traceur@0.0.87/src/semantics/ScopeVisitor.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/runtime/polyfills/Map.js").Map,t=System.get("traceur@0.0.87/src/syntax/ParseTreeVisitor.js").ParseTreeVisitor,r=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,n=System.get("traceur@0.0.87/src/semantics/Scope.js").Scope,i=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),s=i.COMPREHENSION_FOR,a=i.VARIABLE_DECLARATION_LIST,o=function(){$traceurRuntime.superConstructor(c).call(this),this.map_=new e,this.scope=null,this.withBlockCounter_=0},c=o
return $traceurRuntime.createClass(o,{getScopeForTree:function(e){return this.map_.get(e)},createScope:function(e){return new n(this.scope,e)},pushScope:function(e){var t=this.createScope(e)
return this.map_.set(e,t),this.scope=t},popScope:function(e){if(this.scope!==e)throw Error("ScopeVisitor scope mismatch")
this.scope=e.parent},visitScript:function(e){var t=this.pushScope(e)
$traceurRuntime.superGet(this,c.prototype,"visitScript").call(this,e),this.popScope(t)},visitModule:function(e){var t=this.pushScope(e)
$traceurRuntime.superGet(this,c.prototype,"visitModule").call(this,e),this.popScope(t)},visitBlock:function(e){var t=this.pushScope(e)
$traceurRuntime.superGet(this,c.prototype,"visitBlock").call(this,e),this.popScope(t)},visitCatch:function(e){var t=this.pushScope(e)
this.visitAny(e.binding),this.visitList(e.catchBody.statements),this.popScope(t)},visitFunctionBodyForScope:function(e){var t=void 0!==arguments[1]?arguments[1]:e.parameterList,r=this.pushScope(e)
this.visitAny(t),r.inGenerator=e.functionKind&&e.isGenerator(),this.visitAny(e.body),this.popScope(r)},visitFunctionExpression:function(e){this.visitFunctionBodyForScope(e)},visitFunctionDeclaration:function(e){this.visitAny(e.name),this.visitFunctionBodyForScope(e)},visitArrowFunctionExpression:function(e){this.visitFunctionBodyForScope(e)},visitGetAccessor:function(e){this.visitFunctionBodyForScope(e,null)},visitSetAccessor:function(e){this.visitFunctionBodyForScope(e)},visitPropertyMethodAssignment:function(e){this.visitFunctionBodyForScope(e)},visitClassDeclaration:function(e){this.visitAny(e.superClass)
var t=this.pushScope(e)
this.visitAny(e.name),this.visitList(e.elements),this.popScope(t)},visitClassExpression:function(e){this.visitAny(e.superClass)
var t
e.name&&(t=this.pushScope(e),this.visitAny(e.name)),this.visitList(e.elements),e.name&&this.popScope(t)},visitWithStatement:function(e){this.visitAny(e.expression),this.withBlockCounter_++,this.visitAny(e.body),this.withBlockCounter_--},get inWithBlock(){return this.withBlockCounter_>0},visitLoop_:function(e,t){if(e.initializer.type!==a||e.initializer.declarationType===r)return void t()
var n=this.pushScope(e)
t(),this.popScope(n)},visitForInStatement:function(e){var t=this
this.visitLoop_(e,function(){return $traceurRuntime.superGet(t,c.prototype,"visitForInStatement").call(t,e)})},visitForOfStatement:function(e){var t=this
this.visitLoop_(e,function(){return $traceurRuntime.superGet(t,c.prototype,"visitForOfStatement").call(t,e)})},visitForStatement:function(e){var t=this
e.initializer?this.visitLoop_(e,function(){return $traceurRuntime.superGet(t,c.prototype,"visitForStatement").call(t,e)}):$traceurRuntime.superGet(this,c.prototype,"visitForStatement").call(this,e)},visitComprehension_:function(e){for(var t=[],r=0;r<e.comprehensionList.length;r++){var n=null
e.comprehensionList[r].type===s&&(n=this.pushScope(e.comprehensionList[r])),t.push(n),this.visitAny(e.comprehensionList[r])}this.visitAny(e.expression)
for(var i=t.length-1;i>=0;i--)t[i]&&this.popScope(t[i])},visitArrayComprehension:function(e){this.visitComprehension_(e)},visitGeneratorComprehension:function(e){this.visitComprehension_(e)},visitPredefinedType:function(){},visitTypeArguments:function(){},visitFunctionType:function(){}},{},t),{get ScopeVisitor(){return o}}}),System.registerModule("traceur@0.0.87/src/semantics/ScopeChainBuilder.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/TokenType.js"),t=e.CONST,r=e.LET,n=e.VAR,i=System.get("traceur@0.0.87/src/semantics/ScopeVisitor.js").ScopeVisitor,s=function(e){$traceurRuntime.superConstructor(a).call(this),this.reporter=e,this.declarationType_=null},a=s
return $traceurRuntime.createClass(s,{visitCatch:function(e){var t=this.pushScope(e)
this.declarationType_=r,this.visitAny(e.binding),this.visitList(e.catchBody.statements),this.popScope(t)},visitImportedBinding:function(e){this.declarationType_=t,$traceurRuntime.superGet(this,a.prototype,"visitImportedBinding").call(this,e)},visitVariableDeclarationList:function(e){this.declarationType_=e.declarationType,$traceurRuntime.superGet(this,a.prototype,"visitVariableDeclarationList").call(this,e)},visitBindingIdentifier:function(e){this.declareVariable(e)},visitFunctionExpression:function(e){var r=this.pushScope(e)
e.name&&(this.declarationType_=t,this.visitAny(e.name)),this.visitAny(e.parameterList),r.inGenerator=e.isGenerator(),this.visitAny(e.body),this.popScope(r)},visitFormalParameter:function(e){this.declarationType_=n,$traceurRuntime.superGet(this,a.prototype,"visitFormalParameter").call(this,e)},visitFunctionDeclaration:function(e){if(this.scope)if(this.scope.isVarScope)this.declarationType_=n,this.visitAny(e.name)
else{if(!this.scope.strictMode){var t=this.scope.getVarScope()
t&&t.addVar(e.name,this.reporter)}this.declarationType_=r,this.visitAny(e.name)}this.visitFunctionBodyForScope(e,e.parameterList,e.body)},visitClassDeclaration:function(e){this.visitAny(e.superClass),this.declarationType_=r,this.visitAny(e.name)
var n=this.pushScope(e)
this.declarationType_=t,this.visitAny(e.name),this.visitList(e.elements),this.popScope(n)},visitClassExpression:function(e){this.visitAny(e.superClass)
var r
e.name&&(r=this.pushScope(e),this.declarationType_=t,this.visitAny(e.name)),this.visitList(e.elements),e.name&&this.popScope(r)},visitComprehensionFor:function(e){this.declarationType_=r,$traceurRuntime.superGet(this,a.prototype,"visitComprehensionFor").call(this,e)},declareVariable:function(e){this.scope.addBinding(e,this.declarationType_,this.reporter)}},{},i),{get ScopeChainBuilder(){return s}}}),System.registerModule("traceur@0.0.87/src/semantics/ConstChecker.js",[],function(){"use strict"
function e(e,t){var r=new o(t)
r.visitAny(e)
var n=new c(r,t)
n.visitAny(e)}var t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js").IDENTIFIER_EXPRESSION,r=System.get("traceur@0.0.87/src/syntax/TokenType.js"),n=r.CONST,i=r.MINUS_MINUS,s=r.PLUS_PLUS,a=System.get("traceur@0.0.87/src/semantics/ScopeVisitor.js").ScopeVisitor,o=System.get("traceur@0.0.87/src/semantics/ScopeChainBuilder.js").ScopeChainBuilder,c=function(e,t){$traceurRuntime.superConstructor(u).call(this),this.scopeBuilder_=e,this.reporter_=t},u=c
return $traceurRuntime.createClass(c,{pushScope:function(e){return this.scope=this.scopeBuilder_.getScopeForTree(e)},visitUnaryExpression:function(e){e.operand.type!==t||e.operator.type!==s&&e.operator.type!==i||this.validateMutation_(e.operand),$traceurRuntime.superGet(this,u.prototype,"visitUnaryExpression").call(this,e)},visitPostfixExpression:function(e){e.operand.type===t&&this.validateMutation_(e.operand),$traceurRuntime.superGet(this,u.prototype,"visitPostfixExpression").call(this,e)},visitBinaryExpression:function(e){e.left.type===t&&e.operator.isAssignmentOperator()&&this.validateMutation_(e.left),$traceurRuntime.superGet(this,u.prototype,"visitBinaryExpression").call(this,e)},validateMutation_:function(e){if(!this.inWithBlock){var t=this.scope.getBinding(e)
if(null!==t){var r=t,i=r.type,s=r.tree
i===n&&this.reportError_(e.location,s.getStringValue()+" is read-only")}}},reportError_:function(e,t){this.reporter_.reportError(e.start,t)}},{},a),{get ConstChecker(){return c},get validate(){return e}}}),System.registerModule("traceur@0.0.87/src/semantics/ScopeReferences.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/semantics/Scope.js").Scope,t=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,r=function(e,r){$traceurRuntime.superConstructor(n).call(this,e,r),this.freeVars_=new t},n=r
return $traceurRuntime.createClass(r,{addReference:function(e){this.freeVars_.add(e)},hasFreeVariable:function(e){return this.freeVars_.has(e)}},{},e),{get ScopeReferences(){return r}}}),System.registerModule("traceur@0.0.87/src/semantics/ScopeChainBuilderWithReferences.js",[],function(){"use strict"
function e(e){for(;e;e=e.parent)switch(e.tree.type){case s:case a:case o:case l:case p:return!0}return!1}function t(e){for(;e;e=e.parent)if(e.tree.type===u)return!0
return!1}var r=System.get("traceur@0.0.87/src/semantics/ScopeChainBuilder.js").ScopeChainBuilder,n=System.get("traceur@0.0.87/src/semantics/ScopeReferences.js").ScopeReferences,i=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),s=i.FUNCTION_DECLARATION,a=i.FUNCTION_EXPRESSION,o=i.GET_ACCESSOR,c=i.IDENTIFIER_EXPRESSION,u=i.MODULE,l=i.PROPERTY_METHOD_ASSIGNMENT,p=i.SET_ACCESSOR,f=System.get("traceur@0.0.87/src/syntax/TokenType.js").TYPEOF,h=function(){$traceurRuntime.superConstructor(m).apply(this,arguments)},m=h
return $traceurRuntime.createClass(h,{createScope:function(e){return new n(this.scope,e)},visitIdentifierExpression:function(r){if(!this.inWithBlock){var n=this.scope,i=r.getStringValue()
"arguments"===i&&e(n)||"__moduleName"===i&&t(n)||this.referenceFound(r,i)}},visitUnaryExpression:function(e){if(e.operator.type===f&&e.operand.type===c){var t=this.scope,r=t.getBinding(e.operand)
r||t.addVar(e.operand,this.reporter)}else $traceurRuntime.superGet(this,m.prototype,"visitUnaryExpression").call(this,e)},referenceFound:function(e,t){this.scope.addReference(t)}},{},r),{get ScopeChainBuilderWithReferences(){return h}}}),System.registerModule("traceur@0.0.87/src/semantics/FreeVariableChecker.js",[],function(){"use strict"
function e(e,t){var n=void 0!==arguments[2]?arguments[2]:Reflect.global,i=new r(t,n)
i.visitAny(e)}var t=System.get("traceur@0.0.87/src/semantics/ScopeChainBuilderWithReferences.js").ScopeChainBuilderWithReferences,r=function(e,t){$traceurRuntime.superConstructor(n).call(this,e),this.global_=t},n=r
return $traceurRuntime.createClass(r,{referenceFound:function(e,t){this.scope.getBinding(e)||t in this.global_||this.reporter.reportError(e.location.start,t+" is not defined")}},{},t),{get validate(){return e}}}),System.registerModule("traceur@0.0.87/src/util/JSON.js",[],function(){"use strict"
function e(e){var r=void 0!==arguments[1]?arguments[1]:function(e,t){return t}
return t(r("",e),r)}function t(e,r){var n,i
if(Array.isArray(e)){var s=e.length
n=Array(s)
for(var a=0;s>a;a++)i=t(r(a+"",e[a]),r),n[a]=void 0===i?null:i
return n}return e instanceof Object?(n={},Object.keys(e).forEach(function(s){i=t(r(s,e[s]),r),void 0!==i&&(n[s]=i)}),n):e}return{get transform(){return e}}}),System.registerModule("traceur@0.0.87/src/syntax/Token.js",[],function(){"use strict"
function e(e){switch(e){case r:case n:case i:case s:case a:case o:case c:case u:case l:case p:case f:case h:case m:return!0}return!1}var t=System.get("traceur@0.0.87/src/syntax/TokenType.js"),r=t.AMPERSAND_EQUAL,n=t.BAR_EQUAL,i=t.CARET_EQUAL,s=t.EQUAL,a=t.LEFT_SHIFT_EQUAL,o=t.MINUS_EQUAL,c=t.PERCENT_EQUAL,u=t.PLUS_EQUAL,l=t.RIGHT_SHIFT_EQUAL,p=t.SLASH_EQUAL,f=t.STAR_EQUAL,h=t.STAR_STAR_EQUAL,m=t.UNSIGNED_RIGHT_SHIFT_EQUAL,d=function(e,t){this.type=e,this.location=t}
return $traceurRuntime.createClass(d,{toString:function(){return this.type},isAssignmentOperator:function(){return e(this.type)},isKeyword:function(){return!1},isStrictKeyword:function(){return!1}},{}),{get Token(){return d},get isAssignmentOperator(){return e}}}),System.registerModule("traceur@0.0.87/src/syntax/trees/ParseTree.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),t=System.get("traceur@0.0.87/src/syntax/TokenType.js"),r=t.IDENTIFIER,n=t.STAR,i=t.STRING,s=t.VAR,a=System.get("traceur@0.0.87/src/syntax/Token.js").Token,o=System.get("traceur@0.0.87/src/util/JSON.js"),c=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),u=c.ASYNC,l=c.ASYNC_STAR,p=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),f=p.ARRAY_COMPREHENSION,h=p.ARRAY_LITERAL_EXPRESSION,m=p.ARRAY_PATTERN,d=p.ARROW_FUNCTION_EXPRESSION,g=p.AWAIT_EXPRESSION,y=p.BINARY_EXPRESSION,_=p.BINDING_IDENTIFIER,S=p.BLOCK,v=p.BREAK_STATEMENT,b=p.CALL_EXPRESSION,T=p.CLASS_DECLARATION,j=p.CLASS_EXPRESSION,E=p.COMMA_EXPRESSION,O=p.CONDITIONAL_EXPRESSION,A=p.CONTINUE_STATEMENT,R=p.DEBUGGER_STATEMENT,x=p.DO_WHILE_STATEMENT,w=p.EMPTY_STATEMENT,C=p.EXPORT_DECLARATION,P=p.EXPRESSION_STATEMENT,L=p.FORMAL_PARAMETER,I=p.FOR_IN_STATEMENT,N=p.FOR_OF_STATEMENT,M=p.FOR_ON_STATEMENT,k=p.FOR_STATEMENT,F=p.FUNCTION_DECLARATION,$=p.FUNCTION_EXPRESSION,B=p.GENERATOR_COMPREHENSION,D=p.IDENTIFIER_EXPRESSION,V=p.IF_STATEMENT,G=p.IMPORTED_BINDING,U=p.IMPORT_DECLARATION,z=p.INTERFACE_DECLARATION,H=p.LABELLED_STATEMENT,Y=p.LITERAL_EXPRESSION,X=p.LITERAL_PROPERTY_NAME,W=p.MEMBER_EXPRESSION,Q=p.MEMBER_LOOKUP_EXPRESSION,K=p.MODULE_DECLARATION,q=p.NEW_EXPRESSION,J=p.OBJECT_LITERAL_EXPRESSION,Z=p.OBJECT_PATTERN,ee=p.PAREN_EXPRESSION,te=p.POSTFIX_EXPRESSION,re=p.PREDEFINED_TYPE,ne=p.PROPERTY_NAME_SHORTHAND,ie=p.REST_PARAMETER,se=p.RETURN_STATEMENT,ae=p.SPREAD_EXPRESSION,oe=p.SPREAD_PATTERN_ELEMENT,ce=p.SUPER_EXPRESSION,ue=p.SWITCH_STATEMENT,le=p.TEMPLATE_LITERAL_EXPRESSION,pe=p.THIS_EXPRESSION,fe=p.THROW_STATEMENT,he=p.TRY_STATEMENT,me=p.TYPE_REFERENCE,de=p.UNARY_EXPRESSION,ge=p.VARIABLE_DECLARATION,ye=p.VARIABLE_STATEMENT,_e=p.WHILE_STATEMENT,Se=p.WITH_STATEMENT,ve=p.YIELD_EXPRESSION,be=function(e){this.location=e},Te=be
return $traceurRuntime.createClass(be,{isPattern:function(){switch(this.type){case m:case Z:return!0
default:return!1}},isLeftHandSideExpression:function(){switch(this.type){case pe:case j:case ce:case D:case Y:case h:case J:case q:case W:case Q:case b:case $:case le:return!0
case ee:return this.expression.isLeftHandSideExpression()
default:return!1}},isAssignmentExpression:function(){switch(this.type){case f:case h:case d:case g:case y:case b:case j:case O:case $:case B:case D:case Y:case W:case Q:case q:case J:case ee:case te:case le:case ce:case pe:case de:case ve:return!0
default:return!1}},isMemberExpression:function(){switch(this.type){case pe:case j:case ce:case D:case Y:case h:case J:case ee:case le:case $:case Q:case W:case b:return!0
case q:return null!==this.args}return!1},isExpression:function(){return this.isAssignmentExpression()||this.type===E},isAssignmentOrSpread:function(){return this.isAssignmentExpression()||this.type===ae},isRestParameter:function(){return this.type===ie||this.type===L&&this.parameter.isRestParameter()},isSpreadPatternElement:function(){return this.type===oe},isStatementListItem:function(){return this.isStatement()||this.isDeclaration()},isStatement:function(){switch(this.type){case S:case ye:case w:case P:case V:case A:case v:case se:case Se:case H:case fe:case he:case R:return!0}return this.isBreakableStatement()},isDeclaration:function(){switch(this.type){case F:case T:return!0}return this.isLexicalDeclaration()},isLexicalDeclaration:function(){switch(this.type){case ye:return this.declarations.declarationType!==s}return!1},isBreakableStatement:function(){switch(this.type){case ue:return!0}return this.isIterationStatement()},isIterationStatement:function(){switch(this.type){case x:case I:case N:case M:case k:case _e:return!0}return!1},isScriptElement:function(){switch(this.type){case T:case C:case F:case U:case z:case K:case ge:return!0}return this.isStatement()},isGenerator:function(){return null!==this.functionKind&&this.functionKind.type===n},isAsyncFunction:function(){return null!==this.functionKind&&this.functionKind.type===r&&this.functionKind.value===u},isAsyncGenerator:function(){return null!==this.functionKind&&this.functionKind.type===r&&this.functionKind.value===l},isType:function(){switch(this.type){case re:case me:return!0}return!1},getDirectivePrologueStringToken_:function(){var e=this
return e.type===P&&(e=e.expression)&&e.type===Y&&(e=e.literalToken)?e.type!==i?null:e:null},isDirectivePrologue:function(){return null!==this.getDirectivePrologueStringToken_()},isUseStrictDirective:function(){var e=this.getDirectivePrologueStringToken_()
if(!e)return!1
var t=e.value
return'"use strict"'===t||"'use strict'"===t},toJSON:function(){return o.transform(this,Te.replacer)},stringify:function(){var e=void 0!==arguments[0]?arguments[0]:2
return JSON.stringify(this,Te.replacer,e)},getStringValue:function(){switch(this.type){case D:case _:return""+this.identifierToken
case G:return this.binding.getStringValue()
case ne:return""+this.name
case X:return""+this.literalToken}throw Error("Not yet implemented")}},{stripLocation:function(e,t){return"location"===e?void 0:t},replacer:function(e,t){if(t instanceof Te||t instanceof a){var r={type:t.type}
return Object.keys(t).forEach(function(e){"location"!==e&&(r[e]=t[e])}),r}return t}}),{get ParseTreeType(){return e},get ParseTree(){return be}}}),System.registerModule("traceur@0.0.87/src/syntax/trees/ParseTrees.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTree.js").ParseTree,t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),r=t.ANNOTATION,n=function(e,t,r){$traceurRuntime.superConstructor(i).call(this,e),this.name=t,this.args=r},i=n
$traceurRuntime.createClass(n,{transform:function(e){return e.transformAnnotation(this)},visit:function(e){e.visitAnnotation(this)},get type(){return r}},{},e)
var s=t.ANON_BLOCK,a=function(e,t){$traceurRuntime.superConstructor(o).call(this,e),this.statements=t},o=a
$traceurRuntime.createClass(a,{transform:function(e){return e.transformAnonBlock(this)},visit:function(e){e.visitAnonBlock(this)},get type(){return s}},{},e)
var c=t.ARGUMENT_LIST,u=function(e,t){$traceurRuntime.superConstructor(l).call(this,e),this.args=t},l=u
$traceurRuntime.createClass(u,{transform:function(e){return e.transformArgumentList(this)},visit:function(e){e.visitArgumentList(this)},get type(){return c}},{},e)
var p=t.ARRAY_COMPREHENSION,f=function(e,t,r){$traceurRuntime.superConstructor(h).call(this,e),this.comprehensionList=t,this.expression=r},h=f
$traceurRuntime.createClass(f,{transform:function(e){return e.transformArrayComprehension(this)},visit:function(e){e.visitArrayComprehension(this)},get type(){return p}},{},e)
var m=t.ARRAY_LITERAL_EXPRESSION,d=function(e,t){$traceurRuntime.superConstructor(g).call(this,e),this.elements=t},g=d
$traceurRuntime.createClass(d,{transform:function(e){return e.transformArrayLiteralExpression(this)},visit:function(e){e.visitArrayLiteralExpression(this)},get type(){return m}},{},e)
var y=t.ARRAY_PATTERN,_=function(e,t){$traceurRuntime.superConstructor(S).call(this,e),this.elements=t},S=_
$traceurRuntime.createClass(_,{transform:function(e){return e.transformArrayPattern(this)},visit:function(e){e.visitArrayPattern(this)},get type(){return y}},{},e)
var v=t.ARRAY_TYPE,b=function(e,t){$traceurRuntime.superConstructor(T).call(this,e),this.elementType=t},T=b
$traceurRuntime.createClass(b,{transform:function(e){return e.transformArrayType(this)},visit:function(e){e.visitArrayType(this)},get type(){return v}},{},e)
var j=t.ARROW_FUNCTION_EXPRESSION,E=function(e,t,r,n){$traceurRuntime.superConstructor(O).call(this,e),this.functionKind=t,this.parameterList=r,this.body=n},O=E
$traceurRuntime.createClass(E,{transform:function(e){return e.transformArrowFunctionExpression(this)},visit:function(e){e.visitArrowFunctionExpression(this)},get type(){return j}},{},e)
var A=t.ASSIGNMENT_ELEMENT,R=function(e,t,r){$traceurRuntime.superConstructor(x).call(this,e),this.assignment=t,this.initializer=r},x=R
$traceurRuntime.createClass(R,{transform:function(e){return e.transformAssignmentElement(this)},visit:function(e){e.visitAssignmentElement(this)},get type(){return A}},{},e)
var w=t.AWAIT_EXPRESSION,C=function(e,t){$traceurRuntime.superConstructor(P).call(this,e),this.expression=t},P=C
$traceurRuntime.createClass(C,{transform:function(e){return e.transformAwaitExpression(this)},visit:function(e){e.visitAwaitExpression(this)},get type(){return w}},{},e)
var L=t.BINARY_EXPRESSION,I=function(e,t,r,n){$traceurRuntime.superConstructor(N).call(this,e),this.left=t,this.operator=r,this.right=n},N=I
$traceurRuntime.createClass(I,{transform:function(e){return e.transformBinaryExpression(this)},visit:function(e){e.visitBinaryExpression(this)},get type(){return L}},{},e)
var M=t.BINDING_ELEMENT,k=function(e,t,r){$traceurRuntime.superConstructor(F).call(this,e),this.binding=t,this.initializer=r},F=k
$traceurRuntime.createClass(k,{transform:function(e){return e.transformBindingElement(this)},visit:function(e){e.visitBindingElement(this)},get type(){return M}},{},e)
var $=t.BINDING_IDENTIFIER,B=function(e,t){$traceurRuntime.superConstructor(D).call(this,e),this.identifierToken=t},D=B
$traceurRuntime.createClass(B,{transform:function(e){return e.transformBindingIdentifier(this)},visit:function(e){e.visitBindingIdentifier(this)},get type(){return $}},{},e)
var V=t.BLOCK,G=function(e,t){$traceurRuntime.superConstructor(U).call(this,e),this.statements=t},U=G
$traceurRuntime.createClass(G,{transform:function(e){return e.transformBlock(this)},visit:function(e){e.visitBlock(this)},get type(){return V}},{},e)
var z=t.BREAK_STATEMENT,H=function(e,t){$traceurRuntime.superConstructor(Y).call(this,e),this.name=t},Y=H
$traceurRuntime.createClass(H,{transform:function(e){return e.transformBreakStatement(this)},visit:function(e){e.visitBreakStatement(this)},get type(){return z}},{},e)
var X=t.CALL_EXPRESSION,W=function(e,t,r){$traceurRuntime.superConstructor(Q).call(this,e),this.operand=t,this.args=r},Q=W
$traceurRuntime.createClass(W,{transform:function(e){return e.transformCallExpression(this)},visit:function(e){e.visitCallExpression(this)},get type(){return X}},{},e)
var K=t.CALL_SIGNATURE,q=function(e,t,r,n){$traceurRuntime.superConstructor(J).call(this,e),this.typeParameters=t,this.parameterList=r,this.returnType=n},J=q
$traceurRuntime.createClass(q,{transform:function(e){return e.transformCallSignature(this)},visit:function(e){e.visitCallSignature(this)},get type(){return K}},{},e)
var Z=t.CASE_CLAUSE,ee=function(e,t,r){$traceurRuntime.superConstructor(te).call(this,e),this.expression=t,this.statements=r},te=ee
$traceurRuntime.createClass(ee,{transform:function(e){return e.transformCaseClause(this)},visit:function(e){e.visitCaseClause(this)},get type(){return Z}},{},e)
var re=t.CATCH,ne=function(e,t,r){$traceurRuntime.superConstructor(ie).call(this,e),this.binding=t,this.catchBody=r},ie=ne
$traceurRuntime.createClass(ne,{transform:function(e){return e.transformCatch(this)},visit:function(e){e.visitCatch(this)},get type(){return re}},{},e)
var se=t.CLASS_DECLARATION,ae=function(e,t,r,n,i,s){$traceurRuntime.superConstructor(oe).call(this,e),this.name=t,this.superClass=r,this.elements=n,this.annotations=i,this.typeParameters=s},oe=ae
$traceurRuntime.createClass(ae,{transform:function(e){return e.transformClassDeclaration(this)},visit:function(e){e.visitClassDeclaration(this)},get type(){return se}},{},e)
var ce=t.CLASS_EXPRESSION,ue=function(e,t,r,n,i,s){$traceurRuntime.superConstructor(le).call(this,e),this.name=t,this.superClass=r,this.elements=n,this.annotations=i,this.typeParameters=s},le=ue
$traceurRuntime.createClass(ue,{transform:function(e){return e.transformClassExpression(this)},visit:function(e){e.visitClassExpression(this)},get type(){return ce}},{},e)
var pe=t.COMMA_EXPRESSION,fe=function(e,t){$traceurRuntime.superConstructor(he).call(this,e),this.expressions=t},he=fe
$traceurRuntime.createClass(fe,{transform:function(e){return e.transformCommaExpression(this)},visit:function(e){e.visitCommaExpression(this)},get type(){return pe}},{},e)
var me=t.COMPREHENSION_FOR,de=function(e,t,r){$traceurRuntime.superConstructor(ge).call(this,e),this.left=t,this.iterator=r},ge=de
$traceurRuntime.createClass(de,{transform:function(e){return e.transformComprehensionFor(this)},visit:function(e){e.visitComprehensionFor(this)},get type(){return me}},{},e)
var ye=t.COMPREHENSION_IF,_e=function(e,t){$traceurRuntime.superConstructor(Se).call(this,e),this.expression=t},Se=_e
$traceurRuntime.createClass(_e,{transform:function(e){return e.transformComprehensionIf(this)},visit:function(e){e.visitComprehensionIf(this)},get type(){return ye}},{},e)
var ve=t.COMPUTED_PROPERTY_NAME,be=function(e,t){$traceurRuntime.superConstructor(Te).call(this,e),this.expression=t},Te=be
$traceurRuntime.createClass(be,{transform:function(e){return e.transformComputedPropertyName(this)},visit:function(e){e.visitComputedPropertyName(this)},get type(){return ve}},{},e)
var je=t.CONDITIONAL_EXPRESSION,Ee=function(e,t,r,n){$traceurRuntime.superConstructor(Oe).call(this,e),this.condition=t,this.left=r,this.right=n},Oe=Ee
$traceurRuntime.createClass(Ee,{transform:function(e){return e.transformConditionalExpression(this)},visit:function(e){e.visitConditionalExpression(this)},get type(){return je}},{},e)
var Ae=t.CONSTRUCT_SIGNATURE,Re=function(e,t,r,n){$traceurRuntime.superConstructor(xe).call(this,e),this.typeParameters=t,this.parameterList=r,this.returnType=n},xe=Re
$traceurRuntime.createClass(Re,{transform:function(e){return e.transformConstructSignature(this)},visit:function(e){e.visitConstructSignature(this)},get type(){return Ae}},{},e)
var we=t.CONSTRUCTOR_TYPE,Ce=function(e,t,r,n){$traceurRuntime.superConstructor(Pe).call(this,e),this.typeParameters=t,this.parameterList=r,this.returnType=n},Pe=Ce
$traceurRuntime.createClass(Ce,{transform:function(e){return e.transformConstructorType(this)},visit:function(e){e.visitConstructorType(this)},get type(){return we}},{},e)
var Le=t.CONTINUE_STATEMENT,Ie=function(e,t){$traceurRuntime.superConstructor(Ne).call(this,e),this.name=t},Ne=Ie
$traceurRuntime.createClass(Ie,{transform:function(e){return e.transformContinueStatement(this)},visit:function(e){e.visitContinueStatement(this)},get type(){return Le}},{},e)
var Me=t.COVER_FORMALS,ke=function(e,t){$traceurRuntime.superConstructor(Fe).call(this,e),this.expressions=t},Fe=ke
$traceurRuntime.createClass(ke,{transform:function(e){return e.transformCoverFormals(this)},visit:function(e){e.visitCoverFormals(this)},get type(){return Me}},{},e)
var $e=t.COVER_INITIALIZED_NAME,Be=function(e,t,r,n){$traceurRuntime.superConstructor(De).call(this,e),this.name=t,this.equalToken=r,this.initializer=n},De=Be
$traceurRuntime.createClass(Be,{transform:function(e){return e.transformCoverInitializedName(this)},visit:function(e){e.visitCoverInitializedName(this)},get type(){return $e}},{},e)
var Ve=t.DEBUGGER_STATEMENT,Ge=function(e){$traceurRuntime.superConstructor(Ue).call(this,e)},Ue=Ge
$traceurRuntime.createClass(Ge,{transform:function(e){return e.transformDebuggerStatement(this)},visit:function(e){e.visitDebuggerStatement(this)},get type(){return Ve}},{},e)
var ze=t.DEFAULT_CLAUSE,He=function(e,t){$traceurRuntime.superConstructor(Ye).call(this,e),this.statements=t},Ye=He
$traceurRuntime.createClass(He,{transform:function(e){return e.transformDefaultClause(this)},visit:function(e){e.visitDefaultClause(this)},get type(){return ze}},{},e)
var Xe=t.DO_WHILE_STATEMENT,We=function(e,t,r){$traceurRuntime.superConstructor(Qe).call(this,e),this.body=t,this.condition=r},Qe=We
$traceurRuntime.createClass(We,{transform:function(e){return e.transformDoWhileStatement(this)},visit:function(e){e.visitDoWhileStatement(this)},get type(){return Xe}},{},e)
var Ke=t.EMPTY_STATEMENT,qe=function(e){$traceurRuntime.superConstructor(Je).call(this,e)},Je=qe
$traceurRuntime.createClass(qe,{transform:function(e){return e.transformEmptyStatement(this)},visit:function(e){e.visitEmptyStatement(this)},get type(){return Ke}},{},e)
var Ze=t.EXPORT_DECLARATION,et=function(e,t,r){$traceurRuntime.superConstructor(tt).call(this,e),this.declaration=t,this.annotations=r},tt=et
$traceurRuntime.createClass(et,{transform:function(e){return e.transformExportDeclaration(this)},visit:function(e){e.visitExportDeclaration(this)},get type(){return Ze}},{},e)
var rt=t.EXPORT_DEFAULT,nt=function(e,t){$traceurRuntime.superConstructor(it).call(this,e),this.expression=t},it=nt
$traceurRuntime.createClass(nt,{transform:function(e){return e.transformExportDefault(this)},visit:function(e){e.visitExportDefault(this)},get type(){return rt}},{},e)
var st=t.EXPORT_SPECIFIER,at=function(e,t,r){$traceurRuntime.superConstructor(ot).call(this,e),this.lhs=t,this.rhs=r},ot=at
$traceurRuntime.createClass(at,{transform:function(e){return e.transformExportSpecifier(this)},visit:function(e){e.visitExportSpecifier(this)},get type(){return st}},{},e)
var ct=t.EXPORT_SPECIFIER_SET,ut=function(e,t){$traceurRuntime.superConstructor(lt).call(this,e),this.specifiers=t},lt=ut
$traceurRuntime.createClass(ut,{transform:function(e){return e.transformExportSpecifierSet(this)},visit:function(e){e.visitExportSpecifierSet(this)},get type(){return ct}},{},e)
var pt=t.EXPORT_STAR,ft=function(e){$traceurRuntime.superConstructor(ht).call(this,e)},ht=ft
$traceurRuntime.createClass(ft,{transform:function(e){return e.transformExportStar(this)},visit:function(e){e.visitExportStar(this)},get type(){return pt}},{},e)
var mt=t.EXPRESSION_STATEMENT,dt=function(e,t){$traceurRuntime.superConstructor(gt).call(this,e),this.expression=t},gt=dt
$traceurRuntime.createClass(dt,{transform:function(e){return e.transformExpressionStatement(this)},visit:function(e){e.visitExpressionStatement(this)},get type(){return mt}},{},e)
var yt=t.FINALLY,_t=function(e,t){$traceurRuntime.superConstructor(St).call(this,e),this.block=t},St=_t
$traceurRuntime.createClass(_t,{transform:function(e){return e.transformFinally(this)},visit:function(e){e.visitFinally(this)},get type(){return yt}},{},e)
var vt=t.FOR_IN_STATEMENT,bt=function(e,t,r,n){$traceurRuntime.superConstructor(Tt).call(this,e),this.initializer=t,this.collection=r,this.body=n},Tt=bt
$traceurRuntime.createClass(bt,{transform:function(e){return e.transformForInStatement(this)},visit:function(e){e.visitForInStatement(this)},get type(){return vt}},{},e)
var jt=t.FOR_OF_STATEMENT,Et=function(e,t,r,n){$traceurRuntime.superConstructor(Ot).call(this,e),this.initializer=t,this.collection=r,this.body=n},Ot=Et
$traceurRuntime.createClass(Et,{transform:function(e){return e.transformForOfStatement(this)},visit:function(e){e.visitForOfStatement(this)},get type(){return jt}},{},e)
var At=t.FOR_ON_STATEMENT,Rt=function(e,t,r,n){$traceurRuntime.superConstructor(xt).call(this,e),this.initializer=t,this.observable=r,this.body=n},xt=Rt
$traceurRuntime.createClass(Rt,{transform:function(e){return e.transformForOnStatement(this)},visit:function(e){e.visitForOnStatement(this)},get type(){return At}},{},e)
var wt=t.FOR_STATEMENT,Ct=function(e,t,r,n,i){$traceurRuntime.superConstructor(Pt).call(this,e),this.initializer=t,this.condition=r,this.increment=n,this.body=i},Pt=Ct
$traceurRuntime.createClass(Ct,{transform:function(e){return e.transformForStatement(this)},visit:function(e){e.visitForStatement(this)},get type(){return wt}},{},e)
var Lt=t.FORMAL_PARAMETER,It=function(e,t,r,n){$traceurRuntime.superConstructor(Nt).call(this,e),this.parameter=t,this.typeAnnotation=r,this.annotations=n},Nt=It
$traceurRuntime.createClass(It,{transform:function(e){return e.transformFormalParameter(this)},visit:function(e){e.visitFormalParameter(this)},get type(){return Lt}},{},e)
var Mt=t.FORMAL_PARAMETER_LIST,kt=function(e,t){$traceurRuntime.superConstructor(Ft).call(this,e),this.parameters=t},Ft=kt
$traceurRuntime.createClass(kt,{transform:function(e){return e.transformFormalParameterList(this)},visit:function(e){e.visitFormalParameterList(this)},get type(){return Mt}},{},e)
var $t=t.FUNCTION_BODY,Bt=function(e,t){$traceurRuntime.superConstructor(Dt).call(this,e),this.statements=t},Dt=Bt
$traceurRuntime.createClass(Bt,{transform:function(e){return e.transformFunctionBody(this)},visit:function(e){e.visitFunctionBody(this)},get type(){return $t}},{},e)
var Vt=t.FUNCTION_DECLARATION,Gt=function(e,t,r,n,i,s,a){$traceurRuntime.superConstructor(Ut).call(this,e),this.name=t,this.functionKind=r,this.parameterList=n,this.typeAnnotation=i,this.annotations=s,this.body=a},Ut=Gt
$traceurRuntime.createClass(Gt,{transform:function(e){return e.transformFunctionDeclaration(this)},visit:function(e){e.visitFunctionDeclaration(this)},get type(){return Vt}},{},e)
var zt=t.FUNCTION_EXPRESSION,Ht=function(e,t,r,n,i,s,a){$traceurRuntime.superConstructor(Yt).call(this,e),this.name=t,this.functionKind=r,this.parameterList=n,this.typeAnnotation=i,this.annotations=s,this.body=a},Yt=Ht
$traceurRuntime.createClass(Ht,{transform:function(e){return e.transformFunctionExpression(this)},visit:function(e){e.visitFunctionExpression(this)},get type(){return zt}},{},e)
var Xt=t.FUNCTION_TYPE,Wt=function(e,t,r,n){$traceurRuntime.superConstructor(Qt).call(this,e),this.typeParameters=t,this.parameterList=r,this.returnType=n},Qt=Wt
$traceurRuntime.createClass(Wt,{transform:function(e){return e.transformFunctionType(this)},visit:function(e){e.visitFunctionType(this)},get type(){return Xt}},{},e)
var Kt=t.GENERATOR_COMPREHENSION,qt=function(e,t,r){$traceurRuntime.superConstructor(Jt).call(this,e),this.comprehensionList=t,this.expression=r},Jt=qt
$traceurRuntime.createClass(qt,{transform:function(e){return e.transformGeneratorComprehension(this)},visit:function(e){e.visitGeneratorComprehension(this)},get type(){return Kt}},{},e)
var Zt=t.GET_ACCESSOR,er=function(e,t,r,n,i,s){$traceurRuntime.superConstructor(tr).call(this,e),this.isStatic=t,this.name=r,this.typeAnnotation=n,this.annotations=i,this.body=s},tr=er
$traceurRuntime.createClass(er,{transform:function(e){return e.transformGetAccessor(this)},visit:function(e){e.visitGetAccessor(this)},get type(){return Zt}},{},e)
var rr=t.IDENTIFIER_EXPRESSION,nr=function(e,t){$traceurRuntime.superConstructor(ir).call(this,e),this.identifierToken=t},ir=nr
$traceurRuntime.createClass(nr,{transform:function(e){return e.transformIdentifierExpression(this)},visit:function(e){e.visitIdentifierExpression(this)},get type(){return rr}},{},e)
var sr=t.IF_STATEMENT,ar=function(e,t,r,n){$traceurRuntime.superConstructor(or).call(this,e),this.condition=t,this.ifClause=r,this.elseClause=n},or=ar
$traceurRuntime.createClass(ar,{transform:function(e){return e.transformIfStatement(this)},visit:function(e){e.visitIfStatement(this)},get type(){return sr}},{},e)
var cr=t.IMPORTED_BINDING,ur=function(e,t){$traceurRuntime.superConstructor(lr).call(this,e),this.binding=t},lr=ur
$traceurRuntime.createClass(ur,{transform:function(e){return e.transformImportedBinding(this)},visit:function(e){e.visitImportedBinding(this)},get type(){return cr}},{},e)
var pr=t.IMPORT_DECLARATION,fr=function(e,t,r){$traceurRuntime.superConstructor(hr).call(this,e),this.importClause=t,this.moduleSpecifier=r},hr=fr
$traceurRuntime.createClass(fr,{transform:function(e){return e.transformImportDeclaration(this)},visit:function(e){e.visitImportDeclaration(this)},get type(){return pr}},{},e)
var mr=t.IMPORT_SPECIFIER,dr=function(e,t,r){$traceurRuntime.superConstructor(gr).call(this,e),this.binding=t,this.name=r},gr=dr
$traceurRuntime.createClass(dr,{transform:function(e){return e.transformImportSpecifier(this)},visit:function(e){e.visitImportSpecifier(this)},get type(){return mr}},{},e)
var yr=t.IMPORT_SPECIFIER_SET,_r=function(e,t){$traceurRuntime.superConstructor(Sr).call(this,e),this.specifiers=t},Sr=_r
$traceurRuntime.createClass(_r,{transform:function(e){return e.transformImportSpecifierSet(this)},visit:function(e){e.visitImportSpecifierSet(this)},get type(){return yr}},{},e)
var vr=t.INDEX_SIGNATURE,br=function(e,t,r,n){$traceurRuntime.superConstructor(Tr).call(this,e),this.name=t,this.indexType=r,this.typeAnnotation=n},Tr=br
$traceurRuntime.createClass(br,{transform:function(e){return e.transformIndexSignature(this)},visit:function(e){e.visitIndexSignature(this)},get type(){return vr}},{},e)
var jr=t.INTERFACE_DECLARATION,Er=function(e,t,r,n,i){$traceurRuntime.superConstructor(Or).call(this,e),this.name=t,this.typeParameters=r,this.extendsClause=n,this.objectType=i},Or=Er
$traceurRuntime.createClass(Er,{transform:function(e){return e.transformInterfaceDeclaration(this)},visit:function(e){e.visitInterfaceDeclaration(this)},get type(){return jr}},{},e)
var Ar=t.LABELLED_STATEMENT,Rr=function(e,t,r){$traceurRuntime.superConstructor(xr).call(this,e),this.name=t,this.statement=r},xr=Rr
$traceurRuntime.createClass(Rr,{transform:function(e){return e.transformLabelledStatement(this)},visit:function(e){e.visitLabelledStatement(this)},get type(){return Ar}},{},e)
var wr=t.LITERAL_EXPRESSION,Cr=function(e,t){$traceurRuntime.superConstructor(Pr).call(this,e),this.literalToken=t},Pr=Cr
$traceurRuntime.createClass(Cr,{transform:function(e){return e.transformLiteralExpression(this)},visit:function(e){e.visitLiteralExpression(this)},get type(){return wr}},{},e)
var Lr=t.LITERAL_PROPERTY_NAME,Ir=function(e,t){$traceurRuntime.superConstructor(Nr).call(this,e),this.literalToken=t},Nr=Ir
$traceurRuntime.createClass(Ir,{transform:function(e){return e.transformLiteralPropertyName(this)},visit:function(e){e.visitLiteralPropertyName(this)},get type(){return Lr}},{},e)
var Mr=t.MEMBER_EXPRESSION,kr=function(e,t,r){$traceurRuntime.superConstructor(Fr).call(this,e),this.operand=t,this.memberName=r},Fr=kr
$traceurRuntime.createClass(kr,{transform:function(e){return e.transformMemberExpression(this)},visit:function(e){e.visitMemberExpression(this)},get type(){return Mr}},{},e)
var $r=t.MEMBER_LOOKUP_EXPRESSION,Br=function(e,t,r){$traceurRuntime.superConstructor(Dr).call(this,e),this.operand=t,this.memberExpression=r},Dr=Br
$traceurRuntime.createClass(Br,{transform:function(e){return e.transformMemberLookupExpression(this)},visit:function(e){e.visitMemberLookupExpression(this)},get type(){return $r}},{},e)
var Vr=t.METHOD_SIGNATURE,Gr=function(e,t,r,n){$traceurRuntime.superConstructor(Ur).call(this,e),this.name=t,this.optional=r,this.callSignature=n},Ur=Gr
$traceurRuntime.createClass(Gr,{transform:function(e){return e.transformMethodSignature(this)},visit:function(e){e.visitMethodSignature(this)},get type(){return Vr}},{},e)
var zr=t.MODULE,Hr=function(e,t,r){$traceurRuntime.superConstructor(Yr).call(this,e),this.scriptItemList=t,this.moduleName=r},Yr=Hr
$traceurRuntime.createClass(Hr,{transform:function(e){return e.transformModule(this)},visit:function(e){e.visitModule(this)},get type(){return zr}},{},e)
var Xr=t.MODULE_DECLARATION,Wr=function(e,t,r){$traceurRuntime.superConstructor(Qr).call(this,e),this.binding=t,this.expression=r},Qr=Wr
$traceurRuntime.createClass(Wr,{transform:function(e){return e.transformModuleDeclaration(this)},visit:function(e){e.visitModuleDeclaration(this)},get type(){return Xr}},{},e)
var Kr=t.MODULE_SPECIFIER,qr=function(e,t){$traceurRuntime.superConstructor(Jr).call(this,e),this.token=t},Jr=qr
$traceurRuntime.createClass(qr,{transform:function(e){return e.transformModuleSpecifier(this)},visit:function(e){e.visitModuleSpecifier(this)},get type(){return Kr}},{},e)
var Zr=t.NAMED_EXPORT,en=function(e,t,r){$traceurRuntime.superConstructor(tn).call(this,e),this.moduleSpecifier=t,this.specifierSet=r},tn=en
$traceurRuntime.createClass(en,{transform:function(e){return e.transformNamedExport(this)},visit:function(e){e.visitNamedExport(this)},get type(){return Zr}},{},e)
var rn=t.NEW_EXPRESSION,nn=function(e,t,r){$traceurRuntime.superConstructor(sn).call(this,e),this.operand=t,this.args=r},sn=nn
$traceurRuntime.createClass(nn,{transform:function(e){return e.transformNewExpression(this)},visit:function(e){e.visitNewExpression(this)},get type(){return rn}},{},e)
var an=t.OBJECT_LITERAL_EXPRESSION,on=function(e,t){$traceurRuntime.superConstructor(cn).call(this,e),this.propertyNameAndValues=t},cn=on
$traceurRuntime.createClass(on,{transform:function(e){return e.transformObjectLiteralExpression(this)},visit:function(e){e.visitObjectLiteralExpression(this)},get type(){return an}},{},e)
var un=t.OBJECT_PATTERN,ln=function(e,t){$traceurRuntime.superConstructor(pn).call(this,e),this.fields=t},pn=ln
$traceurRuntime.createClass(ln,{transform:function(e){return e.transformObjectPattern(this)},visit:function(e){e.visitObjectPattern(this)},get type(){return un}},{},e)
var fn=t.OBJECT_PATTERN_FIELD,hn=function(e,t,r){$traceurRuntime.superConstructor(mn).call(this,e),this.name=t,this.element=r},mn=hn
$traceurRuntime.createClass(hn,{transform:function(e){return e.transformObjectPatternField(this)},visit:function(e){e.visitObjectPatternField(this)},get type(){return fn}},{},e)
var dn=t.OBJECT_TYPE,gn=function(e,t){$traceurRuntime.superConstructor(yn).call(this,e),this.typeMembers=t},yn=gn
$traceurRuntime.createClass(gn,{transform:function(e){return e.transformObjectType(this)},visit:function(e){e.visitObjectType(this)},get type(){return dn}},{},e)
var _n=t.PAREN_EXPRESSION,Sn=function(e,t){$traceurRuntime.superConstructor(vn).call(this,e),this.expression=t},vn=Sn
$traceurRuntime.createClass(Sn,{transform:function(e){return e.transformParenExpression(this)},visit:function(e){e.visitParenExpression(this)},get type(){return _n}},{},e)
var bn=t.POSTFIX_EXPRESSION,Tn=function(e,t,r){$traceurRuntime.superConstructor(jn).call(this,e),this.operand=t,this.operator=r},jn=Tn
$traceurRuntime.createClass(Tn,{transform:function(e){return e.transformPostfixExpression(this)},visit:function(e){e.visitPostfixExpression(this)},get type(){return bn}},{},e)
var En=t.PREDEFINED_TYPE,On=function(e,t){$traceurRuntime.superConstructor(An).call(this,e),this.typeToken=t},An=On
$traceurRuntime.createClass(On,{transform:function(e){return e.transformPredefinedType(this)},visit:function(e){e.visitPredefinedType(this)},get type(){return En}},{},e)
var Rn=t.SCRIPT,xn=function(e,t,r){$traceurRuntime.superConstructor(wn).call(this,e),this.scriptItemList=t,this.moduleName=r},wn=xn
$traceurRuntime.createClass(xn,{transform:function(e){return e.transformScript(this)},visit:function(e){e.visitScript(this)},get type(){return Rn}},{},e)
var Cn=t.PROPERTY_METHOD_ASSIGNMENT,Pn=function(e,t,r,n,i,s,a,o,c){$traceurRuntime.superConstructor(Ln).call(this,e),this.isStatic=t,this.functionKind=r,this.name=n,this.parameterList=i,this.typeAnnotation=s,this.annotations=a,this.body=o,this.debugName=c},Ln=Pn
$traceurRuntime.createClass(Pn,{transform:function(e){return e.transformPropertyMethodAssignment(this)},visit:function(e){e.visitPropertyMethodAssignment(this)},get type(){return Cn}},{},e)
var In=t.PROPERTY_NAME_ASSIGNMENT,Nn=function(e,t,r){$traceurRuntime.superConstructor(Mn).call(this,e),this.name=t,this.value=r},Mn=Nn
$traceurRuntime.createClass(Nn,{transform:function(e){return e.transformPropertyNameAssignment(this)},visit:function(e){e.visitPropertyNameAssignment(this)},get type(){return In}},{},e)
var kn=t.PROPERTY_NAME_SHORTHAND,Fn=function(e,t){$traceurRuntime.superConstructor($n).call(this,e),this.name=t},$n=Fn
$traceurRuntime.createClass(Fn,{transform:function(e){return e.transformPropertyNameShorthand(this)},visit:function(e){e.visitPropertyNameShorthand(this)},get type(){return kn}},{},e)
var Bn=t.PROPERTY_VARIABLE_DECLARATION,Dn=function(e,t,r,n,i,s){$traceurRuntime.superConstructor(Vn).call(this,e),this.isStatic=t,this.name=r,this.typeAnnotation=n,this.annotations=i,this.initializer=s},Vn=Dn
$traceurRuntime.createClass(Dn,{transform:function(e){return e.transformPropertyVariableDeclaration(this)},visit:function(e){e.visitPropertyVariableDeclaration(this)},get type(){return Bn}},{},e)
var Gn=t.PROPERTY_SIGNATURE,Un=function(e,t,r,n){$traceurRuntime.superConstructor(zn).call(this,e),this.name=t,this.optional=r,this.typeAnnotation=n},zn=Un
$traceurRuntime.createClass(Un,{transform:function(e){return e.transformPropertySignature(this)},visit:function(e){e.visitPropertySignature(this)},get type(){return Gn}},{},e)
var Hn=t.REST_PARAMETER,Yn=function(e,t,r){$traceurRuntime.superConstructor(Xn).call(this,e),this.identifier=t,this.typeAnnotation=r},Xn=Yn
$traceurRuntime.createClass(Yn,{transform:function(e){return e.transformRestParameter(this)},visit:function(e){e.visitRestParameter(this)},get type(){return Hn}},{},e)
var Wn=t.RETURN_STATEMENT,Qn=function(e,t){$traceurRuntime.superConstructor(Kn).call(this,e),this.expression=t},Kn=Qn
$traceurRuntime.createClass(Qn,{transform:function(e){return e.transformReturnStatement(this)},visit:function(e){e.visitReturnStatement(this)},get type(){return Wn}},{},e)
var qn=t.SET_ACCESSOR,Jn=function(e,t,r,n,i,s){$traceurRuntime.superConstructor(Zn).call(this,e),this.isStatic=t,this.name=r,this.parameterList=n,this.annotations=i,this.body=s},Zn=Jn
$traceurRuntime.createClass(Jn,{transform:function(e){return e.transformSetAccessor(this)},visit:function(e){e.visitSetAccessor(this)},get type(){return qn}},{},e)
var ei=t.SPREAD_EXPRESSION,ti=function(e,t){$traceurRuntime.superConstructor(ri).call(this,e),this.expression=t},ri=ti
$traceurRuntime.createClass(ti,{transform:function(e){return e.transformSpreadExpression(this)},visit:function(e){e.visitSpreadExpression(this)},get type(){return ei}},{},e)
var ni=t.SPREAD_PATTERN_ELEMENT,ii=function(e,t){$traceurRuntime.superConstructor(si).call(this,e),this.lvalue=t},si=ii
$traceurRuntime.createClass(ii,{transform:function(e){return e.transformSpreadPatternElement(this)},visit:function(e){e.visitSpreadPatternElement(this)},get type(){return ni}},{},e)
var ai=t.SUPER_EXPRESSION,oi=function(e){$traceurRuntime.superConstructor(ci).call(this,e)},ci=oi
$traceurRuntime.createClass(oi,{transform:function(e){return e.transformSuperExpression(this)},visit:function(e){e.visitSuperExpression(this)},get type(){return ai}},{},e)
var ui=t.SWITCH_STATEMENT,li=function(e,t,r){$traceurRuntime.superConstructor(pi).call(this,e),this.expression=t,this.caseClauses=r},pi=li
$traceurRuntime.createClass(li,{transform:function(e){return e.transformSwitchStatement(this)},visit:function(e){e.visitSwitchStatement(this)},get type(){return ui}},{},e)
var fi=t.SYNTAX_ERROR_TREE,hi=function(e,t,r){$traceurRuntime.superConstructor(mi).call(this,e),this.nextToken=t,this.message=r},mi=hi
$traceurRuntime.createClass(hi,{transform:function(e){return e.transformSyntaxErrorTree(this)},visit:function(e){e.visitSyntaxErrorTree(this)},get type(){return fi}},{},e)
var di=t.TEMPLATE_LITERAL_EXPRESSION,gi=function(e,t,r){$traceurRuntime.superConstructor(yi).call(this,e),this.operand=t,this.elements=r},yi=gi
$traceurRuntime.createClass(gi,{transform:function(e){return e.transformTemplateLiteralExpression(this)},visit:function(e){e.visitTemplateLiteralExpression(this)},get type(){return di}},{},e)
var _i=t.TEMPLATE_LITERAL_PORTION,Si=function(e,t){$traceurRuntime.superConstructor(vi).call(this,e),this.value=t},vi=Si
$traceurRuntime.createClass(Si,{transform:function(e){return e.transformTemplateLiteralPortion(this)},visit:function(e){e.visitTemplateLiteralPortion(this)},get type(){return _i}},{},e)
var bi=t.TEMPLATE_SUBSTITUTION,Ti=function(e,t){$traceurRuntime.superConstructor(ji).call(this,e),this.expression=t},ji=Ti
$traceurRuntime.createClass(Ti,{transform:function(e){return e.transformTemplateSubstitution(this)},visit:function(e){e.visitTemplateSubstitution(this)},get type(){return bi}},{},e)
var Ei=t.THIS_EXPRESSION,Oi=function(e){$traceurRuntime.superConstructor(Ai).call(this,e)},Ai=Oi
$traceurRuntime.createClass(Oi,{transform:function(e){return e.transformThisExpression(this)},visit:function(e){e.visitThisExpression(this)},get type(){return Ei}},{},e)
var Ri=t.THROW_STATEMENT,xi=function(e,t){$traceurRuntime.superConstructor(wi).call(this,e),this.value=t},wi=xi
$traceurRuntime.createClass(xi,{transform:function(e){return e.transformThrowStatement(this)},visit:function(e){e.visitThrowStatement(this)},get type(){return Ri}},{},e)
var Ci=t.TRY_STATEMENT,Pi=function(e,t,r,n){$traceurRuntime.superConstructor(Li).call(this,e),this.body=t,this.catchBlock=r,this.finallyBlock=n},Li=Pi
$traceurRuntime.createClass(Pi,{transform:function(e){return e.transformTryStatement(this)},visit:function(e){e.visitTryStatement(this)},get type(){return Ci}},{},e)
var Ii=t.TYPE_ARGUMENTS,Ni=function(e,t){$traceurRuntime.superConstructor(Mi).call(this,e),this.args=t},Mi=Ni
$traceurRuntime.createClass(Ni,{transform:function(e){return e.transformTypeArguments(this)},visit:function(e){e.visitTypeArguments(this)},get type(){return Ii}},{},e)
var ki=t.TYPE_NAME,Fi=function(e,t,r){$traceurRuntime.superConstructor($i).call(this,e),this.moduleName=t,this.name=r},$i=Fi
$traceurRuntime.createClass(Fi,{transform:function(e){return e.transformTypeName(this)},visit:function(e){e.visitTypeName(this)},get type(){return ki}},{},e)
var Bi=t.TYPE_PARAMETER,Di=function(e,t,r){$traceurRuntime.superConstructor(Vi).call(this,e),this.identifierToken=t,this.extendsType=r},Vi=Di
$traceurRuntime.createClass(Di,{transform:function(e){return e.transformTypeParameter(this)},visit:function(e){e.visitTypeParameter(this)},get type(){return Bi}},{},e)
var Gi=t.TYPE_PARAMETERS,Ui=function(e,t){$traceurRuntime.superConstructor(zi).call(this,e),this.parameters=t},zi=Ui
$traceurRuntime.createClass(Ui,{transform:function(e){return e.transformTypeParameters(this)},visit:function(e){e.visitTypeParameters(this)},get type(){return Gi}},{},e)
var Hi=t.TYPE_REFERENCE,Yi=function(e,t,r){$traceurRuntime.superConstructor(Xi).call(this,e),this.typeName=t,this.args=r},Xi=Yi
$traceurRuntime.createClass(Yi,{transform:function(e){return e.transformTypeReference(this)},visit:function(e){e.visitTypeReference(this)},get type(){return Hi}},{},e)
var Wi=t.UNARY_EXPRESSION,Qi=function(e,t,r){$traceurRuntime.superConstructor(Ki).call(this,e),this.operator=t,this.operand=r},Ki=Qi
$traceurRuntime.createClass(Qi,{transform:function(e){return e.transformUnaryExpression(this)},visit:function(e){e.visitUnaryExpression(this)},get type(){return Wi}},{},e)
var qi=t.UNION_TYPE,Ji=function(e,t){$traceurRuntime.superConstructor(Zi).call(this,e),this.types=t},Zi=Ji
$traceurRuntime.createClass(Ji,{transform:function(e){return e.transformUnionType(this)},visit:function(e){e.visitUnionType(this)},get type(){return qi}},{},e)
var es=t.VARIABLE_DECLARATION,ts=function(e,t,r,n){$traceurRuntime.superConstructor(rs).call(this,e),this.lvalue=t,this.typeAnnotation=r,this.initializer=n},rs=ts
$traceurRuntime.createClass(ts,{transform:function(e){return e.transformVariableDeclaration(this)},visit:function(e){e.visitVariableDeclaration(this)},get type(){return es}},{},e)
var ns=t.VARIABLE_DECLARATION_LIST,is=function(e,t,r){$traceurRuntime.superConstructor(ss).call(this,e),this.declarationType=t,this.declarations=r},ss=is
$traceurRuntime.createClass(is,{transform:function(e){return e.transformVariableDeclarationList(this)},visit:function(e){e.visitVariableDeclarationList(this)},get type(){return ns}},{},e)
var as=t.VARIABLE_STATEMENT,os=function(e,t){$traceurRuntime.superConstructor(cs).call(this,e),this.declarations=t},cs=os
$traceurRuntime.createClass(os,{transform:function(e){return e.transformVariableStatement(this)},visit:function(e){e.visitVariableStatement(this)},get type(){return as}},{},e)
var us=t.WHILE_STATEMENT,ls=function(e,t,r){$traceurRuntime.superConstructor(ps).call(this,e),this.condition=t,this.body=r},ps=ls
$traceurRuntime.createClass(ls,{transform:function(e){return e.transformWhileStatement(this)},visit:function(e){e.visitWhileStatement(this)},get type(){return us}},{},e)
var fs=t.WITH_STATEMENT,hs=function(e,t,r){$traceurRuntime.superConstructor(ms).call(this,e),this.expression=t,this.body=r},ms=hs
$traceurRuntime.createClass(hs,{transform:function(e){return e.transformWithStatement(this)},visit:function(e){e.visitWithStatement(this)},get type(){return fs}},{},e)
var ds=t.YIELD_EXPRESSION,gs=function(e,t,r){$traceurRuntime.superConstructor(ys).call(this,e),this.expression=t,this.isYieldFor=r},ys=gs
return $traceurRuntime.createClass(gs,{transform:function(e){return e.transformYieldExpression(this)},visit:function(e){e.visitYieldExpression(this)},get type(){return ds}},{},e),{get Annotation(){return n},get AnonBlock(){return a},get ArgumentList(){return u},get ArrayComprehension(){return f},get ArrayLiteralExpression(){return d},get ArrayPattern(){return _},get ArrayType(){return b},get ArrowFunctionExpression(){return E},get AssignmentElement(){return R},get AwaitExpression(){return C},get BinaryExpression(){return I},get BindingElement(){return k},get BindingIdentifier(){return B},get Block(){return G},get BreakStatement(){return H},get CallExpression(){return W},get CallSignature(){return q},get CaseClause(){return ee},get Catch(){return ne},get ClassDeclaration(){return ae},get ClassExpression(){return ue},get CommaExpression(){return fe},get ComprehensionFor(){return de},get ComprehensionIf(){return _e},get ComputedPropertyName(){return be},get ConditionalExpression(){return Ee},get ConstructSignature(){return Re},get ConstructorType(){return Ce},get ContinueStatement(){return Ie},get CoverFormals(){return ke},get CoverInitializedName(){return Be},get DebuggerStatement(){return Ge},get DefaultClause(){return He},get DoWhileStatement(){return We},get EmptyStatement(){return qe},get ExportDeclaration(){return et},get ExportDefault(){return nt},get ExportSpecifier(){return at},get ExportSpecifierSet(){return ut},get ExportStar(){return ft},get ExpressionStatement(){return dt},get Finally(){return _t},get ForInStatement(){return bt},get ForOfStatement(){return Et},get ForOnStatement(){return Rt},get ForStatement(){return Ct},get FormalParameter(){return It},get FormalParameterList(){return kt},get FunctionBody(){return Bt},get FunctionDeclaration(){return Gt},get FunctionExpression(){return Ht},get FunctionType(){return Wt},get GeneratorComprehension(){return qt},get GetAccessor(){return er},get IdentifierExpression(){return nr},get IfStatement(){return ar},get ImportedBinding(){return ur},get ImportDeclaration(){return fr},get ImportSpecifier(){return dr},get ImportSpecifierSet(){return _r},get IndexSignature(){return br},get InterfaceDeclaration(){return Er},get LabelledStatement(){return Rr},get LiteralExpression(){return Cr},get LiteralPropertyName(){return Ir},get MemberExpression(){return kr},get MemberLookupExpression(){return Br},get MethodSignature(){return Gr},get Module(){return Hr},get ModuleDeclaration(){return Wr},get ModuleSpecifier(){return qr},get NamedExport(){return en},get NewExpression(){return nn},get ObjectLiteralExpression(){return on},get ObjectPattern(){return ln},get ObjectPatternField(){return hn},get ObjectType(){return gn},get ParenExpression(){return Sn},get PostfixExpression(){return Tn},get PredefinedType(){return On},get Script(){return xn},get PropertyMethodAssignment(){return Pn},get PropertyNameAssignment(){return Nn},get PropertyNameShorthand(){return Fn},get PropertyVariableDeclaration(){return Dn},get PropertySignature(){return Un},get RestParameter(){return Yn},get ReturnStatement(){return Qn},get SetAccessor(){return Jn},get SpreadExpression(){return ti},get SpreadPatternElement(){return ii},get SuperExpression(){return oi},get SwitchStatement(){return li},get SyntaxErrorTree(){return hi},get TemplateLiteralExpression(){return gi},get TemplateLiteralPortion(){return Si},get TemplateSubstitution(){return Ti},get ThisExpression(){return Oi},get ThrowStatement(){return xi},get TryStatement(){return Pi},get TypeArguments(){return Ni},get TypeName(){return Fi},get TypeParameter(){return Di},get TypeParameters(){return Ui},get TypeReference(){return Yi},get UnaryExpression(){return Qi},get UnionType(){return Ji},get VariableDeclaration(){return ts},get VariableDeclarationList(){return is},get VariableStatement(){return os},get WhileStatement(){return ls},get WithStatement(){return hs},get YieldExpression(){return gs}}}),System.registerModule("traceur@0.0.87/src/util/assert.js",[],function(){"use strict"
function e(e){if(!e&&$traceurRuntime.options.debug)throw Error("Assertion failed")}return{get assert(){return e}}}),System.registerModule("traceur@0.0.87/src/syntax/IdentifierToken.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/Token.js").Token,t=System.get("traceur@0.0.87/src/syntax/TokenType.js").IDENTIFIER,r=function(e,r){$traceurRuntime.superConstructor(n).call(this,t,e),this.value=r},n=r
return $traceurRuntime.createClass(r,{toString:function(){return this.value}},{},e),{get IdentifierToken(){return r}}}),System.registerModule("traceur@0.0.87/src/syntax/LiteralToken.js",[],function(){"use strict"
var e,t=System.get("traceur@0.0.87/src/syntax/Token.js").Token,r=System.get("traceur@0.0.87/src/syntax/TokenType.js"),n=r.NULL,i=r.NUMBER,s=r.STRING,a=function(e){this.value=e,this.index=0}
$traceurRuntime.createClass(a,(e={},Object.defineProperty(e,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,"next",{value:function(){return++this.index>=this.value.length-1?{value:void 0,done:!0}:{value:this.value[this.index],done:!1}},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,"parse",{value:function(){if(-1===this.value.indexOf("\\"))return this.value.slice(1,-1)
var e="",t=!0,r=!1,n=void 0
try{for(var i=void 0,s=this[$traceurRuntime.toProperty(Symbol.iterator)]();!(t=(i=s.next()).done);t=!0){var a=i.value
e+="\\"===a?this.parseEscapeSequence():a}}catch(o){r=!0,n=o}finally{try{t||null==s["return"]||s["return"]()}finally{if(r)throw n}}return e},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,"parseEscapeSequence",{value:function(){var e=this.next().value
switch(e){case"\n":case"\r":case"\u2028":case"\u2029":return""
case"0":return"\x00"
case"b":return"\b"
case"f":return"\f"
case"n":return"\n"
case"r":return"\r"
case"t":return"	"
case"v":return""
case"x":return String.fromCharCode(parseInt(this.next().value+this.next().value,16))
case"u":var t=this.next().value
if("{"===t){for(var r="";"}"!==(t=this.next().value);)r+=t
var n=parseInt(r,16)
if(65535>=n)return String.fromCharCode(n)
var i=Math.floor((n-65536)/1024)+55296,s=(n-65536)%1024+56320
return String.fromCharCode(i,s)}return String.fromCharCode(parseInt(t+this.next().value+this.next().value+this.next().value,16))
default:if(8>+e)throw Error("Octal literals are not supported")
return e}},configurable:!0,enumerable:!0,writable:!0}),e),{})
var o=function(e,t,r){$traceurRuntime.superConstructor(c).call(this,e,r),this.value=t},c=o
return $traceurRuntime.createClass(o,{toString:function(){return this.value},get processedValue(){switch(this.type){case n:return null
case i:var e=this.value
if(48===e.charCodeAt(0))switch(e.charCodeAt(1)){case 66:case 98:return parseInt(this.value.slice(2),2)
case 79:case 111:return parseInt(this.value.slice(2),8)}return+this.value
case s:var t=new a(this.value)
return t.parse()
default:throw Error("Not implemented")}}},{},t),{get LiteralToken(){return o}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js",[],function(){"use strict"
function e(e){return new Me(e,null)}function t(e){return new je(null,e)}function r(e){return new Ee(Ve,JSON.stringify(e),null)}function n(e){return new Me(e?Ge:$e,null)}function i(){return new Ee(Be,"null",null)}function s(e){return new Ee(De,e+"",null)}function a(){return new ht(null,[])}function o(e){return new Ye(null,e)}function c(){return o([])}function u(e){return new Xe(null,e)}function l(){return u([])}function p(t,r){return new We(null,t,e(Fe),r)}function f(e,t,r){return new We(null,e,t,r)}function h(e){if("string"==typeof e)e=t(e)
else{if(e.type===Re.BINDING_IDENTIFIER)return e
if(e.type===Re.IDENTIFIER_EXPRESSION)return new Qe(e.location,e.identifierToken)}return new Qe(null,e)}function m(e){var t=h(e)
return new _t(t.location,t)}function d(){return new ot(null)}function g(){return y([])}function y(e){return new Ke(null,e)}function _(e){return new mt(null,e)}function S(e,t){return ze("FUNCTION_BODY"===e.type),j(ie(B(a(),e)),t)}function v(e){return ze("FUNCTION_BODY"===e.type),b(ie(B(a(),e)))}function b(e){var t=void 0!==arguments[1]?arguments[1]:c()
return new Je(null,e,t)}function T(){var e=void 0!==arguments[0]?arguments[0]:null
return new qe(null,e)}function j(e,t){return b(Q(e,we),o([t]))}function E(e,t){return new Ze(null,e,t)}function O(e,t){return e=h(e),new et(null,e,t)}function A(e,t,r){return new tt(null,e,t,r,[])}function R(e){return new rt(null,e)}function x(e,t,r){return new nt(null,e,t,r)}function w(){var e=void 0!==arguments[0]?arguments[0]:null
return new it(null,e)}function C(e){return new st(null,e)}function P(e,t){return new at(null,e,t)}function L(e,t){return N(p(e,t))}function I(e){var t=arguments[1]
return N(b(e,t))}function N(e){return new ct(null,e)}function M(e){return new ut(null,e)}function k(e,t,r){return new pt(null,e,t,r)}function F(e,t,r){return new lt(null,e,t,r)}function $(e,t,r,n){return new ft(null,e,t,r,n)}function B(e,t){return ze("FUNCTION_BODY"===t.type),new dt(null,null,!1,e,null,[],t)}function D(e){return"string"==typeof e?e=t(e):e instanceof Qe&&(e=e.identifierToken),new gt(null,e)}function V(){return D(Ne)}function G(e,t){var r=void 0!==arguments[2]?arguments[2]:null
return new yt(null,e,t,r)}function U(e){return new St(null,r(e))}function z(e){return new St(null,n(e))}function H(){return z(!0)}function Y(){return z(!1)}function X(){return new St(null,i())}function W(e){return new St(null,s(e))}function Q(e,r){("string"==typeof e||e instanceof je)&&(e=D(e)),"string"==typeof r&&(r=t(r)),r instanceof Ee&&(r=new St(null,r))
for(var n=r instanceof St?new Tt(null,e,r):new bt(null,e,r),i=2;i<arguments.length;i++)n=Q(n,arguments[i])
return n}function K(e,t){return new Tt(null,e,t)}function q(){return new Lt(null)}function J(e,t){return new jt(null,e,t)}function Z(e){return b(Q(Ie,Le),o([e]))}function ee(e,t){var r=[e]
return t&&r.push(t),b(Q(Ie,Ce),o(r))}function te(e){var t=Object.keys(e).map(function(t){var r=e[t]
return r instanceof Ae||(r=z(!!r)),oe(t,r)})
return ne(t)}function re(e,t,r){return"string"==typeof t&&(t=U(t)),b(Q(Ie,Pe),o([e,t,te(r)]))}function ne(e){return new Et(null,e)}function ie(e){return new Ot(null,e)}function se(e,t){return new At(null,e,t)}function ae(e){return new Rt(null,e)}function oe(e,t){return"string"==typeof e&&(e=ce(e)),new xt(null,e,t)}function ce(e){return new vt(null,t(e))}function ue(e){return new wt(null,h(e),null)}function le(e){return new Ct(null,e)}function pe(e,t){return new Pt(null,e,t)}function fe(e){return new It(null,e)}function he(e,t){var r=void 0!==arguments[2]?arguments[2]:null
return new Nt(null,e,t,r)}function me(e,t){return new Mt(null,e,t)}function de(){return N(U("use strict"))}function ge(e,t,r){if(t instanceof Array){var n=t
return new Ft(null,e,n)}var i=t
return ge(e,[ye(i,r)])}function ye(e,t){return e instanceof Ae&&(e.type===Re.BINDING_IDENTIFIER||e.type===Re.OBJECT_PATTERN||e.type===Re.ARRAY_PATTERN)||(e=h(e)),new kt(null,e,null,t)}function _e(e,t,r){if(e instanceof Ft)return new $t(null,e)
var n=e,i=ge(n,t,r)
return _e(i)}function Se(){return ie(me(e(Ue),W(0)))}function ve(e,t){return new Bt(null,e,t)}function be(e,t){return new Dt(null,e,t)}function Te(e){return L(Q("$ctx","state"),W(e))}var je=System.get("traceur@0.0.87/src/syntax/IdentifierToken.js").IdentifierToken,Ee=System.get("traceur@0.0.87/src/syntax/LiteralToken.js").LiteralToken,Oe=System.get("traceur@0.0.87/src/syntax/trees/ParseTree.js"),Ae=Oe.ParseTree,Re=Oe.ParseTreeType,xe=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),we=xe.CALL,Ce=xe.CREATE,Pe=xe.DEFINE_PROPERTY,Le=xe.FREEZE,Ie=xe.OBJECT,Ne=xe.UNDEFINED,Me=System.get("traceur@0.0.87/src/syntax/Token.js").Token,ke=System.get("traceur@0.0.87/src/syntax/TokenType.js"),Fe=ke.EQUAL,$e=ke.FALSE,Be=ke.NULL,De=ke.NUMBER,Ve=ke.STRING,Ge=ke.TRUE,Ue=ke.VOID,ze=System.get("traceur@0.0.87/src/util/assert.js").assert,He=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),Ye=He.ArgumentList,Xe=He.ArrayLiteralExpression,We=He.BinaryExpression,Qe=He.BindingIdentifier,Ke=He.Block,qe=He.BreakStatement,Je=He.CallExpression,Ze=He.CaseClause,et=He.Catch,tt=He.ClassDeclaration,rt=He.CommaExpression,nt=He.ConditionalExpression,it=He.ContinueStatement,st=He.DefaultClause,at=He.DoWhileStatement,ot=He.EmptyStatement,ct=He.ExpressionStatement,ut=He.Finally,lt=He.ForInStatement,pt=He.ForOfStatement,ft=He.ForStatement,ht=He.FormalParameterList,mt=He.FunctionBody,dt=He.FunctionExpression,gt=He.IdentifierExpression,yt=He.IfStatement,_t=He.ImportedBinding,St=He.LiteralExpression,vt=He.LiteralPropertyName,bt=He.MemberExpression,Tt=He.MemberLookupExpression,jt=He.NewExpression,Et=He.ObjectLiteralExpression,Ot=He.ParenExpression,At=He.PostfixExpression,Rt=He.Script,xt=He.PropertyNameAssignment,wt=He.RestParameter,Ct=He.ReturnStatement,Pt=(He.SpreadExpression,He.SwitchStatement),Lt=He.ThisExpression,It=He.ThrowStatement,Nt=He.TryStatement,Mt=He.UnaryExpression,kt=He.VariableDeclaration,Ft=He.VariableDeclarationList,$t=He.VariableStatement,Bt=He.WhileStatement,Dt=He.WithStatement
Array.prototype.slice.call.bind(Array.prototype.slice),Array.prototype.map.call.bind(Array.prototype.map)
return{get createOperatorToken(){return e},get createIdentifierToken(){return t},get createStringLiteralToken(){return r},get createBooleanLiteralToken(){return n},get createNullLiteralToken(){return i},get createNumberLiteralToken(){return s},get createEmptyParameterList(){return a},get createArgumentList(){return o},get createEmptyArgumentList(){return c},get createArrayLiteralExpression(){return u},get createEmptyArrayLiteralExpression(){return l},get createAssignmentExpression(){return p},get createBinaryExpression(){return f},get createBindingIdentifier(){return h},get createImportedBinding(){return m},get createEmptyStatement(){return d},get createEmptyBlock(){return g},get createBlock(){return y},get createFunctionBody(){return _},get createScopedExpression(){return S},get createImmediatelyInvokedFunctionExpression(){return v},get createCallExpression(){return b},get createBreakStatement(){return T},get createCaseClause(){return E},get createCatch(){return O},get createClassDeclaration(){return A},get createCommaExpression(){return R},get createConditionalExpression(){return x},get createContinueStatement(){return w},get createDefaultClause(){return C},get createDoWhileStatement(){return P},get createAssignmentStatement(){return L},get createCallStatement(){return I},get createExpressionStatement(){return N},get createFinally(){return M},get createForOfStatement(){return k},get createForInStatement(){return F},get createForStatement(){return $},get createFunctionExpression(){return B},get createIdentifierExpression(){return D},get createUndefinedExpression(){return V},get createIfStatement(){return G},get createStringLiteral(){return U},get createBooleanLiteral(){return z},get createTrueLiteral(){return H},get createFalseLiteral(){return Y},get createNullLiteral(){return X},get createNumberLiteral(){return W},get createMemberExpression(){return Q},get createMemberLookupExpression(){return K},get createThisExpression(){return q},get createNewExpression(){return J},get createObjectFreeze(){return Z},get createObjectCreate(){return ee},get createObjectLiteral(){return te},get createDefineProperty(){return re},get createObjectLiteralExpression(){return ne},get createParenExpression(){return ie},get createPostfixExpression(){return se},get createScript(){return ae},get createPropertyNameAssignment(){return oe},get createLiteralPropertyName(){return ce},get createRestParameter(){return ue},get createReturnStatement(){return le},get createSwitchStatement(){return pe},get createThrowStatement(){return fe},get createTryStatement(){return he},get createUnaryExpression(){return me},get createUseStrictDirective(){return de},get createVariableDeclarationList(){return ge},get createVariableDeclaration(){return ye},get createVariableStatement(){return _e},get createVoid0(){return Se},get createWhileStatement(){return ve},get createWithStatement(){return be},get createAssignStateStatement(){return Te}}}),System.registerModule("traceur@0.0.87/src/codegeneration/FindVisitor.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/ParseTreeVisitor.js").ParseTreeVisitor,t=function(){var e=arguments[0]
$traceurRuntime.superConstructor(r).call(this),this.found_=!1,this.shouldContinue_=!0,this.keepOnGoing_=e},r=t
return $traceurRuntime.createClass(t,{get found(){return this.found_},set found(e){e&&(this.found_=!0,this.keepOnGoing_||(this.shouldContinue_=!1))},visitAny:function(e){this.shouldContinue_&&e&&e.visit(this)},visitList:function(e){if(e)for(var t=0;this.shouldContinue_&&t<e.length;t++)this.visitAny(e[t])}},{},e),{get FindVisitor(){return t}}}),System.registerModule("traceur@0.0.87/src/semantics/ConstructorValidator.js",[],function(){"use strict"
function e(e,t){var r=new n(t)
return r.visitAny(e),r.hasError?!1:r.found?!0:(t.reportError(e.location.end,"Derived constructor must call super()"),!1)}var t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js").SUPER_EXPRESSION,r=System.get("traceur@0.0.87/src/codegeneration/FindVisitor.js").FindVisitor,n=function(e){$traceurRuntime.superConstructor(i).call(this),this.reporter_=e,this.hasError=!1},i=n
return $traceurRuntime.createClass(n,{visitThisExpression:function(e){this.reportError_(e.location,"this")},visitCallExpression:function(e){return e.operand.type===t?(this.visitAny(e.args),void(this.found=!0)):void $traceurRuntime.superGet(this,i.prototype,"visitCallExpression").call(this,e)},visitSuperExpression:function(e){this.reportError_(e.location,"super property")},reportError_:function(e,t){var e=e&&e.start
this.reporter_.reportError(e,"'"+t+"' is not allowed before super()"),this.hasError=!0,this.found=!0}},{},r),{get validateConstructor(){return e}}}),System.registerModule("traceur@0.0.87/src/syntax/Keywords.js",[],function(){"use strict"
function e(e){return i[e]}function t(t){return e(t)===a}var r=["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","finally","for","function","if","import","in","instanceof","let","new","return","super","switch","this","throw","try","typeof","var","void","while","with","enum","extends","null","true","false"],n=["implements","interface","package","private","protected","public","static","yield"],i=Object.create(null),s=1,a=2
return r.forEach(function(e){i[e]=s}),n.forEach(function(e){i[e]=a}),{get NORMAL_KEYWORD(){return s},get STRICT_KEYWORD(){return a},get getKeywordType(){return e},get isStrictKeyword(){return t}}}),System.registerModule("traceur@0.0.87/src/staticsemantics/StrictParams.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/ParseTreeVisitor.js").ParseTreeVisitor,t=System.get("traceur@0.0.87/src/syntax/Keywords.js").isStrictKeyword,r=function(e){$traceurRuntime.superConstructor(n).call(this),this.errorReporter=e},n=r
return $traceurRuntime.createClass(r,{visitBindingIdentifier:function(e){var r=""+e.identifierToken
t(r)&&this.errorReporter.reportError(e.location.start,r+" is a reserved identifier")}},{visit:function(e,t){new n(t).visitAny(e)}},e),{get StrictParams(){return r}}}),System.registerModule("traceur@0.0.87/src/util/SourceRange.js",[],function(){"use strict"
var e=function(e,t){this.start=e,this.end=t}
return $traceurRuntime.createClass(e,{toString:function(){var e=this.start.source.contents
return e.slice(this.start.offset,this.end.offset)}},{}),{get SourceRange(){return e}}}),System.registerModule("traceur@0.0.87/src/util/ErrorReporter.js",[],function(){"use strict"
function e(e,t){var r=arguments[2],n=0
return t=t.replace(/%./g,function(e){switch(e){case"%s":return r&&r[n++]
case"%%":return"%"}return e}),e&&(t=e+": "+t),t}var t=function(){this.hadError_=!1}
return $traceurRuntime.createClass(t,{reportError:function(e,t){this.hadError_=!0,this.reportMessageInternal(e,t)},reportMessageInternal:function(e,t){e&&(t=e+": "+t),console.error(t)},hadError:function(){return this.hadError_},clearError:function(){this.hadError_=!1}},{}),t.format=e,{get ErrorReporter(){return t},get format(){return e}}}),System.registerModule("traceur@0.0.87/src/util/SyntaxErrorReporter.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/util/ErrorReporter.js"),t=e.ErrorReporter,r=e.format,n=function(){$traceurRuntime.superConstructor(i).apply(this,arguments)},i=n
return $traceurRuntime.createClass(n,{reportMessageInternal:function(e,t){var n=r(e,t)
throw new SyntaxError(n)}},{},t),{get SyntaxErrorReporter(){return n}}}),System.registerModule("traceur@0.0.87/src/syntax/KeywordToken.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/Keywords.js").STRICT_KEYWORD,t=System.get("traceur@0.0.87/src/syntax/Token.js").Token,r=function(t,r,i){$traceurRuntime.superConstructor(n).call(this,t,i),this.isStrictKeyword_=r===e},n=r
return $traceurRuntime.createClass(r,{isKeyword:function(){return!0},isStrictKeyword:function(){return this.isStrictKeyword_}},{},t),{get KeywordToken(){return r}}}),System.registerModule("traceur@0.0.87/src/syntax/unicode-tables.js",[],function(){"use strict"
var e=[170,170,181,181,186,186,192,214,216,246,248,442,443,443,444,447,448,451,452,659,660,660,661,687,688,705,710,721,736,740,748,748,750,750,880,883,884,884,886,887,890,890,891,893,895,895,902,902,904,906,908,908,910,929,931,1013,1015,1153,1162,1327,1329,1366,1369,1369,1377,1415,1488,1514,1520,1522,1568,1599,1600,1600,1601,1610,1646,1647,1649,1747,1749,1749,1765,1766,1774,1775,1786,1788,1791,1791,1808,1808,1810,1839,1869,1957,1969,1969,1994,2026,2036,2037,2042,2042,2048,2069,2074,2074,2084,2084,2088,2088,2112,2136,2208,2226,2308,2361,2365,2365,2384,2384,2392,2401,2417,2417,2418,2432,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2493,2493,2510,2510,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2654,2654,2674,2676,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2785,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2877,2877,2908,2909,2911,2913,2929,2929,2947,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,3001,3024,3024,3077,3084,3086,3088,3090,3112,3114,3129,3133,3133,3160,3161,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3261,3261,3294,3294,3296,3297,3313,3314,3333,3340,3342,3344,3346,3386,3389,3389,3406,3406,3424,3425,3450,3455,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3585,3632,3634,3635,3648,3653,3654,3654,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3760,3762,3763,3773,3773,3776,3780,3782,3782,3804,3807,3840,3840,3904,3911,3913,3948,3976,3980,4096,4138,4159,4159,4176,4181,4186,4189,4193,4193,4197,4198,4206,4208,4213,4225,4238,4238,4256,4293,4295,4295,4301,4301,4304,4346,4348,4348,4349,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4992,5007,5024,5108,5121,5740,5743,5759,5761,5786,5792,5866,5870,5872,5873,5880,5888,5900,5902,5905,5920,5937,5952,5969,5984,5996,5998,6e3,6016,6067,6103,6103,6108,6108,6176,6210,6211,6211,6212,6263,6272,6312,6314,6314,6320,6389,6400,6430,6480,6509,6512,6516,6528,6571,6593,6599,6656,6678,6688,6740,6823,6823,6917,6963,6981,6987,7043,7072,7086,7087,7098,7141,7168,7203,7245,7247,7258,7287,7288,7293,7401,7404,7406,7409,7413,7414,7424,7467,7468,7530,7531,7543,7544,7544,7545,7578,7579,7615,7680,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8305,8305,8319,8319,8336,8348,8450,8450,8455,8455,8458,8467,8469,8469,8472,8472,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8494,8494,8495,8500,8501,8504,8505,8505,8508,8511,8517,8521,8526,8526,8544,8578,8579,8580,8581,8584,11264,11310,11312,11358,11360,11387,11388,11389,11390,11492,11499,11502,11506,11507,11520,11557,11559,11559,11565,11565,11568,11623,11631,11631,11648,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,12293,12293,12294,12294,12295,12295,12321,12329,12337,12341,12344,12346,12347,12347,12348,12348,12353,12438,12443,12444,12445,12446,12447,12447,12449,12538,12540,12542,12543,12543,12549,12589,12593,12686,12704,12730,12784,12799,13312,19893,19968,40908,40960,40980,40981,40981,40982,42124,42192,42231,42232,42237,42240,42507,42508,42508,42512,42527,42538,42539,42560,42605,42606,42606,42623,42623,42624,42651,42652,42653,42656,42725,42726,42735,42775,42783,42786,42863,42864,42864,42865,42887,42888,42888,42891,42894,42896,42925,42928,42929,42999,42999,43e3,43001,43002,43002,43003,43009,43011,43013,43015,43018,43020,43042,43072,43123,43138,43187,43250,43255,43259,43259,43274,43301,43312,43334,43360,43388,43396,43442,43471,43471,43488,43492,43494,43494,43495,43503,43514,43518,43520,43560,43584,43586,43588,43595,43616,43631,43632,43632,43633,43638,43642,43642,43646,43695,43697,43697,43701,43702,43705,43709,43712,43712,43714,43714,43739,43740,43741,43741,43744,43754,43762,43762,43763,43764,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43824,43866,43868,43871,43876,43877,43968,44002,44032,55203,55216,55238,55243,55291,63744,64109,64112,64217,64256,64262,64275,64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65140,65142,65276,65313,65338,65345,65370,65382,65391,65392,65392,65393,65437,65438,65439,65440,65470,65474,65479,65482,65487,65490,65495,65498,65500,65536,65547,65549,65574,65576,65594,65596,65597,65599,65613,65616,65629,65664,65786,65856,65908,66176,66204,66208,66256,66304,66335,66352,66368,66369,66369,66370,66377,66378,66378,66384,66421,66432,66461,66464,66499,66504,66511,66513,66517,66560,66639,66640,66717,66816,66855,66864,66915,67072,67382,67392,67413,67424,67431,67584,67589,67592,67592,67594,67637,67639,67640,67644,67644,67647,67669,67680,67702,67712,67742,67840,67861,67872,67897,67968,68023,68030,68031,68096,68096,68112,68115,68117,68119,68121,68147,68192,68220,68224,68252,68288,68295,68297,68324,68352,68405,68416,68437,68448,68466,68480,68497,68608,68680,69635,69687,69763,69807,69840,69864,69891,69926,69968,70002,70006,70006,70019,70066,70081,70084,70106,70106,70144,70161,70163,70187,70320,70366,70405,70412,70415,70416,70419,70440,70442,70448,70450,70451,70453,70457,70461,70461,70493,70497,70784,70831,70852,70853,70855,70855,71040,71086,71168,71215,71236,71236,71296,71338,71840,71903,71935,71935,72384,72440,73728,74648,74752,74862,77824,78894,92160,92728,92736,92766,92880,92909,92928,92975,92992,92995,93027,93047,93053,93071,93952,94020,94032,94032,94099,94111,110592,110593,113664,113770,113776,113788,113792,113800,113808,113817,119808,119892,119894,119964,119966,119967,119970,119970,119973,119974,119977,119980,119982,119993,119995,119995,119997,120003,120005,120069,120071,120074,120077,120084,120086,120092,120094,120121,120123,120126,120128,120132,120134,120134,120138,120144,120146,120485,120488,120512,120514,120538,120540,120570,120572,120596,120598,120628,120630,120654,120656,120686,120688,120712,120714,120744,120746,120770,120772,120779,124928,125124,126464,126467,126469,126495,126497,126498,126500,126500,126503,126503,126505,126514,126516,126519,126521,126521,126523,126523,126530,126530,126535,126535,126537,126537,126539,126539,126541,126543,126545,126546,126548,126548,126551,126551,126553,126553,126555,126555,126557,126557,126559,126559,126561,126562,126564,126564,126567,126570,126572,126578,126580,126583,126585,126588,126590,126590,126592,126601,126603,126619,126625,126627,126629,126633,126635,126651,131072,173782,173824,177972,177984,178205,194560,195101],t=[183,183,768,879,903,903,1155,1159,1425,1469,1471,1471,1473,1474,1476,1477,1479,1479,1552,1562,1611,1631,1632,1641,1648,1648,1750,1756,1759,1764,1767,1768,1770,1773,1776,1785,1809,1809,1840,1866,1958,1968,1984,1993,2027,2035,2070,2073,2075,2083,2085,2087,2089,2093,2137,2139,2276,2306,2307,2307,2362,2362,2363,2363,2364,2364,2366,2368,2369,2376,2377,2380,2381,2381,2382,2383,2385,2391,2402,2403,2406,2415,2433,2433,2434,2435,2492,2492,2494,2496,2497,2500,2503,2504,2507,2508,2509,2509,2519,2519,2530,2531,2534,2543,2561,2562,2563,2563,2620,2620,2622,2624,2625,2626,2631,2632,2635,2637,2641,2641,2662,2671,2672,2673,2677,2677,2689,2690,2691,2691,2748,2748,2750,2752,2753,2757,2759,2760,2761,2761,2763,2764,2765,2765,2786,2787,2790,2799,2817,2817,2818,2819,2876,2876,2878,2878,2879,2879,2880,2880,2881,2884,2887,2888,2891,2892,2893,2893,2902,2902,2903,2903,2914,2915,2918,2927,2946,2946,3006,3007,3008,3008,3009,3010,3014,3016,3018,3020,3021,3021,3031,3031,3046,3055,3072,3072,3073,3075,3134,3136,3137,3140,3142,3144,3146,3149,3157,3158,3170,3171,3174,3183,3201,3201,3202,3203,3260,3260,3262,3262,3263,3263,3264,3268,3270,3270,3271,3272,3274,3275,3276,3277,3285,3286,3298,3299,3302,3311,3329,3329,3330,3331,3390,3392,3393,3396,3398,3400,3402,3404,3405,3405,3415,3415,3426,3427,3430,3439,3458,3459,3530,3530,3535,3537,3538,3540,3542,3542,3544,3551,3558,3567,3570,3571,3633,3633,3636,3642,3655,3662,3664,3673,3761,3761,3764,3769,3771,3772,3784,3789,3792,3801,3864,3865,3872,3881,3893,3893,3895,3895,3897,3897,3902,3903,3953,3966,3967,3967,3968,3972,3974,3975,3981,3991,3993,4028,4038,4038,4139,4140,4141,4144,4145,4145,4146,4151,4152,4152,4153,4154,4155,4156,4157,4158,4160,4169,4182,4183,4184,4185,4190,4192,4194,4196,4199,4205,4209,4212,4226,4226,4227,4228,4229,4230,4231,4236,4237,4237,4239,4239,4240,4249,4250,4252,4253,4253,4957,4959,4969,4977,5906,5908,5938,5940,5970,5971,6002,6003,6068,6069,6070,6070,6071,6077,6078,6085,6086,6086,6087,6088,6089,6099,6109,6109,6112,6121,6155,6157,6160,6169,6313,6313,6432,6434,6435,6438,6439,6440,6441,6443,6448,6449,6450,6450,6451,6456,6457,6459,6470,6479,6576,6592,6600,6601,6608,6617,6618,6618,6679,6680,6681,6682,6683,6683,6741,6741,6742,6742,6743,6743,6744,6750,6752,6752,6753,6753,6754,6754,6755,6756,6757,6764,6765,6770,6771,6780,6783,6783,6784,6793,6800,6809,6832,6845,6912,6915,6916,6916,6964,6964,6965,6965,6966,6970,6971,6971,6972,6972,6973,6977,6978,6978,6979,6980,6992,7001,7019,7027,7040,7041,7042,7042,7073,7073,7074,7077,7078,7079,7080,7081,7082,7082,7083,7085,7088,7097,7142,7142,7143,7143,7144,7145,7146,7148,7149,7149,7150,7150,7151,7153,7154,7155,7204,7211,7212,7219,7220,7221,7222,7223,7232,7241,7248,7257,7376,7378,7380,7392,7393,7393,7394,7400,7405,7405,7410,7411,7412,7412,7416,7417,7616,7669,7676,7679,8255,8256,8276,8276,8400,8412,8417,8417,8421,8432,11503,11505,11647,11647,11744,11775,12330,12333,12334,12335,12441,12442,42528,42537,42607,42607,42612,42621,42655,42655,42736,42737,43010,43010,43014,43014,43019,43019,43043,43044,43045,43046,43047,43047,43136,43137,43188,43203,43204,43204,43216,43225,43232,43249,43264,43273,43302,43309,43335,43345,43346,43347,43392,43394,43395,43395,43443,43443,43444,43445,43446,43449,43450,43451,43452,43452,43453,43456,43472,43481,43493,43493,43504,43513,43561,43566,43567,43568,43569,43570,43571,43572,43573,43574,43587,43587,43596,43596,43597,43597,43600,43609,43643,43643,43644,43644,43645,43645,43696,43696,43698,43700,43703,43704,43710,43711,43713,43713,43755,43755,43756,43757,43758,43759,43765,43765,43766,43766,44003,44004,44005,44005,44006,44007,44008,44008,44009,44010,44012,44012,44013,44013,44016,44025,64286,64286,65024,65039,65056,65069,65075,65076,65101,65103,65296,65305,65343,65343,66045,66045,66272,66272,66422,66426,66720,66729,68097,68099,68101,68102,68108,68111,68152,68154,68159,68159,68325,68326,69632,69632,69633,69633,69634,69634,69688,69702,69734,69743,69759,69761,69762,69762,69808,69810,69811,69814,69815,69816,69817,69818,69872,69881,69888,69890,69927,69931,69932,69932,69933,69940,69942,69951,70003,70003,70016,70017,70018,70018,70067,70069,70070,70078,70079,70080,70096,70105,70188,70190,70191,70193,70194,70195,70196,70196,70197,70197,70198,70199,70367,70367,70368,70370,70371,70378,70384,70393,70401,70401,70402,70403,70460,70460,70462,70463,70464,70464,70465,70468,70471,70472,70475,70477,70487,70487,70498,70499,70502,70508,70512,70516,70832,70834,70835,70840,70841,70841,70842,70842,70843,70846,70847,70848,70849,70849,70850,70851,70864,70873,71087,71089,71090,71093,71096,71099,71100,71101,71102,71102,71103,71104,71216,71218,71219,71226,71227,71228,71229,71229,71230,71230,71231,71232,71248,71257,71339,71339,71340,71340,71341,71341,71342,71343,71344,71349,71350,71350,71351,71351,71360,71369,71904,71913,92768,92777,92912,92916,92976,92982,93008,93017,94033,94078,94095,94098,113821,113822,119141,119142,119143,119145,119149,119154,119163,119170,119173,119179,119210,119213,119362,119364,120782,120831,125136,125142,917760,917999]
return{get idStartTable(){return e},get idContinueTable(){return t}}}),System.registerModule("traceur@0.0.87/src/syntax/Scanner.js",[],function(){"use strict"
function e(e){if(128>e)return Et[e]
switch(e){case 160:case 65279:case 8232:case 8233:return!0}return!1}function t(e){switch(e){case 10:case 13:case 8232:case 8233:return!0}return!1}function r(e){return e>=48&&57>=e}function n(e){return 128>e&&At[e]}function i(e){return 48===e||49===e}function s(e){return e>=48&&55>=e}function a(e){return 128>e?xt[e]:c(me,e)}function o(e){return 128>e?Ct[e]:c(me,e)||c(he,e)||8204===e||8205===e}function c(e,t){for(var r=0;r<e.length;){if(t<e[r++])return!1
if(t<=e[r++])return!0}return!1}function u(e){switch(e){case 47:return!1
case 91:case 92:return!0}return!t(e)}function l(e){return u(e)&&42!==e}function p(e){return Bt.getSourcePosition(e)}function f(e){return Bt.getSourceRange(e,Lt)}function h(){return Mt?Mt.location.start.offset:Lt}function m(){var e=Lt-(""+Mt).length
if((Mt.type!==ft||47!==$t)&&!d())return new ue(ot,z(e),f(e))
if(47!==$t)return ae("Expected '/' in regular expression literal"),new ue(ot,z(e),f(e))
for(ie();o($t);)ie()
return new ue(ot,z(e),f(e))}function d(){if(!l($t))return ae("Expected regular expression first char"),!1
for(;!ne()&&u($t);)if(!g())return!1
return!0}function g(){switch($t){case 92:return y()
case 91:return _()
default:return ie(),!0}}function y(){return ie(),t($t)||ne()?(ae("New line not allowed in regular expression literal"),!1):(ie(),!0)}function _(){for(ie();!ne()&&S();)if(!v())return!1
return 93!==$t?(ae("']' expected"),!1):(ie(),!0)}function S(){return 93!==$t&&!t($t)}function v(){return 92===$t?y():(ie(),!0)}function b(){for(;!ne();)switch($t){case 96:return
case 92:X()
break
case 36:var e=It.charCodeAt(Lt+1)
if(123===e)return
default:ie()}}function T(e){return ne()?(ae("Unterminated template literal"),kt=D(Ie,e)):E(He,_t)}function j(){return ne()?(ae("Expected '}' after expression in template literal"),D(Ie,Lt)):Mt.type!==Re?(ae("Expected '}' after expression in template literal"),D(Fe,Lt)):E(vt,St)}function E(e,t){var r=Lt
if(b(),ne())return ae("Unterminated template literal"),D(Fe,r)
var n=z(r)
switch($t){case 96:return ie(),kt=new ue(e,n,f(r-1))
case 36:return ie(),ie(),kt=new ue(t,n,f(r-1))}}function O(){var e=R()
return Mt=Ft||k(),Ft=null,kt=e,e}function A(){for(var e=R(),r=kt.location.end.offset,n=e.location.start.offset,i=r;n>i;i++){var s=It.charCodeAt(i)
if(t(s))return null
if(47===s){if(s=It.charCodeAt(++i),47===s)return null
i=It.indexOf("*/",i)+2}}return e}function R(){return Mt||(Mt=k())}function x(){return Mt||(Mt=k()),Ft||(Ft=k()),Ft}function w(){for(;!ne()&&C();)ie()}function C(){return e($t)}function P(){for(;L(););}function L(){w()
var e=$t
if(47===e)switch(e=It.charCodeAt(Lt+1)){case 47:return N(),!0
case 42:return M(),!0}return!1}function I(e,t){Gt.commentCallback&&Vt.handleComment(Bt.getSourceRange(e,t))}function N(){var e=Lt
for(Lt+=2;!ne()&&!t(It.charCodeAt(Lt++)););se(),I(e,Lt)}function M(){var e=Lt,t=It.indexOf("*/",Lt+2)
Lt=-1!==t?t+2:Nt,se(),I(e,Lt)}function k(){P()
var e=Lt
if(ne())return D(Ie,e)
var t=$t
switch(ie(),t){case 123:return D(Ke,e)
case 125:return D(Re,e)
case 40:return D(qe,e)
case 41:return D(xe,e)
case 91:return D(Je,e)
case 93:return D(we,e)
case 46:switch($t){case 46:if(46===It.charCodeAt(Lt+1))return ie(),ie(),D(Le,e)
break
default:if(r($t))return F(e)}return D(rt,e)
case 59:return D(lt,e)
case 44:return D(Pe,e)
case 126:return D(bt,e)
case 63:return D(at,e)
case 58:return D(Ce,e)
case 60:switch($t){case 60:return ie(),61===$t?(ie(),D(De,e)):D(Be,e)
case 61:return ie(),D(Ve,e)
default:return D(Qe,e)}case 62:switch($t){case 62:switch(ie(),$t){case 61:return ie(),D(ut,e)
case 62:return ie(),61===$t?(ie(),D(jt,e)):D(Tt,e)
default:return D(ct,e)}case 61:return ie(),D($e,e)
default:return D(Ae,e)}case 61:return 61===$t?(ie(),61===$t?(ie(),D(ke,e)):D(Me,e)):62===$t&&Gt.arrowFunctions?(ie(),D(Se,e)):D(Ne,e)
case 33:return 61===$t?(ie(),61===$t?(ie(),D(Xe,e)):D(Ye,e)):D(be,e)
case 42:return 61===$t?(ie(),D(mt,e)):42===$t&&Gt.exponentiation?(ie(),61===$t?(ie(),D(gt,e)):D(dt,e)):D(ht,e)
case 37:return 61===$t?(ie(),D(tt,e)):D(et,e)
case 94:return 61===$t?(ie(),D(Oe,e)):D(Ee,e)
case 47:return 61===$t?(ie(),D(ft,e)):D(pt,e)
case 43:switch($t){case 43:return ie(),D(st,e)
case 61:return ie(),D(it,e)
default:return D(nt,e)}case 45:switch($t){case 45:return ie(),D(ze,e)
case 61:return ie(),D(Ue,e)
default:return D(Ge,e)}case 38:switch($t){case 38:return ie(),D(_e,e)
case 61:return ie(),D(ye,e)
default:return D(ge,e)}case 124:switch($t){case 124:return ie(),D(Ze,e)
case 61:return ie(),D(je,e)
default:return D(Te,e)}case 96:return T(e)
case 64:return D(ve,e)
case 48:return B(e)
case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return $(e)
case 34:case 39:return U(e,t)
default:return G(e,t)}}function F(e){return Z(),J(e)}function $(e){return Z(),q(e)}function B(e){switch($t){case 46:return q(e)
case 88:case 120:return ie(),n($t)||ae("Hex Integer Literal must contain at least one digit"),ee(),new ue(We,z(e),f(e))
case 66:case 98:if(!Gt.numericLiterals)break
return ie(),i($t)||ae("Binary Integer Literal must contain at least one digit"),te(),new ue(We,z(e),f(e))
case 79:case 111:if(!Gt.numericLiterals)break
return ie(),s($t)||ae("Octal Integer Literal must contain at least one digit"),re(),new ue(We,z(e),f(e))
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return $(e)}return new ue(We,z(e),f(e))}function D(e,t){return new le(e,f(t))}function V(){var e=Lt
return 117===$t&&(ie(),Q()&&Q()&&Q()&&Q())?parseInt(z(e+1),16):(ae("Invalid unicode escape sequence in identifier",e-1),0)}function G(e,t){var r
if(92===t&&(t=V(),r=[t]),!a(t))return ae("Character code '"+t+"' is not a valid identifier start char",e),D(Fe,e)
for(;;)if(t=$t,o(t))ie()
else{if(92!==t)break
if(ie(),t=V(),r||(r=[]),r.push(t),!o(t))return D(Fe,e)}var n=It.slice(e,Lt),i=pe(n)
if(i)return new ce(n,i,f(e))
if(r){var s=0
n=n.replace(/\\u..../g,function(){return String.fromCharCode(r[s++])})}return new oe(f(e),n)}function U(e,t){for(;H(t);)if(!Y())return new ue(yt,z(e),f(e))
return $t!==t?ae("Unterminated String Literal",e):ie(),new ue(yt,z(e),f(e))}function z(e){return It.substring(e,Lt)}function H(e){return!ne()&&$t!==e&&!t($t)}function Y(){return 92===$t?X():(ie(),!0)}function X(){if(ie(),ne())return ae("Unterminated string literal escape sequence"),!1
if(t($t))return K(),!0
var e=$t
switch(ie(),e){case 39:case 34:case 92:case 98:case 102:case 110:case 114:case 116:case 118:case 48:return!0
case 120:return Q()&&Q()
case 117:return W()
default:return!0}}function W(){if(123===$t&&Gt.unicodeEscapeSequences){ie()
var e=Lt
if(!n($t))return ae("Hex digit expected"),!1
if(ee(),125!==$t)return ae("Hex digit expected"),!1
var t=z(e,Lt)
return parseInt(t,16)>1114111?(ae("The code point in a Unicode escape sequence cannot exceed 10FFFF"),!1):(ie(),!0)}return Q()&&Q()&&Q()&&Q()}function Q(){return n($t)?(ie(),!0):(ae("Hex digit expected"),!1)}function K(){var e=$t
ie(),13===e&&10===$t&&ie()}function q(e){return 46===$t&&(ie(),Z()),J(e)}function J(e){switch($t){case 101:case 69:switch(ie(),$t){case 43:case 45:ie()}r($t)||ae("Exponent part must contain at least one digit"),Z()}return new ue(We,z(e),f(e))}function Z(){for(;r($t);)ie()}function ee(){for(;n($t);)ie()}function te(){for(;i($t);)ie()}function re(){for(;s($t);)ie()}function ne(){return Lt===Nt}function ie(){Lt++,se()}function se(){$t=It.charCodeAt(Lt)}function ae(e){var t=void 0!==arguments[1]?arguments[1]:Lt,r=p(t)
Dt.reportError(r,e)}for(var oe=System.get("traceur@0.0.87/src/syntax/IdentifierToken.js").IdentifierToken,ce=System.get("traceur@0.0.87/src/syntax/KeywordToken.js").KeywordToken,ue=System.get("traceur@0.0.87/src/syntax/LiteralToken.js").LiteralToken,le=System.get("traceur@0.0.87/src/syntax/Token.js").Token,pe=System.get("traceur@0.0.87/src/syntax/Keywords.js").getKeywordType,fe=System.get("traceur@0.0.87/src/syntax/unicode-tables.js"),he=fe.idContinueTable,me=fe.idStartTable,de=System.get("traceur@0.0.87/src/syntax/TokenType.js"),ge=de.AMPERSAND,ye=de.AMPERSAND_EQUAL,_e=de.AND,Se=de.ARROW,ve=de.AT,be=de.BANG,Te=de.BAR,je=de.BAR_EQUAL,Ee=de.CARET,Oe=de.CARET_EQUAL,Ae=de.CLOSE_ANGLE,Re=de.CLOSE_CURLY,xe=de.CLOSE_PAREN,we=de.CLOSE_SQUARE,Ce=de.COLON,Pe=de.COMMA,Le=de.DOT_DOT_DOT,Ie=de.END_OF_FILE,Ne=de.EQUAL,Me=de.EQUAL_EQUAL,ke=de.EQUAL_EQUAL_EQUAL,Fe=de.ERROR,$e=de.GREATER_EQUAL,Be=de.LEFT_SHIFT,De=de.LEFT_SHIFT_EQUAL,Ve=de.LESS_EQUAL,Ge=de.MINUS,Ue=de.MINUS_EQUAL,ze=de.MINUS_MINUS,He=de.NO_SUBSTITUTION_TEMPLATE,Ye=de.NOT_EQUAL,Xe=de.NOT_EQUAL_EQUAL,We=de.NUMBER,Qe=de.OPEN_ANGLE,Ke=de.OPEN_CURLY,qe=de.OPEN_PAREN,Je=de.OPEN_SQUARE,Ze=de.OR,et=de.PERCENT,tt=de.PERCENT_EQUAL,rt=de.PERIOD,nt=de.PLUS,it=de.PLUS_EQUAL,st=de.PLUS_PLUS,at=de.QUESTION,ot=de.REGULAR_EXPRESSION,ct=de.RIGHT_SHIFT,ut=de.RIGHT_SHIFT_EQUAL,lt=de.SEMI_COLON,pt=de.SLASH,ft=de.SLASH_EQUAL,ht=de.STAR,mt=de.STAR_EQUAL,dt=de.STAR_STAR,gt=de.STAR_STAR_EQUAL,yt=de.STRING,_t=de.TEMPLATE_HEAD,St=de.TEMPLATE_MIDDLE,vt=de.TEMPLATE_TAIL,bt=de.TILDE,Tt=de.UNSIGNED_RIGHT_SHIFT,jt=de.UNSIGNED_RIGHT_SHIFT_EQUAL,Et=[],Ot=0;128>Ot;Ot++)Et[Ot]=Ot>=9&&13>=Ot||32===Ot
for(var At=[],Rt=0;128>Rt;Rt++)At[Rt]=Rt>=48&&57>=Rt||Rt>=65&&70>=Rt||Rt>=97&&102>=Rt
for(var xt=[],wt=0;128>wt;wt++)xt[wt]=36===wt||wt>=65&&90>=wt||95===wt||wt>=97&&122>=wt
for(var Ct=[],Pt=0;128>Pt;Pt++)Ct[Pt]=a(Pt)||r(Pt)
var Lt,It,Nt,Mt,kt,Ft,$t,Bt,Dt,Vt,Gt,Ut=function(e,t,r,n){Dt=e,Bt=t.lineNumberTable,It=t.contents,Nt=t.contents.length,this.index=0,Vt=r,Gt=n}
return $traceurRuntime.createClass(Ut,{get lastToken(){return kt},getPosition:function(){return p(h())},nextRegularExpressionLiteralToken:function(){return kt=m(),Mt=k(),kt},nextTemplateLiteralToken:function(){var e=j()
return Mt=k(),e},nextCloseAngle:function(){switch(Mt.type){case $e:case ct:case ut:case Tt:case jt:return this.index-=Mt.type.length-1,kt=D(Ae,Lt),Mt=k(),kt}return O()},nextToken:function(){return O()},peekToken:function(e){return e?x():R()},peekTokenNoLineTerminator:function(){return A()},isAtEnd:function(){return ne()},set index(e){Lt=e,kt=null,Mt=null,Ft=null,se()},get index(){return Lt}},{}),{get isWhitespace(){return e},get isLineTerminator(){return t},get isIdentifierPart(){return o},get Scanner(){return Ut}}}),System.registerModule("traceur@0.0.87/src/syntax/Parser.js",[],function(){"use strict"
function e(e){return e.some(function(e){return e.initializer})}var t=System.get("traceur@0.0.87/src/codegeneration/FindVisitor.js").FindVisitor,r=System.get("traceur@0.0.87/src/syntax/IdentifierToken.js").IdentifierToken,n=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),i=n.ARRAY_LITERAL_EXPRESSION,s=n.BINDING_IDENTIFIER,a=n.CALL_EXPRESSION,o=n.COMPUTED_PROPERTY_NAME,c=n.COVER_FORMALS,u=n.FORMAL_PARAMETER_LIST,l=n.IDENTIFIER_EXPRESSION,p=n.LITERAL_PROPERTY_NAME,f=n.OBJECT_LITERAL_EXPRESSION,h=n.REST_PARAMETER,m=n.SYNTAX_ERROR_TREE,d=System.get("traceur@0.0.87/src/Options.js").Options,g=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),y=g.AS,_=g.ASYNC,S=g.ASYNC_STAR,v=g.AWAIT,b=g.CONSTRUCTOR,T=g.FROM,j=g.GET,E=g.OF,O=g.ON,A=g.SET,R=System.get("traceur@0.0.87/src/util/SyntaxErrorReporter.js").SyntaxErrorReporter,x=System.get("traceur@0.0.87/src/syntax/Scanner.js").Scanner,w=System.get("traceur@0.0.87/src/util/SourceRange.js").SourceRange,C=System.get("traceur@0.0.87/src/staticsemantics/StrictParams.js").StrictParams,P=System.get("traceur@0.0.87/src/syntax/Token.js"),L=P.Token,I=P.isAssignmentOperator,N=System.get("traceur@0.0.87/src/syntax/Keywords.js").getKeywordType,M=System.get("traceur@0.0.87/src/semantics/ConstructorValidator.js").validateConstructor,k=System.get("traceur@0.0.87/src/syntax/TokenType.js"),F=k.AMPERSAND,$=k.AND,B=k.ARROW,D=k.AT,V=k.BANG,G=k.BAR,U=k.BREAK,z=k.CARET,H=k.CASE,Y=k.CATCH,X=k.CLASS,W=k.CLOSE_ANGLE,Q=k.CLOSE_CURLY,K=k.CLOSE_PAREN,q=k.CLOSE_SQUARE,J=k.COLON,Z=k.COMMA,ee=k.CONST,te=k.CONTINUE,re=k.DEBUGGER,ne=k.DEFAULT,ie=k.DELETE,se=k.DO,ae=k.DOT_DOT_DOT,oe=k.ELSE,ce=k.END_OF_FILE,ue=k.EQUAL,le=k.EQUAL_EQUAL,pe=k.EQUAL_EQUAL_EQUAL,fe=k.ERROR,he=k.EXPORT,me=k.EXTENDS,de=k.FALSE,ge=k.FINALLY,ye=k.FOR,_e=k.FUNCTION,Se=k.GREATER_EQUAL,ve=k.IDENTIFIER,be=k.IF,Te=k.IMPLEMENTS,je=k.IMPORT,Ee=k.IN,Oe=k.INSTANCEOF,Ae=k.INTERFACE,Re=k.LEFT_SHIFT,xe=k.LESS_EQUAL,we=k.LET,Ce=k.MINUS,Pe=k.MINUS_MINUS,Le=k.NEW,Ie=k.NO_SUBSTITUTION_TEMPLATE,Ne=k.NOT_EQUAL,Me=k.NOT_EQUAL_EQUAL,ke=k.NULL,Fe=k.NUMBER,$e=k.OPEN_ANGLE,Be=k.OPEN_CURLY,De=k.OPEN_PAREN,Ve=k.OPEN_SQUARE,Ge=k.OR,Ue=k.PACKAGE,ze=k.PERCENT,He=k.PERIOD,Ye=k.PLUS,Xe=k.PLUS_PLUS,We=k.PRIVATE,Qe=k.PROTECTED,Ke=k.PUBLIC,qe=k.QUESTION,Je=k.RETURN,Ze=k.RIGHT_SHIFT,et=k.SEMI_COLON,tt=k.SLASH,rt=k.SLASH_EQUAL,nt=k.STAR,it=k.STAR_STAR,st=k.STATIC,at=k.STRING,ot=k.SUPER,ct=k.SWITCH,ut=k.TEMPLATE_HEAD,lt=k.TEMPLATE_TAIL,pt=k.THIS,ft=k.THROW,ht=k.TILDE,mt=k.TRUE,dt=k.TRY,gt=k.TYPEOF,yt=k.UNSIGNED_RIGHT_SHIFT,_t=k.VAR,St=k.VOID,vt=k.WHILE,bt=k.WITH,Tt=k.YIELD,jt=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),Et=jt.ArgumentList,Ot=jt.ArrayComprehension,At=jt.ArrayLiteralExpression,Rt=jt.ArrayPattern,xt=jt.ArrayType,wt=jt.ArrowFunctionExpression,Ct=jt.AssignmentElement,Pt=jt.AwaitExpression,Lt=jt.BinaryExpression,It=jt.BindingElement,Nt=jt.BindingIdentifier,Mt=jt.Block,kt=jt.BreakStatement,Ft=jt.CallExpression,$t=jt.CallSignature,Bt=jt.CaseClause,Dt=jt.Catch,Vt=jt.ClassDeclaration,Gt=jt.ClassExpression,Ut=jt.CommaExpression,zt=jt.ComprehensionFor,Ht=jt.ComprehensionIf,Yt=jt.ComputedPropertyName,Xt=jt.ConditionalExpression,Wt=jt.ConstructSignature,Qt=jt.ConstructorType,Kt=jt.ContinueStatement,qt=jt.CoverFormals,Jt=jt.CoverInitializedName,Zt=jt.DebuggerStatement,er=jt.Annotation,tr=jt.DefaultClause,rr=jt.DoWhileStatement,nr=jt.EmptyStatement,ir=jt.ExportDeclaration,sr=jt.ExportDefault,ar=jt.ExportSpecifier,or=jt.ExportSpecifierSet,cr=jt.ExportStar,ur=jt.ExpressionStatement,lr=jt.Finally,pr=jt.ForInStatement,fr=jt.ForOfStatement,hr=jt.ForOnStatement,mr=jt.ForStatement,dr=jt.FormalParameter,gr=jt.FormalParameterList,yr=jt.FunctionBody,_r=jt.FunctionDeclaration,Sr=jt.FunctionExpression,vr=jt.FunctionType,br=jt.GeneratorComprehension,Tr=jt.GetAccessor,jr=jt.IdentifierExpression,Er=jt.IfStatement,Or=jt.ImportDeclaration,Ar=jt.ImportSpecifier,Rr=jt.ImportSpecifierSet,xr=jt.ImportedBinding,wr=jt.IndexSignature,Cr=jt.InterfaceDeclaration,Pr=jt.LabelledStatement,Lr=jt.LiteralExpression,Ir=jt.LiteralPropertyName,Nr=jt.MemberExpression,Mr=jt.MemberLookupExpression,kr=jt.MethodSignature,Fr=jt.Module,$r=jt.ModuleDeclaration,Br=jt.ModuleSpecifier,Dr=jt.NamedExport,Vr=jt.NewExpression,Gr=jt.ObjectLiteralExpression,Ur=jt.ObjectPattern,zr=jt.ObjectPatternField,Hr=jt.ObjectType,Yr=jt.ParenExpression,Xr=jt.PostfixExpression,Wr=jt.PredefinedType,Qr=jt.PropertyMethodAssignment,Kr=jt.PropertyNameAssignment,qr=jt.PropertyNameShorthand,Jr=jt.PropertySignature,Zr=jt.PropertyVariableDeclaration,en=jt.RestParameter,tn=jt.ReturnStatement,rn=jt.Script,nn=jt.SetAccessor,sn=jt.SpreadExpression,an=jt.SpreadPatternElement,on=jt.SuperExpression,cn=jt.SwitchStatement,un=jt.SyntaxErrorTree,ln=jt.TemplateLiteralExpression,pn=jt.TemplateLiteralPortion,fn=jt.TemplateSubstitution,hn=jt.ThisExpression,mn=jt.ThrowStatement,dn=jt.TryStatement,gn=jt.TypeArguments,yn=jt.TypeName,_n=jt.TypeParameter,Sn=jt.TypeParameters,vn=jt.TypeReference,bn=jt.UnaryExpression,Tn=jt.UnionType,jn=jt.VariableDeclaration,En=jt.VariableDeclarationList,On=jt.VariableStatement,An=jt.WhileStatement,Rn=jt.WithStatement,xn=jt.YieldExpression,wn={NO_IN:"NO_IN",NORMAL:"NORMAL"},Cn={REQUIRED:"REQUIRED",OPTIONAL:"OPTIONAL"},Pn={ALLOWED:"ALLOWED",REQUIRED:"REQUIRED"},Ln=function(){$traceurRuntime.superConstructor(In).call(this),this.errorToken=null},In=Ln
$traceurRuntime.createClass(Ln,{visitCoverInitializedName:function(e){this.errorToken=e.equalToken,this.found=!0}},{},t)
var Nn=1,Mn=2,kn=4,Fn=8,$n=16,Bn=32,Dn=64,Vn=128,Gn=$n|Dn|Vn|Bn,Un=function(e,t){this.outer=e,this.kind=t}
$traceurRuntime.createClass(Un,{isTopMost:function(){return this.kind&(Nn|Mn)},isMethod:function(){return this.kind&$n},isDerivedConstructor:function(){return this.kind&Bn},isArrowFunction:function(){return this.kind&Fn},isGenerator:function(){return this.kind&Dn},isAsyncFunction:function(){return this.kind&Vn},isAsyncGenerator:function(){return this.kind&(Vn|Dn)}},{})
var zn=function(e){var t=void 0!==arguments[1]?arguments[1]:new R,r=void 0!==arguments[2]?arguments[2]:new d
this.errorReporter_=t,this.scanner_=new x(t,e,this,r),this.options_=r,this.coverInitializedNameCount_=0,this.strictMode_=!1,this.annotations_=[],this.functionState_=null}
return $traceurRuntime.createClass(zn,{get allowYield_(){return this.functionState_.isGenerator()},get allowAwait_(){return this.functionState_.isAsyncFunction()},get allowForOn_(){return this.functionState_.isAsyncGenerator()},parseScript:function(){this.strictMode_=!1
var e=this.getTreeStartLocation_(),t=this.pushFunctionState_(Nn),r=this.parseStatementList_(!0)
return this.eat_(ce),this.popFunctionState_(t),new rn(this.getTreeLocation_(e),r)},pushFunctionState_:function(e){return this.functionState_=new Un(this.functionState_,e)},popFunctionState_:function(e){if(e!=this.functionState_)throw Error("Internal error")
this.functionState_=this.functionState_.outer},parseStatementList_:function(e){for(var t,r=[];(t=this.peekType_())!==Q&&t!==ce;){var n=this.parseStatementListItem_(t)
e&&(n.isDirectivePrologue()?n.isUseStrictDirective()&&(this.strictMode_=!0,e=!1):e=!1),r.push(n)}return r},parseStatementListItem_:function(e){return this.parseStatementWithType_(e)},parseModule:function(){var e=this.getTreeStartLocation_(),t=this.pushFunctionState_(Mn),r=this.parseModuleItemList_()
return this.eat_(ce),this.popFunctionState_(t),new Fr(this.getTreeLocation_(e),r,null)},parseModuleItemList_:function(){this.strictMode_=!0
for(var e,t=[];(e=this.peekType_())!==ce;){var r=this.parseModuleItem_(e)
t.push(r)}return t},parseModuleItem_:function(e){switch(e){case je:return this.parseImportDeclaration_()
case he:return this.parseExportDeclaration_()
case D:if(this.options_.annotations)return this.parseAnnotatedDeclarations_(!0)}return this.parseStatementListItem_(e)},parseModuleSpecifier_:function(){var e=this.getTreeStartLocation_(),t=this.eat_(at)
return new Br(this.getTreeLocation_(e),t)},parseImportDeclaration_:function(){var e=this.getTreeStartLocation_()
if(this.eat_(je),this.peek_(nt)){this.eat_(nt),this.eatId_(y)
var t=this.parseImportedBinding_()
this.eatId_(T)
var r=this.parseModuleSpecifier_()
return this.eatPossibleImplicitSemiColon_(),new $r(this.getTreeLocation_(e),t,r)}var n=null
this.peekImportClause_(this.peekType_())&&(n=this.parseImportClause_(),this.eatId_(T))
var i=this.parseModuleSpecifier_()
return this.eatPossibleImplicitSemiColon_(),new Or(this.getTreeLocation_(e),n,i)},peekImportClause_:function(e){return e===Be||this.peekBindingIdentifier_(e)},parseImportClause_:function(){var e=this.getTreeStartLocation_()
if(this.eatIf_(Be)){for(var t=[];!this.peek_(Q)&&!this.isAtEnd()&&(t.push(this.parseImportSpecifier_()),this.eatIf_(Z)););return this.eat_(Q),new Rr(this.getTreeLocation_(e),t)}return this.parseImportedBinding_()},parseImportedBinding_:function(){var e=this.getTreeStartLocation_(),t=this.parseBindingIdentifier_()
return new xr(this.getTreeLocation_(e),t)},parseImportSpecifier_:function(){var e,t=this.getTreeStartLocation_(),r=this.peekToken_(),n=r.isKeyword(),i=this.eatIdName_()
return n||this.peekPredefinedString_(y)?(this.eatId_(y),e=this.parseImportedBinding_()):(e=new xr(i.location,new Nt(i.location,i)),i=null),new Ar(this.getTreeLocation_(t),e,i)},parseExportDeclaration_:function(){var e=this.getTreeStartLocation_()
this.eat_(he)
var t,r=this.popAnnotations_(),n=this.peekType_()
switch(n){case ee:case we:if(!this.options_.blockBinding)return this.parseUnexpectedToken_(n)
case _t:t=this.parseVariableStatement_()
break
case _e:t=this.parseFunctionDeclaration_()
break
case X:t=this.parseClassDeclaration_()
break
case ne:t=this.parseExportDefault_()
break
case Be:case nt:t=this.parseNamedExport_()
break
case ve:if(this.options_.asyncFunctions&&this.peekPredefinedString_(_)){var i=this.eatId_()
t=this.parseAsyncFunctionDeclaration_(i)
break}default:return this.parseUnexpectedToken_(n)}return new ir(this.getTreeLocation_(e),t,r)},parseExportDefault_:function(){var e=this.getTreeStartLocation_()
this.eat_(ne)
var t
switch(this.peekType_()){case _e:var r=this.parseFunctionExpression_()
r.name&&(r=new _r(r.location,r.name,r.functionKind,r.parameterList,r.typeAnnotation,r.annotations,r.body)),t=r
break
case X:if(this.options_.classes){var n=this.parseClassExpression_()
n.name&&(n=new Vt(n.location,n.name,n.superClass,n.elements,n.annotations)),t=n
break}default:t=this.parseAssignmentExpression_(),this.eatPossibleImplicitSemiColon_()}return new sr(this.getTreeLocation_(e),t)},parseNamedExport_:function(){var e,t=this.getTreeStartLocation_(),r=null
return this.peek_(Be)?(e=this.parseExportSpecifierSet_(),this.peekPredefinedString_(T)?(this.eatId_(T),r=this.parseModuleSpecifier_()):this.validateExportSpecifierSet_(e)):(this.eat_(nt),e=new cr(this.getTreeLocation_(t)),this.eatId_(T),r=this.parseModuleSpecifier_()),this.eatPossibleImplicitSemiColon_(),new Dr(this.getTreeLocation_(t),r,e)},parseExportSpecifierSet_:function(){var e=this.getTreeStartLocation_()
this.eat_(Be)
for(var t=[this.parseExportSpecifier_()];this.eatIf_(Z)&&!this.peek_(Q);)t.push(this.parseExportSpecifier_())
return this.eat_(Q),new or(this.getTreeLocation_(e),t)},parseExportSpecifier_:function(){var e=this.getTreeStartLocation_(),t=this.eatIdName_(),r=null
return this.peekPredefinedString_(y)&&(this.eatId_(),r=this.eatIdName_()),new ar(this.getTreeLocation_(e),t,r)},validateExportSpecifierSet_:function(e){for(var t=0;t<e.specifiers.length;t++){var r=e.specifiers[t]
N(r.lhs.value)&&this.reportError_(r.lhs.location,"Unexpected token "+r.lhs.value)}},peekId_:function(e){return e===ve?!0:this.strictMode_?!1:this.peekToken_().isStrictKeyword()},peekIdName_:function(e){return e.type===ve||e.isKeyword()},parseClassShared_:function(e){var t=this.getTreeStartLocation_(),r=this.strictMode_
this.strictMode_=!0,this.eat_(X)
var n=null,i=null,s=[];(e===Vt||!this.peek_(me)&&!this.peek_(Be))&&(n=this.parseBindingIdentifier_(),this.options_.types&&(i=this.parseTypeParametersOpt_()),s=this.popAnnotations_())
var a=null
this.eatIf_(me)&&(a=this.parseLeftHandSideExpression_()),this.eat_(Be)
var o=this.parseClassElements_(a)
return this.eat_(Q),this.strictMode_=r,new e(this.getTreeLocation_(t),n,a,o,s,i)},parseClassDeclaration_:function(){return this.parseClassShared_(Vt)},parseClassExpression_:function(){return this.parseClassShared_(Gt)},parseClassElements_:function(e){for(var t=[];;){var r=this.peekType_()
if(r===et)this.nextToken_()
else{if(!this.peekClassElement_(this.peekType_()))break
t.push(this.parseClassElement_(e))}}return t},peekClassElement_:function(e){return this.peekPropertyName_(e)||e===nt&&this.options_.generators||e===D&&this.options_.annotations},parsePropertyName_:function(){return this.peek_(Ve)?this.parseComputedPropertyName_():this.parseLiteralPropertyName_()},parseLiteralPropertyName_:function(){var e=this.getTreeStartLocation_(),t=this.nextToken_()
return new Ir(this.getTreeLocation_(e),t)},parseComputedPropertyName_:function(){var e=this.getTreeStartLocation_()
this.eat_(Ve)
var t=this.parseAssignmentExpression_()
return this.eat_(q),new Yt(this.getTreeLocation_(e),t)},parseStatement:function(){var e=this.pushFunctionState_(Gn),t=this.parseModuleItem_(this.peekType_())
return this.popFunctionState_(e),t},parseStatements:function(){var e=this.pushFunctionState_(Gn),t=this.parseModuleItemList_()
return this.popFunctionState_(e),t},parseStatement_:function(){return this.parseStatementWithType_(this.peekType_())},parseStatementWithType_:function(e){switch(e){case Je:return this.parseReturnStatement_()
case ee:case we:if(!this.options_.blockBinding)break
case _t:return this.parseVariableStatement_()
case be:return this.parseIfStatement_()
case ye:return this.parseForStatement_()
case U:return this.parseBreakStatement_()
case ct:return this.parseSwitchStatement_()
case ft:return this.parseThrowStatement_()
case vt:return this.parseWhileStatement_()
case _e:return this.parseFunctionDeclaration_()
case D:if(this.options_.annotations)return this.parseAnnotatedDeclarations_(!1)
break
case X:if(this.options_.classes)return this.parseClassDeclaration_()
break
case te:return this.parseContinueStatement_()
case re:return this.parseDebuggerStatement_()
case se:return this.parseDoWhileStatement_()
case Be:return this.parseBlock_()
case et:return this.parseEmptyStatement_()
case dt:return this.parseTryStatement_()
case bt:return this.parseWithStatement_()
case Ae:if(this.options_.types)return this.parseInterfaceDeclaration_()}return this.parseFallThroughStatement_()},parseFunctionDeclaration_:function(){return this.parseFunction_(_r)},parseFunctionExpression_:function(){return this.parseFunction_(Sr)},parseAsyncFunctionDeclaration_:function(e){return this.parseAsyncFunction_(e,_r)},parseAsyncFunctionExpression_:function(e){return this.parseAsyncFunction_(e,Sr)},parseAsyncFunction_:function(e,t){var n=e.location.start
this.eat_(_e)
var i=kn|Vn
this.options_.asyncGenerators&&this.peek_(nt)&&(i|=Dn,this.eat_(nt),e=new r(e.location,S))
var s=this.pushFunctionState_(i),a=this.parseFunction2_(n,e,t)
return this.popFunctionState_(s),a},parseFunction_:function(e){var t=this.getTreeStartLocation_()
this.eat_(_e)
var r=null,n=kn
this.options_.generators&&this.peek_(nt)&&(r=this.eat_(nt),n|=Dn)
var i=this.pushFunctionState_(n),s=this.parseFunction2_(t,r,e)
return this.popFunctionState_(i),s},parseFunction2_:function(e,t,r){var n=null,i=[];(r===_r||this.peekBindingIdentifier_(this.peekType_()))&&(n=this.parseBindingIdentifier_(),i=this.popAnnotations_()),this.eat_(De)
var s=this.parseFormalParameters_()
this.eat_(K)
var a=this.parseTypeAnnotationOpt_(),o=this.parseFunctionBody_(s)
return new r(this.getTreeLocation_(e),n,t,s,a,i,o)},peekRest_:function(e){return e===ae&&this.options_.restParameters},parseFormalParameters_:function(){var e=this.getTreeStartLocation_(),t=[]
this.pushAnnotations_()
var r=this.peekType_()
if(this.peekRest_(r))t.push(this.parseFormalRestParameter_())
else for(this.peekFormalParameter_(this.peekType_())&&t.push(this.parseFormalParameter_());this.eatIf_(Z);){if(this.pushAnnotations_(),this.peekRest_(this.peekType_())){t.push(this.parseFormalRestParameter_())
break}t.push(this.parseFormalParameter_())}return new gr(this.getTreeLocation_(e),t)},peekFormalParameter_:function(e){return this.peekBindingElement_(e)},parseFormalParameter_:function(){var e=arguments[0],t=this.getTreeStartLocation_(),r=this.parseBindingElementBinding_(),n=this.parseTypeAnnotationOpt_(),i=this.parseBindingElementInitializer_(e)
return new dr(this.getTreeLocation_(t),new It(this.getTreeLocation_(t),r,i),n,this.popAnnotations_())},parseFormalRestParameter_:function(){var e=this.getTreeStartLocation_(),t=this.parseRestParameter_(),r=this.parseTypeAnnotationOpt_()
return new dr(this.getTreeLocation_(e),t,r,this.popAnnotations_())},parseRestParameter_:function(){var e=this.getTreeStartLocation_()
this.eat_(ae)
var t=this.parseBindingIdentifier_(),r=this.parseTypeAnnotationOpt_()
return new en(this.getTreeLocation_(e),t,r)},parseFunctionBody_:function(e){var t=this.getTreeStartLocation_()
this.eat_(Be)
var r=this.strictMode_,n=this.parseStatementList_(!r)
return!r&&this.strictMode_&&e&&C.visit(e,this.errorReporter_),this.strictMode_=r,this.eat_(Q),new yr(this.getTreeLocation_(t),n)},parseSpreadExpression_:function(){if(!this.options_.spread)return this.parseUnexpectedToken_(ae)
var e=this.getTreeStartLocation_()
this.eat_(ae)
var t=this.parseAssignmentExpression_()
return new sn(this.getTreeLocation_(e),t)},parseBlock_:function(){var e=this.getTreeStartLocation_()
this.eat_(Be)
var t=this.parseStatementList_(!1)
return this.eat_(Q),new Mt(this.getTreeLocation_(e),t)},parseVariableStatement_:function(){var e=this.getTreeStartLocation_(),t=this.parseVariableDeclarationList_()
return this.checkInitializers_(t),this.eatPossibleImplicitSemiColon_(),new On(this.getTreeLocation_(e),t)},parseVariableDeclarationList_:function(){var e=void 0!==arguments[0]?arguments[0]:wn.NORMAL,t=void 0!==arguments[1]?arguments[1]:Cn.REQUIRED,r=this.peekType_()
switch(r){case ee:case we:case _t:this.nextToken_()
break
default:throw Error("unreachable")}var n=this.getTreeStartLocation_(),i=[]
for(i.push(this.parseVariableDeclaration_(r,e,t));this.eatIf_(Z);)i.push(this.parseVariableDeclaration_(r,e,t))
return new En(this.getTreeLocation_(n),r,i)},parseVariableDeclaration_:function(e,t){var r,n,i=void 0!==arguments[2]?arguments[2]:Cn.REQUIRED,s=i!==Cn.OPTIONAL,a=this.getTreeStartLocation_()
this.peekPattern_(this.peekType_())?(r=this.parseBindingPattern_(),n=null):(r=this.parseBindingIdentifier_(),n=this.parseTypeAnnotationOpt_())
var o=null
return this.peek_(ue)?o=this.parseInitializer_(t):r.isPattern()&&s&&this.reportError_("destructuring must have an initializer"),new jn(this.getTreeLocation_(a),r,n,o)},parseInitializer_:function(e){return this.eat_(ue),this.parseAssignmentExpression_(e)},parseInitializerOpt_:function(e){return this.eatIf_(ue)?this.parseAssignmentExpression_(e):null},parseEmptyStatement_:function(){var e=this.getTreeStartLocation_()
return this.eat_(et),new nr(this.getTreeLocation_(e))},parseFallThroughStatement_:function(){var e,t=this.getTreeStartLocation_()
if(this.options_.asyncFunctions&&this.peekPredefinedString_(_)&&this.peek_(_e,1)){var r=this.eatId_(),n=this.peekTokenNoLineTerminator_()
if(null!==n)return this.parseAsyncFunctionDeclaration_(r)
e=new jr(this.getTreeLocation_(t),r)}else e=this.parseExpression_()
if(e.type===l&&this.eatIf_(J)){var i=e.identifierToken,s=this.parseStatement_()
return new Pr(this.getTreeLocation_(t),i,s)}return this.eatPossibleImplicitSemiColon_(),new ur(this.getTreeLocation_(t),e)},parseIfStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(be),this.eat_(De)
var t=this.parseExpression_()
this.eat_(K)
var r=this.parseStatement_(),n=null
return this.eatIf_(oe)&&(n=this.parseStatement_()),new Er(this.getTreeLocation_(e),t,r,n)},parseDoWhileStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(se)
var t=this.parseStatement_()
this.eat_(vt),this.eat_(De)
var r=this.parseExpression_()
return this.eat_(K),this.eatPossibleImplicitSemiColon_(),new rr(this.getTreeLocation_(e),t,r)},parseWhileStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(vt),this.eat_(De)
var t=this.parseExpression_()
this.eat_(K)
var r=this.parseStatement_()
return new An(this.getTreeLocation_(e),t,r)},parseForStatement_:function(){var t=this.getTreeStartLocation_()
this.eat_(ye),this.eat_(De)
var r=this.peekType_()
if(this.peekVariableDeclarationList_(r)){var n=this.parseVariableDeclarationList_(wn.NO_IN,Cn.OPTIONAL),i=n.declarations
return i.length>1||e(i)?this.parseForStatement2_(t,n):(r=this.peekType_(),r===Ee?this.parseForInStatement_(t,n):this.peekOf_()?this.parseForOfStatement_(t,n):this.allowForOn_&&this.peekOn_()?this.parseForOnStatement_(t,n):(this.checkInitializers_(n),this.parseForStatement2_(t,n)))}if(r===et)return this.parseForStatement2_(t,null)
var s=this.coverInitializedNameCount_,a=this.parseExpressionAllowPattern_(wn.NO_IN)
return r=this.peekType_(),a.isLeftHandSideExpression()&&(r===Ee||this.peekOf_()||this.allowForOn_&&this.peekOn_())?(a=this.transformLeftHandSideExpression_(a),this.peekOf_()?this.parseForOfStatement_(t,a):this.allowForOn_&&this.peekOn_()?this.parseForOnStatement_(t,a):this.parseForInStatement_(t,a)):(this.ensureNoCoverInitializedNames_(a,s),this.parseForStatement2_(t,a))},peekOf_:function(){return this.options_.forOf&&this.peekPredefinedString_(E)},peekOn_:function(){return this.options_.forOn&&this.peekPredefinedString_(O)},parseForOfStatement_:function(e,t){this.eatId_()
var r=this.parseExpression_()
this.eat_(K)
var n=this.parseStatement_()
return new fr(this.getTreeLocation_(e),t,r,n)},parseForOnStatement_:function(e,t){this.eatId_()
var r=this.parseExpression_()
this.eat_(K)
var n=this.parseStatement_()
return new hr(this.getTreeLocation_(e),t,r,n)},checkInitializers_:function(e){if(this.options_.blockBinding&&e.declarationType===ee)for(var t=e.declarationType,r=0;r<e.declarations.length&&this.checkInitializer_(t,e.declarations[r]);r++);},checkInitializer_:function(e,t){return this.options_.blockBinding&&e===ee&&null===t.initializer?(this.reportError_("const variables must have an initializer"),!1):!0},peekVariableDeclarationList_:function(e){switch(e){case _t:return!0
case ee:case we:return this.options_.blockBinding
default:return!1}},parseForStatement2_:function(e,t){this.eat_(et)
var r=null
this.peek_(et)||(r=this.parseExpression_()),this.eat_(et)
var n=null
this.peek_(K)||(n=this.parseExpression_()),this.eat_(K)
var i=this.parseStatement_()
return new mr(this.getTreeLocation_(e),t,r,n,i)},parseForInStatement_:function(e,t){this.eat_(Ee)
var r=this.parseExpression_()
this.eat_(K)
var n=this.parseStatement_()
return new pr(this.getTreeLocation_(e),t,r,n)},parseContinueStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(te)
var t=null
return this.peekImplicitSemiColon_(this.peekType_())||(t=this.eatIdOpt_()),this.eatPossibleImplicitSemiColon_(),new Kt(this.getTreeLocation_(e),t)},parseBreakStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(U)
var t=null
return this.peekImplicitSemiColon_(this.peekType_())||(t=this.eatIdOpt_()),this.eatPossibleImplicitSemiColon_(),new kt(this.getTreeLocation_(e),t)},parseReturnStatement_:function(){var e=this.getTreeStartLocation_()
this.functionState_.isTopMost()&&this.reportError_("Illegal return statement"),this.eat_(Je)
var t=null
return this.peekImplicitSemiColon_(this.peekType_())||(t=this.parseExpression_()),this.eatPossibleImplicitSemiColon_(),new tn(this.getTreeLocation_(e),t)},parseYieldExpression_:function(){var e=this.getTreeStartLocation_()
this.eat_(Tt)
var t=null,r=!1
return this.peekImplicitSemiColon_(this.peekType_())||(r=this.eatIf_(nt),t=this.parseAssignmentExpression_()),new xn(this.getTreeLocation_(e),t,r)},parseWithStatement_:function(){this.strictMode_&&this.reportError_("Strict mode code may not include a with statement")
var e=this.getTreeStartLocation_()
this.eat_(bt),this.eat_(De)
var t=this.parseExpression_()
this.eat_(K)
var r=this.parseStatement_()
return new Rn(this.getTreeLocation_(e),t,r)},parseSwitchStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(ct),this.eat_(De)
var t=this.parseExpression_()
this.eat_(K),this.eat_(Be)
var r=this.parseCaseClauses_()
return this.eat_(Q),new cn(this.getTreeLocation_(e),t,r)},parseCaseClauses_:function(){for(var e=!1,t=[];;){var r=this.getTreeStartLocation_()
switch(this.peekType_()){case H:this.nextToken_()
var n=this.parseExpression_()
this.eat_(J)
var i=this.parseCaseStatementsOpt_()
t.push(new Bt(this.getTreeLocation_(r),n,i))
break
case ne:e?this.reportError_("Switch statements may have at most one default clause"):e=!0,this.nextToken_(),this.eat_(J),t.push(new tr(this.getTreeLocation_(r),this.parseCaseStatementsOpt_()))
break
default:return t}}},parseCaseStatementsOpt_:function(){for(var e,t=[];;){switch(e=this.peekType_()){case H:case ne:case Q:case ce:return t}t.push(this.parseStatementWithType_(e))}},parseThrowStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(ft)
var t=null
return this.peekImplicitSemiColon_(this.peekType_())||(t=this.parseExpression_()),this.eatPossibleImplicitSemiColon_(),new mn(this.getTreeLocation_(e),t)},parseTryStatement_:function(){var e=this.getTreeStartLocation_()
this.eat_(dt)
var t=this.parseBlock_(),r=null
this.peek_(Y)&&(r=this.parseCatch_())
var n=null
return this.peek_(ge)&&(n=this.parseFinallyBlock_()),null===r&&null===n&&this.reportError_("'catch' or 'finally' expected."),new dn(this.getTreeLocation_(e),t,r,n)},parseCatch_:function(){var e,t=this.getTreeStartLocation_()
this.eat_(Y),this.eat_(De)
var r
r=this.peekPattern_(this.peekType_())?this.parseBindingPattern_():this.parseBindingIdentifier_(),this.eat_(K)
var n=this.parseBlock_()
return e=new Dt(this.getTreeLocation_(t),r,n)},parseFinallyBlock_:function(){var e=this.getTreeStartLocation_()
this.eat_(ge)
var t=this.parseBlock_()
return new lr(this.getTreeLocation_(e),t)},parseDebuggerStatement_:function(){var e=this.getTreeStartLocation_()
return this.eat_(re),this.eatPossibleImplicitSemiColon_(),new Zt(this.getTreeLocation_(e))},parsePrimaryExpression_:function(){switch(this.peekType_()){case X:return this.options_.classes?this.parseClassExpression_():this.parseSyntaxError_("Unexpected reserved word")
case pt:return this.parseThisExpression_()
case ve:var e=this.parseIdentifierExpression_()
if(this.options_.asyncFunctions&&e.identifierToken.value===_){var t=this.peekTokenNoLineTerminator_()
if(t&&t.type===_e){var r=e.identifierToken
return this.parseAsyncFunctionExpression_(r)}}return e
case Fe:case at:case mt:case de:case ke:return this.parseLiteralExpression_()
case Ve:return this.parseArrayLiteral_()
case Be:return this.parseObjectLiteral_()
case De:return this.parsePrimaryExpressionStartingWithParen_()
case tt:case rt:return this.parseRegularExpressionLiteral_()
case Ie:case ut:return this.parseTemplateLiteral_(null)
case Te:case Ae:case Ue:case We:case Qe:case Ke:case st:case Tt:if(!this.strictMode_)return this.parseIdentifierExpression_()
this.reportReservedIdentifier_(this.nextToken_())
case ce:return this.parseSyntaxError_("Unexpected end of input")
default:return this.parseUnexpectedToken_(this.peekToken_())}},parseSuperExpression_:function(e){for(var t=this.getTreeStartLocation_(),r=this.functionState_;r&&r.isArrowFunction();)r=r.outer
if(!r||!r.isMethod())return this.parseSyntaxError_("super is only allowed in methods")
this.eat_(ot)
var n=new on(this.getTreeLocation_(t)),i=this.peekType_()
if(e)return i===Ve?this.parseMemberLookupExpression_(t,n):this.parseMemberExpression_(t,n)
switch(i){case Ve:return this.parseMemberLookupExpression_(t,n)
case He:return this.parseMemberExpression_(t,n)
case De:var s=this.parseCallExpression_(t,n)
return r.isDerivedConstructor()||this.errorReporter_.reportError(t,"super call is only allowed in derived constructor"),s}return this.parseUnexpectedToken_(i)},parseThisExpression_:function(){var e=this.getTreeStartLocation_()
return this.eat_(pt),new hn(this.getTreeLocation_(e))},peekBindingIdentifier_:function(e){return this.peekId_(e)},parseBindingIdentifier_:function(){var e=this.getTreeStartLocation_(),t=this.eatId_()
return new Nt(this.getTreeLocation_(e),t)},parseIdentifierExpression_:function(){var e=this.getTreeStartLocation_(),t=this.eatId_()
return new jr(this.getTreeLocation_(e),t)},parseIdentifierNameExpression_:function(){var e=this.getTreeStartLocation_(),t=this.eatIdName_()
return new jr(this.getTreeLocation_(e),t)},parseLiteralExpression_:function(){var e=this.getTreeStartLocation_(),t=this.nextLiteralToken_()
return new Lr(this.getTreeLocation_(e),t)},nextLiteralToken_:function(){return this.nextToken_()},parseRegularExpressionLiteral_:function(){var e=this.getTreeStartLocation_(),t=this.nextRegularExpressionLiteralToken_()
return new Lr(this.getTreeLocation_(e),t)},peekSpread_:function(e){return e===ae&&this.options_.spread},parseArrayLiteral_:function(){var e,t=this.getTreeStartLocation_(),r=[]
this.eat_(Ve)
var n=this.peekType_()
if(n===ye&&this.options_.arrayComprehension)return this.parseArrayComprehension_(t)
for(;;){if(n=this.peekType_(),n===Z)e=null
else if(this.peekSpread_(n))e=this.parseSpreadExpression_()
else{if(!this.peekAssignmentExpression_(n))break
e=this.parseAssignmentExpression_()}r.push(e),n=this.peekType_(),n!==q&&this.eat_(Z)}return this.eat_(q),new At(this.getTreeLocation_(t),r)},parseArrayComprehension_:function(e){var t=this.parseComprehensionList_(),r=this.parseAssignmentExpression_()
return this.eat_(q),new Ot(this.getTreeLocation_(e),t,r)},parseComprehensionList_:function(){for(var e=[this.parseComprehensionFor_()];;){var t=this.peekType_()
switch(t){case ye:e.push(this.parseComprehensionFor_())
break
case be:e.push(this.parseComprehensionIf_())
break
default:return e}}},parseComprehensionFor_:function(){var e=this.getTreeStartLocation_()
this.eat_(ye),this.eat_(De)
var t=this.parseForBinding_()
this.eatId_(E)
var r=this.parseExpression_()
return this.eat_(K),new zt(this.getTreeLocation_(e),t,r)},parseComprehensionIf_:function(){var e=this.getTreeStartLocation_()
this.eat_(be),this.eat_(De)
var t=this.parseExpression_()
return this.eat_(K),new Ht(this.getTreeLocation_(e),t)},parseObjectLiteral_:function(){var e=this.getTreeStartLocation_(),t=[]
for(this.eat_(Be);this.peekPropertyDefinition_(this.peekType_());){var r=this.parsePropertyDefinition_()
if(t.push(r),!this.eatIf_(Z))break}return this.eat_(Q),new Gr(this.getTreeLocation_(e),t)},parsePropertyDefinition:function(){var e=this.pushFunctionState_(Nn),t=this.parsePropertyDefinition_()
return this.popFunctionState_(e),t},parsePropertyDefinition_:function(){var e=this.getTreeStartLocation_(),t=null,n=!1
if(this.options_.generators&&this.options_.propertyMethods&&this.peek_(nt)){var i=this.pushFunctionState_($n|Dn),s=this.parseGeneratorMethod_(e,n,[])
return this.popFunctionState_(i),s}var a=this.peekToken_(),c=this.parsePropertyName_()
if(this.options_.propertyMethods&&this.peek_(De)){var u=this.pushFunctionState_($n),l=this.parseMethod_(e,n,t,c,[])
return this.popFunctionState_(u),l}if(this.eatIf_(J)){var f=this.parseAssignmentExpression_()
return new Kr(this.getTreeLocation_(e),c,f)}var h=this.peekType_()
if(c.type===p){var m=c.literalToken
if(m.value===j&&this.peekPropertyName_(h))return this.parseGetAccessor_(e,n,[])
if(m.value===A&&this.peekPropertyName_(h))return this.parseSetAccessor_(e,n,[])
if(this.options_.asyncFunctions&&m.value===_&&this.peekPropertyName_(h)){var d=m,g=this.parsePropertyName_(),y=this.pushFunctionState_($n|Vn),S=this.parseMethod_(e,n,d,g,[])
return this.popFunctionState_(y),S}if(this.options_.propertyNameShorthand&&m.type===ve||!this.strictMode_&&m.type===Tt){if(this.peek_(ue)){a=this.nextToken_()
var v=this.coverInitializedNameCount_,b=this.parseAssignmentExpression_()
return this.ensureNoCoverInitializedNames_(b,v),this.coverInitializedNameCount_++,new Jt(this.getTreeLocation_(e),m,a,b)}return m.type===Tt&&(m=new r(m.location,Tt)),new qr(this.getTreeLocation_(e),m)}this.strictMode_&&m.isStrictKeyword()&&this.reportReservedIdentifier_(m)}return c.type===o&&(a=this.peekToken_()),this.parseUnexpectedToken_(a)},parseClassElement_:function(e){var t=this.getTreeStartLocation_(),r=this.parseAnnotations_(),n=this.peekType_(),i=!1,s=null
switch(n){case st:var a=this.nextToken_()
switch(n=this.peekType_()){case De:var o=this.getTreeLocation_(t),c=new Ir(o,a),u=this.pushFunctionState_($n),l=this.parseMethod_(t,i,s,c,r)
return this.popFunctionState_(u),l
default:return i=!0,n===nt&&this.options_.generators?this.parseGeneratorMethod_(t,!0,r):this.parseClassElement2_(t,i,r,e)}break
case nt:return this.parseGeneratorMethod_(t,i,r)
default:return this.parseClassElement2_(t,i,r,e)}},parseGeneratorMethod_:function(e,t,r){var n=this.eat_(nt),i=this.parsePropertyName_(),s=this.pushFunctionState_($n|Dn),a=this.parseMethod_(e,t,n,i,r)
return this.popFunctionState_(s),a},parseMethod_:function(e,t,r,n,i){this.eat_(De)
var s=this.parseFormalParameters_()
this.eat_(K)
var a=this.parseTypeAnnotationOpt_(),o=this.parseFunctionBody_(s)
return new Qr(this.getTreeLocation_(e),t,r,n,s,a,i,o,null)},parsePropertyVariableDeclaration_:function(e,t,r,n){var i=this.parseTypeAnnotationOpt_(),s=this.parseInitializerOpt_(wn.NORMAL)
return this.eat_(et),new Zr(this.getTreeLocation_(e),t,r,i,n,s)},parseClassElement2_:function(e,t,r,n){var i=null,s=this.parsePropertyName_(),a=this.peekType_()
if(s.type===p&&s.literalToken.value===j&&this.peekPropertyName_(a))return this.parseGetAccessor_(e,t,r)
if(s.type===p&&s.literalToken.value===A&&this.peekPropertyName_(a))return this.parseSetAccessor_(e,t,r)
if(this.options_.asyncFunctions&&s.type===p&&s.literalToken.value===_&&this.peekPropertyName_(a)){var o=s.literalToken
s=this.parsePropertyName_()
var c=this.pushFunctionState_($n|Vn),u=this.parseMethod_(e,t,o,s,r)
return this.popFunctionState_(c),u}if(!this.options_.memberVariables||a===De){var l=$n,f=n&&!t&&null===i&&s.type===p&&s.literalToken.value===b
f&&(l|=Bn)
var h=this.pushFunctionState_(l),m=this.parseMethod_(e,t,i,s,r)
return this.popFunctionState_(h),f&&M(m,this.errorReporter_),m}return this.parsePropertyVariableDeclaration_(e,t,s,r)},parseGetAccessor_:function(e,t,r){var n=this.parsePropertyName_(),i=this.pushFunctionState_($n)
this.eat_(De),this.eat_(K)
var s=this.parseTypeAnnotationOpt_(),a=this.parseFunctionBody_(null)
return this.popFunctionState_(i),new Tr(this.getTreeLocation_(e),t,n,s,r,a)},parseSetAccessor_:function(e,t,r){var n=this.parsePropertyName_(),i=this.pushFunctionState_($n)
this.eat_(De)
var s=this.parsePropertySetParameterList_()
this.eat_(K)
var a=this.parseFunctionBody_(s)
return this.popFunctionState_(i),new nn(this.getTreeLocation_(e),t,n,s,r,a)},peekPropertyDefinition_:function(e){return this.peekPropertyName_(e)||e===nt&&this.options_.propertyMethods&&this.options_.generators},peekPropertyName_:function(e){switch(e){case ve:case at:case Fe:return!0
case Ve:return this.options_.computedPropertyNames
default:return this.peekToken_().isKeyword()}},peekPredefinedString_:function(e){var t=this.peekToken_()
return t.type===ve&&t.value===e},parsePropertySetParameterList_:function(){var e,t=this.getTreeStartLocation_()
this.pushAnnotations_(),e=this.peekPattern_(this.peekType_())?this.parseBindingPattern_():this.parseBindingIdentifier_()
var r=this.parseTypeAnnotationOpt_(),n=new dr(this.getTreeLocation_(t),new It(this.getTreeLocation_(t),e,null),r,this.popAnnotations_())
return new gr(n.location,[n])},parsePrimaryExpressionStartingWithParen_:function(){var e=this.getTreeStartLocation_()
return this.eat_(De),this.peek_(ye)&&this.options_.generatorComprehension?this.parseGeneratorComprehension_(e):this.parseCoverFormals_(e)},parseSyntaxError_:function(e){var t=this.getTreeStartLocation_()
this.reportError_(e)
var r=this.nextToken_()
return new un(this.getTreeLocation_(t),r,e)},parseUnexpectedToken_:function(e){return this.parseSyntaxError_("Unexpected token "+e)},peekExpression_:function(e){switch(e){case Ie:case ut:return this.options_.templateLiterals
case V:case X:case ie:case de:case _e:case ve:case Ce:case Pe:case Le:case ke:case Fe:case Be:case De:case Ve:case Ye:case Xe:case tt:case rt:case at:case ot:case pt:case ht:case mt:case gt:case St:case Tt:return!0
default:return!1}},parseExpression_:function(){var e=void 0!==arguments[0]?arguments[0]:wn.IN,t=this.coverInitializedNameCount_,r=this.parseExpressionAllowPattern_(e)
return this.ensureNoCoverInitializedNames_(r,t),r},parseExpression:function(){var e=this.pushFunctionState_(Gn),t=this.parseExpression_()
return this.popFunctionState_(e),t},parseExpressionAllowPattern_:function(e){var t=this.getTreeStartLocation_(),r=this.parseAssignmentExpression_(e)
if(this.peek_(Z)){for(var n=[r];this.eatIf_(Z);)n.push(this.parseAssignmentExpression_(e))
return new Ut(this.getTreeLocation_(t),n)}return r},peekAssignmentExpression_:function(e){return this.peekExpression_(e)},parseAssignmentExpression_:function(){var e=void 0!==arguments[0]?arguments[0]:wn.NORMAL
if(this.allowYield_&&this.peek_(Tt))return this.parseYieldExpression_()
var t=this.getTreeStartLocation_(),r=!1
if(this.options_.asyncFunctions&&this.peekPredefinedString_(_)){var n=this.peekToken_(),i=this.peekToken_(1)
r=i.type===De&&n.location.end.line===i.location.start.line}var s=this.parseConditional_(e),o=this.peekType_()
if(this.options_.asyncFunctions&&s.type===l&&s.identifierToken.value===_&&o===ve&&null!==this.peekTokenNoLineTerminator_()){var u=this.parseBindingIdentifier_(),p=s.identifierToken
return this.parseArrowFunction_(t,u,p)}if(o===B&&null!==this.peekTokenNoLineTerminator_()){if(s.type===c||s.type===l)return this.parseArrowFunction_(t,s,null)
if(r&&s.type===a){var f=s.operand.identifierToken
return this.parseArrowFunction_(t,s.args,f)}}if(s=this.coverFormalsToParenExpression_(s),this.peekAssignmentOperator_(o)){o===ue&&(s=this.transformLeftHandSideExpression_(s)),s.isLeftHandSideExpression()||s.isPattern()||this.reportError_("Left hand side of assignment must be new, call, member, function, primary expressions or destructuring pattern")
var h=this.nextToken_(),m=this.parseAssignmentExpression_(e)
return new Lt(this.getTreeLocation_(t),s,h,m)}return s},transformLeftHandSideExpression_:function(e){switch(e.type){case i:case f:return this.scanner_.index=e.location.start.offset,this.parseAssignmentPattern_()}return e},peekAssignmentOperator_:function(e){return I(e)},parseConditional_:function(e){var t=this.getTreeStartLocation_(),r=this.parseLogicalOR_(e)
if(this.eatIf_(qe)){r=this.toPrimaryExpression_(r)
var n=this.parseAssignmentExpression_()
this.eat_(J)
var i=this.parseAssignmentExpression_(e)
return new Xt(this.getTreeLocation_(t),r,n,i)}return r},newBinaryExpression_:function(e,t,r,n){return t=this.toPrimaryExpression_(t),n=this.toPrimaryExpression_(n),new Lt(this.getTreeLocation_(e),t,r,n)},parseLogicalOR_:function(e){for(var t,r=this.getTreeStartLocation_(),n=this.parseLogicalAND_(e);t=this.eatOpt_(Ge);){var i=this.parseLogicalAND_(e)
n=this.newBinaryExpression_(r,n,t,i)}return n},parseLogicalAND_:function(e){for(var t,r=this.getTreeStartLocation_(),n=this.parseBitwiseOR_(e);t=this.eatOpt_($);){var i=this.parseBitwiseOR_(e)
n=this.newBinaryExpression_(r,n,t,i)}return n},parseBitwiseOR_:function(e){for(var t,r=this.getTreeStartLocation_(),n=this.parseBitwiseXOR_(e);t=this.eatOpt_(G);){var i=this.parseBitwiseXOR_(e)
n=this.newBinaryExpression_(r,n,t,i)}return n},parseBitwiseXOR_:function(e){for(var t,r=this.getTreeStartLocation_(),n=this.parseBitwiseAND_(e);t=this.eatOpt_(z);){var i=this.parseBitwiseAND_(e)
n=this.newBinaryExpression_(r,n,t,i)}return n},parseBitwiseAND_:function(e){for(var t,r=this.getTreeStartLocation_(),n=this.parseEquality_(e);t=this.eatOpt_(F);){var i=this.parseEquality_(e)
n=this.newBinaryExpression_(r,n,t,i)}return n},parseEquality_:function(e){for(var t=this.getTreeStartLocation_(),r=this.parseRelational_(e);this.peekEqualityOperator_(this.peekType_());){var n=this.nextToken_(),i=this.parseRelational_(e)
r=this.newBinaryExpression_(t,r,n,i)}return r},peekEqualityOperator_:function(e){switch(e){case le:case Ne:case pe:case Me:return!0}return!1},parseRelational_:function(e){for(var t=this.getTreeStartLocation_(),r=this.parseShiftExpression_();this.peekRelationalOperator_(e);){var n=this.nextToken_(),i=this.parseShiftExpression_()
r=this.newBinaryExpression_(t,r,n,i)}return r},peekRelationalOperator_:function(e){switch(this.peekType_()){case $e:case W:case Se:case xe:case Oe:return!0
case Ee:return e===wn.NORMAL
default:return!1}},parseShiftExpression_:function(){for(var e=this.getTreeStartLocation_(),t=this.parseAdditiveExpression_();this.peekShiftOperator_(this.peekType_());){var r=this.nextToken_(),n=this.parseAdditiveExpression_()
t=this.newBinaryExpression_(e,t,r,n)}return t},peekShiftOperator_:function(e){switch(e){case Re:case Ze:case yt:return!0
default:return!1}},parseAdditiveExpression_:function(){for(var e=this.getTreeStartLocation_(),t=this.parseMultiplicativeExpression_();this.peekAdditiveOperator_(this.peekType_());){var r=this.nextToken_(),n=this.parseMultiplicativeExpression_()
t=this.newBinaryExpression_(e,t,r,n)}return t},peekAdditiveOperator_:function(e){switch(e){case Ye:case Ce:return!0
default:return!1}},parseMultiplicativeExpression_:function(){for(var e=this.getTreeStartLocation_(),t=this.parseExponentiationExpression_();this.peekMultiplicativeOperator_(this.peekType_());){var r=this.nextToken_(),n=this.parseExponentiationExpression_()
t=this.newBinaryExpression_(e,t,r,n)}return t},parseExponentiationExpression_:function(){for(var e=this.getTreeStartLocation_(),t=this.parseUnaryExpression_();this.peekExponentiationExpression_(this.peekType_());){var r=this.nextToken_(),n=this.parseExponentiationExpression_()
t=this.newBinaryExpression_(e,t,r,n)}return t},peekMultiplicativeOperator_:function(e){switch(e){case nt:case tt:case ze:return!0
default:return!1}},peekExponentiationExpression_:function(e){return e===it},parseUnaryExpression_:function(){var e=this.getTreeStartLocation_()
if(this.allowAwait_&&this.peekPredefinedString_(v)){this.eatId_()
var t
return this.allowYield_&&this.peek_(Tt)?t=this.parseYieldExpression_():(t=this.parseUnaryExpression_(),t=this.toPrimaryExpression_(t)),new Pt(this.getTreeLocation_(e),t)}if(this.peekUnaryOperator_(this.peekType_())){var r=this.nextToken_(),n=this.parseUnaryExpression_()
return n=this.toPrimaryExpression_(n),new bn(this.getTreeLocation_(e),r,n)}return this.parsePostfixExpression_()},peekUnaryOperator_:function(e){switch(e){case ie:case St:case gt:case Xe:case Pe:case Ye:case Ce:case ht:case V:return!0
default:return!1}},parsePostfixExpression_:function(){for(var e=this.getTreeStartLocation_(),t=this.parseLeftHandSideExpression_();this.peekPostfixOperator_(this.peekType_());){t=this.toPrimaryExpression_(t)
var r=this.nextToken_()
t=new Xr(this.getTreeLocation_(e),t,r)}return t},peekPostfixOperator_:function(e){switch(e){case Xe:case Pe:var t=this.peekTokenNoLineTerminator_()
return null!==t}return!1},parseLeftHandSideExpression_:function(){var e=this.getTreeStartLocation_(),t=this.parseNewExpression_()
if(!(t instanceof Vr)||null!==t.args)e:for(;;)switch(this.peekType_()){case De:t=this.toPrimaryExpression_(t),t=this.parseCallExpression_(e,t)
break
case Ve:t=this.toPrimaryExpression_(t),t=this.parseMemberLookupExpression_(e,t)
break
case He:t=this.toPrimaryExpression_(t),t=this.parseMemberExpression_(e,t)
break
case Ie:case ut:if(!this.options_.templateLiterals)break e
t=this.toPrimaryExpression_(t),t=this.parseTemplateLiteral_(t)
break
default:break e}return t},parseMemberExpressionNoNew_:function(){var e,t=this.getTreeStartLocation_()
e=this.peekType_()===_e?this.parseFunctionExpression_():this.parsePrimaryExpression_()
e:for(;;)switch(this.peekType_()){case Ve:e=this.toPrimaryExpression_(e),e=this.parseMemberLookupExpression_(t,e)
break
case He:e=this.toPrimaryExpression_(e),e=this.parseMemberExpression_(t,e)
break
case Ie:case ut:if(!this.options_.templateLiterals)break e
e=this.toPrimaryExpression_(e),e=this.parseTemplateLiteral_(e)
break
default:break e}return e},parseMemberExpression_:function(e,t){this.eat_(He)
var r=this.eatIdName_()
return new Nr(this.getTreeLocation_(e),t,r)},parseMemberLookupExpression_:function(e,t){this.eat_(Ve)
var r=this.parseExpression_()
return this.eat_(q),new Mr(this.getTreeLocation_(e),t,r)},parseCallExpression_:function(e,t){var r=this.parseArguments_()
return new Ft(this.getTreeLocation_(e),t,r)},parseNewExpression_:function(){var e,t
switch(this.peekType_()){case Le:t=this.getTreeStartLocation_(),this.eat_(Le),e=this.peek_(ot)?this.parseSuperExpression_(!0):this.toPrimaryExpression_(this.parseNewExpression_())
var r=null
return this.peek_(De)&&(r=this.parseArguments_()),new Vr(this.getTreeLocation_(t),e,r)
case ot:return this.parseSuperExpression_(!1)
default:return this.parseMemberExpressionNoNew_()}},parseArguments_:function(){var e=this.getTreeStartLocation_(),t=[]
if(this.eat_(De),!this.peek_(K))for(t.push(this.parseArgument_());this.eatIf_(Z);)t.push(this.parseArgument_())
return this.eat_(K),new Et(this.getTreeLocation_(e),t)},parseArgument_:function(){return this.peekSpread_(this.peekType_())?this.parseSpreadExpression_():this.parseAssignmentExpression_()},parseArrowFunction_:function(e,t,r){var n,i=Fn
r&&r.value===_&&(i|=Vn)
var a=this.pushFunctionState_(i)
switch(t.type){case l:t=new Nt(t.location,t.identifierToken)
case s:n=new gr(this.getTreeLocation_(e),[new dr(t.location,new It(t.location,t,null),null,[])])
break
case u:n=t
break
default:n=this.toFormalParameters_(e,t,r)}this.eat_(B)
var o=this.parseConciseBody_()
return this.popFunctionState_(a),new wt(this.getTreeLocation_(e),r,n,o)},parseCoverFormals_:function(e){var t=[]
if(!this.peek_(K))do{var r=this.peekType_()
if(this.peekRest_(r)){t.push(this.parseRestParameter_())
break}t.push(this.parseAssignmentExpression_()),!this.eatIf_(Z)}while(!this.peek_(K)&&!this.isAtEnd())
return this.eat_(K),new qt(this.getTreeLocation_(e),t)},ensureNoCoverInitializedNames_:function(e,t){if(t!==this.coverInitializedNameCount_){var r=new Ln
if(r.visitAny(e),r.found){var n=r.errorToken
this.reportError_(n.location,"Unexpected token "+n)}}},toPrimaryExpression_:function(e){return e.type===c?this.coverFormalsToParenExpression_(e):e},validateCoverFormalsAsParenExpression_:function(e){for(var t=0;t<e.expressions.length;t++)if(e.expressions[t].type===h){var r=new L(ae,e.expressions[t].location)
return void this.reportError_(r.location,"Unexpected token "+r)}},coverFormalsToParenExpression_:function(e){if(e.type===c){var t=e.expressions
if(0!==t.length){this.validateCoverFormalsAsParenExpression_(e)
var r
return r=t.length>1?new Ut(t[0].location,t):t[0],new Yr(e.location,r)}var n="Unexpected token )"
this.reportError_(e.location,n)}return e},toFormalParameters_:function(e,t,r){return this.scanner_.index=e.offset,this.parseArrowFormalParameters_(r)},parseArrowFormalParameters_:function(e){e&&this.eat_(ve),this.eat_(De)
var t=this.parseFormalParameters_()
return this.eat_(K),t},peekArrow_:function(e){return e===B&&this.options_.arrowFunctions},parseConciseBody_:function(){return this.peek_(Be)?this.parseFunctionBody_(null):this.parseAssignmentExpression_()},parseGeneratorComprehension_:function(e){var t=this.parseComprehensionList_(),r=this.parseAssignmentExpression_()
return this.eat_(K),new br(this.getTreeLocation_(e),t,r)},parseForBinding_:function(){return this.peekPattern_(this.peekType_())?this.parseBindingPattern_():this.parseBindingIdentifier_()},peekPattern_:function(e){return this.options_.destructuring&&(this.peekObjectPattern_(e)||this.peekArrayPattern_(e))},peekArrayPattern_:function(e){return e===Ve},peekObjectPattern_:function(e){return e===Be},parseBindingPattern_:function(){return this.parsePattern_(!0)},parsePattern_:function(e){return this.peekArrayPattern_(this.peekType_())?this.parseArrayPattern_(e):this.parseObjectPattern_(e)},parseArrayBindingPattern_:function(){return this.parseArrayPattern_(!0)},parsePatternElement_:function(e){return e?this.parseBindingElement_():this.parseAssignmentElement_()},parsePatternRestElement_:function(e){return e?this.parseBindingRestElement_():this.parseAssignmentRestElement_()},parseArrayPattern_:function(e){var t=this.getTreeStartLocation_(),r=[]
this.eat_(Ve)
for(var n;(n=this.peekType_())!==q&&n!==ce;){if(this.parseElisionOpt_(r),this.peekRest_(this.peekType_())){r.push(this.parsePatternRestElement_(e))
break}r.push(this.parsePatternElement_(e)),this.peek_(Z)&&!this.peek_(q,1)&&this.nextToken_()}return this.eat_(q),new Rt(this.getTreeLocation_(t),r)},parseBindingElementList_:function(e){for(this.parseElisionOpt_(e),e.push(this.parseBindingElement_());this.eatIf_(Z);)this.parseElisionOpt_(e),e.push(this.parseBindingElement_())},parseElisionOpt_:function(e){for(;this.eatIf_(Z);)e.push(null)},peekBindingElement_:function(e){return this.peekBindingIdentifier_(e)||this.peekPattern_(e)},parseBindingElement_:function(){var e=this.getTreeStartLocation_(),t=this.parseBindingElementBinding_(),r=this.parseBindingElementInitializer_()
return new It(this.getTreeLocation_(e),t,r)},parseBindingElementBinding_:function(){return this.peekPattern_(this.peekType_())?this.parseBindingPattern_():this.parseBindingIdentifier_()},parseBindingElementInitializer_:function(){var e=void 0!==arguments[0]?arguments[0]:Pn.OPTIONAL
return this.peek_(ue)||e===Pn.REQUIRED?this.parseInitializer_():null},parseBindingRestElement_:function(){var e=this.getTreeStartLocation_()
this.eat_(ae)
var t=this.parseBindingIdentifier_()
return new an(this.getTreeLocation_(e),t)},parseObjectPattern_:function(e){var t=this.getTreeStartLocation_(),r=[]
this.eat_(Be)
for(var n;(n=this.peekType_())!==Q&&n!==ce&&(r.push(this.parsePatternProperty_(e)),this.eatIf_(Z)););return this.eat_(Q),new Ur(this.getTreeLocation_(t),r)},parsePatternProperty_:function(e){var t=this.getTreeStartLocation_(),r=this.parsePropertyName_(),n=r.type!==p||!r.literalToken.isStrictKeyword()&&r.literalToken.type!==ve
if(n||this.peek_(J)){this.eat_(J)
var i=this.parsePatternElement_(e)
return new zr(this.getTreeLocation_(t),r,i)}var s=r.literalToken
if(this.strictMode_&&s.isStrictKeyword()&&this.reportReservedIdentifier_(s),e){var a=new Nt(r.location,s),o=this.parseInitializerOpt_(wn.NORMAL)
return new It(this.getTreeLocation_(t),a,o)}var c=new jr(r.location,s),u=this.parseInitializerOpt_(wn.NORMAL)
return new Ct(this.getTreeLocation_(t),c,u)},parseAssignmentPattern_:function(){return this.parsePattern_(!1)},parseArrayAssignmentPattern_:function(){return this.parseArrayPattern_(!1)},parseAssignmentElement_:function(){var e=this.getTreeStartLocation_(),t=this.parseDestructuringAssignmentTarget_(),r=this.parseInitializerOpt_(wn.NORMAL)
return new Ct(this.getTreeLocation_(e),t,r)},parseDestructuringAssignmentTarget_:function(){switch(this.peekType_()){case Ve:return this.parseArrayAssignmentPattern_()
case Be:return this.parseObjectAssignmentPattern_()}var e=this.parseLeftHandSideExpression_()
return this.coverFormalsToParenExpression_(e)},parseAssignmentRestElement_:function(){var e=this.getTreeStartLocation_()
this.eat_(ae)
var t=this.parseDestructuringAssignmentTarget_()
return new an(this.getTreeLocation_(e),t)},parseObjectAssignmentPattern_:function(){return this.parseObjectPattern_(!1)},parseAssignmentProperty_:function(){return this.parsePatternProperty_(!1)},parseTemplateLiteral_:function(e){if(!this.options_.templateLiterals)return this.parseUnexpectedToken_("`")
var t=e?e.location.start:this.getTreeStartLocation_(),r=this.nextToken_(),n=[new pn(r.location,r)]
if(r.type===Ie)return new ln(this.getTreeLocation_(t),e,n)
var i=this.parseExpression_()
for(n.push(new fn(i.location,i));i.type!==m&&(r=this.nextTemplateLiteralToken_(),r.type!==fe&&r.type!==ce)&&(n.push(new pn(r.location,r)),r.type!==lt);)i=this.parseExpression_(),n.push(new fn(i.location,i))
return new ln(this.getTreeLocation_(t),e,n)},parseTypeAnnotationOpt_:function(){return this.options_.types&&this.eatOpt_(J)?this.parseType_():null},parseType_:function(){switch(this.peekType_()){case Le:return this.parseConstructorType_()
case De:case $e:return this.parseFunctionType_()}var e=this.getTreeStartLocation_(),t=this.parsePrimaryType_()
return this.parseUnionTypeSuffix_(e,t)},parsePrimaryType_:function(){var e,t,r=this.getTreeStartLocation_()
switch(this.peekType_()){case St:t=this.nextToken_(),e=new Wr(this.getTreeLocation_(r),t)
break
case ve:switch(this.peekToken_().value){case"any":case"boolean":case"number":case"string":case"symbol":t=this.nextToken_(),e=new Wr(this.getTreeLocation_(r),t)
break
default:e=this.parseTypeReference_()}break
case gt:e=this.parseTypeQuery_(r)
break
case Be:e=this.parseObjectType_()
break
default:return this.parseUnexpectedToken_(this.peekToken_())}return this.parseArrayTypeSuffix_(r,e)},parseTypeReference_:function(){var e=this.getTreeStartLocation_(),t=this.parseTypeName_()
if(this.peek_($e)){var r=this.parseTypeArguments_()
return new vn(this.getTreeLocation_(e),t,r)}return t},parseUnionTypeSuffix_:function(e,t){if(this.peek_(G)){var r=[t]
for(this.eat_(G);;)if(r.push(this.parsePrimaryType_()),!this.eatIf_(G))break
return new Tn(this.getTreeLocation_(e),r)}return t},parseArrayTypeSuffix_:function(e,t){var r=this.peekTokenNoLineTerminator_()
return r&&r.type===Ve?(this.eat_(Ve),this.eat_(q),t=new xt(this.getTreeLocation_(e),t),this.parseArrayTypeSuffix_(e,t)):t},parseTypeArguments_:function(){var e=this.getTreeStartLocation_()
this.eat_($e)
for(var t=[this.parseType_()];this.peek_(Z);)this.eat_(Z),t.push(this.parseType_())
var r=this.nextCloseAngle_()
return r.type!==W?this.parseUnexpectedToken_(r.type):new gn(this.getTreeLocation_(e),t)},parseConstructorType_:function(){var e=this.getTreeStartLocation_()
this.eat_(Le)
var t=this.parseTypeParametersOpt_()
this.eat_(De)
var r=this.parseFormalParameters_()
this.eat_(K),this.eat_(B)
var n=this.parseType_()
return new Qt(this.getTreeLocation_(e),t,r,n)},parseObjectType_:function(){var e=this.getTreeStartLocation_(),t=[]
this.eat_(Be)
for(var r;this.peekTypeMember_(r=this.peekType_())&&(t.push(this.parseTypeMember_(r)),this.eatIf_(et)););return this.eat_(Q),new Hr(this.getTreeLocation_(e),t)},peekTypeMember_:function(e){switch(e){case Le:case De:case $e:case Ve:case ve:case at:case Fe:return!0
default:return this.peekToken_().isKeyword()}},parseTypeMember_:function(e){switch(e){case Le:return this.parseConstructSignature_()
case De:case $e:return this.parseCallSignature_()
case Ve:return this.parseIndexSignature_()}var t=this.getTreeStartLocation_(),r=this.parseLiteralPropertyName_(),n=this.eatIf_(qe)
if(e=this.peekType_(),e===$e||e===De){var i=this.parseCallSignature_()
return new kr(this.getTreeLocation_(t),r,n,i)}var s=this.parseTypeAnnotationOpt_()
return new Jr(this.getTreeLocation_(t),r,n,s)},parseCallSignature_:function(){var e=this.getTreeStartLocation_(),t=this.parseTypeParametersOpt_()
this.eat_(De)
var r=this.parseFormalParameters_()
this.eat_(K)
var n=this.parseTypeAnnotationOpt_()
return new $t(this.getTreeLocation_(e),t,r,n)},parseConstructSignature_:function(){var e=this.getTreeStartLocation_()
this.eat_(Le)
var t=this.parseTypeParametersOpt_()
this.eat_(De)
var r=this.parseFormalParameters_()
this.eat_(K)
var n=this.parseTypeAnnotationOpt_()
return new Wt(this.getTreeLocation_(e),t,r,n)},parseIndexSignature_:function(){var e=this.getTreeStartLocation_()
this.eat_(Ve)
var t=this.eatId_()
this.eat_(J)
var r,n=this.getTreeStartLocation_()
r=this.eatId_(this.peekPredefinedString_("string")?"string":"number")
var i=new Wr(this.getTreeLocation_(n),r)
this.eat_(q),this.eat_(J)
var s=this.parseType_()
return new wr(this.getTreeLocation_(e),t,i,s)},parseFunctionType_:function(){var e=this.getTreeStartLocation_(),t=this.parseTypeParametersOpt_()
this.eat_(De)
var r=this.parseFormalParameters_()
this.eat_(K),this.eat_(B)
var n=this.parseType_()
return new vr(this.getTreeLocation_(e),t,r,n)},parseTypeQuery_:function(){throw"NYI"},peekTypeParameters_:function(){return this.peek_($e)},parseTypeParametersOpt_:function(){return this.peek_($e)?this.parseTypeParameters_():null},parseTypeParameters_:function(){var e=this.getTreeStartLocation_()
this.eat_($e)
for(var t=[this.parseTypeParameter_()];this.peek_(Z);)this.eat_(Z),t.push(this.parseTypeParameter_())
return this.eat_(W),new Sn(this.getTreeLocation_(e),t)},parseTypeParameter_:function(){var e=this.getTreeStartLocation_(),t=this.eatId_(),r=null
return this.eatIf_(me)&&(r=this.parseType_()),new _n(this.getTreeLocation_(e),t,r)},parseNamedOrPredefinedType_:function(){var e=this.getTreeStartLocation_()
switch(this.peekToken_().value){case"any":case"number":case"boolean":case"string":var t=this.nextToken_()
return new Wr(this.getTreeLocation_(e),t)
default:return this.parseTypeName_()}},parseTypeName_:function(){for(var e=this.getTreeStartLocation_(),t=this.eatId_(),r=new yn(this.getTreeLocation_(e),null,t);this.eatIf_(He);){var n=this.eatIdName_()
r=new yn(this.getTreeLocation_(e),r,n)}return r},parseInterfaceDeclaration_:function(){var e=this.getTreeStartLocation_()
this.eat_(Ae)
var t,r=this.eatId_(),n=this.parseTypeParametersOpt_()
t=this.eatIf_(me)?this.parseInterfaceExtendsClause_():[]
var i=this.parseObjectType_()
return new Cr(this.getTreeLocation_(e),r,n,t,i)},parseInterfaceExtendsClause_:function(){for(var e=[this.parseTypeReference_()];this.eatIf_(Z);)e.push(this.parseTypeReference_())
return e},parseAnnotatedDeclarations_:function(e){this.pushAnnotations_()
var t,r=this.peekType_()
return t=e?this.parseModuleItem_(r):this.parseStatementListItem_(r),this.annotations_.length>0?this.parseSyntaxError_("Unsupported annotated expression"):t},parseAnnotations_:function(){for(var e=[];this.eatIf_(D);)e.push(this.parseAnnotation_())
return e},pushAnnotations_:function(){this.annotations_=this.parseAnnotations_()},popAnnotations_:function(){var e=this.annotations_
return this.annotations_=[],e},parseAnnotation_:function(){var e=this.getTreeStartLocation_(),t=this.parseMemberExpressionNoNew_(),r=null
return this.peek_(De)&&(r=this.parseArguments_()),new er(this.getTreeLocation_(e),t,r)},eatPossibleImplicitSemiColon_:function(){var e=this.peekTokenNoLineTerminator_()
if(e){switch(e.type){case et:return void this.nextToken_()
case ce:case Q:return}this.reportError_("Semi-colon expected")}},peekImplicitSemiColon_:function(){switch(this.peekType_()){case et:case Q:case ce:return!0}var e=this.peekTokenNoLineTerminator_()
return null===e},eatOpt_:function(e){return this.peek_(e)?this.nextToken_():null},eatIdOpt_:function(){return this.peek_(ve)?this.eatId_():null},eatId_:function(){var e=arguments[0],t=this.nextToken_()
if(!t)return e&&this.reportError_(this.peekToken_(),"expected '"+e+"'"),null
if(t.type===ve)return e&&t.value!==e&&this.reportExpectedError_(t,e),t
if(t.isStrictKeyword()){if(!this.strictMode_)return new r(t.location,t.type)
this.reportReservedIdentifier_(t)}else this.reportExpectedError_(t,e||"identifier")
return t},eatIdName_:function(){var e=this.nextToken_()
return e.type!==ve?e.isKeyword()?new r(e.location,e.type):(this.reportExpectedError_(e,"identifier"),null):e},eat_:function(e){var t=this.nextToken_()
return t.type!==e?(this.reportExpectedError_(t,e),null):t},eatIf_:function(e){return this.peek_(e)?(this.nextToken_(),!0):!1},reportExpectedError_:function(e){this.reportError_(e,"Unexpected token "+e)},getTreeStartLocation_:function(){return this.peekToken_().location.start},getTreeEndLocation_:function(){return this.scanner_.lastToken.location.end},getTreeLocation_:function(e){return new w(e,this.getTreeEndLocation_())},handleComment:function(){},nextToken_:function(){return this.scanner_.nextToken()},nextRegularExpressionLiteralToken_:function(){return this.scanner_.nextRegularExpressionLiteralToken()},nextTemplateLiteralToken_:function(){return this.scanner_.nextTemplateLiteralToken()},nextCloseAngle_:function(){return this.scanner_.nextCloseAngle()},isAtEnd:function(){return this.scanner_.isAtEnd()},peek_:function(e,t){return this.peekToken_(t).type===e},peekType_:function(){return this.peekToken_().type},peekToken_:function(e){return this.scanner_.peekToken(e)},peekTokenNoLineTerminator_:function(){return this.scanner_.peekTokenNoLineTerminator()},reportError_:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
if(1===e.length)this.errorReporter_.reportError(this.scanner_.getPosition(),e[0])
else{var r=e[0]
r instanceof L&&(r=r.location),this.errorReporter_.reportError(r.start,e[1])}},reportReservedIdentifier_:function(e){this.reportError_(e,e.type+" is a reserved identifier")}},{}),{get Parser(){return zn}}}),System.registerModule("traceur@0.0.87/src/util/SourcePosition.js",[],function(){"use strict"
var e=function(e,t){this.source=e,this.offset=t,this.line_=-1,this.column_=-1}
return $traceurRuntime.createClass(e,{get line(){return-1===this.line_&&(this.line_=this.source.lineNumberTable.getLine(this.offset)),this.line_},get column(){return-1===this.column_&&(this.column_=this.source.lineNumberTable.getColumn(this.offset)),this.column_},toString:function(){var e=this.source?this.source.name:""
return e+":"+(this.line+1)+":"+(this.column+1)}},{}),{get SourcePosition(){return e}}}),System.registerModule("traceur@0.0.87/src/syntax/LineNumberTable.js",[],function(){"use strict"
function e(e){for(var t=[0],r=1,s=0;s<e.length;s++){var a=e.charCodeAt(s)
n(a)&&(13===a&&10===e.charCodeAt(s+1)&&s++,t[r++]=s+1)}return t[r++]=i,t}var t=System.get("traceur@0.0.87/src/util/SourcePosition.js").SourcePosition,r=System.get("traceur@0.0.87/src/util/SourceRange.js").SourceRange,n=System.get("traceur@0.0.87/src/syntax/Scanner.js").isLineTerminator,i=9007199254740992,s=function(e){this.sourceFile_=e,this.lineStartOffsets_=null,this.lastLine_=0,this.lastOffset_=-1}
return $traceurRuntime.createClass(s,{ensureLineStartOffsets_:function(){this.lineStartOffsets_||(this.lineStartOffsets_=e(this.sourceFile_.contents))},getSourcePosition:function(e){return new t(this.sourceFile_,e)},getLine:function(e){if(e===this.lastOffset_)return this.lastLine_
if(this.ensureLineStartOffsets_(),0>e)return 0
var t
if(e<this.lastOffset_){for(var r=this.lastLine_;r>=0;r--)if(this.lineStartOffsets_[r]<=e){t=r
break}}else for(var n=this.lastLine_;!0;n++)if(this.lineStartOffsets_[n]>e){t=n-1
break}return this.lastLine_=t,this.lastOffset_=e,t},offsetOfLine:function(e){return this.ensureLineStartOffsets_(),this.lineStartOffsets_[e]},getColumn:function(e){var t=this.getLine(e)
return e-this.lineStartOffsets_[t]},getSourceRange:function(e,t){return new r(this.getSourcePosition(e),this.getSourcePosition(t))}},{}),{get LineNumberTable(){return s}}}),System.registerModule("traceur@0.0.87/src/syntax/SourceFile.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/LineNumberTable.js").LineNumberTable,t=function(t,r){this.name=t,this.contents=r,this.lineNumberTable=new e(this)}
return $traceurRuntime.createClass(t,{},{}),{get SourceFile(){return t}}}),System.registerModule("traceur@0.0.87/src/util/CollectingErrorReporter.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/util/ErrorReporter.js").ErrorReporter,t=function(e){$traceurRuntime.superConstructor(r).call(this),this.message=e?e.join("\n")+"":"",this.name=e&&e.length>1?"MultipleErrors":"",this.errors=e},r=t
$traceurRuntime.createClass(t,{},{},Error)
var n=function(){$traceurRuntime.superConstructor(i).call(this),this.errors=[]},i=n
return $traceurRuntime.createClass(n,{reportMessageInternal:function(e,t){e&&(t=e+": "+t),this.errors.push(t)},errorsAsString:function(){return this.toError().message},toError:function(){return new t(this.errors)}},{},e),{get MultipleErrors(){return t},get CollectingErrorReporter(){return n}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),t=e.Annotation,r=e.AnonBlock,n=e.ArgumentList,i=e.ArrayComprehension,s=e.ArrayLiteralExpression,a=e.ArrayPattern,o=e.ArrayType,c=e.ArrowFunctionExpression,u=e.AssignmentElement,l=e.AwaitExpression,p=e.BinaryExpression,f=e.BindingElement,h=(e.BindingIdentifier,e.Block),m=(e.BreakStatement,e.CallExpression),d=e.CallSignature,g=e.CaseClause,y=e.Catch,_=e.ClassDeclaration,S=e.ClassExpression,v=e.CommaExpression,b=e.ComprehensionFor,T=e.ComprehensionIf,j=e.ComputedPropertyName,E=e.ConditionalExpression,O=e.ConstructSignature,A=e.ConstructorType,R=(e.ContinueStatement,e.CoverFormals),x=e.CoverInitializedName,w=(e.DebuggerStatement,e.DefaultClause),C=e.DoWhileStatement,P=(e.EmptyStatement,e.ExportDeclaration),L=e.ExportDefault,I=(e.ExportSpecifier,e.ExportSpecifierSet),N=(e.ExportStar,e.ExpressionStatement),M=e.Finally,k=e.ForInStatement,F=e.ForOfStatement,$=e.ForOnStatement,B=e.ForStatement,D=e.FormalParameter,V=e.FormalParameterList,G=e.FunctionBody,U=e.FunctionDeclaration,z=e.FunctionExpression,H=e.FunctionType,Y=e.GeneratorComprehension,X=e.GetAccessor,W=(e.IdentifierExpression,e.IfStatement),Q=e.ImportedBinding,K=e.ImportDeclaration,q=e.ImportSpecifier,J=e.ImportSpecifierSet,Z=e.IndexSignature,ee=e.InterfaceDeclaration,te=e.LabelledStatement,re=(e.LiteralExpression,e.LiteralPropertyName,e.MemberExpression),ne=e.MemberLookupExpression,ie=e.MethodSignature,se=e.Module,ae=e.ModuleDeclaration,oe=(e.ModuleSpecifier,e.NamedExport),ce=e.NewExpression,ue=e.ObjectLiteralExpression,le=e.ObjectPattern,pe=e.ObjectPatternField,fe=e.ObjectType,he=e.ParenExpression,me=e.PostfixExpression,de=(e.PredefinedType,e.Script),ge=e.PropertyMethodAssignment,ye=e.PropertyNameAssignment,_e=(e.PropertyNameShorthand,e.PropertyVariableDeclaration),Se=e.PropertySignature,ve=e.RestParameter,be=e.ReturnStatement,Te=e.SetAccessor,je=e.SpreadExpression,Ee=e.SpreadPatternElement,Oe=(e.SuperExpression,e.SwitchStatement),Ae=(e.SyntaxErrorTree,e.TemplateLiteralExpression),Re=(e.TemplateLiteralPortion,e.TemplateSubstitution),xe=(e.ThisExpression,e.ThrowStatement),we=e.TryStatement,Ce=e.TypeArguments,Pe=e.TypeName,Le=e.TypeParameter,Ie=e.TypeParameters,Ne=e.TypeReference,Me=e.UnaryExpression,ke=e.UnionType,Fe=e.VariableDeclaration,$e=e.VariableDeclarationList,Be=e.VariableStatement,De=e.WhileStatement,Ve=e.WithStatement,Ge=e.YieldExpression,Ue=function(){}
return $traceurRuntime.createClass(Ue,{transformAny:function(e){return e&&e.transform(this)},transformList:function(e){for(var t,n=null,i=0;i<e.length;i++){var s=e[i],a=this.transformAny(s);(null!=n||s!=a)&&(null==n&&(n=e.slice(0,i)),a instanceof r?(t=n).push.apply(t,$traceurRuntime.spread(a.statements)):n.push(a))}return n||e},transformStateMachine:function(){throw Error("State machines should not live outside of the GeneratorTransformer.")},transformToBlockOrStatement:function(e){var t=this.transformAny(e)
return t instanceof r?new h(t.location,t.statements):t},transformAnnotation:function(e){var r=this.transformAny(e.name),n=this.transformAny(e.args)
return r===e.name&&n===e.args?e:new t(e.location,r,n)},transformAnonBlock:function(e){var t=this.transformList(e.statements)
return t===e.statements?e:new r(e.location,t)},transformArgumentList:function(e){var t=this.transformList(e.args)
return t===e.args?e:new n(e.location,t)},transformArrayComprehension:function(e){var t=this.transformList(e.comprehensionList),r=this.transformAny(e.expression)
return t===e.comprehensionList&&r===e.expression?e:new i(e.location,t,r)},transformArrayLiteralExpression:function(e){var t=this.transformList(e.elements)
return t===e.elements?e:new s(e.location,t)},transformArrayPattern:function(e){var t=this.transformList(e.elements)
return t===e.elements?e:new a(e.location,t)},transformArrayType:function(e){var t=this.transformAny(e.elementType)
return t===e.elementType?e:new o(e.location,t)},transformArrowFunctionExpression:function(e){var t=this.transformAny(e.parameterList),r=this.transformAny(e.body)
return t===e.parameterList&&r===e.body?e:new c(e.location,e.functionKind,t,r)},transformAssignmentElement:function(e){var t=this.transformAny(e.assignment),r=this.transformAny(e.initializer)
return t===e.assignment&&r===e.initializer?e:new u(e.location,t,r)},transformAwaitExpression:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new l(e.location,t)},transformBinaryExpression:function(e){var t=this.transformAny(e.left),r=this.transformAny(e.right)
return t===e.left&&r===e.right?e:new p(e.location,t,e.operator,r)},transformBindingElement:function(e){var t=this.transformAny(e.binding),r=this.transformAny(e.initializer)
return t===e.binding&&r===e.initializer?e:new f(e.location,t,r)},transformBindingIdentifier:function(e){return e},transformBlock:function(e){var t=this.transformList(e.statements)
return t===e.statements?e:new h(e.location,t)},transformBreakStatement:function(e){return e},transformCallExpression:function(e){var t=this.transformAny(e.operand),r=this.transformAny(e.args)
return t===e.operand&&r===e.args?e:new m(e.location,t,r)},transformCallSignature:function(e){var t=this.transformAny(e.typeParameters),r=this.transformAny(e.parameterList),n=this.transformAny(e.returnType)
return t===e.typeParameters&&r===e.parameterList&&n===e.returnType?e:new d(e.location,t,r,n)},transformCaseClause:function(e){var t=this.transformAny(e.expression),r=this.transformList(e.statements)
return t===e.expression&&r===e.statements?e:new g(e.location,t,r)},transformCatch:function(e){var t=this.transformAny(e.binding),r=this.transformAny(e.catchBody)
return t===e.binding&&r===e.catchBody?e:new y(e.location,t,r)},transformClassDeclaration:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.superClass),n=this.transformList(e.elements),i=this.transformList(e.annotations),s=this.transformAny(e.typeParameters)
return t===e.name&&r===e.superClass&&n===e.elements&&i===e.annotations&&s===e.typeParameters?e:new _(e.location,t,r,n,i,s)},transformClassExpression:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.superClass),n=this.transformList(e.elements),i=this.transformList(e.annotations),s=this.transformAny(e.typeParameters)
return t===e.name&&r===e.superClass&&n===e.elements&&i===e.annotations&&s===e.typeParameters?e:new S(e.location,t,r,n,i,s)},transformCommaExpression:function(e){var t=this.transformList(e.expressions)
return t===e.expressions?e:new v(e.location,t)},transformComprehensionFor:function(e){var t=this.transformAny(e.left),r=this.transformAny(e.iterator)
return t===e.left&&r===e.iterator?e:new b(e.location,t,r)},transformComprehensionIf:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new T(e.location,t)},transformComputedPropertyName:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new j(e.location,t)},transformConditionalExpression:function(e){var t=this.transformAny(e.condition),r=this.transformAny(e.left),n=this.transformAny(e.right)
return t===e.condition&&r===e.left&&n===e.right?e:new E(e.location,t,r,n)},transformConstructSignature:function(e){var t=this.transformAny(e.typeParameters),r=this.transformAny(e.parameterList),n=this.transformAny(e.returnType)
return t===e.typeParameters&&r===e.parameterList&&n===e.returnType?e:new O(e.location,t,r,n)},transformConstructorType:function(e){var t=this.transformAny(e.typeParameters),r=this.transformAny(e.parameterList),n=this.transformAny(e.returnType)
return t===e.typeParameters&&r===e.parameterList&&n===e.returnType?e:new A(e.location,t,r,n)},transformContinueStatement:function(e){return e},transformCoverFormals:function(e){var t=this.transformList(e.expressions)
return t===e.expressions?e:new R(e.location,t)},transformCoverInitializedName:function(e){var t=this.transformAny(e.initializer)
return t===e.initializer?e:new x(e.location,e.name,e.equalToken,t)},transformDebuggerStatement:function(e){return e},transformDefaultClause:function(e){var t=this.transformList(e.statements)
return t===e.statements?e:new w(e.location,t)},transformDoWhileStatement:function(e){var t=this.transformToBlockOrStatement(e.body),r=this.transformAny(e.condition)
return t===e.body&&r===e.condition?e:new C(e.location,t,r)},transformEmptyStatement:function(e){return e},transformExportDeclaration:function(e){var t=this.transformAny(e.declaration),r=this.transformList(e.annotations)
return t===e.declaration&&r===e.annotations?e:new P(e.location,t,r)},transformExportDefault:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new L(e.location,t)},transformExportSpecifier:function(e){return e},transformExportSpecifierSet:function(e){var t=this.transformList(e.specifiers)
return t===e.specifiers?e:new I(e.location,t)},transformExportStar:function(e){return e},transformExpressionStatement:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new N(e.location,t)},transformFinally:function(e){var t=this.transformAny(e.block)
return t===e.block?e:new M(e.location,t)},transformForInStatement:function(e){var t=this.transformAny(e.initializer),r=this.transformAny(e.collection),n=this.transformToBlockOrStatement(e.body)
return t===e.initializer&&r===e.collection&&n===e.body?e:new k(e.location,t,r,n)},transformForOfStatement:function(e){var t=this.transformAny(e.initializer),r=this.transformAny(e.collection),n=this.transformToBlockOrStatement(e.body)
return t===e.initializer&&r===e.collection&&n===e.body?e:new F(e.location,t,r,n)},transformForOnStatement:function(e){var t=this.transformAny(e.initializer),r=this.transformAny(e.observable),n=this.transformToBlockOrStatement(e.body)
return t===e.initializer&&r===e.observable&&n===e.body?e:new $(e.location,t,r,n)},transformForStatement:function(e){var t=this.transformAny(e.initializer),r=this.transformAny(e.condition),n=this.transformAny(e.increment),i=this.transformToBlockOrStatement(e.body)
return t===e.initializer&&r===e.condition&&n===e.increment&&i===e.body?e:new B(e.location,t,r,n,i)},transformFormalParameter:function(e){var t=this.transformAny(e.parameter),r=this.transformAny(e.typeAnnotation),n=this.transformList(e.annotations)
return t===e.parameter&&r===e.typeAnnotation&&n===e.annotations?e:new D(e.location,t,r,n)},transformFormalParameterList:function(e){var t=this.transformList(e.parameters)
return t===e.parameters?e:new V(e.location,t)},transformFunctionBody:function(e){var t=this.transformList(e.statements)
return t===e.statements?e:new G(e.location,t)},transformFunctionDeclaration:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.parameterList),n=this.transformAny(e.typeAnnotation),i=this.transformList(e.annotations),s=this.transformAny(e.body)
return t===e.name&&r===e.parameterList&&n===e.typeAnnotation&&i===e.annotations&&s===e.body?e:new U(e.location,t,e.functionKind,r,n,i,s)},transformFunctionExpression:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.parameterList),n=this.transformAny(e.typeAnnotation),i=this.transformList(e.annotations),s=this.transformAny(e.body)
return t===e.name&&r===e.parameterList&&n===e.typeAnnotation&&i===e.annotations&&s===e.body?e:new z(e.location,t,e.functionKind,r,n,i,s)},transformFunctionType:function(e){var t=this.transformAny(e.typeParameters),r=this.transformAny(e.parameterList),n=this.transformAny(e.returnType)
return t===e.typeParameters&&r===e.parameterList&&n===e.returnType?e:new H(e.location,t,r,n)},transformGeneratorComprehension:function(e){var t=this.transformList(e.comprehensionList),r=this.transformAny(e.expression)
return t===e.comprehensionList&&r===e.expression?e:new Y(e.location,t,r)},transformGetAccessor:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.typeAnnotation),n=this.transformList(e.annotations),i=this.transformAny(e.body)
return t===e.name&&r===e.typeAnnotation&&n===e.annotations&&i===e.body?e:new X(e.location,e.isStatic,t,r,n,i)},transformIdentifierExpression:function(e){return e},transformIfStatement:function(e){var t=this.transformAny(e.condition),r=this.transformToBlockOrStatement(e.ifClause),n=this.transformToBlockOrStatement(e.elseClause)
return t===e.condition&&r===e.ifClause&&n===e.elseClause?e:new W(e.location,t,r,n)},transformImportedBinding:function(e){var t=this.transformAny(e.binding)
return t===e.binding?e:new Q(e.location,t)},transformImportDeclaration:function(e){var t=this.transformAny(e.importClause),r=this.transformAny(e.moduleSpecifier)
return t===e.importClause&&r===e.moduleSpecifier?e:new K(e.location,t,r)},transformImportSpecifier:function(e){var t=this.transformAny(e.binding)
return t===e.binding?e:new q(e.location,t,e.name)},transformImportSpecifierSet:function(e){var t=this.transformList(e.specifiers)
return t===e.specifiers?e:new J(e.location,t)},transformIndexSignature:function(e){var t=this.transformAny(e.indexType),r=this.transformAny(e.typeAnnotation)
return t===e.indexType&&r===e.typeAnnotation?e:new Z(e.location,e.name,t,r)},transformInterfaceDeclaration:function(e){var t=this.transformAny(e.typeParameters),r=this.transformAny(e.objectType)
return t===e.typeParameters&&r===e.objectType?e:new ee(e.location,e.name,t,e.extendsClause,r)},transformLabelledStatement:function(e){var t=this.transformAny(e.statement)
return t===e.statement?e:new te(e.location,e.name,t)},transformLiteralExpression:function(e){return e},transformLiteralPropertyName:function(e){return e},transformMemberExpression:function(e){var t=this.transformAny(e.operand)
return t===e.operand?e:new re(e.location,t,e.memberName)},transformMemberLookupExpression:function(e){var t=this.transformAny(e.operand),r=this.transformAny(e.memberExpression)
return t===e.operand&&r===e.memberExpression?e:new ne(e.location,t,r)},transformMethodSignature:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.callSignature)
return t===e.name&&r===e.callSignature?e:new ie(e.location,t,e.optional,r)},transformModule:function(e){var t=this.transformList(e.scriptItemList)
return t===e.scriptItemList?e:new se(e.location,t,e.moduleName)},transformModuleDeclaration:function(e){var t=this.transformAny(e.binding),r=this.transformAny(e.expression)
return t===e.binding&&r===e.expression?e:new ae(e.location,t,r)},transformModuleSpecifier:function(e){return e},transformNamedExport:function(e){var t=this.transformAny(e.moduleSpecifier),r=this.transformAny(e.specifierSet)
return t===e.moduleSpecifier&&r===e.specifierSet?e:new oe(e.location,t,r)},transformNewExpression:function(e){var t=this.transformAny(e.operand),r=this.transformAny(e.args)
return t===e.operand&&r===e.args?e:new ce(e.location,t,r)},transformObjectLiteralExpression:function(e){var t=this.transformList(e.propertyNameAndValues)
return t===e.propertyNameAndValues?e:new ue(e.location,t)},transformObjectPattern:function(e){var t=this.transformList(e.fields)
return t===e.fields?e:new le(e.location,t)},transformObjectPatternField:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.element)
return t===e.name&&r===e.element?e:new pe(e.location,t,r)},transformObjectType:function(e){var t=this.transformList(e.typeMembers)
return t===e.typeMembers?e:new fe(e.location,t)},transformParenExpression:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new he(e.location,t)},transformPostfixExpression:function(e){var t=this.transformAny(e.operand)
return t===e.operand?e:new me(e.location,t,e.operator)},transformPredefinedType:function(e){return e},transformScript:function(e){var t=this.transformList(e.scriptItemList)
return t===e.scriptItemList?e:new de(e.location,t,e.moduleName)},transformPropertyMethodAssignment:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.parameterList),n=this.transformAny(e.typeAnnotation),i=this.transformList(e.annotations),s=this.transformAny(e.body),a=this.transformAny(e.debugName)
return t===e.name&&r===e.parameterList&&n===e.typeAnnotation&&i===e.annotations&&s===e.body&&a===e.debugName?e:new ge(e.location,e.isStatic,e.functionKind,t,r,n,i,s,a)},transformPropertyNameAssignment:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.value)
return t===e.name&&r===e.value?e:new ye(e.location,t,r)},transformPropertyNameShorthand:function(e){return e},transformPropertyVariableDeclaration:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.typeAnnotation),n=this.transformList(e.annotations),i=this.transformAny(e.initializer)
return t===e.name&&r===e.typeAnnotation&&n===e.annotations&&i===e.initializer?e:new _e(e.location,e.isStatic,t,r,n,i)},transformPropertySignature:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.typeAnnotation)
return t===e.name&&r===e.typeAnnotation?e:new Se(e.location,t,e.optional,r)},transformRestParameter:function(e){var t=this.transformAny(e.identifier),r=this.transformAny(e.typeAnnotation)
return t===e.identifier&&r===e.typeAnnotation?e:new ve(e.location,t,r)},transformReturnStatement:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new be(e.location,t)},transformSetAccessor:function(e){var t=this.transformAny(e.name),r=this.transformAny(e.parameterList),n=this.transformList(e.annotations),i=this.transformAny(e.body)
return t===e.name&&r===e.parameterList&&n===e.annotations&&i===e.body?e:new Te(e.location,e.isStatic,t,r,n,i)},transformSpreadExpression:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new je(e.location,t)},transformSpreadPatternElement:function(e){var t=this.transformAny(e.lvalue)
return t===e.lvalue?e:new Ee(e.location,t)},transformSuperExpression:function(e){return e},transformSwitchStatement:function(e){var t=this.transformAny(e.expression),r=this.transformList(e.caseClauses)
return t===e.expression&&r===e.caseClauses?e:new Oe(e.location,t,r)},transformSyntaxErrorTree:function(e){return e},transformTemplateLiteralExpression:function(e){var t=this.transformAny(e.operand),r=this.transformList(e.elements)
return t===e.operand&&r===e.elements?e:new Ae(e.location,t,r)},transformTemplateLiteralPortion:function(e){return e},transformTemplateSubstitution:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new Re(e.location,t)},transformThisExpression:function(e){return e},transformThrowStatement:function(e){var t=this.transformAny(e.value)
return t===e.value?e:new xe(e.location,t)},transformTryStatement:function(e){var t=this.transformAny(e.body),r=this.transformAny(e.catchBlock),n=this.transformAny(e.finallyBlock)
return t===e.body&&r===e.catchBlock&&n===e.finallyBlock?e:new we(e.location,t,r,n)},transformTypeArguments:function(e){var t=this.transformList(e.args)
return t===e.args?e:new Ce(e.location,t)},transformTypeName:function(e){var t=this.transformAny(e.moduleName)
return t===e.moduleName?e:new Pe(e.location,t,e.name)},transformTypeParameter:function(e){var t=this.transformAny(e.extendsType)
return t===e.extendsType?e:new Le(e.location,e.identifierToken,t)},transformTypeParameters:function(e){var t=this.transformList(e.parameters)
return t===e.parameters?e:new Ie(e.location,t)},transformTypeReference:function(e){var t=this.transformAny(e.typeName),r=this.transformAny(e.args)
return t===e.typeName&&r===e.args?e:new Ne(e.location,t,r)},transformUnaryExpression:function(e){var t=this.transformAny(e.operand)
return t===e.operand?e:new Me(e.location,e.operator,t)},transformUnionType:function(e){var t=this.transformList(e.types)
return t===e.types?e:new ke(e.location,t)},transformVariableDeclaration:function(e){var t=this.transformAny(e.lvalue),r=this.transformAny(e.typeAnnotation),n=this.transformAny(e.initializer)
return t===e.lvalue&&r===e.typeAnnotation&&n===e.initializer?e:new Fe(e.location,t,r,n)},transformVariableDeclarationList:function(e){var t=this.transformList(e.declarations)
return t===e.declarations?e:new $e(e.location,e.declarationType,t)},transformVariableStatement:function(e){var t=this.transformAny(e.declarations)
return t===e.declarations?e:new Be(e.location,t)},transformWhileStatement:function(e){var t=this.transformAny(e.condition),r=this.transformToBlockOrStatement(e.body)
return t===e.condition&&r===e.body?e:new De(e.location,t,r)},transformWithStatement:function(e){var t=this.transformAny(e.expression),r=this.transformToBlockOrStatement(e.body)
return t===e.expression&&r===e.body?e:new Ve(e.location,t,r)},transformYieldExpression:function(e){var t=this.transformAny(e.expression)
return t===e.expression?e:new Ge(e.location,t,e.isYieldFor)}},{}),{get ParseTreeTransformer(){return Ue}}}),System.registerModule("traceur@0.0.87/src/codegeneration/PlaceholderParser.js",[],function(){"use strict"
function e(e){return function(r){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i]
return t(r,n,e)}}function t(e,t,i){var s=U.get(e)
if(!s){var a=r(e),o=new d,c=n(a,o)
if(s=i(c),o.hadError()||!s||!c.isAtEnd())throw Error("Internal error trying to parse:\n\n"+a+"\n\n"+o.errorsAsString())
U.set(e,s)}return t.length?s instanceof y?new q(t).transformAny(s):new q(t).transformList(s):s}function r(e){for(var t=e[0],r=1;r<e.length;r++)t+=K+(r-1)+e[r]
return t}function n(e,t){var r=new E(null,e),n=new g
return n.experimental=!0,new S(r,t,n)}function i(e){if(e instanceof y)return e
if(e instanceof f)return N(e)
if(e instanceof h)return new b(e.location,e)
if(Array.isArray(e))return e[0]instanceof y?1===e.length?e[0]:e[0].isStatement()?w(e):B(P(e)):R(e.map(i))
if(null===e)return F()
if(void 0===e)return V()
switch(typeof e){case"string":return D(e)
case"boolean":return C(e)
case"number":return $(e)}throw Error("Not implemented")}function s(e){return e instanceof f?e:M(e)}function a(e){if(null===e)return null
if(e instanceof y)return e
if("string"==typeof e)return new j(null,null,s(e))
if(e instanceof f)return new j(null,null,e)
throw Error("Not implemented")}var o=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),c=o.ARGUMENT_LIST,u=o.BLOCK,l=o.EXPRESSION_STATEMENT,p=o.IDENTIFIER_EXPRESSION,f=System.get("traceur@0.0.87/src/syntax/IdentifierToken.js").IdentifierToken,h=System.get("traceur@0.0.87/src/syntax/LiteralToken.js").LiteralToken,m=System.get("traceur@0.0.87/src/runtime/polyfills/Map.js").Map,d=System.get("traceur@0.0.87/src/util/CollectingErrorReporter.js").CollectingErrorReporter,g=System.get("traceur@0.0.87/src/Options.js").Options,y=System.get("traceur@0.0.87/src/syntax/trees/ParseTree.js").ParseTree,_=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,S=System.get("traceur@0.0.87/src/syntax/Parser.js").Parser,v=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),b=v.LiteralExpression,T=v.LiteralPropertyName,j=v.TypeName,E=System.get("traceur@0.0.87/src/syntax/SourceFile.js").SourceFile,O=System.get("traceur@0.0.87/src/syntax/TokenType.js").IDENTIFIER,A=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),R=A.createArrayLiteralExpression,x=A.createBindingIdentifier,w=A.createBlock,C=A.createBooleanLiteral,P=A.createCommaExpression,L=A.createExpressionStatement,I=A.createFunctionBody,N=A.createIdentifierExpression,M=A.createIdentifierToken,k=A.createMemberExpression,F=A.createNullLiteral,$=A.createNumberLiteral,B=A.createParenExpression,D=A.createStringLiteral,V=A.createVoid0,G={},U=new m,z=e(function(e){return e.parseExpression()}),H=e(function(e){return e.parseStatement()}),Y=e(function(e){return e.parseModule()}),X=e(function(e){return e.parseScript()}),W=e(function(e){return e.parseStatements()}),Q=e(function(e){return e.parsePropertyDefinition()}),K="$__placeholder__",q=function(e){$traceurRuntime.superConstructor(J).call(this),this.values=e},J=q
return $traceurRuntime.createClass(q,{getValueAt:function(e){return this.values[e]},getValue_:function(e){return 0!==e.indexOf(K)?G:this.getValueAt(+e.slice(K.length))},transformIdentifierExpression:function(e){var t=this.getValue_(e.identifierToken.value)
return t===G?e:i(t)},transformBindingIdentifier:function(e){var t=this.getValue_(e.identifierToken.value)
return t===G?e:x(t)},transformExpressionStatement:function(e){if(e.expression.type===p){var t=this.transformIdentifierExpression(e.expression)
return t===e.expression?e:t.isStatement()?t:L(t)}return $traceurRuntime.superGet(this,J.prototype,"transformExpressionStatement").call(this,e)},transformBlock:function(e){if(1===e.statements.length&&e.statements[0].type===l){var t=this.transformExpressionStatement(e.statements[0])
if(t===e.statements[0])return e
if(t.type===u)return t}return $traceurRuntime.superGet(this,J.prototype,"transformBlock").call(this,e)},transformFunctionBody:function(e){if(1===e.statements.length&&e.statements[0].type===l){var t=this.transformExpressionStatement(e.statements[0])
if(t===e.statements[0])return e
if(t.type===u)return I(t.statements)}return $traceurRuntime.superGet(this,J.prototype,"transformFunctionBody").call(this,e)},transformMemberExpression:function(e){var t=this.getValue_(e.memberName.value)
if(t===G)return $traceurRuntime.superGet(this,J.prototype,"transformMemberExpression").call(this,e)
var r=this.transformAny(e.operand)
return k(r,t)},transformLiteralPropertyName:function(e){if(e.literalToken.type===O){var t=this.getValue_(e.literalToken.value)
if(t!==G)return new T(null,s(t))}return $traceurRuntime.superGet(this,J.prototype,"transformLiteralPropertyName").call(this,e)},transformArgumentList:function(e){if(1===e.args.length&&e.args[0].type===p){var t=this.transformAny(e.args[0])
if(t===e.args[0])return e
if(t.type===c)return t}return $traceurRuntime.superGet(this,J.prototype,"transformArgumentList").call(this,e)},transformTypeName:function(e){var t=this.getValue_(e.name.value)
if(t===G)return $traceurRuntime.superGet(this,J.prototype,"transformTypeName").call(this,e)
var r=this.transformAny(e.moduleName)
return null!==r?new j(null,r,s(t)):a(t)}},{},_),{get parseExpression(){return z},get parseStatement(){return H},get parseModule(){return Y},get parseScript(){return X},get parseStatements(){return W},get parsePropertyDefinition(){return Q},get PlaceholderTransformer(){return q}}}),System.registerModule("traceur@0.0.87/src/codegeneration/PrependStatements.js",[],function(){"use strict"
function e(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
if(!e.length)return t
if(!t.length)return e
var n=[],i=!0
return e.forEach(function(e){var r
i&&!e.isDirectivePrologue()&&((r=n).push.apply(r,$traceurRuntime.spread(t)),i=!1),n.push(e)}),n}return{get prependStatements(){return e}}}),System.registerModule("traceur@0.0.87/src/codegeneration/TempVarTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),r=t.Module,n=t.Script,i=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").ARGUMENTS,s=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,a=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,o=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),c=o.createFunctionBody,u=o.createThisExpression,l=o.createIdentifierExpression,p=o.createVariableDeclaration,f=o.createVariableDeclarationList,h=o.createVariableStatement,m=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,d=function(e,t){this.name=e,this.initializer=t}
$traceurRuntime.createClass(d,{},{})
var g=function(){this.identifiers=[]}
$traceurRuntime.createClass(g,{push:function(e){this.identifiers.push(e)},pop:function(){return this.identifiers.pop()},release:function(e){for(var t=this.identifiers.length-1;t>=0;t--)e.release_(this.identifiers[t])}},{})
var y=function(){this.thisName=null,this.argumentName=null,this.tempVarStatements=[]}
$traceurRuntime.createClass(y,{push:function(e){this.tempVarStatements.push(e)},pop:function(){return this.tempVarStatements.pop()},release:function(e){for(var t=this.tempVarStatements.length-1;t>=0;t--)e.release_(this.tempVarStatements[t].name)},isEmpty:function(){return!this.tempVarStatements.length},createVariableStatement:function(){for(var e=[],t=new s,r=0;r<this.tempVarStatements.length;r++){var n=this.tempVarStatements[r],i=n.name,o=n.initializer
if(t.has(i)){if(o)throw Error("Invalid use of TempVarTransformer")}else t.add(i),e.push(p(i,o))}return h(f(a,e))}},{})
var _=function(e){$traceurRuntime.superConstructor(S).call(this),this.identifierGenerator=e,this.tempVarStack_=[new y],this.tempScopeStack_=[new g],this.namePool_=[]},S=_
return $traceurRuntime.createClass(_,{transformStatements_:function(e){this.tempVarStack_.push(new y)
var t=this.transformList(e),r=this.tempVarStack_.pop()
if(r.isEmpty())return t
var n=r.createVariableStatement()
return r.release(this),m(t,n)},transformScript:function(e){var t=this.transformStatements_(e.scriptItemList)
return t===e.scriptItemList?e:new n(e.location,t,e.moduleName)},transformModule:function(e){var t=this.transformStatements_(e.scriptItemList)
return t===e.scriptItemList?e:new r(e.location,t,e.moduleName)},transformFunctionBody:function(e){this.pushTempScope()
var t=this.transformStatements_(e.statements)
return this.popTempScope(),t===e.statements?e:c(t)},getTempIdentifier:function(){var e=this.getName_()
return this.tempScopeStack_[this.tempScopeStack_.length-1].push(e),e},getName_:function(){return this.namePool_.length?this.namePool_.pop():this.identifierGenerator.generateUniqueIdentifier()},addTempVar:function(){var e=void 0!==arguments[0]?arguments[0]:null,t=this.tempVarStack_[this.tempVarStack_.length-1],r=this.getName_()
return t.push(new d(r,e)),r},addTempVarForThis:function(){var e=this.tempVarStack_[this.tempVarStack_.length-1]
return e.thisName||(e.thisName=this.addTempVar(u()))},addTempVarForArguments:function(){var e=this.tempVarStack_[this.tempVarStack_.length-1]
return e.argumentName||(e.argumentName=this.addTempVar(l(i)))},pushTempScope:function(){this.tempScopeStack_.push(new g)},popTempScope:function(){this.tempScopeStack_.pop().release(this)},release_:function(e){this.namePool_.push(e)}},{},e),{get TempVarTransformer(){return _}}}),System.registerModule("traceur@0.0.87/src/codegeneration/DestructuringTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties([""," =\n            ","[$traceurRuntime.toProperty(Symbol.iterator)]()"],{raw:{value:Object.freeze([""," =\n            ","[$traceurRuntime.toProperty(Symbol.iterator)]()"])}})),t=Object.freeze(Object.defineProperties(["",".next()"],{raw:{value:Object.freeze(["",".next()"])}})),r=Object.freeze(Object.defineProperties(["$traceurRuntime.iteratorToArray(",")"],{raw:{value:Object.freeze(["$traceurRuntime.iteratorToArray(",")"])}})),n=Object.freeze(Object.defineProperties(["("," = ",".",") === void 0 ?\n        "," : ",""],{raw:{value:Object.freeze(["("," = ",".",") === void 0 ?\n        "," : ",""])}})),i=Object.freeze(Object.defineProperties(["("," = ","[","]) === void 0 ?\n        "," : ",""],{raw:{value:Object.freeze(["("," = ","[","]) === void 0 ?\n        "," : ",""])}})),s=Object.freeze(Object.defineProperties(["("," =\n        ",".next()).done ? void 0 : ",".value"],{raw:{value:Object.freeze(["("," =\n        ",".next()).done ? void 0 : ",".value"])}})),a=Object.freeze(Object.defineProperties(["("," = ",") === void 0 ?\n        "," : ",""],{raw:{value:Object.freeze(["("," = ",") === void 0 ?\n        "," : ",""])}})),o=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),c=o.ARRAY_LITERAL_EXPRESSION,u=o.ARRAY_PATTERN,l=o.ASSIGNMENT_ELEMENT,p=o.BINDING_ELEMENT,f=o.BINDING_IDENTIFIER,h=o.BLOCK,m=o.CALL_EXPRESSION,d=o.COMPUTED_PROPERTY_NAME,g=o.IDENTIFIER_EXPRESSION,y=o.LITERAL_EXPRESSION,_=o.MEMBER_EXPRESSION,S=o.MEMBER_LOOKUP_EXPRESSION,v=o.OBJECT_LITERAL_EXPRESSION,b=o.OBJECT_PATTERN,T=o.OBJECT_PATTERN_FIELD,j=o.PAREN_EXPRESSION,E=o.VARIABLE_DECLARATION_LIST,O=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),A=O.AssignmentElement,R=O.BindingElement,x=O.Catch,w=O.ForInStatement,C=O.ForOfStatement,P=O.ForOnStatement,L=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,I=System.get("traceur@0.0.87/src/syntax/TokenType.js"),N=I.EQUAL,M=I.LET,k=I.VAR,F=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),$=F.createAssignmentExpression,B=F.createBindingIdentifier,D=F.createBlock,V=F.createCommaExpression,G=F.createExpressionStatement,U=F.createFunctionBody,z=F.createIdentifierExpression,H=F.createMemberExpression,Y=F.createMemberLookupExpression,X=F.createParenExpression,W=F.createVariableDeclaration,Q=F.createVariableDeclarationList,K=F.createVariableStatement,q=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,J=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,Z=function(e){this.rvalue=e,this.expressions=[],this.pendingExpressions=[]}
$traceurRuntime.createClass(Z,{createIterator:function(t){this.pendingExpressions.push(q(e,t,this.rvalue))},createInitializer:function(e){if(0===this.pendingExpressions.length)return e
var t=this.pendingExpressions
return this.pendingExpressions=[],t.push(e),X(V(t))},skipHole:function(e){this.pendingExpressions.push(q(t,e))}},{})
var ee=function(e){$traceurRuntime.superConstructor(te).call(this,e)},te=ee
$traceurRuntime.createClass(ee,{assign:function(e,t){e=e instanceof A?e.assignment:e,t=this.createInitializer(t),this.expressions.push($(e,t))},createAssignmentExpression:function(e,t){var r,n=this.expressions
return n.unshift($(e,t)),(r=n).push.apply(r,$traceurRuntime.spread(this.pendingExpressions,[e])),X(V(n))}},{},Z)
var re=function(e){$traceurRuntime.superConstructor(ne).call(this,e)},ne=re
$traceurRuntime.createClass(re,{assign:function(e,t){var r=e instanceof R?e.binding:B(e)
t=this.createInitializer(t),this.expressions.push(W(r,t))},get declarations(){return this.expressions}},{},Z)
var ie=function(e,t,r){$traceurRuntime.superConstructor(se).call(this,e),this.options_=r,this.parameterDeclarations=null},se=ie
return $traceurRuntime.createClass(ie,{transformArrayPattern:function(){throw Error("unreachable")},transformObjectPattern:function(){throw Error("unreachable")},transformBinaryExpression:function(e){this.pushTempScope()
var t
return t=e.operator.type===N&&e.left.isPattern()?this.transformAny(this.desugarAssignment_(e.left,e.right)):$traceurRuntime.superGet(this,se.prototype,"transformBinaryExpression").call(this,e),this.popTempScope(),t},desugarAssignment_:function(e,t){var r=z(this.addTempVar()),n=new ee(r)
return this.desugarPattern_(n,e),n.createAssignmentExpression(r,t)},transformVariableDeclarationList:function(e){var t=this
if(!this.destructuringInDeclaration_(e))return $traceurRuntime.superGet(this,se.prototype,"transformVariableDeclarationList").call(this,e)
var r=[]
e.declarations.forEach(function(e){var n
e.lvalue.isPattern()?(n=r).push.apply(n,$traceurRuntime.spread(t.desugarVariableDeclaration_(e))):r.push(e)})
var n=this.transformVariableDeclarationList(Q(e.declarationType,r))
return n},transformForInStatement:function(e){return this.transformForInOrOfOrOn_(e,$traceurRuntime.superGet(this,se.prototype,"transformForInStatement"),w)},transformForOfStatement:function(e){return this.transformForInOrOfOrOn_(e,$traceurRuntime.superGet(this,se.prototype,"transformForOfStatement"),C)},transformForOnStatement:function(e){return this.transformForInOrOfOrOn_(e,$traceurRuntime.superGet(this,se.prototype,"transformForOnStatement"),P)},transformForInOrOfOrOn_:function(e,t,r){var n
if(!(e.initializer.isPattern()||e.initializer.type===E&&this.destructuringInDeclaration_(e.initializer)))return t.call(this,e)
this.pushTempScope()
var i,s
e.initializer.isPattern()?(i=null,s=e.initializer):(i=e.initializer.declarationType,s=e.initializer.declarations[0].lvalue)
var a=[],o=this.desugarBinding_(s,a,i),c=Q(k,o,null),u=this.transformAny(e.collection),l=this.transformAny(e.body)
return l.type===h?(n=a).push.apply(n,$traceurRuntime.spread(l.statements)):a.push(l),l=D(a),this.popTempScope(),new r(e.location,c,u,l)},transformAssignmentElement:function(){throw Error("unreachable")},transformBindingElement:function(e){if(!e.binding.isPattern()||e.initializer)return e
null===this.parameterDeclarations&&(this.parameterDeclarations=[],this.pushTempScope())
var t=this.getTempIdentifier(),r=B(t),n=z(t),i=W(e.binding,n)
return this.parameterDeclarations.push(i),new R(null,r,null)},transformFunctionBody:function(e){if(null===this.parameterDeclarations)return $traceurRuntime.superGet(this,se.prototype,"transformFunctionBody").call(this,e)
var t=Q(k,this.parameterDeclarations),r=K(t),n=J(e.statements,r),i=U(n)
this.parameterDeclarations=null
var s=$traceurRuntime.superGet(this,se.prototype,"transformFunctionBody").call(this,i)
return this.popTempScope(),s},transformCatch:function(e){var t
if(!e.binding.isPattern())return $traceurRuntime.superGet(this,se.prototype,"transformCatch").call(this,e)
var r=this.transformAny(e.catchBody),n=[],i=this.options_.blockBinding?M:k,s=this.desugarBinding_(e.binding,n,i)
return(t=n).push.apply(t,$traceurRuntime.spread(r.statements)),new x(e.location,s,D(n))},desugarBinding_:function(e,t,r){var n,i=this.getTempIdentifier(),s=B(i),a=z(i)
return n=null===r?new ee(a):new re(a),this.desugarPattern_(n,e),t.push(null===r?G(V(n.expressions)):K(this.transformVariableDeclarationList(Q(r,n.declarations)))),s},destructuringInDeclaration_:function(e){return e.declarations.some(function(e){return e.lvalue.isPattern()})},desugarVariableDeclaration_:function(e){var t,r,n=this.getTempIdentifier(),i=z(n)
switch(e.initializer.type){case c:case m:case g:case y:case _:case S:case v:case j:r=e.initializer
default:t=new re(i),t.assign(t.rvalue,e.initializer)
var s=this.desugarPattern_(t,e.lvalue)
return s||t.declarations.length>2?t.declarations:(r||(r=X(e.initializer)),t=new re(r),this.desugarPattern_(t,e.lvalue),t.declarations)}},desugarPattern_:function(e,t){var n,i=this,s=!1
switch(t.type){case u:n=t,this.pushTempScope()
var a=z(this.addTempVar()),o=z(this.addTempVar())
e.createIterator(a)
for(var c=0;c<n.elements.length;c++){var f=n.elements[c]
null!==f?f.isSpreadPatternElement()?e.assign(f.lvalue,q(r,a)):(f.initializer&&(s=!0),e.assign(f,this.createConditionalIterExpression(o,a,f.initializer))):e.skipHole(a)}this.popTempScope()
break
case b:n=t
var h=function(t,r){r&&(s=!0)
var n=i.createConditionalMemberExpression(e.rvalue,t,r)
e.assign(t,n)}
n.fields.forEach(function(t){var r
switch(t.type){case l:h(t.assignment,t.initializer)
break
case p:h(t.binding,t.initializer)
break
case T:t.element.initializer&&(s=!0)
var n=t.name
r=i.createConditionalMemberExpression(e.rvalue,n,t.element.initializer),e.assign(t.element,r)
break
default:throw Error("unreachable")}})
break
case j:return this.desugarPattern_(e,t.expression)
default:throw Error("unreachable")}return e instanceof re&&0===e.declarations.length&&e.assign(B(this.getTempIdentifier()),e.rvalue),s},createConditionalMemberExpression:function(e,t,r){if(t.type===d)return this.createConditionalMemberLookupExpression(e,t.expression,r)
var i
switch(t.type){case f:case g:i=t.identifierToken
break
default:i=t.literalToken}if(!r)return H(e,i)
var s=z(this.addTempVar())
return q(n,s,e,i,r,s)},createConditionalMemberLookupExpression:function(e,t,r){if(!r)return Y(e,t)
var n=z(this.addTempVar())
return q(i,n,e,t,r,n)},createConditionalIterExpression:function(e,t,r){var n=q(s,e,t,e)
if(!r)return n
var i=z(this.addTempVar())
return q(a,i,n,r,i)}},{},L),{get DestructuringTransformer(){return ie}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/ModuleSymbol.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/util/StringMap.js").StringMap,t=System.get("traceur@0.0.87/src/util/assert.js").assert,r=function(t){this.exports_=new e,null!==t?this.normalizedName=t.replace(/\\/g,"/"):this.normalizedName=null}
$traceurRuntime.createClass(r,{addExport:function(e,r){t(!this.exports_.has(e)),this.exports_.set(e,r)},getExport:function(e){return this.exports_.get(e)},getExports:function(){return this.exports_.keysAsArray()},addExportsFromModule:function(e){var t=this
Object.getOwnPropertyNames(e).forEach(function(e){t.addExport(e,!0)})}},{})
var n=function(t,r){$traceurRuntime.superConstructor(i).call(this,r),this.tree=t,this.imports_=new e},i=n
return $traceurRuntime.createClass(n,{addImport:function(e,r){t(!this.imports_.has(e)),this.imports_.set(e,r)},getImport:function(e){return this.imports_.get(e)}},{},r),{get ExportsList(){return r},get ModuleSymbol(){return n}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/ModuleVisitor.js",[],function(){"use strict"
var e=(System.get("traceur@0.0.87/src/codegeneration/module/ModuleSymbol.js").ExportsList,System.get("traceur@0.0.87/src/syntax/ParseTreeVisitor.js").ParseTreeVisitor),t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),r=t.MODULE_DECLARATION,n=t.EXPORT_DECLARATION,i=t.IMPORT_DECLARATION,s=function(e,t,r){$traceurRuntime.superConstructor(a).call(this),this.reporter=e,this.loader_=t,this.moduleSymbol=r},a=s
return $traceurRuntime.createClass(s,{getExportsListForModuleSpecifier:function(e){var t=this.moduleSymbol.normalizedName
return this.loader_.getExportsListForModuleSpecifier(e,t)},visitFunctionDeclaration:function(){},visitFunctionExpression:function(){},visitFunctionBody:function(){},visitBlock:function(){},visitClassDeclaration:function(){},visitClassExpression:function(){},visitModuleElement_:function(e){switch(e.type){case r:case n:case i:this.visitAny(e)}},visitScript:function(e){e.scriptItemList.forEach(this.visitModuleElement_,this)},visitModule:function(e){e.scriptItemList.forEach(this.visitModuleElement_,this)},reportError:function(e,t){this.reporter.reportError(e.location.start,t)}},{},e),{get ModuleVisitor(){return s}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/ExportVisitor.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/module/ModuleVisitor.js").ModuleVisitor,t=System.get("traceur@0.0.87/src/util/assert.js").assert,r=function(e,t,r){$traceurRuntime.superConstructor(n).call(this,e,t,r),this.inExport_=!1,this.moduleSpecifier=null},n=r
return $traceurRuntime.createClass(r,{addExport_:function(e,r){t("string"==typeof e),this.inExport_&&this.addExport(e,r)},addExport:function(e,t){var r=this.moduleSymbol,n=r.getExport(e)
n?this.reportError(t,"Duplicate export. '"+e+"' was previously exported at "+n.location.start):r.addExport(e,t)},visitClassDeclaration:function(e){this.addExport_(e.name.identifierToken.value,e)},visitExportDeclaration:function(e){this.inExport_=!0,this.visitAny(e.declaration),this.inExport_=!1},visitNamedExport:function(e){this.moduleSpecifier=e.moduleSpecifier,this.visitAny(e.specifierSet),this.moduleSpecifier=null},visitExportDefault:function(e){this.addExport_("default",e)},visitExportSpecifier:function(e){this.addExport_((e.rhs||e.lhs).value,e)},visitExportStar:function(e){var t=this,r=this.moduleSpecifier.token.processedValue,n=this.getExportsListForModuleSpecifier(r)
n&&n.getExports().forEach(function(r){return t.addExport(r,e)})},visitFunctionDeclaration:function(e){this.addExport_(e.name.getStringValue(),e)},visitModuleDeclaration:function(e){var t=e.binding.getStringValue()
this.addExport_(t,e)},visitVariableDeclaration:function(e){this.addExport_(e.lvalue.getStringValue(),e)}},{},e),{get ExportVisitor(){return r}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/DirectExportVisitor.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/module/ExportVisitor.js").ExportVisitor,t=function(){$traceurRuntime.superConstructor(r).call(this,null,null,null),this.namedExports=[],this.starExports=[]},r=t
return $traceurRuntime.createClass(t,{addExport:function(e,t){this.namedExports.push({name:e,tree:t,moduleSpecifier:this.moduleSpecifier})},visitExportStar:function(){this.starExports.push(this.moduleSpecifier)},hasExports:function(){return 0!==this.namedExports.length||0!==this.starExports.length}},{},e),{get DirectExportVisitor(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ModuleTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["var __moduleName = ",";"],{raw:{value:Object.freeze(["var __moduleName = ",";"])}})),t=Object.freeze(Object.defineProperties(["function(require) {\n        ","\n      }"],{raw:{value:Object.freeze(["function(require) {\n        ","\n      }"])}})),r=Object.freeze(Object.defineProperties(["function() {\n        ","\n      }"],{raw:{value:Object.freeze(["function() {\n        ","\n      }"])}})),n=Object.freeze(Object.defineProperties(["$traceurRuntime.ModuleStore.getAnonymousModule(\n              ",");"],{raw:{value:Object.freeze(["$traceurRuntime.ModuleStore.getAnonymousModule(\n              ",");"])}})),i=Object.freeze(Object.defineProperties(["System.registerModule(",", [], ",");"],{raw:{value:Object.freeze(["System.registerModule(",", [], ",");"])}})),s=Object.freeze(Object.defineProperties(["get ","() { return ","; }"],{raw:{value:Object.freeze(["get ","() { return ","; }"])}})),a=Object.freeze(Object.defineProperties(["$traceurRuntime.exportStar(",")"],{raw:{value:Object.freeze(["$traceurRuntime.exportStar(",")"])}})),o=Object.freeze(Object.defineProperties(["return ",""],{raw:{value:Object.freeze(["return ",""])}})),c=Object.freeze(Object.defineProperties(["var $__default = ",""],{raw:{value:Object.freeze(["var $__default = ",""])}})),u=Object.freeze(Object.defineProperties(["var $__default = ",""],{raw:{value:Object.freeze(["var $__default = ",""])}})),l=Object.freeze(Object.defineProperties(["System.get(",")"],{raw:{value:Object.freeze(["System.get(",")"])}})),p=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),f=p.AnonBlock,h=p.BindingElement,m=p.EmptyStatement,d=p.LiteralPropertyName,g=p.ObjectPattern,y=p.ObjectPatternField,_=p.Script,S=System.get("traceur@0.0.87/src/codegeneration/DestructuringTransformer.js").DestructuringTransformer,v=System.get("traceur@0.0.87/src/codegeneration/module/DirectExportVisitor.js").DirectExportVisitor,b=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,T=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),j=T.CLASS_DECLARATION,E=T.EXPORT_DEFAULT,O=T.EXPORT_SPECIFIER,A=T.FUNCTION_DECLARATION,R=T.IMPORT_SPECIFIER_SET,x=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,w=System.get("traceur@0.0.87/src/util/assert.js").assert,C=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),P=C.createArgumentList,L=C.createExpressionStatement,I=C.createIdentifierExpression,N=C.createIdentifierToken,M=C.createMemberExpression,k=C.createObjectLiteralExpression,F=C.createUseStrictDirective,$=C.createVariableStatement,B=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),D=B.parseExpression,V=B.parsePropertyDefinition,G=B.parseStatement,U=B.parseStatements,z=function(){$traceurRuntime.superConstructor(H).apply(this,arguments)},H=z
$traceurRuntime.createClass(z,{createGuardedExpression:function(e){return e}},{},S)
var Y=function(e,t,r){$traceurRuntime.superConstructor(X).call(this,e),this.options_=r,this.exportVisitor_=new v,this.moduleSpecifierKind_=null,this.moduleName=null},X=Y
return $traceurRuntime.createClass(Y,{getTempVarNameForModuleName:function(e){return"$__"+e.replace(/[^a-zA-Z0-9$]/g,function(e){return"_"+e.charCodeAt(0)+"_"})+"__"},getModuleName:function(e){return e.moduleName},getTempVarNameForModuleSpecifier:function(e){var t=System.normalize(e.token.processedValue,this.moduleName)
return this.getTempVarNameForModuleName(t)},transformScript:function(e){return this.moduleName=e.moduleName,$traceurRuntime.superGet(this,X.prototype,"transformScript").call(this,e)},transformModule:function(e){this.moduleName=this.getModuleName(e),this.pushTempScope()
var t=this.transformList(e.scriptItemList)
return t=this.appendExportStatement(t),this.popTempScope(),t=this.wrapModule(this.moduleProlog().concat(t)),new _(e.location,t)},moduleProlog:function(){var t=[F()]
return this.moduleName&&t.push(G(e,this.moduleName)),t},wrapModule:function(e){var s
return s=this.options_.transformOptions.require?D(t,e):D(r,e),null===this.moduleName?U(n,s):U(i,this.moduleName,s)},getGetterExport:function(e){var t,r=e,n=r.name,i=r.tree,a=r.moduleSpecifier
switch(i.type){case E:t=I("$__default")
break
case O:if(a){var o=this.getTempVarNameForModuleSpecifier(a)
t=M(o,i.lhs)}else t=I(i.lhs)
break
default:t=I(n)}return V(s,n,t)},getExportProperties:function(){var e=this
return this.exportVisitor_.namedExports.map(function(t){return e.getGetterExport(t)}).concat(this.exportVisitor_.namedExports.map(function(t){return e.getSetterExport(t)})).filter(function(e){return e})},getSetterExport:function(e){var t=e
t.name,t.tree,t.moduleSpecifier
return null},getExportObject:function(){var e=this,t=k(this.getExportProperties())
if(this.exportVisitor_.starExports.length){var r=this.exportVisitor_.starExports,n=r.map(function(t){return I(e.getTempVarNameForModuleSpecifier(t))}),i=P($traceurRuntime.spread([t],n))
return D(a,i)}return t},appendExportStatement:function(e){var t=this.getExportObject()
return e.push(G(o,t)),e},hasExports:function(){return this.exportVisitor_.hasExports()},hasStarExports:function(){return this.exportVisitor_.starExports.length>0},transformExportDeclaration:function(e){return this.exportVisitor_.visitAny(e),this.transformAny(e.declaration)},transformExportDefault:function(e){switch(e.expression.type){case j:case A:var t=e.expression.name,r=I(t.identifierToken)
return new f(null,[e.expression,G(c,r)])}return G(u,e.expression)},transformNamedExport:function(e){var t=e.moduleSpecifier
if(t){var r=this.transformAny(t),n=this.getTempVarNameForModuleSpecifier(t)
return $(x,n,r)}return new m(null)},transformModuleSpecifier:function(e){w(this.moduleName)
var t=e.token.processedValue,r=System.normalize(t,this.moduleName)
return D(l,r)},transformModuleDeclaration:function(e){this.moduleSpecifierKind_="module"
var t=this.transformAny(e.expression),r=e.binding.binding
return $(x,r,t)},transformImportedBinding:function(e){var t=new h(e.location,e.binding,null),r=new d(null,N("default"))
return new g(null,[new y(null,r,t)])},transformImportDeclaration:function(e){if(this.moduleSpecifierKind_="import",!e.importClause||e.importClause.type===R&&0===e.importClause.specifiers.length)return L(this.transformAny(e.moduleSpecifier))
var t=this.transformAny(e.importClause),r=this.transformAny(e.moduleSpecifier),n=$(x,t,r)
if(this.options_.transformOptions.destructuring||!this.options_.parseOptions.destructuring){var i=new z(this.identifierGenerator)
n=n.transform(i)}return n},transformImportSpecifierSet:function(e){var t=this.transformList(e.specifiers)
return new g(null,t)},transformImportSpecifier:function(e){var t=e.binding.binding,r=new h(t.location,t,null)
if(e.name){var n=new d(e.name.location,e.name)
return new y(e.location,n,r)}return r}},{},b),{get ModuleTransformer(){return Y}}}),System.registerModule("traceur@0.0.87/src/codegeneration/globalThis.js",[],function(){"use strict"
function e(){return t||(t=n(r)),t}var t,r=Object.freeze(Object.defineProperties(["Reflect.global"],{raw:{value:Object.freeze(["Reflect.global"])}})),n=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,i=e
return{get default(){return i}}}),System.registerModule("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/FindVisitor.js").FindVisitor,t=function(){$traceurRuntime.superConstructor(r).apply(this,arguments)},r=t
return $traceurRuntime.createClass(t,{visitFunctionDeclaration:function(){},visitFunctionExpression:function(){},visitSetAccessor:function(){},visitGetAccessor:function(){},visitPropertyMethodAssignment:function(){}},{},e),{get FindInFunctionScope(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/scopeContainsThis.js",[],function(){"use strict"
function e(e){var t=new r
return t.visitAny(e),t.found}var t=System.get("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js").FindInFunctionScope,r=function(){$traceurRuntime.superConstructor(n).apply(this,arguments)},n=r
$traceurRuntime.createClass(r,{visitThisExpression:function(){this.found=!0}},{},t)
var i=e
return{get default(){return i}}}),System.registerModule("traceur@0.0.87/src/codegeneration/AmdTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["__esModule: true"],{raw:{value:Object.freeze(["__esModule: true"])}})),t=Object.freeze(Object.defineProperties(["if (!"," || !",".__esModule)\n            "," = {default: ","}"],{raw:{value:Object.freeze(["if (!"," || !",".__esModule)\n            "," = {default: ","}"])}})),r=Object.freeze(Object.defineProperties(["function(",") {\n      ","\n    }"],{raw:{value:Object.freeze(["function(",") {\n      ","\n    }"])}})),n=Object.freeze(Object.defineProperties(["",".bind(",")"],{raw:{value:Object.freeze(["",".bind(",")"])}})),i=Object.freeze(Object.defineProperties(["define(",", ",", ",");"],{raw:{value:Object.freeze(["define(",", ",", ",");"])}})),s=Object.freeze(Object.defineProperties(["define(",", ",");"],{raw:{value:Object.freeze(["define(",", ",");"])}})),a=System.get("traceur@0.0.87/src/codegeneration/ModuleTransformer.js").ModuleTransformer,o=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),c=o.createIdentifierExpression,u=o.createStringLiteralToken,l=System.get("traceur@0.0.87/src/codegeneration/globalThis.js")["default"],p=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),f=p.parseExpression,h=p.parseStatement,m=p.parseStatements,d=p.parsePropertyDefinition,g=System.get("traceur@0.0.87/src/codegeneration/scopeContainsThis.js")["default"],y=function(e,t){var r=arguments[2]
$traceurRuntime.superConstructor(_).call(this,e,t,r),this.dependencies=[],this.anonymousModule=r&&!r.bundle&&r.moduleName!==!0},_=y
return $traceurRuntime.createClass(y,{getModuleName:function(e){return this.anonymousModule?null:e.moduleName},getExportProperties:function(){var t=$traceurRuntime.superGet(this,_.prototype,"getExportProperties").call(this)
return this.exportVisitor_.hasExports()&&t.push(d(e)),t},moduleProlog:function(){var e=this.dependencies.map(function(e){var r=c(e.local)
return h(t,r,r,r,r)})
return $traceurRuntime.superGet(this,_.prototype,"moduleProlog").call(this).concat(e)},wrapModule:function(e){var t=this.dependencies.map(function(e){return e.path}),a=this.dependencies.map(function(e){return e.local}),o=e.some(g),c=f(r,a,e)
return o&&(c=f(n,c,l())),this.moduleName?m(i,this.moduleName,t,c):m(s,t,c)},transformModuleSpecifier:function(e){var t=this.getTempIdentifier(),r=e.token.processedValue,n=u(r.replace(/\.js$/,""))
return this.dependencies.push({path:n,local:t}),c(t)}},{},a),{get AmdTransformer(){return y}}}),System.registerModule("traceur@0.0.87/src/staticsemantics/PropName.js",[],function(){"use strict"
function e(t){switch(t.type){case i:var l=t.literalToken
return l.isKeyword()||l.type===u?""+l:t.literalToken.processedValue+""
case r:return""
case o:return""+t.name
case s:case a:case n:case c:return e(t.name)}}var t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),r=t.COMPUTED_PROPERTY_NAME,n=t.GET_ACCESSOR,i=t.LITERAL_PROPERTY_NAME,s=t.PROPERTY_METHOD_ASSIGNMENT,a=t.PROPERTY_NAME_ASSIGNMENT,o=t.PROPERTY_NAME_SHORTHAND,c=t.SET_ACCESSOR,u=System.get("traceur@0.0.87/src/syntax/TokenType.js").IDENTIFIER
return{get propName(){return e}}}),System.registerModule("traceur@0.0.87/src/codegeneration/AnnotationsTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["Object.getOwnPropertyDescriptor(",")"],{raw:{value:Object.freeze(["Object.getOwnPropertyDescriptor(",")"])}})),t=Object.freeze(Object.defineProperties(["Object.defineProperty(",", ",",\n        {get: function() {return ","}});"],{raw:{value:Object.freeze(["Object.defineProperty(",", ",",\n        {get: function() {return ","}});"])}})),r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,n=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").CONSTRUCTOR,i=System.get("traceur@0.0.87/src/syntax/TokenType.js").STRING,s=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),a=s.AnonBlock,o=s.ClassDeclaration,c=s.ExportDeclaration,u=s.FormalParameter,l=s.FunctionDeclaration,p=s.GetAccessor,f=s.LiteralExpression,h=s.PropertyMethodAssignment,m=s.SetAccessor,d=System.get("traceur@0.0.87/src/staticsemantics/PropName.js").propName,g=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),y=g.createArgumentList,_=g.createArrayLiteralExpression,S=(g.createAssignmentStatement,g.createIdentifierExpression),v=g.createMemberExpression,b=g.createNewExpression,T=g.createStringLiteralToken,j=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),E=j.parseExpression,O=j.parseStatement,A=function(){this.className=null,this.isExport=!1,this.constructorParameters=[],this.annotations=[],this.metadata=[]}
$traceurRuntime.createClass(A,{get inClassScope(){return null!==this.className}},{})
var R=function(){$traceurRuntime.superConstructor(x).call(this),this.stack_=[new A]},x=R
return $traceurRuntime.createClass(R,{transformExportDeclaration:function(e){var t,r=this.pushAnnotationScope_()
r.isExport=!0,(t=r.annotations).push.apply(t,$traceurRuntime.spread(e.annotations))
var n=this.transformAny(e.declaration)
return(n!==e.declaration||e.annotations.length>0)&&(e=new c(e.location,n,[])),this.appendMetadata_(e)},transformClassDeclaration:function(e){var t,r,n=this.scope.isExport?this.scope.annotations:[],i=this.pushAnnotationScope_()
return i.className=e.name,(t=i.annotations).push.apply(t,$traceurRuntime.spread(n,e.annotations)),e=$traceurRuntime.superGet(this,x.prototype,"transformClassDeclaration").call(this,e),(r=i.metadata).unshift.apply(r,$traceurRuntime.spread(this.transformMetadata_(S(e.name),i.annotations,i.constructorParameters))),e.annotations.length>0&&(e=new o(e.location,e.name,e.superClass,e.elements,[],null)),this.appendMetadata_(e)},transformFunctionDeclaration:function(e){var t,r,n=this.scope.isExport?this.scope.annotations:[],i=this.pushAnnotationScope_()
return(t=i.annotations).push.apply(t,$traceurRuntime.spread(n,e.annotations)),(r=i.metadata).push.apply(r,$traceurRuntime.spread(this.transformMetadata_(S(e.name),i.annotations,e.parameterList.parameters))),e=$traceurRuntime.superGet(this,x.prototype,"transformFunctionDeclaration").call(this,e),e.annotations.length>0&&(e=new l(e.location,e.name,e.functionKind,e.parameterList,e.typeAnnotation,[],e.body)),this.appendMetadata_(e)},transformFormalParameter:function(e){return e.annotations.length>0&&(e=new u(e.location,e.parameter,e.typeAnnotation,[])),$traceurRuntime.superGet(this,x.prototype,"transformFormalParameter").call(this,e)},transformGetAccessor:function(e){var t
return this.scope.inClassScope?((t=this.scope.metadata).push.apply(t,$traceurRuntime.spread(this.transformMetadata_(this.transformAccessor_(e,this.scope.className,"get"),e.annotations,[]))),e.annotations.length>0&&(e=new p(e.location,e.isStatic,e.name,e.typeAnnotation,[],e.body)),$traceurRuntime.superGet(this,x.prototype,"transformGetAccessor").call(this,e)):$traceurRuntime.superGet(this,x.prototype,"transformGetAccessor").call(this,e)},transformSetAccessor:function(e){var t
if(!this.scope.inClassScope)return $traceurRuntime.superGet(this,x.prototype,"transformSetAccessor").call(this,e);(t=this.scope.metadata).push.apply(t,$traceurRuntime.spread(this.transformMetadata_(this.transformAccessor_(e,this.scope.className,"set"),e.annotations,e.parameterList.parameters)))
var r=this.transformAny(e.parameterList)
return(r!==e.parameterList||e.annotations.length>0)&&(e=new m(e.location,e.isStatic,e.name,r,[],e.body)),$traceurRuntime.superGet(this,x.prototype,"transformSetAccessor").call(this,e)},transformPropertyMethodAssignment:function(e){var t,r
if(!this.scope.inClassScope)return $traceurRuntime.superGet(this,x.prototype,"transformPropertyMethodAssignment").call(this,e)
e.isStatic||d(e)!==n?(r=this.scope.metadata).push.apply(r,$traceurRuntime.spread(this.transformMetadata_(this.transformPropertyMethod_(e,this.scope.className),e.annotations,e.parameterList.parameters))):((t=this.scope.annotations).push.apply(t,$traceurRuntime.spread(e.annotations)),this.scope.constructorParameters=e.parameterList.parameters)
var i=this.transformAny(e.parameterList)
return(i!==e.parameterList||e.annotations.length>0)&&(e=new h(e.location,e.isStatic,e.functionKind,e.name,i,e.typeAnnotation,[],e.body,e.debugName)),$traceurRuntime.superGet(this,x.prototype,"transformPropertyMethodAssignment").call(this,e)},appendMetadata_:function(e){var t,r=this.stack_.pop().metadata
return r.length>0&&(this.scope.isExport?(t=this.scope.metadata).push.apply(t,$traceurRuntime.spread(r)):e=new a(null,$traceurRuntime.spread([e],r))),e},transformClassReference_:function(e,t){var r=S(t)
return e.isStatic||(r=v(r,"prototype")),r},transformPropertyMethod_:function(e,t){return v(this.transformClassReference_(e,t),e.name.literalToken)},transformAccessor_:function(t,r,n){var i=y([this.transformClassReference_(t,r),this.createLiteralStringExpression_(t.name)]),s=E(e,i)
return v(s,n)},transformParameters_:function(e){var t=this,r=!1
return e=e.map(function(e){var n,i=[]
return e.typeAnnotation&&i.push(t.transformAny(e.typeAnnotation)),e.annotations&&e.annotations.length>0&&(n=i).push.apply(n,$traceurRuntime.spread(t.transformAnnotations_(e.annotations))),i.length>0?(r=!0,_(i)):_([])}),r?e:[]},transformAnnotations_:function(e){return e.map(function(e){return b(e.name,e.args)})},transformMetadata_:function(e,t,r){var n=[]
return null!==t&&(t=this.transformAnnotations_(t),t.length>0&&n.push(this.createDefinePropertyStatement_(e,"annotations",_(t)))),null!==r&&(r=this.transformParameters_(r),r.length>0&&n.push(this.createDefinePropertyStatement_(e,"parameters",_(r)))),n},createDefinePropertyStatement_:function(e,r,n){return O(t,e,r,n)},createLiteralStringExpression_:function(e){var t=e.literalToken
return e.literalToken.type!==i&&(t=T(e.literalToken.value)),new f(null,t)},get scope(){return this.stack_[this.stack_.length-1]},pushAnnotationScope_:function(){var e=new A
return this.stack_.push(e),e}},{},r),{get AnnotationsTransformer(){return R}}}),System.registerModule("traceur@0.0.87/src/semantics/VariableBinder.js",[],function(){"use strict"
function e(e){var t=arguments[1],n=new r(null)
n.visitAny(e)
var i=n.getScopeForTree(e),s=i.getLexicalBindingNames()
if(!t)return s
var a=i.getVariableBindingNames()
return a.forEach(function(e){return s.add(e)}),s}function t(e){var t=new r(null)
t.visitAny(e)
var n=t.getScopeForTree(e)
return n.getAllBindingNames()}var r=System.get("traceur@0.0.87/src/semantics/ScopeChainBuilder.js").ScopeChainBuilder
return{get variablesInBlock(){return e},get variablesInFunction(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ScopeTransformer.js",[],function(){"use strict"
function e(e){var t=new a
if(null!==e&&e.type===o&&e.declarationType!==c)for(var r=new f(t),n=0;n<e.declarations.length;n++)r.visitAny(e.declarations[n].lvalue)
return t}var t=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),r=t.ARGUMENTS,n=t.THIS,i=System.get("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js").FindInFunctionScope,s=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,a=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,o=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js").VARIABLE_DECLARATION_LIST,c=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,u=System.get("traceur@0.0.87/src/semantics/VariableBinder.js"),l=u.variablesInBlock,p=u.variablesInFunction,f=function(e){$traceurRuntime.superConstructor(h).call(this),this.names=e},h=f
$traceurRuntime.createClass(f,{visitBindingIdentifier:function(e){this.names.add(e.getStringValue())}},{},i)
var m=function(e){$traceurRuntime.superConstructor(d).call(this),this.varName_=e},d=m
return $traceurRuntime.createClass(m,{transformBlock:function(e){return l(e).has(this.varName_)?e:$traceurRuntime.superGet(this,d.prototype,"transformBlock").call(this,e)},sameTreeIfNameInLoopInitializer_:function(t){var r=e(t.initializer)
return r.has(this.varName_)?t:null},transformForStatement:function(e){return this.sameTreeIfNameInLoopInitializer_(e)||$traceurRuntime.superGet(this,d.prototype,"transformForStatement").call(this,e)},transformForInStatement:function(e){return this.sameTreeIfNameInLoopInitializer_(e)||$traceurRuntime.superGet(this,d.prototype,"transformForInStatement").call(this,e)},transformForOfStatement:function(e){return this.sameTreeIfNameInLoopInitializer_(e)||$traceurRuntime.superGet(this,d.prototype,"transformForOfStatement").call(this,e)},transformForOnStatement:function(e){return this.sameTreeIfNameInLoopInitializer_(e)||$traceurRuntime.superGet(this,d.prototype,"transformForOnStatement").call(this,e)},transformThisExpression:function(e){return this.varName_!==n?e:$traceurRuntime.superGet(this,d.prototype,"transformThisExpression").call(this,e)},transformFunctionDeclaration:function(e){return this.getDoNotRecurse(e)?e:$traceurRuntime.superGet(this,d.prototype,"transformFunctionDeclaration").call(this,e)},transformFunctionExpression:function(e){return this.getDoNotRecurse(e)?e:$traceurRuntime.superGet(this,d.prototype,"transformFunctionExpression").call(this,e)},transformPropertyMethodAssignment:function(e){return this.getDoNotRecurse(e)?e:$traceurRuntime.superGet(this,d.prototype,"transformPropertyMethodAssignment").call(this,e)},getDoNotRecurse:function(e){return this.varName_===r||this.varName_===n||p(e).has(this.varName_)},transformCatch:function(e){return e.binding.isPattern()||this.varName_!==e.binding.identifierToken.value?$traceurRuntime.superGet(this,d.prototype,"transformCatch").call(this,e):e}},{},s),{get ScopeTransformer(){return m}}}),System.registerModule("traceur@0.0.87/src/codegeneration/AlphaRenamer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/ScopeTransformer.js").ScopeTransformer,t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),r=t.FunctionDeclaration,n=t.FunctionExpression,i=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").THIS,s=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js").createIdentifierExpression,a=function(e,t){$traceurRuntime.superConstructor(o).call(this,e),this.newName_=t},o=a
return $traceurRuntime.createClass(a,{transformIdentifierExpression:function(e){return this.varName_===e.identifierToken.value?s(this.newName_):e},transformThisExpression:function(e){return this.varName_!==i?e:s(this.newName_)},transformFunctionDeclaration:function(e){return this.varName_===e.name&&(e=new r(e.location,this.newName_,e.functionKind,e.parameterList,e.typeAnnotation,e.annotations,e.body)),$traceurRuntime.superGet(this,o.prototype,"transformFunctionDeclaration").call(this,e)},transformFunctionExpression:function(e){return this.varName_===e.name&&(e=new n(e.location,this.newName_,e.functionKind,e.parameterList,e.typeAnnotation,e.annotations,e.body)),$traceurRuntime.superGet(this,o.prototype,"transformFunctionExpression").call(this,e)}},{rename:function(e,t,r){return new o(t,r).transformAny(e)}},e),{get AlphaRenamer(){return a}}}),System.registerModule("traceur@0.0.87/src/codegeneration/FindThisOrArguments.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").ARGUMENTS,t=System.get("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js").FindInFunctionScope,r=function(){$traceurRuntime.superConstructor(n).call(this),this.foundThis=!1,this.foundArguments=!1},n=r
return $traceurRuntime.createClass(r,{visitThisExpression:function(){this.foundThis=!0,this.found=this.foundArguments},visitIdentifierExpression:function(t){t.identifierToken.value===e&&(this.foundArguments=!0,this.found=this.foundThis)}},{},t),{get FindThisOrArguments(){return r}}}),System.registerModule("traceur@0.0.87/src/codegeneration/alphaRenameThisAndArguments.js",[],function(){"use strict"
function e(e,t){var a=new s
if(a.visitAny(t),a.foundArguments){var o=e.addTempVarForArguments()
t=i.rename(t,r,o)}if(a.foundThis){var c=e.addTempVarForThis()
t=i.rename(t,n,c)}return t}var t=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),r=t.ARGUMENTS,n=t.THIS,i=System.get("traceur@0.0.87/src/codegeneration/AlphaRenamer.js").AlphaRenamer,s=System.get("traceur@0.0.87/src/codegeneration/FindThisOrArguments.js").FindThisOrArguments,a=e
return{get default(){return a}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ComprehensionTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/alphaRenameThisAndArguments.js")["default"],t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").FunctionExpression,r=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,n=System.get("traceur@0.0.87/src/syntax/TokenType.js"),i=n.LET,s=n.STAR,a=n.VAR,o=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),c=o.COMPREHENSION_FOR,u=o.COMPREHENSION_IF,l=System.get("traceur@0.0.87/src/syntax/Token.js").Token,p=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),f=p.createCallExpression,h=p.createEmptyParameterList,m=p.createForOfStatement,d=p.createFunctionBody,g=p.createIfStatement,y=p.createParenExpression,_=p.createVariableDeclarationList,S=function(e,t,r){$traceurRuntime.superConstructor(v).call(this,e),this.options_=r},v=S
return $traceurRuntime.createClass(S,{transformComprehension:function(r,n,o){for(var p=arguments[3],S=arguments[4],v=o||!this.options_.blockBinding?a:i,b=p?[p]:[],T=r.comprehensionList.length-1;T>=0;T--){var j=r.comprehensionList[T]
switch(j.type){case u:var E=this.transformAny(j.expression)
n=g(E,n)
break
case c:var O=this.transformAny(j.left),A=this.transformAny(j.iterator),R=_(v,O,null)
n=m(R,A,n)
break
default:throw Error("Unreachable.")}}n=e(this,n),b.push(n),S&&b.push(S)
var x=o?new l(s,null):null,w=new t(null,null,x,h(),null,[],d(b))
return y(f(w))}},{},r),{get ComprehensionTransformer(){return S}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ArrayComprehensionTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["var "," = 0, "," = [];"],{raw:{value:Object.freeze(["var "," = 0, "," = [];"])}})),t=Object.freeze(Object.defineProperties(["","[","++] = ",";"],{raw:{value:Object.freeze(["","[","++] = ",";"])}})),r=Object.freeze(Object.defineProperties(["return ",";"],{raw:{value:Object.freeze(["return ",";"])}})),n=System.get("traceur@0.0.87/src/codegeneration/ComprehensionTransformer.js").ComprehensionTransformer,i=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js").createIdentifierExpression,s=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,a=function(){$traceurRuntime.superConstructor(o).apply(this,arguments)},o=a
return $traceurRuntime.createClass(a,{transformArrayComprehension:function(n){this.pushTempScope()
var a=this.transformAny(n.expression),o=i(this.getTempIdentifier()),c=i(this.getTempIdentifier()),u=s(e,o,c),l=s(t,c,o,a),p=s(r,c),f=null
return c=this.transformComprehension(n,l,f,u,p),this.popTempScope(),c}},{},n),{get ArrayComprehensionTransformer(){return a}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ArrowFunctionTransformer.js",[],function(){"use strict"
function e(e){return e.type!==l?g([S(e)]):e}var t=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),r=t.ARGUMENTS,n=t.CONSTRUCTOR,i=t.THIS,s=System.get("traceur@0.0.87/src/codegeneration/AlphaRenamer.js").AlphaRenamer,a=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").FunctionExpression,o=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,c=System.get("traceur@0.0.87/src/codegeneration/alphaRenameThisAndArguments.js")["default"],u=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),l=u.FUNCTION_BODY,p=u.LITERAL_PROPERTY_NAME,f=System.get("traceur@0.0.87/src/codegeneration/FindThisOrArguments.js").FindThisOrArguments,h=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),m=h.createAssignmentExpression,d=h.createCommaExpression,g=h.createFunctionBody,y=h.createIdentifierExpression,_=h.createParenExpression,S=h.createReturnStatement,v=h.createThisExpression,b=function(e){$traceurRuntime.superConstructor(T).call(this,e),this.inDerivedClass_=!1,this.inConstructor_=!1},T=b
return $traceurRuntime.createClass(b,{transformArrowFunctionExpression:function(e){return this.inDerivedClass_&&this.inConstructor_?this.transformUsingCommaExpression_(e):this.transformUsingTempVar_(e)},transformUsingCommaExpression_:function(t){var n,o,c=new f
c.visitAny(t),c.foundArguments&&(n=this.addTempVar(),t=s.rename(t,r,n)),c.foundThis&&(o=this.addTempVar(),t=s.rename(t,i,o))
var u=this.transformAny(t.parameterList),l=this.transformAny(t.body)
l=e(l)
var p=new a(t.location,null,t.functionKind,u,null,[],l),h=[]
return n&&h.push(m(y(n),y(r))),o&&h.push(m(y(o),v())),0===h.length?_(p):(h.push(p),_(d(h)))},transformUsingTempVar_:function(t){var r=c(this,t),n=this.transformAny(r.parameterList),i=this.transformAny(r.body)
i=e(i)
var s=new a(t.location,null,t.functionKind,n,null,[],i)
return _(s)},transformClassExpression:function(e){var t=this.inDerivedClass_
this.inDerivedClass_=null!==e.superClass
var r=$traceurRuntime.superGet(this,T.prototype,"transformClassExpression").call(this,e)
return this.inDerivedClass_=t,r},transformClassDeclaration:function(e){var t=this.inDerivedClass_
this.inDerivedClass_=null!==e.superClass
var r=$traceurRuntime.superGet(this,T.prototype,"transformClassDeclaration").call(this,e)
return this.inDerivedClass_=t,r},transformPropertyMethodAssignment:function(e){var t=this.inConstructor_
this.inConstructor_=!e.isStatic&&null===e.functionKind&&e.name.type===p&&e.name.literalToken.value===n
var r=$traceurRuntime.superGet(this,T.prototype,"transformPropertyMethodAssignment").call(this,e)
return this.inConstructor_=t,r}},{transform:function(t,r){r=c(t,r)
var n=e(r.body)
return new a(r.location,null,r.functionKind,r.parameterList,null,[],n)}},o),{get ArrowFunctionTransformer(){return b}}}),System.registerModule("traceur@0.0.87/src/codegeneration/AsyncGeneratorTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["\n        if (",".inReturn) {\n          throw undefined;\n        }"],{raw:{value:Object.freeze(["\n        if (",".inReturn) {\n          throw undefined;\n        }"])}})),t=Object.freeze(Object.defineProperties(["\n        return $traceurRuntime.createAsyncGeneratorInstance(\n            async function (",") {\n                ","\n            }, ",");"],{raw:{value:Object.freeze(["\n        return $traceurRuntime.createAsyncGeneratorInstance(\n            async function (",") {\n                ","\n            }, ",");"])}})),r=System.get("traceur@0.0.87/src/codegeneration/alphaRenameThisAndArguments.js")["default"],n=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),i=n.createArgumentList,s=n.createBlock,a=n.createFunctionBody,o=n.createIdentifierExpression,c=n.createMemberExpression,u=n.createThisExpression,l=n.createVariableDeclaration,p=n.createVariableDeclarationList,f=n.createVariableStatement,h=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,m=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,d=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),g=d.AwaitExpression,y=d.Block,_=d.CallExpression,S=d.Catch,v=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").ARGUMENTS,b=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,T=function(e){$traceurRuntime.superConstructor(j).call(this,e),this.variableDeclarations_=[],this.ctx_=o(this.getTempIdentifier())},j=T
return $traceurRuntime.createClass(T,{transformYieldExpression:function(e){var t=i([e.expression])
return e.isYieldFor?new g(e.location,new _(null,c(this.ctx_,"yieldFor"),t)):new _(e.location,c(this.ctx_,"yield"),t)},transformCatch:function(t){var r=t.catchBody
return r=new y(r.location,$traceurRuntime.spread([h(e,this.ctx_)],r.statements)),new S(t.location,t.binding,r)},transformFunctionDeclaration:function(e){return e},transformFunctionExpression:function(e){return e},transformSetAccessor:function(e){return e},transformGetAccessor:function(e){return e},transformPropertyMethodAssignment:function(e){return e},transformArrowFunctionExpression:function(e){return e},transformAsyncGeneratorBody_:function(e,n){e=this.transformAny(e),e=r(this,e)
var i=[]
this.variableDeclarations_.length>0&&i.push(f(p(b,this.variableDeclarations_)))
var o=s(e.statements)
return i.push(h(t,this.ctx_,o,n)),a(i)},addTempVarForArguments:function(){var e=this.getTempIdentifier()
return this.variableDeclarations_.push(l(e,o(v))),e},addTempVarForThis:function(){var e=this.getTempIdentifier()
return this.variableDeclarations_.push(l(e,u())),e}},{transformAsyncGeneratorBody:function(e,t,r,n){return new j(e,t).transformAsyncGeneratorBody_(r,n)}},m),{get AsyncGeneratorTransformer(){return T}}}),System.registerModule("traceur@0.0.87/src/codegeneration/AsyncGeneratorTransformPass.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["$traceurRuntime.initAsyncGeneratorFunction(",")"],{raw:{value:Object.freeze(["$traceurRuntime.initAsyncGeneratorFunction(",")"])}})),t=Object.freeze(Object.defineProperties(["var "," = ",""],{raw:{value:Object.freeze(["var "," = ",""])}})),r=Object.freeze(Object.defineProperties(["$traceurRuntime.initAsyncGeneratorFunction(",")"],{raw:{value:Object.freeze(["$traceurRuntime.initAsyncGeneratorFunction(",")"])}})),n=System.get("traceur@0.0.87/src/codegeneration/AsyncGeneratorTransformer.js").AsyncGeneratorTransformer,i=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,s=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),a=s.AnonBlock,o=s.FunctionDeclaration,c=s.FunctionExpression,u=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),l=u.createBindingIdentifier,p=u.createIdentifierExpression,f=u.createIdentifierToken,h=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),m=h.parseExpression,d=h.parseStatement,g=function(e,t,r){$traceurRuntime.superConstructor(y).call(this,e),this.transformOptions_=r.transformOptions,this.inBlock_=!1},y=g
return $traceurRuntime.createClass(g,{needsTransform_:function(e){return this.transformOptions_.asyncGenerators&&e.isAsyncGenerator()},transformFunctionDeclaration:function(r){if(!this.needsTransform_(r))return $traceurRuntime.superGet(this,y.prototype,"transformFunctionDeclaration").call(this,r)
var n=p(r.name.identifierToken),i=m(e,n),s=p(this.inBlock_?this.getTempIdentifier():this.addTempVar(i)),c=this.transformFunction_(r,o,s)
return this.inBlock_?new a(null,[c,d(t,s,i)]):c},transformFunctionExpression:function(e){if(!this.needsTransform_(e))return $traceurRuntime.superGet(this,y.prototype,"transformFunctionExpression").call(this,e)
var t
e.name?t=e.name.identifierToken:(t=f(this.getTempIdentifier()),e=new c(e.location,l(t),e.functionKind,e.parameterList,e.typeAnnotation,e.annotations,e.body))
var n=this.transformFunction_(e,c,p(t))
return m(r,n)},transformFunction_:function(e,t,r){var i=$traceurRuntime.superGet(this,y.prototype,"transformAny").call(this,e.body)
i=n.transformAsyncGeneratorBody(this.identifierGenerator,this.reporter_,i,r)
var s=null
return new t(e.location,e.name,s,e.parameterList,e.typeAnnotation||null,e.annotations||null,i)},transformBlock:function(e){var t=this.inBlock_
this.inBlock_=!0
var r=$traceurRuntime.superGet(this,y.prototype,"transformBlock").call(this,e)
return this.inBlock_=t,r}},{},i),{get AsyncGeneratorTransformPass(){return g}}}),System.registerModule("traceur@0.0.87/src/codegeneration/FindIdentifiers.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/semantics/ScopeVisitor.js").ScopeVisitor,t=function(e,t){$traceurRuntime.superConstructor(r).call(this),this.filterFunction_=t,this.found_=!1,this.visitAny(e)},r=t
return $traceurRuntime.createClass(t,{visitIdentifierExpression:function(e){this.filterFunction_(e.identifierToken.value,this.scope.tree)&&(this.found=!0)},get found(){return this.found_},set found(e){e&&(this.found_=!0)},visitAny:function(e){!this.found_&&e&&e.visit(this)},visitList:function(e){if(e)for(var t=0;!this.found_&&t<e.length;t++)this.visitAny(e[t])}},{},e),{get FindIdentifiers(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/FnExtractAbruptCompletions.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["if (typeof ",' === "object")\n            return ',".v;"],{raw:{value:Object.freeze(["if (typeof ",' === "object")\n            return ',".v;"])}})),t=Object.freeze(Object.defineProperties(["return ",";"],{raw:{value:Object.freeze(["return ",";"])}})),r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,n=System.get("traceur@0.0.87/src/codegeneration/alphaRenameThisAndArguments.js")["default"],i=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,s=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),a=s.AnonBlock,o=s.BreakStatement,c=s.ContinueStatement,u=s.FormalParameterList,l=s.FunctionExpression,p=s.ReturnStatement,f=s.YieldExpression,h=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),m=h.createArgumentList,d=h.createAssignmentStatement,g=h.createAssignmentExpression,y=h.createBlock,_=h.createCallExpression,S=h.createCaseClause,v=h.createDefaultClause,b=h.createExpressionStatement,T=h.createFunctionBody,j=(h.createFunctionExpression,h.createIdentifierExpression),E=h.createNumberLiteral,O=h.createObjectLiteral,A=h.createSwitchStatement,R=h.createThisExpression,x=h.createVariableDeclaration,w=h.createVariableDeclarationList,C=h.createVariableStatement,P=h.createVoid0,L=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").ARGUMENTS,I=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,N=System.get("traceur@0.0.87/src/syntax/Token.js").Token,M=System.get("traceur@0.0.87/src/syntax/TokenType.js"),k=M.STAR,F=M.VAR,$=function(e,t){$traceurRuntime.superConstructor(B).call(this),this.idGenerator_=e,this.inLoop_=0,this.inBreakble_=0,this.variableDeclarations_=[],this.extractedStatements_=[],this.requestParentLabel_=t,this.labelledStatements_=new I},B=$
return $traceurRuntime.createClass($,{createIIFE:function(t,r,s,a){t=this.transformAny(t),t=n(this,t)
var o=this.idGenerator_.generateUniqueIdentifier(),c=a?new N(k,null):null,p=new l(null,null,c,new u(null,r),null,[],T(t.statements||[t]))
this.variableDeclarations_.push(x(o,p))
var h=_(j(o),m(s))
a&&(h=new f(null,h,!0))
var d=null
if(this.extractedStatements_.length||this.hasReturns){var O=j(this.idGenerator_.generateUniqueIdentifier())
this.variableDeclarations_.push(x(O,null))
var R
if(this.hasReturns&&(R=i(e,O,O)),this.extractedStatements_.length){var P=this.extractedStatements_.map(function(e,t){return S(E(t),[e])})
R&&P.push(v([R])),d=y([b(g(O,h)),A(O,P)])}else d=y([b(g(O,h)),R])}else d=y([b(h)])
return{variableStatements:C(w(F,this.variableDeclarations_)),loopBody:d}},addTempVarForArguments:function(){var e=this.idGenerator_.generateUniqueIdentifier()
return this.variableDeclarations_.push(x(e,j(L))),e},addTempVarForThis:function(){var e=this.idGenerator_.generateUniqueIdentifier()
return this.variableDeclarations_.push(x(e,R())),e},transformAny:function(e){return e&&(e.isBreakableStatement()&&this.inBreakble_++,e.isIterationStatement()&&this.inLoop_++,e=$traceurRuntime.superGet(this,B.prototype,"transformAny").call(this,e),e.isBreakableStatement()&&this.inBreakble_--,e.isIterationStatement()&&this.inLoop_--),e},transformReturnStatement:function(e){return this.hasReturns=!0,new p(e.location,O({v:e.expression||P()}))},transformAbruptCompletion_:function(e){this.extractedStatements_.push(e)
var r=this.extractedStatements_.length-1
return i(t,r)},transformBreakStatement:function(e){if(e.name){if(this.labelledStatements_.has(e.name.value))return $traceurRuntime.superGet(this,B.prototype,"transformBreakStatement").call(this,e)}else{if(this.inBreakble_)return $traceurRuntime.superGet(this,B.prototype,"transformBreakStatement").call(this,e)
e=new o(e.location,this.requestParentLabel_())}return this.transformAbruptCompletion_(e)},transformContinueStatement:function(e){if(e.name){if(this.labelledStatements_.has(e.name.value))return $traceurRuntime.superGet(this,B.prototype,"transformContinueStatement").call(this,e)}else{if(this.inLoop_)return $traceurRuntime.superGet(this,B.prototype,"transformContinueStatement").call(this,e)
e=new c(e.location,this.requestParentLabel_())}return this.transformAbruptCompletion_(e)},transformLabelledStatement:function(e){return this.labelledStatements_.add(e.name.value),$traceurRuntime.superGet(this,B.prototype,"transformLabelledStatement").call(this,e)},transformVariableStatement:function(e){var t=this,r=this
if(e.declarations.declarationType===F){var n=[]
return e.declarations.declarations.forEach(function(e){var i=e.lvalue.getStringValue(),s=$traceurRuntime.superGet(t,B.prototype,"transformAny").call(t,e.initializer)
r.variableDeclarations_.push(x(i,null)),n.push(d(j(i),s))}),new a(null,n)}return $traceurRuntime.superGet(this,B.prototype,"transformVariableStatement").call(this,e)},transformFunctionDeclaration:function(e){return e},transformFunctionExpression:function(e){return e},transformSetAccessor:function(e){return e},transformGetAccessor:function(e){return e},transformPropertyMethodAssignment:function(e){return e},transformArrowFunctionExpression:function(e){return e}},{createIIFE:function(e,t,r,n,i,s){return new B(e,i).createIIFE(t,r,n,s)}},r),{get FnExtractAbruptCompletions(){return $}}}),System.registerModule("traceur@0.0.87/src/codegeneration/BlockBindingTransformer.js",[],function(){"use strict"
function e(e,t){if(null===t)return!1
var r=t.type
return r!==o&&r!==c?!0:t.initializer.declarations[0]!==e}function t(e,t){return e.forEach(function(e){t=n.rename(t,e.oldName,e.newName)}),t}var r=Object.freeze(Object.defineProperties(["void 0"],{raw:{value:Object.freeze(["void 0"])}})),n=System.get("traceur@0.0.87/src/codegeneration/AlphaRenamer.js").AlphaRenamer,i=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),s=i.ANON_BLOCK,a=i.BINDING_IDENTIFIER,o=i.FOR_IN_STATEMENT,c=i.FOR_OF_STATEMENT,u=i.VARIABLE_DECLARATION_LIST,l=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),p=l.AnonBlock,f=l.BindingElement,h=l.BindingIdentifier,m=l.Block,d=l.Catch,g=l.DoWhileStatement,y=l.ForInStatement,_=l.ForStatement,S=l.FormalParameter,v=l.FunctionBody,b=l.FunctionExpression,T=l.LabelledStatement,j=l.LiteralPropertyName,E=l.Module,O=l.ObjectPatternField,A=l.Script,R=l.VariableDeclaration,x=l.VariableDeclarationList,w=l.VariableStatement,C=l.WhileStatement,P=System.get("traceur@0.0.87/src/syntax/IdentifierToken.js").IdentifierToken,L=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,I=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,N=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),M=N.createBindingIdentifier,k=N.createIdentifierExpression,F=N.createIdentifierToken,$=System.get("traceur@0.0.87/src/codegeneration/FindIdentifiers.js").FindIdentifiers,B=System.get("traceur@0.0.87/src/codegeneration/FindVisitor.js").FindVisitor,D=System.get("traceur@0.0.87/src/codegeneration/FnExtractAbruptCompletions.js").FnExtractAbruptCompletions,V=System.get("traceur@0.0.87/src/semantics/ScopeChainBuilderWithReferences.js").ScopeChainBuilderWithReferences,G=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,U=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,z=function(e,t,r){var n=arguments[3],i=arguments[4]
$traceurRuntime.superConstructor(H).call(this),this.idGenerator_=e,this.reporter_=t,n||(n=new V(t),n.visitAny(r)),this.scopeBuilder_=n,this.labelledLoops_=new Map,this.prependStatement_=[],this.prependBlockStatement_=[],this.blockRenames_=[],this.rootTree_=r,i?this.scope_=i:this.pushScope(r),this.usedVars_=this.scope_.getAllBindingNames(),this.maybeRename_=!1,this.inObjectPattern_=!1,this.currentLoopTree_=null},H=z
$traceurRuntime.createClass(z,{getVariableName_:function(e){var t=e.lvalue
if(t.type===a)return t.getStringValue()
throw Error("Unexpected destructuring declaration found.")},flushRenames:function(e){return e=t(this.blockRenames_,e),this.blockRenames_.length=0,e},pushScope:function(e){var t=this.scopeBuilder_.getScopeForTree(e)
if(!t)throw Error("BlockBindingTransformer tree with no scope")
return this.scope_&&(this.scope_.blockBindingRenames=this.blockRenames_),this.scope_=t,this.blockRenames_=[],t},popScope:function(e){if(this.scope_!==e)throw Error("BlockBindingTransformer scope mismatch")
this.scope_=e.parent,this.blockRenames_=this.scope_&&this.scope_.blockBindingRenames||[]},revisitTreeForScopes:function(e){this.scopeBuilder_.scope=this.scope_,this.scopeBuilder_.visitAny(e),this.scopeBuilder_.scope=null},needsRename_:function(e){if(this.usedVars_.has(e))return!0
var t=this.scope_,r=t.parent
if(!r||t.isVarScope)return!1
var n=t.getVarScope()
if(n&&n.hasFreeVariable(e))return!0
var i=r.getBindingByName(e)
if(!i)return!1
var s=t.getBindingByName(e)
return s.tree===i.tree?!1:!0},newNameFromOrig:function(e,t){var r
return this.needsRename_(e)?(r=e+this.idGenerator_.generateUniqueIdentifier(),t.push(new Y(e,r))):(this.usedVars_.add(e),r=e),r},transformFunctionBody:function(e){if(e!==this.rootTree_&&this.rootTree_){var t=new H(this.idGenerator_,this.reporter_,e,this.scopeBuilder_,this.scope_),r=t.transformAny(e)
if(r===e)return e
e=new v(e.location,r.statements)}else if(e=$traceurRuntime.superGet(this,H.prototype,"transformFunctionBody").call(this,e),this.prependStatement_.length||this.blockRenames_.length){var n=U.apply(void 0,$traceurRuntime.spread([e.statements],this.prependStatement_))
e=new v(e.location,n),e=this.flushRenames(e)}return e},transformScript:function(e){if(e!==this.rootTree_&&this.rootTree_){var t=new H(this.idGenerator_,this.reporter_,e,this.scopeBuilder_),r=t.transformAny(e)
if(r===e)return e
e=new A(e.location,r.scriptItemList,e.moduleName)}else if(e=$traceurRuntime.superGet(this,H.prototype,"transformScript").call(this,e),this.prependStatement_.length||this.blockRenames_.length){var n=U.apply(void 0,$traceurRuntime.spread([e.scriptItemList],this.prependStatement_))
e=new A(e.location,n,e.moduleName),e=this.flushRenames(e)}return e},transformModule:function(e){if(e!==this.rootTree_&&this.rootTree_){var t=new H(this.idGenerator_,this.reporter_,e,this.scopeBuilder_),r=t.transformAny(e)
if(r===e)return e
e=new E(e.location,r.scriptItemList,e.moduleName)}else if(e=$traceurRuntime.superGet(this,H.prototype,"transformModule").call(this,e),this.prependStatement_.length||this.blockRenames_.length){var n=U.apply(void 0,$traceurRuntime.spread([e.scriptItemList],this.prependStatement_))
e=new E(e.location,n,e.moduleName),e=this.flushRenames(e)}return e},transformVariableStatement:function(e){var t=this.transformAny(e.declarations)
return t.type===s?t:t===e.declarations?e:new w(e.location,t)},transformVariableDeclarationList:function(e){if(e.declarationType===I)return $traceurRuntime.superGet(this,H.prototype,"transformVariableDeclarationList").call(this,e)
this.maybeRename_=!this.scope_.isVarScope
var t=this.transformList(e.declarations)
return this.maybeRename_=!1,new x(e.location,I,t)},transformVariableDeclaration:function(t){var n=this.maybeRename_,i=this.transformAny(t.lvalue)
this.maybeRename_=!1
var s=null
return t.initializer?s=this.transformAny(t.initializer):e(t,this.currentLoopTree_)&&(s=G(r)),this.maybeRename_=n,t.lvalue===i&&t.initializer===s?t:new R(t.location,i,t.typeAnnotation,s)},transformBindingIdentifier:function(e){if(this.maybeRename_){var t=e.getStringValue(),r=this.newNameFromOrig(t,this.blockRenames_)
if(t===r)return e
var n=new P(e.location,r),i=new h(e.location,n)
return this.scope_.renameBinding(t,i,I,this.reporter_),i}return $traceurRuntime.superGet(this,H.prototype,"transformBindingIdentifier").call(this,e)},transformBindingElement:function(e){var t=this.maybeRename_,r=this.inObjectPattern_,n=this.transformAny(e.binding)
this.maybeRename_=!1,this.inObjectPattern_=!1
var i=this.transformAny(e.initializer)
if(this.maybeRename_=t,this.inObjectPattern_=r,e.binding===n&&e.initializer===i)return e
var s=new f(e.location,n,i)
return this.inObjectPattern_&&e.binding!==n&&e.binding.type===a?new O(e.location,new j(e.location,e.binding.identifierToken),s):s},transformObjectPattern:function(e){var t=this.inObjectPattern_
this.inObjectPattern_=!0
var r=$traceurRuntime.superGet(this,H.prototype,"transformObjectPattern").call(this,e)
return this.inObjectPattern_=t,r},transformObjectPatternField:function(e){var t=this.transformAny(e.name)
this.inObjectPattern_=!1
var r=this.transformAny(e.element)
return this.inObjectPattern_=!0,e.name===t&&e.element===r?e:new O(e.location,t,r)},transformBlock:function(e){var t=this.pushScope(e),r=this.prependBlockStatement_
return this.prependBlockStatement_=[],e=$traceurRuntime.superGet(this,H.prototype,"transformBlock").call(this,e),this.prependBlockStatement_.length&&(e=new m(e.location,U.apply(void 0,$traceurRuntime.spread([e.statements],this.prependBlockStatement_)))),this.prependBlockStatement_=r,e=this.flushRenames(e),this.popScope(t),e},transformCatch:function(e){var t=this.pushScope(e),r=this.transformAny(e.binding),n=this.transformList(e.catchBody.statements)
return(r!==e.binding||n!==e.catchBody.statements)&&(e=new d(e.location,r,new m(e.catchBody.location,n))),e=this.flushRenames(e),this.popScope(t),e},transformFunctionForScope_:function(e,t){var r=this.pushScope(t)
return t=e(),t=this.flushRenames(t),this.popScope(r),t},transformGetAccessor:function(e){var t=this
return this.transformFunctionForScope_(function(){return $traceurRuntime.superGet(t,H.prototype,"transformGetAccessor").call(t,e)},e)},transformSetAccessor:function(e){var t=this
return this.transformFunctionForScope_(function(){return $traceurRuntime.superGet(t,H.prototype,"transformSetAccessor").call(t,e)},e)},transformFunctionExpression:function(e){var t=this
return this.transformFunctionForScope_(function(){return $traceurRuntime.superGet(t,H.prototype,"transformFunctionExpression").call(t,e)},e)},transformFunctionDeclaration:function(e){var t=this
if(!this.scope_.isVarScope){var r=e.name.getStringValue(),n=this.newNameFromOrig(r,this.blockRenames_),i=new b(e.location,null,e.functionKind,e.parameterList,e.typeAnnotation,e.annotations,e.body)
this.revisitTreeForScopes(i),i=this.transformAny(i)
var s=M(n),a=new w(e.location,new x(e.location,I,[new R(e.location,s,null,i)]))
return this.scope_.renameBinding(r,s,I,this.reporter_),this.prependBlockStatement_.push(a),new p(null,[])}return this.transformFunctionForScope_(function(){return $traceurRuntime.superGet(t,H.prototype,"transformFunctionDeclaration").call(t,e)},e)},transformLoop_:function(e,r,n){var i,s,a=this
r.initializer&&r.initializer.type===u&&r.initializer.declarationType!==I&&(s=!0),s&&(i=this.pushScope(r))
var o=new X(r,this.scopeBuilder_)
if(o.visitAny(r),o.found){var c=[],l=[],h=[],m=null
r.initializer&&r.initializer.type===u&&r.initializer.declarationType!==I?(m=new x(null,I,r.initializer.declarations.map(function(e){var t=a.getVariableName_(e),r=a.newNameFromOrig(t,h)
l.push(k(r)),c.push(new S(null,new f(null,M(t),null),null,[]))
var n=M(r)
return a.scope_.renameBinding(t,n,I,a.reporter_),new R(null,n,null,e.initializer)})),m=t(h,m)):m=this.transformAny(r.initializer)
var d=this.labelledLoops_.get(r),g=D.createIIFE(this.idGenerator_,r.body,c,l,function(){return d=d||a.idGenerator_.generateUniqueIdentifier()},this.scope_.inGenerator)
r=n(m,h,g.loopBody),d&&(r=new T(r.location,F(d),r)),r=new p(r.location,[g.variableStatements,r]),this.revisitTreeForScopes(r),r=this.transformAny(r)}else{if(!s){var y=this.currentLoopTree_
this.currentLoopTree_=r
var _=e(r)
return this.currentLoopTree_=y,_}var v=[],b=new x(null,I,r.initializer.declarations.map(function(e){var t=a.getVariableName_(e),r=a.newNameFromOrig(t,v),n=M(r)
return a.scope_.renameBinding(t,n,I,a.reporter_),new R(null,n,null,e.initializer)}))
b=t(v,b),r=n(b,v,t(v,r.body)),this.revisitTreeForScopes(r),r=e(r)}return s&&(r=this.flushRenames(r),this.popScope(i)),r},transformForInStatement:function(e){var r=this
return this.transformLoop_(function(e){return $traceurRuntime.superGet(r,H.prototype,"transformForInStatement").call(r,e)},e,function(r,n,i){return new y(e.location,r,t(n,e.collection),i)})},transformForStatement:function(e){var r=this
return this.transformLoop_(function(e){return $traceurRuntime.superGet(r,H.prototype,"transformForStatement").call(r,e)},e,function(r,n,i){return new _(e.location,r,t(n,e.condition),t(n,e.increment),i)})},transformWhileStatement:function(e){var r=this
return this.transformLoop_(function(e){return $traceurRuntime.superGet(r,H.prototype,"transformWhileStatement").call(r,e)},e,function(r,n,i){return new C(e.location,t(n,e.condition),i)})},transformDoWhileStatement:function(e){var r=this
return this.transformLoop_(function(e){return $traceurRuntime.superGet(r,H.prototype,"transformDoWhileStatement").call(r,e)},e,function(r,n,i){return new g(e.location,i,t(n,e.condition))})},transformLabelledStatement:function(e){if(e.statement.isIterationStatement()){this.labelledLoops_.set(e.statement,e.name.value)
var t=this.transformAny(e.statement)
return t.isStatement()?t===e.statement?e:new T(e.location,e.name,t):t}return $traceurRuntime.superGet(this,H.prototype,"transformLabelledStatement").call(this,e)}},{},L)
var Y=function(e,t){this.oldName=e,this.newName=t}
$traceurRuntime.createClass(Y,{},{})
var X=function(e,t){$traceurRuntime.superConstructor(W).call(this),this.scopeBuilder_=t,this.topScope_=t.getScopeForTree(e)||t.getScopeForTree(e.body),this.outOfScope_=null,this.acceptLoop_=e.isIterationStatement()},W=X
return $traceurRuntime.createClass(X,{visitForInStatement:function(e){var t=this
this.visitLoop_(e,function(){return $traceurRuntime.superGet(t,W.prototype,"visitForInStatement").call(t,e)})},visitForStatement:function(e){var t=this
this.visitLoop_(e,function(){return $traceurRuntime.superGet(t,W.prototype,"visitForStatement").call(t,e)})},visitWhileStatement:function(e){var t=this
this.visitLoop_(e,function(){return $traceurRuntime.superGet(t,W.prototype,"visitWhileStatement").call(t,e)})},visitDoWhileStatement:function(e){var t=this
this.visitLoop_(e,function(){return $traceurRuntime.superGet(t,W.prototype,"visitDoWhileStatement").call(t,e)})},visitLoop_:function(e,t){this.acceptLoop_?this.acceptLoop_=!1:this.outOfScope_||(this.outOfScope_=this.scopeBuilder_.getScopeForTree(e)||this.scopeBuilder_.getScopeForTree(e.body)),t()},visitFunctionDeclaration:function(e){this.visitFunction_(e)},visitFunctionExpression:function(e){this.visitFunction_(e)},visitSetAccessor:function(e){this.visitFunction_(e)},visitGetAccessor:function(e){this.visitFunction_(e)},visitPropertyMethodAssignment:function(e){this.visitFunction_(e)},visitArrowFunctionExpression:function(e){this.visitFunction_(e)},visitFunction_:function(e){var t=this
this.found=new $(e,function(r,n){n=t.scopeBuilder_.getScopeForTree(n)
var i=t.outOfScope_||t.scopeBuilder_.getScopeForTree(e)
if(n.hasLexicalBindingName(r))return!1
for(;n!==i&&(n=n.parent);)if(n.hasLexicalBindingName(r))return!1
for(;i=i.parent;){if(i.hasLexicalBindingName(r))return!0
if(i.hasVariableBindingName(r))return!1
if(i===t.topScope_)break}return!1}).found}},{},B),{get BlockBindingTransformer(){return z}}}),System.registerModule("traceur@0.0.87/src/codegeneration/MakeStrictTransformer.js",[],function(){"use strict"
function e(e){return $traceurRuntime.spread([s()],e)}var t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),r=t.FunctionBody,n=t.Script,i=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,s=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js").createUseStrictDirective,a=System.get("traceur@0.0.87/src/semantics/util.js").hasUseStrict,o=function(){$traceurRuntime.superConstructor(c).apply(this,arguments)},c=o
return $traceurRuntime.createClass(o,{transformScript:function(t){return a(t.scriptItemList)?t:new n(t.location,e(t.scriptItemList))},transformFunctionBody:function(t){return a(t.statements)?t:new r(t.location,e(t.statements))}},{transformTree:function(e){return(new c).transformAny(e)}},i),{get MakeStrictTransformer(){return o}}}),System.registerModule("traceur@0.0.87/src/codegeneration/MemberVariableConstructorTransformer.js",[],function(){"use strict"
function e(e,t,r){if(r){var i=new m(t)
return i.transformAny(e)}var s=e.body.statements,a=c(t)
return s=f(s,a),new n(e.location,!1,e.functionKind,e.name,e.parameterList,e.typeAnnotation,e.annotations,u(s))}function t(e){var t=e.map(function(e){var t=e.name.literalToken
return h(r,t,e.initializer)})
return o(t)}var r=Object.freeze(Object.defineProperties(["this."," = ",""],{raw:{value:Object.freeze(["this."," = ",""])}})),n=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").PropertyMethodAssignment,i=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js").SUPER_EXPRESSION,s=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,a=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),o=a.createCommaExpression,c=a.createExpressionStatement,u=a.createFunctionBody,l=a.createParenExpression,p=a.createThisExpression,f=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,h=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,m=function(e){$traceurRuntime.superConstructor(d).call(this),this.expression=e},d=m
return $traceurRuntime.createClass(m,{transformCallExpression:function(e){if(e.operand.type===i){var t=p()
return l(o([e,this.expression,t]))}return $traceurRuntime.superGet(this,d.prototype,"transformCallExpression").call(this,e)},transformClassDeclaration:function(e){return e},transformClassExpression:function(e){return e}},{},s),{get transformConstructor(){return e},get getInstanceInitExpression(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/assignmentOperatorToBinaryOperator.js",[],function(){"use strict"
function e(e){switch(e){case b:return v
case j:return T
case S:return _
case h:return f
case d:return m
case p:return l
case u:return c
case y:return g
case O:return E
case n:return r
case o:return a
case s:return i
default:throw Error("unreachable")}}var t=System.get("traceur@0.0.87/src/syntax/TokenType.js"),r=t.AMPERSAND,n=t.AMPERSAND_EQUAL,i=t.BAR,s=t.BAR_EQUAL,a=t.CARET,o=t.CARET_EQUAL,c=t.LEFT_SHIFT,u=t.LEFT_SHIFT_EQUAL,l=t.MINUS,p=t.MINUS_EQUAL,f=t.PERCENT,h=t.PERCENT_EQUAL,m=t.PLUS,d=t.PLUS_EQUAL,g=t.RIGHT_SHIFT,y=t.RIGHT_SHIFT_EQUAL,_=t.SLASH,S=t.SLASH_EQUAL,v=t.STAR,b=t.STAR_EQUAL,T=t.STAR_STAR,j=t.STAR_STAR_EQUAL,E=t.UNSIGNED_RIGHT_SHIFT,O=t.UNSIGNED_RIGHT_SHIFT_EQUAL,A=e
return{get default(){return A}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ExplodeExpressionTransformer.js",[],function(){"use strict"
function e(e){return e.type===T?e.expressions[e.expressions.length-1]:e}function t(e){return e.type===T?e.expressions.slice(0,-1):[]}var r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,n=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),i=n.createAssignmentExpression,s=n.createCommaExpression,a=n.createIdentifierExpression,o=n.createMemberExpression,c=n.createNumberLiteral,u=n.createOperatorToken,l=n.createParenExpression,p=System.get("traceur@0.0.87/src/syntax/TokenType.js"),f=p.AND,h=p.EQUAL,m=p.MINUS,d=p.MINUS_EQUAL,g=p.MINUS_MINUS,y=p.OR,_=p.PLUS,S=p.PLUS_EQUAL,v=p.PLUS_PLUS,b=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),T=b.COMMA_EXPRESSION,j=b.IDENTIFIER_EXPRESSION,E=b.MEMBER_EXPRESSION,O=b.MEMBER_LOOKUP_EXPRESSION,A=b.PROPERTY_NAME_ASSIGNMENT,R=b.SPREAD_EXPRESSION,x=b.TEMPLATE_LITERAL_PORTION,w=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),C=w.ArgumentList,P=w.ArrayLiteralExpression,L=w.AwaitExpression,I=w.BinaryExpression,N=w.CallExpression,M=w.ConditionalExpression,k=w.MemberExpression,F=w.MemberLookupExpression,$=w.NewExpression,B=w.ObjectLiteralExpression,D=w.PropertyNameAssignment,V=w.SpreadExpression,G=w.TemplateLiteralExpression,U=w.TemplateSubstitution,z=w.UnaryExpression,H=w.YieldExpression,Y=System.get("traceur@0.0.87/src/util/assert.js").assert,X=System.get("traceur@0.0.87/src/codegeneration/assignmentOperatorToBinaryOperator.js")["default"],W=function(e){this.tempVar=e,this.expressions=[]}
$traceurRuntime.createClass(W,{add:function(e){var r
return e.type===T&&(r=this.expressions).push.apply(r,$traceurRuntime.spread(t(e))),this},build:function(e){var t=this.tempVar
return this.expressions.push(i(t,e),t),s(this.expressions)}},{})
var Q=function(e){$traceurRuntime.superConstructor(K).call(this),this.tempVarTransformer_=e},K=Q
return $traceurRuntime.createClass(Q,{addTempVar:function(){var e=this.tempVarTransformer_.addTempVar()
return a(e)},transformUnaryExpression:function(r){if(r.operator.type===v)return this.transformUnaryNumeric(r,S)
if(r.operator.type===g)return this.transformUnaryNumeric(r,d)
var n=this.transformAny(r.operand)
if(n===r.operand)return r
var i=$traceurRuntime.spread(t(n),[new z(r.location,r.operator,e(n))])
return s(i)},transformUnaryNumeric:function(e,t){return this.transformAny(new I(e.location,e.operand,u(t),c(1)))},transformPostfixExpression:function(e){if(e.operand.type===E)return this.transformPostfixMemberExpression(e)
if(e.operand.type===O)return this.transformPostfixMemberLookupExpression(e)
Y(e.operand.type===j)
var t=e.operand,r=this.addTempVar(),n=e.operator.type===v?_:m,a=[i(r,t),i(t,new I(e.location,r,u(n),c(1))),r]
return s(a)},transformPostfixMemberExpression:function(r){var n=r.operand.memberName,a=this.transformAny(r.operand.operand),o=this.addTempVar(),l=new k(r.operand.location,e(a),n),p=r.operator.type===v?_:m,f=$traceurRuntime.spread(t(a),[i(o,l),i(l,new I(r.location,o,u(p),c(1))),o])
return s(f)},transformPostfixMemberLookupExpression:function(r){var n=this.transformAny(r.operand.memberExpression),a=this.transformAny(r.operand.operand),o=this.addTempVar(),l=new F(null,e(a),e(n)),p=r.operator.type===v?_:m,f=$traceurRuntime.spread(t(a),t(n),[i(o,l),i(l,new I(r.location,o,u(p),c(1))),o])
return s(f)},transformYieldExpression:function(t){var r=this.transformAny(t.expression)
return this.createCommaExpressionBuilder().add(r).build(new H(t.location,e(r),t.isYieldFor))},transformAwaitExpression:function(t){var r=this.transformAny(t.expression)
return this.createCommaExpressionBuilder().add(r).build(new L(t.location,e(r)))},transformParenExpression:function(t){var r=this.transformAny(t.expression)
if(r===t.expression)return t
var n=e(r)
return n.type===j?r:this.createCommaExpressionBuilder().add(r).build(n)},transformCommaExpression:function(t){var r=this.transformList(t.expressions)
if(r===t.expressions)return t
for(var n=new W(null),i=0;i<r.length;i++)n.add(r[i])
return s($traceurRuntime.spread(n.expressions,[e(r[r.length-1])]))},transformMemberExpression:function(t){var r=this.transformAny(t.operand)
return this.createCommaExpressionBuilder().add(r).build(new k(t.location,e(r),t.memberName))},transformMemberLookupExpression:function(t){var r=this.transformAny(t.operand),n=this.transformAny(t.memberExpression)
return this.createCommaExpressionBuilder().add(r).add(n).build(new F(t.location,e(r),e(n)))},transformBinaryExpression:function(r){if(r.operator.isAssignmentOperator())return this.transformAssignmentExpression(r)
var n=this.transformAny(r.left),i=this.transformAny(r.right)
if(n===r.left&&i===r.right)return r
if(r.operator.type===y)return this.transformOr(n,i)
if(r.operator.type===f)return this.transformAnd(n,i)
var a=$traceurRuntime.spread(t(n),t(i),[new I(r.location,e(n),r.operator,e(i))])
return s(a)},transformAssignmentExpression:function(r){var n=r.left
if(n.type===E)return this.transformAssignMemberExpression(r)
if(n.type===O)return this.transformAssignMemberLookupExpression(r)
if(Y(r.left.type===j),r.operator.type===h){n=this.transformAny(n)
var a=this.transformAny(r.right),o=$traceurRuntime.spread(t(a),[i(n,e(a)),e(a)])
return s(o)}var c=this.transformAny(r.right),l=this.addTempVar(),p=u(X(r.operator.type)),f=$traceurRuntime.spread(t(c),[i(l,new I(r.location,n,p,e(c))),i(n,l),l])
return s(f)},transformAssignMemberExpression:function(r){var n=r.left
if(r.operator.type===h){var a=this.transformAny(n.operand),o=this.transformAny(r.right),c=$traceurRuntime.spread(t(a),t(o),[new I(r.location,new k(n.location,e(a),n.memberName),r.operator,e(o)),e(o)])
return s(c)}var l=this.transformAny(n.operand),p=this.transformAny(r.right),f=this.addTempVar(),m=new k(n.location,e(l),n.memberName),d=this.addTempVar(),g=u(X(r.operator.type)),y=$traceurRuntime.spread(t(l),t(p),[i(f,m),i(d,new I(r.location,f,g,e(p))),i(m,d),d])
return s(y)},transformAssignMemberLookupExpression:function(r){var n=r.left
if(r.operator.type===h){var a=this.transformAny(n.operand),o=this.transformAny(n.memberExpression),c=this.transformAny(r.right),l=$traceurRuntime.spread(t(a),t(o),t(c),[new I(r.location,new F(n.location,e(a),e(o)),r.operator,e(c)),e(c)])
return s(l)}var p=this.transformAny(n.operand),f=this.transformAny(n.memberExpression),m=this.transformAny(r.right),d=this.addTempVar(),g=new F(n.location,e(p),e(f)),y=this.addTempVar(),_=u(X(r.operator.type)),S=$traceurRuntime.spread(t(p),t(f),t(m),[i(d,g),i(y,new I(r.location,d,_,e(m))),i(g,y),y])
return s(S)},transformArrayLiteralExpression:function(t){var r=this.transformList(t.elements)
if(r===t.elements)return t
for(var n=this.createCommaExpressionBuilder(),i=[],s=0;s<r.length;s++)n.add(r[s]),i.push(e(r[s]))
return n.build(new P(t.location,i))},transformObjectLiteralExpression:function(t){var r=this.transformList(t.propertyNameAndValues)
if(r===t.propertyNameAndValues)return t
for(var n=this.createCommaExpressionBuilder(),i=[],s=0;s<r.length;s++)r[s].type===A?(n.add(r[s].value),i.push(new D(r[s].location,r[s].name,e(r[s].value)))):i.push(r[s])
return n.build(new B(t.location,i))},transformTemplateLiteralExpression:function(t){var r=this.transformAny(t.operand),n=this.transformList(t.elements)
if(!r&&r===t.operand&&n===t.elements)return t
var i=this.createCommaExpressionBuilder()
r&&i.add(r)
for(var s=[],a=0;a<n.length;a++)if(n[a].type===x)s.push(n[a])
else{var o=n[a].expression
i.add(o)
var c=e(o)
s.push(new U(o.location,c))}return i.build(new G(t.location,r&&e(r),s))},transformCallExpression:function(e){return e.operand.type===E?this.transformCallMemberExpression(e):e.operand.type===O?this.transformCallMemberLookupExpression(e):this.transformCallAndNew_(e,N)},transformNewExpression:function(e){return this.transformCallAndNew_(e,$)},transformCallAndNew_:function(t,r){var n=this.transformAny(t.operand),i=this.transformAny(t.args),s=this.createCommaExpressionBuilder().add(n),a=[]
return i.args.forEach(function(t){s.add(t),a.push(e(t))}),s.build(new r(t.location,e(n),new C(i.location,a)))},transformCallMemberExpression:function(r){var n=r.operand.memberName,a=this.transformAny(r.operand.operand),c=this.addTempVar(),u=new k(r.operand.location,e(a),n),l=this.transformAny(r.args),p=$traceurRuntime.spread(t(a),[i(c,u)]),f=[e(a)]
l.args.forEach(function(r){var n;(n=p).push.apply(n,$traceurRuntime.spread(t(r))),f.push(e(r))})
var h=new N(r.location,o(c,"call"),new C(l.location,f)),m=this.addTempVar()
return p.push(i(m,h),m),s(p)},transformCallMemberLookupExpression:function(r){var n=this.transformAny(r.operand.operand),a=this.transformAny(r.operand.memberExpression),c=this.addTempVar(),u=new F(r.operand.location,e(n),e(a)),l=this.transformAny(r.args),p=$traceurRuntime.spread(t(n),t(a),[i(c,u)]),f=[e(n)]
l.args.forEach(function(n,i){var s;(s=p).push.apply(s,$traceurRuntime.spread(t(n)))
var a=e(n)
r.args.args[i].type===R&&(a=new V(n.location,a)),f.push(a)})
var h=new N(r.location,o(c,"call"),new C(l.location,f)),m=this.addTempVar()
return p.push(i(m,h),m),s(p)},transformConditionalExpression:function(r){var n=this.transformAny(r.condition),a=this.transformAny(r.left),o=this.transformAny(r.right)
if(n===r.condition&&a===r.left&&o===r.right)return r
var c=this.addTempVar(),u=s($traceurRuntime.spread(t(a),[i(c,e(a))])),p=s($traceurRuntime.spread(t(o),[i(c,e(o))])),f=$traceurRuntime.spread(t(n),[new M(r.location,e(n),l(u),l(p)),c])
return s(f)},transformOr:function(r,n){var a=this.addTempVar(),o=s([i(a,e(r))]),c=s($traceurRuntime.spread(t(n),[i(a,e(n))])),u=$traceurRuntime.spread(t(r),[new M(r.location,e(r),l(o),l(c)),a])
return s(u)},transformAnd:function(r,n){var a=this.addTempVar(),o=s($traceurRuntime.spread(t(n),[i(a,e(n))])),c=s([i(a,e(r))]),u=$traceurRuntime.spread(t(r),[new M(r.location,e(r),l(o),l(c)),a])
return s(u)},transformSpreadExpression:function(r){var n=this.transformAny(r.expression)
if(n===r.expression)return r
var i=e(n)
i.type!==R&&(i=new V(i.location,i))
var a=$traceurRuntime.spread(t(n),[i])
return s(a)},createCommaExpressionBuilder:function(){return new W(this.addTempVar())}},{},r),{get ExplodeExpressionTransformer(){return Q}}}),System.registerModule("traceur@0.0.87/src/codegeneration/SuperTransformer.js",[],function(){"use strict"
function e(e){return e.type!==l&&e.type!==p?!1:e.operand.type===f}var t=Object.freeze(Object.defineProperties(["$traceurRuntime.superConstructor(",").call(",")"],{raw:{value:Object.freeze(["$traceurRuntime.superConstructor(",").call(",")"])}})),r=Object.freeze(Object.defineProperties(["",".call(",")"],{raw:{value:Object.freeze(["",".call(",")"])}})),n=Object.freeze(Object.defineProperties(["$traceurRuntime.superGet(",", ",", ",")"],{raw:{value:Object.freeze(["$traceurRuntime.superGet(",", ",", ",")"])}})),i=Object.freeze(Object.defineProperties(["$traceurRuntime.superSet(",", ",", ",",\n                                    ",")"],{raw:{value:Object.freeze(["$traceurRuntime.superSet(",", ",", ",",\n                                    ",")"])}})),s=System.get("traceur@0.0.87/src/codegeneration/ExplodeExpressionTransformer.js").ExplodeExpressionTransformer,a=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),o=a.FunctionDeclaration,c=a.FunctionExpression,u=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),l=u.MEMBER_EXPRESSION,p=u.MEMBER_LOOKUP_EXPRESSION,f=u.SUPER_EXPRESSION,h=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,m=System.get("traceur@0.0.87/src/syntax/TokenType.js"),d=m.EQUAL,g=m.MINUS_MINUS,y=m.PLUS_PLUS,_=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),S=_.createArgumentList,v=_.createIdentifierExpression,b=_.createParenExpression,T=_.createStringLiteral,j=_.createThisExpression,E=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,O=function(){$traceurRuntime.superConstructor(A).apply(this,arguments)},A=O
$traceurRuntime.createClass(O,{transformArrowFunctionExpression:function(e){return e},transformClassExpression:function(e){return e},transformFunctionBody:function(e){return e}},{},s)
var R=function(e,t,r,n){$traceurRuntime.superConstructor(x).call(this),this.tempVarTransformer_=e,this.protoName_=t,this.internalName_=n,this.superCount_=0,this.thisVar_=v(r),this.inNestedFunc_=0,this.nestedSuperCount_=0},x=R
return $traceurRuntime.createClass(R,{get hasSuper(){return this.superCount_>0},get nestedSuper(){return this.nestedSuperCount_>0},transformFunctionDeclaration:function(e){return this.transformFunction_(e,o)},transformFunctionExpression:function(e){return this.transformFunction_(e,c)},transformFunction_:function(e,t){var r=this.superCount_
this.inNestedFunc_++
var n=t===c?$traceurRuntime.superGet(this,x.prototype,"transformFunctionExpression").call(this,e):$traceurRuntime.superGet(this,x.prototype,"transformFunctionDeclaration").call(this,e)
return this.inNestedFunc_--,r!==this.superCount_&&(this.nestedSuperCount_+=this.superCount_-r),n},transformGetAccessor:function(e){return e},transformSetAccessor:function(e){return e},transformPropertyMethodAssignment:function(e){return e},transformCallExpression:function(t){if(t.operand.type===f)return this.superCount_++,this.createSuperCall_(t)
if(e(t.operand)){this.superCount_++
var r
return r=t.operand.type===l?t.operand.memberName.value:t.operand.memberExpression,this.createSuperCallMethod_(r,t)}return $traceurRuntime.superGet(this,x.prototype,"transformCallExpression").call(this,t)},createSuperCall_:function(e){var r=this.inNestedFunc_?this.thisVar_:j(),n=S($traceurRuntime.spread([r],e.args.args))
return E(t,this.internalName_,n)},createSuperCallMethod_:function(e,t){var n=this.inNestedFunc_?this.thisVar_:j(),i=this.transformMemberShared_(e),s=S($traceurRuntime.spread([n],t.args.args))
return E(r,i,s)},transformMemberShared_:function(e){var t=this.inNestedFunc_?this.thisVar_:j()
return E(n,t,this.protoName_,e)},transformMemberExpression:function(e){return e.operand.type===f?(this.superCount_++,this.transformMemberShared_(e.memberName.value)):$traceurRuntime.superGet(this,x.prototype,"transformMemberExpression").call(this,e)},transformMemberLookupExpression:function(e){return e.operand.type===f?this.transformMemberShared_(e.memberExpression):$traceurRuntime.superGet(this,x.prototype,"transformMemberLookupExpression").call(this,e)},transformBinaryExpression:function(t){if(t.operator.isAssignmentOperator()&&e(t.left)){if(t.operator.type!==d){var r=new O(this.tempVarTransformer_).transformAny(t)
return this.transformAny(b(r))}this.superCount_++
var n=t.left.type===p?t.left.memberExpression:T(t.left.memberName.value),s=this.inNestedFunc_?this.thisVar_:j(),a=this.transformAny(t.right)
return E(i,s,this.protoName_,n,a)}return $traceurRuntime.superGet(this,x.prototype,"transformBinaryExpression").call(this,t)},transformUnaryExpression:function(e){var t=this.transformIncrementDecrement_(e)
return t?t:$traceurRuntime.superGet(this,x.prototype,"transformUnaryExpression").call(this,e)},transformPostfixExpression:function(e){var t=this.transformIncrementDecrement_(e)
return t?t:$traceurRuntime.superGet(this,x.prototype,"transformPostfixExpression").call(this,e)},transformIncrementDecrement_:function(t){var r=t.operator,n=t.operand
if((r.type===y||r.type===g)&&e(n)){var i=new O(this.tempVarTransformer_).transformAny(t)
return i!==t&&(i=b(i)),this.transformAny(i)}return null}},{},h),{get SuperTransformer(){return R}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ClassTransformer.js",[],function(){"use strict"
function e(e,t,r,n){return n?W(i,e,t,r,n):W(s,e,t,r)}function t(e){return e.type===E?"":e.literalToken&&e.literalToken.type===I?e.getStringValue().substr(1,-1):e.getStringValue()}function r(e,t,r){return b(r?"$__"+e+"_"+t:"$__"+e+"_prototype_"+t)}function n(e,t){if(0===t.length)return e
var r=t.map(function(e){return U(e.name,e.initializer)})
return V(e.propertyNameAndValues.concat(r))}var i=Object.freeze(Object.defineProperties(["($traceurRuntime.createClass)(",", ",", ",",\n                                       ",")"],{raw:{value:Object.freeze(["($traceurRuntime.createClass)(",", ",", ",",\n                                       ",")"])}})),s=Object.freeze(Object.defineProperties(["($traceurRuntime.createClass)(",", ",", ",")"],{raw:{value:Object.freeze(["($traceurRuntime.createClass)(",", ",", ",")"])}})),a=Object.freeze(Object.defineProperties(["var "," = ",""],{raw:{value:Object.freeze(["var "," = ",""])}})),o=Object.freeze(Object.defineProperties(["var "," = ",""],{raw:{value:Object.freeze(["var "," = ",""])}})),c=Object.freeze(Object.defineProperties(["function($__super) {\n          var "," = ",";\n          return ($traceurRuntime.createClass)(",", ",",\n                                               ",", $__super);\n        }(",")"],{raw:{value:Object.freeze(["function($__super) {\n          var "," = ",";\n          return ($traceurRuntime.createClass)(",", ",",\n                                               ",", $__super);\n        }(",")"])}})),u=Object.freeze(Object.defineProperties(["function() {\n          var "," = ",";\n          return ($traceurRuntime.createClass)(",", ",",\n                                               ",");\n        }()"],{raw:{value:Object.freeze(["function() {\n          var "," = ",";\n          return ($traceurRuntime.createClass)(",", ",",\n                                               ",");\n        }()"])}})),l=Object.freeze(Object.defineProperties(["$traceurRuntime.superConstructor(\n          ",").apply(this, arguments)"],{raw:{value:Object.freeze(["$traceurRuntime.superConstructor(\n          ",").apply(this, arguments)"])}})),p=System.get("traceur@0.0.87/src/codegeneration/AlphaRenamer.js").AlphaRenamer,f=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").CONSTRUCTOR,h=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),m=h.AnonBlock,d=h.ExportDeclaration,g=h.FunctionExpression,y=h.GetAccessor,_=h.PropertyMethodAssignment,S=h.SetAccessor,v=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),b=v.createBindingIdentifier,T=v.createIdentifierToken,j=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),E=j.COMPUTED_PROPERTY_NAME,O=j.GET_ACCESSOR,A=j.PROPERTY_METHOD_ASSIGNMENT,R=j.PROPERTY_VARIABLE_DECLARATION,x=j.SET_ACCESSOR,w=System.get("traceur@0.0.87/src/codegeneration/SuperTransformer.js").SuperTransformer,C=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,P=System.get("traceur@0.0.87/src/syntax/TokenType.js"),L=P.VAR,I=P.STRING,N=System.get("traceur@0.0.87/src/codegeneration/MakeStrictTransformer.js").MakeStrictTransformer,M=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),k=M.createEmptyParameterList,F=M.createExpressionStatement,$=M.createFunctionBody,B=M.createIdentifierExpression,D=M.createMemberExpression,V=M.createObjectLiteralExpression,G=M.createParenExpression,U=M.createPropertyNameAssignment,z=M.createThisExpression,H=M.createVariableStatement,Y=System.get("traceur@0.0.87/src/semantics/util.js").hasUseStrict,X=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),W=X.parseExpression,Q=X.parseStatement,K=X.parseStatements,q=System.get("traceur@0.0.87/src/staticsemantics/PropName.js").propName,J=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,Z=System.get("traceur@0.0.87/src/codegeneration/MemberVariableConstructorTransformer.js"),ee=Z.transformConstructor,te=Z.getInstanceInitExpression,re=function(e,t,r){$traceurRuntime.superConstructor(ne).call(this,e),this.strictCount_=0,this.state_=null,this.reporter_=t,this.showDebugNames_=r.debugNames},ne=re
return $traceurRuntime.createClass(re,{transformExportDeclaration:function(e){var t=$traceurRuntime.superGet(this,ne.prototype,"transformExportDeclaration").call(this,e)
if(t===e)return e
var r=t.declaration
if(r instanceof m){var n=$traceurRuntime.spread([new d(null,r.statements[0],[])],r.statements.slice(1))
return new m(null,n)}return t},transformModule:function(e){return this.strictCount_=1,$traceurRuntime.superGet(this,ne.prototype,"transformModule").call(this,e)},transformScript:function(e){return this.strictCount_=+Y(e.scriptItemList),$traceurRuntime.superGet(this,ne.prototype,"transformScript").call(this,e)},transformFunctionBody:function(e){var t=+Y(e.statements)
this.strictCount_+=t
var r=$traceurRuntime.superGet(this,ne.prototype,"transformFunctionBody").call(this,e)
return this.strictCount_-=t,r},makeStrict_:function(e){return this.strictCount_?e:N.transformTree(e)},transformClassElements_:function(e,t,r){var n=this,i=this.state_
this.state_={hasSuper:!1}
var s,a=this.transformAny(e.superClass),o=[],c=[],u=[],l=[]
e.elements.forEach(function(e){var i,a,p
switch(e.isStatic?(i=c,a=t,p=l):(i=o,a=D(t,"prototype"),p=u),e.type){case O:i.push(n.transformGetAccessor_(e,a))
break
case x:i.push(n.transformSetAccessor_(e,a))
break
case A:if(e.isStatic||q(e)!==f){var h=n.transformPropertyMethodAssignment_(e,a,t,r)
i.push(h)}else s=e
break
case R:e=n.transformAny(e),null!==e.initializer&&p.push(e)
break
default:throw Error("Unexpected class element: "+e.type)}})
var p,h=V(o),m=V(c),d=te(u)
if(s){u.length>0&&(s=ee(s,d,e.superClass))
var y=D(t,"prototype"),_=this.transformPropertyMethodAssignment_(s,y,t)
p=new g(e.location,e.name,!1,_.parameterList,null,[],_.body)}else p=this.getDefaultConstructor_(e,t,d)
var S=this.state_
return this.state_=i,{func:p,superClass:a,object:h,staticObject:m,hasSuper:S.hasSuper,initStaticVars:l}},transformClassDeclaration:function(t){var r=t.name.identifierToken,i=B("$"+r),s=p.rename(t,r.value,i.identifierToken.value),c=s!==t
t=s
var u=this.transformClassElements_(t,i,r),l=u.func,f=u.hasSuper,h=u.object,d=u.staticObject,g=u.superClass,y=u.initStaticVars,_=K(a,r,l)
d=n(d,y)
var S=e(r,h,d,g);(f||c)&&_.push(Q(o,i,r)),_.push(F(S))
var v=new m(null,_)
return this.makeStrict_(v)},transformClassExpression:function(t){this.pushTempScope()
var r
r=t.name?t.name.identifierToken:T(this.getTempIdentifier())
var i,s=B(""+r),a=this.transformClassElements_(t,s,r),o=a.func,l=a.hasSuper,p=a.object,f=a.staticObject,h=a.superClass,m=a.initStaticVars
return f=n(f,m),i=l||t.name?h?W(c,s,o,s,p,f,h):W(u,s,o,s,p,f):e(o,p,f,h),this.popTempScope(),G(this.makeStrict_(i))},transformPropertyMethodAssignment_:function(e,n,i,s){var a=this.transformAny(e.parameterList),o=this.transformSuperInFunctionBody_(e.body,n,i)
if(this.showDebugNames_&&(e.debugName=r(s,t(e.name),c)),!e.isStatic&&a===e.parameterList&&o===e.body)return e
var c=!1
return new _(e.location,c,e.functionKind,e.name,a,e.typeAnnotation,e.annotations,o,e.debugName)},transformGetAccessor_:function(e,t){var r=this.transformSuperInFunctionBody_(e.body,t)
return e.isStatic||r!==e.body?new y(e.location,!1,e.name,e.typeAnnotation,e.annotations,r):e},transformSetAccessor_:function(e,t){var r=this.transformAny(e.parameterList),n=this.transformSuperInFunctionBody_(e.body,t)
return e.isStatic||n!==e.body?new S(e.location,!1,e.name,r,e.annotations,n):e},transformSuperInFunctionBody_:function(e,t,r){this.pushTempScope()
var n=this.getTempIdentifier(),i=H(L,n,z()),s=new w(this,t,n,r),a=s.transformFunctionBody(this.transformFunctionBody(e))
return s.hasSuper&&(this.state_.hasSuper=!0),this.popTempScope(),s.nestedSuper?$([i].concat(a.statements)):a},getDefaultConstructor_:function(e,t,r){var n,i=k(),s=F(r)
if(e.superClass){var a=Q(l,t)
n=$([a,s]),this.state_.hasSuper=!0}else n=$([s])
return new g(e.location,e.name,!1,i,null,[],n)},transformConstructorWithInitializer_:function(e,t,r){if(r){var n=new SuperExpressionTransformer(t)
return n.transformAny(e)}var i=e.body.statements,s=F(t)
return i=J(i,s),new _(e.location,!1,e.functionKind,e.name,e.parameterList,e.typeAnnotation,e.annotations,$(i))}},{},C),{get ClassTransformer(){return re}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ClosureModuleTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["goog.module(",");"],{raw:{value:Object.freeze(["goog.module(",");"])}})),t=Object.freeze(Object.defineProperties(["exports = ",""],{raw:{value:Object.freeze(["exports = ",""])}})),r=Object.freeze(Object.defineProperties(["goog.require(",")"],{raw:{value:Object.freeze(["goog.require(",")"])}})),n=System.get("traceur@0.0.87/src/codegeneration/ModuleTransformer.js").ModuleTransformer,i=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),s=i.createIdentifierExpression,a=i.createMemberExpression,o=i.createPropertyNameAssignment,c=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),u=c.EXPORT_DEFAULT,l=c.EXPORT_SPECIFIER,p=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),f=p.parseExpression,h=p.parseStatement,m=p.parseStatements,d=(System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,function(){$traceurRuntime.superConstructor(g).apply(this,arguments)}),g=d
return $traceurRuntime.createClass(d,{moduleProlog:function(){if(!this.moduleName)throw Error("Closure modules (goog.module) require a moduleName")
return m(e,this.moduleName)},wrapModule:function(e){if(this.hasStarExports())throw Error('Closure modules (goog.module) do not support "export *"')
return e},appendExportStatement:function(e){if(!this.hasExports())return e
var r=this.getExportObject()
return e.push(h(t,r)),e},getGetterExport:function(e){var t,r=e,n=r.name,i=r.tree,c=r.moduleSpecifier
switch(i.type){case u:t=s("$__default")
break
case l:if(c){var p=this.getTempVarNameForModuleSpecifier(c)
t=a(p,i.lhs)}else t=o(n,i.lhs)
break
default:t=s(n)}return o(n,t)},transformModuleSpecifier:function(e){var t=e.token.processedValue
return f(r,t)}},{},n),{get ClosureModuleTransformer(){return d}}}),System.registerModule("traceur@0.0.87/src/codegeneration/CommonJsModuleTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["module.exports = function() {\n            ","\n          }.call(",");"],{raw:{value:Object.freeze(["module.exports = function() {\n            ","\n          }.call(",");"])}})),t=Object.freeze(Object.defineProperties(["Object.defineProperties(module.exports, ",");"],{raw:{value:Object.freeze(["Object.defineProperties(module.exports, ",");"])}})),r=Object.freeze(Object.defineProperties(["{get: ","}"],{raw:{value:Object.freeze(["{get: ","}"])}})),n=Object.freeze(Object.defineProperties(["{value: ","}"],{raw:{value:Object.freeze(["{value: ","}"])}})),i=Object.freeze(Object.defineProperties(["("," = require(","),\n        "," && ",".__esModule && "," || {default: ","})"],{raw:{value:Object.freeze(["("," = require(","),\n        "," && ",".__esModule && "," || {default: ","})"])}})),s=Object.freeze(Object.defineProperties(["__esModule: true"],{raw:{value:Object.freeze(["__esModule: true"])}})),a=System.get("traceur@0.0.87/src/codegeneration/ModuleTransformer.js").ModuleTransformer,o=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),c=o.GET_ACCESSOR,u=o.OBJECT_LITERAL_EXPRESSION,l=o.PROPERTY_NAME_ASSIGNMENT,p=o.RETURN_STATEMENT,f=System.get("traceur@0.0.87/src/util/assert.js").assert,h=System.get("traceur@0.0.87/src/codegeneration/globalThis.js")["default"],m=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),d=m.parseExpression,g=m.parsePropertyDefinition,y=m.parseStatement,_=m.parseStatements,S=System.get("traceur@0.0.87/src/codegeneration/scopeContainsThis.js")["default"],v=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),b=v.createEmptyParameterList,T=v.createFunctionExpression,j=v.createIdentifierExpression,E=v.createObjectLiteralExpression,O=v.createPropertyNameAssignment,A=v.createVariableStatement,R=v.createVariableDeclaration,x=v.createVariableDeclarationList,w=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,C=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,P=function(e,t){var r=arguments[2]
$traceurRuntime.superConstructor(L).call(this,e,t,r),this.moduleVars_=[],this.anonymousModule=r&&!r.bundle&&r.moduleName!==!0},L=P
return $traceurRuntime.createClass(P,{getModuleName:function(e){return this.anonymousModule?null:e.moduleName},moduleProlog:function(){var e=$traceurRuntime.superGet(this,L.prototype,"moduleProlog").call(this)
if(this.moduleVars_.length){var t=A(x(w,this.moduleVars_.map(function(e){return R(e,null)})))
e.push(t)}return e},wrapModule:function(r){var n=r.some(S)
if(n)return _(e,r,h())
var i=r[r.length-1]
r=r.slice(0,-1),f(i.type===p)
var s=i.expression
if(this.hasExports()){var a=this.transformObjectLiteralToDescriptors(s),o=y(t,a)
r=C(r,o)}return r},transformObjectLiteralToDescriptors:function(e){f(e.type===u)
var t=e.propertyNameAndValues.map(function(e){var t
switch(e.type){case c:var i=T(b(),e.body)
t=d(r,i)
break
case l:t=d(n,e.value)
break
default:throw Error("Unexpected property type "+e.type)}return O(e.name,t)})
return E(t)},transformModuleSpecifier:function(e){var t=e.token.processedValue,r=this.getTempVarNameForModuleSpecifier(e)
this.moduleVars_.push(r)
var n=j(r)
return d(i,n,t,n,n,n,n)},getExportProperties:function(){var e=$traceurRuntime.superGet(this,L.prototype,"getExportProperties").call(this)
return this.exportVisitor_.hasExports()&&e.push(g(s)),e}},{},a),{get CommonJsModuleTransformer(){return P}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ParameterTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").FunctionBody,t=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,r=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,n=[],i=function(){$traceurRuntime.superConstructor(s).apply(this,arguments)},s=i
return $traceurRuntime.createClass(i,{transformArrowFunctionExpression:function(e){return n.push([]),$traceurRuntime.superGet(this,s.prototype,"transformArrowFunctionExpression").call(this,e)},transformFunctionDeclaration:function(e){return n.push([]),$traceurRuntime.superGet(this,s.prototype,"transformFunctionDeclaration").call(this,e)},transformFunctionExpression:function(e){return n.push([]),$traceurRuntime.superGet(this,s.prototype,"transformFunctionExpression").call(this,e)},transformGetAccessor:function(e){return n.push([]),$traceurRuntime.superGet(this,s.prototype,"transformGetAccessor").call(this,e)},transformSetAccessor:function(e){return n.push([]),$traceurRuntime.superGet(this,s.prototype,"transformSetAccessor").call(this,e)},transformPropertyMethodAssignment:function(e){return n.push([]),$traceurRuntime.superGet(this,s.prototype,"transformPropertyMethodAssignment").call(this,e)},transformFunctionBody:function(t){var i=$traceurRuntime.superGet(this,s.prototype,"transformFunctionBody").call(this,t),a=n.pop()
return a.length?(a=r.apply(void 0,$traceurRuntime.spread([i.statements],a)),new e(i.location,a)):i},get parameterStatements(){return n[n.length-1]}},{},t),{get ParameterTransformer(){return i}}}),System.registerModule("traceur@0.0.87/src/codegeneration/DefaultParametersTransformer.js",[],function(){"use strict"
function e(e,t,i){var s,o=m(h(a),d(e))
return s=null===i||r(i)||n(i)?o:f(p(o,g(c),_()),o,i),y(u,t,s)}var t=System.get("traceur@0.0.87/src/semantics/util.js"),r=t.isUndefined,n=t.isVoidExpression,i=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").FormalParameterList,s=System.get("traceur@0.0.87/src/codegeneration/ParameterTransformer.js").ParameterTransformer,a=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").ARGUMENTS,o=System.get("traceur@0.0.87/src/syntax/TokenType.js"),c=o.NOT_EQUAL_EQUAL,u=o.VAR,l=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),p=l.createBinaryExpression,f=l.createConditionalExpression,h=l.createIdentifierExpression,m=l.createMemberLookupExpression,d=l.createNumberLiteral,g=l.createOperatorToken,y=l.createVariableStatement,_=l.createVoid0,S=function(){$traceurRuntime.superConstructor(v).apply(this,arguments)},v=S
return $traceurRuntime.createClass(S,{transformFormalParameterList:function(t){for(var r=[],n=!1,s=!1,a=0;a<t.parameters.length;a++){var o=this.transformAny(t.parameters[a])
o!==t.parameters[a]&&(n=!0),o.isRestParameter()||!o.parameter.initializer&&!s?r.push(o):(s=!0,n=!0,this.parameterStatements.push(e(a,o.parameter.binding,o.parameter.initializer)))}return n?new i(t.location,r):t},transformConstructorType:function(e){return e},transformFunctionType:function(e){return e}},{},s),{get DefaultParametersTransformer(){return S}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ExponentiationTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["Math.pow(",", ",")"],{raw:{value:Object.freeze(["Math.pow(",", ",")"])}})),t=System.get("traceur@0.0.87/src/codegeneration/ExplodeExpressionTransformer.js").ExplodeExpressionTransformer,r=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,n=System.get("traceur@0.0.87/src/syntax/TokenType.js"),i=n.STAR_STAR,s=n.STAR_STAR_EQUAL,a=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,o=function(){$traceurRuntime.superConstructor(c).apply(this,arguments)},c=o
return $traceurRuntime.createClass(o,{transformBinaryExpression:function(r){switch(r.operator.type){case i:var n=this.transformAny(r.left),o=this.transformAny(r.right)
return a(e,n,o)
case s:var u=new t(this).transformAny(r)
return this.transformAny(u)}return $traceurRuntime.superGet(this,c.prototype,"transformBinaryExpression").call(this,r)}},{},r),{get ExponentiationTransformer(){return o}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ForOfTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties([""," = ",".value;"],{raw:{value:Object.freeze([""," = ",".value;"])}})),t=Object.freeze(Object.defineProperties(["\n        for (var ",",\n                 "," = (",")[\n                     $traceurRuntime.toProperty(Symbol.iterator)]();\n             !("," = ("," = ",".next()).done);\n             "," = true) {\n          ","\n          ","\n        }"],{raw:{value:Object.freeze(["\n        for (var ",",\n                 "," = (",")[\n                     $traceurRuntime.toProperty(Symbol.iterator)]();\n             !("," = ("," = ",".next()).done);\n             "," = true) {\n          ","\n          ","\n        }"])}})),r=Object.freeze(Object.defineProperties(["\n        var "," = true;\n        var "," = false;\n        var "," = undefined;\n        try {\n          ","\n        } catch (",") {\n          "," = true;\n          "," = ",";\n        } finally {\n          try {\n            if (!"," && ",".return != null) {\n              ",".return();\n            }\n          } finally {\n            if (",") {\n              throw ",";\n            }\n          }\n        }"],{raw:{value:Object.freeze(["\n        var "," = true;\n        var "," = false;\n        var "," = undefined;\n        try {\n          ","\n        } catch (",") {\n          "," = true;\n          "," = ",";\n        } finally {\n          try {\n            if (!"," && ",".return != null) {\n              ",".return();\n            }\n          } finally {\n            if (",") {\n              throw ",";\n            }\n          }\n        }"])}})),n=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),i=n.FOR_OF_STATEMENT,s=n.VARIABLE_DECLARATION_LIST,a=n.LABELLED_STATEMENT,o=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,c=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),u=c.createIdentifierExpression,l=c.createMemberExpression,p=c.createVariableStatement,f=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),h=f.parseStatement,m=f.parseStatements,d=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),g=d.AnonBlock,y=d.LabelledStatement,_=function(){$traceurRuntime.superConstructor(S).apply(this,arguments)},S=_
return $traceurRuntime.createClass(_,{transformForOfStatement:function(e){return this.transformForOfStatement_(e,[])},transformForOfStatement_:function(n,i){var a,o,c,f=$traceurRuntime.superGet(this,S.prototype,"transformForOfStatement").call(this,n),d=u(this.getTempIdentifier()),_=u(this.getTempIdentifier()),v=(u(this.getTempIdentifier()),u(this.getTempIdentifier())),b=u(this.getTempIdentifier()),T=u(this.getTempIdentifier()),j=u(this.getTempIdentifier())
for(c=f.initializer.type===s?p(f.initializer.declarationType,f.initializer.declarations[0].lvalue,l(_,"value")):h(e,f.initializer,_),o=h(t,_,d,f.collection,v,_,d,v,c,f.body);a=i.pop();)o=new y(a.location,a.name,o)
return new g(null,m(r,v,b,T,o,j,b,T,j,v,d,d,b,T))},transformLabelledStatement:function(e){for(var t=[e],r=e.statement;r.type===a;)t.push(r),r=r.statement
return r.type!==i?$traceurRuntime.superGet(this,S.prototype,"transformLabelledStatement").call(this,e):this.transformForOfStatement_(r,t)}},{},o),{get ForOfTransformer(){return _}}}),System.registerModule("traceur@0.0.87/src/codegeneration/InnerForOnTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["\n          "," = ",";"],{raw:{value:Object.freeze(["\n          "," = ",";"])}})),t=Object.freeze(Object.defineProperties(["\n        return ",".v;"],{raw:{value:Object.freeze(["\n        return ",".v;"])}})),r=Object.freeze(Object.defineProperties(["\n        do {\n          ","\n            await $traceurRuntime.observeForEach(\n              ","[$traceurRuntime.toProperty(Symbol.observer)].\n                  bind(","),\n              async function (",") {\n                var "," = this;\n                try {\n                  ","\n                } catch (e) {\n                  ",".throw(e);\n                }\n              });\n          ","\n        } while (false);"],{raw:{value:Object.freeze(["\n        do {\n          ","\n            await $traceurRuntime.observeForEach(\n              ","[$traceurRuntime.toProperty(Symbol.observer)].\n                  bind(","),\n              async function (",") {\n                var "," = this;\n                try {\n                  ","\n                } catch (e) {\n                  ",".throw(e);\n                }\n              });\n          ","\n        } while (false);"])}})),n=Object.freeze(Object.defineProperties(["\n        ",".return();\n        "," = {v: ","};\n        return;"],{raw:{value:Object.freeze(["\n        ",".return();\n        "," = {v: ","};\n        return;"])}})),i=Object.freeze(Object.defineProperties(["\n        ",".return();\n        "," = ",";\n        return;"],{raw:{value:Object.freeze(["\n        ",".return();\n        "," = ",";\n        return;"])}})),s=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,a=System.get("traceur@0.0.87/src/codegeneration/alphaRenameThisAndArguments.js")["default"],o=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),c=o.parseStatement,u=o.parseStatements,l=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),p=l.AnonBlock,f=l.Block,h=l.ContinueStatement,m=l.LabelledStatement,d=l.ReturnStatement,g=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,y=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),_=y.createAssignmentStatement,S=y.createCaseClause,v=y.createDefaultClause,b=y.createIdentifierExpression,T=y.createNumberLiteral,j=y.createSwitchStatement,E=y.createThisExpression,O=y.createVariableStatement,A=y.createVariableDeclaration,R=y.createVariableDeclarationList,x=y.createVoid0,w=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").ARGUMENTS,C=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,P=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js").VARIABLE_DECLARATION_LIST,L=function(e,t){var r
$traceurRuntime.superConstructor(I).call(this),this.idGenerator_=e,this.inLoop_=0,this.inBreakble_=0,this.variableDeclarations_=[],this.extractedStatements_=[],this.labelSet_=t,this.labelledStatements_=new g,this.observer_=b(this.idGenerator_.getTempIdentifier()),this.result_=b(this.idGenerator_.getTempIdentifier()),this.parentLabels_=new g,this.labelSet_.forEach((r=this,function(e){r.parentLabels_.add(e.name.value)}))},I=L
return $traceurRuntime.createClass(L,{transform:function(n){var i,s=b(this.idGenerator_.getTempIdentifier())
i=n.initializer.type===P?O(n.initializer.declarationType,n.initializer.declarations[0].lvalue,s):c(e,n.initializer,s)
var o=new f(n.body.location,$traceurRuntime.spread([i],n.body.statements))
o=this.transformAny(o),o=a(this,o),this.variableDeclarations_.push(A(this.result_,x()))
var l=this.extractedStatements_.map(function(e,t){return S(T(t),[e])})
l.push(S(x(),[new h(null,null)])),l.push(v(u(t,this.result_)))
for(var p,d=j(this.result_,l),g=c(r,O(R(C,this.variableDeclarations_)),n.observable,n.observable,s,this.observer_,o,this.observer_,d);p=this.labelSet_.pop();)g=new m(p.location,p.name,g)
return g},addTempVarForArguments:function(){var e=this.idGenerator_.generateUniqueIdentifier()
return this.variableDeclarations_.push(A(e,b(w))),e},addTempVarForThis:function(){var e=this.idGenerator_.generateUniqueIdentifier()
return this.variableDeclarations_.push(A(e,E())),e},transformAny:function(e){return e&&(e.isBreakableStatement()&&this.inBreakble_++,e.isIterationStatement()&&this.inLoop_++,e=$traceurRuntime.superGet(this,I.prototype,"transformAny").call(this,e),e.isBreakableStatement()&&this.inBreakble_--,e.isIterationStatement()&&this.inLoop_--),e},transformReturnStatement:function(e){return new p(e.location,u(n,this.observer_,this.result_,e.expression||x()))},transformAbruptCompletion_:function(e){this.extractedStatements_.push(e)
var t=this.extractedStatements_.length-1
return new p(null,u(i,this.observer_,this.result_,t))},transformBreakStatement:function(e){return e.name?this.labelledStatements_.has(e.name.value)?$traceurRuntime.superGet(this,I.prototype,"transformBreakStatement").call(this,e):this.transformAbruptCompletion_(e):this.inBreakble_?$traceurRuntime.superGet(this,I.prototype,"transformBreakStatement").call(this,e):this.transformAbruptCompletion_(new h(e.location,null))},transformContinueStatement:function(e){return e.name?this.labelledStatements_.has(e.name.value)?$traceurRuntime.superGet(this,I.prototype,"transformContinueStatement").call(this,e):this.parentLabels_.has(e.name.value)?new d(e.location,null):this.transformAbruptCompletion_(e):this.inLoop_?$traceurRuntime.superGet(this,I.prototype,"transformContinueStatement").call(this,e):new d(e.location,null)},transformLabelledStatement:function(e){return this.labelledStatements_.add(e.name.value),$traceurRuntime.superGet(this,I.prototype,"transformLabelledStatement").call(this,e)},transformVariableStatement:function(e){var t=this,r=this
if(e.declarations.declarationType===C){var n=[]
return e.declarations.declarations.forEach(function(e){var i=e.lvalue.getStringValue(),s=$traceurRuntime.superGet(t,I.prototype,"transformAny").call(t,e.initializer)
r.variableDeclarations_.push(A(i,null)),n.push(_(b(i),s))}),new p(null,n)}return $traceurRuntime.superGet(this,I.prototype,"transformVariableStatement").call(this,e)},transformFunctionDeclaration:function(e){return e},transformFunctionExpression:function(e){return e},transformSetAccessor:function(e){return e},transformGetAccessor:function(e){return e},transformPropertyMethodAssignment:function(e){return e},transformArrowFunctionExpression:function(e){return e}},{transform:function(e,t,r){return new I(e,r).transform(t)}},s),{get InnerForOnTransformer(){return L}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ForOnTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),t=e.FOR_ON_STATEMENT,r=e.LABELLED_STATEMENT,n=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,i=System.get("traceur@0.0.87/src/codegeneration/InnerForOnTransformer.js").InnerForOnTransformer,s=function(){$traceurRuntime.superConstructor(a).apply(this,arguments)},a=s
return $traceurRuntime.createClass(s,{transformForOnStatement:function(e){return this.transformForOnStatement_(e,[])},transformForOnStatement_:function(e,t){return i.transform(this,$traceurRuntime.superGet(this,a.prototype,"transformForOnStatement").call(this,e),t)},transformLabelledStatement:function(e){var n,i=[e]
for(n=e.statement;n.type===r;n=n.statement)i.push(n)
return n.type!==t?$traceurRuntime.superGet(this,a.prototype,"transformLabelledStatement").call(this,e):this.transformForOnStatement_(n,i)}},{},n),{get ForOnTransformer(){return s}}}),System.registerModule("traceur@0.0.87/src/codegeneration/GeneratorComprehensionTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["yield ",""],{raw:{value:Object.freeze(["yield ",""])}})),t=System.get("traceur@0.0.87/src/codegeneration/ComprehensionTransformer.js").ComprehensionTransformer,r=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,n=function(){$traceurRuntime.superConstructor(i).apply(this,arguments)},i=n
return $traceurRuntime.createClass(n,{transformGeneratorComprehension:function(t){var n=this.transformAny(t.expression),i=r(e,n),s=!0
return this.transformComprehension(t,i,s)}},{},t),{get GeneratorComprehensionTransformer(){return n}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/State.js",[],function(){"use strict"
function e(e,r){var i=e.finallyState
return[n(i),o(t,r)]}var t=Object.freeze(Object.defineProperties(["$ctx.finallyFallThrough = ",""],{raw:{value:Object.freeze(["$ctx.finallyFallThrough = ",""])}})),r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),n=r.createAssignStateStatement,i=r.createBreakStatement,s=r.createCaseClause,a=r.createNumberLiteral,o=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,c=function(e){this.id=e}
return $traceurRuntime.createClass(c,{transformMachineState:function(e,t,r){return s(a(this.id),this.transform(e,t,r))},transformBreak:function(){return this},transformBreakOrContinue:function(){arguments[1],arguments[2]
return this}},{}),c.START_STATE=0,c.INVALID_STATE=-1,c.END_STATE=-2,c.RETHROW_STATE=-3,c.generateJump=function(e,t){return $traceurRuntime.spread(c.generateAssignState(e,t),[i()])},c.generateAssignState=function(t,r){var i
return i=c.isFinallyExit(t,r)?e(t,r):[n(r)]},c.isFinallyExit=function(e,t){return null!=e&&e.tryStates.indexOf(t)<0},c.replaceStateList=function(e,t,r){for(var n=[],i=0;i<e.length;i++)n.push(c.replaceStateId(e[i],t,r))
return n},c.replaceStateId=function(e,t,r){return e===t?r:e},c.replaceAllStates=function(e,t,r){for(var n=[],i=0;i<e.length;i++)n.push(e[i].replaceState(t,r))
return n},{get State(){return c}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/TryState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,t={CATCH:"catch",FINALLY:"finally"},r=function(e,t,r){this.kind=e,this.tryStates=t,this.nestedTrys=r}
return $traceurRuntime.createClass(r,{replaceAllStates:function(t,r){return e.replaceStateList(this.tryStates,t,r)},replaceNestedTrys:function(e,t){for(var r=[],n=0;n<this.nestedTrys.length;n++)r.push(this.nestedTrys[n].replaceState(e,t))
return r}},{}),r.Kind=t,{get TryState(){return r}}}),System.registerModule("traceur@0.0.87/src/syntax/trees/StateMachine.js",[],function(){"use strict"
function e(t,r,n){for(var i=0;i<n.length;i++){var s=n[i]
if(s.kind===t)for(var a=0;a<s.tryStates.length;a++){var o=s.tryStates[a]
r[o]=s}e(t,r,s.nestedTrys)}}function t(e,r){for(var n=0;n<e.length;n++){var i=e[n]
i.kind===s.Kind.CATCH&&r.push(i),t(i.nestedTrys,r)}}var r=System.get("traceur@0.0.87/src/syntax/trees/ParseTree.js").ParseTree,n=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js").STATE_MACHINE,i=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,s=System.get("traceur@0.0.87/src/codegeneration/generator/TryState.js").TryState,a=function(e,t,r,n){$traceurRuntime.superConstructor(o).call(this,null),this.startState=e,this.fallThroughState=t,this.states=r,this.exceptionBlocks=n},o=a
return $traceurRuntime.createClass(a,{get type(){return n},transform:function(e){return e.transformStateMachine(this)},visit:function(e){e.visitStateMachine(this)},getAllStateIDs:function(){for(var e=[],t=0;t<this.states.length;t++)e.push(this.states[t].id)
return e},getEnclosingFinallyMap:function(){var t=Object.create(null)
return e(s.Kind.FINALLY,t,this.exceptionBlocks),t},allCatchStates:function(){var e=[]
return t(this.exceptionBlocks,e),e},replaceStateId:function(e,t){return new o(i.replaceStateId(this.startState,e,t),i.replaceStateId(this.fallThroughState,e,t),i.replaceAllStates(this.states,e,t),i.replaceAllStates(this.exceptionBlocks,e,t))},replaceStartState:function(e){return this.replaceStateId(this.startState,e)},replaceFallThroughState:function(e){return this.replaceStateId(this.fallThroughState,e)},append:function(e){for(var t=$traceurRuntime.spread(this.states),r=0;r<e.states.length;r++){var n=e.states[r]
t.push(n.replaceState(e.startState,this.fallThroughState))}for(var i=$traceurRuntime.spread(this.exceptionBlocks),s=0;s<e.exceptionBlocks.length;s++){var a=e.exceptionBlocks[s]
i.push(a.replaceState(e.startState,this.fallThroughState))}return new o(this.startState,e.fallThroughState,t,i)}},{},r),{get StateMachine(){return a}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/AwaitState.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["$ctx.finallyFallThrough = ",""],{raw:{value:Object.freeze(["$ctx.finallyFallThrough = ",""])}})),t=Object.freeze(Object.defineProperties(["Promise.resolve(",").then(\n          $ctx.createCallback(","), $ctx.errback);\n          return;"],{raw:{value:Object.freeze(["Promise.resolve(",").then(\n          $ctx.createCallback(","), $ctx.errback);\n          return;"])}})),r=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,n=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatements,i=function(e,t,r){$traceurRuntime.superConstructor(s).call(this,e),this.callbackState=t,this.expression=r},s=i
return $traceurRuntime.createClass(i,{replaceState:function(e,t){return new s(r.replaceStateId(this.id,e,t),r.replaceStateId(this.callbackState,e,t),this.expression)},transform:function(i){var s,a,o
return r.isFinallyExit(i,this.callbackState)?(a=i.finallyState,o=n(e,this.callbackState)):(a=this.callbackState,o=[]),(s=o).push.apply(s,$traceurRuntime.spread(n(t,this.expression,a))),o}},{},r),{get AwaitState(){return i}}}),System.registerModule("traceur@0.0.87/src/codegeneration/HoistVariablesTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),t=e.AnonBlock,r=e.Catch,n=e.FunctionBody,i=e.ForInStatement,s=e.ForOfStatement,a=e.ForStatement,o=e.VariableDeclarationList,c=e.VariableStatement,u=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),l=u.OBJECT_PATTERN,p=u.VARIABLE_DECLARATION_LIST,f=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,h=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,m=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,d=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),g=d.createAssignmentExpression,y=d.createCommaExpression,_=d.createExpressionStatement,S=d.createIdentifierExpression,v=d.createParenExpression,b=d.createVariableDeclaration,T=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,j=function(){var e=void 0!==arguments[0]?arguments[0]:!1
$traceurRuntime.superConstructor(E).call(this),this.hoistedFunctions_=[],this.hoistedVariables_=new h,this.keepBindingIdentifiers_=!1,this.inBlockOrFor_=!1,this.shouldHoistFunctions_=e},E=j
$traceurRuntime.createClass(j,{transformFunctionBody:function(e){var t=this.transformList(e.statements)
return t===e.statements?e:(t=this.prependVariables(t),t=this.prependFunctions(t),new n(e.location,t))},addVariable:function(e){this.hoistedVariables_.add(e)},addFunctionDeclaration:function(e){this.hoistedFunctions_.push(e)},hasVariables:function(){return!this.hoistedVariables_.isEmpty()},hasFunctions:function(){return this.hoistedFunctions_.length>0},getVariableNames:function(){return this.hoistedVariables_.valuesAsArray()},getVariableStatement:function(){if(!this.hasVariables())return new t(null,[])
var e=this.getVariableNames().map(function(e){return b(e,null)})
return new c(null,new o(null,m,e))},getFunctions:function(){return this.hoistedFunctions_},prependVariables:function(e){return this.hasVariables()?T(e,this.getVariableStatement()):e},prependFunctions:function(e){return this.hasFunctions()?T(e,this.getFunctionDeclarations()):e},transformVariableStatement:function(e){var r=this.transformAny(e.declarations)
return r===e.declarations?e:null===r?new t(null,[]):r.type===p?new c(e.location,r):_(r)},transformVariableDeclaration:function(e){var t=this.transformAny(e.lvalue),r=this.transformAny(e.initializer)
if(r){var n=g(t,r)
return t.type===l&&(n=v(n)),n}return null},transformObjectPattern:function(e){var t=this.keepBindingIdentifiers_
this.keepBindingIdentifiers_=!0
var r=$traceurRuntime.superGet(this,E.prototype,"transformObjectPattern").call(this,e)
return this.keepBindingIdentifiers_=t,r},transformArrayPattern:function(e){var t=this.keepBindingIdentifiers_
this.keepBindingIdentifiers_=!0
var r=$traceurRuntime.superGet(this,E.prototype,"transformArrayPattern").call(this,e)
return this.keepBindingIdentifiers_=t,r},transformBindingIdentifier:function(e){var t=e.identifierToken
return this.addVariable(t.value),this.keepBindingIdentifiers_?e:S(t)},transformVariableDeclarationList:function(e){if(e.declarationType===m||!this.inBlockOrFor_){var t=this.transformList(e.declarations)
return t=t.filter(function(e){return e}),0===t.length?null:1===t.length?t[0]:y(t)}return e},transformCatch:function(e){var t=this.transformAny(e.catchBody)
return t===e.catchBody?e:new r(e.location,e.binding,t)},transformForInStatement:function(e){return this.transformLoop_(e,i)},transformForOfStatement:function(e){return this.transformLoop_(e,s)},transformForOnStatement:function(e){return this.transformLoop_(e,s)},transformLoop_:function(e,t){var r=this.transformLoopIninitaliser_(e.initializer),n=this.transformAny(e.collection),i=this.transformAny(e.body)
return r===e.initializer&&n===e.collection&&i===e.body?e:new t(e.location,r,n,i)},transformLoopIninitaliser_:function(e){return e.type!==p||e.declarationType!==m?e:this.transformAny(e.declarations[0].lvalue)},transformForStatement:function(e){var t=this.inBlockOrFor_
this.inBlockOrFor_=!0
var r=this.transformAny(e.initializer)
this.inBlockOrFor_=t
var n=this.transformAny(e.condition),i=this.transformAny(e.increment),s=this.transformAny(e.body)
return r===e.initializer&&n===e.condition&&i===e.increment&&s===e.body?e:new a(e.location,r,n,i,s)},transformBlock:function(e){var t=this.inBlockOrFor_
return this.inBlockOrFor_=!0,e=$traceurRuntime.superGet(this,E.prototype,"transformBlock").call(this,e),this.inBlockOrFor_=t,e},addMachineVariable:function(e){this.machineVariables_[e]=!0},transformClassDeclaration:function(e){return e},transformClassExpression:function(e){return e},transformFunctionDeclaration:function(e){return this.shouldHoistFunctions_?(this.addFunctionDeclaration(e),new t(null,[])):e},transformFunctionExpression:function(e){return e},transformGetAccessor:function(e){return e},transformSetAccessor:function(e){return e},transformPropertyMethodAssignment:function(e){return e},transformArrowFunctionExpression:function(e){return e},transformComprehensionFor:function(e){return e}},{},f)
var O=j
return{get default(){return O}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/FallThroughState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,t=function(e,t,n){$traceurRuntime.superConstructor(r).call(this,e),this.fallThroughState=t,this.statements=n},r=t
return $traceurRuntime.createClass(t,{replaceState:function(t,n){return new r(e.replaceStateId(this.id,t,n),e.replaceStateId(this.fallThroughState,t,n),this.statements)},transform:function(t){return $traceurRuntime.spread(this.statements,e.generateJump(t,this.fallThroughState))}},{},e),{get FallThroughState(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/BreakState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/FallThroughState.js").FallThroughState,t=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,r=function(e,t){$traceurRuntime.superConstructor(n).call(this,e),this.label=t},n=r
return $traceurRuntime.createClass(r,{replaceState:function(e,r){return new n(t.replaceStateId(this.id,e,r),this.label)},transform:function(){throw Error("These should be removed before the transform step")},transformBreak:function(t){var r=arguments[1]
return null===this.label?new e(this.id,r,[]):t.has(this.label)?new e(this.id,t.get(this.label).fallThroughState,[]):this},transformBreakOrContinue:function(e){var t=arguments[1]
arguments[2]
return this.transformBreak(e,t)}},{},t),{get BreakState(){return r}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/ContinueState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/FallThroughState.js").FallThroughState,t=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,r=function(e,t){$traceurRuntime.superConstructor(n).call(this,e),this.label=t},n=r
return $traceurRuntime.createClass(r,{replaceState:function(e,r){return new n(t.replaceStateId(this.id,e,r),this.label)},transform:function(){throw Error("These should be removed before the transform step")},transformBreakOrContinue:function(t){var r=(arguments[1],arguments[2])
return null===this.label?new e(this.id,r,[]):t.has(this.label)?new e(this.id,t.get(this.label).continueState,[]):this}},{},t),{get ContinueState(){return r}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/BreakContinueTransformer.js",[],function(){"use strict"
function e(e){return e.name?e.name.value:null}var t=System.get("traceur@0.0.87/src/codegeneration/generator/BreakState.js").BreakState,r=System.get("traceur@0.0.87/src/codegeneration/generator/ContinueState.js").ContinueState,n=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,i=System.get("traceur@0.0.87/src/syntax/trees/StateMachine.js").StateMachine,s=function(e){$traceurRuntime.superConstructor(a).call(this),this.transformBreaks_=!0,this.stateAllocator_=e},a=s
return $traceurRuntime.createClass(s,{allocateState_:function(){return this.stateAllocator_.allocateState()},stateToStateMachine_:function(e){var t=this.allocateState_()
return new i(e.id,t,[e],[])},transformBreakStatement:function(r){return this.transformBreaks_||r.name?this.stateToStateMachine_(new t(this.allocateState_(),e(r))):r},transformContinueStatement:function(t){return this.stateToStateMachine_(new r(this.allocateState_(),e(t)))},transformDoWhileStatement:function(e){return e},transformForOfStatement:function(e){return e},transformForOnStatement:function(e){return e},transformForStatement:function(e){return e},transformFunctionDeclaration:function(e){return e},transformFunctionExpression:function(e){return e},transformStateMachine:function(e){return e},transformSwitchStatement:function(e){var t=this.transformBreaks_
this.transformBreaks_=!1
var r=$traceurRuntime.superGet(this,a.prototype,"transformSwitchStatement").call(this,e)
return this.transformBreaks_=t,r},transformWhileStatement:function(e){return e}},{},n),{get BreakContinueTransformer(){return s}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/CatchState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,t=System.get("traceur@0.0.87/src/codegeneration/generator/TryState.js").TryState,r=function(e,r,i,s,a){$traceurRuntime.superConstructor(n).call(this,t.Kind.CATCH,s,a),this.identifier=e,this.catchState=r,this.fallThroughState=i},n=r
return $traceurRuntime.createClass(r,{replaceState:function(t,r){return new n(this.identifier,e.replaceStateId(this.catchState,t,r),e.replaceStateId(this.fallThroughState,t,r),this.replaceAllStates(t,r),this.replaceNestedTrys(t,r))}},{},t),{get CatchState(){return r}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/ConditionalState.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["$ctx.state = (",") ? "," : ",";\n        break"],{raw:{value:Object.freeze(["$ctx.state = (",") ? "," : ",";\n        break"])}})),t=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),n=r.createBlock,i=r.createIfStatement,s=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatements,a=function(e,t,r,n){$traceurRuntime.superConstructor(o).call(this,e),this.ifState=t,this.elseState=r,this.condition=n},o=a
return $traceurRuntime.createClass(a,{replaceState:function(e,r){return new o(t.replaceStateId(this.id,e,r),t.replaceStateId(this.ifState,e,r),t.replaceStateId(this.elseState,e,r),this.condition)},transform:function(r){return t.isFinallyExit(r,this.ifState)||t.isFinallyExit(r,this.elseState)?[i(this.condition,n(t.generateJump(r,this.ifState)),n(t.generateJump(r,this.elseState)))]:s(e,this.condition,this.ifState,this.elseState)}},{},t),{get ConditionalState(){return a}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/FinallyFallThroughState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,t=function(){$traceurRuntime.superConstructor(r).apply(this,arguments)},r=t
return $traceurRuntime.createClass(t,{replaceState:function(t,n){return new r(e.replaceStateId(this.id,t,n))},transformMachineState:function(){return null},transform:function(){throw Error("these are generated in addFinallyFallThroughDispatches")}},{},e),{get FinallyFallThroughState(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/FinallyState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,t=System.get("traceur@0.0.87/src/codegeneration/generator/TryState.js").TryState,r=function(e,r,i,s){$traceurRuntime.superConstructor(n).call(this,t.Kind.FINALLY,i,s),this.finallyState=e,this.fallThroughState=r},n=r
return $traceurRuntime.createClass(r,{replaceState:function(t,r){return new n(e.replaceStateId(this.finallyState,t,r),e.replaceStateId(this.fallThroughState,t,r),this.replaceAllStates(t,r),this.replaceNestedTrys(t,r))}},{},t),{get FinallyState(){return r}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/StateAllocator.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,t=function(){this.nextState_=e.START_STATE+1}
return $traceurRuntime.createClass(t,{allocateState:function(){return this.nextState_++}},{}),{get StateAllocator(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/SwitchState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),t=e.CaseClause,r=e.DefaultClause,n=e.SwitchStatement,i=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,s=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js").createBreakStatement,a=function(e,t){this.first=e,this.second=t}
$traceurRuntime.createClass(a,{},{})
var o=function(e,t,r){$traceurRuntime.superConstructor(c).call(this,e),this.expression=t,this.clauses=r},c=o
return $traceurRuntime.createClass(o,{replaceState:function(e,t){var r=this.clauses.map(function(r){return new a(r.first,i.replaceStateId(r.second,e,t))})
return new c(i.replaceStateId(this.id,e,t),this.expression,r)},transform:function(e){for(var a=[],o=0;o<this.clauses.length;o++){var c=this.clauses[o]
a.push(null===c.first?new r(null,i.generateJump(e,c.second)):new t(null,c.first,i.generateJump(e,c.second)))}return[new n(null,this.expression,a),s()]}},{},i),{get SwitchClause(){return a},get SwitchState(){return o}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/CPSTransformer.js",[],function(){"use strict"
function e(e){var t=new ue
return t.visitAny(e),t.found}function t(e){return e.type===v?t(e.expression):new E(e.location,e.statements)}var r=Object.freeze(Object.defineProperties(["$ctx.pushTry(\n            ",",\n            ",");"],{raw:{value:Object.freeze(["$ctx.pushTry(\n            ",",\n            ",");"])}})),n=Object.freeze(Object.defineProperties(["$ctx.popTry();"],{raw:{value:Object.freeze(["$ctx.popTry();"])}})),i=Object.freeze(Object.defineProperties(["\n              $ctx.popTry();\n              $ctx.maybeUncatchable(); // see RETURN_SENTINEL in runtime\n              "," = $ctx.storedException;"],{raw:{value:Object.freeze(["\n              $ctx.popTry();\n              $ctx.maybeUncatchable(); // see RETURN_SENTINEL in runtime\n              "," = $ctx.storedException;"])}})),s=Object.freeze(Object.defineProperties(["$ctx.popTry();"],{raw:{value:Object.freeze(["$ctx.popTry();"])}})),a=Object.freeze(Object.defineProperties(["function($ctx) {\n      while (true) ","\n    }"],{raw:{value:Object.freeze(["function($ctx) {\n      while (true) ","\n    }"])}})),o=Object.freeze(Object.defineProperties(["var $arguments = arguments;"],{raw:{value:Object.freeze(["var $arguments = arguments;"])}})),c=Object.freeze(Object.defineProperties(["return ","(\n              ",",\n              ",", this);"],{raw:{value:Object.freeze(["return ","(\n              ",",\n              ",", this);"])}})),u=Object.freeze(Object.defineProperties(["return ","(\n              ",", this);"],{raw:{value:Object.freeze(["return ","(\n              ",", this);"])}})),l=Object.freeze(Object.defineProperties(["return $ctx.end()"],{raw:{value:Object.freeze(["return $ctx.end()"])}})),p=Object.freeze(Object.defineProperties(["\n                  $ctx.state = $ctx.finallyFallThrough;\n                  $ctx.finallyFallThrough = ",";\n                  break;"],{raw:{value:Object.freeze(["\n                  $ctx.state = $ctx.finallyFallThrough;\n                  $ctx.finallyFallThrough = ",";\n                  break;"])}})),f=Object.freeze(Object.defineProperties(["\n                      $ctx.state = $ctx.finallyFallThrough;\n                      break;"],{raw:{value:Object.freeze(["\n                      $ctx.state = $ctx.finallyFallThrough;\n                      break;"])}})),h=System.get("traceur@0.0.87/src/codegeneration/AlphaRenamer.js").AlphaRenamer,m=System.get("traceur@0.0.87/src/codegeneration/generator/BreakContinueTransformer.js").BreakContinueTransformer,d=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),g=d.BLOCK,y=d.CASE_CLAUSE,_=d.CONDITIONAL_EXPRESSION,S=d.EXPRESSION_STATEMENT,v=d.PAREN_EXPRESSION,b=d.STATE_MACHINE,T=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),j=T.AnonBlock,E=T.Block,O=T.CaseClause,A=T.IfStatement,R=T.SwitchStatement,x=System.get("traceur@0.0.87/src/codegeneration/generator/CatchState.js").CatchState,w=System.get("traceur@0.0.87/src/codegeneration/generator/ConditionalState.js").ConditionalState,C=System.get("traceur@0.0.87/src/codegeneration/ExplodeExpressionTransformer.js").ExplodeExpressionTransformer,P=System.get("traceur@0.0.87/src/codegeneration/generator/FallThroughState.js").FallThroughState,L=System.get("traceur@0.0.87/src/codegeneration/generator/FinallyFallThroughState.js").FinallyFallThroughState,I=System.get("traceur@0.0.87/src/codegeneration/generator/FinallyState.js").FinallyState,N=System.get("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js").FindInFunctionScope,M=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,k=System.get("traceur@0.0.87/src/util/StringMap.js").StringMap,F=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,$=System.get("traceur@0.0.87/src/util/assert.js").assert,B=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),D=B.parseExpression,V=B.parseStatement,G=B.parseStatements,U=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,z=System.get("traceur@0.0.87/src/codegeneration/generator/StateAllocator.js").StateAllocator,H=System.get("traceur@0.0.87/src/syntax/trees/StateMachine.js").StateMachine,Y=System.get("traceur@0.0.87/src/codegeneration/generator/SwitchState.js"),X=Y.SwitchClause,W=Y.SwitchState,Q=System.get("traceur@0.0.87/src/codegeneration/generator/TryState.js").TryState,K=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),q=K.createAssignStateStatement,J=K.createBreakStatement,Z=K.createCaseClause,ee=K.createDefaultClause,te=K.createExpressionStatement,re=K.createFunctionBody,ne=K.createIdentifierExpression,ie=K.createMemberExpression,se=K.createNumberLiteral,ae=K.createSwitchStatement,oe=System.get("traceur@0.0.87/src/codegeneration/HoistVariablesTransformer.js")["default"],ce=function(e,t,r){this.name=e,this.continueState=t,this.fallThroughState=r}
$traceurRuntime.createClass(ce,{},{})
var ue=function(){$traceurRuntime.superConstructor(le).apply(this,arguments)},le=ue
$traceurRuntime.createClass(ue,{visitBreakStatement:function(){this.found=!0},visitContinueStatement:function(){this.found=!0},visitStateMachine:function(){this.found=!0},visitYieldExpression:function(){this.found=!0}},{},N)
var pe=function(){$traceurRuntime.superConstructor(fe).call(this,!0)},fe=pe
$traceurRuntime.createClass(pe,{prependVariables:function(e){return e},prependFunctions:function(e){return e}},{},oe)
var he=function(e,t){$traceurRuntime.superConstructor(me).call(this,e),this.reporter=t,this.stateAllocator_=new z,this.labelSet_=new k,this.currentLabel_=null,this.hoistVariablesTransformer_=new pe},me=he
$traceurRuntime.createClass(he,{expressionNeedsStateMachine:function(){return!1},allocateState:function(){return this.stateAllocator_.allocateState()},transformBlock:function(e){var t=this.getLabels_(),r=this.clearCurrentLabel_(),n=$traceurRuntime.superGet(this,me.prototype,"transformBlock").call(this,e),i=this.transformStatementList_(n.statements)
if(null===i)return n
if(r){for(var s=[],a=0;a<i.states.length;a++){var o=i.states[a]
s.push(o.transformBreakOrContinue(t))}i=new H(i.startState,i.fallThroughState,s,i.exceptionBlocks)}return i},transformFunctionBody:function(e){this.pushTempScope()
var t=this.clearLabels_(),r=$traceurRuntime.superGet(this,me.prototype,"transformFunctionBody").call(this,e),n=this.transformStatementList_(r.statements)
return this.restoreLabels_(t),this.popTempScope(),null===n?r:n},transformStatementList_:function(t){for(var r,n=[],i=0;i<t.length;i++)if(t[i].type===b)n.push(t[i])
else if(e(t[i]))r=this.ensureTransformed_(t[i]),n.push(r)
else{var s=n[n.length-1]
s instanceof Array||n.push(s=[]),s.push(t[i])}if(1===n.length&&n[0]instanceof Array)return null
for(var a=null,o=0;o<n.length;o++)r=n[o]instanceof Array?this.statementsToStateMachine_(n[o]):n[o],a=0===o?r:a.append(r)
return a},needsStateMachine_:function(t){if(t instanceof Array){for(var r=0;r<t.length;r++)if(e(t[r]))return!0
return!1}return $(t instanceof R),e(t)},transformCaseClause:function(e){var t=$traceurRuntime.superGet(this,me.prototype,"transformCaseClause").call(this,e),r=this.transformStatementList_(t.statements)
return null===r?t:new O(null,t.expression,[r])},transformDoWhileStatement:function(e){var t,r,n,i,s,a,o=this.getLabels_(),c=this.clearCurrentLabel_()
if(this.expressionNeedsStateMachine(e.condition))r=this.expressionToStateMachine(e.condition),i=r.machine,s=r.expression,r,a=this.transformAny(e.body)
else{var u=$traceurRuntime.superGet(this,me.prototype,"transformDoWhileStatement").call(this,e)
if(n=u,s=n.condition,a=n.body,n,a.type!==b)return u}var l=this.ensureTransformed_(a),p=l.startState,f=l.fallThroughState,h=this.allocateState(),m=[]
return this.addLoopBodyStates_(l,f,h,o,m),i&&(i=i.replaceStartState(f),f=i.fallThroughState,(t=m).push.apply(t,$traceurRuntime.spread(i.states))),m.push(new w(f,p,h,s)),i=new H(p,h,m,l.exceptionBlocks),c&&(i=i.replaceStateId(f,c.continueState)),i},addLoopBodyStates_:function(e,t,r,n,i){for(var s=0;s<e.states.length;s++){var a=e.states[s]
i.push(a.transformBreakOrContinue(n,r,t))}},transformForStatement:function(e){var t,r,n,i,s,a=this.getLabels_(),o=this.clearCurrentLabel_(),c=null
e.initializer&&(this.expressionNeedsStateMachine(e.initializer)?(i=this.expressionToStateMachine(e.initializer),c=i.expression,s=i.machine):c=this.transformAny(e.initializer))
var u,l=null
e.condition&&(this.expressionNeedsStateMachine(e.condition)?(i=this.expressionToStateMachine(e.condition),l=i.expression,u=i.machine):l=this.transformAny(e.condition))
var p,f=null
e.increment&&(this.expressionNeedsStateMachine(e.increment)?(i=this.expressionToStateMachine(e.increment),f=i.expression,p=i.machine):f=this.transformAny(e.increment))
var h=this.transformAny(e.body)
if(c===e.initializer&&l===e.condition&&f===e.increment&&h===e.body)return e
if(!s&&!u&&!p&&h.type!==b)return new ForStatement(e.location,c,l,f,h)
var m,d=this.ensureTransformed_(h),g=d.fallThroughState,y=this.allocateState(),_=c?this.allocateState():U.INVALID_STATE,S=f?this.allocateState():g,v=d.startState,T=g,j=[]
if(c){m=_
var E
E=l?S:v
var O=_
s&&(s=s.replaceStartState(_),O=s.fallThroughState,(t=j).push.apply(t,$traceurRuntime.spread(s.states))),j.push(new P(O,E,[te(c)]))}if(l){c||(m=S)
var A=S
u&&(u=u.replaceStartState(S),A=u.fallThroughState,(r=j).push.apply(r,$traceurRuntime.spread(u.states))),j.push(new w(A,v,y,l))}if(f){var R
R=l?S:v
var x=T
p&&(p=p.replaceStartState(T),x=p.fallThroughState,(n=j).push.apply(n,$traceurRuntime.spread(p.states))),j.push(new P(x,R,[te(f)]))}c||l||(m=v)
var C
C=f?T:l?S:v,f||l||(d=d.replaceFallThroughState(d.startState)),this.addLoopBodyStates_(d,C,y,a,j)
var L=new H(m,y,j,d.exceptionBlocks)
return o&&(L=L.replaceStateId(C,o.continueState)),L},transformForInStatement:function(e){return e},transformForOfStatement:function(){throw Error("for of statements should be transformed before this pass")},transformIfStatement:function(e){var t,r,n,i,s,a,o,c,u
if(this.expressionNeedsStateMachine(e.condition))i=this.expressionToStateMachine(e.condition),a=i.machine,o=i.expression,i,c=this.transformAny(e.ifClause),u=this.transformAny(e.elseClause)
else{var l=$traceurRuntime.superGet(this,me.prototype,"transformIfStatement").call(this,e)
if(s=l,o=s.condition,c=s.ifClause,u=s.elseClause,s,c.type!==b&&(null===u||u.type!==b))return l}c=this.ensureTransformed_(c),u=this.ensureTransformed_(u)
var p=this.allocateState(),f=c.fallThroughState,h=c.startState,m=null===u?f:u.startState,d=[],g=[]
d.push(new w(p,h,m,o)),(t=d).push.apply(t,$traceurRuntime.spread(c.states)),(r=g).push.apply(r,$traceurRuntime.spread(c.exceptionBlocks)),null!==u&&(this.replaceAndAddStates_(u.states,u.fallThroughState,f,d),(n=g).push.apply(n,$traceurRuntime.spread(U.replaceAllStates(u.exceptionBlocks,u.fallThroughState,f))))
var y=new H(p,f,d,g)
return a&&(y=a.append(y)),y},removeEmptyStates:function(e){for(var t=[],r=[],n=0;n<e.length;n++)e[n]instanceof P&&0===e[n].statements.length?t.push(e[n]):r.push(e[n])
for(n=0;n<r.length;n++)r[n]=t.reduce(function(e,t){var r=t,n=r.id,i=r.fallThroughState
return e.replaceState(n,i)},r[n])
return r},replaceAndAddStates_:function(e,t,r,n){for(var i=0;i<e.length;i++)n.push(e[i].replaceState(t,r))},transformLabelledStatement:function(e){var t=this.allocateState(),r=this.allocateState(),n=this.allocateState(),i=new ce(e.name.value,r,n),s=this.addLabel_(i)
this.currentLabel_=i
var a=this.transformAny(e.statement)
return a===e.statement?a=e:a.type===b&&(a=a.replaceStartState(t),a=a.replaceFallThroughState(n)),this.restoreLabels_(s),a},getLabels_:function(){return this.labelSet_},restoreLabels_:function(e){this.labelSet_=e},addLabel_:function(e){var t=this,r=this.labelSet_,n=new k
return this.labelSet_.forEach(function(e){return n[e]=t.labelSet_[e]}),n.set(e.name,e),this.labelSet_=n,r},clearLabels_:function(){var e=this.labelSet_
return this.labelSet_=new k,e},clearCurrentLabel_:function(){var e=this.currentLabel_
return this.currentLabel_=null,e},transformSwitchStatement:function(t){var r,n,i,s,a,o=this.getLabels_()
if(this.expressionNeedsStateMachine(t.expression))r=this.expressionToStateMachine(t.expression),i=r.expression,s=r.machine,r,a=this.transformList(t.caseClauses)
else{var c=$traceurRuntime.superGet(this,me.prototype,"transformSwitchStatement").call(this,t)
if(!e(c))return c
n=c,i=n.expression,a=n.caseClauses,n}for(var u=this.allocateState(),l=this.allocateState(),p=l,f=[],h=[],m=[],d=!1,g=a.length-1;g>=0;g--){var _=a[g]
if(_.type===y){var S=_
p=this.addSwitchClauseStates_(p,l,o,S.statements,f,m),h.push(new X(S.expression,p))}else{d=!0
var v=_
p=this.addSwitchClauseStates_(p,l,o,v.statements,f,m),h.push(new X(null,p))}}d||h.push(new X(null,l)),f.push(new W(u,i,h.reverse()))
var b=new H(u,l,f.reverse(),m)
return s&&(b=s.append(b)),b},addSwitchClauseStates_:function(e,t,r,n,i,s){for(var a,o=this.ensureTransformedList_(n),c=0;c<o.states.length;c++){var u=o.states[c],l=u.transformBreak(r,t)
i.push(l.replaceState(o.fallThroughState,e))}return(a=s).push.apply(a,$traceurRuntime.spread(o.exceptionBlocks)),o.startState},transformTryStatement:function(e){var t=$traceurRuntime.superGet(this,me.prototype,"transformTryStatement").call(this,e),a=t,o=a.body,c=a.catchBlock,u=a.finallyBlock
if(!(o.type===b||null!==c&&c.catchBody.type===b||null!==u&&u.block.type===b))return t
var l=this.allocateState(),p=this.allocateState(),f=this.statementToStateMachine_(V(r,c&&l,u&&p)),h=this.ensureTransformed_(o)
if(h=f.append(h),null!==c){var m=this.statementToStateMachine_(V(n))
h=h.append(m)
var d=c.binding.identifierToken.value,g=this.ensureTransformed_(c.catchBody),y=this.allocateState()
this.addMachineVariable(d)
var _=$traceurRuntime.spread(h.states,[new P(y,g.startState,G(i,ne(d)))])
this.replaceAndAddStates_(g.states,g.fallThroughState,h.fallThroughState,_),h=new H(h.startState,h.fallThroughState,_,[new x(d,y,h.fallThroughState,h.getAllStateIDs(),h.exceptionBlocks)]),h=h.replaceStateId(y,l)}if(null!==u){var S=this.ensureTransformed_(u.block),v=this.statementToStateMachine_(V(s))
S=v.append(S)
var T=$traceurRuntime.spread(h.states,S.states,[new L(S.fallThroughState)])
h=new H(h.startState,h.fallThroughState,T,[new I(S.startState,S.fallThroughState,h.getAllStateIDs(),h.exceptionBlocks)]),h=h.replaceStateId(S.startState,p)}return h},transformWhileStatement:function(e){var t,r,n,i,s,a,o=this.getLabels_(),c=this.clearCurrentLabel_()
if(this.expressionNeedsStateMachine(e.condition))r=this.expressionToStateMachine(e.condition),s=r.machine,i=r.expression,r,a=this.transformAny(e.body)
else{var u=$traceurRuntime.superGet(this,me.prototype,"transformWhileStatement").call(this,e)
if(n=u,i=n.condition,a=n.body,n,a.type!==b)return u}var l=this.ensureTransformed_(a),p=l.fallThroughState,f=this.allocateState(),h=[],m=p
return s&&(s=s.replaceStartState(p),m=s.fallThroughState,(t=h).push.apply(t,$traceurRuntime.spread(s.states))),h.push(new w(m,l.startState,f,i)),this.addLoopBodyStates_(l,p,f,o,h),s=new H(p,f,h,l.exceptionBlocks),c&&(s=s.replaceStateId(p,c.continueState)),s},transformWithStatement:function(e){var t=$traceurRuntime.superGet(this,me.prototype,"transformWithStatement").call(this,e)
if(t.body.type!==b)return t
throw Error("Unreachable - with statement not allowed in strict mode/harmony")},generateMachineInnerFunction:function(e){var t=e.getEnclosingFinallyMap(),r=ae(ie("$ctx","state"),this.transformMachineStates(e,U.END_STATE,U.RETHROW_STATE,t))
return D(a,r)},addTempVar:function(){var e=this.getTempIdentifier()
return this.addMachineVariable(e),e},addMachineVariable:function(e){this.hoistVariablesTransformer_.addVariable(e)},transformCpsFunctionBody:function(e,t){var r,n=arguments[2],i=h.rename(e,"arguments","$arguments"),s=i!==e,a=this.hoistVariablesTransformer_.transformAny(i),l=this.transformAny(a)
if(this.reporter.hadError())return e
var p
p=l.type!==b?this.statementsToStateMachine_(l.statements):new H(l.startState,l.fallThroughState,this.removeEmptyStates(l.states),l.exceptionBlocks),p=p.replaceFallThroughState(U.END_STATE).replaceStartState(U.START_STATE)
var f=[]
return this.hoistVariablesTransformer_.hasFunctions()&&(r=f).push.apply(r,$traceurRuntime.spread(this.hoistVariablesTransformer_.getFunctions())),this.hoistVariablesTransformer_.hasVariables()&&f.push(this.hoistVariablesTransformer_.getVariableStatement()),s&&f.push(V(o)),f.push(n?V(c,t,this.generateMachineInnerFunction(p),n):V(u,t,this.generateMachineInnerFunction(p))),re(f)},transformFunctionDeclaration:function(e){return e},transformFunctionExpression:function(e){return e},transformGetAccessor:function(e){return e},transformSetAccessor:function(e){return e},transformArrowFunctionExpression:function(e){return e},transformStateMachine:function(e){return e},statementToStateMachine_:function(e){var t
return t=e.type===g?e.statements:[e],this.statementsToStateMachine_(t)},statementsToStateMachine_:function(e){var t=this.allocateState(),r=this.allocateState()
return this.stateToStateMachine_(new P(t,r,e),r)},stateToStateMachine_:function(e,t){return new H(e.id,t,[e],[])},transformMachineStates:function(e,t,r,n){for(var i=[],s=0;s<e.states.length;s++){var a=e.states[s],o=a.transformMachineState(n[a.id],t,this.reporter)
null!==o&&i.push(o)}return this.addFinallyFallThroughDispatches(null,e.exceptionBlocks,i),i.push(ee(G(l))),i},addFinallyFallThroughDispatches:function(e,t,r){for(var n=0;n<t.length;n++){var i=t[n]
if(i.kind===Q.Kind.FINALLY){var s=i
if(null!==e){for(var a=[],o=0,c=0;c<e.tryStates.length;c++){var u=e.tryStates[c]
o++
var l
l=o<e.tryStates.length?[]:G(p,U.INVALID_STATE),a.push(Z(se(u),l))}a.push(ee([q(e.finallyState),J()])),r.push(Z(se(s.fallThroughState),[ae(ie("$ctx","finallyFallThrough"),a),J()]))}else r.push(Z(se(s.fallThroughState),G(f)))
this.addFinallyFallThroughDispatches(s,s.nestedTrys,r)}else this.addFinallyFallThroughDispatches(e,i.nestedTrys,r)}},transformVariableDeclarationList:function(e){return this.reporter.reportError(e.location&&e.location.start,"Traceur: const/let declarations in a block containing a yield are not yet implemented"),e},maybeTransformStatement_:function(e){var t=new m(this.stateAllocator_).transformAny(e)
return t!==e&&(t=this.transformAny(t)),t},ensureTransformed_:function(e){if(null===e)return null
var t=this.maybeTransformStatement_(e)
return t.type===b?t:this.statementToStateMachine_(t)},ensureTransformedList_:function(e){for(var t=[],r=!1,n=0;n<e.length;n++){var i=e[n],s=this.maybeTransformStatement_(i)
t.push(s),s.type===b&&(r=!0)}return r?this.transformStatementList_(t):this.statementsToStateMachine_(e)},expressionToStateMachine:function(e){var t=new C(this).transformAny(e),r=(new de).transformAny(t).statements,n=r.pop()
$(n.type===S)
var i=n.expression
r=$traceurRuntime.superGet(this,me.prototype,"transformList").call(this,r)
var s=this.transformStatementList_(r)
return{expression:i,machine:s}}},{},F)
var de=function(){$traceurRuntime.superConstructor(ge).apply(this,arguments)},ge=de
return $traceurRuntime.createClass(de,{transformCommaExpression:function(e){var t=this,r=e.expressions.map(function(e){return e.type===_?t.transformAny(e):te(e)})
return new j(e.location,r)},transformConditionalExpression:function(e){var r=this.transformAny(e.left),n=this.transformAny(e.right)
return new A(e.location,e.condition,t(r),t(n))}},{},M),{get CPSTransformer(){return he}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/EndState.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,t=function(){$traceurRuntime.superConstructor(r).apply(this,arguments)},r=t
return $traceurRuntime.createClass(t,{replaceState:function(t,n){return new r(e.replaceStateId(this.id,t,n))},transform:function(t,r){return e.generateJump(t,r)}},{},e),{get EndState(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/AsyncTransformer.js",[],function(){"use strict"
function e(e){return e.type===d&&e.operator.isAssignmentOperator()&&e.right.type===m&&e.left.isLeftHandSideExpression()}function t(e){var t=new E
return t.visitAny(e),t.found}var r=Object.freeze(Object.defineProperties(["$ctx.value"],{raw:{value:Object.freeze(["$ctx.value"])}})),n=Object.freeze(Object.defineProperties(["$ctx.returnValue = ",""],{raw:{value:Object.freeze(["$ctx.returnValue = ",""])}})),i=Object.freeze(Object.defineProperties(["$ctx.resolve(",")"],{raw:{value:Object.freeze(["$ctx.resolve(",")"])}})),s=Object.freeze(Object.defineProperties(["$traceurRuntime.asyncWrap"],{raw:{value:Object.freeze(["$traceurRuntime.asyncWrap"])}})),a=System.get("traceur@0.0.87/src/codegeneration/generator/AwaitState.js").AwaitState,o=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),c=o.BinaryExpression,u=o.ExpressionStatement,l=System.get("traceur@0.0.87/src/codegeneration/generator/CPSTransformer.js").CPSTransformer,p=System.get("traceur@0.0.87/src/codegeneration/generator/EndState.js").EndState,f=System.get("traceur@0.0.87/src/codegeneration/generator/FallThroughState.js").FallThroughState,h=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),m=h.AWAIT_EXPRESSION,d=h.BINARY_EXPRESSION,g=h.STATE_MACHINE,y=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),_=y.parseExpression,S=y.parseStatement,v=y.parseStatements,b=System.get("traceur@0.0.87/src/syntax/trees/StateMachine.js").StateMachine,T=System.get("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js").FindInFunctionScope,j=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js").createUndefinedExpression,E=function(){$traceurRuntime.superConstructor(O).apply(this,arguments)},O=E
$traceurRuntime.createClass(E,{visitAwaitExpression:function(){this.found=!0}},{},T)
var A=function(){$traceurRuntime.superConstructor(R).apply(this,arguments)},R=A
return $traceurRuntime.createClass(A,{expressionNeedsStateMachine:function(e){return null===e?!1:t(e)},transformExpressionStatement:function(t){var r=t.expression
return r.type===m?this.transformAwaitExpression_(r):e(r)?this.transformAwaitAssign_(r):this.expressionNeedsStateMachine(r)?this.expressionToStateMachine(r).machine:$traceurRuntime.superGet(this,R.prototype,"transformExpressionStatement").call(this,t)},transformAwaitExpression:function(){throw Error("Internal error")},transformAwaitExpression_:function(e){return this.transformAwait_(e,e.expression,null,null)},transformAwaitAssign_:function(e){return this.transformAwait_(e,e.right.expression,e.left,e.operator)},transformAwait_:function(e,t,n,i){var s,o,l
this.expressionNeedsStateMachine(t)?(s=this.expressionToStateMachine(t),o=s.expression,l=s.machine,s):o=this.transformAny(t)
var p=this.allocateState(),h=this.allocateState(),m=n?this.allocateState():h,d=[]
if(d.push(new a(p,m,o)),n){var g=new u(e.location,new c(e.location,n,i,_(r)))
d.push(new f(m,h,[g]))}var y=new b(p,h,d,[])
return l&&(y=l.append(y)),y},transformFinally:function(e){var t=$traceurRuntime.superGet(this,R.prototype,"transformFinally").call(this,e)
return t.block.type!==g?t:(this.reporter.reportError(e.location.start,"await not permitted within a finally block."),t)},transformReturnStatement:function(e){var t,r,i
this.expressionNeedsStateMachine(e.expression)?(t=this.expressionToStateMachine(e.expression),r=t.expression,i=t.machine,t):r=e.expression||j()
var s=this.allocateState(),a=this.allocateState(),o=new f(s,a,v(n,r)),c=new p(a),u=new b(s,this.allocateState(),[o,c],[])
return i&&(u=i.append(u)),u},createCompleteTask_:function(e){return S(i,e)},transformAsyncBody:function(e){var t=_(s)
return this.transformCpsFunctionBody(e,t)}},{transformAsyncBody:function(e,t,r){return new R(e,t).transformAsyncBody(r)}},l),{get AsyncTransformer(){return A}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/ForInTransformPass.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),t=e.BLOCK,r=e.VARIABLE_DECLARATION_LIST,n=e.IDENTIFIER_EXPRESSION,i=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),s=i.LENGTH,a=i.PUSH,o=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,c=System.get("traceur@0.0.87/src/syntax/TokenType.js"),u=c.BANG,l=c.IN,p=c.OPEN_ANGLE,f=c.PLUS_PLUS,h=c.VAR,m=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),d=m.createArgumentList,g=m.createAssignmentStatement,y=m.createBinaryExpression,_=m.createBlock,S=m.createCallStatement,v=m.createContinueStatement,b=m.createEmptyArrayLiteralExpression,T=m.createForInStatement,j=m.createForStatement,E=m.createIdentifierExpression,O=m.createIfStatement,A=m.createMemberExpression,R=m.createMemberLookupExpression,x=m.createNumberLiteral,w=m.createOperatorToken,C=m.createParenExpression,P=m.createPostfixExpression,L=m.createUnaryExpression,I=m.createVariableDeclarationList,N=m.createVariableStatement,M=function(){$traceurRuntime.superConstructor(k).apply(this,arguments)},k=M
return $traceurRuntime.createClass(M,{transformForInStatement:function(e){var i,o,c=[],m=this.transformAny(e.body)
m.type===t?(i=c).push.apply(i,$traceurRuntime.spread(m.statements)):c.push(m)
var M=[],k=this.getTempIdentifier()
M.push(N(h,k,b()))
var F=this.getTempIdentifier()
M.push(N(h,F,e.collection))
var $=this.getTempIdentifier()
M.push(T(I(h,$,null),E(F),S(A(k,a),d([E($)]))))
var B,D,V=this.getTempIdentifier(),G=R(E(k),E(V))
if(e.initializer.type===r){var U=e.initializer
B=E(U.declarations[0].lvalue),D=N(U.declarationType,B.identifierToken,G)}else{if(e.initializer.type!==n)throw Error("Invalid left hand side of for in loop")
B=e.initializer,D=g(e.initializer,G)}var z=[]
return z.push(D),z.push(O(L(w(u),C(y(B,w(l),E(F)))),v(),null)),(o=z).push.apply(o,$traceurRuntime.spread(c)),M.push(j(I(h,V,x(0)),y(E(V),w(p),A(k,s)),P(E(V),w(f)),_(z))),_(M)}},{},o),{get ForInTransformPass(){return M}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/YieldState.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["return ",""],{raw:{value:Object.freeze(["return ",""])}})),t=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,r=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,n=function(e,t,r){$traceurRuntime.superConstructor(i).call(this,e),this.fallThroughState=t,this.expression=r},i=n
return $traceurRuntime.createClass(n,{replaceState:function(e,r){return new this.constructor(t.replaceStateId(this.id,e,r),t.replaceStateId(this.fallThroughState,e,r),this.expression)},transform:function(n){return $traceurRuntime.spread(t.generateAssignState(n,this.fallThroughState),[r(e,this.expression)])}},{},t),{get YieldState(){return n}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/ReturnState.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["$ctx.returnValue = ",""],{raw:{value:Object.freeze(["$ctx.returnValue = ",""])}})),t=System.get("traceur@0.0.87/src/semantics/util.js"),r=t.isUndefined,n=t.isVoidExpression,i=System.get("traceur@0.0.87/src/codegeneration/generator/YieldState.js").YieldState,s=System.get("traceur@0.0.87/src/codegeneration/generator/State.js").State,a=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,o=function(){$traceurRuntime.superConstructor(c).apply(this,arguments)},c=o
return $traceurRuntime.createClass(o,{transform:function(t,i){var o,c=this.expression,u=[]
return!c||r(c)||n(c)||u.push(a(e,this.expression)),(o=u).push.apply(o,$traceurRuntime.spread(s.generateJump(t,i))),u}},{},i),{get ReturnState(){return o}}}),System.registerModule("traceur@0.0.87/src/codegeneration/generator/GeneratorTransformer.js",[],function(){"use strict"
function e(e){return e.type===u&&e.operator.isAssignmentOperator()&&e.right.type===l&&e.left.isLeftHandSideExpression()}function t(e){var t=new E
return t.visitAny(e),t.found}var r=Object.freeze(Object.defineProperties(["\n        "," = $ctx.wrapYieldStar(","[Symbol.iterator]());\n        // received = void 0;\n        $ctx.sent = void 0;\n        // send = true; // roughly equivalent\n        $ctx.action = 'next';\n\n        for (;;) {\n          "," = ","[$ctx.action]($ctx.sentIgnoreThrow);\n          if (",".done) {\n            $ctx.sent = ",".value;\n            break;\n          }\n          yield ",".value;\n        }"],{raw:{value:Object.freeze(["\n        "," = $ctx.wrapYieldStar(","[Symbol.iterator]());\n        // received = void 0;\n        $ctx.sent = void 0;\n        // send = true; // roughly equivalent\n        $ctx.action = 'next';\n\n        for (;;) {\n          "," = ","[$ctx.action]($ctx.sentIgnoreThrow);\n          if (",".done) {\n            $ctx.sent = ",".value;\n            break;\n          }\n          yield ",".value;\n        }"])}})),n=Object.freeze(Object.defineProperties(["$ctx.sentIgnoreThrow"],{raw:{value:Object.freeze(["$ctx.sentIgnoreThrow"])}})),i=Object.freeze(Object.defineProperties(["$ctx.sent"],{raw:{value:Object.freeze(["$ctx.sent"])}})),s=Object.freeze(Object.defineProperties(["$ctx.maybeThrow()"],{raw:{value:Object.freeze(["$ctx.maybeThrow()"])}})),a=Object.freeze(Object.defineProperties(["$traceurRuntime.createGeneratorInstance"],{raw:{value:Object.freeze(["$traceurRuntime.createGeneratorInstance"])}})),o=System.get("traceur@0.0.87/src/codegeneration/generator/CPSTransformer.js").CPSTransformer,c=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),u=c.BINARY_EXPRESSION,l=c.YIELD_EXPRESSION,p=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),f=p.BinaryExpression,h=p.ExpressionStatement,m=System.get("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js").FindInFunctionScope,d=System.get("traceur@0.0.87/src/codegeneration/generator/ReturnState.js").ReturnState,g=System.get("traceur@0.0.87/src/codegeneration/generator/YieldState.js").YieldState,y=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),_=y.createIdentifierExpression,S=(y.createMemberExpression,y.createUndefinedExpression),v=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),b=v.parseExpression,T=v.parseStatement,j=v.parseStatements,E=function(){$traceurRuntime.superConstructor(O).apply(this,arguments)},O=E
$traceurRuntime.createClass(E,{visitYieldExpression:function(){this.found=!0}},{},m)
var A=function(e,t){$traceurRuntime.superConstructor(R).call(this,e,t),this.shouldAppendThrowCloseState_=!0},R=A
return $traceurRuntime.createClass(A,{expressionNeedsStateMachine:function(e){return null===e?!1:t(e)},transformYieldExpression_:function(e){var t,r,n
if(this.expressionNeedsStateMachine(e.expression)?(t=this.expressionToStateMachine(e.expression),r=t.expression,n=t.machine,t):(r=this.transformAny(e.expression),r||(r=S())),e.isYieldFor)return this.transformYieldForExpression_(r,n)
var i=this.allocateState(),s=this.allocateState(),a=this.stateToStateMachine_(new g(i,s,r),s)
return n&&(a=n.append(a)),this.shouldAppendThrowCloseState_&&(a=a.append(this.createThrowCloseState_())),a},transformYieldForExpression_:function(e){var t=arguments[1],n=this.getTempIdentifier()
this.addMachineVariable(n)
var i=_(n),s=this.getTempIdentifier()
this.addMachineVariable(s)
var a=_(s),o=j(r,i,e,a,i,a,a,a),c=this.shouldAppendThrowCloseState_
this.shouldAppendThrowCloseState_=!1,o=this.transformList(o)
var u=this.transformStatementList_(o)
return this.shouldAppendThrowCloseState_=c,t&&(u=t.append(u)),u},transformYieldExpression:function(e){return this.reporter.reportError(e.location.start,"Only 'a = yield b' and 'var a = yield b' currently supported."),e},transformYieldAssign_:function(e){var t=this.shouldAppendThrowCloseState_
this.shouldAppendThrowCloseState_=!1
var r=this.transformYieldExpression_(e.right),s=this.transformAny(e.left),a=b(e.right.isYieldFor?n:i),o=new h(e.location,new f(e.location,s,e.operator,a)),c=this.statementToStateMachine_(o)
return this.shouldAppendThrowCloseState_=t,r.append(c)},createThrowCloseState_:function(){return this.statementToStateMachine_(T(s))},transformExpressionStatement:function(t){var r=t.expression
return r.type===l?this.transformYieldExpression_(r):e(r)?this.transformYieldAssign_(r):this.expressionNeedsStateMachine(r)?this.expressionToStateMachine(r).machine:$traceurRuntime.superGet(this,R.prototype,"transformExpressionStatement").call(this,t)},transformAwaitStatement:function(e){return this.reporter.reportError(e.location.start,"Generator function may not have an await statement."),e},transformReturnStatement:function(e){var t,r,n
this.expressionNeedsStateMachine(e.expression)?(t=this.expressionToStateMachine(e.expression),r=t.expression,n=t.machine,t):r=e.expression
var i=this.allocateState(),s=this.allocateState(),a=this.stateToStateMachine_(new d(i,s,this.transformAny(r)),s)
return n?n.append(a):a},transformGeneratorBody:function(e,t){var r=b(a)
return this.transformCpsFunctionBody(e,r,t)}},{transformGeneratorBody:function(e,t,r,n){return new R(e,t).transformGeneratorBody(r,n)}},o),{get GeneratorTransformer(){return A}}}),System.registerModule("traceur@0.0.87/src/codegeneration/GeneratorTransformPass.js",[],function(){"use strict"
function e(e,t){return t.generators&&e.isGenerator()||t.asyncFunctions&&e.isAsyncFunction()}var t=Object.freeze(Object.defineProperties(["$traceurRuntime.initGeneratorFunction(",")"],{raw:{value:Object.freeze(["$traceurRuntime.initGeneratorFunction(",")"])}})),r=Object.freeze(Object.defineProperties(["var "," = ",""],{raw:{value:Object.freeze(["var "," = ",""])}})),n=Object.freeze(Object.defineProperties(["$traceurRuntime.initGeneratorFunction(",")"],{raw:{value:Object.freeze(["$traceurRuntime.initGeneratorFunction(",")"])}})),i=System.get("traceur@0.0.87/src/codegeneration/ArrowFunctionTransformer.js").ArrowFunctionTransformer,s=System.get("traceur@0.0.87/src/codegeneration/generator/AsyncTransformer.js").AsyncTransformer,a=System.get("traceur@0.0.87/src/codegeneration/generator/ForInTransformPass.js").ForInTransformPass,o=System.get("traceur@0.0.87/src/codegeneration/generator/GeneratorTransformer.js").GeneratorTransformer,c=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),u=c.parseExpression,l=c.parseStatement,p=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,f=System.get("traceur@0.0.87/src/codegeneration/FindInFunctionScope.js").FindInFunctionScope,h=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),m=h.AnonBlock,d=h.FunctionDeclaration,g=h.FunctionExpression,y=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),_=y.createBindingIdentifier,S=y.createIdentifierExpression,v=y.createIdentifierToken,b=function(){$traceurRuntime.superConstructor(T).apply(this,arguments)},T=b
$traceurRuntime.createClass(b,{visitForInStatement:function(){this.found=!0}},{},f)
var j=function(e,t,r){$traceurRuntime.superConstructor(E).call(this,e),this.reporter_=t,this.tranformOptions_=r.transformOptions,this.inBlock_=!1},E=j
return $traceurRuntime.createClass(j,{transformFunctionDeclaration:function(t){return e(t,this.tranformOptions_)?t.isGenerator()?this.transformGeneratorDeclaration_(t):this.transformFunction_(t,d,null):$traceurRuntime.superGet(this,E.prototype,"transformFunctionDeclaration").call(this,t)},transformGeneratorDeclaration_:function(e){var n=S(e.name.identifierToken),i=u(t,n),s=S(this.inBlock_?this.getTempIdentifier():this.addTempVar(i)),a=this.transformFunction_(e,d,s)
return this.inBlock_?new m(null,[a,l(r,s,i)]):a},transformFunctionExpression:function(t){return e(t,this.tranformOptions_)?t.isGenerator()?this.transformGeneratorExpression_(t):this.transformFunction_(t,g,null):$traceurRuntime.superGet(this,E.prototype,"transformFunctionExpression").call(this,t)},transformGeneratorExpression_:function(e){var t
e.name?t=e.name.identifierToken:(t=v(this.getTempIdentifier()),e=new g(e.location,_(t),e.functionKind,e.parameterList,e.typeAnnotation,e.annotations,e.body))
var r=this.transformFunction_(e,g,S(t))
return u(n,r)},transformFunction_:function(e,t,r){var n=$traceurRuntime.superGet(this,E.prototype,"transformAny").call(this,e.body),i=new b
i.visitAny(n),i.found&&(n=new a(this.identifierGenerator).transformAny(n)),this.tranformOptions_.generators&&e.isGenerator()?n=o.transformGeneratorBody(this.identifierGenerator,this.reporter_,n,r):this.tranformOptions_.asyncFunctions&&e.isAsyncFunction()&&(n=s.transformAsyncBody(this.identifierGenerator,this.reporter_,n))
var c=null
return new t(e.location,e.name,c,e.parameterList,e.typeAnnotation||null,e.annotations||null,n)},transformArrowFunctionExpression:function(e){return e.isAsyncFunction()?this.transformAny(i.transform(this,e)):$traceurRuntime.superGet(this,E.prototype,"transformArrowFunctionExpression").call(this,e)},transformBlock:function(e){var t=this.inBlock_
this.inBlock_=!0
var r=$traceurRuntime.superGet(this,E.prototype,"transformBlock").call(this,e)
return this.inBlock_=t,r}},{},p),{get GeneratorTransformPass(){return j}}}),System.registerModule("traceur@0.0.87/src/codegeneration/InlineModuleTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/TokenType.js").VAR,t=System.get("traceur@0.0.87/src/codegeneration/ModuleTransformer.js").ModuleTransformer,r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),n=r.createBindingIdentifier,i=r.createEmptyStatement,s=r.createFunctionBody,a=r.createImmediatelyInvokedFunctionExpression,o=r.createScopedExpression,c=r.createVariableStatement,u=System.get("traceur@0.0.87/src/codegeneration/globalThis.js")["default"],l=System.get("traceur@0.0.87/src/codegeneration/scopeContainsThis.js")["default"],p=0,f=function(){$traceurRuntime.superConstructor(h).apply(this,arguments)},h=f
return $traceurRuntime.createClass(f,{wrapModule:function(t){var r,n=this.moduleName||"anon_"+ ++p,i=this.getTempVarNameForModuleName(n),f=s(t)
return r=t.some(l)?o(f,u()):a(f),[c(e,i,r)]},transformNamedExport:function(){return i()},transformModuleSpecifier:function(e){return n(this.getTempVarNameForModuleSpecifier(e))}},{},t),{get InlineModuleTransformer(){return f}}}),System.registerModule("traceur@0.0.87/src/codegeneration/InstantiateModuleTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties([""," = ",""],{raw:{value:Object.freeze([""," = ",""])}})),t=Object.freeze(Object.defineProperties(["$__export(",", ",")"],{raw:{value:Object.freeze(["$__export(",", ",")"])}})),r=Object.freeze(Object.defineProperties(["($__export(",", "," + 1), ",")"],{raw:{value:Object.freeze(["($__export(",", "," + 1), ",")"])}})),n=Object.freeze(Object.defineProperties(["($__export(",", "," - 1), ",")"],{raw:{value:Object.freeze(["($__export(",", "," - 1), ",")"])}})),i=Object.freeze(Object.defineProperties(["$__export(",", ",")}"],{raw:{value:Object.freeze(["$__export(",", ",")}"])}})),s=Object.freeze(Object.defineProperties(["System.register(",", ",", function($__export) {\n          ","\n        });"],{raw:{value:Object.freeze(["System.register(",", ",", function($__export) {\n          ","\n        });"])}})),a=Object.freeze(Object.defineProperties(["System.register(",", function($__export) {\n          ","\n        });"],{raw:{value:Object.freeze(["System.register(",", function($__export) {\n          ","\n        });"])}})),o=Object.freeze(Object.defineProperties([""," = $__m.",";"],{raw:{value:Object.freeze([""," = $__m.",";"])}})),c=Object.freeze(Object.defineProperties(["$__export(",", $__m.",");"],{raw:{value:Object.freeze(["$__export(",", $__m.",");"])}})),u=Object.freeze(Object.defineProperties([""," = $__m;"],{raw:{value:Object.freeze([""," = $__m;"])}})),l=Object.freeze(Object.defineProperties(["\n          Object.keys($__m).forEach(function(p) {\n            if (!$__exportNames[p])\n              $__export(p, $__m[p]);\n          });\n        "],{raw:{value:Object.freeze(["\n          Object.keys($__m).forEach(function(p) {\n            if (!$__exportNames[p])\n              $__export(p, $__m[p]);\n          });\n        "])}})),p=Object.freeze(Object.defineProperties(["\n          var $__exportNames = ",";\n        "],{raw:{value:Object.freeze(["\n          var $__exportNames = ",";\n        "])}})),f=Object.freeze(Object.defineProperties(["function($__m) {\n          ","\n        }"],{raw:{value:Object.freeze(["function($__m) {\n          ","\n        }"])}})),h=Object.freeze(Object.defineProperties(["function($__m) {}"],{raw:{value:Object.freeze(["function($__m) {}"])}})),m=Object.freeze(Object.defineProperties(["\n        $__export(",", ",")\n      "],{raw:{value:Object.freeze(["\n        $__export(",", ",")\n      "])}})),d=Object.freeze(Object.defineProperties(["return {\n      setters: ",",\n      execute: ","\n    }"],{raw:{value:Object.freeze(["return {\n      setters: ",",\n      execute: ","\n    }"])}})),g=Object.freeze(Object.defineProperties(["$__export(",", ",")"],{raw:{value:Object.freeze(["$__export(",", ",")"])}})),y=Object.freeze(Object.defineProperties(["$__export(",", ",")"],{raw:{value:Object.freeze(["$__export(",", ",")"])}})),_=Object.freeze(Object.defineProperties(["var "," = $__export(",", ",");"],{raw:{value:Object.freeze(["var "," = $__export(",", ",");"])}})),S=Object.freeze(Object.defineProperties(["var ",";"],{raw:{value:Object.freeze(["var ",";"])}})),v=Object.freeze(Object.defineProperties(["$__export('default', ",");"],{raw:{value:Object.freeze(["$__export('default', ",");"])}})),b=Object.freeze(Object.defineProperties(["$__export(",", ",");"],{raw:{value:Object.freeze(["$__export(",", ",");"])}})),T=Object.freeze(Object.defineProperties(["var ",";"],{raw:{value:Object.freeze(["var ",";"])}})),j=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),E=j.AnonBlock,O=j.ArrayLiteralExpression,A=j.ClassExpression,R=j.CommaExpression,x=j.ExpressionStatement,w=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),C=w.CLASS_DECLARATION,P=w.FUNCTION_DECLARATION,L=w.IDENTIFIER_EXPRESSION,I=w.IMPORT_SPECIFIER_SET,N=System.get("traceur@0.0.87/src/codegeneration/ScopeTransformer.js").ScopeTransformer,M=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),k=M.createIdentifierExpression,F=M.createIdentifierToken,$=M.createVariableStatement,B=M.createVariableDeclaration,D=M.createVariableDeclarationList,V=System.get("traceur@0.0.87/src/codegeneration/ModuleTransformer.js").ModuleTransformer,G=System.get("traceur@0.0.87/src/syntax/TokenType.js"),U=G.MINUS_MINUS,z=G.PLUS_PLUS,H=G.VAR,Y=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),X=Y.parseExpression,W=Y.parseStatement,Q=Y.parseStatements,K=System.get("traceur@0.0.87/src/codegeneration/HoistVariablesTransformer.js")["default"],q=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),J=q.createFunctionExpression,Z=q.createEmptyParameterList,ee=q.createFunctionBody,te=q.createObjectLiteral,re=function(){$traceurRuntime.superConstructor(ne).call(this),this.declarations_=[]},ne=re
$traceurRuntime.createClass(re,{getDeclarationStatements:function(){return $traceurRuntime.spread([this.getVariableStatement()],this.declarations_)},addDeclaration:function(e){this.declarations_.push(e)},transformFunctionDeclaration:function(e){return this.addDeclaration(e),new E(null,[])},transformClassDeclaration:function(t){return this.addVariable(t.name.identifierToken.value),t=new A(t.location,t.name,t.superClass,t.elements,t.annotations,t.typeParameters),W(e,t.name.identifierToken,t)}},{},K)
var ie=function(e,t){$traceurRuntime.superConstructor(se).call(this,t),this.bindingName_=t,this.exportName_=e},se=ie
$traceurRuntime.createClass(ie,{matchesBindingName_:function(e){return e.type===L&&e.identifierToken.value===this.bindingName_},transformUnaryExpression:function(e){if(!this.matchesBindingName_(e.operand))return $traceurRuntime.superGet(this,se.prototype,"transformUnaryExpression").call(this,e)
var r=e.operator.type
if(r!==z&&r!==U)return $traceurRuntime.superGet(this,se.prototype,"transformUnaryExpression").call(this,e)
var n=this.transformAny(e.operand)
return n!==e.operand&&(e=new UnaryExpression(e.location,e.operator,n)),X(t,this.exportName_,e)},transformPostfixExpression:function(e){if(e=$traceurRuntime.superGet(this,se.prototype,"transformPostfixExpression").call(this,e),!this.matchesBindingName_(e.operand))return e
switch(e.operator.type){case z:return X(r,this.exportName_,e.operand,e)
case U:return X(n,this.exportName_,e.operand,e)}return e},transformBinaryExpression:function(e){return e=$traceurRuntime.superGet(this,se.prototype,"transformBinaryExpression").call(this,e),e.operator.isAssignmentOperator()&&this.matchesBindingName_(e.left)?X(i,this.exportName_,e):e}},{},N)
var ae=function(e,t){var r=arguments[2]
$traceurRuntime.superConstructor(oe).call(this,e,t,r),this.anonymousModule=r&&!r.bundle&&r.moduleName!==!0,this.inExport_=!1,this.curDepIndex_=null,this.dependencies=[],this.externalExportBindings=[],this.importBindings=[],this.localExportBindings=[],this.functionDeclarations=[],this.moduleBindings=[],this.exportStarBindings=[]},oe=ae
return $traceurRuntime.createClass(ae,{getModuleName:function(e){return this.anonymousModule?null:e.moduleName},moduleProlog:function(){return[]},wrapModule:function(e){var t=$traceurRuntime.superGet(this,oe.prototype,"moduleProlog").call(this)
return e=t.concat(e),this.moduleName?Q(s,this.moduleName,this.dependencies,e):Q(a,this.dependencies,e)},appendExportStatement:function(e){var t=this,r=new re
this.localExportBindings.forEach(function(t){e=new ie(t.exportName,t.localName).transformList(e)})
var n=e.map(function(e){return r.transformAny(e)}),i=J(Z(),ee(n)),s=r.getDeclarationStatements(),a=this.dependencies.map(function(e,r){var n=t.importBindings[r],i=t.externalExportBindings[r],a=t.exportStarBindings[r],m=t.moduleBindings[r],d=[]
if(n&&n.forEach(function(e){d.push(W(o,F(e.variableName),e.exportName))}),i&&i.forEach(function(e){d.push(W(c,e.exportName,e.importName))}),m&&d.push(W(u,k(m))),a){d=d.concat(Q(l))
var g={}
t.localExportBindings.concat(t.externalExportBindings).forEach(function(e){g[e.exportName]=!0}),s.push(W(p,te(g)))}return d.length?X(f,d):X(h)})
return s=s.concat(this.functionDeclarations.map(function(e){return W(m,e.exportName,F(e.functionName))})),s.push(W(d,new O(null,a),i)),s},addLocalExportBinding:function(e){var t=void 0!==arguments[1]?arguments[1]:e
this.localExportBindings.push({exportName:e,localName:t})},addImportBinding:function(e,t,r){this.importBindings[e]=this.importBindings[e]||[],this.importBindings[e].push({variableName:t,exportName:r})},addExternalExportBinding:function(e,t,r){this.externalExportBindings[e]=this.externalExportBindings[e]||[],this.externalExportBindings[e].push({exportName:t,importName:r})},addExportStarBinding:function(e){this.exportStarBindings[e]=!0},addModuleBinding:function(e,t){this.moduleBindings[e]=t},addExportFunction:function(e){var t=void 0!==arguments[1]?arguments[1]:e
this.functionDeclarations.push({exportName:e,functionName:t})},getOrCreateDependencyIndex:function(e){var t=e.token.processedValue,r=this.dependencies.indexOf(t)
return-1===r&&(r=this.dependencies.length,this.dependencies.push(t)),r},transformExportDeclaration:function(e){this.inExport_=!0,e.declaration.moduleSpecifier?this.curDepIndex_=this.getOrCreateDependencyIndex(e.declaration.moduleSpecifier):this.curDepIndex_=null
var t=this.transformAny(e.declaration)
return this.inExport_=!1,t},transformVariableStatement:function(e){var t=this
return this.inExport_?(this.inExport_=!1,$(D(H,e.declarations.declarations.map(function(e){var r,n=e.lvalue.identifierToken.value
return t.addLocalExportBinding(n),r=e.initializer?X(g,n,t.transformAny(e.initializer)):X(y,n,k(n)),B(n,r)})))):$traceurRuntime.superGet(this,oe.prototype,"transformVariableStatement").call(this,e)},transformExportStar:function(){return this.inExport_=!1,this.addExportStarBinding(this.curDepIndex_),new E(null,[])},transformClassDeclaration:function(e){if(!this.inExport_)return $traceurRuntime.superGet(this,oe.prototype,"transformClassDeclaration").call(this,e)
this.inExport_=!1
var t=this.transformAny(e.name),r=this.transformAny(e.superClass),n=this.transformList(e.elements),i=this.transformList(e.annotations),s=this.transformAny(e.typeParameters),a=t.identifierToken.value,o=new A(e.location,t,r,n,i,s)
return this.addLocalExportBinding(a),W(_,a,a,o)},transformFunctionDeclaration:function(e){if(this.inExport_){var t=e.name.getStringValue()
this.addLocalExportBinding(t),this.addExportFunction(t),this.inExport_=!1}return $traceurRuntime.superGet(this,oe.prototype,"transformFunctionDeclaration").call(this,e)},transformNamedExport:function(e){this.transformAny(e.moduleSpecifier)
var t=this.transformAny(e.specifierSet)
return null===this.curDepIndex_?t:new E(null,[])},transformImportDeclaration:function(e){this.curDepIndex_=this.getOrCreateDependencyIndex(e.moduleSpecifier)
this.transformAny(e.moduleSpecifier)
if(!e.importClause)return new E(null,[])
var t=this.transformAny(e.importClause)
if(e.importClause.type===I)return t
var r=e.importClause.binding.getStringValue()
return this.addImportBinding(this.curDepIndex_,r,"default"),W(S,r)},transformImportSpecifierSet:function(e){return $(D(H,this.transformList(e.specifiers)))},transformExportDefault:function(e){this.inExport_=!1
var t=this.transformAny(e.expression)
return this.addLocalExportBinding("default"),t.type===C&&(t=new A(t.location,t.name,t.superClass,t.elements,t.annotations,t.typeParameters)),t.type===P?(this.addExportFunction("default",t.name.identifierToken.value),t):W(v,t)},transformExportSpecifier:function(e){var t,r
return e.rhs?(t=e.rhs.value,r=e.lhs.value):(t=e.lhs.value,r=t),null===this.curDepIndex_?(this.addLocalExportBinding(t,r),X(b,t,k(r))):void this.addExternalExportBinding(this.curDepIndex_,t,r)},transformExportSpecifierSet:function(e){var t=this.transformList(e.specifiers)
return new x(e.location,new R(e.location,t.filter(function(e){return e})))},transformImportSpecifier:function(e){var t=e.binding.binding,r=t.identifierToken,n=(e.name||r).value
return this.addImportBinding(this.curDepIndex_,r.value,n),B(t)},transformModuleDeclaration:function(e){this.transformAny(e.expression)
var t=e.binding.binding,r=t.getStringValue()
return this.addModuleBinding(this.curDepIndex_,r),W(T,t)},transformModuleSpecifier:function(e){return this.curDepIndex_=this.getOrCreateDependencyIndex(e),e}},{},V),{get InstantiateModuleTransformer(){return ae}}}),System.registerModule("traceur@0.0.87/src/codegeneration/MemberVariableTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["get ","():","\n      { return this.","; }"],{raw:{value:Object.freeze(["get ","():","\n      { return this.","; }"])}})),t=Object.freeze(Object.defineProperties(["set ","(value:",")\n      { this."," = value; }"],{raw:{value:Object.freeze(["set ","(value:",")\n      { this."," = value; }"])}})),r=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),n=r.AnonBlock,i=(r.ClassDeclaration,r.ClassExpression,System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js").PROPERTY_VARIABLE_DECLARATION,System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parsePropertyDefinition),s=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,a=function(e){$traceurRuntime.superConstructor(o).call(this),this.identifierGenerator_=e},o=a
return $traceurRuntime.createClass(a,{transformPropertyVariableDeclaration:function(e){var t=this.identifierGenerator_.generateUniqueIdentifier(),r=this.createGetAccessor_(t,e),i=this.createSetAccessor_(t,e)
return new n(e.location,[r,i,e])},createGetAccessor_:function(t,r){var n=r.name.literalToken,s=r.typeAnnotation,a=i(e,n,s,t)
return a.isStatic=r.isStatic,a},createSetAccessor_:function(e,r){var n=r.name.literalToken,s=r.typeAnnotation,a=i(t,n,s,e)
return a.isStatic=r.isStatic,a}},{},s),{get MemberVariableTransformer(){return a}}}),System.registerModule("traceur@0.0.87/src/outputgeneration/ParseTreeWriter.js",[],function(){"use strict"
function e(e,t){return!((e!==Z&&e!==ee||t!==Z&&t!==ee)&&(e!==ce&&e!==ue||t!==ce&&t!==ue))}var t=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),r=t.BLOCK,n=t.CLASS_DECLARATION,i=t.FUNCTION_DECLARATION,s=t.IF_STATEMENT,a=t.LITERAL_EXPRESSION,o=t.POSTFIX_EXPRESSION,c=t.UNARY_EXPRESSION,u=System.get("traceur@0.0.87/src/syntax/ParseTreeVisitor.js").ParseTreeVisitor,l=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),p=l.AS,f=l.ASYNC,h=l.AWAIT,m=l.FROM,d=l.GET,g=l.OF,y=l.ON,_=l.SET,S=System.get("traceur@0.0.87/src/syntax/Scanner.js"),v=S.isIdentifierPart,b=S.isWhitespace,T=System.get("traceur@0.0.87/src/syntax/TokenType.js"),j=T.ARROW,E=T.AT,O=T.BACK_QUOTE,A=T.BAR,R=T.BREAK,x=T.CASE,w=T.CATCH,C=T.CLASS,P=T.CLOSE_ANGLE,L=T.CLOSE_CURLY,I=T.CLOSE_PAREN,N=T.CLOSE_SQUARE,M=T.COLON,k=T.COMMA,F=T.CONTINUE,$=T.DEBUGGER,B=T.DEFAULT,D=T.DO,V=T.DOT_DOT_DOT,G=T.ELSE,U=T.EQUAL,z=T.EXPORT,H=T.EXTENDS,Y=T.FINALLY,X=T.FOR,W=T.FUNCTION,Q=T.IF,K=T.IMPORT,q=T.IN,J=T.INTERFACE,Z=T.MINUS,ee=T.MINUS_MINUS,te=T.NEW,re=T.NUMBER,ne=T.OPEN_ANGLE,ie=T.OPEN_CURLY,se=T.OPEN_PAREN,ae=T.OPEN_SQUARE,oe=T.PERIOD,ce=T.PLUS,ue=T.PLUS_PLUS,le=T.QUESTION,pe=T.RETURN,fe=T.SEMI_COLON,he=T.STAR,me=T.STATIC,de=T.SUPER,ge=T.SWITCH,ye=T.THIS,_e=T.THROW,Se=T.TRY,ve=T.WHILE,be=T.WITH,Te=T.YIELD,je="\n",Ee=function(){var e,t=void 0!==arguments[0]?arguments[0]:{},r=void 0===(e=t.prettyPrint)?!0:e
$traceurRuntime.superConstructor(Oe).call(this),this.prettyPrint_=r,this.result_="",this.currentLine_="",this.lastCode_=-1,this.indentDepth_=0,this.currentParameterTypeAnnotation_=null},Oe=Ee
return $traceurRuntime.createClass(Ee,{toString:function(){return this.currentLine_.length>0&&(this.result_+=this.currentLine_,this.currentLine_="",this.lastCode_=-1),this.result_},visitAnnotation:function(e){this.write_(E),this.visitAny(e.name),null!==e.args&&(this.write_(se),this.writeList_(e.args,k,!1),this.write_(I))},visitArgumentList:function(e){this.write_(se),this.writeList_(e.args,k,!1),this.write_(I)},visitArrayComprehension:function(e){this.write_(ae),this.visitList(e.comprehensionList),this.visitAny(e.expression),this.write_(N)},visitArrayLiteralExpression:function(e){this.write_(ae),this.writeList_(e.elements,k,!1),this.write_(N)},visitArrayPattern:function(e){this.write_(ae),this.writeList_(e.elements,k,!1),this.write_(N)},visitArrayType:function(e){this.visitAny(e.elementType),this.write_(ae),this.write_(N)},visitArrowFunctionExpression:function(e){e.functionKind&&(this.write_(e.functionKind),this.writeSpace_()),this.write_(se),this.visitAny(e.parameterList),this.write_(I),this.writeSpace_(),this.write_(j),this.writeSpace_(),this.visitAny(e.body)},visitAssignmentElement:function(e){this.visitAny(e.assignment),e.initializer&&(this.writeSpace_(),this.write_(U),this.writeSpace_(),this.visitAny(e.initializer))},visitAwaitExpression:function(e){this.write_(h),this.writeSpace_(),this.visitAny(e.expression)},visitBinaryExpression:function(t){var r=t.left
this.visitAny(r)
var n=t.operator
r.type===o&&e(r.operator.type,n.type)?this.writeRequiredSpace_():this.writeSpace_(),this.write_(n)
var i=t.right
i.type===c&&e(n.type,i.operator.type)?this.writeRequiredSpace_():this.writeSpace_(),this.visitAny(i)},visitBindingElement:function(e){var t=this.currentParameterTypeAnnotation_
this.currentParameterTypeAnnotation_=null,this.visitAny(e.binding),this.writeTypeAnnotation_(t),e.initializer&&(this.writeSpace_(),this.write_(U),this.writeSpace_(),this.visitAny(e.initializer))},visitBindingIdentifier:function(e){this.write_(e.identifierToken)},visitBlock:function(e){this.writeOpenCurly_(),this.writelnList_(e.statements),this.writeCloseCurly_()},visitBreakStatement:function(e){this.write_(R),null!==e.name&&(this.writeSpace_(),this.write_(e.name)),this.write_(fe)},visitCallExpression:function(e){this.visitAny(e.operand),this.visitAny(e.args)},visitCallSignature:function(e){e.typeParameters&&this.visitAny(e.typeParameters),this.write_(se),this.visitAny(e.parameterList),this.write_(I),this.writeTypeAnnotation_(e.returnType)},visitCaseClause:function(e){this.write_(x),this.writeSpace_(),this.visitAny(e.expression),this.write_(M),this.indentDepth_++,this.writelnList_(e.statements),this.indentDepth_--},visitCatch:function(e){this.write_(w),this.writeSpace_(),this.write_(se),this.visitAny(e.binding),this.write_(I),this.writeSpace_(),this.visitAny(e.catchBody)},visitClassShared_:function(e){this.writeAnnotations_(e.annotations),this.write_(C),this.writeSpace_(),this.visitAny(e.name),null!==e.typeParameters&&this.visitAny(e.typeParameters),null!==e.superClass&&(this.writeSpace_(),this.write_(H),this.writeSpace_(),this.visitAny(e.superClass)),this.writeSpace_(),this.writeOpenCurly_(),this.writelnList_(e.elements),this.writeCloseCurly_()},visitClassDeclaration:function(e){this.visitClassShared_(e)},visitClassExpression:function(e){this.visitClassShared_(e)},visitCommaExpression:function(e){this.writeList_(e.expressions,k,!1)},visitComprehensionFor:function(e){this.write_(X),this.writeSpace_(),this.write_(se),this.visitAny(e.left),this.writeSpace_(),this.write_(g),this.writeSpace_(),this.visitAny(e.iterator),this.write_(I),this.writeSpace_()},visitComprehensionIf:function(e){this.write_(Q),this.writeSpace_(),this.write_(se),this.visitAny(e.expression),this.write_(I),this.writeSpace_()},visitComputedPropertyName:function(e){this.write_(ae),this.visitAny(e.expression),this.write_(N)},visitConstructSignature:function(e){this.write_(te),this.writeSpace_(),this.visitCallSignature(e)},visitConstructorType:function(e){this.write_(te),this.writeSpace_(),this.visitFunctionType(e)},visitConditionalExpression:function(e){this.visitAny(e.condition),this.writeSpace_(),this.write_(le),this.writeSpace_(),this.visitAny(e.left),this.writeSpace_(),this.write_(M),this.writeSpace_(),this.visitAny(e.right)},visitContinueStatement:function(e){this.write_(F),null!==e.name&&(this.writeSpace_(),this.write_(e.name)),this.write_(fe)},visitCoverInitializedName:function(e){this.write_(e.name),this.writeSpace_(),this.write_(e.equalToken),this.writeSpace_(),this.visitAny(e.initializer)},visitDebuggerStatement:function(){this.write_($),this.write_(fe)},visitDefaultClause:function(e){this.write_(B),this.write_(M),this.indentDepth_++,this.writelnList_(e.statements),this.indentDepth_--},visitDoWhileStatement:function(e){this.write_(D),this.visitAnyBlockOrIndent_(e.body),this.writeSpace_(),this.write_(ve),this.writeSpace_(),this.write_(se),this.visitAny(e.condition),this.write_(I),this.write_(fe)},visitEmptyStatement:function(){this.write_(fe)},visitExportDeclaration:function(e){this.writeAnnotations_(e.annotations),this.write_(z),this.writeSpace_(),this.visitAny(e.declaration)},visitExportDefault:function(e){switch(this.write_(B),this.writeSpace_(),this.visitAny(e.expression),e.expression.type){case n:case i:break
default:this.write_(fe)}},visitNamedExport:function(e){this.visitAny(e.specifierSet),e.moduleSpecifier&&(this.writeSpace_(),this.write_(m),this.writeSpace_(),this.visitAny(e.moduleSpecifier)),this.write_(fe)},visitExportSpecifier:function(e){this.write_(e.lhs),e.rhs&&(this.writeSpace_(),this.write_(p),this.writeSpace_(),this.write_(e.rhs))},visitExportSpecifierSet:function(e){this.writeOpenCurly_(),this.writeList_(e.specifiers,k,!1),this.writeCloseCurly_()},visitExportStar:function(){this.write_(he)},visitExpressionStatement:function(e){this.visitAny(e.expression),this.write_(fe)},visitFinally:function(e){this.write_(Y),this.writeSpace_(),this.visitAny(e.block)},visitForOfStatement:function(e){this.write_(X),this.writeSpace_(),this.write_(se),this.visitAny(e.initializer),this.writeSpace_(),this.write_(g),this.writeSpace_(),this.visitAny(e.collection),this.write_(I),this.visitAnyBlockOrIndent_(e.body)},visitForOnStatement:function(e){this.write_(X),this.writeSpace_(),this.write_(se),this.visitAny(e.initializer),this.writeSpace_(),this.write_(y),this.writeSpace_(),this.visitAny(e.observable),this.write_(I),this.visitAnyBlockOrIndent_(e.body)},visitForInStatement:function(e){this.write_(X),this.writeSpace_(),this.write_(se),this.visitAny(e.initializer),this.writeSpace_(),this.write_(q),this.writeSpace_(),this.visitAny(e.collection),this.write_(I),this.visitAnyBlockOrIndent_(e.body)},visitForStatement:function(e){this.write_(X),this.writeSpace_(),this.write_(se),this.visitAny(e.initializer),this.write_(fe),this.writeSpace_(),this.visitAny(e.condition),this.write_(fe),this.writeSpace_(),this.visitAny(e.increment),this.write_(I),this.visitAnyBlockOrIndent_(e.body)},visitFormalParameterList:function(e){for(var t=!0,r=0;r<e.parameters.length;r++){var n=e.parameters[r]
t?t=!1:(this.write_(k),this.writeSpace_()),this.visitAny(n)}},visitFormalParameter:function(e){this.writeAnnotations_(e.annotations,!1),this.currentParameterTypeAnnotation_=e.typeAnnotation,this.visitAny(e.parameter),this.currentParameterTypeAnnotation_=null},visitFunctionBody:function(e){this.writeOpenCurly_(),this.writelnList_(e.statements),this.writeCloseCurly_()},visitFunctionDeclaration:function(e){this.visitFunction_(e)},visitFunctionExpression:function(e){this.visitFunction_(e)},visitFunction_:function(e){this.writeAnnotations_(e.annotations),e.isAsyncGenerator()&&this.write_(f),e.isAsyncFunction()&&this.write_(e.functionKind),this.write_(W),e.isAsyncGenerator()&&this.write_(he),e.isGenerator()&&this.write_(e.functionKind),e.name&&(this.writeSpace_(),this.visitAny(e.name)),this.write_(se),this.visitAny(e.parameterList),this.write_(I),this.writeTypeAnnotation_(e.typeAnnotation),this.writeSpace_(),this.visitAny(e.body)},visitFunctionType:function(e){null!==e.typeParameters&&this.visitAny(e.typeParameters),this.write_(se),this.visitAny(e.parameterList),this.write_(I),this.writeSpace_(),this.write_(j),this.writeSpace_(),this.visitAny(e.returnType)},visitGeneratorComprehension:function(e){this.write_(se),this.visitList(e.comprehensionList),this.visitAny(e.expression),this.write_(I)},visitGetAccessor:function(e){this.writeAnnotations_(e.annotations),e.isStatic&&(this.write_(me),this.writeSpace_()),this.write_(d),this.writeSpace_(),this.visitAny(e.name),this.write_(se),this.write_(I),this.writeSpace_(),this.writeTypeAnnotation_(e.typeAnnotation),this.visitAny(e.body)},visitIdentifierExpression:function(e){this.write_(e.identifierToken)},visitIfStatement:function(e){this.write_(Q),this.writeSpace_(),this.write_(se),this.visitAny(e.condition),this.write_(I),this.visitAnyBlockOrIndent_(e.ifClause),e.elseClause&&(e.ifClause.type===r&&this.writeSpace_(),this.write_(G),e.elseClause.type===s?(this.writeSpace_(),this.visitAny(e.elseClause)):this.visitAnyBlockOrIndent_(e.elseClause))},visitIndexSignature:function(e){this.write_(ae),this.write_(e.name),this.write_(M),this.writeSpace_(),this.visitAny(e.indexType),this.write_(N),this.writeTypeAnnotation_(e.typeAnnotation),this.write_(fe)},visitInterfaceDeclaration:function(e){this.write_(J),this.writeSpace_(),this.write_(e.name),e.typeParameters&&this.visitAny(e.typeParameters),e.extendsClause.length>0&&(this.writeSpace_(),this.write_(H),this.writeSpace_(),this.writeList_(e.extendsClause,k,!1)),this.writeSpace_(),this.visitAny(e.objectType)},visitAnyBlockOrIndent_:function(e){e.type===r?(this.writeSpace_(),this.visitAny(e)):this.visitAnyIndented_(e)},visitAnyIndented_:function(e){var t=void 0!==arguments[1]?arguments[1]:1
this.prettyPrint_&&(this.indentDepth_+=t,this.writeln_()),this.visitAny(e),this.prettyPrint_&&(this.indentDepth_-=t,this.writeln_())},visitImportDeclaration:function(e){this.write_(K),this.writeSpace_(),e.importClause&&(this.visitAny(e.importClause),this.writeSpace_(),this.write_(m),this.writeSpace_()),this.visitAny(e.moduleSpecifier),this.write_(fe)},visitImportSpecifier:function(e){e.name&&(this.write_(e.name),this.writeSpace_(),this.write_(p),this.writeSpace_()),this.visitAny(e.binding)},visitImportSpecifierSet:function(e){e.specifiers.type===he?this.write_(he):(this.writeOpenCurly_(),this.writelnList_(e.specifiers,k),this.writeCloseCurly_())},visitLabelledStatement:function(e){this.write_(e.name),this.write_(M),this.writeSpace_(),this.visitAny(e.statement)},visitLiteralExpression:function(e){this.write_(e.literalToken)},visitLiteralPropertyName:function(e){this.write_(e.literalToken)},visitMemberExpression:function(e){this.visitAny(e.operand),e.operand.type===a&&e.operand.literalToken.type===re&&(/\.|e|E/.test(e.operand.literalToken.value)||this.writeRequiredSpace_()),this.write_(oe),this.write_(e.memberName)},visitMemberLookupExpression:function(e){this.visitAny(e.operand),this.write_(ae),this.visitAny(e.memberExpression),this.write_(N)},visitMethodSignature:function(e){this.visitAny(e.name),e.optional&&this.write_(le),this.visitAny(e.callSignature),this.write_(fe)},visitSyntaxErrorTree:function(e){this.write_("(function() {"+("throw SyntaxError("+JSON.stringify(e.message)+");")+"})()")},visitModule:function(e){this.writelnList_(e.scriptItemList,null)},visitModuleSpecifier:function(e){this.write_(e.token)},visitModuleDeclaration:function(e){this.write_(K),this.writeSpace_(),this.write_(he),this.writeSpace_(),this.write_(p),this.visitAny(e.binding),this.writeSpace_(),this.write_(m),this.writeSpace_(),this.visitAny(e.expression),this.write_(fe)},visitNewExpression:function(e){this.write_(te),this.writeSpace_(),this.visitAny(e.operand),this.visitAny(e.args)},visitObjectLiteralExpression:function(e){this.writeOpenCurly_(),e.propertyNameAndValues.length>1&&this.writeln_(),this.writelnList_(e.propertyNameAndValues,k),e.propertyNameAndValues.length>1&&this.writeln_(),this.writeCloseCurly_()},visitObjectPattern:function(e){this.writeOpenCurly_(),this.writelnList_(e.fields,k),this.writeCloseCurly_()},visitObjectPatternField:function(e){this.visitAny(e.name),null!==e.element&&(this.write_(M),this.writeSpace_(),this.visitAny(e.element))},visitObjectType:function(e){this.writeOpenCurly_(),this.writelnList_(e.typeMembers),this.writeCloseCurly_()},visitParenExpression:function(e){this.write_(se),$traceurRuntime.superGet(this,Oe.prototype,"visitParenExpression").call(this,e),this.write_(I)},visitPostfixExpression:function(e){this.visitAny(e.operand),e.operand.type===o&&e.operand.operator.type===e.operator.type&&this.writeRequiredSpace_(),this.write_(e.operator)},visitPredefinedType:function(e){this.write_(e.typeToken)},visitScript:function(e){this.writelnList_(e.scriptItemList,null)},visitPropertyMethodAssignment:function(e){this.writeAnnotations_(e.annotations),e.isStatic&&(this.write_(me),this.writeSpace_()),e.isGenerator()&&this.write_(he),e.isAsyncFunction()&&this.write_(f),this.visitAny(e.name),this.write_(se),this.visitAny(e.parameterList),this.write_(I),this.writeSpace_(),this.writeTypeAnnotation_(e.typeAnnotation),this.visitAny(e.body)},visitPropertyNameAssignment:function(e){this.visitAny(e.name),this.write_(M),this.writeSpace_(),this.visitAny(e.value)},visitPropertyNameShorthand:function(e){this.write_(e.name)},visitPropertyVariableDeclaration:function(e){this.writeAnnotations_(e.annotations),e.isStatic&&(this.write_(me),this.writeSpace_()),this.visitAny(e.name),this.writeTypeAnnotation_(e.typeAnnotation),e.initalizer&&(this.writeSpace_(),this.write_(U),this.writeSpace_(),this.visitAny(e.initializer)),this.write_(fe)},visitPropertySignature:function(e){this.visitAny(e.name),e.optional&&this.write_(le),this.writeTypeAnnotation_(e.typeAnnotation),this.write_(fe)},visitTemplateLiteralExpression:function(e){e.operand&&(this.visitAny(e.operand),this.writeSpace_()),this.writeRaw_(O),this.visitList(e.elements),this.writeRaw_(O)},visitTemplateLiteralPortion:function(e){this.writeRaw_(""+e.value)},visitTemplateSubstitution:function(e){this.writeRaw_("$"),this.writeRaw_(ie),this.visitAny(e.expression),this.writeRaw_(L)},visitReturnStatement:function(e){this.write_(pe),this.writeSpace_(e.expression),this.visitAny(e.expression),this.write_(fe)},visitRestParameter:function(e){this.write_(V),this.write_(e.identifier.identifierToken),this.writeTypeAnnotation_(e.typeAnnotation)},visitSetAccessor:function(e){this.writeAnnotations_(e.annotations),e.isStatic&&(this.write_(me),this.writeSpace_()),this.write_(_),this.writeSpace_(),this.visitAny(e.name),this.write_(se),this.visitAny(e.parameterList),this.write_(I),this.writeSpace_(),this.visitAny(e.body)},visitSpreadExpression:function(e){this.write_(V),this.visitAny(e.expression)},visitSpreadPatternElement:function(e){this.write_(V),this.visitAny(e.lvalue)},visitStateMachine:function(){throw Error("State machines cannot be converted to source")},visitSuperExpression:function(){this.write_(de)},visitSwitchStatement:function(e){this.write_(ge),this.writeSpace_(),this.write_(se),this.visitAny(e.expression),this.write_(I),this.writeSpace_(),this.writeOpenCurly_(),this.writelnList_(e.caseClauses),this.writeCloseCurly_()},visitThisExpression:function(){this.write_(ye)},visitThrowStatement:function(e){this.write_(_e),this.writeSpace_(),this.visitAny(e.value),this.write_(fe)},visitTryStatement:function(e){this.write_(Se),this.writeSpace_(),this.visitAny(e.body),e.catchBlock&&(this.writeSpace_(),this.visitAny(e.catchBlock)),e.finallyBlock&&(this.writeSpace_(),this.visitAny(e.finallyBlock))},visitTypeArguments:function(e){this.write_(ne)
var t=e.args
this.visitAny(t[0])
for(var r=1;r<t.length;r++)this.write_(k),this.writeSpace_(),this.visitAny(t[r])
this.write_(P)},visitTypeName:function(e){e.moduleName&&(this.visitAny(e.moduleName),this.write_(oe)),this.write_(e.name)},visitTypeParameter:function(e){this.write_(e.identifierToken),e.extendsType&&(this.writeSpace_(),this.write_(H),this.writeSpace_(),this.visitAny(e.extendsType))},visitTypeParameters:function(e){this.write_(ne),this.writeList_(e.parameters,k,!1),this.write_(P)},visitUnaryExpression:function(t){var r=t.operator
this.write_(r)
var n=t.operand
n.type===c&&e(r.type,n.operator.type)&&this.writeRequiredSpace_(),this.visitAny(n)},visitUnionType:function(e){this.visitAny(e.types[0])
for(var t=1;t<e.types.length;t++)this.writeSpace_(),this.write_(A),this.writeSpace_(),this.visitAny(e.types[t])},visitVariableDeclarationList:function(e){this.write_(e.declarationType),this.writeSpace_(),this.writeList_(e.declarations,k,!0,2)},visitVariableDeclaration:function(e){this.visitAny(e.lvalue),this.writeTypeAnnotation_(e.typeAnnotation),null!==e.initializer&&(this.writeSpace_(),this.write_(U),this.writeSpace_(),this.visitAny(e.initializer))},visitVariableStatement:function(e){$traceurRuntime.superGet(this,Oe.prototype,"visitVariableStatement").call(this,e),this.write_(fe)},visitWhileStatement:function(e){this.write_(ve),this.writeSpace_(),this.write_(se),this.visitAny(e.condition),this.write_(I),this.visitAnyBlockOrIndent_(e.body)},visitWithStatement:function(e){this.write_(be),this.writeSpace_(),this.write_(se),this.visitAny(e.expression),this.write_(I),this.writeSpace_(),this.visitAny(e.body)},visitYieldExpression:function(e){this.write_(Te),e.isYieldFor&&this.write_(he),e.expression&&(this.writeSpace_(),this.visitAny(e.expression))},writeCurrentln_:function(){this.result_+=this.currentLine_+je},writeln_:function(){this.currentLine_&&this.writeCurrentln_(),this.currentLine_="",this.lastCode_=-1},writelnList_:function(e,t){t?this.writeList_(e,t,!0):(e.length>0&&this.writeln_(),this.writeList_(e,null,!0),e.length>0&&this.writeln_())},writeList_:function(e,t,r){for(var n=void 0!==arguments[3]?arguments[3]:0,i=!0,s=0;s<e.length;s++)i?i=!1:(null!==t&&(this.write_(t),r||this.writeSpace_()),r&&(1===s&&(this.indentDepth_+=n),this.writeln_())),this.visitAny(e[s])
r&&e.length>1&&(this.indentDepth_-=n)},writeRaw_:function(e){this.currentLine_+=e,this.lastCode_=e.charCodeAt(e.length-1)},write_:function(e){if(null!==e){if(this.prettyPrint_&&0===this.currentLine_.length)for(var t=0,r=this.indentDepth_;r>t;t++)this.writeRaw_("  ")
this.needsSpace_(e)&&this.writeRaw_(" "),this.writeRaw_(""+e)}},writeCloseCurly_:function(){this.indentDepth_--,this.write_(L)},writeOpenCurly_:function(){this.write_(ie),this.indentDepth_++},writeSpace_:function(){this.prettyPrint_&&!b(this.lastCode_)&&this.writeRaw_(" ")},writeRequiredSpace_:function(){b(this.lastCode_)||this.writeRaw_(" ")},writeTypeAnnotation_:function(e){null!==e&&(this.write_(M),this.writeSpace_(),this.visitAny(e))},writeAnnotations_:function(e){var t=void 0!==arguments[1]?arguments[1]:this.prettyPrint_
e.length>0&&(this.writeList_(e,null,t),t&&this.writeln_())},needsSpace_:function(e){var t=this.lastCode_
if(b(t))return!1
var r=(""+e).charCodeAt(0)
return v(r)&&(v(t)||47===t)}},{},u),{get ParseTreeWriter(){return Ee}}}),System.registerModule("traceur@0.0.87/src/outputgeneration/ParseTreeMapWriter.js",[],function(){"use strict"
function e(e,t){var r
if(!e||"@"===e[0])return e
if(!t)return e
var n=e.split("/"),i=t.split("/")
if(i[i.length-1])throw Error("rootPath must end in /")
var s=0,a=[],o=!1
if(n.forEach(function(e,t){return o||e!==i[t]?(o=!0,void a.push(e)):void s++}),1>s||s===i.length)return e
for(var c=i.length-s-1,u=[];c--;)u.push("..")
return(r=u).push.apply(r,$traceurRuntime.spread(a)),u.join("/")}var t=System.get("traceur@0.0.87/src/outputgeneration/ParseTreeWriter.js").ParseTreeWriter,r=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,n=function(e){var t=arguments[1]
$traceurRuntime.superConstructor(i).call(this,t),this.sourceMapGenerator_=e.sourceMapGenerator,this.lowResolution_=e.lowResolution,this.basepath_=e.basepath,this.outputLineCount_=1,this.isFirstMapping_=!0,this.sourcesInMap_=new r},i=n
return $traceurRuntime.createClass(n,{visitAny:function(e){e&&(e.location&&this.enterBranch(e.location),$traceurRuntime.superGet(this,i.prototype,"visitAny").call(this,e),e.location&&this.exitBranch(e.location))},writeCurrentln_:function(){$traceurRuntime.superGet(this,i.prototype,"writeCurrentln_").call(this),this.flushMappings(),this.outputLineCount_++,this.generated_={line:this.outputLineCount_,column:0},this.flushMappings()},write_:function(e){this.generate(),$traceurRuntime.superGet(this,i.prototype,"write_").call(this,e),this.generate()},generate:function(){var e=this.currentLine_.length?this.currentLine_.length-1:0
this.generated_={line:this.outputLineCount_,column:e},this.flushMappings()},enterBranch:function(e){this.originate(e.start)},exitBranch:function(e){var t=e.end,r={line:t.line,column:t.column?t.column-1:0,source:t.source}
this.originate(r)},originate:function(t){var r=t.line+1
this.original_&&this.original_.line!==r&&this.flushMappings(),this.original_={line:r,column:t.column||0},t.source.name&&!this.sourcesInMap_.has(t.source.name)&&(this.sourcesInMap_.add(t.source.name),this.relativeSourceName_=e(t.source.name,this.basepath_),this.sourceMapGenerator_.setSourceContent(this.relativeSourceName_,t.source.contents)),this.flushMappings()},flushMappings:function(){this.original_&&this.generated_&&(this.addMapping(),this.original_=null,this.generated_=null)},isSame:function(e,t){return e.line===t.line&&e.column===t.column},skipMapping:function(){return this.previousMapping_?this.lowResolution_&&this.previousMapping_.generated.line===this.generated_.line?!0:this.isSame(this.previousMapping_.generated,this.generated_)&&this.isSame(this.previousMapping_.original,this.original_)?!0:void 0:!1},addMapping:function(){if(!this.skipMapping()){var e={generated:this.generated_,original:this.original_,source:this.relativeSourceName_}
this.sourceMapGenerator_.addMapping(e),this.previousMapping_=e}}},{},t),{get ParseTreeMapWriter(){return n},get relativePath(){return e}}}),System.registerModule("traceur@0.0.87/src/outputgeneration/SourceMapIntegration.js",[],function(){"use strict"
function e(e,t){var r=function(t){return e[t]},n=e[t]={},i=null
return function(e){e(r,n,i)}}var t,r={}
if(t=e(r,"./util"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){function r(e,t,r){if(t in e)return e[t]
if(3===arguments.length)return r
throw Error('"'+t+'" is a required argument.')}function n(e){var t=e.match(h)
return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t=""
return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function s(e){var t=e,r=n(e)
if(r){if(!r.path)return e
t=r.path}for(var s="/"===t.charAt(0),a=t.split(/\/+/),o=void 0,c=0,u=a.length-1;u>=0;u--)o=a[u],"."===o?a.splice(u,1):".."===o?c++:c>0&&(""===o?(a.splice(u+1,c),c=0):(a.splice(u,2),c--))
return t=a.join("/"),""===t&&(t=s?"/":"."),r?(r.path=t,i(r)):t}function a(e,t){""===e&&(e="."),""===t&&(t=".")
var r=n(t),a=n(e)
if(a&&(e=a.path||"/"),r&&!r.scheme)return a&&(r.scheme=a.scheme),i(r)
if(r||t.match(m))return t
if(a&&!a.host&&!a.path)return a.host=t,i(a)
var o="/"===t.charAt(0)?t:s(e.replace(/\/+$/,"")+"/"+t)
return a?(a.path=o,i(a)):o}function o(e,t){""===e&&(e="."),e=e.replace(/\/$/,"")
var r=n(e)
return"/"==t.charAt(0)&&r&&"/"==r.path?t.slice(1):0===t.indexOf(e+"/")?t.substr(e.length+1):t}function c(e){return"$"+e}function u(e){return e.substr(1)}function l(e,t){var r=e||"",n=t||""
return(r>n)-(n>r)}function p(e,t,r){var n
return(n=l(e.source,t.source))?n:(n=e.originalLine-t.originalLine)?n:(n=e.originalColumn-t.originalColumn,n||r?n:(n=l(e.name,t.name))?n:(n=e.generatedLine-t.generatedLine,n?n:e.generatedColumn-t.generatedColumn))}function f(e,t,r){var n
return(n=e.generatedLine-t.generatedLine)?n:(n=e.generatedColumn-t.generatedColumn,n||r?n:(n=l(e.source,t.source))?n:(n=e.originalLine-t.originalLine)?n:(n=e.originalColumn-t.originalColumn,n?n:l(e.name,t.name)))}t.getArg=r
var h=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,m=/^data:.+\,.+$/
t.urlParse=n,t.urlGenerate=i,t.normalize=s,t.join=a,t.relative=o,t.toSetString=c,t.fromSetString=u,t.compareByOriginalPositions=p,t.compareByGeneratedPositions=f}),t=e(r,"./array-set"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){function r(){this._array=[],this._set={}}var n=e("./util")
r.fromArray=function(e,t){for(var n=new r,i=0,s=e.length;s>i;i++)n.add(e[i],t)
return n},r.prototype.add=function(e,t){var r=this.has(e),i=this._array.length;(!r||t)&&this._array.push(e),r||(this._set[n.toSetString(e)]=i)},r.prototype.has=function(e){return Object.prototype.hasOwnProperty.call(this._set,n.toSetString(e))},r.prototype.indexOf=function(e){if(this.has(e))return this._set[n.toSetString(e)]
throw Error('"'+e+'" is not in the set.')},r.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e]
throw Error("No element indexed by "+e)},r.prototype.toArray=function(){return this._array.slice()},t.ArraySet=r}),t=e(r,"./base64"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){var r={},n={}
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").forEach(function(e,t){r[e]=t,n[t]=e}),t.encode=function(e){if(e in n)return n[e]
throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){if(e in r)return r[e]
throw new TypeError("Not a valid base 64 digit: "+e)}}),t=e(r,"./base64-vlq"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){function r(e){return 0>e?(-e<<1)+1:(e<<1)+0}function n(e){var t=1===(1&e),r=e>>1
return t?-r:r}var i=e("./base64"),s=5,a=1<<s,o=a-1,c=a
t.encode=function(e){var t,n="",a=r(e)
do t=a&o,a>>>=s,a>0&&(t|=c),n+=i.encode(t)
while(a>0)
return n},t.decode=function(e,t){var r,a,u=0,l=e.length,p=0,f=0
do{if(u>=l)throw Error("Expected more digits in base 64 VLQ value.")
a=i.decode(e.charAt(u++)),r=!!(a&c),a&=o,p+=a<<f,f+=s}while(r)
t.value=n(p),t.rest=e.slice(u)}}),t=e(r,"./binary-search"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){function r(e,t,n,i,s){var a=Math.floor((t-e)/2)+e,o=s(n,i[a],!0)
return 0===o?a:o>0?t-a>1?r(a,t,n,i,s):a:a-e>1?r(e,a,n,i,s):0>e?-1:e}t.search=function(e,t,n){return 0===t.length?-1:r(-1,t.length,e,t,n)}}),t=e(r,"./mapping-list"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){function r(e,t){var r=e.generatedLine,n=t.generatedLine,s=e.generatedColumn,a=t.generatedColumn
return n>r||n==r&&a>=s||i.compareByGeneratedPositions(e,t)<=0}function n(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}var i=e("./util")
n.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},n.prototype.add=function(e){r(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},n.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositions),this._sorted=!0),this._array},t.MappingList=n}),t=e(r,"./source-map-generator"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){function r(e){e||(e={}),this._file=i.getArg(e,"file",null),this._sourceRoot=i.getArg(e,"sourceRoot",null),this._skipValidation=i.getArg(e,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new a,this._sourcesContents=null}var n=e("./base64-vlq"),i=e("./util"),s=e("./array-set").ArraySet,a=e("./mapping-list").MappingList
r.prototype._version=3,r.fromSourceMap=function(e){var t=e.sourceRoot,n=new r({file:e.file,sourceRoot:t})
return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}}
null!=e.source&&(r.source=e.source,null!=t&&(r.source=i.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(t){var r=e.sourceContentFor(t)
null!=r&&n.setSourceContent(t,r)}),n},r.prototype.addMapping=function(e){var t=i.getArg(e,"generated"),r=i.getArg(e,"original",null),n=i.getArg(e,"source",null),s=i.getArg(e,"name",null)
this._skipValidation||this._validateMapping(t,r,n,s),null==n||this._sources.has(n)||this._sources.add(n),null==s||this._names.has(s)||this._names.add(s),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:n,name:s})},r.prototype.setSourceContent=function(e,t){var r=e
null!=this._sourceRoot&&(r=i.relative(this._sourceRoot,r)),null!=t?(this._sourcesContents||(this._sourcesContents={}),this._sourcesContents[i.toSetString(r)]=t):this._sourcesContents&&(delete this._sourcesContents[i.toSetString(r)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},r.prototype.applySourceMap=function(e,t,r){var n=t
if(null==t){if(null==e.file)throw Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.')
n=e.file}var a=this._sourceRoot
null!=a&&(n=i.relative(a,n))
var o=new s,c=new s
this._mappings.unsortedForEach(function(t){if(t.source===n&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn})
null!=s.source&&(t.source=s.source,null!=r&&(t.source=i.join(r,t.source)),null!=a&&(t.source=i.relative(a,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var u=t.source
null==u||o.has(u)||o.add(u)
var l=t.name
null==l||c.has(l)||c.add(l)},this),this._sources=o,this._names=c,e.sources.forEach(function(t){var n=e.sourceContentFor(t)
null!=n&&(null!=r&&(t=i.join(r,t)),null!=a&&(t=i.relative(a,t)),this.setSourceContent(t,n))},this)},r.prototype._validateMapping=function(e,t,r,n){if(!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!t&&!r&&!n||e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r))throw Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:n}))},r.prototype._serializeMappings=function(){for(var e,t=0,r=1,s=0,a=0,o=0,c=0,u="",l=this._mappings.toArray(),p=0,f=l.length;f>p;p++){if(e=l[p],e.generatedLine!==r)for(t=0;e.generatedLine!==r;)u+=";",r++
else if(p>0){if(!i.compareByGeneratedPositions(e,l[p-1]))continue
u+=","}u+=n.encode(e.generatedColumn-t),t=e.generatedColumn,null!=e.source&&(u+=n.encode(this._sources.indexOf(e.source)-c),c=this._sources.indexOf(e.source),u+=n.encode(e.originalLine-1-a),a=e.originalLine-1,u+=n.encode(e.originalColumn-s),s=e.originalColumn,null!=e.name&&(u+=n.encode(this._names.indexOf(e.name)-o),o=this._names.indexOf(e.name)))}return u},r.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null
null!=t&&(e=i.relative(t,e))
var r=i.toSetString(e)
return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null},this)},r.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()}
return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},r.prototype.toString=function(){return JSON.stringify(this)},t.SourceMapGenerator=r}),t=e(r,"./source-map-consumer"),"function"!=typeof t)var t=require("amdefine")(module,require)
if(t(function(e,t){function r(e){var t=e
"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")))
var r=n.getArg(t,"version"),i=n.getArg(t,"sources"),a=n.getArg(t,"names",[]),o=n.getArg(t,"sourceRoot",null),c=n.getArg(t,"sourcesContent",null),u=n.getArg(t,"mappings"),l=n.getArg(t,"file",null)
if(r!=this._version)throw Error("Unsupported version: "+r)
i=i.map(n.normalize),this._names=s.fromArray(a,!0),this._sources=s.fromArray(i,!0),this.sourceRoot=o,this.sourcesContent=c,this._mappings=u,this.file=l}var n=e("./util"),i=e("./binary-search"),s=e("./array-set").ArraySet,a=e("./base64-vlq")
r.fromSourceMap=function(e){var t=Object.create(r.prototype)
return t._names=s.fromArray(e._names.toArray(),!0),t._sources=s.fromArray(e._sources.toArray(),!0),t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file,t.__generatedMappings=e._mappings.toArray().slice(),t.__originalMappings=e._mappings.toArray().slice().sort(n.compareByOriginalPositions),t},r.prototype._version=3,Object.defineProperty(r.prototype,"sources",{get:function(){return this._sources.toArray().map(function(e){return null!=this.sourceRoot?n.join(this.sourceRoot,e):e},this)}}),r.prototype.__generatedMappings=null,Object.defineProperty(r.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||(this.__generatedMappings=[],this.__originalMappings=[],this._parseMappings(this._mappings,this.sourceRoot)),this.__generatedMappings}}),r.prototype.__originalMappings=null,Object.defineProperty(r.prototype,"_originalMappings",{get:function(){return this.__originalMappings||(this.__generatedMappings=[],this.__originalMappings=[],this._parseMappings(this._mappings,this.sourceRoot)),this.__originalMappings}}),r.prototype._nextCharIsMappingSeparator=function(e){var t=e.charAt(0)
return";"===t||","===t},r.prototype._parseMappings=function(e){for(var t,r=1,i=0,s=0,o=0,c=0,u=0,l=e,p={};l.length>0;)if(";"===l.charAt(0))r++,l=l.slice(1),i=0
else if(","===l.charAt(0))l=l.slice(1)
else{if(t={},t.generatedLine=r,a.decode(l,p),t.generatedColumn=i+p.value,i=t.generatedColumn,l=p.rest,l.length>0&&!this._nextCharIsMappingSeparator(l)){if(a.decode(l,p),t.source=this._sources.at(c+p.value),c+=p.value,l=p.rest,0===l.length||this._nextCharIsMappingSeparator(l))throw Error("Found a source, but no line and column")
if(a.decode(l,p),t.originalLine=s+p.value,s=t.originalLine,t.originalLine+=1,l=p.rest,0===l.length||this._nextCharIsMappingSeparator(l))throw Error("Found a source and line, but no column")
a.decode(l,p),t.originalColumn=o+p.value,o=t.originalColumn,l=p.rest,l.length>0&&!this._nextCharIsMappingSeparator(l)&&(a.decode(l,p),t.name=this._names.at(u+p.value),u+=p.value,l=p.rest)}this.__generatedMappings.push(t),"number"==typeof t.originalLine&&this.__originalMappings.push(t)}this.__generatedMappings.sort(n.compareByGeneratedPositions),this.__originalMappings.sort(n.compareByOriginalPositions)},r.prototype._findMapping=function(e,t,r,n,s){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r])
if(e[n]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[n])
return i.search(e,t,s)},r.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e]
if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1]
if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1
continue}}t.lastGeneratedColumn=1/0}},r.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",n.compareByGeneratedPositions)
if(r>=0){var i=this._generatedMappings[r]
if(i.generatedLine===t.generatedLine){var s=n.getArg(i,"source",null)
return null!=s&&null!=this.sourceRoot&&(s=n.join(this.sourceRoot,s)),{source:s,line:n.getArg(i,"originalLine",null),column:n.getArg(i,"originalColumn",null),name:n.getArg(i,"name",null)}}}return{source:null,line:null,column:null,name:null}},r.prototype.sourceContentFor=function(e){if(!this.sourcesContent)return null
if(null!=this.sourceRoot&&(e=n.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)]
var t
if(null!=this.sourceRoot&&(t=n.urlParse(this.sourceRoot))){var r=e.replace(/^file:\/\//,"")
if("file"==t.scheme&&this._sources.has(r))return this.sourcesContent[this._sources.indexOf(r)]
if((!t.path||"/"==t.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}throw Error('"'+e+'" is not in the SourceMap.')},r.prototype.generatedPositionFor=function(e){var t={source:n.getArg(e,"source"),originalLine:n.getArg(e,"line"),originalColumn:n.getArg(e,"column")}
null!=this.sourceRoot&&(t.source=n.relative(this.sourceRoot,t.source))
var r=this._findMapping(t,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions)
if(r>=0){var i=this._originalMappings[r]
return{line:n.getArg(i,"generatedLine",null),column:n.getArg(i,"generatedColumn",null),lastColumn:n.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},r.prototype.allGeneratedPositionsFor=function(e){var t={source:n.getArg(e,"source"),originalLine:n.getArg(e,"line"),originalColumn:1/0}
null!=this.sourceRoot&&(t.source=n.relative(this.sourceRoot,t.source))
var r=[],i=this._findMapping(t,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions)
if(i>=0)for(var s=this._originalMappings[i];s&&s.originalLine===t.originalLine;)r.push({line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}),s=this._originalMappings[--i]
return r.reverse()},r.GENERATED_ORDER=1,r.ORIGINAL_ORDER=2,r.prototype.eachMapping=function(e,t,i){var s,a=t||null,o=i||r.GENERATED_ORDER
switch(o){case r.GENERATED_ORDER:s=this._generatedMappings
break
case r.ORIGINAL_ORDER:s=this._originalMappings
break
default:throw Error("Unknown order of iteration.")}var c=this.sourceRoot
s.map(function(e){var t=e.source
return null!=t&&null!=c&&(t=n.join(c,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:e.name}}).forEach(e,a)},t.SourceMapConsumer=r}),t=e(r,"./source-node"),"function"!=typeof t)var t=require("amdefine")(module,require)
t(function(e,t){function r(e,t,r,n,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==r?null:r,this.name=null==i?null:i,this[o]=!0,null!=n&&this.add(n)}var n=e("./source-map-generator").SourceMapGenerator,i=e("./util"),s=/(\r?\n)/,a=10,o="$$$isSourceNode$$$"
r.fromStringWithSourceMap=function(e,t,n){function a(e,t){if(null===e||void 0===e.source)o.add(t)
else{var s=n?i.join(n,e.source):e.source
o.add(new r(e.originalLine,e.originalColumn,s,t,e.name))}}var o=new r,c=e.split(s),u=function(){var e=c.shift(),t=c.shift()||""
return e+t},l=1,p=0,f=null
return t.eachMapping(function(e){if(null!==f){if(!(l<e.generatedLine)){var t=c[0],r=t.substr(0,e.generatedColumn-p)
return c[0]=t.substr(e.generatedColumn-p),p=e.generatedColumn,a(f,r),void(f=e)}var r=""
a(f,u()),l++,p=0}for(;l<e.generatedLine;)o.add(u()),l++
if(p<e.generatedColumn){var t=c[0]
o.add(t.substr(0,e.generatedColumn)),c[0]=t.substr(e.generatedColumn),p=e.generatedColumn}f=e},this),c.length>0&&(f&&a(f,u()),o.add(c.join(""))),t.sources.forEach(function(e){var r=t.sourceContentFor(e)
null!=r&&(null!=n&&(e=i.join(n,e)),o.setSourceContent(e,r))}),o},r.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(e){this.add(e)},this)
else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e)
e&&this.children.push(e)}return this},r.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t])
else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e)
this.children.unshift(e)}return this},r.prototype.walk=function(e){for(var t,r=0,n=this.children.length;n>r;r++)t=this.children[r],t[o]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},r.prototype.join=function(e){var t,r,n=this.children.length
if(n>0){for(t=[],r=0;n-1>r;r++)t.push(this.children[r]),t.push(e)
t.push(this.children[r]),this.children=t}return this},r.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1]
return r[o]?r.replaceRight(e,t):"string"==typeof r?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this},r.prototype.setSourceContent=function(e,t){this.sourceContents[i.toSetString(e)]=t},r.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;r>t;t++)this.children[t][o]&&this.children[t].walkSourceContents(e)
for(var n=Object.keys(this.sourceContents),t=0,r=n.length;r>t;t++)e(i.fromSetString(n[t]),this.sourceContents[n[t]])},r.prototype.toString=function(){var e=""
return this.walk(function(t){e+=t}),e},r.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new n(e),i=!1,s=null,o=null,c=null,u=null
return this.walk(function(e,n){t.code+=e,null!==n.source&&null!==n.line&&null!==n.column?((s!==n.source||o!==n.line||c!==n.column||u!==n.name)&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name}),s=n.source,o=n.line,c=n.column,u=n.name,i=!0):i&&(r.addMapping({generated:{line:t.line,column:t.column}}),s=null,i=!1)
for(var l=0,p=e.length;p>l;l++)e.charCodeAt(l)===a?(t.line++,t.column=0,l+1===p?(s=null,i=!1):i&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name})):t.column++}),this.walkSourceContents(function(e,t){r.setSourceContent(e,t)}),{code:t.code,map:r}},t.SourceNode=r})
var n=r["./source-map-generator"].SourceMapGenerator,i=r["./source-map-consumer"].SourceMapConsumer,s=r["./source-node"].SourceNode,a=r["./util"].join
return{get SourceMapGenerator(){return n},get SourceMapConsumer(){return i},get SourceNode(){return s},get join(){return a}}}),System.registerModule("traceur@0.0.87/src/outputgeneration/toSource.js",[],function(){"use strict"
function e(e){var i=arguments[1],s=void 0!==arguments[2]?arguments[2]:"<toSourceOutput>",a=arguments[3],o=i&&i.sourceMapGenerator,c=i&&i.sourceMaps
!o&&c&&(o=new n({file:s,sourceRoot:a,skipValidation:!0}))
var u,l={sourceMapGenerator:o,sourceRoot:a,lowResolution:i&&i.lowResolutionSourceMap}
return u=o?new t(l,i):new r(i),u.visitAny(e),[""+u,o&&""+o]}var t=System.get("traceur@0.0.87/src/outputgeneration/ParseTreeMapWriter.js").ParseTreeMapWriter,r=System.get("traceur@0.0.87/src/outputgeneration/ParseTreeWriter.js").ParseTreeWriter,n=System.get("traceur@0.0.87/src/outputgeneration/SourceMapIntegration.js").SourceMapGenerator
return{get toSource(){return e}}}),System.registerModule("traceur@0.0.87/src/outputgeneration/TreeWriter.js",[],function(){"use strict"
function e(e){var r,n,i=arguments[1],s=void 0!==arguments[2]?arguments[2]:"<TreeWriter-output>",a=arguments[3],o=t(e,i,s,a),c=(r=o[$traceurRuntime.toProperty(Symbol.iterator)](),(n=r.next()).done?void 0:n.value),u=(n=r.next()).done?void 0:n.value
return u&&(i.generatedSourceMap=u),c}var t=System.get("traceur@0.0.87/src/outputgeneration/toSource.js").toSource,r=function(){}
return $traceurRuntime.createClass(r,{},{}),r.write=e,{get write(){return e},get TreeWriter(){return r}}}),System.registerModule("traceur@0.0.87/src/syntax/ParseTreeValidator.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").NewExpression,t=System.get("traceur@0.0.87/src/syntax/ParseTreeVisitor.js").ParseTreeVisitor,r=System.get("traceur@0.0.87/src/outputgeneration/TreeWriter.js").TreeWriter,n=System.get("traceur@0.0.87/src/syntax/TokenType.js"),i=n.AMPERSAND,s=n.AMPERSAND_EQUAL,a=n.AND,o=n.BAR,c=n.BAR_EQUAL,u=n.CARET,l=n.CARET_EQUAL,p=n.CLOSE_ANGLE,f=n.EQUAL,h=n.EQUAL_EQUAL,m=n.EQUAL_EQUAL_EQUAL,d=n.GREATER_EQUAL,g=n.IDENTIFIER,y=n.IN,_=n.INSTANCEOF,S=n.LEFT_SHIFT,v=n.LEFT_SHIFT_EQUAL,b=n.LESS_EQUAL,T=n.MINUS,j=n.MINUS_EQUAL,E=n.NOT_EQUAL,O=n.NOT_EQUAL_EQUAL,A=n.NUMBER,R=n.OPEN_ANGLE,x=n.OR,w=n.PERCENT,C=n.PERCENT_EQUAL,P=n.PLUS,L=n.PLUS_EQUAL,I=n.RIGHT_SHIFT,N=n.RIGHT_SHIFT_EQUAL,M=n.SLASH,k=n.SLASH_EQUAL,F=n.STAR,$=n.STAR_EQUAL,B=n.STAR_STAR,D=n.STAR_STAR_EQUAL,V=n.STRING,G=n.UNSIGNED_RIGHT_SHIFT,U=n.UNSIGNED_RIGHT_SHIFT_EQUAL,z=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),H=z.ARRAY_PATTERN,Y=z.ASSIGNMENT_ELEMENT,X=z.BINDING_ELEMENT,W=z.BINDING_IDENTIFIER,Q=z.BLOCK,K=z.CASE_CLAUSE,q=z.CATCH,J=z.CLASS_DECLARATION,Z=z.COMPUTED_PROPERTY_NAME,ee=z.DEFAULT_CLAUSE,te=z.EXPORT_DEFAULT,re=z.EXPORT_SPECIFIER,ne=z.EXPORT_SPECIFIER_SET,ie=z.EXPORT_STAR,se=z.FINALLY,ae=z.FORMAL_PARAMETER,oe=z.FORMAL_PARAMETER_LIST,ce=z.FUNCTION_BODY,ue=z.FUNCTION_DECLARATION,le=z.GET_ACCESSOR,pe=z.IDENTIFIER_EXPRESSION,fe=z.IMPORTED_BINDING,he=z.LITERAL_PROPERTY_NAME,me=z.MODULE_DECLARATION,de=z.MODULE_SPECIFIER,ge=z.NAMED_EXPORT,ye=z.OBJECT_PATTERN,_e=z.OBJECT_PATTERN_FIELD,Se=z.PROPERTY_METHOD_ASSIGNMENT,ve=z.PROPERTY_NAME_ASSIGNMENT,be=z.PROPERTY_NAME_SHORTHAND,Te=z.PROPERTY_VARIABLE_DECLARATION,je=z.REST_PARAMETER,Ee=z.SET_ACCESSOR,Oe=z.TEMPLATE_LITERAL_PORTION,Ae=z.TEMPLATE_SUBSTITUTION,Re=z.TYPE_ARGUMENTS,xe=z.TYPE_NAME,we=z.TYPE_PARAMETER,Ce=z.TYPE_PARAMETERS,Pe=z.VARIABLE_DECLARATION_LIST,Le=z.VARIABLE_STATEMENT,Ie=System.get("traceur@0.0.87/src/util/assert.js").assert,Ne=function(e,t){$traceurRuntime.superConstructor(Me).call(this),this.tree=e,this.message=t},Me=Ne
$traceurRuntime.createClass(Ne,{},{},Error)
var ke=function(){$traceurRuntime.superConstructor(Fe).apply(this,arguments)},Fe=ke
return $traceurRuntime.createClass(ke,{fail_:function(e,t){throw new Ne(e,t)},check_:function(e,t,r){e||this.fail_(t,r)},checkVisit_:function(e,t,r){this.check_(e,t,r),this.visitAny(t)},checkType_:function(e,t,r){this.checkVisit_(t.type===e,t,r)},visitArgumentList:function(e){for(var t=0;t<e.args.length;t++){var r=e.args[t]
this.checkVisit_(r.isAssignmentOrSpread(),r,"assignment or spread expected")}},visitArrayLiteralExpression:function(e){for(var t=0;t<e.elements.length;t++){var r=e.elements[t]
this.checkVisit_(null===r||r.isAssignmentOrSpread(),r,"assignment or spread expected")}},visitArrayPattern:function(e){for(var t=0;t<e.elements.length;t++){var r=e.elements[t]
this.checkVisit_(null===r||r.type===X||r.type===Y||r.isLeftHandSideExpression()||r.isPattern()||r.isSpreadPatternElement(),r,"null, sub pattern, left hand side expression or spread expected"),r&&r.isSpreadPatternElement()&&this.check_(t===e.elements.length-1,r,"spread in array patterns must be the last element")}},visitBinaryExpression:function(e){switch(e.operator.type){case f:case $:case D:case k:case C:case L:case j:case v:case N:case U:case s:case l:case c:this.check_(e.left.isLeftHandSideExpression()||e.left.isPattern(),e.left,"left hand side expression or pattern expected"),this.check_(e.right.isAssignmentExpression(),e.right,"assignment expression expected")
break
case a:case x:case o:case u:case i:case h:case E:case m:case O:case R:case p:case d:case b:case _:case y:case S:case I:case G:case P:case T:case F:case M:case w:case B:this.check_(e.left.isAssignmentExpression(),e.left,"assignment expression expected"),this.check_(e.right.isAssignmentExpression(),e.right,"assignment expression expected")
break
default:this.fail_(e,"unexpected binary operator")}this.visitAny(e.left),this.visitAny(e.right)},visitBindingElement:function(e){var t=e.binding
this.checkVisit_(t.type===W||t.type===ye||t.type===H,t,"expected valid binding element"),this.visitAny(e.initializer)},visitAssignmentElement:function(e){var t=e.assignment
this.checkVisit_(t.type===ye||t.type===H||t.isLeftHandSideExpression(),t,"expected valid assignment element"),this.visitAny(e.initializer)},visitBlock:function(e){for(var t=0;t<e.statements.length;t++){var r=e.statements[t]
this.checkVisit_(r.isStatementListItem(),r,"statement or function declaration expected")}},visitCallExpression:function(t){this.check_(t.operand.isMemberExpression(),t.operand,"member expression expected"),t.operand instanceof e&&this.check_(null!==t.operand.args,t.operand,"new args expected"),this.visitAny(t.operand),this.visitAny(t.args)},visitCaseClause:function(e){this.checkVisit_(e.expression.isExpression(),e.expression,"expression expected")
for(var t=0;t<e.statements.length;t++){var r=e.statements[t]
this.checkVisit_(r.isStatement(),r,"statement expected")}},visitCatch:function(e){this.checkVisit_(e.binding.isPattern()||e.binding.type===W,e.binding,"binding identifier expected"),this.checkVisit_(e.catchBody.type===Q,e.catchBody,"block expected")},visitClassDeclaration:function(e){this.visitClassShared_(e)},visitClassExpression:function(e){this.visitClassShared_(e)},visitClassShared_:function(e){e.typeParameters&&this.checkVisit_(e.typeParameters.type===Ce,e.typeParameters,"type parameters expected")
for(var t=0;t<e.elements.length;t++){var r=e.elements[t]
switch(r.type){case le:case Ee:case Se:case Te:break
default:this.fail_(r,"class element expected")}this.visitAny(r)}},visitCommaExpression:function(e){for(var t=0;t<e.expressions.length;t++){var r=e.expressions[t]
this.checkVisit_(r.isExpression(),r,"expression expected")}},visitConditionalExpression:function(e){this.checkVisit_(e.condition.isAssignmentExpression(),e.condition,"expression expected"),this.checkVisit_(e.left.isAssignmentExpression(),e.left,"expression expected"),this.checkVisit_(e.right.isAssignmentExpression(),e.right,"expression expected")},visitCoverFormals:function(e){this.fail_(e,"CoverFormals should have been removed")},visitCoverInitializedName:function(e){this.fail_(e,"CoverInitializedName should have been removed")},visitDefaultClause:function(e){for(var t=0;t<e.statements.length;t++){var r=e.statements[t]
this.checkVisit_(r.isStatement(),r,"statement expected")}},visitDoWhileStatement:function(e){this.checkVisit_(e.body.isStatement(),e.body,"statement expected"),this.checkVisit_(e.condition.isExpression(),e.condition,"expression expected")},visitExportDeclaration:function(e){var t=e.declaration.type
this.checkVisit_(t===Le||t===ue||t===me||t===J||t===ge||t===te,e.declaration,"expected valid export tree")},visitNamedExport:function(e){e.moduleSpecifier&&this.checkVisit_(e.moduleSpecifier.type===de,e.moduleSpecifier,"module expression expected")
var t=e.specifierSet.type
this.checkVisit_(t===ne||t===ie,e.specifierSet,"specifier set or identifier expected")},visitExportSpecifierSet:function(e){this.check_(e.specifiers.length>0,e,"expected at least one identifier")
for(var t=0;t<e.specifiers.length;t++){var r=e.specifiers[t]
this.checkVisit_(r.type===re||r.type===pe,r,"expected valid export specifier")}},visitExpressionStatement:function(e){this.checkVisit_(e.expression.isExpression(),e.expression,"expression expected")},visitFinally:function(e){this.checkVisit_(e.block.type===Q,e.block,"block expected")},visitForOfStatement:function(e){this.checkVisit_(e.initializer.isPattern()||e.initializer.type===pe||e.initializer.type===Pe&&1===e.initializer.declarations.length,e.initializer,"for-each statement may not have more than one variable declaration"),this.checkVisit_(e.collection.isExpression(),e.collection,"expression expected"),this.checkVisit_(e.body.isStatement(),e.body,"statement expected")},visitForInStatement:function(e){e.initializer.type===Pe?this.checkVisit_(e.initializer.declarations.length<=1,e.initializer,"for-in statement may not have more than one variable declaration"):this.checkVisit_(e.initializer.isPattern()||e.initializer.isExpression(),e.initializer,"variable declaration, expression or pattern expected"),this.checkVisit_(e.collection.isExpression(),e.collection,"expression expected"),this.checkVisit_(e.body.isStatement(),e.body,"statement expected")},visitFormalParameterList:function(e){for(var t=0;t<e.parameters.length;t++){var r=e.parameters[t]
switch(Ie(r.type===ae),r=r.parameter,r.type){case X:break
case je:this.checkVisit_(t===e.parameters.length-1,r,"rest parameters must be the last parameter in a parameter list"),this.checkType_(W,r.identifier,"binding identifier expected")
break
default:this.fail_(r,"parameters must be identifiers or rest parameters. Found: "+r.type)}this.visitAny(r)}},visitForStatement:function(e){null!==e.initializer&&this.checkVisit_(e.initializer.isExpression()||e.initializer.type===Pe,e.initializer,"variable declaration list or expression expected"),null!==e.condition&&this.checkVisit_(e.condition.isExpression(),e.condition,"expression expected"),null!==e.increment&&this.checkVisit_(e.increment.isExpression(),e.increment,"expression expected"),this.checkVisit_(e.body.isStatement(),e.body,"statement expected")},visitFunctionBody:function(e){for(var t=0;t<e.statements.length;t++){var r=e.statements[t]
this.checkVisit_(r.isStatementListItem(),r,"statement expected")}},visitFunctionDeclaration:function(e){this.checkType_(W,e.name,"binding identifier expected"),this.visitFunction_(e)},visitFunctionExpression:function(e){null!==e.name&&this.checkType_(W,e.name,"binding identifier expected"),this.visitFunction_(e)},visitFunction_:function(e){this.checkType_(oe,e.parameterList,"formal parameters expected"),this.checkType_(ce,e.body,"function body expected")},visitGetAccessor:function(e){this.checkPropertyName_(e.name),this.checkType_(ce,e.body,"function body expected")},visitIfStatement:function(e){this.checkVisit_(e.condition.isExpression(),e.condition,"expression expected"),this.checkVisit_(e.ifClause.isStatement(),e.ifClause,"statement expected"),null!==e.elseClause&&this.checkVisit_(e.elseClause.isStatement(),e.elseClause,"statement expected")},visitImportSpecifier:function(e){this.checkType_(fe,e.binding,"ImportedBinding expected")},visitImportedBinding:function(e){this.checkType_(W,e.binding,"binding identifier expected")},visitLabelledStatement:function(e){this.checkVisit_(e.statement.isStatement(),e.statement,"statement expected")},visitMemberExpression:function(t){this.check_(t.operand.isMemberExpression(),t.operand,"member expression expected"),t.operand instanceof e&&this.check_(null!==t.operand.args,t.operand,"new args expected"),this.visitAny(t.operand)},visitMemberLookupExpression:function(t){this.check_(t.operand.isMemberExpression(),t.operand,"member expression expected"),t.operand instanceof e&&this.check_(null!==t.operand.args,t.operand,"new args expected"),this.visitAny(t.operand)},visitSyntaxErrorTree:function(e){this.fail_(e,"parse tree contains SyntaxError: "+e.message)},visitModuleSpecifier:function(e){this.check_(e.token.type===V||e.moduleName,"string or identifier expected")},visitModuleDeclaration:function(e){this.checkType_(fe,e.binding,"ImportedBinding expected"),this.checkType_(de,e.expression,"module expression expected")},visitNewExpression:function(e){this.checkVisit_(e.operand.isMemberExpression(),e.operand,"member expression expected"),this.visitAny(e.args)},visitObjectLiteralExpression:function(e){for(var t=0;t<e.propertyNameAndValues.length;t++){var r=e.propertyNameAndValues[t]
switch(r.type){case le:case Ee:case Se:this.check_(!r.isStatic,r,"static is not allowed in object literal expression")
case ve:case be:break
default:this.fail_(r,"accessor, property name assignment or property method assigment expected")}this.visitAny(r)}},visitObjectPattern:function(e){for(var t=0;t<e.fields.length;t++){var r=e.fields[t]
this.checkVisit_(r.type===_e||r.type===Y||r.type===X,r,"object pattern field expected")}},visitObjectPatternField:function(e){this.checkPropertyName_(e.name),this.checkVisit_(e.element.type===Y||e.element.type===X||e.element.isPattern()||e.element.isLeftHandSideExpression(),e.element,"binding element expected")},visitParenExpression:function(e){e.expression.isPattern()?this.visitAny(e.expression):this.checkVisit_(e.expression.isExpression(),e.expression,"expression expected")},visitPostfixExpression:function(e){this.checkVisit_(e.operand.isAssignmentExpression(),e.operand,"assignment expression expected")},visitPredefinedType:function(){},visitScript:function(e){for(var t=0;t<e.scriptItemList.length;t++){var r=e.scriptItemList[t]
this.checkVisit_(r.isScriptElement(),r,"global script item expected")}},checkPropertyName_:function(e){this.checkVisit_(e.type===he||e.type===Z,e,"property name expected")},visitPropertyNameAssignment:function(e){this.checkPropertyName_(e.name),this.checkVisit_(e.value.isAssignmentExpression(),e.value,"assignment expression expected")},visitPropertyNameShorthand:function(e){this.check_(e.name.type===g,e,"identifier token expected")},visitLiteralPropertyName:function(e){var t=e.literalToken.type
this.check_(e.literalToken.isKeyword()||t===g||t===A||t===V,e,"Unexpected token in literal property name")},visitTemplateLiteralExpression:function(e){e.operand&&this.checkVisit_(e.operand.isMemberExpression(),e.operand,"member or call expression expected")
for(var t=0;t<e.elements.length;t++){var r=e.elements[t]
t%2?this.checkType_(Ae,r,"Template literal substitution expected"):this.checkType_(Oe,r,"Template literal portion expected")}},visitReturnStatement:function(e){null!==e.expression&&this.checkVisit_(e.expression.isExpression(),e.expression,"expression expected")},visitSetAccessor:function(e){this.checkPropertyName_(e.name),this.checkType_(ce,e.body,"function body expected")},visitSpreadExpression:function(e){this.checkVisit_(e.expression.isAssignmentExpression(),e.expression,"assignment expression expected")},visitStateMachine:function(e){this.fail_(e,"State machines are never valid outside of the GeneratorTransformer pass.")},visitSwitchStatement:function(e){this.checkVisit_(e.expression.isExpression(),e.expression,"expression expected")
for(var t=0,r=0;r<e.caseClauses.length;r++){var n=e.caseClauses[r]
n.type===ee?(++t,this.checkVisit_(1>=t,n,"no more than one default clause allowed")):this.checkType_(K,n,"case or default clause expected")}},visitThrowStatement:function(e){null!==e.value&&this.checkVisit_(e.value.isExpression(),e.value,"expression expected")},visitTryStatement:function(e){this.checkType_(Q,e.body,"block expected"),null!==e.catchBlock&&this.checkType_(q,e.catchBlock,"catch block expected"),null!==e.finallyBlock&&this.checkType_(se,e.finallyBlock,"finally block expected"),null===e.catchBlock&&null===e.finallyBlock&&this.fail_(e,"either catch or finally must be present")},visitTypeArguments:function(e){for(var t=e.args,r=0;r<t.length;r++)this.checkVisit_(t[r].isType(),t[r],"Type arguments must be type expressions")},visitTypeName:function(e){this.checkVisit_(null===e.moduleName||e.moduleName.type===xe,e.moduleName,"moduleName must be null or a TypeName"),this.check_(e.name.type===g,e,"name must be an identifier")},visitTypeReference:function(e){this.checkType_(xe,e.typeName,"typeName must be a TypeName"),this.checkType_(Re,e.args,"args must be a TypeArguments")},visitTypeParameters:function(e){for(var t=e.parameters,r=0;r<t.length;r++)this.checkType_(we,t[r],"Type parameters must all be type parameters")},visitTypeParameter:function(e){this.check_(e.identifierToken.type===g,e,"Type parameter must be an identifier token"),e.extendsType&&this.checkVisit_(e.extendsType.isType(),e.extendsType,"extends type must be a type expression")},visitUnaryExpression:function(e){this.checkVisit_(e.operand.isAssignmentExpression(),e.operand,"assignment expression expected")},visitVariableDeclaration:function(e){this.checkVisit_(e.lvalue.isPattern()||e.lvalue.type===W,e.lvalue,"binding identifier expected, found: "+e.lvalue.type),null!==e.initializer&&this.checkVisit_(e.initializer.isAssignmentExpression(),e.initializer,"assignment expression expected")},visitWhileStatement:function(e){this.checkVisit_(e.condition.isExpression(),e.condition,"expression expected"),this.checkVisit_(e.body.isStatement(),e.body,"statement expected")},visitWithStatement:function(e){this.checkVisit_(e.expression.isExpression(),e.expression,"expression expected"),this.checkVisit_(e.body.isStatement(),e.body,"statement expected")},visitYieldExpression:function(e){null!==e.expression&&this.checkVisit_(e.expression.isExpression(),e.expression,"expression expected")}},{},t),ke.validate=function(e){var t=new ke
try{t.visitAny(e)}catch(n){if(!(n instanceof Ne))throw n
var i=null
null!==n.tree&&(i=n.tree.location),null===i&&(i=e.location)
var s=null!==i?""+i.start:"(unknown)"
throw Error("Parse tree validation failure '"+n.message+"' at "+s+":"+("\n\n"+r.write(e)+"\n"))}},{get ParseTreeValidator(){return ke}}}),System.registerModule("traceur@0.0.87/src/codegeneration/MultiTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/ParseTreeValidator.js").ParseTreeValidator,t=function(e,t){this.reporter_=e,this.validate_=t,this.treeTransformers_=[]}
return $traceurRuntime.createClass(t,{append:function(e){this.treeTransformers_.push(e)},transform:function(t){var r=this.reporter_,n=this.validate_
return this.treeTransformers_.every(function(i){return t=i(t),r.hadError()?!1:(n&&e.validate(t),!0)}),t}},{}),{get MultiTransformer(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/NumericLiteralTransformer.js",[],function(){"use strict"
function e(e){return e.type===o&&/^0[bBoO]/.test(e.value)}function t(e){return new a(o,e.processedValue+"",e.location)}var r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,n=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),i=n.LiteralExpression,s=n.LiteralPropertyName,a=System.get("traceur@0.0.87/src/syntax/LiteralToken.js").LiteralToken,o=System.get("traceur@0.0.87/src/syntax/TokenType.js").NUMBER,c=function(){$traceurRuntime.superConstructor(u).apply(this,arguments)},u=c
return $traceurRuntime.createClass(c,{transformLiteralExpression:function(r){var n=r.literalToken
return e(n)?new i(r.location,t(n)):r},transformLiteralPropertyName:function(r){var n=r.literalToken
return e(n)?new s(r.location,t(n)):r}},{},r),{get NumericLiteralTransformer(){return c}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ObjectLiteralTransformer.js",[],function(){"use strict"
function e(e){return"__proto__"===E(e)}var t=System.get("traceur@0.0.87/src/codegeneration/FindVisitor.js").FindVisitor,r=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),n=r.FunctionExpression,i=r.IdentifierExpression,s=r.LiteralExpression,a=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,o=System.get("traceur@0.0.87/src/syntax/TokenType.js").IDENTIFIER,c=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),u=c.COMPUTED_PROPERTY_NAME,l=c.LITERAL_PROPERTY_NAME,p=System.get("traceur@0.0.87/src/util/StringMap.js").StringMap,f=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),h=f.createAssignmentExpression,m=f.createCommaExpression,d=f.createDefineProperty,g=f.createEmptyParameterList,y=f.createFunctionExpression,_=f.createIdentifierExpression,S=f.createObjectCreate,v=f.createObjectLiteralExpression,b=f.createParenExpression,T=f.createPropertyNameAssignment,j=f.createStringLiteral,E=System.get("traceur@0.0.87/src/staticsemantics/PropName.js").propName,O=function(e){$traceurRuntime.superConstructor(A).call(this,!0),this.transformOptions_=e,this.protoExpression=null},A=O
$traceurRuntime.createClass(O,{visitPropertyNameAssignment:function(t){e(t.name)?this.protoExpression=t.value:this.visitAny(t.name)},visitPropertyMethodAssignment:function(e){this.visitAny(e.name)},visitGetAccessor:function(e){this.transformOptions_.properTailCalls?this.found=!0:this.visitAny(e.name)},visitSetAccessor:function(e){this.transformOptions_.properTailCalls?this.found=!0:this.visitAny(e.name)},visitComputedPropertyName:function(){this.transformOptions_.computedPropertyNames&&(this.found=!0)}},{},t)
var R=function(e,t,r){$traceurRuntime.superConstructor(x).call(this,e),this.transformOptions_=r.transformOptions,this.protoExpression=null,this.needsAdvancedTransform=!1,this.seenAccessors=null},x=R
return $traceurRuntime.createClass(R,{findSeenAccessor_:function(e){if(e.type===u)return null
var t=E(e)
return this.seenAccessors.get(t)},removeSeenAccessor_:function(e){if(e.type!==u){var t=E(e)
this.seenAccessors["delete"](t)}},addSeenAccessor_:function(e,t){if(e.type!==u){var r=E(e)
this.seenAccessors.set(r,t)}},createProperty_:function(e,t){var r
if(r=e.type===l?this.needsAdvancedTransform?this.getPropertyName_(e):e:e.expression,t.get||t.set){var n=this.findSeenAccessor_(e)
if(n)return n.get=t.get||n.get,n.set=t.set||n.set,this.removeSeenAccessor_(e),null
this.addSeenAccessor_(e,t)}return[r,t]},getPropertyName_:function(e){var t=e.literalToken
switch(t.type){case o:return j(t.value)
default:return t.isKeyword()?j(t.type):new s(t.location,t)}},transformClassDeclaration:function(e){return e},transformClassExpression:function(e){return e},transformObjectLiteralExpression:function(e){var t=this.needsAdvancedTransform,r=this.seenAccessors,n=this.transformObjectLiteralExpressionInner_(e)
return this.needsAdvancedTransform=t,this.seenAccessors=r,n},transformObjectLiteralExpressionInner_:function(e){var t=new O(this.transformOptions_)
if(t.visitAny(e),!t.found)return this.needsAdvancedTransform=!1,$traceurRuntime.superGet(this,x.prototype,"transformObjectLiteralExpression").call(this,e)
this.needsAdvancedTransform=!0,this.seenAccessors=new p
var r=this.transformList(e.propertyNameAndValues)
r=r.filter(function(e){return e})
var n,i=this.addTempVar(),s=_(i),a=r.map(function(e){var t=e[0],r=e[1]
return d(s,t,r)}),o=this.transformAny(t.protoExpression)
return n=o?S(o):v([]),a.unshift(h(s,n)),a.push(s),b(m(a))},transformPropertyNameAssignment:function(t){return this.needsAdvancedTransform?e(t.name)?null:this.createProperty_(t.name,{value:this.transformAny(t.value),configurable:!0,enumerable:!0,writable:!0}):$traceurRuntime.superGet(this,x.prototype,"transformPropertyNameAssignment").call(this,t)},transformGetAccessor:function(e){if(!this.needsAdvancedTransform)return $traceurRuntime.superGet(this,x.prototype,"transformGetAccessor").call(this,e)
var t=this.transformAny(e.body),r=y(g(),t)
return this.createProperty_(e.name,{get:r,configurable:!0,enumerable:!0})},transformSetAccessor:function(e){if(!this.needsAdvancedTransform)return $traceurRuntime.superGet(this,x.prototype,"transformSetAccessor").call(this,e)
var t=this.transformAny(e.body),r=this.transformAny(e.parameterList),n=y(r,t)
return this.createProperty_(e.name,{set:n,configurable:!0,enumerable:!0})},transformPropertyMethodAssignment:function(e){var t=new n(e.location,e.debugName,e.functionKind,this.transformAny(e.parameterList),e.typeAnnotation,[],this.transformAny(e.body))
if(!this.needsAdvancedTransform)return T(e.name,t)
this.transformAny(e.name)
return this.createProperty_(e.name,{value:t,configurable:!0,enumerable:!0,writable:!0})},transformPropertyNameShorthand:function(e){if(!this.needsAdvancedTransform)return $traceurRuntime.superGet(this,x.prototype,"transformPropertyNameShorthand").call(this,e)
this.transformAny(e.name)
return this.createProperty_(e.name,{value:new i(e.location,e.name.identifierToken),configurable:!0,enumerable:!1,writable:!0})}},{},a),{get ObjectLiteralTransformer(){return R}}}),System.registerModule("traceur@0.0.87/src/codegeneration/RewriteTailExpressionsTransformer.js",[],function(){"use strict"
function e(e,t,r){var i=e.args,a=i?i.args:[]
return a=a.map(function(e){return e.type===_?g(e.type):e}),new s(e.location,h("$traceurRuntime","continuation"),new n(i?i.location:null,[t,r,l(a)]))}var t=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,r=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),n=r.ArgumentList,i=r.BinaryExpression,s=r.CallExpression,a=r.ConditionalExpression,o=r.MemberExpression,c=r.MemberLookupExpression,u=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),l=u.createArrayLiteralExpression,p=u.createAssignmentExpression,f=u.createCommaExpression,h=u.createMemberExpression,m=u.createIdentifierExpression,d=u.createNullLiteral,g=u.createParenExpression,y=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),_=y.COMMA_EXPRESSION,S=y.MEMBER_EXPRESSION,v=y.MEMBER_LOOKUP_EXPRESSION,b=y.IDENTIFIER_EXPRESSION,T=y.PAREN_EXPRESSION,j=y.THIS_EXPRESSION,E=System.get("traceur@0.0.87/src/syntax/TokenType.js"),O=E.AND,A=E.OR,R=function(e){$traceurRuntime.superConstructor(x).call(this),this.bodyTransformer_=e},x=R
return $traceurRuntime.createClass(R,{transformBinaryExpression:function(e){var t=e.operator
if(t.type!==O&&t.type!==A)return e
var r=this.transformAny(e.right)
return r!==e.right?new i(e.location,e.left,t,r):e},transformCallExpression:function(t){for(var r=t.operand;r.type===T;)r=r.expression
switch(r.type){case b:return e(t,r,d())
case S:case v:return this.transformMemberExpressionCall_(t,r)}return t},transformMemberExpressionCall_:function(t,r){var n,i,s=r.operand
return s.type===b||s.type===j?n=s:(n=m(this.bodyTransformer_.addTempVar()),i=p(n,r.operand)),r=r.type===S?new o(r.location,n,r.memberName):new c(r.location,n,r.memberExpression),i?g(f([i,e(t,r,n)])):e(t,r,n)},transformCommaExpression:function(e){var t=e.expressions,r=t[t.length-1],n=this.transformAny(r)
return r!==n?(t=t.slice(0,-1),t.push(n),new CommaExpression(e.location,t)):e},transformConditionalExpression:function(e){var t=this.transformAny(e.left),r=this.transformAny(e.right)
return t!==e.left||r!==e.right?new a(e.location,e.condition,t,r):e},transformNewExpression:function(t){return e(t,h("$traceurRuntime","construct"),t.operand)},transformArrayLiteralExpression:function(e){return e},transformArrowFunctionExpression:function(e){return e},transformFunctionExpression:function(e){return e},transformIdentifierExpression:function(e){return e},transformLiteralExpression:function(e){return e},transformMemberExpression:function(e){return e},transformMemberLookupExpression:function(e){return e},transformPostfixExpression:function(e){return e},transformObjectLiteralExpression:function(e){return e},transformUnaryExpression:function(e){return e}},{transform:function(e,t){return new x(e).transformAny(t)}},t),{get RewriteTailExpressionsTransformer(){return R}}}),System.registerModule("traceur@0.0.87/src/codegeneration/RewriteTailCallsTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,t=System.get("traceur@0.0.87/src/codegeneration/RewriteTailExpressionsTransformer.js").RewriteTailExpressionsTransformer,r=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),n=r.ReturnStatement,i=r.TryStatement,s=function(e){$traceurRuntime.superConstructor(a).call(this),this.bodyTransformer_=e},a=s
return $traceurRuntime.createClass(s,{transformReturnStatement:function(e){var r=e.expression
return null!==r&&(r=t.transform(this.bodyTransformer_,r),r!==e.expression)?new n(e.location,r):e},transformTryStatement:function(e){var t
if(null!==e.finallyBlock){if(t=this.transformAny(e.finallyBlock),t!==e.finallyBlock)return new i(e.location,e.body,e.catchBlock,t)}else if(t=this.transformAny(e.catchBlock),t!==e.catchBlock)return new i(e.location,e.body,t,e.finallyBlock)
return e},transformForInStatement:function(e){return e},transformForOfStatement:function(e){return e},transformForOnStatement:function(e){return e},transformClassDeclaration:function(e){return e},transformClassExpression:function(e){return e},transformExpressionStatement:function(e){return e},transformFunctionDeclaration:function(e){return e},transformFunctionExpression:function(e){return e},transformGetAccessor:function(e){return e},transformSetAccessor:function(e){return e},transformPropertyMethodAssignment:function(e){return e},transformArrowFunctionExpression:function(e){return e},transformComprehensionFor:function(e){return e},transformVariableStatement:function(e){return e}},{transform:function(e,t){return new a(e).transformAny(t)}},e),{get RewriteTailCallsTransformer(){return s}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ProperTailCallTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["$traceurRuntime.initTailRecursiveFunction(",")"],{raw:{value:Object.freeze(["$traceurRuntime.initTailRecursiveFunction(",")"])}})),t=Object.freeze(Object.defineProperties(["var "," = ",";"],{raw:{value:Object.freeze(["var "," = ",";"])}})),r=Object.freeze(Object.defineProperties(["\n        $traceurRuntime.initTailRecursiveFunction(",")"],{raw:{value:Object.freeze(["\n        $traceurRuntime.initTailRecursiveFunction(",")"])}})),n=Object.freeze(Object.defineProperties(["\n        return $traceurRuntime.call(",", this, arguments);"],{raw:{value:Object.freeze(["\n        return $traceurRuntime.call(",", this, arguments);"])}})),i=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,s=System.get("traceur@0.0.87/src/codegeneration/RewriteTailCallsTransformer.js").RewriteTailCallsTransformer,a=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),o=a.createFunctionBody,c=a.createFunctionExpression,u=a.createIdentifierExpression,l=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),p=l.parseExpression,f=l.parseStatement,h=l.parseStatements,m=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),d=m.AnonBlock,g=m.FunctionDeclaration,y=m.FunctionExpression,_=function(e){$traceurRuntime.superConstructor(S).call(this,e),this.inBlock_=!1},S=_
return $traceurRuntime.createClass(_,{transformFunctionDeclaration:function(r){if(r=$traceurRuntime.superGet(this,S.prototype,"transformFunctionDeclaration").call(this,r),null!==r.functionKind)return r
var n=u(r.name.identifierToken),i=p(e,n),s=this.transformFunction_(r,g)
if(s===r)return r
var a=u(this.inBlock_?this.getTempIdentifier():this.addTempVar(i))
return this.inBlock_?new d(null,[s,f(t,a,i)]):s},transformFunctionExpression:function(e){if(e=$traceurRuntime.superGet(this,S.prototype,"transformFunctionExpression").call(this,e),e.functionKind)return e
var t=this.transformFunction_(e,y)
return t===e?e:p(r,t)},transformFunction_:function(e,t){var r=s.transform(this,e.body)
if(r===e.body)return e
var i=(u(this.getTempIdentifier()),c(e.parameterList,r)),a=o(h(n,i))
return new t(e.location,e.name,e.functionKind,e.parameterList,e.typeAnnotation,e.annotations,a)},transformBlock:function(e){var t=this.inBlock_
this.inBlock_=!0
var r=$traceurRuntime.superGet(this,S.prototype,"transformBlock").call(this,e)
return this.inBlock_=t,r}},{},i),{get ProperTailCallTransformer(){return _}}}),System.registerModule("traceur@0.0.87/src/codegeneration/PropertyNameShorthandTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),t=e.IdentifierExpression,r=e.LiteralPropertyName,n=e.PropertyNameAssignment,i=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,s=function(){$traceurRuntime.superConstructor(a).apply(this,arguments)},a=s
return $traceurRuntime.createClass(s,{transformPropertyNameShorthand:function(e){return new n(e.location,new r(e.location,e.name),new t(e.location,e.name))}},{},i),{get PropertyNameShorthandTransformer(){return s}}}),System.registerModule("traceur@0.0.87/src/outputgeneration/regexpuRewritePattern.js",[],function(){"use strict"
function e(e){return E?j?g.UNICODE_IGNORE_CASE[e]:g.UNICODE[e]:g.REGULAR[e]}function t(e,t){return _.call(e,t)}function r(e,t){for(var r in t)e[r]=t[r]}function n(e,t){var n=m(t,"")
switch(n.type){case"characterClass":case"group":case"value":break
default:n=i(n,t)}r(e,n)}function i(e,t){return{type:"group",behavior:"ignore",body:[e],raw:"(?:"+t+")"}}function s(e){return t(d,e)?d[e]:!1}function a(t){var r=f()
t.body.forEach(function(t){switch(t.type){case"value":if(r.add(t.codePoint),j&&E){var n=s(t.codePoint)
n&&r.add(n)}break
case"characterClassRange":var i=t.min.codePoint,a=t.max.codePoint
r.addRange(i,a),j&&E&&r.iuAddRange(i,a)
break
case"characterClassEscape":r.add(e(t.value))
break
default:throw Error("Unknown term type: "+t.type)}})
return t.negative&&(r=(E?S:v).clone().remove(r)),n(t,""+r),t}function o(t){switch(t.type){case"dot":n(t,""+(E?b:T))
break
case"characterClass":t=a(t)
break
case"characterClassEscape":n(t,""+e(t.value))
break
case"alternative":case"disjunction":case"group":case"quantifier":t.body=t.body.map(o)
break
case"value":var r=t.codePoint,i=f(r)
if(j&&E){var c=s(r)
c&&i.add(c)}n(t,""+i)
break
case"anchor":case"empty":case"group":case"reference":break
default:throw Error("Unknown term type: "+t.type)}return t}var c={},u={},l=u.exports={},p=function(e){return c[e]}
!function(e){var t="object"==typeof l&&l,r="object"==typeof u&&u&&u.exports==t&&u,n="object"==typeof global&&global;(n.global===n||n.window===n)&&(e=n)
var i={rangeOrder:"A range’s `stop` value must be greater than or equal to the `start` value.",codePointRange:"Invalid code point value. Code points range from U+000000 to U+10FFFF."},s=55296,a=56319,o=56320,c=57343,p=/\\x00([^0123456789]|$)/g,f={},h=f.hasOwnProperty,m=function(e,t){var r
for(r in t)h.call(t,r)&&(e[r]=t[r])
return e},d=function(e,t){for(var r=-1,n=e.length;++r<n;)t(e[r],r)},g=f.toString,y=function(e){return"[object Array]"==g.call(e)},_=function(e){return"number"==typeof e||"[object Number]"==g.call(e)},S="0000",v=function(e,t){var r=e+""
return r.length<t?(S+r).slice(-t):r},b=function(e){return(+e).toString(16).toUpperCase()},T=[].slice,j=function(e){for(var t,r=-1,n=e.length,i=n-1,s=[],a=!0,o=0;++r<n;)if(t=e[r],a)s.push(t),o=t,a=!1
else if(t==o+1){if(r!=i){o=t
continue}a=!0,s.push(t+1)}else s.push(o+1,t),o=t
return a||s.push(t+1),s},E=function(e,t){for(var r,n,i=0,s=e.length;s>i;){if(r=e[i],n=e[i+1],t>=r&&n>t)return t==r?n==r+1?(e.splice(i,2),e):(e[i]=t+1,e):t==n-1?(e[i+1]=t,e):(e.splice(i,2,r,t,t+1,n),e)
i+=2}return e},O=function(e,t,r){if(t>r)throw Error(i.rangeOrder)
for(var n,s,a=0;a<e.length;){if(n=e[a],s=e[a+1]-1,n>r)return e
if(n>=t&&r>=s)e.splice(a,2)
else{if(t>=n&&s>r)return t==n?(e[a]=r+1,e[a+1]=s+1,e):(e.splice(a,2,n,t,r+1,s+1),e)
if(t>=n&&s>=t)e[a+1]=t
else if(r>=n&&s>=r)return e[a]=r+1,e
a+=2}}return e},A=function(e,t){var r,n,s=0,a=null,o=e.length
if(0>t||t>1114111)throw RangeError(i.codePointRange)
for(;o>s;){if(r=e[s],n=e[s+1],t>=r&&n>t)return e
if(t==r-1)return e[s]=t,e
if(r>t)return e.splice(null!=a?a+2:0,0,t,t+1),e
if(t==n)return t+1==e[s+2]?(e.splice(s,4,r,e[s+3]),e):(e[s+1]=t+1,e)
a=s,s+=2}return e.push(t,t+1),e},R=function(e,t){for(var r,n,i=0,s=e.slice(),a=t.length;a>i;)r=t[i],n=t[i+1]-1,s=r==n?A(s,r):w(s,r,n),i+=2
return s},x=function(e,t){for(var r,n,i=0,s=e.slice(),a=t.length;a>i;)r=t[i],n=t[i+1]-1,s=r==n?E(s,r):O(s,r,n),i+=2
return s},w=function(e,t,r){if(t>r)throw Error(i.rangeOrder)
if(0>t||t>1114111||0>r||r>1114111)throw RangeError(i.codePointRange)
for(var n,s,a=0,o=!1,c=e.length;c>a;){if(n=e[a],s=e[a+1],o){if(n==r+1)return e.splice(a-1,2),e
if(n>r)return e
n>=t&&r>=n&&(s>t&&r>=s-1?(e.splice(a,2),a-=2):(e.splice(a-1,2),a-=2))}else{if(n==r+1)return e[a]=t,e
if(n>r)return e.splice(a,0,t,r+1),e
if(t>=n&&s>t&&s>=r+1)return e
t>=n&&s>t||s==t?(e[a+1]=r+1,o=!0):n>=t&&r+1>=s&&(e[a]=t,e[a+1]=r+1,o=!0)}a+=2}return o||e.push(t,r+1),e},C=function(e,t){var r=0,n=e.length,i=e[r],s=e[n-1]
if(n>=2&&(i>t||t>s))return!1
for(;n>r;){if(i=e[r],s=e[r+1],t>=i&&s>t)return!0
r+=2}return!1},P=function(e,t){for(var r,n=0,i=t.length,s=[];i>n;)r=t[n],C(e,r)&&s.push(r),++n
return j(s)},L=function(e){return!e.length},I=function(e){return 2==e.length&&e[0]+1==e[1]},N=function(e){for(var t,r,n=0,i=[],s=e.length;s>n;){for(t=e[n],r=e[n+1];r>t;)i.push(t),++t
n+=2}return i},M=Math.floor,k=function(e){return parseInt(M((e-65536)/1024)+s,10)},F=function(e){return parseInt((e-65536)%1024+o,10)},$=String.fromCharCode,B=function(e){var t
return t=9==e?"\\t":10==e?"\\n":12==e?"\\f":13==e?"\\r":92==e?"\\\\":36==e||e>=40&&43>=e||45==e||46==e||63==e||e>=91&&94>=e||e>=123&&125>=e?"\\"+$(e):e>=32&&126>=e?$(e):255>=e?"\\x"+v(b(e),2):"\\u"+v(b(e),4)},D=function(e){var t,r=e.length,n=e.charCodeAt(0)
return n>=s&&a>=n&&r>1?(t=e.charCodeAt(1),1024*(n-s)+t-o+65536):n},V=function(e){var t,r,n="",i=0,s=e.length
if(I(e))return B(e[0])
for(;s>i;)t=e[i],r=e[i+1]-1,n+=t==r?B(t):t+1==r?B(t)+B(r):B(t)+"-"+B(r),i+=2
return"["+n+"]"},G=function(e){for(var t,r,n=[],i=[],u=[],l=[],p=0,f=e.length;f>p;)t=e[p],r=e[p+1]-1,s>t?(s>r&&u.push(t,r+1),r>=s&&a>=r&&(u.push(t,s),n.push(s,r+1)),r>=o&&c>=r&&(u.push(t,s),n.push(s,a+1),i.push(o,r+1)),r>c&&(u.push(t,s),n.push(s,a+1),i.push(o,c+1),65535>=r?u.push(c+1,r+1):(u.push(c+1,65536),l.push(65536,r+1)))):t>=s&&a>=t?(r>=s&&a>=r&&n.push(t,r+1),r>=o&&c>=r&&(n.push(t,a+1),i.push(o,r+1)),r>c&&(n.push(t,a+1),i.push(o,c+1),65535>=r?u.push(c+1,r+1):(u.push(c+1,65536),l.push(65536,r+1)))):t>=o&&c>=t?(r>=o&&c>=r&&i.push(t,r+1),r>c&&(i.push(t,c+1),65535>=r?u.push(c+1,r+1):(u.push(c+1,65536),l.push(65536,r+1)))):t>c&&65535>=t?65535>=r?u.push(t,r+1):(u.push(t,65536),l.push(65536,r+1)):l.push(t,r+1),p+=2
return{loneHighSurrogates:n,loneLowSurrogates:i,bmp:u,astral:l}},U=function(e){for(var t,r,n,i,s,a,o=[],c=[],u=!1,l=-1,p=e.length;++l<p;)if(t=e[l],r=e[l+1]){for(n=t[0],i=t[1],s=r[0],a=r[1],c=i;s&&n[0]==s[0]&&n[1]==s[1];)c=I(a)?A(c,a[0]):w(c,a[0],a[1]-1),++l,t=e[l],n=t[0],i=t[1],r=e[l+1],s=r&&r[0],a=r&&r[1],u=!0
o.push([n,u?c:i]),u=!1}else o.push(t)
return z(o)},z=function(e){if(1==e.length)return e
for(var t=-1,r=-1;++t<e.length;){var n=e[t],i=n[1],s=i[0],a=i[1]
for(r=t;++r<e.length;){var o=e[r],c=o[1],u=c[0],l=c[1]
s==u&&a==l&&(I(o[0])?n[0]=A(n[0],o[0][0]):n[0]=w(n[0],o[0][0],o[0][1]-1),e.splice(r,1),--r)}}return e},H=function(e){if(!e.length)return[]
for(var t,r,n,i,s,a,u=0,l=0,p=0,f=[],h=e.length;h>u;){t=e[u],r=e[u+1]-1,n=k(t),i=F(t),s=k(r),a=F(r)
var m=i==o,d=a==c,g=!1
n==s||m&&d?(f.push([[n,s+1],[i,a+1]]),g=!0):f.push([[n,n+1],[i,c+1]]),!g&&s>n+1&&(d?(f.push([[n+1,s+1],[o,a+1]]),g=!0):f.push([[n+1,s],[o,c+1]])),g||f.push([[s,s+1],[o,a+1]]),l=n,p=s,u+=2}return U(f)},Y=function(e){var t=[]
return d(e,function(e){var r=e[0],n=e[1]
t.push(V(r)+V(n))}),t.join("|")},X=function(e){var t=[],r=G(e),n=r.loneHighSurrogates,i=r.loneLowSurrogates,s=r.bmp,a=r.astral,o=(!L(r.astral),!L(n)),c=!L(i),u=H(a)
return L(s)||t.push(V(s)),u.length&&t.push(Y(u)),o&&t.push(V(n)+"(?![\\uDC00-\\uDFFF])"),c&&t.push("(?:[^\\uD800-\\uDBFF]|^)"+V(i)),t.join("|")},W=function(e){return arguments.length>1&&(e=T.call(arguments)),this instanceof W?(this.data=[],e?this.add(e):this):(new W).add(e)}
W.version="1.1.0"
var Q=W.prototype
m(Q,{add:function(e){var t=this
return null==e?t:e instanceof W?(t.data=R(t.data,e.data),t):(arguments.length>1&&(e=T.call(arguments)),y(e)?(d(e,function(e){t.add(e)}),t):(t.data=A(t.data,_(e)?e:D(e)),t))},remove:function(e){var t=this
return null==e?t:e instanceof W?(t.data=x(t.data,e.data),t):(arguments.length>1&&(e=T.call(arguments)),y(e)?(d(e,function(e){t.remove(e)}),t):(t.data=E(t.data,_(e)?e:D(e)),t))},addRange:function(e,t){var r=this
return r.data=w(r.data,_(e)?e:D(e),_(t)?t:D(t)),r},removeRange:function(e,t){var r=this,n=_(e)?e:D(e),i=_(t)?t:D(t)
return r.data=O(r.data,n,i),r},intersection:function(e){var t=this,r=e instanceof W?N(e.data):e
return t.data=P(t.data,r),t},contains:function(e){return C(this.data,_(e)?e:D(e))},clone:function(){var e=new W
return e.data=this.data.slice(0),e},toString:function(){var e=X(this.data)
return e.replace(p,"\\0$1")},toRegExp:function(e){return RegExp(""+this,e||"")},valueOf:function(){return N(this.data)}}),Q.toArray=Q.valueOf,"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return W}):t&&!t.nodeType?r?r.exports=W:t.regenerate=W:e.regenerate=W}(this),c.regenerate=u.exports||window.regenerate,function(){function e(){var e,t,r=16384,n=[],i=-1,s=arguments.length
if(!s)return""
for(var a="";++i<s;){var o=+arguments[i]
if(!isFinite(o)||0>o||o>1114111||O(o)!=o)throw RangeError("Invalid code point: "+o)
65535>=o?n.push(o):(o-=65536,e=(o>>10)+55296,t=o%1024+56320,n.push(e,t)),(i+1==s||n.length>r)&&(a+=E.apply(null,n),n.length=0)}return a}function t(e,r){if(-1==r.indexOf("|")){if(e==r)return
throw Error("Invalid node type: "+e)}if(r=t.hasOwnProperty(r)?t[r]:t[r]=RegExp("^(?:"+r+")$"),!r.test(e))throw Error("Invalid node type: "+e)}function r(e){var t=e.type
if(r.hasOwnProperty(t)&&"function"==typeof r[t])return r[t](e)
throw Error("Invalid node type: "+t)}function n(e){t(e.type,"alternative")
var r=e.body,n=r?r.length:0
if(1==n)return y(r[0])
for(var i=-1,s="";++i<n;)s+=y(r[i])
return s}function i(e){switch(t(e.type,"anchor"),e.kind){case"start":return"^"
case"end":return"$"
case"boundary":return"\\b"
case"not-boundary":return"\\B"
default:throw Error("Invalid assertion")}}function s(e){return t(e.type,"anchor|characterClass|characterClassEscape|dot|group|reference|value"),r(e)}function a(e){t(e.type,"characterClass")
var r=e.body,n=r?r.length:0,i=-1,s="["
for(e.negative&&(s+="^");++i<n;)s+=p(r[i])
return s+="]"}function o(e){return t(e.type,"characterClassEscape"),"\\"+e.value}function c(e){t(e.type,"characterClassRange")
var r=e.min,n=e.max
if("characterClassRange"==r.type||"characterClassRange"==n.type)throw Error("Invalid character class range")
return p(r)+"-"+p(n)}function p(e){return t(e.type,"anchor|characterClassEscape|characterClassRange|dot|value"),r(e)}function f(e){t(e.type,"disjunction")
var n=e.body,i=n?n.length:0
if(0==i)throw Error("No body")
if(1==i)return r(n[0])
for(var s=-1,a="";++s<i;)0!=s&&(a+="|"),a+=r(n[s])
return a}function h(e){return t(e.type,"dot"),"."}function m(e){t(e.type,"group")
var n="("
switch(e.behavior){case"normal":break
case"ignore":n+="?:"
break
case"lookahead":n+="?="
break
case"negativeLookahead":n+="?!"
break
default:throw Error("Invalid behaviour: "+e.behaviour)}var i=e.body,s=i?i.length:0
if(1==s)n+=r(i[0])
else for(var a=-1;++a<s;)n+=r(i[a])
return n+=")"}function d(e){t(e.type,"quantifier")
var r="",n=e.min,i=e.max
switch(i){case void 0:case null:switch(n){case 0:r="*"
break
case 1:r="+"
break
default:r="{"+n+",}"}break
default:r=n==i?"{"+n+"}":0==n&&1==i?"?":"{"+n+","+i+"}"}return e.greedy||(r+="?"),s(e.body[0])+r}function g(e){return t(e.type,"reference"),"\\"+e.matchIndex}function y(e){return t(e.type,"anchor|characterClass|characterClassEscape|empty|group|quantifier|reference|value"),r(e)}function _(r){t(r.type,"value")
var n=r.kind,i=r.codePoint
switch(n){case"controlLetter":return"\\c"+e(i+64)
case"hexadecimalEscape":return"\\x"+("00"+i.toString(16).toUpperCase()).slice(-2)
case"identifier":return"\\"+e(i)
case"null":return"\\"+i
case"octal":return"\\"+i.toString(8)
case"singleEscape":switch(i){case 8:return"\\b"
case 9:return"\\t"
case 10:return"\\n"
case 11:return"\\v"
case 12:return"\\f"
case 13:return"\\r"
default:throw Error("Invalid codepoint: "+i)}case"symbol":return e(i)
case"unicodeEscape":return"\\u"+("0000"+i.toString(16).toUpperCase()).slice(-4)
case"unicodeCodePointEscape":return"\\u{"+i.toString(16).toUpperCase()+"}"
default:throw Error("Unsupported node kind: "+n)}}var S={"function":!0,object:!0},v=S[typeof window]&&window||this,b=S[typeof l]&&l,T=S[typeof u]&&u&&!u.nodeType&&u,j=b&&T&&"object"==typeof global&&global
!j||j.global!==j&&j.window!==j&&j.self!==j||(v=j)
var E=String.fromCharCode,O=Math.floor
r.alternative=n,r.anchor=i,r.characterClass=a,r.characterClassEscape=o,r.characterClassRange=c,r.disjunction=f,r.dot=h,r.group=m,r.quantifier=d,r.reference=g,r.value=_,"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return{generate:r}}):b&&T?b.generate=r:v.regjsgen={generate:r}}.call(this),c.regjsgen={generate:l.generate||window.regjsgen},function(){function e(e,t){function r(t){return t.raw=e.substring(t.range[0],t.range[1]),t}function n(e,t){return e.range[0]=t,r(e)}function i(e,t){return r({type:"anchor",kind:e,range:[X-t,X]})}function s(e,t,n,i){return r({type:"value",kind:e,codePoint:t,range:[n,i]})}function a(e,t,r,n){return n=n||0,s(e,t,X-(r.length+n),X)}function o(e){var t=e[0],r=t.charCodeAt(0)
if(Y){var n
if(1===t.length&&r>=55296&&56319>=r&&(n=b().charCodeAt(0),n>=56320&&57343>=n))return X++,s("symbol",1024*(r-55296)+n-56320+65536,X-2,X)}return s("symbol",r,X-1,X)}function c(e,t,n){return r({type:"disjunction",body:e,range:[t,n]})}function u(){return r({type:"dot",range:[X-1,X]})}function l(e){return r({type:"characterClassEscape",value:e,range:[X-2,X]})}function p(e){return r({type:"reference",matchIndex:parseInt(e,10),range:[X-1-e.length,X]})}function f(e,t,n,i){return r({type:"group",behavior:e,body:t,range:[n,i]})}function h(e,t,n,i){return null==i&&(n=X-1,i=X),r({type:"quantifier",min:e,max:t,greedy:!0,body:null,range:[n,i]})}function m(e,t,n){return r({type:"alternative",body:e,range:[t,n]})}function d(e,t,n,i){return r({type:"characterClass",body:e,negative:t,range:[n,i]})}function g(e,t,n,i){if(e.codePoint>t.codePoint)throw SyntaxError("invalid range in character class")
return r({type:"characterClassRange",min:e,max:t,range:[n,i]})}function y(e){return"alternative"===e.type?e.body:[e]}function _(t){t=t||1
var r=e.substring(X,X+t)
return X+=t||1,r}function S(e){if(!v(e))throw SyntaxError("character: "+e)}function v(t){return e.indexOf(t,X)===X?_(t.length):void 0}function b(){return e[X]}function T(t){return e.indexOf(t,X)===X}function j(t){return e[X+1]===t}function E(t){var r=e.substring(X),n=r.match(t)
return n&&(n.range=[],n.range[0]=X,_(n[0].length),n.range[1]=X),n}function O(){var e=[],t=X
for(e.push(A());v("|");)e.push(A())
return 1===e.length?e[0]:c(e,t,X)}function A(){for(var e,t=[],r=X;e=R();)t.push(e)
return 1===t.length?t[0]:m(t,r,X)}function R(){if(X>=e.length||T("|")||T(")"))return null
var t=w()
if(t)return t
var r=P()
if(!r)throw SyntaxError("Expected atom")
var i=C()||!1
return i?(i.body=y(r),n(i,r.range[0]),i):r}function x(e,t,r,n){var i=null,s=X
if(v(e))i=t
else{if(!v(r))return!1
i=n}var a=O()
if(!a)throw SyntaxError("Expected disjunction")
S(")")
var o=f(i,y(a),s,X)
return"normal"==i&&W++,o}function w(){return v("^")?i("start",1):v("$")?i("end",1):v("\\b")?i("boundary",2):v("\\B")?i("not-boundary",2):x("(?=","lookahead","(?!","negativeLookahead")}function C(){var e,t,r,n
if(v("*"))t=h(0)
else if(v("+"))t=h(1)
else if(v("?"))t=h(0,1)
else if(e=E(/^\{([0-9]+)\}/))r=parseInt(e[1],10),t=h(r,r,e.range[0],e.range[1])
else if(e=E(/^\{([0-9]+),\}/))r=parseInt(e[1],10),t=h(r,void 0,e.range[0],e.range[1])
else if(e=E(/^\{([0-9]+),([0-9]+)\}/)){if(r=parseInt(e[1],10),n=parseInt(e[2],10),r>n)throw SyntaxError("numbers out of order in {} quantifier")
t=h(r,n,e.range[0],e.range[1])}return t&&v("?")&&(t.greedy=!1,t.range[1]+=1),t}function P(){var e
if(e=E(/^[^^$\\.*+?(){[|]/))return o(e)
if(v("."))return u()
if(v("\\")){if(e=N(),!e)throw SyntaxError("atomEscape")
return e}return(e=B())?e:x("(?:","ignore","(","normal")}function L(e){if(Y){var t,n
if("unicodeEscape"==e.kind&&(t=e.codePoint)>=55296&&56319>=t&&T("\\")&&j("u")){var i=X
X++
var s=I()
"unicodeEscape"==s.kind&&(n=s.codePoint)>=56320&&57343>=n?(e.range[1]=s.range[1],e.codePoint=1024*(t-55296)+n-56320+65536,e.type="value",e.kind="unicodeCodePointEscape",r(e)):X=i}}return e}function I(){return N(!0)}function N(e){var t
if(t=M())return t
if(e){if(v("b"))return a("singleEscape",8,"\\b")
if(v("B"))throw SyntaxError("\\B not possible inside of CharacterClass")}return t=k()}function M(){var e,t
if(e=E(/^(?!0)\d+/)){t=e[0]
var r=parseInt(e[0],10)
return W>=r?p(e[0]):(_(-e[0].length),(e=E(/^[0-7]{1,3}/))?a("octal",parseInt(e[0],8),e[0],1):(e=o(E(/^[89]/)),n(e,e.range[0]-1)))}return(e=E(/^[0-7]{1,3}/))?(t=e[0],/^0{1,3}$/.test(t)?a("null",0,"0",t.length+1):a("octal",parseInt(t,8),t,1)):(e=E(/^[dDsSwW]/))?l(e[0]):!1}function k(){var e
if(e=E(/^[fnrtv]/)){var t=0
switch(e[0]){case"t":t=9
break
case"n":t=10
break
case"v":t=11
break
case"f":t=12
break
case"r":t=13}return a("singleEscape",t,"\\"+e[0])}return(e=E(/^c([a-zA-Z])/))?a("controlLetter",e[1].charCodeAt(0)%32,e[1],2):(e=E(/^x([0-9a-fA-F]{2})/))?a("hexadecimalEscape",parseInt(e[1],16),e[1],2):(e=E(/^u([0-9a-fA-F]{4})/))?L(a("unicodeEscape",parseInt(e[1],16),e[1],2)):Y&&(e=E(/^u\{([0-9a-fA-F]{1,})\}/))?a("unicodeCodePointEscape",parseInt(e[1],16),e[1],4):$()}function F(e){var t=RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԯԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠ-ࢲࣤ-ॣ०-९ॱ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧ᪰-᪽ᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶ᳸᳹ᴀ-᷵᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚝꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꧠ-ꧾꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︭︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")
return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||e>=48&&57>=e||92===e||e>=128&&t.test(String.fromCharCode(e))}function $(){var e,t="‌",r="‍"
return F(b())?v(t)?a("identifier",8204,t):v(r)?a("identifier",8205,r):null:(e=_(),a("identifier",e.charCodeAt(0),e,1))}function B(){var e,t=X
return(e=E(/^\[\^/))?(e=D(),S("]"),d(e,!0,t,X)):v("[")?(e=D(),S("]"),d(e,!1,t,X)):null}function D(){var e
if(T("]"))return[]
if(e=G(),!e)throw SyntaxError("nonEmptyClassRanges")
return e}function V(e){var t,r,n
if(T("-")&&!j("]")){if(S("-"),n=z(),!n)throw SyntaxError("classAtom")
r=X
var i=D()
if(!i)throw SyntaxError("classRanges")
return t=e.range[0],"empty"===i.type?[g(e,n,t,r)]:[g(e,n,t,r)].concat(i)}if(n=U(),!n)throw SyntaxError("nonEmptyClassRangesNoDash")
return[e].concat(n)}function G(){var e=z()
if(!e)throw SyntaxError("classAtom")
return T("]")?[e]:V(e)}function U(){var e=z()
if(!e)throw SyntaxError("classAtom")
return T("]")?e:V(e)}function z(){return v("-")?o("-"):H()}function H(){var e
if(e=E(/^[^\\\]-]/))return o(e[0])
if(v("\\")){if(e=I(),!e)throw SyntaxError("classEscape")
return L(e)}}var Y=-1!==(t||"").indexOf("u"),X=0,W=0
e+="",""===e&&(e="(?:)")
var Q=O()
if(Q.range[1]!==e.length)throw SyntaxError("Could not parse entire input - got stuck: "+e)
return Q}var t={parse:e}
void 0!==u&&u.exports?u.exports=t:window.regjsparser=t}(),c.regjsparser=u.exports||window.regjsparser,c["./data/iu-mappings.json"]={75:8490,83:383,107:8490,115:383,181:924,197:8491,383:83,452:453,453:452,455:456,456:455,458:459,459:458,497:498,498:497,837:8126,914:976,917:1013,920:1012,921:8126,922:1008,924:181,928:982,929:1009,931:962,934:981,937:8486,962:931,976:914,977:1012,981:934,982:928,1008:922,1009:929,1012:[920,977],1013:917,7776:7835,7835:7776,8126:[837,921],8486:937,8490:75,8491:197,66560:66600,66561:66601,66562:66602,66563:66603,66564:66604,66565:66605,66566:66606,66567:66607,66568:66608,66569:66609,66570:66610,66571:66611,66572:66612,66573:66613,66574:66614,66575:66615,66576:66616,66577:66617,66578:66618,66579:66619,66580:66620,66581:66621,66582:66622,66583:66623,66584:66624,66585:66625,66586:66626,66587:66627,66588:66628,66589:66629,66590:66630,66591:66631,66592:66632,66593:66633,66594:66634,66595:66635,66596:66636,66597:66637,66598:66638,66599:66639,66600:66560,66601:66561,66602:66562,66603:66563,66604:66564,66605:66565,66606:66566,66607:66567,66608:66568,66609:66569,66610:66570,66611:66571,66612:66572,66613:66573,66614:66574,66615:66575,66616:66576,66617:66577,66618:66578,66619:66579,66620:66580,66621:66581,66622:66582,66623:66583,66624:66584,66625:66585,66626:66586,66627:66587,66628:66588,66629:66589,66630:66590,66631:66591,66632:66592,66633:66593,66634:66594,66635:66595,66636:66596,66637:66597,66638:66598,66639:66599,71840:71872,71841:71873,71842:71874,71843:71875,71844:71876,71845:71877,71846:71878,71847:71879,71848:71880,71849:71881,71850:71882,71851:71883,71852:71884,71853:71885,71854:71886,71855:71887,71856:71888,71857:71889,71858:71890,71859:71891,71860:71892,71861:71893,71862:71894,71863:71895,71864:71896,71865:71897,71866:71898,71867:71899,71868:71900,71869:71901,71870:71902,71871:71903,71872:71840,71873:71841,71874:71842,71875:71843,71876:71844,71877:71845,71878:71846,71879:71847,71880:71848,71881:71849,71882:71850,71883:71851,71884:71852,71885:71853,71886:71854,71887:71855,71888:71856,71889:71857,71890:71858,71891:71859,71892:71860,71893:71861,71894:71862,71895:71863,71896:71864,71897:71865,71898:71866,71899:71867,71900:71868,71901:71869,71902:71870,71903:71871}
var f=p("regenerate")
l.REGULAR={d:f().addRange(48,57),D:f().addRange(0,47).addRange(58,65535),s:f(32,160,5760,6158,8239,8287,12288,65279).addRange(9,13).addRange(8192,8202).addRange(8232,8233),S:f().addRange(0,8).addRange(14,31).addRange(33,159).addRange(161,5759).addRange(5761,6157).addRange(6159,8191).addRange(8203,8231).addRange(8234,8238).addRange(8240,8286).addRange(8288,12287).addRange(12289,65278).addRange(65280,65535),w:f(95).addRange(48,57).addRange(65,90).addRange(97,122),W:f(96).addRange(0,47).addRange(58,64).addRange(91,94).addRange(123,65535)},l.UNICODE={d:f().addRange(48,57),D:f().addRange(0,47).addRange(58,1114111),s:f(32,160,5760,6158,8239,8287,12288,65279).addRange(9,13).addRange(8192,8202).addRange(8232,8233),S:f().addRange(0,8).addRange(14,31).addRange(33,159).addRange(161,5759).addRange(5761,6157).addRange(6159,8191).addRange(8203,8231).addRange(8234,8238).addRange(8240,8286).addRange(8288,12287).addRange(12289,65278).addRange(65280,1114111),w:f(95).addRange(48,57).addRange(65,90).addRange(97,122),W:f(96).addRange(0,47).addRange(58,64).addRange(91,94).addRange(123,1114111)},l.UNICODE_IGNORE_CASE={d:f().addRange(48,57),D:f().addRange(0,47).addRange(58,1114111),s:f(32,160,5760,6158,8239,8287,12288,65279).addRange(9,13).addRange(8192,8202).addRange(8232,8233),S:f().addRange(0,8).addRange(14,31).addRange(33,159).addRange(161,5759).addRange(5761,6157).addRange(6159,8191).addRange(8203,8231).addRange(8234,8238).addRange(8240,8286).addRange(8288,12287).addRange(12289,65278).addRange(65280,1114111),w:f(95,383,8490).addRange(48,57).addRange(65,90).addRange(97,122),W:f(75,83,96).addRange(0,47).addRange(58,64).addRange(91,94).addRange(123,1114111)},c["./data/character-class-escape-sets.js"]={REGULAR:l.REGULAR,UNICODE:l.UNICODE,UNICODE_IGNORE_CASE:l.UNICODE_IGNORE_CASE}
var h=p("regjsgen").generate,m=p("regjsparser").parse,f=p("regenerate"),d=p("./data/iu-mappings.json"),g=p("./data/character-class-escape-sets.js"),y={},_=y.hasOwnProperty,S=f().addRange(0,1114111),v=f().addRange(0,65535),b=S.clone().remove(10,13,8232,8233),T=b.clone().intersection(v)
f.prototype.iuAddRange=function(e,t){var r=this
do{var n=s(e)
n&&r.add(n)}while(++e<=t)
return r}
var j=!1,E=!1
u.exports=function(e,t){var n=m(e,t)
return j=t?t.indexOf("i")>-1:!1,E=t?t.indexOf("u")>-1:!1,r(n,o(n)),h(n)}
var O=u.exports
return{get regexpuRewritePattern(){return O}}}),System.registerModule("traceur@0.0.87/src/codegeneration/RegularExpressionTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").LiteralExpression,r=System.get("traceur@0.0.87/src/syntax/LiteralToken.js").LiteralToken,n=System.get("traceur@0.0.87/src/syntax/TokenType.js").REGULAR_EXPRESSION,i=System.get("traceur@0.0.87/src/outputgeneration/regexpuRewritePattern.js").regexpuRewritePattern,s=function(){$traceurRuntime.superConstructor(a).apply(this,arguments)},a=s
return $traceurRuntime.createClass(s,{transformLiteralExpression:function(e){var s=e.literalToken
if(s.type===n){var a=s.value,o=a.lastIndexOf("/"),c=a.slice(1,o),u=a.slice(o+1)
if(-1!==u.indexOf("u")){var l="/"+i(c,u)+"/"+u.replace("u","")
return new t(e.location,new r(n,l,s.location))}}return e}},{},e),{get RegularExpressionTransformer(){return s}}}),System.registerModule("traceur@0.0.87/src/codegeneration/RestParameterTransformer.js",[],function(){"use strict"
function e(e){var t=e.parameters
return t.length>0&&t[t.length-1].isRestParameter()}function t(e){var t=e.parameters
return t[t.length-1].parameter.identifier.identifierToken}var r=Object.freeze(Object.defineProperties(["\n            for (var "," = [], "," = ",";\n                 "," < arguments.length; ","++)\n              ","["," - ","] = arguments[","];"],{raw:{value:Object.freeze(["\n            for (var "," = [], "," = ",";\n                 "," < arguments.length; ","++)\n              ","["," - ","] = arguments[","];"])}})),n=Object.freeze(Object.defineProperties(["\n            for (var "," = [], "," = 0;\n                 "," < arguments.length; ","++)\n              ","[","] = arguments[","];"],{raw:{value:Object.freeze(["\n            for (var "," = [], "," = 0;\n                 "," < arguments.length; ","++)\n              ","[","] = arguments[","];"])}})),i=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").FormalParameterList,s=System.get("traceur@0.0.87/src/codegeneration/ParameterTransformer.js").ParameterTransformer,a=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js").createIdentifierToken,o=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement,c=function(){$traceurRuntime.superConstructor(u).apply(this,arguments)},u=c
return $traceurRuntime.createClass(c,{transformFormalParameterList:function(s){var c=$traceurRuntime.superGet(this,u.prototype,"transformFormalParameterList").call(this,s)
if(e(c)){var l,p=new i(c.location,c.parameters.slice(0,-1)),f=c.parameters.length-1,h=a(this.getTempIdentifier()),m=t(c)
return l=f?o(r,m,h,f,h,h,m,h,f,h):o(n,m,h,h,h,m,h,h),this.parameterStatements.push(l),p}return c},transformConstructorType:function(e){return e},transformFunctionType:function(e){return e}},{},s),{get RestParameterTransformer(){return c}}}),System.registerModule("traceur@0.0.87/src/codegeneration/SpreadTransformer.js",[],function(){"use strict"
function e(e){return e.some(function(e){return e&&e.type===l})}var t=Object.freeze(Object.defineProperties(["$traceurRuntime.spread(",")"],{raw:{value:Object.freeze(["$traceurRuntime.spread(",")"])}})),r=System.get("traceur@0.0.87/src/syntax/PredefinedName.js"),n=r.APPLY,i=r.BIND,s=r.FUNCTION,a=r.PROTOTYPE,o=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),c=o.MEMBER_EXPRESSION,u=o.MEMBER_LOOKUP_EXPRESSION,l=o.SPREAD_EXPRESSION,p=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,f=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),h=f.createArgumentList,m=f.createArrayLiteralExpression,d=f.createAssignmentExpression,g=f.createCallExpression,y=f.createEmptyArgumentList,_=f.createIdentifierExpression,S=f.createMemberExpression,v=f.createMemberLookupExpression,b=f.createNewExpression,T=f.createNullLiteral,j=f.createParenExpression,E=f.createVoid0,O=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,A=function(){$traceurRuntime.superConstructor(R).apply(this,arguments)},R=A
return $traceurRuntime.createClass(A,{createArrayFromElements_:function(e){for(var r,n=e.length,i=[],s=0;n>s;s++)e[s]&&e[s].type===l?(r&&(i.push(m(r)),r=null),i.push(this.transformAny(e[s].expression))):(r||(r=[]),r.push(this.transformAny(e[s])))
return r&&i.push(m(r)),O(t,h(i))},desugarCallSpread_:function(e){var t,r,i=this.transformAny(e.operand)
if(this.pushTempScope(),i.type===c){var s=_(this.addTempVar()),a=j(d(s,i.operand)),o=i.memberName
r=s,t=S(a,o)}else if(e.operand.type===u){var l=_(this.addTempVar()),p=j(d(l,i.operand)),f=this.transformAny(i.memberExpression)
r=l,t=v(p,f)}else r=E(),t=i
this.popTempScope()
var m=this.createArrayFromElements_(e.args.args)
return g(S(t,n),h([r,m]))},desugarNewSpread_:function(e){var t=$traceurRuntime.spread([T()],e.args.args)
return t=this.createArrayFromElements_(t),b(j(g(S(s,a,i,n),h([this.transformAny(e.operand),t]))),y())},transformArrayLiteralExpression:function(t){return e(t.elements)?this.createArrayFromElements_(t.elements):$traceurRuntime.superGet(this,R.prototype,"transformArrayLiteralExpression").call(this,t)},transformCallExpression:function(t){return e(t.args.args)?this.desugarCallSpread_(t):$traceurRuntime.superGet(this,R.prototype,"transformCallExpression").call(this,t)},transformNewExpression:function(t){return null!==t.args&&e(t.args.args)?this.desugarNewSpread_(t):$traceurRuntime.superGet(this,R.prototype,"transformNewExpression").call(this,t)}},{},p),{get SpreadTransformer(){return A}}}),System.registerModule("traceur@0.0.87/src/codegeneration/SymbolTransformer.js",[],function(){"use strict"
function e(e){switch(e.operator.type){case E:case O:case R:case x:return!0}return!1}function t(e){return e.type===v&&e.operator.type===C}function r(e){if(e.type!==S)return!1
var t=e.literalToken.processedValue
switch(t){case"symbol":case"object":return!1}return!0}var n=Object.freeze(Object.defineProperties(["$traceurRuntime.options.symbols = true"],{raw:{value:Object.freeze(["$traceurRuntime.options.symbols = true"])}})),i=Object.freeze(Object.defineProperties(["$traceurRuntime.toProperty(",") in ",""],{raw:{value:Object.freeze(["$traceurRuntime.toProperty(",") in ",""])}})),s=Object.freeze(Object.defineProperties(["","[$traceurRuntime.toProperty(",")]"],{raw:{value:Object.freeze(["","[$traceurRuntime.toProperty(",")]"])}})),a=Object.freeze(Object.defineProperties(["(typeof "," === 'undefined' ?\n          'undefined' : ",")"],{raw:{value:Object.freeze(["(typeof "," === 'undefined' ?\n          'undefined' : ",")"])}})),o=Object.freeze(Object.defineProperties(["$traceurRuntime.typeof(",")"],{raw:{value:Object.freeze(["$traceurRuntime.typeof(",")"])}})),c=Object.freeze(Object.defineProperties(["if (!$traceurRuntime.isSymbolString(",")) ",""],{raw:{value:Object.freeze(["if (!$traceurRuntime.isSymbolString(",")) ",""])}})),u=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),l=u.BinaryExpression,p=u.MemberLookupExpression,f=u.Module,h=u.ForInStatement,m=u.Script,d=u.UnaryExpression,g=System.get("traceur@0.0.87/src/codegeneration/ExplodeExpressionTransformer.js").ExplodeExpressionTransformer,y=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),_=y.IDENTIFIER_EXPRESSION,S=y.LITERAL_EXPRESSION,v=y.UNARY_EXPRESSION,b=y.VARIABLE_DECLARATION_LIST,T=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,j=System.get("traceur@0.0.87/src/syntax/TokenType.js"),E=j.EQUAL_EQUAL,O=j.EQUAL_EQUAL_EQUAL,A=j.IN,R=j.NOT_EQUAL,x=j.NOT_EQUAL_EQUAL,w=j.STRING,C=j.TYPEOF,P=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),L=P.parseExpression,I=P.parseStatement,N=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,M=function(){$traceurRuntime.superConstructor(k).apply(this,arguments)},k=M
$traceurRuntime.createClass(M,{transformArrowFunctionExpression:function(e){return e},transformClassExpression:function(e){return e},transformFunctionBody:function(e){return e}},{},g)
var F=I(n),$=function(){$traceurRuntime.superConstructor(B).apply(this,arguments)},B=$
return $traceurRuntime.createClass($,{transformModule:function(e){return new f(e.location,N(this.transformList(e.scriptItemList),F),this.moduleName_)},transformScript:function(e){return new m(e.location,N(this.transformList(e.scriptItemList),F),this.moduleName_)},transformTypeofOperand_:function(e){var t=this.transformAny(e.operand)
return new d(e.location,e.operator,t)},transformBinaryExpression:function(n){if(n.operator.type===A){var s=this.transformAny(n.left),a=this.transformAny(n.right)
return s.type===S?new l(n.location,s,n.operator,a):L(i,s,a)}if(e(n)){if(t(n.left)&&r(n.right)){var o=this.transformTypeofOperand_(n.left),c=n.right
return new l(n.location,o,n.operator,c)}if(t(n.right)&&r(n.left)){var u=n.left,p=this.transformTypeofOperand_(n.right)
return new l(n.location,u,n.operator,p)}}return $traceurRuntime.superGet(this,B.prototype,"transformBinaryExpression").call(this,n)},transformMemberLookupExpression:function(e){var t=this.transformAny(e.operand),r=this.transformAny(e.memberExpression)
return r.type===S&&r.literalToken.type!==w?new p(e.location,t,r):L(s,t,r)},transformUnaryExpression:function(e){if(e.operator.type!==C)return $traceurRuntime.superGet(this,B.prototype,"transformUnaryExpression").call(this,e)
var t=this.transformAny(e.operand),r=this.getRuntimeTypeof(t)
return t.type===_?L(a,t,r):r},getRuntimeTypeof:function(e){return L(o,e)},transformForInStatement:function(e){var t,r=this.transformAny(e.initializer),n=this.transformAny(e.collection),i=this.transformAny(e.body)
if(t=r.type===b?r.declarations[0].lvalue.identifierToken:r.identifierToken,!t)throw Error("Not implemented")
return i=I(c,t,i),new h(e.location,r,n,i)}},{},T),{get SymbolTransformer(){return $}}}),System.registerModule("traceur@0.0.87/src/codegeneration/TemplateLiteralTransformer.js",[],function(){"use strict"
function e(e){var t=e.elements,n=i(t),s=r(t)
return I(o,n,s)}function t(e,t){var r=e.length
r&&e[r-1].type===f||t.push(L(""))}function r(e){for(var r=[],n=0;n<e.length;n+=2){var i=e[n].value.value
i=i.replace(/\r\n?/g,"\n"),i=JSON.stringify(i),i=s(i)
var a=e[n].location,o=new m(a,new g(E,i,a))
r.push(o)}return t(e,r),R(r)}function n(e){var t=a(e.value.value),r=e.location
return new m(r,new g(E,t,r))}function i(e){for(var r=[],i=0;i<e.length;i+=2)r.push(n(e[i]))
return t(e,r),R(r)}function s(e){return e.replace(/\u2028|\u2029/g,function(e){switch(e){case"\u2028":return"\\u2028"
case"\u2029":return"\\u2029"
default:throw Error("Not reachable")}})}function a(e){for(var t,r,n=['"'],i=0,s=1;i<e.length;)switch(t=e[i++]){case"\\":switch(r=e[i++]){case"\n":case"\u2028":case"\u2029":break
case"\r":"\n"===e[i+1]&&i++
break
default:n[s++]=t,n[s++]=r}break
case'"':n[s++]='\\"'
break
case"\n":n[s++]="\\n"
break
case"\r":"\n"===e[i]&&i++,n[s++]="\\n"
break
case"	":n[s++]="\\t"
break
case"\f":n[s++]="\\f"
break
case"\b":n[s++]="\\b"
break
case"\u2028":n[s++]="\\u2028"
break
case"\u2029":n[s++]="\\u2029"
break
default:n[s++]=t}return n[s++]='"',n.join("")}var o=Object.freeze(Object.defineProperties(["Object.freeze(Object.defineProperties(",", {\n    raw: {\n      value: Object.freeze(",")\n    }\n  }))"],{raw:{value:Object.freeze(["Object.freeze(Object.defineProperties(",", {\n    raw: {\n      value: Object.freeze(",")\n    }\n  }))"])}})),c=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),u=c.BINARY_EXPRESSION,l=c.COMMA_EXPRESSION,p=c.CONDITIONAL_EXPRESSION,f=c.TEMPLATE_LITERAL_PORTION,h=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),m=h.LiteralExpression,d=h.ParenExpression,g=System.get("traceur@0.0.87/src/syntax/LiteralToken.js").LiteralToken,y=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,_=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,S=System.get("traceur@0.0.87/src/syntax/TokenType.js"),v=S.PERCENT,b=S.PLUS,T=S.SLASH,j=S.STAR,E=S.STRING,O=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),A=O.createArgumentList,R=O.createArrayLiteralExpression,x=O.createBinaryExpression,w=O.createCallExpression,C=O.createIdentifierExpression,P=O.createOperatorToken,L=O.createStringLiteral,I=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,N=function(){$traceurRuntime.superConstructor(M).apply(this,arguments)},M=N
return $traceurRuntime.createClass(N,{transformFunctionBody:function(e){return y.prototype.transformFunctionBody.call(this,e)},transformTemplateLiteralExpression:function(t){if(!t.operand)return this.createDefaultTemplateLiteral(t)
for(var r=this.transformAny(t.operand),n=t.elements,i=e(t),s=this.addTempVar(i),a=[C(s)],o=1;o<n.length;o+=2)a.push(this.transformAny(n[o]))
return w(r,A(a))},transformTemplateSubstitution:function(e){var t=this.transformAny(e.expression)
switch(t.type){case u:switch(t.operator.type){case j:case v:case T:return t}case l:case p:return new d(null,t)}return t},transformTemplateLiteralPortion:function(e){return n(e)},createDefaultTemplateLiteral:function(e){var t=e.elements.length
if(0===t){var r=e.location
return new m(r,new g(E,'""',r))}var n=""===e.elements[0].value.value?-1:0,i=this.transformAny(e.elements[0])
if(1===t)return i
for(var s=P(b),a=1;t>a;a++){var o=e.elements[a]
if(o.type===f){if(""===o.value.value)continue
0>n&&2===a&&(i=i.right)}var c=this.transformAny(e.elements[a])
i=x(i,s,c)}return new d(null,i)}},{},_),{get TemplateLiteralTransformer(){return N}}}),System.registerModule("traceur@0.0.87/src/codegeneration/TypeAssertionTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["assert.type(",", ",")"],{raw:{value:Object.freeze(["assert.type(",", ",")"])}})),t=Object.freeze(Object.defineProperties(["assert.argumentTypes(",")"],{raw:{value:Object.freeze(["assert.argumentTypes(",")"])}})),r=Object.freeze(Object.defineProperties(["return assert.returnType((","), ",")"],{raw:{value:Object.freeze(["return assert.returnType((","), ",")"])}})),n=Object.freeze(Object.defineProperties(["$traceurRuntime.type.any"],{raw:{value:Object.freeze(["$traceurRuntime.type.any"])}})),i=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),s=i.BINDING_ELEMENT,a=i.REST_PARAMETER,o=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),c=o.ImportDeclaration,u=o.ImportSpecifier,l=o.ImportSpecifierSet,p=o.Module,f=o.ModuleSpecifier,h=o.Script,m=o.VariableDeclaration,d=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),g=d.createArgumentList,y=d.createIdentifierExpression,_=d.createImportedBinding,S=d.createStringLiteralToken,v=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),b=v.parseExpression,T=v.parseStatement,j=System.get("traceur@0.0.87/src/codegeneration/ParameterTransformer.js").ParameterTransformer,E=function(e,t,r){$traceurRuntime.superConstructor(O).call(this,e),this.options_=r,this.returnTypeStack_=[],this.parametersStack_=[],this.assertionAdded_=!1},O=E
return $traceurRuntime.createClass(E,{transformScript:function(e){return this.prependAssertionImport_($traceurRuntime.superGet(this,O.prototype,"transformScript").call(this,e),h)},transformModule:function(e){return this.prependAssertionImport_($traceurRuntime.superGet(this,O.prototype,"transformModule").call(this,e),p)},transformVariableDeclaration:function(t){if(t.typeAnnotation&&t.initializer){var r=b(e,t.initializer,t.typeAnnotation)
t=new m(t.location,t.lvalue,t.typeAnnotation,r),this.assertionAdded_=!0}return $traceurRuntime.superGet(this,O.prototype,"transformVariableDeclaration").call(this,t)},transformFormalParameterList:function(e){this.parametersStack_.push({atLeastOneParameterTyped:!1,arguments:[]})
var r=$traceurRuntime.superGet(this,O.prototype,"transformFormalParameterList").call(this,e),n=this.parametersStack_.pop()
if(n.atLeastOneParameterTyped){var i=g(n.arguments),s=T(t,i)
this.parameterStatements.push(s),this.assertionAdded_=!0}return r},transformFormalParameter:function(e){var t=$traceurRuntime.superGet(this,O.prototype,"transformFormalParameter").call(this,e)
switch(t.parameter.type){case s:this.transformBindingElementParameter_(t.parameter,t.typeAnnotation)
break
case a:}return t},transformGetAccessor:function(e){return this.pushReturnType_(e.typeAnnotation),e=$traceurRuntime.superGet(this,O.prototype,"transformGetAccessor").call(this,e),this.popReturnType_(),e},transformPropertyMethodAssignment:function(e){return this.pushReturnType_(e.typeAnnotation),e=$traceurRuntime.superGet(this,O.prototype,"transformPropertyMethodAssignment").call(this,e),this.popReturnType_(),e},transformFunctionDeclaration:function(e){return this.pushReturnType_(e.typeAnnotation),e=$traceurRuntime.superGet(this,O.prototype,"transformFunctionDeclaration").call(this,e),this.popReturnType_(),e},transformFunctionExpression:function(e){return this.pushReturnType_(e.typeAnnotation),e=$traceurRuntime.superGet(this,O.prototype,"transformFunctionExpression").call(this,e),this.popReturnType_(),e},transformArrowFunctionExpression:function(e){return this.pushReturnType_(null),e=$traceurRuntime.superGet(this,O.prototype,"transformArrowFunctionExpression").call(this,e),this.popReturnType_(),e},transformReturnStatement:function(e){return e=$traceurRuntime.superGet(this,O.prototype,"transformReturnStatement").call(this,e),this.returnType_&&e.expression?(this.assertionAdded_=!0,T(r,e.expression,this.returnType_)):e},transformBindingElementParameter_:function(e,t){return e.binding.isPattern()?void 0:(t?this.paramTypes_.atLeastOneParameterTyped=!0:t=b(n),void this.paramTypes_.arguments.push(y(e.binding.identifierToken),t))},pushReturnType_:function(e){this.returnTypeStack_.push(this.transformAny(e))},prependAssertionImport_:function(e,t){if(!this.assertionAdded_||null===this.options_.typeAssertionModule)return e
var r=_("assert"),n=new c(null,new l(null,[new u(null,r,null)]),new f(null,S(this.options_.typeAssertionModule)))
return e=new t(e.location,$traceurRuntime.spread([n],e.scriptItemList),e.moduleName)},popReturnType_:function(){return this.returnTypeStack_.pop()},get returnType_(){return this.returnTypeStack_.length>0?this.returnTypeStack_[this.returnTypeStack_.length-1]:null},get paramTypes_(){return this.parametersStack_[this.parametersStack_.length-1]}},{},j),{get TypeAssertionTransformer(){return E}}}),System.registerModule("traceur@0.0.87/src/codegeneration/TypeToExpressionTransformer.js",[],function(){"use strict"
var e=Object.freeze(Object.defineProperties(["$traceurRuntime.type.",")"],{raw:{value:Object.freeze(["$traceurRuntime.type.",")"])}})),t=Object.freeze(Object.defineProperties(["$traceurRuntime.genericType(",")"],{raw:{value:Object.freeze(["$traceurRuntime.genericType(",")"])}})),r=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,n=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),i=n.ArgumentList,s=n.IdentifierExpression,a=n.MemberExpression,o=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseExpression,c=function(){$traceurRuntime.superConstructor(u).apply(this,arguments)},u=c
return $traceurRuntime.createClass(c,{transformTypeName:function(e){if(e.moduleName){var t=this.transformAny(e.moduleName)
return new a(e.location,t,e.name)}return new s(e.location,e.name)},transformPredefinedType:function(t){return o(e,t.typeToken)},transformTypeReference:function(e){var r=this.transformAny(e.typeName),n=this.transformAny(e.args),s=new i(e.location,$traceurRuntime.spread([r],n))
return o(t,s)},transformTypeArguments:function(e){return this.transformList(e.args)}},{},r),{get TypeToExpressionTransformer(){return c}}}),System.registerModule("traceur@0.0.87/src/codegeneration/TypeTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),t=e.AnonBlock,r=e.FormalParameter,n=e.FunctionDeclaration,i=e.FunctionExpression,s=e.GetAccessor,a=e.PropertyMethodAssignment,o=e.VariableDeclaration,c=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,u=function(){$traceurRuntime.superConstructor(l).apply(this,arguments)},l=u
return $traceurRuntime.createClass(u,{transformVariableDeclaration:function(e){return e.typeAnnotation&&(e=new o(e.location,e.lvalue,null,e.initializer)),$traceurRuntime.superGet(this,l.prototype,"transformVariableDeclaration").call(this,e)},transformFormalParameter:function(e){return null!==e.typeAnnotation?new r(e.location,e.parameter,null,[]):e},transformFunctionDeclaration:function(e){return e.typeAnnotation&&(e=new n(e.location,e.name,e.functionKind,e.parameterList,null,e.annotations,e.body)),$traceurRuntime.superGet(this,l.prototype,"transformFunctionDeclaration").call(this,e)},transformFunctionExpression:function(e){return e.typeAnnotation&&(e=new i(e.location,e.name,e.functionKind,e.parameterList,null,e.annotations,e.body)),$traceurRuntime.superGet(this,l.prototype,"transformFunctionExpression").call(this,e)},transformPropertyMethodAssignment:function(e){return e.typeAnnotation&&(e=new a(e.location,e.isStatic,e.functionKind,e.name,e.parameterList,null,e.annotations,e.body,e.debugName)),$traceurRuntime.superGet(this,l.prototype,"transformPropertyMethodAssignment").call(this,e)},transformGetAccessor:function(e){return e.typeAnnotation&&(e=new s(e.location,e.isStatic,e.name,null,e.annotations,e.body)),$traceurRuntime.superGet(this,l.prototype,"transformGetAccessor").call(this,e)},transformInterfaceDeclaration:function(){return new t(null,[])}},{},c),{get TypeTransformer(){return u}}}),System.registerModule("traceur@0.0.87/src/codegeneration/UnicodeEscapeSequenceTransformer.js",[],function(){"use strict"
function e(e){return"0000".slice(e.length)+e}function t(e){return e.type===s&&a.test(e.value)}function r(t){return t.value.replace(a,function(t,r,n){var i=r.length%2===1
if(i)return t
var s,a=parseInt(n,16)
if(65535>=a)s="\\u"+e(a.toString(16).toUpperCase())
else{var o=Math.floor((a-65536)/1024)+55296,c=(a-65536)%1024+56320
s="\\u"+o.toString(16).toUpperCase()+"\\u"+c.toString(16).toUpperCase()}return r+s})}var n=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,i=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").LiteralExpression,s=System.get("traceur@0.0.87/src/syntax/TokenType.js").STRING,a=/(\\*)\\u{([0-9a-fA-F]+)}/g,o=function(){$traceurRuntime.superConstructor(c).apply(this,arguments)},c=o
return $traceurRuntime.createClass(o,{transformLiteralExpression:function(e){var n=e.literalToken
return t(n)?new i(e.location,r(n)):e}},{},n),{get UnicodeEscapeSequenceTransformer(){return o}}}),System.registerModule("traceur@0.0.87/src/codegeneration/UniqueIdentifierGenerator.js",[],function(){"use strict"
var e=function(){this.identifierIndex=0}
return $traceurRuntime.createClass(e,{generateUniqueIdentifier:function(){return"$__"+this.identifierIndex++}},{}),{get UniqueIdentifierGenerator(){return e}}}),System.registerModule("traceur@0.0.87/src/codegeneration/FromOptionsTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/AmdTransformer.js").AmdTransformer,t=System.get("traceur@0.0.87/src/codegeneration/AnnotationsTransformer.js").AnnotationsTransformer,r=System.get("traceur@0.0.87/src/codegeneration/ArrayComprehensionTransformer.js").ArrayComprehensionTransformer,n=System.get("traceur@0.0.87/src/codegeneration/ArrowFunctionTransformer.js").ArrowFunctionTransformer,i=System.get("traceur@0.0.87/src/codegeneration/AsyncGeneratorTransformPass.js").AsyncGeneratorTransformPass,s=System.get("traceur@0.0.87/src/codegeneration/BlockBindingTransformer.js").BlockBindingTransformer,a=System.get("traceur@0.0.87/src/codegeneration/ClassTransformer.js").ClassTransformer,o=System.get("traceur@0.0.87/src/codegeneration/CommonJsModuleTransformer.js").CommonJsModuleTransformer,c=System.get("traceur@0.0.87/src/codegeneration/ClosureModuleTransformer.js").ClosureModuleTransformer,u=System.get("traceur@0.0.87/src/codegeneration/ExponentiationTransformer.js").ExponentiationTransformer,l=System.get("traceur@0.0.87/src/semantics/ConstChecker.js").validate,p=System.get("traceur@0.0.87/src/codegeneration/DefaultParametersTransformer.js").DefaultParametersTransformer,f=System.get("traceur@0.0.87/src/codegeneration/DestructuringTransformer.js").DestructuringTransformer,h=System.get("traceur@0.0.87/src/codegeneration/ForOfTransformer.js").ForOfTransformer,m=System.get("traceur@0.0.87/src/codegeneration/ForOnTransformer.js").ForOnTransformer,d=System.get("traceur@0.0.87/src/semantics/FreeVariableChecker.js").validate,g=System.get("traceur@0.0.87/src/codegeneration/GeneratorComprehensionTransformer.js").GeneratorComprehensionTransformer,y=System.get("traceur@0.0.87/src/codegeneration/GeneratorTransformPass.js").GeneratorTransformPass,_=System.get("traceur@0.0.87/src/codegeneration/InlineModuleTransformer.js").InlineModuleTransformer,S=System.get("traceur@0.0.87/src/codegeneration/MemberVariableTransformer.js").MemberVariableTransformer,v=System.get("traceur@0.0.87/src/codegeneration/ModuleTransformer.js").ModuleTransformer,b=System.get("traceur@0.0.87/src/codegeneration/MultiTransformer.js").MultiTransformer,T=System.get("traceur@0.0.87/src/codegeneration/NumericLiteralTransformer.js").NumericLiteralTransformer,j=System.get("traceur@0.0.87/src/codegeneration/ObjectLiteralTransformer.js").ObjectLiteralTransformer,E=System.get("traceur@0.0.87/src/codegeneration/PropertyNameShorthandTransformer.js").PropertyNameShorthandTransformer,O=System.get("traceur@0.0.87/src/codegeneration/InstantiateModuleTransformer.js").InstantiateModuleTransformer,A=System.get("traceur@0.0.87/src/codegeneration/ProperTailCallTransformer.js").ProperTailCallTransformer,R=System.get("traceur@0.0.87/src/codegeneration/RegularExpressionTransformer.js").RegularExpressionTransformer,x=System.get("traceur@0.0.87/src/codegeneration/RestParameterTransformer.js").RestParameterTransformer,w=System.get("traceur@0.0.87/src/codegeneration/SpreadTransformer.js").SpreadTransformer,C=System.get("traceur@0.0.87/src/codegeneration/SymbolTransformer.js").SymbolTransformer,P=System.get("traceur@0.0.87/src/codegeneration/TemplateLiteralTransformer.js").TemplateLiteralTransformer,L=System.get("traceur@0.0.87/src/codegeneration/TypeTransformer.js").TypeTransformer,I=System.get("traceur@0.0.87/src/codegeneration/TypeAssertionTransformer.js").TypeAssertionTransformer,N=System.get("traceur@0.0.87/src/codegeneration/TypeToExpressionTransformer.js").TypeToExpressionTransformer,M=System.get("traceur@0.0.87/src/codegeneration/UnicodeEscapeSequenceTransformer.js").UnicodeEscapeSequenceTransformer,k=System.get("traceur@0.0.87/src/codegeneration/UniqueIdentifierGenerator.js").UniqueIdentifierGenerator,F=function(b,F){var B
$traceurRuntime.superConstructor($).call(this,b,F.validate)
var D=F.transformOptions,V=new k,G=(B=this,function(e){B.append(function(t){return new e(V,b,F).transformAny(t)})})
if(D.blockBinding&&this.append(function(e){return l(e,b),e}),F.freeVariableChecker&&this.append(function(e){return d(e,b),e}),D.exponentiation&&G(u),D.numericLiterals&&G(T),D.unicodeExpressions&&G(R),D.templateLiterals&&G(P),D.types&&G(N),D.unicodeEscapeSequences&&G(M),D.annotations&&G(t),F.typeAssertions&&(D.memberVariables&&G(S),G(I)),D.propertyNameShorthand&&G(E),D.modules)switch(D.modules){case"commonjs":G(o)
break
case"amd":G(e)
break
case"closure":G(c)
break
case"inline":G(_)
break
case"instantiate":G(O)
break
case"register":G(v)
break
default:throw Error("Invalid modules transform option")}D.arrowFunctions&&G(n),D.classes&&G(a),(D.propertyMethods||D.computedPropertyNames||D.properTailCalls)&&G(j),D.generatorComprehension&&G(g),D.arrayComprehension&&G(r),D.forOf&&G(h),D.asyncGenerators&&G(i),D.forOn&&G(m),D.restParameters&&G(x),D.defaultParameters&&G(p),D.destructuring&&G(f),D.types&&G(L),D.spread&&G(w),D.blockBinding&&this.append(function(e){var t=new s(V,b,e)
return t.transformAny(e)}),(D.generators||D.asyncFunctions)&&G(y),D.symbols&&G(C),D.properTailCalls&&G(A)},$=F
return $traceurRuntime.createClass(F,{},{},b),{get FromOptionsTransformer(){return F}}}),System.registerModule("traceur@0.0.87/src/codegeneration/ES6ClassTransformer.js",[],function(){"use strict"
function e(e,t){return t.map(function(t){var r=t.name.literalToken.value
return x(s,e,r,t.initializer)})}var t=Object.freeze(Object.defineProperties(["let "," = ",""],{raw:{value:Object.freeze(["let "," = ",""])}})),r=Object.freeze(Object.defineProperties(["return ",""],{raw:{value:Object.freeze(["return ",""])}})),n=Object.freeze(Object.defineProperties(["super(...args)"],{raw:{value:Object.freeze(["super(...args)"])}})),i=Object.freeze(Object.defineProperties(["constructor() {}"],{raw:{value:Object.freeze(["constructor() {}"])}})),s=Object.freeze(Object.defineProperties(["Object.defineProperty(",", ",", {enumerable: true,\n        configurable: true, value: ",", writable: true})"],{raw:{value:Object.freeze(["Object.defineProperty(",", ",", {enumerable: true,\n        configurable: true, value: ",", writable: true})"])}})),a=System.get("traceur@0.0.87/src/syntax/PredefinedName.js").CONSTRUCTOR,o=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),c=o.AnonBlock,u=o.ClassExpression,l=o.ClassDeclaration,p=o.FormalParameterList,f=o.PropertyMethodAssignment,h=System.get("traceur@0.0.87/src/syntax/trees/ParseTreeType.js"),m=h.GET_ACCESSOR,d=h.PROPERTY_METHOD_ASSIGNMENT,g=h.PROPERTY_VARIABLE_DECLARATION,y=h.SET_ACCESSOR,_=System.get("traceur@0.0.87/src/codegeneration/TempVarTransformer.js").TempVarTransformer,S=System.get("traceur@0.0.87/src/codegeneration/ParseTreeFactory.js"),v=S.createBindingIdentifier,b=S.createFunctionBody,T=S.createIdentifierToken,j=S.createImmediatelyInvokedFunctionExpression,E=S.createLiteralPropertyName,O=S.createRestParameter,A=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),R=A.parsePropertyDefinition,x=A.parseStatement,w=System.get("traceur@0.0.87/src/staticsemantics/PropName.js").propName,C=System.get("traceur@0.0.87/src/codegeneration/PrependStatements.js").prependStatements,P=System.get("traceur@0.0.87/src/codegeneration/MemberVariableConstructorTransformer.js"),L=P.transformConstructor,I=P.getInstanceInitExpression,N=function(){$traceurRuntime.superConstructor(M).apply(this,arguments)},M=N
return $traceurRuntime.createClass(N,{transformClassElements_:function(e){var t,r=this,n=[],i=[],s=[],o=0
if(e.elements.forEach(function(e){var c
switch(c=e.isStatic?s:i,e.type){case m:case y:n.push(r.transformAny(e))
break
case d:e.isStatic||w(e)!==a?n.push(r.transformAny(e)):(t=e,o=n.length)
break
case g:e=r.transformAny(e),null!==e.initializer&&c.push(e)
break
default:throw Error("Unexpected class element: "+e.type)}}),i.length>0){var c=I(i)
t||(t=this.getDefaultConstructor_(e)),t=L(t,c,e.superClass)}return t&&n.splice(o,0,t),{elements:n,initStaticVars:s}},transformClassDeclaration:function(t){var r=this.transformClassElements_(t),n=r.elements,i=r.initStaticVars,s=this.transformAny(t.superClass),a=new l(t.location,t.name,s,n,t.annotations,t.typeParameters)
if(0===i.length)return a
var o=e(t.name,i)
return o=C(o,a),new c(null,o)},transformClassExpression:function(n){var i=this.transformClassElements_(n),s=i.elements,a=i.initStaticVars,o=this.transformAny(n.superClass),c=new u(n.location,n.name,o,s,n.annotations,n.typeParameters)
if(0===a.length)return c
this.pushTempScope()
var l=this.getTempIdentifier(),p=v(l),f=$traceurRuntime.spread([x(t,l,c)],e(p,a),[x(r,p)]),h=b(f)
return this.popTempScope(),j(h)},getDefaultConstructor_:function(e){if(e.superClass){var t=O(T("args")),r=new p(null,[t]),s=b([x(n)]),o=E(a)
return new f(e.location,!1,null,o,r,null,[],s)}return R(i)}},{},_),{get ES6ClassTransformer(){return N}}}),System.registerModule("traceur@0.0.87/src/codegeneration/PureES6Transformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/AnnotationsTransformer.js").AnnotationsTransformer,t=System.get("traceur@0.0.87/src/codegeneration/MemberVariableTransformer.js").MemberVariableTransformer,r=System.get("traceur@0.0.87/src/codegeneration/MultiTransformer.js").MultiTransformer,n=System.get("traceur@0.0.87/src/codegeneration/TypeAssertionTransformer.js").TypeAssertionTransformer,i=System.get("traceur@0.0.87/src/codegeneration/TypeTransformer.js").TypeTransformer,s=System.get("traceur@0.0.87/src/codegeneration/ES6ClassTransformer.js").ES6ClassTransformer,a=System.get("traceur@0.0.87/src/codegeneration/UniqueIdentifierGenerator.js").UniqueIdentifierGenerator,o=System.get("traceur@0.0.87/src/semantics/FreeVariableChecker.js").validate,c=function(r,c){var l
$traceurRuntime.superConstructor(u).call(this,r,c.validate)
var p=new a,f=(l=this,function(e){l.append(function(t){return new e(p,r,c).transformAny(t)})})
c.freeVariableChecker&&this.append(function(e){return o(e,r),e}),c.typeAssertions&&(c.memberVariables&&f(t),f(n)),c.memberVariables&&f(s),f(e),f(i)},u=c
return $traceurRuntime.createClass(c,{},{},r),{get PureES6Transformer(){return c}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/AttachModuleNameTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),r=t.Module,n=t.Script,i=function(e){$traceurRuntime.superConstructor(s).call(this),this.moduleName_=e},s=i
return $traceurRuntime.createClass(i,{transformModule:function(e){return new r(e.location,e.scriptItemList,this.moduleName_)},transformScript:function(e){return new n(e.location,e.scriptItemList,this.moduleName_)}},{},e),{get AttachModuleNameTransformer(){return i}}}),System.registerModule("traceur@0.0.87/src/Compiler.js",[],function(){"use strict"
function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=Object.create(null)
return e.forEach(function(e){Object.keys(e).forEach(function(t){r[t]=e[t]})
var t=e.modules
void 0!==t&&(r.modules=t)}),r}function t(e){if(!e)return null
var t=e.lastIndexOf("/")
return 0>t?null:e.substring(0,t+1)}var r=System.get("traceur@0.0.87/src/codegeneration/module/AttachModuleNameTransformer.js").AttachModuleNameTransformer,n=System.get("traceur@0.0.87/src/codegeneration/FromOptionsTransformer.js").FromOptionsTransformer,i=System.get("traceur@0.0.87/src/syntax/Parser.js").Parser,s=System.get("traceur@0.0.87/src/codegeneration/PureES6Transformer.js").PureES6Transformer,a=System.get("traceur@0.0.87/src/syntax/SourceFile.js").SourceFile,o=System.get("traceur@0.0.87/src/util/CollectingErrorReporter.js").CollectingErrorReporter,c=System.get("traceur@0.0.87/src/Options.js"),u=c.Options,l=c.versionLockedOptions,p=System.get("traceur@0.0.87/src/outputgeneration/ParseTreeMapWriter.js").ParseTreeMapWriter,f=System.get("traceur@0.0.87/src/outputgeneration/ParseTreeWriter.js").ParseTreeWriter,h=System.get("traceur@0.0.87/src/outputgeneration/SourceMapIntegration.js"),m=h.SourceMapConsumer,d=h.SourceMapGenerator,g=function(){var e=void 0!==arguments[0]?arguments[0]:{}
this.options_=new u(this.defaultOptions()),this.options_.setFromObject(e),this.sourceMapConfiguration_=null,this.sourceMapInfo_=null,this.sourceMapCache_=null},y=g
return $traceurRuntime.createClass(g,{compile:function(e){var t=void 0!==arguments[1]?arguments[1]:"<compileSource>",r=void 0!==arguments[2]?arguments[2]:"<compileOutput>",n=arguments[3]
t=this.normalize(t),r=this.normalize(r)
var i=this.parse(e,t)
i=this.transform(i,t)
var s=t!==r?t:void 0
return void 0===n&&(n=this.options_.sourceRoot),this.write(i,r,n,s)},throwIfErrors:function(e){if(e.hadError())throw e.errors},parse:function(e){var t=void 0!==arguments[1]?arguments[1]:"<compiler-parse-input>"
t=this.normalize(t),this.sourceMapCache_=null,this.sourceMapConfiguration_=null
var r=new o,n=new a(t,e),s=new i(n,r,this.options_),c=this.options_.script?s.parseScript():s.parseModule()
return this.throwIfErrors(r),c},transform:function(e){var t,i=arguments[1]
if(i){var a=new r(i)
e=a.transformAny(e)}var c=new o
t="es6"===this.options_.outputLanguage.toLowerCase()?new s(c,this.options_):new n(c,this.options_)
var u=t.transform(e)
return this.throwIfErrors(c),u},createSourceMapConfiguration_:function(e){var r=arguments[1],n=arguments[2]
return this.options_.sourceMaps?{sourceMapGenerator:new d({file:e,sourceRoot:r,skipValidation:!0}),basepath:t(e),inputSourceMap:this.options_.inputSourceMap,sourceURL:n,outputName:e}:void 0},getSourceMap:function(){if(this.sourceMapCache_)return this.sourceMapCache_
if(this.sourceMapConfiguration_){var e=""+this.sourceMapConfiguration_.sourceMapGenerator,t=this.sourceMapConfiguration_.inputSourceMap
if(t){var r=d.fromSourceMap(new m(e))
r.applySourceMap(new m(t)),e=r.toJSON()}return this.sourceMapCache_=e,e}},get sourceMapInfo(){if(!this.sourceMapInfo_&&this.sourceMapConfiguration_){var e=this.getSourceMap()
this.sourceMapInfo_={url:this.sourceMapConfiguration_.sourceURL,outputName:this.sourceMapConfiguration_.outputName,map:e}}return this.sourceMapInfo_},write:function(e){var r=arguments[1],n=arguments[2],i=arguments[3]
r=this.normalize(r),void 0===n&&(n=this.options_.sourceRoot),n=n===!0?t(r):n?this.normalize(n):void 0
var s
this.sourceMapCache_=null,this.sourceMapConfiguration_=this.createSourceMapConfiguration_(r,n,i),this.sourceMapConfiguration_?(this.sourceMapConfiguration_.lowResolution=this.options_.lowResolutionSourceMap,s=new p(this.sourceMapConfiguration_,this.options_)):s=new f(this.options_),s.visitAny(e)
var a=""+s,o=this.debuggerLink(i,r)
return o&&(a+=o),a},debuggerLink:function(e,t){if(this.sourceMapConfiguration_){if("memory"===this.options_.sourceMaps)return
var r=this.sourceMappingURL(e||t||"unnamed.js")
return"//# sourceMappingURL="+r+"\n"}return e?"//# sourceURL="+e+"\n":void 0},sourceName:function(e){return e},sourceMappingURL:function(e){return"inline"===this.options_.sourceMaps&&Reflect.global.btoa?"data:application/json;base64,"+btoa(unescape(encodeURIComponent(this.getSourceMap()))):(e=e||"unamed.js",e=e.split("/").pop(),e+".map")},sourceNameFromTree:function(e){return e.location.start.source.name},defaultOptions:function(){return l},normalize:function(e){return e&&e.replace(/\\/g,"/")}},{script:function(e){var t=void 0!==arguments[1]?arguments[1]:{}
return t=new u(t),t.script=!0,new y(t).compile(e)},module:function(e){var t=void 0!==arguments[1]?arguments[1]:{}
return t=new u(t),t.modules="register",new y(t).compile(e)},amdOptions:function(){var t=void 0!==arguments[0]?arguments[0]:{},r={modules:"amd",sourceMaps:!1,moduleName:!1}
return e(r,t)},closureOptions:function(){var t=void 0!==arguments[0]?arguments[0]:{},r={modules:"closure",sourceMaps:!1,moduleName:!0}
return e(r,t)},commonJSOptions:function(){var t=void 0!==arguments[0]?arguments[0]:{},r={modules:"commonjs",sourceMaps:!1,moduleName:!1}
return e(r,t)}}),{get Compiler(){return g}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/ValidationVisitor.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/module/ModuleVisitor.js").ModuleVisitor,t=function(){$traceurRuntime.superConstructor(r).apply(this,arguments)},r=t
return $traceurRuntime.createClass(t,{checkExport_:function(e,t){var r=this.validatingModuleDescription_
if(r&&!r.getExport(t)){var n=r.normalizedName
this.reportError(e,"'"+t+"' is not exported by '"+n+"'")}},checkImport_:function(e,t){var r=this.moduleSymbol.getImport(t)
r?this.reportError(e,"'"+t+"' was previously imported at "+r.location.start):this.moduleSymbol.addImport(t,e)},visitAndValidate_:function(e,t){var r=this.validatingModuleDescription_
this.validatingModuleDescription_=e,this.visitAny(t),this.validatingModuleDescription_=r},visitNamedExport:function(e){if(e.moduleSpecifier){var t=e.moduleSpecifier.token.processedValue,r=this.getExportsListForModuleSpecifier(t)
this.visitAndValidate_(r,e.specifierSet)}},visitExportSpecifier:function(e){this.checkExport_(e,e.lhs.value)},visitImportDeclaration:function(e){var t=e.moduleSpecifier.token.processedValue,r=this.getExportsListForModuleSpecifier(t)
this.visitAndValidate_(r,e.importClause)},visitImportSpecifier:function(e){var t=e.binding.getStringValue(),r=e.name?e.name.value:t
this.checkImport_(e,t),this.checkExport_(e,r)},visitImportedBinding:function(e){var t=e.binding.getStringValue()
this.checkImport_(e,t),this.checkExport_(e,"default")}},{},e),{get ValidationVisitor(){return t}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/ExportListBuilder.js",[],function(){"use strict"
function e(e,n,i){function s(t){for(var r=0;r<e.length;r++){var s=new t(i,n,e[r])
s.visitAny(e[r].tree)}}function a(t){for(var r=e.length-1;r>=0;r--){var s=new t(i,n,e[r])
s.visitAny(e[r].tree)}}a(t),s(r)}var t=System.get("traceur@0.0.87/src/codegeneration/module/ExportVisitor.js").ExportVisitor,r=System.get("traceur@0.0.87/src/codegeneration/module/ValidationVisitor.js").ValidationVisitor
return{get buildExportList(){return e}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/ModuleSpecifierVisitor.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/syntax/ParseTreeVisitor.js").ParseTreeVisitor,t=System.get("traceur@0.0.87/src/util/StringSet.js").StringSet,r=function(e){$traceurRuntime.superConstructor(n).call(this),this.options_=e,this.moduleSpecifiers_=new t},n=r
return $traceurRuntime.createClass(r,{get moduleSpecifiers(){return this.moduleSpecifiers_.valuesAsArray()},visitModuleSpecifier:function(e){this.moduleSpecifiers_.add(e.token.processedValue)},visitVariableDeclaration:function(e){return this.addTypeAssertionDependency_(e.typeAnnotation),$traceurRuntime.superGet(this,n.prototype,"visitVariableDeclaration").call(this,e)},visitFormalParameter:function(e){return this.addTypeAssertionDependency_(e.typeAnnotation),$traceurRuntime.superGet(this,n.prototype,"visitFormalParameter").call(this,e)},visitGetAccessor:function(e){return this.addTypeAssertionDependency_(e.typeAnnotation),$traceurRuntime.superGet(this,n.prototype,"visitGetAccessor").call(this,e)},visitPropertyMethodAssignment:function(e){return this.addTypeAssertionDependency_(e.typeAnnotation),$traceurRuntime.superGet(this,n.prototype,"visitPropertyMethodAssignment").call(this,e)},visitFunctionDeclaration:function(e){return this.addTypeAssertionDependency_(e.typeAnnotation),$traceurRuntime.superGet(this,n.prototype,"visitFunctionDeclaration").call(this,e)},visitFunctionExpression:function(e){return this.addTypeAssertionDependency_(e.typeAnnotation),$traceurRuntime.superGet(this,n.prototype,"visitFunctionExpression").call(this,e)},addTypeAssertionDependency_:function(e){null!==e&&null!==this.options_.typeAssertionModule&&this.moduleSpecifiers_.add(this.options_.typeAssertionModule)}},{},e),{get ModuleSpecifierVisitor(){return r}}}),System.registerModule("traceur@0.0.87/src/runtime/system-map.js",[],function(){"use strict"
function e(e,t){var r=t.split("/"),n=e.split("/")
if(r.length>n.length)return 0
for(var i=0;i<r.length;i++)if(n[i]!=r[i])return 0
return r.length}function t(t,r,n){var i,s,a=0,o=0
if(n){var c
Object.getOwnPropertyNames(t).some(function(u){var l=t[u]
if(l&&"object"==typeof l){if(e(n,u)<=o)return
Object.getOwnPropertyNames(l).forEach(function(t){e(r,t)>a&&(i=t,a=t.split("/").length,s=u,o=u.split("/").length)})}if(i){var p=r.split("/").splice(a).join("/")
return c=t[s][i]+(p?"/"+p:"")}})}if(c)return c
if(Object.getOwnPropertyNames(t).forEach(function(n){var s=t[n]
s&&"string"==typeof s&&e(r,n)>a&&(i=n,a=n.split("/").length)}),!i)return r
var u=r.split("/").splice(a).join("/")
return t[i]+(u?"/"+u:"")}var r={applyMap:t}
return{get systemjs(){return r}}}),System.registerModule("traceur@0.0.87/src/util/url.js",[],function(){"use strict"
var e=$traceurRuntime.canonicalizeUrl,t=$traceurRuntime.isAbsolute,r=$traceurRuntime.removeDotSegments,n=$traceurRuntime.resolveUrl
return{get canonicalizeUrl(){return e},get isAbsolute(){return t},get removeDotSegments(){return r},get resolveUrl(){return n}}}),System.registerModule("traceur@0.0.87/src/runtime/LoaderCompiler.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/module/ExportListBuilder.js").buildExportList,t=System.get("traceur@0.0.87/src/util/CollectingErrorReporter.js").CollectingErrorReporter,r=System.get("traceur@0.0.87/src/Compiler.js").Compiler,n=System.get("traceur@0.0.87/src/codegeneration/module/ModuleSpecifierVisitor.js").ModuleSpecifierVisitor,i=System.get("traceur@0.0.87/src/codegeneration/module/ModuleSymbol.js").ModuleSymbol,s=(System.get("traceur@0.0.87/src/syntax/Parser.js").Parser,System.get("traceur@0.0.87/src/syntax/SourceFile.js").SourceFile,System.get("traceur@0.0.87/src/runtime/system-map.js").systemjs,System.get("traceur@0.0.87/src/codegeneration/UniqueIdentifierGenerator.js").UniqueIdentifierGenerator),a=System.get("traceur@0.0.87/src/util/url.js"),o=(a.isAbsolute,a.resolveUrl,System.get("traceur@0.0.87/src/util/assert.js").assert),c=3,u=(new s,0),l=function(){}
return $traceurRuntime.createClass(l,{getModuleSpecifiers:function(e){this.parse(e),e.state=c
var t=new n(e.metadata.traceurOptions)
return t.visit(e.metadata.tree),t.moduleSpecifiers},parse:function(e){o(!e.metadata.tree)
var t=e.metadata,n=t.traceurOptions
"script"===e.type&&(n.script=!0),t.compiler=new r(n)
var i=e.metadata.sourceName=e.address||e.normalizedName||++u+""
t.tree=t.compiler.parse(e.source,i)},transform:function(e){var t=e.metadata
t.transformedTree=t.compiler.transform(t.tree,e.normalizedName)},write:function(e){var t=e.metadata,r=t.outputName||t.sourceName||"<loaderOutput>",n=(t.sourceRoot,t.sourceName||e.normalizedName||e.address)
t.transcoded=t.compiler.write(t.transformedTree,r,void 0,n)},evaluateCodeUnit:function(e){var t=("global",eval)(e.metadata.transcoded)
return e.metadata.transformedTree=null,t},analyzeDependencies:function(t,r){for(var n=[],s=0;s<t.length;s++){var a=t[s]
if(o(a.state>=c),a.state==c){var u=a.metadata.moduleSymbol=new i(a.metadata.tree,a.normalizedName)
n.push(u)}}this.checkForErrors(function(t){return e(n,r,t)})},checkForErrors:function(e){var r=new t,n=e(r)
if(r.hadError())throw r.toError()
return n}},{}),{get LoaderCompiler(){return l}}}),System.registerModule("traceur@0.0.87/src/runtime/InternalLoader.js",[],function(){"use strict"
function e(e){var t=[]
return e.forEach(function(e){t.push(e)}),t}var t=System.get("traceur@0.0.87/src/util/assert.js").assert,r=System.get("traceur@0.0.87/src/runtime/LoaderCompiler.js").LoaderCompiler,n=System.get("traceur@0.0.87/src/codegeneration/module/ModuleSymbol.js").ExportsList,i=System.get("traceur@0.0.87/src/runtime/polyfills/Map.js").Map,s=System.get("traceur@0.0.87/src/util/url.js"),a=s.isAbsolute,o=(s.resolveUrl,System.get("traceur@0.0.87/src/Options.js").Options),c=0,u=1,l=2,p=3,f=4,h=5,m=6,d=7,g=function(e,t){$traceurRuntime.superConstructor(y).call(this),this.message=e,this.tree=t,this.name="LoaderError"},y=g
$traceurRuntime.createClass(g,{},{},Error)
var _=function(e,t,r,n,i,s,a){var o=this
this.promise=new Promise(function(u,l){o.loaderCompiler=e,o.normalizedName=t,o.type=r,o.name_=i,o.referrerName_=s,o.address=a,o.state_=n||c,o.error=null,o.result=null,o.metadata_={},o.dependencies=[],o.resolve=u,o.reject=l})}
$traceurRuntime.createClass(_,{get state(){return this.state_},set state(e){if(e<this.state_)throw Error("Invalid state change")
this.state_=e},get metadata(){return this.metadata_},set metadata(e){t(e),this.metadata_=e},nameTrace:function(){var e=this.specifiedAs()
return a(this.name_)?e+"An absolute name.\n":this.referrerName_?e+this.importedBy()+this.normalizesTo():e+this.normalizesTo()},specifiedAs:function(){return"Specified as "+this.name_+".\n"},importedBy:function(){return"Imported by "+this.referrerName_+".\n"},normalizesTo:function(){return"Normalizes to "+this.normalizedName+"\n"}},{})
var S=function(e,t,r,n,i,s){$traceurRuntime.superConstructor(v).call(this,e,t,"module",m,r,n,i),this.result=s,this.resolve(this.result)},v=S
$traceurRuntime.createClass(S,{},{},_)
var b=function(e,t,r,n,i,s,a){$traceurRuntime.superConstructor(T).call(this,e,t,"module",h,r,n,i),this.deps=s,this.execute=a},T=b
$traceurRuntime.createClass(b,{getModuleSpecifiers:function(){return this.deps},evaluate:function(){var e=this,t=this.deps.map(function(t){return e.loader_.normalize(t)}),r=this.execute.apply(Reflect.global,t)
return System.set(this.normalizedName,r),r}},{},_)
var j=function(){$traceurRuntime.superConstructor(E).apply(this,arguments)},E=j
$traceurRuntime.createClass(j,{getModuleSpecifiers:function(){return this.loaderCompiler.getModuleSpecifiers(this)},evaluate:function(){return this.loaderCompiler.evaluateCodeUnit(this)}},{},_)
var O=function(e,t,r,n,i){$traceurRuntime.superConstructor(A).call(this,e,t,"module",c,r,n,i)},A=O
$traceurRuntime.createClass(O,{},{},j)
var R=function(e,t){var r=void 0!==arguments[2]?arguments[2]:"script",n=arguments[3],i=arguments[4],s=arguments[5]
$traceurRuntime.superConstructor(x).call(this,e,n,r,l,null,i,s),this.source=t},x=R
$traceurRuntime.createClass(R,{},{},j)
var w=function(e,r){t(r),this.loader_=e,this.loaderCompiler=r,this.cache=new i,this.urlToKey=Object.create(null),this.sync_=!1,this.sourceMapsByURL_=Object.create(null),this.sourceMapsByOutputName_=Object.create(null)}
$traceurRuntime.createClass(w,{defaultMetadata_:function(){var e=void 0!==arguments[0]?arguments[0]:{},t=e.traceurOptions
if(t&&!(t instanceof o)){var r=o.listUnknownOptions(t)
r.length&&console.warn("Unknown metadata.traceurOptions ignored: "+r.join(","))}return e.traceurOptions=t||new o,e},defaultModuleMetadata_:function(){var e=void 0!==arguments[0]?arguments[0]:{},e=this.defaultMetadata_(e)
return e.traceurOptions.script=!1,e},getSourceMap:function(e){return this.sourceMapsByURL_[e]||this.sourceMapsByOutputName_[e]},load:function(e){var t=void 0!==arguments[1]?arguments[1]:this.loader_.baseURL,r=arguments[2],n=void 0!==arguments[3]?arguments[3]:{}
n=this.defaultMetadata_(n)
var i=this.getOrCreateCodeUnit_(e,t,r,n)
return this.load_(i),i.promise.then(function(){return i})},load_:function(e){var t=this
if(e.state===d)return e
if(e.state===h)this.handleCodeUnitLoaded(e)
else{if(e.state!==c)return e
e.state=u,e.address=this.loader_.locate(e),this.loader_.fetch(e).then(function(t){return e.source=t,e}).then(function(e){return t.loader_.translate(e)}).then(function(r){return e.source=r,e.state=l,t.handleCodeUnitLoaded(e),e})["catch"](function(r){try{e.state=d,e.error=r,t.handleCodeUnitLoadError(e)}catch(n){console.error("Internal Error "+(n.stack||n))}})}return e},module:function(e,t,r,n){var i=new R(this.loaderCompiler,e,"module",null,t,r)
return i.metadata=this.defaultMetadata_(n),this.cache.set({},i),this.handleCodeUnitLoaded(i),i.promise},define:function(e,t,r,n){var i=new R(this.loaderCompiler,t,"module",e,null,r),s=this.getKey(e,"module")
return i.metadata=this.defaultMetadata_(n),this.cache.set(s,i),this.handleCodeUnitLoaded(i),i.promise},script:function(e,t,r,n,i){var s=System.normalize(t||"",r,n),a=new R(this.loaderCompiler,e,"script",s,r,n),o={}
return t&&(o=this.getKey(s,"script")),a.metadata=this.defaultMetadata_(i),this.cache.set(o,a),this.handleCodeUnitLoaded(a),a.promise},getKey:function(e,t){var r=t+":"+e
return r in this.urlToKey?this.urlToKey[r]:this.urlToKey[r]={}},getCodeUnit_:function(e,t){var r=this.getKey(e,t),n=this.cache.get(r)
return{key:r,codeUnit:n}},getOrCreateCodeUnit_:function(e,r,n,i){var s=System.normalize(e,r,n),a="module"
i&&i.traceurOptions&&i.traceurOptions.script&&(a="script")
var o=this.getCodeUnit_(s,a),c=o.key,u=o.codeUnit
if(!u){t(i&&i.traceurOptions)
var l=this.loader_.get(s)
if(l)u=new S(this.loaderCompiler,s,e,r,n,l),u.type="module"
else{var p=this.loader_.bundledModule(e)
p?u=new b(this.loaderCompiler,s,e,r,n,p.deps,p.execute):(u=new O(this.loaderCompiler,s,e,r,n),u.type=a)}u.metadata={traceurOptions:i.traceurOptions,outputName:i.outputName},this.cache.set(c,u)}return u},areAll:function(t){return e(this.cache).every(function(e){return e.state>=t})},getCodeUnitForModuleSpecifier:function(e,t){var r=this.loader_.normalize(e,t)
return this.getCodeUnit_(r,"module").codeUnit},getExportsListForModuleSpecifier:function(e,t){var r=this.getCodeUnitForModuleSpecifier(e,t),i=r.metadata.moduleSymbol
if(!i){if(!r.result)throw Error("InternalError: "+e+" is not a module, required by "+t)
i=new n(r.normalizedName),i.addExportsFromModule(r.result)}return i},handleCodeUnitLoaded:function(e){var t=this,r=e.normalizedName
try{var n=e.getModuleSpecifiers()
if(!n)return void this.abortAll("No module specifiers in "+r)
e.dependencies=n.sort().map(function(n){return t.getOrCreateCodeUnit_(n,r,null,t.defaultModuleMetadata_(e.metadata))})}catch(i){return void this.rejectOneAndAll(e,i)}if(e.dependencies.forEach(function(e){t.load_(e)}),this.areAll(p))try{"module"===e.type&&this.analyze(),this.transform(),this.evaluate()}catch(i){this.rejectOneAndAll(e,i)}},rejectOneAndAll:function(e,t){e.state.ERROR,e.error=t,e.reject(t),this.abortAll(t)},handleCodeUnitLoadError:function(e){var t=e.error?e.error+"\n":"Failed to load '"+e.address+"'.\n"
t+=e.nameTrace()+this.loader_.nameTrace(e),this.rejectOneAndAll(e,Error(t))},abortAll:function(e){this.cache.forEach(function(t){t.state!==d&&t.reject(e)})},analyze:function(){this.loaderCompiler.analyzeDependencies(e(this.cache),this)},transform:function(){this.transformDependencies_(e(this.cache))},transformDependencies_:function(e,t){for(var r=0;r<e.length;r++){var n=e[r]
if(!(n.state>=h)){if(n.state===f){var i=n.normalizedName,s=t
return void this.rejectOneAndAll(n,Error("Unsupported circular dependency between "+i+" and "+s))}n.state=f
try{this.transformCodeUnit_(n)}catch(a){return void this.rejectOneAndAll(n,a)}}}},transformCodeUnit_:function(e){if(this.transformDependencies_(e.dependencies,e.normalizedName),e.state!==d){this.loaderCompiler.transform(e),e.state=h,this.loaderCompiler.write(e)
var t=e.metadata.compiler.sourceMapInfo
t&&(this.sourceMapsByURL_[t.url]=t.map,this.sourceMapsByOutputName_[t.outputName]=t.map),this.loader_.instantiate(e)}},orderDependencies:function(){function e(n){t.has(n)||(t.set(n,!0),n.dependencies.forEach(e),r.push(n))}var t=new i,r=[]
return this.cache.forEach(e),r},evaluate:function(){for(var e=this.orderDependencies(),t=0;t<e.length;t++){var r=e[t]
if(!(r.state>=m)){var n=void 0
try{n=r.evaluate()}catch(i){return void this.rejectOneAndAll(r,i)}r.result=n,r.source=null}}for(var t=0;t<e.length;t++){var r=e[t]
r.state>=m||(r.state=m,r.resolve(r.result))}}},{})
var C={CodeUnit:_,EvalCodeUnit:R,LoadCodeUnit:O,LoaderCompiler:r}
return{get InternalLoader(){return w},get internals(){return C}}}),System.registerModule("traceur@0.0.87/src/runtime/Loader.js",[],function(){"use strict"
function e(){throw Error("Unimplemented Loader function, see extended class")}var t=System.get("traceur@0.0.87/src/runtime/InternalLoader.js").InternalLoader,r=function(e){this.internalLoader_=new t(this,e),this.loaderCompiler_=e}
return $traceurRuntime.createClass(r,{"import":function(e){var t=void 0!==arguments[1]?arguments[1]:{},r=t.referrerName,n=t.address,i=t.metadata,s=this
return this.internalLoader_.load(e,r,n,i).then(function(e){return s.get(e.normalizedName)})},module:function(e){var t=void 0!==arguments[1]?arguments[1]:{},r=t.referrerName,n=t.address,i=t.metadata
return this.internalLoader_.module(e,r,n,i)},define:function(e,t){var r=void 0!==arguments[2]?arguments[2]:{},n=r.address,i=r.metadata,i=r.metadata
return this.internalLoader_.define(e,t,n,i)},get:function(){e()},set:function(){e()},normalize:function(){e()},locate:function(){e()},fetch:function(){e()},translate:function(){e()},instantiate:function(){e()}},{}),{get Loader(){return r},get LoaderCompiler(){return LoaderCompiler}}}),System.registerModule("traceur@0.0.87/src/runtime/TraceurLoader.js",[],function(){"use strict"
var e="traceur@0.0.87/src/runtime/TraceurLoader.js",t=System.get("traceur@0.0.87/src/util/url.js"),r=t.isAbsolute,n=t.resolveUrl,i=System.get("traceur@0.0.87/src/runtime/Loader.js").Loader,s=System.get("traceur@0.0.87/src/runtime/LoaderCompiler.js").LoaderCompiler,a=System.get("traceur@0.0.87/src/runtime/system-map.js").systemjs,o=e.slice(0,e.indexOf("/")),c=0,u=function(e,t){var r=void 0!==arguments[2]?arguments[2]:new s
$traceurRuntime.superConstructor(l).call(this,r),this.fileLoader_=e,this.baseURL_=t&&t+"",this.moduleStore_=$traceurRuntime.ModuleStore},l=u
return $traceurRuntime.createClass(u,{get baseURL(){return this.baseURL_},set baseURL(e){this.baseURL_=e+""},get:function(e){return this.moduleStore_.get(e)},set:function(e,t){this.moduleStore_.set(e,t)},normalize:function(e,t,r){var n=this.moduleStore_.normalize(e,t,r)
return void 0!==a&&System.map?a.applyMap(System.map,n,t):n},locate:function(e){e.metadata.traceurOptions=e.metadata.traceurOptions||{}
var t=e.normalizedName,i=e.metadata.traceurOptions,s=e.metadata&&e.metadata.baseURL
s=s||this.baseURL
var a=i&&i.referrer
if(a){for(var o=Math.min(a.length,s.length),c=0,u=0;o>u;u++){var l=a[a.length-1-u]
if(l!==s[s.length-1-u])break
c++}if(c){var p=a.slice(0,-c),f=s.slice(0,-c)
0===t.indexOf(p)&&(t=t.replace(p,f))}}return r(t)||s&&(e.metadata.baseURL=s,t=n(s,t)),t},sourceName:function(e){var t=e.metadata.traceurOptions,r=e.address
if(t.sourceMaps){var n=this.baseURL
r?n&&0===r.indexOf(n)&&(r=r.substring(n.length)):r=this.baseURL+(c++ +"")}return r},nameTrace:function(e){var t=""
e.metadata.locateMap&&(t+=this.locateMapTrace(e))
var r=e.metadata.baseURL||this.baseURL
return t+=r?this.baseURLTrace(r):"No baseURL\n"},locateMapTrace:function(e){var t=e.metadata.locateMap
return"locate found '"+t.pattern+"' -> '"+t.replacement+"'\n"},baseURLTrace:function(e){return"locate resolved against base '"+e+"'\n"},fetch:function(e){var t=this
return new Promise(function(r,n){e?e.address&&"string"==typeof e.address?t.fileLoader_.load(e.address,r,n):n(new TypeError("fetch({address}) missing required string.")):n(new TypeError("fetch requires argument object"))})},translate:function(e){return e.source},instantiate:function(e){var t=e
t.name,t.metadata,t.address,t.source,t.sourceMap
return new Promise(function(e){e(void 0)})},bundledModule:function(e){return this.moduleStore_.bundleStore[e]},importAll:function(e){var t=void 0!==arguments[1]?arguments[1]:{},r=t.referrerName,n=t.address,i=t.metadata,s=this
return Promise.all(e.map(function(e){return s["import"](e,{referrerName:r,address:n,metadata:i})}))},loadAsScript:function(e){var t,r=void 0!==arguments[1]?arguments[1]:{},n=r.referrerName,i=r.address,s=void 0===(t=r.metadata)?{}:t
return s.traceurOptions=s.traceurOptions||{},s.traceurOptions.script=!0,this.internalLoader_.load(e,n,i,s).then(function(e){return e.result})},loadAsScriptAll:function(e){var t=void 0!==arguments[1]?arguments[1]:{},r=t.referrerName,n=t.address,i=t.metadata,s=this
return Promise.all(e.map(function(e){return s.loadAsScript(e,{referrerName:r,address:n,metadata:i})}))},script:function(e){var t=void 0!==arguments[1]?arguments[1]:{},r=t.name,n=t.referrerName,i=t.address,s=t.metadata
return this.internalLoader_.script(e,r,n,i,s)},semVerRegExp_:function(){return/^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$/},semverMap:function(e){var t=e.indexOf("/"),r=e.slice(0,t),n=r.indexOf("@")
if(-1!==n){var i=r.slice(n+1),s=this.semVerRegExp_().exec(i)
if(s){var a=s[1],o=s[2],c=r.slice(0,n),u=Object.create(null)
u[c]=r,u[c+"@"+a]=r,u[c+"@"+a+"."+o]=r}}return u},get version(){return o},getSourceMap:function(e){return this.internalLoader_.getSourceMap(e)},register:function(e,t,r){$traceurRuntime.ModuleStore.register(e,t,r)},registerModule:function(e,t,r){$traceurRuntime.ModuleStore.registerModule(e,t,r)}},{},i),{get TraceurLoader(){return u}}}),System.registerModule("traceur@0.0.87/src/runtime/webLoader.js",[],function(){"use strict"
var e={load:function(e,t,r){var n=new XMLHttpRequest
return n.onload=function(){if(200==n.status||0==n.status)t(n.responseText)
else{var i
i=404===n.status?"File not found '"+e+"'":n.status+n.statusText,r(i)}n=null},n.onerror=function(e){r(e)},n.open("GET",e,!0),n.send(),function(){n&&n.abort()}}}
return{get webLoader(){return e}}}),System.registerModule("traceur@0.0.87/src/WebPageTranscoder.js",[],function(){"use strict"
var e=(System.get("traceur@0.0.87/src/runtime/Loader.js").Loader,System.get("traceur@0.0.87/src/runtime/TraceurLoader.js").TraceurLoader),t=System.get("traceur@0.0.87/src/util/ErrorReporter.js").ErrorReporter,r=System.get("traceur@0.0.87/src/runtime/webLoader.js").webLoader,n='script[type="module"],script[type="text/traceur"]',i=function(e){this.url=e,this.numPending_=0,this.numberInlined_=0}
return $traceurRuntime.createClass(i,{asyncLoad_:function(e,t,n){var i=this
this.numPending_++,r.load(e,function(r){r?t(r):console.warn("Failed to load",e),--i.numPending_<=0&&n()},function(t){console.error("WebPageTranscoder FAILED to load "+e,t.stack||t)})},addFileFromScriptElement:function(e,t,r){var n,i=$traceurRuntime.options,s={address:t,referrerName:window.location.href,name:t,metadata:{traceurOptions:i}}
n="module"===e.type?this.loader.module(r,s):this.loader.script(r,s),n["catch"](function(e){console.error(e.stack||e)})},nextInlineScriptName_:function(){if(this.numberInlined_+=1,!this.inlineScriptNameBase_){var e=this.url.split(".")
e.pop(),this.inlineScriptNameBase_=e.join(".")}return this.inlineScriptNameBase_+"_"+this.numberInlined_+".js"},addFilesFromScriptElements:function(e,t){for(var r=0,n=e.length;n>r;r++){var i=e[r]
if(i.src){var s=i.src
this.asyncLoad_(s,this.addFileFromScriptElement.bind(this,i,s),t)}else{var a=this.nextInlineScriptName_(),o=i.textContent
this.addFileFromScriptElement(i,a,o)}}this.numPending_<=0&&t()},get reporter(){return this.reporter_||(this.reporter_=new t),this.reporter_},get loader(){return this.loader_||(this.loader_=new e(r,this.url)),this.loader_},putFile:function(e){var t=document.createElement("script")
t.setAttribute("data-traceur-src-url",e.name),t.textContent=e.generatedSource
var r=e.scriptElement.parentNode
r.insertBefore(t,e.scriptElement||null)},selectAndProcessScripts:function(e){var t=n,r=document.querySelectorAll(t)
return r.length?void this.addFilesFromScriptElements(r,function(){e()}):void e()},run:function(){var e=void 0!==arguments[0]?arguments[0]:function(){},t=this,r=document.readyState
"complete"===r||"loaded"===r?this.selectAndProcessScripts(e):document.addEventListener("DOMContentLoaded",function(){return t.selectAndProcessScripts(e)},!1)}},{}),{get scriptSelector(){return n},get WebPageTranscoder(){return i}}}),System.registerModule("traceur@0.0.87/src/HTMLImportTranscoder.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/util/StringMap.js").StringMap,t=System.get("traceur@0.0.87/src/WebPageTranscoder.js"),r=t.WebPageTranscoder,n=t.scriptSelector,i="link[rel=import][href]",s=function(){this.importsToProcess_=[]}
return $traceurRuntime.createClass(s,{findAllChildrenHTMLImports_:function(e){for(var t=0;t<e.length;t++){var r=e[t],n=r["import"].querySelectorAll(i)
n.length>0&&this.findAllChildrenHTMLImports_(n),this.importsToProcess_.push(r)}},filterHTMLImports_:function(t){this.findAllChildrenHTMLImports_(t)
for(var r=[],i=new e,s=0;s<this.importsToProcess_.length;s++){var a=this.importsToProcess_[s]
if(!i.has(a.href)){i.set(a.href,0)
var o=a["import"].querySelectorAll(n)
o.length>0&&r.push({href:a.href,scripts:o})}}return this.importsToProcess_=[],r},selectAndProcessHTMLImports:function(e,t){var n=this.filterHTMLImports_(e)
0===n.length&&t()
var i=n.length
n.forEach(function(e){var n=new r(e.href)
n.addFilesFromScriptElements(e.scripts,function(){i--,0===i&&t&&t()})})},run:function(){var e=void 0!==arguments[0]?arguments[0]:function(){},t=this,r=document.readyState
if("complete"===r||"loaded"===r){var n=document.querySelectorAll(i)
n.length>0&&this.selectAndProcessHTMLImports(n,e)}else document.addEventListener("HTMLImportsLoaded",function(r){var n=r.detail&&r.detail.allImports?r.detail.allImports:document.querySelectorAll(i)
n.length>0&&t.selectAndProcessHTMLImports(n,e)})}},{}),{get HTMLImportTranscoder(){return s}}}),System.registerModule("traceur@0.0.87/src/codegeneration/CloneTreeTransformer.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/codegeneration/ParseTreeTransformer.js").ParseTreeTransformer,t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js"),r=t.BindingIdentifier,n=t.BreakStatement,i=t.ContinueStatement,s=t.DebuggerStatement,a=t.EmptyStatement,o=t.ExportSpecifier,c=t.ExportStar,u=t.IdentifierExpression,l=t.LiteralExpression,p=t.ModuleSpecifier,f=t.PredefinedType,h=t.PropertyNameShorthand,m=t.TemplateLiteralPortion,d=t.SuperExpression,g=t.ThisExpression,y=function(){$traceurRuntime.superConstructor(_).apply(this,arguments)},_=y
return $traceurRuntime.createClass(y,{transformBindingIdentifier:function(e){return new r(e.location,e.identifierToken)},transformBreakStatement:function(e){return new n(e.location,e.name)},transformContinueStatement:function(e){return new i(e.location,e.name)},transformDebuggerStatement:function(e){return new s(e.location)},transformEmptyStatement:function(e){return new a(e.location)},transformExportSpecifier:function(e){return new o(e.location,e.lhs,e.rhs)},transformExportStar:function(e){return new c(e.location)},transformIdentifierExpression:function(e){return new u(e.location,e.identifierToken)},transformList:function(e){return e?0===e.length?[]:$traceurRuntime.superGet(this,_.prototype,"transformList").call(this,e):null},transformLiteralExpression:function(e){return new l(e.location,e.literalToken)},transformModuleSpecifier:function(e){return new p(e.location,e.token)},transformPredefinedType:function(e){return new f(e.location,e.typeToken)},transformPropertyNameShorthand:function(e){return new h(e.location,e.name)},transformTemplateLiteralPortion:function(e){return new m(e.location,e.value)},transformSuperExpression:function(e){return new d(e.location)},transformThisExpression:function(e){return new g(e.location)}},{},e),y.cloneTree=function(e){return(new y).transformAny(e)},{get CloneTreeTransformer(){return y}}}),System.registerModule("traceur@0.0.87/src/codegeneration/module/createModuleEvaluationStatement.js",[],function(){"use strict"
function e(e){return r(t,e)}var t=Object.freeze(Object.defineProperties(["System.get("," +'')"],{raw:{value:Object.freeze(["System.get("," +'')"])}})),r=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js").parseStatement
return{get createModuleEvaluationStatement(){return e}}}),System.registerModule("traceur@0.0.87/src/runtime/InlineLoaderCompiler.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/runtime/LoaderCompiler.js").LoaderCompiler,t=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").Script,r=function(e){$traceurRuntime.superConstructor(n).call(this),this.elements=e},n=r
return $traceurRuntime.createClass(r,{write:function(){},evaluateCodeUnit:function(e){var t,r=e.metadata.transformedTree;(t=this.elements).push.apply(t,$traceurRuntime.spread(r.scriptItemList))},toTree:function(){return new t(null,this.elements)}},{},e),{get InlineLoaderCompiler(){return r}}}),System.registerModule("traceur@0.0.87/src/runtime/System.js",[],function(){"use strict"
var e,t,r="traceur@0.0.87/src/runtime/System.js",n=(System.get("traceur@0.0.87/src/util/ErrorReporter.js").ErrorReporter,System.get("traceur@0.0.87/src/runtime/TraceurLoader.js").TraceurLoader),i=(System.get("traceur@0.0.87/src/runtime/LoaderCompiler.js").LoaderCompiler,System.get("traceur@0.0.87/src/runtime/webLoader.js").webLoader)
"undefined"!=typeof window&&window.location&&(e=window.location.href,t=i)
var s=new n(t,e)
return Reflect.global.System=s,s.map=s.semverMap(r),{get System(){return s}}}),System.registerModule("traceur@0.0.87/src/util/MutedErrorReporter.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/util/ErrorReporter.js").ErrorReporter,t=function(){$traceurRuntime.superConstructor(r).apply(this,arguments)},r=t
return $traceurRuntime.createClass(t,{reportMessageInternal:function(){}},{},e),{get MutedErrorReporter(){return t}}}),System.registerModule("traceur@0.0.87/src/traceur.js",[],function(){"use strict"
function e(e){return l.get(l.normalize("./"+e,t))}var t="traceur@0.0.87/src/traceur.js",r=System.get("traceur@0.0.87/src/runtime/System.js")
System.get("traceur@0.0.87/src/util/MutedErrorReporter.js")
var n=System.get("@traceur/src/runtime/ModuleStore.js"),i=System.get("traceur@0.0.87/src/WebPageTranscoder.js"),s=System.get("traceur@0.0.87/src/HTMLImportTranscoder.js"),a=System.get("traceur@0.0.87/src/Options.js"),o=a.addOptions,c=a.CommandOptions,u=a.Options,l=System.get("@traceur/src/runtime/ModuleStore.js").ModuleStore,p=System.get("traceur@0.0.87/src/Compiler.js"),f=System.get("traceur@0.0.87/src/util/ErrorReporter.js").ErrorReporter,h=System.get("traceur@0.0.87/src/util/CollectingErrorReporter.js").CollectingErrorReporter,m={addOptions:o,CommandOptions:c,CollectingErrorReporter:h,ErrorReporter:f,Options:u},d=System.get("traceur@0.0.87/src/syntax/Parser.js").Parser,g=System.get("traceur@0.0.87/src/syntax/Scanner.js").Scanner,y=System.get("traceur@0.0.87/src/syntax/trees/ParseTrees.js").Script,_=System.get("traceur@0.0.87/src/syntax/SourceFile.js").SourceFile,S={Parser:d,Scanner:g,SourceFile:_,trees:{Script:y}},v=System.get("traceur@0.0.87/src/outputgeneration/ParseTreeMapWriter.js").ParseTreeMapWriter,b=System.get("traceur@0.0.87/src/outputgeneration/ParseTreeWriter.js").ParseTreeWriter,T=System.get("traceur@0.0.87/src/outputgeneration/regexpuRewritePattern.js").regexpuRewritePattern,j=System.get("traceur@0.0.87/src/outputgeneration/SourceMapIntegration.js").SourceMapConsumer,E=System.get("traceur@0.0.87/src/outputgeneration/SourceMapIntegration.js").SourceMapGenerator,O=System.get("traceur@0.0.87/src/outputgeneration/TreeWriter.js").TreeWriter,A={ParseTreeMapWriter:v,ParseTreeWriter:b,regexpuRewritePattern:T,SourceMapConsumer:j,SourceMapGenerator:E,TreeWriter:O},R=System.get("traceur@0.0.87/src/codegeneration/module/AttachModuleNameTransformer.js").AttachModuleNameTransformer,x=System.get("traceur@0.0.87/src/codegeneration/CloneTreeTransformer.js").CloneTreeTransformer,w=System.get("traceur@0.0.87/src/codegeneration/FromOptionsTransformer.js").FromOptionsTransformer,C=System.get("traceur@0.0.87/src/codegeneration/PureES6Transformer.js").PureES6Transformer,P=System.get("traceur@0.0.87/src/codegeneration/module/createModuleEvaluationStatement.js").createModuleEvaluationStatement,L=System.get("traceur@0.0.87/src/codegeneration/PlaceholderParser.js"),I=L.parseExpression,N=L.parseModule,M=L.parseScript,k=L.parseStatement,F={CloneTreeTransformer:x,FromOptionsTransformer:w,PureES6Transformer:C,parseExpression:I,parseModule:N,parseScript:M,parseStatement:k,module:{AttachModuleNameTransformer:R,createModuleEvaluationStatement:P}},$=System.get("traceur@0.0.87/src/runtime/Loader.js").Loader,B=System.get("traceur@0.0.87/src/runtime/LoaderCompiler.js").LoaderCompiler,D=System.get("traceur@0.0.87/src/runtime/InlineLoaderCompiler.js").InlineLoaderCompiler,V=System.get("traceur@0.0.87/src/runtime/TraceurLoader.js").TraceurLoader,G={InlineLoaderCompiler:D,Loader:$,LoaderCompiler:B,TraceurLoader:V}
return{get System(){return r.System},get ModuleStore(){return n.ModuleStore},get WebPageTranscoder(){return i.WebPageTranscoder},get HTMLImportTranscoder(){return s.HTMLImportTranscoder},get get(){return e},get Compiler(){return p.Compiler},get util(){return m},get syntax(){return S},get outputgeneration(){return A},get codegeneration(){return F},get runtime(){return G}}}),System.registerModule("traceur@0.0.87/src/traceur-import.js",[],function(){"use strict"
var e=System.get("traceur@0.0.87/src/traceur.js")
return Reflect.global.traceur=e,$traceurRuntime.ModuleStore.set("traceur@",e),{}}),System.get("traceur@0.0.87/src/traceur-import.js")