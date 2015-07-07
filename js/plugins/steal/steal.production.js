!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.Promise=e():"undefined"!=typeof global?global.Promise=e():"undefined"!=typeof self&&(self.Promise=e())}(function(){var e
return function t(e,n,r){function o(i,s){if(!n[i]){if(!e[i]){var l="function"==typeof require&&require
if(!s&&l)return l(i,!0)
if(a)return a(i,!0)
throw Error("Cannot find module '"+i+"'")}var u=n[i]={exports:{}}
e[i][0].call(u.exports,function(t){var n=e[i][1][t]
return o(n?n:t)},u,u.exports,t,e,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i])
return o}({1:[function(e,t){var n=e("../lib/decorators/unhandledRejection"),r=n(e("../lib/Promise"))
t.exports="undefined"!=typeof global?global.Promise=r:"undefined"!=typeof self?self.Promise=r:r},{"../lib/Promise":2,"../lib/decorators/unhandledRejection":4}],2:[function(t,n){!function(e){"use strict"
e(function(e){var t=e("./makePromise"),n=e("./Scheduler"),r=e("./env").asap
return t({scheduler:new n(r)})})}("function"==typeof e&&e.amd?e:function(e){n.exports=e(t)})},{"./Scheduler":3,"./env":5,"./makePromise":7}],3:[function(t,n){!function(e){"use strict"
e(function(){function e(e){this._async=e,this._running=!1,this._queue=this,this._queueLen=0,this._afterQueue={},this._afterQueueLen=0
var t=this
this.drain=function(){t._drain()}}return e.prototype.enqueue=function(e){this._queue[this._queueLen++]=e,this.run()},e.prototype.afterQueue=function(e){this._afterQueue[this._afterQueueLen++]=e,this.run()},e.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))},e.prototype._drain=function(){for(var e=0;e<this._queueLen;++e)this._queue[e].run(),this._queue[e]=void 0
for(this._queueLen=0,this._running=!1,e=0;e<this._afterQueueLen;++e)this._afterQueue[e].run(),this._afterQueue[e]=void 0
this._afterQueueLen=0},e})}("function"==typeof e&&e.amd?e:function(e){n.exports=e()})},{}],4:[function(t,n){!function(e){"use strict"
e(function(e){function t(e){throw e}function n(){}var r=e("../env").setTimer,o=e("../format")
return function(e){function a(e){e.handled||(p.push(e),c("Potentially unhandled rejection ["+e.id+"] "+o.formatError(e.value)))}function i(e){var t=p.indexOf(e)
t>=0&&(p.splice(t,1),d("Handled previous rejection ["+e.id+"] "+o.formatObject(e.value)))}function s(e,t){f.push(e,t),null===h&&(h=r(l,0))}function l(){for(h=null;f.length>0;)f.shift()(f.shift())}var u,c=n,d=n
"undefined"!=typeof console&&(u=console,c=void 0!==u.error?function(e){u.error(e)}:function(e){u.log(e)},d=void 0!==u.info?function(e){u.info(e)}:function(e){u.log(e)}),e.onPotentiallyUnhandledRejection=function(e){s(a,e)},e.onPotentiallyUnhandledRejectionHandled=function(e){s(i,e)},e.onFatalRejection=function(e){s(t,e.value)}
var f=[],p=[],h=null
return e}})}("function"==typeof e&&e.amd?e:function(e){n.exports=e(t)})},{"../env":5,"../format":6}],5:[function(t,n){!function(e){"use strict"
e(function(e){function t(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.nextTick}function n(){return"function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver}function r(e){function t(){var e=n
n=void 0,e()}var n,r=document.createTextNode(""),o=new e(t)
o.observe(r,{characterData:!0})
var a=0
return function(e){n=e,r.data=a^=1}}var o,a="undefined"!=typeof setTimeout&&setTimeout,i=function(e,t){return setTimeout(e,t)},s=function(e){return clearTimeout(e)},l=function(e){return a(e,0)}
if(t())l=function(e){return process.nextTick(e)}
else if(o=n())l=r(o)
else if(!a){var u=e,c=u("vertx")
i=function(e,t){return c.setTimer(t,e)},s=c.cancelTimer,l=c.runOnLoop||c.runOnContext}return{setTimer:i,clearTimer:s,asap:l}})}("function"==typeof e&&e.amd?e:function(e){n.exports=e(t)})},{}],6:[function(t,n){!function(e){"use strict"
e(function(){function e(e){var n="object"==typeof e&&null!==e&&e.stack?e.stack:t(e)
return e instanceof Error?n:n+" (WARNING: non-Error used)"}function t(e){var t=e+""
return"[object Object]"===t&&"undefined"!=typeof JSON&&(t=n(e,t)),t}function n(e,t){try{return JSON.stringify(e)}catch(n){return t}}return{formatError:e,formatObject:t,tryStringify:n}})}("function"==typeof e&&e.amd?e:function(e){n.exports=e()})},{}],7:[function(t,n){!function(e){"use strict"
e(function(){return function(e){function t(e,t){this._handler=e===y?t:n(e)}function n(e){function t(e){o.resolve(e)}function n(e){o.reject(e)}function r(e){o.notify(e)}var o=new x
try{e(t,n,r)}catch(a){n(a)}return o}function r(e){return T(e)?e:new t(y,new w(v(e)))}function o(e){return new t(y,new w(new O(e)))}function a(){return Y}function i(){return new t(y,new x)}function s(e,t){var n=new x(e.receiver,e.join().context)
return new t(y,n)}function l(e){return c(H,null,e)}function u(e,t){return c(z,e,t)}function c(e,n,r){function o(t,o,i){i.resolved||d(r,a,t,e(n,o,t),i)}function a(e,t,n){c[e]=t,0===--u&&n.become(new S(c))}for(var i,s="function"==typeof n?o:a,l=new x,u=r.length>>>0,c=Array(u),f=0;f<r.length&&!l.resolved;++f)i=r[f],void 0!==i||f in r?d(r,s,f,i,l):--u
return 0===u&&l.become(new S(c)),new t(y,l)}function d(e,t,n,r,o){if(M(r)){var a=g(r),i=a.state()
0===i?a.fold(t,n,void 0,o):i>0?t(n,a.value,o):(o.become(a),f(e,n+1,a))}else t(n,r,o)}function f(e,t,n){for(var r=t;r<e.length;++r)p(v(e[r]),n)}function p(e,t){if(e!==t){var n=e.state()
0===n?e.visit(e,void 0,e._unreport):0>n&&e._unreport()}}function h(e){return"object"!=typeof e||null===e?o(new TypeError("non-iterable passed to race()")):0===e.length?a():1===e.length?r(e[0]):m(e)}function m(e){var n,r,o,a=new x
for(n=0;n<e.length;++n)if(r=e[n],void 0!==r||n in e){if(o=v(r),0!==o.state()){a.become(o),f(e,n+1,o)
break}o.visit(a,a.resolve,a.reject)}return new t(y,a)}function v(e){return T(e)?e._handler.join():M(e)?b(e):new S(e)}function g(e){return T(e)?e._handler.join():b(e)}function b(e){try{var t=e.then
return"function"==typeof t?new j(t,e):new S(e)}catch(n){return new O(n)}}function y(){}function _(){}function x(e,n){t.createContext(this,n),this.consumers=void 0,this.receiver=e,this.handler=void 0,this.resolved=!1}function w(e){this.handler=e}function j(e,t){x.call(this),B.enqueue(new k(e,t,this))}function S(e){t.createContext(this),this.value=e}function O(e){t.createContext(this),this.id=++K,this.value=e,this.handled=!1,this.reported=!1,this._report()}function L(e,t){this.rejection=e,this.context=t}function P(e){this.rejection=e}function R(){return new O(new TypeError("Promise cycle"))}function $(e,t){this.continuation=e,this.handler=t}function E(e,t){this.handler=t,this.value=e}function k(e,t,n){this._then=e,this.thenable=t,this.resolver=n}function I(e,t,n,r,o){try{e.call(t,n,r,o)}catch(a){r(a)}}function q(e,t,n,r){this.f=e,this.z=t,this.c=n,this.to=r,this.resolver=J,this.receiver=this}function T(e){return e instanceof t}function M(e){return("object"==typeof e||"function"==typeof e)&&null!==e}function F(e,n,r,o){return"function"!=typeof e?o.become(n):(t.enterContext(n),D(e,n.value,r,o),void t.exitContext())}function A(e,n,r,o,a){return"function"!=typeof e?a.become(r):(t.enterContext(r),C(e,n,r.value,o,a),void t.exitContext())}function U(e,n,r,o,a){return"function"!=typeof e?a.notify(n):(t.enterContext(r),N(e,n,o,a),void t.exitContext())}function z(e,t,n){try{return e(t,n)}catch(r){return o(r)}}function D(e,t,n,r){try{r.become(v(e.call(n,t)))}catch(o){r.become(new O(o))}}function C(e,t,n,r,o){try{e.call(r,t,n,o)}catch(a){o.become(new O(a))}}function N(e,t,n,r){try{r.notify(e.call(n,t))}catch(o){r.notify(o)}}function G(e,t){t.prototype=X(e.prototype),t.prototype.constructor=t}function H(e,t){return t}function Q(){}function W(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.emit?function(e,t){return"unhandledRejection"===e?process.emit(e,t.value,t):process.emit(e,t)}:"undefined"!=typeof self&&"function"==typeof CustomEvent?function(e,t,n){var r=!1
try{var o=new n("unhandledRejection")
r=o instanceof n}catch(a){}return r?function(e,r){var o=new n(e,{detail:{reason:r.value,key:r},bubbles:!1,cancelable:!0})
return!t.dispatchEvent(o)}:e}(Q,self,CustomEvent):Q}var B=e.scheduler,Z=W(),X=Object.create||function(e){function t(){}return t.prototype=e,new t}
t.resolve=r,t.reject=o,t.never=a,t._defer=i,t._handler=v,t.prototype.then=function(e,t,n){var r=this._handler,o=r.join().state()
if("function"!=typeof e&&o>0||"function"!=typeof t&&0>o)return new this.constructor(y,r)
var a=this._beget(),i=a._handler
return r.chain(i,r.receiver,e,t,n),a},t.prototype["catch"]=function(e){return this.then(void 0,e)},t.prototype._beget=function(){return s(this._handler,this.constructor)},t.all=l,t.race=h,t._traverse=u,t._visitRemaining=f,y.prototype.when=y.prototype.become=y.prototype.notify=y.prototype.fail=y.prototype._unreport=y.prototype._report=Q,y.prototype._state=0,y.prototype.state=function(){return this._state},y.prototype.join=function(){for(var e=this;void 0!==e.handler;)e=e.handler
return e},y.prototype.chain=function(e,t,n,r,o){this.when({resolver:e,receiver:t,fulfilled:n,rejected:r,progress:o})},y.prototype.visit=function(e,t,n,r){this.chain(J,e,t,n,r)},y.prototype.fold=function(e,t,n,r){this.when(new q(e,t,n,r))},G(y,_),_.prototype.become=function(e){e.fail()}
var J=new _
G(y,x),x.prototype._state=0,x.prototype.resolve=function(e){this.become(v(e))},x.prototype.reject=function(e){this.resolved||this.become(new O(e))},x.prototype.join=function(){if(!this.resolved)return this
for(var e=this;void 0!==e.handler;)if(e=e.handler,e===this)return this.handler=R()
return e},x.prototype.run=function(){var e=this.consumers,t=this.handler
this.handler=this.handler.join(),this.consumers=void 0
for(var n=0;n<e.length;++n)t.when(e[n])},x.prototype.become=function(e){this.resolved||(this.resolved=!0,this.handler=e,void 0!==this.consumers&&B.enqueue(this),void 0!==this.context&&e._report(this.context))},x.prototype.when=function(e){this.resolved?B.enqueue(new $(e,this.handler)):void 0===this.consumers?this.consumers=[e]:this.consumers.push(e)},x.prototype.notify=function(e){this.resolved||B.enqueue(new E(e,this))},x.prototype.fail=function(e){var t=void 0===e?this.context:e
this.resolved&&this.handler.join().fail(t)},x.prototype._report=function(e){this.resolved&&this.handler.join()._report(e)},x.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()},G(y,w),w.prototype.when=function(e){B.enqueue(new $(e,this))},w.prototype._report=function(e){this.join()._report(e)},w.prototype._unreport=function(){this.join()._unreport()},G(x,j),G(y,S),S.prototype._state=1,S.prototype.fold=function(e,t,n,r){A(e,t,this,n,r)},S.prototype.when=function(e){F(e.fulfilled,this,e.receiver,e.resolver)}
var K=0
G(y,O),O.prototype._state=-1,O.prototype.fold=function(e,t,n,r){r.become(this)},O.prototype.when=function(e){"function"==typeof e.rejected&&this._unreport(),F(e.rejected,this,e.receiver,e.resolver)},O.prototype._report=function(e){B.afterQueue(new L(this,e))},O.prototype._unreport=function(){this.handled||(this.handled=!0,B.afterQueue(new P(this)))},O.prototype.fail=function(e){this.reported=!0,Z("unhandledRejection",this),t.onFatalRejection(this,void 0===e?this.context:e)},L.prototype.run=function(){this.rejection.handled||this.rejection.reported||(this.rejection.reported=!0,Z("unhandledRejection",this.rejection)||t.onPotentiallyUnhandledRejection(this.rejection,this.context))},P.prototype.run=function(){this.rejection.reported&&(Z("rejectionHandled",this.rejection)||t.onPotentiallyUnhandledRejectionHandled(this.rejection))},t.createContext=t.enterContext=t.exitContext=t.onPotentiallyUnhandledRejection=t.onPotentiallyUnhandledRejectionHandled=t.onFatalRejection=Q
var V=new y,Y=new t(y,V)
return $.prototype.run=function(){this.handler.join().when(this.continuation)},E.prototype.run=function(){var e=this.handler.consumers
if(void 0!==e)for(var t,n=0;n<e.length;++n)t=e[n],U(t.progress,this.value,this.handler,t.receiver,t.resolver)},k.prototype.run=function(){function e(e){r.resolve(e)}function t(e){r.reject(e)}function n(e){r.notify(e)}var r=this.resolver
I(this._then,this.thenable,e,t,n)},q.prototype.fulfilled=function(e){this.f.call(this.c,this.z,e,this.to)},q.prototype.rejected=function(e){this.to.reject(e)},q.prototype.progress=function(e){this.to.notify(e)},t}})}("function"==typeof e&&e.amd?e:function(e){n.exports=e()})},{}]},{},[1])(1)}),function(__global){function __eval(__source,__global,__load){try{eval('(function() { var __moduleName = "'+(__load.name||"").replace('"','"')+'"; '+__source+" \n }).call(__global);")}catch(e){throw("SyntaxError"==e.name||"TypeError"==e.name)&&(e.message="Evaluating "+(__load.name||load.address)+"\n	"+e.message),e}}$__Object$getPrototypeOf=Object.getPrototypeOf||function(e){return e.__proto__}
var $__Object$defineProperty
!function(){try{Object.defineProperty({},"a",{})&&($__Object$defineProperty=Object.defineProperty)}catch(e){$__Object$defineProperty=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}(),$__Object$create=Object.create||function(e,t){function n(){}if(n.prototype=e,"object"==typeof t)for(prop in t)t.hasOwnProperty(prop)&&(n[prop]=t[prop])
return new n},function(){function e(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function t(e,t,n){return new L(i({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function n(t,n,o,a){return new L(function(e){e(t.loaderObj.normalize(n,o,a))}).then(function(n){var o
if(t.modules[n])return o=e(n),o.status="linked",o.module=t.modules[n],o
for(var a=0,i=t.loads.length;i>a;a++)if(o=t.loads[a],o.name==n)return console.assert("loading"==o.status||"loaded"==o.status,"loading or loaded"),o
return o=e(n),t.loads.push(o),r(t,o),o})}function r(e,t){o(e,t,L.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function o(e,t,n){a(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function a(e,t,r){r.then(function(r){return"loading"==t.status?L.resolve(e.loaderObj.translate({name:t.name,metadata:t.metadata,address:t.address,source:r})).then(function(n){return"loading"==t.status?(t.source=n,e.loaderObj.instantiate({name:t.name,metadata:t.metadata,address:t.address,source:n})):void 0}).then(function(n){if("loading"==t.status){if(void 0===n)return t.address=t.address||"<Anonymous Module "+ ++$+">",t.isDeclarative=!0,e.loaderObj.transpile(t).then(function(e){var n=__global.System,r=n.register
n.register=function(e,n,r){"string"!=typeof e&&(r=n,n=e),t.declare=r,t.depsList=n},__eval(e,__global,t),n.register=r})
if("object"!=typeof n)throw TypeError("Invalid instantiate return value")
t.depsList=n.deps||[],t.execute=n.execute,t.isDeclarative=!1}}).then(function(){if("loading"==t.status){t.dependencies=[]
for(var r=t.depsList,o=[],a=0,i=r.length;i>a;a++)(function(r,a){o.push(n(e,r,t.name,t.address).then(function(e){if(t.dependencies[a]={key:r,value:e.name},"linked"!=e.status)for(var n=t.linkSets.concat([]),o=0,i=n.length;i>o;o++)l(n[o],e)}))})(r[a],a)
return L.all(o)}}).then(function(){if("loading"==t.status){console.assert("loading"==t.status,"is loading"),t.status="loaded"
for(var e=t.linkSets.concat([]),n=0,r=e.length;r>n;n++)c(e[n],t)}}):void 0})["catch"](function(e){t.status="failed",t.exception=e
for(var n=t.linkSets.concat([]),r=0,o=n.length;o>r;r++)d(n[r],t,e)
console.assert(0==t.linkSets.length,"linkSets not removed")})}function i(t){return function(n){var i=t.loader,l=t.moduleName,u=t.step
if(i.modules[l])throw new TypeError('"'+l+'" already exists in the module table')
for(var c,d=0,f=i.loads.length;f>d;d++)if(i.loads[d].name==l)return c=i.loads[d],"translate"!=u||c.source||(c.address=t.moduleAddress,a(i,c,L.resolve(t.moduleSource))),c.linkSets[0].done.then(function(){n(c)})
var p=e(l)
p.metadata=t.moduleMetadata
var h=s(i,p)
i.loads.push(p),n(h.done),"locate"==u?r(i,p):"fetch"==u?o(i,p,L.resolve(t.moduleAddress)):(console.assert("translate"==u,"translate step"),p.address=t.moduleAddress,a(i,p,L.resolve(t.moduleSource)))}}function s(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0}
return n.done=new L(function(e,t){n.resolve=e,n.reject=t}),l(n,t),n}function l(e,t){console.assert("loading"==t.status||"loaded"==t.status,"loading or loaded on link set")
for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return
e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++
for(var o=e.loader,n=0,r=t.dependencies.length;r>n;n++){var a=t.dependencies[n].value
if(!o.modules[a])for(var i=0,s=o.loads.length;s>i;i++)if(o.loads[i].name==a){l(e,o.loads[i])
break}}}function u(e){var t=!1
try{m(e,function(n,r){d(e,n,r),t=!0})}catch(n){d(e,null,n),t=!0}return t}function c(e,t){if(console.assert("loaded"==t.status||"linked"==t.status,"loaded or linked"),e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad
if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),o=0,a=r.length;a>o;o++){var t=r[o]
t.module=t.isDeclarative?{name:t.name,module:E({}),evaluated:!0}:{module:E({})},t.status="linked",f(e.loader,t)}return e.resolve(n)}var i=u(e)
i||(console.assert(0==e.loads.length,"loads cleared"),e.resolve(n))}}function d(e,t,n){var r=e.loader
e.loads[0].name!=t.name&&(n=w(n,'Error loading "'+t.name+'" from "'+e.loads[0].name+'" at '+(e.loads[0].address||"<unknown>")+"\n")),n=w(n,'Error loading "'+t.name+'" at '+(t.address||"<unknown>")+"\n")
for(var o=e.loads.concat([]),a=0,i=o.length;i>a;a++){var t=o[a]
r.loaderObj.failed=r.loaderObj.failed||[],-1==P.call(r.loaderObj.failed,t)&&r.loaderObj.failed.push(t)
var s=P.call(t.linkSets,e)
if(console.assert(-1!=s,"link not present"),t.linkSets.splice(s,1),0==t.linkSets.length){var l=P.call(e.loader.loads,t);-1!=l&&e.loader.loads.splice(l,1)}}e.reject(n)}function f(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={})
var n={}
t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(console.assert(!e.modules[t.name],"load not in module table"),e.modules[t.name]=t.module)
var r=P.call(e.loads,t);-1!=r&&e.loads.splice(r,1)
for(var o=0,a=t.linkSets.length;a>o;o++)r=P.call(t.linkSets[o].loads,t),-1!=r&&t.linkSets[o].loads.splice(r,1)
t.linkSets.splice(0,t.linkSets.length)}function p(e,t,n){if(n[e.groupIndex]=n[e.groupIndex]||[],-1==P.call(n[e.groupIndex],e)){n[e.groupIndex].push(e)
for(var r=0,o=t.length;o>r;r++)for(var a=t[r],i=0;i<e.dependencies.length;i++)if(a.name==e.dependencies[i].value){console.assert("loaded"==a.status,"Load in linkSet not loaded!")
var s=e.groupIndex+(a.isDeclarative!=e.isDeclarative)
if(void 0===a.groupIndex||a.groupIndex<s){if(void 0!==a.groupIndex&&(n[a.groupIndex].splice(P.call(n[a.groupIndex],a),1),0==n[a.groupIndex].length))throw new TypeError("Mixed dependency cycle detected")
a.groupIndex=s}p(a,t,n)}}}function h(e,t,n){try{var r=t.execute()}catch(o){return void n(t,o)}return r&&r instanceof S?r:void n(t,new TypeError("Execution must define a Module instance"))}function m(e,t){var n=e.loader
if(e.loads.length){var r=[],o=e.loads[0]
o.groupIndex=0,p(o,e.loads,r)
for(var a=o.isDeclarative==r.length%2,i=r.length-1;i>=0;i--){for(var s=r[i],l=0;l<s.length;l++){var u=s[l]
if(a)g(u,e.loads,n)
else{var c=h(e,u,t)
if(!c)return
u.module={name:u.name,module:c},u.status="linked"}f(n,u)}a=!a}}}function v(e,t){var n=t.moduleRecords
return n[e]||(n[e]={name:e,dependencies:[],module:new S,importers:[]})}function g(e,t,n){if(!e.module){var r=e.module=v(e.name,n),o=e.module.module,a=e.declare.call(__global,function(e,t){r.locked=!0,o[e]=t
for(var n=0,a=r.importers.length;a>n;n++){var i=r.importers[n]
if(!i.locked){var s=P.call(i.dependencies,r)
i.setters[s](o)}}return r.locked=!1,t})
r.setters=a.setters,r.execute=a.execute
for(var i=0,s=e.dependencies.length;s>i;i++){var l=e.dependencies[i].value,u=n.modules[l]
if(!u)for(var c=0;c<t.length;c++)t[c].name==l&&(t[c].module?u=v(l,n):(g(t[c],t,n),u=t[c].module))
u.importers?(r.dependencies.push(u),u.importers.push(r)):r.dependencies.push(null),r.setters[i]&&r.setters[i](u.module)}e.status="linked"}}function b(e,t){return console.assert("linked"==t.status,"is linked "+t.name),_(t.module,[],e),t.module.module}function y(e){try{e.execute.call(__global)}catch(t){return t}}function _(e,t,n){var r=x(e,t,n)
if(r)throw r}function x(e,t,n){if(!e.evaluated&&e.dependencies){t.push(e)
for(var r,o=e.dependencies,a=0,i=o.length;i>a;a++){var s=o[a]
if(s&&-1==P.call(t,s)&&(r=x(s,t,n)))return r=w(r,"Error evaluating "+s.name+"\n")}if(e.failed)return Error("Module failed execution.")
if(!e.evaluated)return e.evaluated=!0,r=y(e),r?e.failed=!0:Object.preventExtensions&&Object.preventExtensions(e.module),e.execute=void 0,r}}function w(e,t){return e instanceof Error?e.message=t+e.message:e=t+e,e}function j(e){if("object"!=typeof e)throw new TypeError("Options must be an object")
e.normalize&&(this.normalize=e.normalize),e.locate&&(this.locate=e.locate),e.fetch&&(this.fetch=e.fetch),e.translate&&(this.translate=e.translate),e.instantiate&&(this.instantiate=e.instantiate),this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},R(this,"global",{get:function(){return __global}})}function S(){}function O(e,t,n){var r=e._loader.importPromises
return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}var L=__global.Promise||require("when/es6-shim/Promise")
__global.console&&(console.assert=console.assert||function(){})
var P=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t
return-1},R=$__Object$defineProperty,$=0
j.prototype={constructor:j,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.")
return O(this,e,new L(i({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader
return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(_(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,n){var r=this
return L.resolve(r.normalize(e,n&&n.name,n&&n.address)).then(function(e){var o=r._loader
return o.modules[e]?(_(o.modules[e],[],o._loader),o.modules[e].module):o.importPromises[e]||O(r,e,t(o,e,n||{}).then(function(t){return delete o.importPromises[e],b(o,t)}))})},load:function(e){return this._loader.modules[e]?(_(this._loader.modules[e],[],this._loader),L.resolve(this._loader.modules[e].module)):this._loader.importPromises[e]||O(this,e,t(this._loader,e,{}))},module:function(t,n){var r=e()
r.address=n&&n.address
var o=s(this._loader,r),i=L.resolve(t),l=this._loader,u=o.done.then(function(){return b(l,r)})
return a(l,r,i),u},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object")
var t,n=new S
if(Object.getOwnPropertyNames&&null!=e)t=Object.getOwnPropertyNames(e)
else{t=[]
for(var r in e)t.push(r)}for(var o=0;o<t.length;o++)(function(t){R(n,t,{configurable:!1,enumerable:!0,get:function(){return e[t]}})})(t[o])
return Object.preventExtensions&&Object.preventExtensions(n),n},set:function(e,t){if(!(t instanceof S))throw new TypeError("Loader.set("+e+", module) must be a module")
this._loader.modules[e]={module:t}},normalize:function(e){return e},locate:function(e){return e.name},fetch:function(){throw new TypeError("Fetch not implemented")},translate:function(e){return e.source},instantiate:function(){}}
var E=j.prototype.newModule
"object"==typeof exports&&(module.exports=j),__global.Reflect=__global.Reflect||{},__global.Reflect.Loader=__global.Reflect.Loader||j,__global.Reflect.global=__global.Reflect.global||__global,__global.LoaderPolyfill=j}(),function(e){function t(e,t){return e.newModule({"default":a[t],__useDefault:!0})}function n(e,t){var n=this.traceurOptions||{}
n.modules="instantiate",n.script=!1,n.sourceMaps="inline",n.filename=e.address,n.inputSourceMap=e.metadata.sourceMap,n.moduleName=!1
var o=new t.Compiler(n),a=r(e.source,o,n.filename)
return a+="!eval"}function r(e,t,n){try{return t.compile(e,n)}catch(r){throw r[0]}}function o(e,t){var n=this.babelOptions||{}
n.modules="system",n.sourceMap="inline",n.filename=e.address,n.code=!0,n.ast=!1,n.blacklist||(n.blacklist=["react"])
var r=t.transform(e.source,n).code
return r+"\n//# sourceURL="+e.address+"!eval"}var a=__global
e.prototype.transpiler="traceur",e.prototype.transpile=function(e){var r=this
return r.transpilerHasRun||(a.traceur&&!r.has("traceur")&&r.set("traceur",t(r,"traceur")),a.babel&&!r.has("babel")&&r.set("babel",t(r,"babel")),r.transpilerHasRun=!0),r["import"](r.transpiler).then(function(t){return t.__useDefault&&(t=t["default"]),'var __moduleAddress = "'+e.address+'";'+(t.Compiler?n:o).call(r,e,t)})},e.prototype.instantiate=function(e){var n=this
return Promise.resolve(n.normalize(n.transpiler)).then(function(r){return e.name===r?{deps:[],execute:function(){var r=a.System,o=a.Reflect.Loader
return __eval("(function(require,exports,module){"+e.source+"})();",a,e),a.System=r,a.Reflect.Loader=o,t(n,e.name)}}:void 0})}}(__global.LoaderPolyfill),function(){function e(e){var t=(e+"").replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@\/?#]*(?::[^:@\/?#]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/)
return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function t(e){var t=[]
return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}function n(n,r){return l&&(r=r.replace(/\\/g,"/")),r=e(r||""),n=e(n||""),r&&n?(r.protocol||n.protocol)+(r.protocol||r.authority?r.authority:n.authority)+t(r.protocol||r.authority||"/"===r.pathname.charAt(0)?r.pathname:r.pathname?(n.authority&&!n.pathname?"/":"")+n.pathname.slice(0,n.pathname.lastIndexOf("/")+1)+r.pathname:n.pathname)+(r.protocol||r.authority||r.pathname?r.search:r.search||n.search)+r.hash:null}function r(){document.removeEventListener("DOMContentLoaded",r,!1),window.removeEventListener("load",r,!1),o()}function o(){for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++){var n=e[t]
if("module"==n.type){var r=n.innerHTML.substr(1)
__global.System.module(r)["catch"](function(e){setTimeout(function(){throw e})})}}}var a,i="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,s="undefined"!=typeof window&&!i,l="undefined"!=typeof process&&!!process.platform.match(/^win/),u=__global.Promise||require("when/es6-shim/Promise")
if("undefined"!=typeof XMLHttpRequest)a=function(e,t,n){function r(){t(a.responseText)}function o(){n(a.statusText+": "+e||"XHR error")}var a=new XMLHttpRequest,i=!0,s=!1
if(!("withCredentials"in a)){var l=/^(\w+:)?\/\/([^\/]+)/.exec(e)
l&&(i=l[2]===window.location.host,l[1]&&(i&=l[1]===window.location.protocol))}i||"undefined"==typeof XDomainRequest||(a=new XDomainRequest,a.onload=r,a.onerror=o,a.ontimeout=o,a.onprogress=function(){},a.timeout=0,s=!0),a.onreadystatechange=function(){4===a.readyState&&(200===a.status||0==a.status&&a.responseText?r():o())},a.open("GET",e,!0),s&&setTimeout(function(){a.send()},0),a.send(null)}
else{if("undefined"==typeof require)throw new TypeError("No environment fetch API available.")
var c
a=function(e,t,n){if("file:"!=e.substr(0,5))throw"Only file URLs of the form file: allowed running in Node."
return c=c||require("fs"),e=e.substr(5),l&&(e=e.replace(/\//g,"\\")),c.readFile(e,function(e,r){return e?n(e):void t(r+"")})}}var d=function(e){function t(t){if(e.call(this,t||{}),"undefined"!=typeof location&&location.href){var n=__global.location.href.split("#")[0].split("?")[0]
this.baseURL=n.substring(0,n.lastIndexOf("/")+1)}else{if("undefined"==typeof process||!process.cwd)throw new TypeError("No environment baseURL")
this.baseURL="file:"+process.cwd()+"/",l&&(this.baseURL=this.baseURL.replace(/\\/g,"/"))}this.paths={"*":"*.js"}}return t.__proto__=null!==e?e:Function.prototype,t.prototype=$__Object$create(null!==e?e.prototype:null),$__Object$defineProperty(t.prototype,"constructor",{value:t}),$__Object$defineProperty(t.prototype,"global",{get:function(){return s?window:i?self:__global},enumerable:!1}),$__Object$defineProperty(t.prototype,"strict",{get:function(){return!0},enumerable:!1}),$__Object$defineProperty(t.prototype,"normalize",{value:function(e,t){if("string"!=typeof e)throw new TypeError("Module name must be a string")
var n=e.split("/")
if(0==n.length)throw new TypeError("No module name provided")
var r=0,o=!1,a=0
if("."==n[0]){if(r++,r==n.length)throw new TypeError('Illegal module name "'+e+'"')
o=!0}else{for(;".."==n[r];)if(r++,r==n.length)throw new TypeError('Illegal module name "'+e+'"')
r&&(o=!0),a=r}for(var i=r;i<n.length;i++){var s=n[i]
if(""==s||"."==s||".."==s)throw new TypeError('Illegal module name "'+e+'"')}if(!o)return e
var l=[],u=(t||"").split("/")
u.length-1-a
return l=l.concat(u.splice(0,u.length-1-a)),l=l.concat(n.splice(r,n.length-r)),l.join("/")},enumerable:!1,writable:!0}),$__Object$defineProperty(t.prototype,"locate",{value:function(e){var t,r=e.name,o=""
for(var a in this.paths){var i=a.split("*")
if(i.length>2)throw new TypeError("Only one wildcard in a path is permitted")
if(1==i.length){if(r==a&&a.length>o.length){o=a
break}}else r.substr(0,i[0].length)==i[0]&&r.substr(r.length-i[1].length)==i[1]&&(o=a,t=r.substr(i[0].length,r.length-i[1].length-i[0].length))}var l=this.paths[o]
return t&&(l=l.replace("*",t)),s&&(l=l.replace(/#/g,"%23")),n(this.baseURL,l)},enumerable:!1,writable:!0}),$__Object$defineProperty(t.prototype,"fetch",{value:function(e){var t=this
return new u(function(r,o){a(n(t.baseURL,e.address),function(e){r(e)},o)})},enumerable:!1,writable:!0}),t}(__global.LoaderPolyfill),f=new d
if("object"==typeof exports&&(module.exports=f),__global.System=f,s&&void 0!==document.getElementsByTagName){var p=document.getElementsByTagName("script")
p=p[p.length-1],"complete"===document.readyState?setTimeout(o):document.addEventListener&&(document.addEventListener("DOMContentLoaded",r,!1),window.addEventListener("load",r,!1)),p.getAttribute("data-init")&&window[p.getAttribute("data-init")]()}}()}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:global),function($__global){$__global.upgradeSystemLoader=function(){function e(e){var t=(e+"").replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@\/?#]*(?::[^:@\/?#]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/)
return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function t(t,n){function r(e){var t=[]
return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return m&&(n=n.replace(/\\/g,"/")),n=e(n||""),t=e(t||""),n&&t?(n.protocol||t.protocol)+(n.protocol||n.authority?n.authority:t.authority)+r(n.protocol||n.authority||"/"===n.pathname.charAt(0)?n.pathname:n.pathname?(t.authority&&!t.pathname?"/":"")+t.pathname.slice(0,t.pathname.lastIndexOf("/")+1)+n.pathname:t.pathname)+(n.protocol||n.authority||n.pathname?n.search:n.search||t.search)+n.hash:null}function n(e){function r(e,t){t._extensions=[]
for(var n=0,r=e.length;r>n;n++)e[n](t)}var o=e["import"]
e["import"]=function(e,t){return o.call(this,e,t).then(function(e){return e.__useDefault?e["default"]:e})},e.set("@empty",e.newModule({})),"undefined"!=typeof require&&(e._nodeRequire=require),e.config=function(e){for(var t in e){var n=e[t]
if("object"!=typeof n||n instanceof Array)this[t]=n
else{this[t]=this[t]||{}
for(var r in n)this[t][r]=n[r]}}}
var a
if("undefined"==typeof window&&"undefined"==typeof WorkerGlobalScope)a="file:"+process.cwd()+"/",m&&(a=a.replace(/\\/g,"/"))
else if("undefined"==typeof window)a=e.global.location.href
else if(a=document.baseURI,!a){var i=document.getElementsByTagName("base")
a=i[0]&&i[0].href||window.location.href}var s,l=e.locate
e.locate=function(e){return this.baseURL!=s&&(s=t(a,this.baseURL),"/"!=s.substr(s.length-1,1)&&(s+="/"),this.baseURL=s),Promise.resolve(l.call(this,e))},e._extensions=e._extensions||[],e._extensions.push(n),e.clone=function(){var e=this,t=new LoaderPolyfill(v)
return t.baseURL=e.baseURL,t.paths={"*":"*.js"},r(e._extensions,t),t}}function r(e){function t(e,t){var n=e.meta&&e.meta[t.name]
if(n)for(var r in n)t.metadata[r]=t.metadata[r]||n[r]}var n=/^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,o=/\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g
e.meta={},e._extensions=e._extensions||[],e._extensions.push(r)
var a=e.locate
e.locate=function(e){return t(this,e),a.call(this,e)}
var i=e.translate
e.translate=function(e){var r=e.source.match(n)
if(r)for(var a=r[0].match(o),s=0;s<a.length;s++){var l=a[s].length,u=a[s].substr(0,1)
if(";"==a[s].substr(l-1,1)&&l--,'"'==u||"'"==u){var c=a[s].substr(1,a[s].length-3),d=c.substr(0,c.indexOf(" "))
if(d){var f=c.substr(d.length+1,c.length-d.length-1)
e.metadata[d]instanceof Array?e.metadata[d].push(f):e.metadata[d]||(e.metadata[d]=f)}}}return t(this,e),i.call(this,e)}}function o(e){function n(e){var n,r=e.source.lastIndexOf("\n");-1!=r&&"//# sourceMappingURL="==e.source.substr(r+1,21)&&(n=e.source.substr(r+22,e.source.length-r-22),void 0!==t&&(n=t(e.address,n))),__eval(e.source,e.address,n)}function r(e){for(var t=[],n=0,r=e.length;r>n;n++)-1==h.call(t,e[n])&&t.push(e[n])
return t}function a(t,n,r,o){"string"!=typeof t&&(o=r,r=n,n=t,t=null),g=!0
var a
if(a="boolean"==typeof r?{declarative:!1,deps:n,execute:o,executingRequire:r}:{declarative:!0,deps:n,declare:r},t)a.name=t,t in e.defined||(e.defined[t]=a)
else if(a.declarative){if(v)throw new TypeError("Multiple anonymous System.register calls in the same module file.")
v=a}}function i(e){if(!e.register){e.register=a,e.defined||(e.defined={})
var t=e.onScriptLoad
e.onScriptLoad=function(e){t(e),v&&(e.metadata.entry=v),g&&(e.metadata.format=e.metadata.format||"register",e.metadata.registered=!0)}}}function s(e,t,n){if(n[e.groupIndex]=n[e.groupIndex]||[],-1==h.call(n[e.groupIndex],e)){n[e.groupIndex].push(e)
for(var r=0,o=e.normalizedDeps.length;o>r;r++){var a=e.normalizedDeps[r],i=t.defined[a]
if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative)
if(void 0===i.groupIndex||i.groupIndex<l){if(void 0!==i.groupIndex&&(n[i.groupIndex].splice(h.call(n[i.groupIndex],i),1),0==n[i.groupIndex].length))throw new TypeError("Mixed dependency cycle detected")
i.groupIndex=l}s(i,t,n)}}}}function l(e,t){var n=t.defined[e]
if(!n.module){n.groupIndex=0
var r=[]
s(n,t,r)
for(var o=!!n.declarative==r.length%2,a=r.length-1;a>=0;a--){for(var i=r[a],l=0;l<i.length;l++){var u=i[l]
o?c(u,t):f(u,t)}o=!o}}}function u(e){return b[e]||(b[e]={name:e,dependencies:[],exports:{},importers:[]})}function c(e,t){if(!e.module){var n=e.module=u(e.name),r=e.module.exports,o=e.declare.call(t.global,function(e,t){n.locked=!0,r[e]=t
for(var o=0,a=n.importers.length;a>o;o++){var i=n.importers[o]
if(!i.locked){var s=h.call(i.dependencies,n)
i.setters[s](r)}}return n.locked=!1,t})
if(n.setters=o.setters,n.execute=o.execute,!n.setters||!n.execute)throw new TypeError("Invalid System.register form for "+e.name)
for(var a=0,i=e.normalizedDeps.length;i>a;a++){var s,l=e.normalizedDeps[a],d=t.defined[l],f=b[l]
f?s=f.exports:d&&!d.declarative?s=d.module.exports&&d.module.exports.__esModule?d.module.exports:{"default":d.module.exports,__useDefault:!0}:d?(c(d,t),f=d.module,s=f.exports):s=t.get(l),f&&f.importers?(f.importers.push(n),n.dependencies.push(f)):n.dependencies.push(null),n.setters[a]&&n.setters[a](s)}}}function d(e,t){var n,r=t.defined[e]
if(r)r.declarative?m(e,[],t):r.evaluated||f(r,t),n=r.module.exports
else if(n=t.get(e),!n)throw Error("Unable to load dependency "+e+".")
return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function f(e,t){if(!e.module){var n={},r=e.module={exports:n,id:e.name}
if(!e.executingRequire)for(var o=0,a=e.normalizedDeps.length;a>o;o++){var i=e.normalizedDeps[o],s=t.defined[i]
s&&f(s,t)}e.evaluated=!0
var l=e.execute.call(t.global,function(n){for(var r=0,o=e.deps.length;o>r;r++)if(e.deps[r]==n)return d(e.normalizedDeps[r],t)
throw new TypeError("Module "+n+" not declared as a dependency.")},n,r)
l&&(r.exports=l)}}function m(e,t,n){var r=n.defined[e]
if(r&&!r.evaluated&&r.declarative){t.push(e)
for(var o=0,a=r.normalizedDeps.length;a>o;o++){var i=r.normalizedDeps[o];-1==h.call(t,i)&&(n.defined[i]?m(i,t,n):n.get(i))}r.evaluated||(r.evaluated=!0,r.module.execute.call(n.global))}}void 0===h&&(h=Array.prototype.indexOf),(void 0===__eval||"undefined"!=typeof document&&!document.addEventListener)&&(__eval=0||eval),e._extensions=e._extensions||[],e._extensions.push(o)
e.__exec=n
var v,g
i(e)
var b={},y=/System\.register/,_=e.fetch
e.fetch=function(e){var t=this
return i(t),t.defined[e.name]?(e.metadata.format="defined",""):(v=null,g=!1,_.call(t,e))}
var x=e.translate
e.translate=function(e){return this.register=a,this.__exec=n,e.metadata.deps=e.metadata.deps||[],Promise.resolve(x.call(this,e)).then(function(t){return(e.metadata.init||e.metadata.exports)&&(e.metadata.format=e.metadata.format||"global"),("register"==e.metadata.format||!e.metadata.format&&e.source.match(y))&&(e.metadata.format="register"),t})}
var w=e.instantiate
e.instantiate=function(e){var t,n=this
if(n.defined[e.name])t=n.defined[e.name],t.deps=t.deps.concat(e.metadata.deps)
else if(e.metadata.entry)t=e.metadata.entry
else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire}
else if("register"==e.metadata.format){v=null,g=!1
var o=n.global.System
if(n.global.System=n,n.__exec(e),n.global.System=o,v&&(t=v),!t&&p.defined[e.name]&&(t=p.defined[e.name]),!g&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.")}if(!t&&"es6"!=e.metadata.format)return{deps:e.metadata.deps,execute:function(){return n.newModule({})}}
if(!t)return w.call(this,e)
n.defined[e.name]=t,t.deps=r(t.deps),t.name=e.name
for(var a=[],i=0,s=t.deps.length;s>i;i++)a.push(Promise.resolve(n.normalize(t.deps[i],e.name)))
return Promise.all(a).then(function(r){return t.normalizedDeps=r,{deps:t.deps,execute:function(){l(e.name,n),m(e.name,[],n),n.defined[e.name]=void 0
var r=t.module.exports
return(!r||!t.declarative&&r.__esModule!==!0)&&(r={"default":r,__useDefault:!0}),n.newModule(r)}}})}}function a(e){function t(e,t,n){if(e.meta[t]={format:"global"},u&&!e.paths[t])try{e.paths[t]=require.resolve(n||t)}catch(r){}}e._extensions.push(a)
var n,r,o=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,i=/\$traceurRuntime\s*\./,s=/babelHelpers\s*\./,l=!0,u="undefined"!=typeof process&&"undefined"!=typeof require&&require.resolve,c=e.locate
e.locate=function(e){var n=this
return l&&("traceur"==n.transpiler?(t(n,"traceur","traceur/bin/traceur.js"),n.meta.traceur.exports="traceur",t(n,"traceur-runtime","traceur/bin/traceur-runtime.js")):"babel"==n.transpiler&&(t(n,"babel","babel-core/browser.js"),t(n,"babel-runtime","babel-core/external-helpers.js")),l=!1),c.call(n,e)}
var d=e.translate
e.translate=function(e){var t=this
return d.call(t,e).then(function(a){if("es6"==e.metadata.format||!e.metadata.format&&a.match(o))return e.metadata.format="es6",a
if("register"==e.metadata.format){if(!t.global.$traceurRuntime&&e.source.match(i))return t["import"]("traceur-runtime").then(function(){return a})
if(!t.global.babelHelpers&&e.source.match(s))return t["import"]("babel/external-helpers").then(function(){return a})}return"traceur"==t.transpiler?Promise.all([n||(n=t.normalize(t.transpiler)),r||(r=t.normalize(t.transpiler+"-runtime"))]).then(function(t){return e.name==t[0]||e.name==t[1]?"(function() { var curSystem = System; "+a+"\nSystem = curSystem; })();":a}):a})}}function i(e){function t(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()]
return t}function n(e){if(!e.has("@@global-helpers")){var n,r,o=e.global.hasOwnProperty,a={}
e.set("@@global-helpers",e.newModule({prepareGlobal:function(t,i){for(var s=0;s<i.length;s++){var l=a[i[s]]
if(l)for(var u in l)e.global[u]=l[u]}n={},r=["indexedDB","sessionStorage","localStorage","clipboardData","frames","webkitStorageInfo","toolbar","statusbar","scrollbars","personalbar","menubar","locationbar","webkitIndexedDB","screenTop","screenLeft"]
for(var c in e.global)if(-1==h.call(r,c)&&(!o||e.global.hasOwnProperty(c)))try{n[c]=e.global[c]}catch(d){r.push(c)}},retrieveGlobal:function(i,s,l){var u,c,d={}
if(l)u=l.call(e.global)
else if(s){var f=s.split(".")[0]
u=t(s,e.global),d[f]=e.global[f]}else for(var p in e.global)-1==h.call(r,p)&&(o&&!e.global.hasOwnProperty(p)||p==e.global||n[p]==e.global[p]||(d[p]=e.global[p],u?u!==e.global[p]&&(c=!0):void 0===u&&(u=e.global[p])))
return a[i]=d,c?d:u}}))}}e._extensions.push(i),n(e)
var r=e.instantiate
e.instantiate=function(e){var t=this
n(t)
var o=e.metadata.exports
return e.metadata.format||(e.metadata.format="global"),"global"==e.metadata.format&&(e.metadata.execute=function(n,r,a){t.get("@@global-helpers").prepareGlobal(a.id,e.metadata.deps),o&&(e.source+='\nthis["'+o+'"] = '+o+";")
var i=t.global.define,n=t.global.require
return t.global.define=void 0,t.global.module=void 0,t.global.exports=void 0,t.__exec(e),t.global.require=n,t.global.define=i,t.get("@@global-helpers").retrieveGlobal(a.id,o,e.metadata.init)}),r.call(t,e)}}function s(e){function t(e){r.lastIndex=0
var t=[]
e.length/e.split("\n").length<200&&(e=e.replace(o,""))
for(var n;n=r.exec(e);)t.push(n[1].substr(1,n[1].length-2))
return t}e._extensions.push(s)
var n=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.]|module\.)(exports\s*\[['"]|\exports\s*\.)|(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])module\.exports\s*\=/,r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,o=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a=e.instantiate
e.instantiate=function(o){return o.metadata.format||(n.lastIndex=0,r.lastIndex=0,(r.exec(o.source)||n.exec(o.source))&&(o.metadata.format="cjs")),"cjs"==o.metadata.format&&(o.metadata.deps=o.metadata.deps?o.metadata.deps.concat(t(o.source)):t(o.source),o.metadata.executingRequire=!0,o.metadata.execute=function(t,n,r){var a=(o.address||"").split("/")
a.pop(),a=a.join("/"),p._nodeRequire&&(a=a.substr(5))
var i=(e.global._g={global:e.global,exports:n,module:r,require:t,__filename:p._nodeRequire?o.address.substr(5):o.address,__dirname:a},e.global.define)
e.global.define=void 0
var s={name:o.name,source:"(function() {\n(function(global, exports, module, require, __filename, __dirname){\n"+o.source+"\n}).call(_g.exports, _g.global, _g.exports, _g.module, _g.require, _g.__filename, _g.__dirname);})();",address:o.address}
e.__exec(s),e.global.define=i,e.global._g=void 0}),a.call(this,o)}}function l(e){function t(e,t){e=e.replace(d,"")
var n=e.match(m),r=(n[1].split(",")[t]||"require").replace(v,""),o=g[r]||(g[r]=RegExp(f+r+p,"g"))
o.lastIndex=0
for(var a,i=[];a=o.exec(e);)i.push(a[2]||a[3])
return i}function n(e,t,r,o){var a=this
if("object"==typeof e&&!(e instanceof Array))return n.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1))
if(!(e instanceof Array)){if("string"==typeof e){var i=a.get(e)
return i.__useDefault?i["default"]:i}throw new TypeError("Invalid require")}Promise.all(e.map(function(e){return a["import"](e,o)})).then(function(e){t&&t.apply(null,e)},r)}function r(e,t,r){return function(o,a,i){return"string"==typeof o?t(o):n.call(r,o,a,i,{name:e})}}function o(e){function n(n,o,a){"string"!=typeof n&&(a=o,o=n,n=null),o instanceof Array||(a=o,o=["require","exports","module"]),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===o[o.length-1]&&o.pop()
var s,l,u
if(-1!=(s=h.call(o,"require"))){o.splice(s,1)
var c=""+a
o=o.concat(t(c,s))}-1!=(l=h.call(o,"exports"))&&o.splice(l,1),-1!=(u=h.call(o,"module"))&&o.splice(u,1)
var d={deps:o,execute:function(t,n,c){for(var d=[],f=0;f<o.length;f++)d.push(t(o[f]))
c.uri=e.baseURL+c.id,c.config=function(){},-1!=u&&d.splice(u,0,c),-1!=l&&d.splice(l,0,n),-1!=s&&d.splice(s,0,r(c.id,t,e))
var p=a.apply(i,d)
return void 0===p&&c&&(p=c.exports),void 0!==p?p:void 0}}
if(n)b=0!=o.length||b||y?null:d,y=!0,e.register(n,d.deps,!1,d.execute)
else{if(b)throw new TypeError("Multiple defines for anonymous module")
b=d}}var o=e.onScriptLoad
e.onScriptLoad=function(e){o(e),(b||y)&&(e.metadata.format="defined",e.metadata.registered=!0),b&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(b.deps):b.deps,e.metadata.execute=b.execute)},n.amd={},e.amdDefine=n}function a(e){e.amdDefine||o(e),b=null,y=null
var t=e.global
_=t.module,x=t.exports,w=t.define,t.module=void 0,t.exports=void 0,t.define&&t.define===e.amdDefine||(t.define=e.amdDefine)}function s(e){var t=e.global
t.define=w,t.module=_,t.exports=x}var u="undefined"!=typeof module&&module.exports
e._extensions.push(l)
var c=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,d=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,f="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",p="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",m=/\(([^\)]*)\)/,v=/^\s+|\s+$/g,g={}
e.amdRequire=function(){return n.apply(this,arguments)}
var b,y,_,x,w
if(o(e),e.scriptLoader){var j=e.fetch
e.fetch=function(e){return a(this),j.call(this,e)}}var S=e.instantiate
e.instantiate=function(e){var t=this
if("amd"==e.metadata.format||!e.metadata.format&&e.source.match(c)){if(e.metadata.format="amd",t.execute!==!1&&(a(t),t.__exec(e),s(t),!b&&!y&&!u))throw new TypeError("AMD module "+e.name+" did not define")
b&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(b.deps):b.deps,e.metadata.execute=b.execute)}return S.call(t,e)}}function u(e){function t(e,t){return e.length<t.length?!1:e.substr(0,t.length)!=t?!1:e[t.length]&&"/"!=e[t.length]?!1:!0}function n(e){for(var t=1,n=0,r=e.length;r>n;n++)"/"===e[n]&&t++
return t}function r(e,t,n){return n+e.substr(t)}function o(e,o,a){var i,s,l,u,c=0,d=0
if(o)for(var f in a.map){var p=a.map[f]
if("object"==typeof p&&t(o,f)&&(l=n(f),!(d>=l)))for(var h in p)t(e,h)&&(u=n(h),c>=u||(i=h,c=u,s=f,d=l))}if(i)return r(e,i.length,a.map[s][i])
for(var f in a.map){var p=a.map[f]
if("string"==typeof p&&t(e,f)){var u=n(f)
c>=u||(i=f,c=u)}}return i?r(e,i.length,a.map[i]):e}e.map=e.map||{},e._extensions.push(u)
var a=e.normalize
e.normalize=function(e,t,n){var r=this
r.map||(r.map={})
var i=!1
return"/"==e.substr(e.length-1,1)&&(i=!0,e+="#"),Promise.resolve(a.call(r,e,t,n)).then(function(e){if(e=o(e,t,r),i){var n=e.split("/")
n.pop()
var a=n.pop()
n.push(a),n.push(a),e=n.join("/")}return e})}}function c(e){void 0===h&&(h=Array.prototype.indexOf),e._extensions.push(c)
var t=e.normalize
e.normalize=function(e,n,r){var o,a=this
return n&&-1!=(o=n.indexOf("!"))&&(n=n.substr(0,o)),Promise.resolve(t.call(a,e,n,r)).then(function(e){var t=e.lastIndexOf("!")
if(-1!=t){var o=e.substr(0,t),i=e.substr(t+1)||o.substr(o.lastIndexOf(".")+1)
return new Promise(function(e){e(a.normalize(i,n,r))}).then(function(e){return i=e,a.normalize(o,n,r)}).then(function(e){return e+"!"+i})}return e})}
var n=e.locate
e.locate=function(e){var t=this,r=e.name
if(this.defined&&this.defined[r])return n.call(this,e)
var o=r.lastIndexOf("!")
if(-1!=o){var a=r.substr(o+1)
e.name=r.substr(0,o)
var i=t.pluginLoader||t
return i["import"](a).then(function(){var n=i.get(a)
return n=n["default"]||n,n.build===!1&&t.pluginLoader&&(e.metadata.build=!1),e.metadata.plugin=n,e.metadata.pluginName=a,e.metadata.pluginArgument=e.name,e.metadata.buildType=n.buildType||"js",n.locate?n.locate.call(t,e):Promise.resolve(t.locate(e)).then(function(e){return e.replace(/\.js$/,"")})})}return n.call(this,e)}
var r=e.fetch
e.fetch=function(e){var t=this
return e.metadata.build===!1&&t.pluginLoader?"":e.metadata.plugin&&e.metadata.plugin.fetch&&!e.metadata.pluginFetchCalled?(e.metadata.pluginFetchCalled=!0,e.metadata.plugin.fetch.call(t,e,r)):r.call(t,e)}
var o=e.translate
e.translate=function(e){var t=this
return e.metadata.plugin&&e.metadata.plugin.translate?Promise.resolve(e.metadata.plugin.translate.call(t,e)).then(function(n){return"string"==typeof n&&(e.source=n),o.call(t,e)}):o.call(t,e)}
var a=e.instantiate
e.instantiate=function(e){var t=this
return e.metadata.plugin&&e.metadata.plugin.instantiate?Promise.resolve(e.metadata.plugin.instantiate.call(t,e)).then(function(n){return n?n:a.call(t,e)}):e.metadata.plugin&&e.metadata.plugin.build===!1?(e.metadata.format="defined",e.metadata.deps.push(e.metadata.pluginName),e.metadata.execute=function(){return t.newModule({})},a.call(t,e)):a.call(t,e)}}function d(e){void 0===h&&(h=Array.prototype.indexOf),e._extensions.push(d),e.bundles=e.bundles||{}
var t=e.fetch
e.fetch=function(e){var n=this
if(n.trace)return t.call(this,e)
n.bundles||(n.bundles={})
for(var r in n.bundles)if(-1!=h.call(n.bundles[r],e.name))return Promise.resolve(n.normalize(r)).then(function(e){return n.bundles[e]=n.bundles[e]||n.bundles[r],n.meta=n.meta||{},n.meta[e]=n.meta[e]||{},n.meta[e].bundle=!0,n.load(e)}).then(function(){return""})
return t.call(this,e)}}function f(e){e.depCache=e.depCache||{},e._extensions.push(f)
var t=e.locate
e.locate=function(e){var n=this
n.depCache||(n.depCache={})
var r=n.depCache[e.name]
if(r)for(var o=0;o<r.length;o++)n.load(r[o])
return t.call(n,e)}}$__global.upgradeSystemLoader=void 0
var p,h=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t
return-1},m="undefined"!=typeof process&&!!process.platform.match(/^win/)
!function(){var e=$__global.System
p=$__global.System=new LoaderPolyfill(e),p.baseURL=e.baseURL,p.paths={"*":"*.js"},p.originalSystem=e}(),p.noConflict=function(){$__global.SystemJS=p,$__global.System=p.originalSystem}
var v=$__global.System.originalSystem
n(p),r(p),o(p),a(p),i(p),s(p),l(p),u(p),c(p),d(p),f(p)}
var $__curScript,__eval
!function(){var doEval
if(__eval=function(e,t,n){e+="\n//# sourceURL="+t+(n?"\n//# sourceMappingURL="+n:"")
try{doEval(e)}catch(r){var o="Error evaluating "+t+"\n"
throw r instanceof Error?r.message=o+r.message:r=o+r,r}},"undefined"!=typeof document){var head,scripts=document.getElementsByTagName("script")
if($__curScript=scripts[scripts.length-1],doEval=function(e){head||(head=document.head||document.body||document.documentElement)
var t=document.createElement("script")
t.text=e
var n,r=window.onerror
if(window.onerror=function(e){n=e},head.appendChild(t),head.removeChild(t),window.onerror=r,n)throw n},$__global.System&&$__global.LoaderPolyfill)$__global.upgradeSystemLoader()
else{var curPath=$__curScript.src,basePath=curPath.substr(0,curPath.lastIndexOf("/")+1)
document.write('<script type="text/javascript" src="'+basePath+'es6-module-loader.js" data-init="upgradeSystemLoader"></script>')}}else if("undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof importScripts)if(doEval=function(source){try{eval(source)}catch(e){throw e}},$__global.System&&$__global.LoaderPolyfill)$__global.upgradeSystemLoader()
else{var basePath=""
try{throw Error("Get worker base path via error stack")}catch(e){e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){basePath=t.replace(/\/[^\/]*$/,"/")})}importScripts(basePath+"es6-module-loader.js"),$__global.upgradeSystemLoader()}else{var es6ModuleLoader=require("es6-module-loader")
$__global.System=es6ModuleLoader.System,$__global.Loader=es6ModuleLoader.Loader,$__global.upgradeSystemLoader(),module.exports=$__global.System
var vm=require("vm")
doEval=function(e){vm.runInThisContext(e)}}}()}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:global),function(e){function t(e){function t(e){function t(){for(var t,r=[],o=0;o<arguments.length;o++)"string"==typeof arguments[o]?r.push(m(arguments[o])):t=arguments[o]
"function"!=typeof t&&(t=function(e){return function(){return e}}(t)),n={deps:r,execute:function(n){for(var o=[],a=0;a<r.length;a++)o.push(n(r[a]))
var i=t.apply(e.global,o)
return void 0!==i?i:void 0}}}n=null,e.global.module=void 0,e.global.exports=void 0,e.global.steal=t}var n,r=/(?:^\s*|[}{\(\);,\n\?\&]\s*)steal\s*\(\s*((?:"[^"]+"\s*,|'[^']+'\s*,\s*)*)/,o=e.instantiate
return e.instantiate=function(e){var a=this
if("steal"===e.metadata.format||!e.metadata.format&&e.source.match(r)){e.metadata.format="steal"
var i=a.global.steal
if(t(a),a.__exec(e),a.global.steal=i,!n)throw"Steal module "+e.name+" did not call steal"
n&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(n.deps):n.deps,e.metadata.execute=n.execute)}return o.call(a,e)},e}var n=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},r=function(e,t){var n,r
if("number"==typeof e.length&&e.length-1 in e)for(n=0,r=e.length;r>n;n++)t.call(e[n],e[n],n,e)
else for(n in e)e.hasOwnProperty(n)&&t.call(e[n],e[n],n,e)
return e},o=function(e){return"string"==typeof e},a=function(e,t){return r(t,function(t,n){e[n]=t}),e},i=function(e){var t=e.lastIndexOf("/")
return-1===t&&(t=e.lastIndexOf("\\")),-1!==t?e.substr(0,t):e},s=function(e){return e[e.length-1]},l=function(e){var t=(e+"").replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/)
return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null},u=function(e,t){function n(e){var t=[]
return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return t=l(t||""),e=l(e||""),t&&e?(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+n(t.protocol||t.authority||"/"===t.pathname.charAt(0)?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash:null},c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,d="undefined"!=typeof window,f=!d&&!c&&"undefined"!=typeof require,p=function(e){var t=e.lastIndexOf("/");-1===t&&(t=e.lastIndexOf("\\"))
var n=(-1==t?e:e.substr(t+1)).match(/^[\w-\s\.!]+/)
return n?n[0]:""},h=function(e){var t=p(e),n=t.lastIndexOf(".")
return-1!==n?t.substr(n+1):""},m=function(e){var t=e.lastIndexOf("!"),n=""
if(-1!=t){var r=e.substr(0,t),o=e.substr(t+1)
n="!"+o,e=r}var a=p(e),i=h(e)
return"/"===e[e.length-1]?e+p(e.substr(0,e.length-1))+n:/^(\w+(?:s)?:\/\/|\.|file|\/)/.test(e)||-1!==a.indexOf(".")?"js"===i?e.substr(0,e.lastIndexOf("."))+n:e+n:e+"/"+a+n},v=function(e){var t=e||this.System
return g(this.addSteal(t.clone()))},g=function(t){function d(e){function t(e){if(("json"===e.metadata.format||!e.metadata.format)&&n.test(e.source))try{return JSON.parse(e.source)}catch(t){}}var n=/^[\s\n\r]*[\{\[]/,r=/\.json$/i,o=/\.js$/i,a="undefined"==typeof window
e._extensions.push(d)
var i=e.locate
if(e.locate=function(e){return i.apply(this,arguments).then(function(t){return r.test(e.name)?t.replace(o,""):t})},a){var s=e.translate
return void(e.translate=function(e){if(r.test(e.name)){var n=t(e)
if(n)return"define([], function(){\n	return "+e.source+"\n});"}return s.call(this,e)})}var l=e.instantiate
return e.instantiate=function(e){var n,r=this
return n=t(e),n&&(e.metadata.format="json",e.metadata.execute=function(){return n}),l.call(r,e)},e}t.set("@loader",t.newModule({"default":t,__useDefault:!0}))
var h,v,g=function(){var e=arguments,n=function(){var t,n=[]
r(e,function(e){o(e)?n.push(g.System["import"](m(e))):"function"==typeof e&&(t=e)})
var a=Promise.all(n)
return t?a.then(function(e){return t&&t.apply(null,e)}):a}
return"production"===t.env?n():h.then(n,n)}
g.System=t,g.parseURI=l,g.joinURIs=u,g.normalize=m
var b=function(e){e.ext={}
var t=e.normalize,n=/\.(\w+)!$/
e.normalize=function(r,o,a){var i,s=r.match(n),l=r
return s&&e.ext[i=s[1]]&&(l=r+e.ext[i]),t.call(this,l,o,a)}}
b(t)
var y=function(e){var t=e.normalize,n=/@.+#.+/
e.normalize=function(e,r,o){var a,i,s=e.length-1
return"/"===e[s]&&(a=e.substring(0,s).lastIndexOf("/"),i=e.substring(a+1,s),n.test(i)&&(i=i.substr(i.lastIndexOf("#")+1)),e+=i),t.call(this,e,r,o)}}
y(t),void 0!==t&&d(t)
var _=function(e,t){var n=e.config
e.config=function(o){var i=a({},o)
r(t,function(t,n){if(t.set&&i[n]){var r=t.set.call(e,i[n],o)
void 0!==r&&(e[n]=r),delete i[n]}}),n.call(this,i)}},x=function(e,t,n){e[t]||(e[t]=n)}
t.configMain="@config",t.paths[t.configMain]="/js/app/user/config.js",t.env="production",t.ext={css:"$css",less:"$less"},t.logLevel=0
var w="bundles/*.css",j="bundles/*"
x(t.paths,w,"dist/bundles/*css"),x(t.paths,j,"dist/bundles/*.js")
var S,O={set:function(e){var n=p(e),r=i(e)
f||(t.configPath=u(location.href,e)),t.configMain=n,t.paths[n]=n,k.call(this),this.config({baseURL:(r===e?".":r)+"/"})}},L={set:function(e){this.main=e,k.call(this)}},P=function(e){return f&&!/^file:/.test(e)?("."===e[0]&&("/"===e[1]||"."===e[1]&&"/"===e[2])&&(e=require("path").join(process.cwd(),e)),e?"file:"+e:e):e},R=function(e){return{set:function(t){this[e]=P(t)}}},$=function(e){var t=e.lastIndexOf("!")
return-1!==t?e.substr(t+1):void 0},E=function(e){var t=e.lastIndexOf("!")
return-1!==t?e.substr(0,t):void 0},k=function(){if("production"===this.env&&this.main){var e=this.main,n=this.bundlesName||"bundles/",r=n+e
x(this.meta,r,{format:"amd"})
var o=$(t.configMain),a=[e,t.configMain]
if(o&&t.set(o,t.newModule({})),o=$(e)){var i=E(e)
a.push(o),a.push(i),r=n+i.substr(0,i.indexOf("."))}this.bundles[r]=a}},I="less-2.4.0"
_(t,S={env:{set:function(e){t.env=e,k.call(this)}},baseUrl:R("baseURL"),baseURL:R("baseURL"),root:R("baseURL"),config:O,configPath:O,startId:{set:function(e){L.set.call(this,m(e))}},main:L,stealURL:{set:function(e,n){t.stealURL=e
var r=e.split("?"),o=r.shift(),a=r.join("?"),i=a.split("&"),s=o.split("/"),l=s.pop(),u=s.join("/")
if(S.stealPath.set.call(this,u,n),l.indexOf("steal.production")>-1&&!n.env&&(t.env="production",k.call(this)),i.length&&i[0].length){for(var c,d={},f=0;f<i.length;f++){c=i[f]
var p=c.split("=")
if(p.length>1)d[p[0]]=p.slice(1).join("=")
else{g.dev&&g.dev.warn("Please use search params like ?main=main&env=production")
var h=c.split(",")
h[0]&&(d.startId=h[0]),h[1]&&(d.env=h[1])}}this.config(d)}}},stealPath:{set:function(e,n){e=P(e)
var r=e.split("/")
x(this.paths,"@dev",e+"/ext/dev.js"),x(this.paths,"$css",e+"/ext/css.js"),x(this.paths,"$less",e+"/ext/less.js"),x(this.paths,"npm",e+"/ext/npm.js"),x(this.paths,"npm-extension",e+"/ext/npm-extension.js"),x(this.paths,"npm-utils",e+"/ext/npm-utils.js"),x(this.paths,"npm-crawl",e+"/ext/npm-crawl.js"),x(this.paths,"semver",e+"/ext/semver.js"),x(this.paths,"bower",e+"/ext/bower.js"),x(this.paths,"live-reload",e+"/ext/live-reload.js"),this.paths.traceur=e+"/ext/traceur.js",this.paths["traceur-runtime"]=e+"/ext/traceur-runtime.js",this.paths.babel=e+"/ext/babel.js",this.paths["babel-runtime"]=e+"/ext/babel-runtime.js",f?(t.register("less",[],!1,function(){var e=require
return e("less")}),"@config"===this.configMain&&"steal"===s(r)&&(r.pop(),"node_modules"===s(r)&&(this.configMain="package.json!npm",k.call(this),r.pop()))):(x(this.paths,"less",e+"/ext/"+I+".js"),n.root||n.baseUrl||n.baseURL||n.config||n.configPath||("steal"===s(r)&&(r.pop(),"bower_components"===s(r)&&(t.configMain="bower.json!bower",k.call(this),r.pop()),"node_modules"===s(r)&&(t.configMain="package.json!npm",k.call(this),r.pop())),this.config({baseURL:r.join("/")+"/"}))),t.stealPath=e}},bundle:{set:function(e){t.bundle=e}},bundlesPath:{set:function(e){return this.paths[w]=e+"/*css",this.paths[j]=e+"/*.js",e}},instantiated:{set:function(e){var t=this
r(e||{},function(e,n){t.set(n,t.newModule(e))})}}}),g.config=function(e){return"string"==typeof e?t[e]:void t.config(e)}
var q=function(){var e={},t=document.getElementsByTagName("script"),o=t[t.length-1]
if(o){e.stealURL=o.src,r(o.attributes,function(t){var r=n(0===t.nodeName.indexOf("data-")?t.nodeName.replace("data-",""):t.nodeName)
e[r]=""===t.value?!0:t.value})
var a=o.innerHTML.substr(1);/\S/.test(a)&&(e.mainSource=a)}return e}
return g.startup=function(n){if(c)var r={stealURL:location.href}
else if(e.document)var r=q()
else var r={stealPath:__dirname}
t.config(r),n&&t.config(n)
return h=t["import"](t.configMain),v=h.then(function(e){return t.main?t["import"](t.main):e})["catch"](function(e){console.log(e)}),t.mainSource&&(v=v.then(function(){t.module(t.mainSource)})),v},g.done=function(){return v},g["import"]=function(){function e(){var e=[]
return r(t,function(t){e.push(n["import"](t))}),e.length>1?Promise.all(e):e[0]}var t=arguments,n=this.System
return h||g.startup(),h.then(e)},g}
if("undefined"!=typeof System&&t(System),f)require("systemjs"),e.steal=g(System),e.steal.System=System,e.steal.dev=require("./ext/dev.js"),steal.clone=v,module.exports=e.steal,e.steal.addSteal=t,require("system-json")
else{var b=e.steal
e.steal=g(System),e.steal.startup(b&&"object"==typeof b&&b).then(null,function(e){throw console.log("error",e,e.stack),e}),e.steal.clone=v,e.steal.addSteal=t}}("undefined"==typeof window?"undefined"==typeof global?this:global:window)