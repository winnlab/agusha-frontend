steal("can/util","can/map","can/map/bubble.js",function(t,e,i){var r=[].splice,h=function(){var t={0:"a",length:1}
return r.call(t,0,1),!t[0]}(),s=e.extend({Map:e},{setup:function(e,i){this.length=0,t.cid(this,".map"),this._init=1,this._computedBindings={},this._setupComputes(),e=e||[]
var r
t.isDeferred(e)?this.replace(e):(r=e.length&&t.Map.helpers.addToMap(e,this),this.push.apply(this,t.makeArray(e||[]))),r&&r(),this.bind("change",t.proxy(this._changes,this)),t.simpleExtend(this,i),delete this._init},_triggerChange:function(i,r,h,s){e.prototype._triggerChange.apply(this,arguments)
var n=+i
~(""+i).indexOf(".")||isNaN(n)||("add"===r?(t.batch.trigger(this,r,[h,n]),t.batch.trigger(this,"length",[this.length])):"remove"===r?(t.batch.trigger(this,r,[s,n]),t.batch.trigger(this,"length",[this.length])):t.batch.trigger(this,r,[h,n]))},__get:function(e){return e?this[e]&&this[e].isComputed&&t.isFunction(this.constructor.prototype[e])?this[e]():this[e]:this},__set:function(e,i,r){if(e=isNaN(+e)||e%1?e:+e,"number"==typeof e&&e>this.length-1){var h=Array(e+1-this.length)
return h[h.length-1]=i,this.push.apply(this,h),h}return t.Map.prototype.__set.call(this,""+e,i,r)},___set:function(t,e){this[t]=e,+t>=this.length&&(this.length=+t+1)},_remove:function(t,e){isNaN(+t)?(delete this[t],this._triggerChange(t,"remove",void 0,e)):this.splice(t,1)},_each:function(t){for(var e=this.__get(),i=0;i<e.length;i++)t(e[i],i)},serialize:function(){return e.helpers.serialize(this,"serialize",[])},splice:function(e,s){var n,a,o,l=t.makeArray(arguments),c=[],g=l.length>2
for(e=e||0,n=0,a=l.length-2;a>n;n++)o=n+2,l[o]=this.__type(l[o],o),c.push(l[o]),this[n+e]!==l[o]&&(g=!1)
if(g)return c
void 0===s&&(s=l[1]=this.length-e)
var p=r.apply(this,l)
if(!h)for(n=this.length;n<p.length+this.length;n++)delete this[n]
if(t.batch.start(),s>0&&(i.removeMany(this,p),this._triggerChange(""+e,"remove",void 0,p)),l.length>2){for(n=0,a=c.length;a>n;n++)i.set(this,n,c[n])
this._triggerChange(""+e,"add",c,p)}return t.batch.stop(),p},_attrs:function(i,r){return void 0===i?e.helpers.serialize(this,"attr",[]):(i=t.makeArray(i),t.batch.start(),this._updateAttrs(i,r),void t.batch.stop())},_updateAttrs:function(t,i){for(var r=Math.min(t.length,this.length),h=0;r>h;h++){var s=this[h],n=t[h]
e.helpers.isObservable(s)&&e.helpers.canMakeObserve(n)?s.attr(n,i):s!==n&&this._set(h,n)}t.length>this.length?this.push.apply(this,t.slice(this.length)):t.length<this.length&&i&&this.splice(t.length)}}),n=function(e){return e[0]&&t.isArray(e[0])?e[0]:t.makeArray(e)}
return t.each({push:"length",unshift:0},function(t,e){var r=[][e]
s.prototype[e]=function(){for(var e,h,s=[],n=t?this.length:0,a=arguments.length;a--;)h=arguments[a],s[a]=i.set(this,a,this.__type(h,a))
return e=r.apply(this,s),(!this.comparator||s.length)&&this._triggerChange(""+n,"add",s,void 0),e}}),t.each({pop:"length",shift:0},function(t,e){s.prototype[e]=function(){if(!this.length)return void 0
var r=n(arguments),h=t&&this.length?this.length-1:0,s=[][e].apply(this,r)
return this._triggerChange(""+h,"remove",void 0,[s]),s&&s.unbind&&i.remove(this,s),s}}),t.extend(s.prototype,{indexOf:function(e,i){return this.attr("length"),t.inArray(e,this,i)},join:function(){return[].join.apply(this.attr(),arguments)},reverse:function(){var e=[].reverse.call(t.makeArray(this))
this.replace(e)},slice:function(){var t=Array.prototype.slice.apply(this,arguments)
return new this.constructor(t)},concat:function(){var e=[]
return t.each(t.makeArray(arguments),function(i,r){e[r]=i instanceof t.List?i.serialize():i}),new this.constructor(Array.prototype.concat.apply(this.serialize(),e))},forEach:function(e,i){return t.each(this,e,i||this)},replace:function(e){return t.isDeferred(e)?e.then(t.proxy(this.replace,this)):this.splice.apply(this,[0,this.length].concat(t.makeArray(e||[]))),this},filter:function(e,i){var r,h=new t.List,s=this
return this.each(function(t,n){r=e.call(i|s,t,n,s),r&&h.push(t)}),h}}),t.List=e.List=s,t.List})