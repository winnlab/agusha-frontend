steal("can/util","can/util/bind","can/compute/read.js","can/util/batch",function(t,e,n){var i=[]
t.__read=function(t,e){i.push({})
var n=t.call(e)
return{value:n,observed:i.pop()}},t.__reading=function(t,e){i.length&&(i[i.length-1][t._cid+"|"+e]={obj:t,event:e+""})},t.__clearReading=function(){if(i.length){var t=i[i.length-1]
return i[i.length-1]={},t}},t.__setReading=function(t){i.length&&(i[i.length-1]=t)},t.__addReading=function(e){i.length&&t.simpleExtend(i[i.length-1],e)}
var s=function(e,n,i,s){var o=t.__read(e,n),r=o.observed
return u(i,r,s),a(i,s),t.batch.afterPreviousEvents(function(){o.ready=!0}),o},u=function(t,e,n){for(var i in e)o(t,e,i,n)},o=function(t,e,n,i){if(t[n])delete t[n]
else{var s=e[n]
s.obj.bind(s.event,i)}},a=function(t,e){for(var n in t){var i=t[n]
i.obj.unbind(i.event,e)}},r=function(e,n,i,s){n!==i&&t.batch.trigger(e,s?{type:"change",batchNum:s}:"change",[n,i])},h=function(){this.readInfo=s(this._getterSetter,this._context,{},this.onchanged),this.setCached(this.readInfo.value),this.hasDependencies=!t.isEmptyObject(this.readInfo.observed)},c=function(){for(var t in this.readInfo.observed){var e=this.readInfo.observed[t]
e.obj.unbind(e.event,this.onchanged)}},f=function(e,n,i){var u,o,a
return{on:function(){var r=this
o||(o=function(t){if(u.ready&&e.bound&&(void 0===t.batchNum||t.batchNum!==a)){var h=u.value
u=s(n,i,u.observed,o),r.updater(u.value,h,t.batchNum),a=a=t.batchNum}}),u=s(n,i,{},o),e.setCached(u.value),e.hasDependencies=!t.isEmptyObject(u.observed)},off:function(){for(var t in u.observed){var e=u.observed[t]
e.obj.unbind(e.event,o)}}}},d=function(e,n,i){var u,o,a,r
return{on:function(h){a||(a=function(s){if(u.ready&&e.bound&&(void 0===s.batchNum||s.batchNum!==r)){var a=t.__clearReading(),c=n.call(i)
t.__setReading(a),h.call(e,c,o,s.batchNum),o=c,r=r=s.batchNum}}),u=s(n,i,{},a),o=u.value,e.setCached(u.value),e.hasDependencies=!t.isEmptyObject(u.observed)},off:function(){for(var t in u.observed){var e=u.observed[t]
e.obj.unbind(e.event,a)}}}},_=function(){},v=function(t,e,n){this.setCached(t),r(this,t,e,n)},p=function(t,e){return function(){e(t._get(),t.value)}},l=function(t,e,n){return function(){return t.call(e,n.get())}},g=function(t,e){return function(n){void 0!==n&&e(n,t.value)}}
t.Compute=function(){for(var e=[],n=0,i=arguments.length;i>n;n++)e[n]=arguments[n]
var s=typeof e[1]
"function"==typeof e[0]?this._setupGetterSetterFn(e[0],e[1],e[2],e[3]):e[1]?"string"===s?this._setupContextString(e[0],e[1],e[2]):"function"===s?this._setupContextFunction(e[0],e[1],e[2]):e[1]&&e[1].fn?this._setupAsyncCompute(e[0],e[1]):this._setupContextSettings(e[0],e[1]):this._setupInitialValue(e[0]),this._args=e,this.isComputed=!0,t.cid(this,"compute")},t.simpleExtend(t.Compute.prototype,{_bindsetup:function(){this.bound=!0
var e=t.__clearReading()
this._on(this.updater),t.__setReading(e)},_bindteardown:function(){this._off(this.updater),this.bound=!1},bind:t.bindAndSetup,unbind:t.unbindAndTeardown,clone:function(e){return e&&"function"==typeof this._args[0]?this._args[1]=e:e&&(this._args[2]=e),new t.Compute(this._args[0],this._args[1],this._args[2],this._args[3])},_on:_,_off:_,get:function(){return i.length&&this._canReadForChangeEvent!==!1&&(t.__reading(this,"change"),this.bound||t.Compute.temporarilyBind(this)),this.bound?this.value:this._get()},_get:function(){return this.value},set:function(t){var e=this.value,n=this._set(t,e)
return this.hasDependencies?this._setUpdates?this.value:this._get():(void 0===n?this.value=this._get():this.value=n,r(this,this.value,e),this.value)},_set:function(t){return this.value=t},setCached:function(t){this.value=t},updater:v,_computeFn:function(t){return arguments.length?this.set(t):this.get()},toFunction:function(){return t.proxy(this._computeFn,this)},_setupGetterSetterFn:function(e,n,i,u){this._set=t.proxy(e,n),this._get=t.proxy(e,n),this._canReadForChangeEvent=i===!1?!1:!0,this._getterSetter=e,this._context=n
var o
if(u)o=d(this,e,n||this),this._on=o.on,this._off=o.off
else{var a=this
this.onchanged=function(t){if(a.bound&&a.readInfo.ready&&(void 0===t.batchNum||t.batchNum!==a.batchNum)){var i=a.readInfo.value
a.readInfo=s(e,n,a.readInfo.observed,a.onchanged),a.updater(a.readInfo.value,i,t.batchNum),a.batchNum=t.batchNum}},this._on=h,this._off=c}},_setupContextString:function(e,n,i){var s,u=e instanceof t.Map
this.updater=t.proxy(this.updater,this),u?(this.hasDependencies=!0,this._get=function(){return e.attr(n)},this._set=function(t){e.attr(n,t)},this._on=function(u){s=function(t,e,n){u(e,n,t.batchNum)},e.bind(i||n,s),this.value=t.__read(this._get).value},this._off=function(){return e.unbind(i||n,s)}):(this._get=t.proxy(this._get,e),this._set=t.proxy(this._set,e))},_setupContextFunction:function(e,n,i){this.value=e,this._set=n,t.simpleExtend(this,i)},_setupContextSettings:function(e,n){this.value=e
var i=t.proxy(this.updater,this)
this._set=n.set?t.proxy(n.set,n):this._set,this._get=n.get?t.proxy(n.get,n):this._get,this.updater=p(this,i),this._on=n.on?n.on:this._on,this._off=n.off?n.off:this._off},_setupAsyncCompute:function(e,n){this.value=e
var i,s=t.proxy(this.updater,this),u=this,o=n.fn
this.updater=s
var a=new t.Compute(e)
this.lastSetValue=a,this._setUpdates=!0,this._set=function(t){return t===a.get()?this.value:void a.set(t)},this._get=l(o,n.context,a),0===o.length?i=f(this,o,n.context):1===o.length?i=f(this,function(){return o.call(n.context,a.get())},n):(this.updater=g(this,s),i=f(this,function(){var t=o.call(n.context,a.get(),function(t){s(t,u.value)})
return void 0!==t?t:this.value},n)),this._on=i.on,this._off=i.off},_setupInitialValue:function(t){this.value=t}})
var b,m=function(){for(var t=0,e=b.length;e>t;t++)b[t].unbind("change",_)
b=null}
return t.Compute.temporarilyBind=function(t){t.bind("change",_),b||(b=[],setTimeout(m,10)),b.push(t)},t.Compute.async=function(e,n,i){return new t.Compute(e,{fn:n,context:i})},t.Compute.read=n,t.Compute.set=n.write,t.Compute.truthy=function(e){return new t.Compute(function(){var t=e.get()
return"function"==typeof t&&(t=t.get()),!!t})},t.Compute})