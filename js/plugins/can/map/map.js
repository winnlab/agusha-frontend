steal("can/util","can/util/bind","./bubble.js","can/construct","can/util/batch",function(t,e,i){var n=null,s=function(){for(var t in n)n[t].added&&delete n[t].obj._cid
n=null},r=function(t){return n&&n[t._cid]&&n[t._cid].instance},a=null,o=t.Map=t.Construct.extend({setup:function(){if(t.Construct.setup.apply(this,arguments),t.Map){this.defaults||(this.defaults={}),this._computes=[],this.prototype.define&&!this.helpers.define&&t.dev.warn("can/map/define is not included, yet there is a define property used. You may want to add this plugin."),this.define&&!this.helpers.define&&t.dev.warn("The define property should be on the map's prototype properties, not the static properies. Also, can/map/define is not included.")
for(var e in this.prototype)"define"!==e&&"constructor"!==e&&("function"!=typeof this.prototype[e]||this.prototype[e].prototype instanceof t.Construct)?this.defaults[e]=this.prototype[e]:this.prototype[e].isComputed&&this._computes.push(e)
this.helpers.define&&this.helpers.define(this)}!t.List||this.prototype instanceof t.List||(this.List=o.List.extend({Map:this},{}))},_bubble:i,_bubbleRule:function(t){return"change"===t||t.indexOf(".")>=0?["change"]:[]},_computes:[],bind:t.bindAndSetup,on:t.bindAndSetup,unbind:t.unbindAndTeardown,off:t.unbindAndTeardown,id:"id",helpers:{define:null,attrParts:function(t,e){return e?[t]:"object"==typeof t?t:(""+t).split(".")},addToMap:function(e,i){var r
n||(r=s,n={})
var a=e._cid,o=t.cid(e)
return n[o]||(n[o]={obj:e,instance:i,added:!a}),r},isObservable:function(e){return e instanceof t.Map||e&&e===t.route},canMakeObserve:function(e){return e&&!t.isDeferred(e)&&(t.isArray(e)||t.isPlainObject(e))},serialize:function(e,i,n){var s=t.cid(e),r=!1
return a||(r=!0,a={attr:{},serialize:{}}),a[i][s]=n,e.each(function(s,r){var u,h=o.helpers.isObservable(s),c=h&&a[i][t.cid(s)]
u=c?c:"serialize"===i?o.helpers._serialize(e,r,s):o.helpers._getValue(e,r,s,i),void 0!==u&&(n[r]=u)}),t.__reading(e,"__keys"),r&&(a=null),n},_serialize:function(t,e,i){return o.helpers._getValue(t,e,i,"serialize")},_getValue:function(t,e,i,n){return o.helpers.isObservable(i)?i[n]():i}},keys:function(e){var i=[]
t.__reading(e,"__keys")
for(var n in e._data)i.push(n)
return i}},{setup:function(e){e instanceof t.Map&&(e=e.serialize()),this._data={},t.cid(this,".map"),this._init=1,this._computedBindings={}
var i=this._setupDefaults(e)
this._setupComputes(i)
var n=e&&t.Map.helpers.addToMap(e,this),s=t.extend(t.extend(!0,{},i),e)
this.attr(s),n&&n(),this.bind("change",t.proxy(this._changes,this)),delete this._init},_setupComputes:function(){for(var t,e=this.constructor._computes,i=0,n=e.length;n>i;i++)t=e[i],this[t]=this[t].clone(this),this._computedBindings[t]={count:0}},_setupDefaults:function(){return this.constructor.defaults||{}},_bindsetup:function(){},_bindteardown:function(){},_changes:function(e,i,n,s,r){t.batch.trigger(this,{type:i,batchNum:e.batchNum,target:e.target},[s,r])},_triggerChange:function(e,n,s,r){i.isBubbling(this,"change")?t.batch.trigger(this,{type:"change",target:this},[e,n,s,r]):t.batch.trigger(this,e,[s,r]),("remove"===n||"add"===n)&&t.batch.trigger(this,{type:"__keys",target:this})},_each:function(t){var e=this.__get()
for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},attr:function(e,i){var n=typeof e
return"string"!==n&&"number"!==n?this._attrs(e,i):1===arguments.length?(t.__reading(this,e),this._get(e)):(this._set(e,i),this)},each:function(){return t.each.apply(void 0,[this].concat(t.makeArray(arguments)))},removeAttr:function(e){var i=t.List&&this instanceof t.List,n=t.Map.helpers.attrParts(e),s=n.shift(),r=i?this[s]:this._data[s]
return n.length&&r?r.removeAttr(n):("string"==typeof e&&~e.indexOf(".")&&(s=e),this._remove(s,r),r)},_remove:function(t,e){t in this._data&&(delete this._data[t],t in this.constructor.prototype||delete this[t],this._triggerChange(t,"remove",void 0,e))},_get:function(t){t=""+t
var e=t.indexOf(".")
if(e>=0){var i=this.__get(t)
if(void 0!==i)return i
var n=t.substr(0,e),s=t.substr(e+1),r=this.__get(n)
return r&&r._get?r._get(s):void 0}return this.__get(t)},__get:function(t){return t?this._computedBindings[t]?this[t]():this._data[t]:this._data},__type:function(e){if(!(e instanceof t.Map)&&t.Map.helpers.canMakeObserve(e)){var i=r(e)
if(i)return i
if(t.isArray(e)){var n=t.List
return new n(e)}var s=this.constructor.Map||t.Map
return new s(e)}return e},_set:function(t,e,i){t=""+t
var n,s=t.indexOf(".")
if(!i&&s>=0){var r=t.substr(0,s),a=t.substr(s+1)
if(n=this._init?void 0:this.__get(r),!o.helpers.isObservable(n))throw"can.Map: Object does not exist"
n._set(a,e)}else this.__convert&&(e=this.__convert(t,e)),n=this._init?void 0:this.__get(t),this.__set(t,this.__type(e,t),n)},__set:function(t,e,i){if(e!==i){var n=void 0!==i||this.__get().hasOwnProperty(t)?"set":"add"
this.___set(t,this.constructor._bubble.set(this,t,e,i)),this._computedBindings[t]||this._triggerChange(t,n,e,i),i&&this.constructor._bubble.teardownFromParent(this,i)}},___set:function(t,e){this._computedBindings[t]?this[t](e):this._data[t]=e,"function"==typeof this.constructor.prototype[t]||this._computedBindings[t]||(this[t]=e)},bind:function(e){var i=this._computedBindings&&this._computedBindings[e]
if(i)if(i.count)i.count++
else{i.count=1
var n=this
i.handler=function(i,s,r){t.batch.trigger(n,{type:e,batchNum:i.batchNum,target:n},[s,r])},this[e].bind("change",i.handler)}return this.constructor._bubble.bind(this,e),t.bindAndSetup.apply(this,arguments)},unbind:function(e){var i=this._computedBindings&&this._computedBindings[e]
return i&&(1===i.count?(i.count=0,this[e].unbind("change",i.handler),delete i.handler):i.count--),this.constructor._bubble.unbind(this,e),t.unbindAndTeardown.apply(this,arguments)},serialize:function(){return t.Map.helpers.serialize(this,"serialize",{})},_attrs:function(e,i){if(void 0===e)return o.helpers.serialize(this,"attr",{})
e=t.simpleExtend({},e)
var n,s,r=this
t.batch.start(),this.each(function(t,n){if("_cid"!==n){if(s=e[n],void 0===s)return void(i&&r.removeAttr(n))
r.__convert&&(s=r.__convert(n,s)),o.helpers.isObservable(s)?r.__set(n,r.__type(s,n),t):o.helpers.isObservable(t)&&o.helpers.canMakeObserve(s)?t.attr(s,i):t!==s&&r.__set(n,r.__type(s,n),t),delete e[n]}})
for(n in e)"_cid"!==n&&(s=e[n],this._set(n,s,!0))
return t.batch.stop(),this},compute:function(e){if(t.isFunction(this.constructor.prototype[e]))return t.compute(this[e],this)
var i=e.split("."),n=i.length-1,s={args:[]}
return t.compute(function(e){return arguments.length?void t.compute.read(this,i.slice(0,n)).value.attr(i[n],e):t.compute.read(this,i,s).value},this)}})
return o.prototype.on=o.prototype.bind,o.prototype.off=o.prototype.unbind,o})