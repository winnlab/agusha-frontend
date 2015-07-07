steal("can/util","can/observe",function(t){var e=t.define={},n=function(t,e,n){var i
return n?(i=n[e]?n[e]:n["*"],i&&i[t]):void 0}
t.Map.helpers.define=function(n){var i=n.prototype.define
n.define&&t.dev.warn("The define property should be on the map's prototype properties, not the static properies."),n.defaultGenerators={}
for(var r in i){var a=i[r].type
"string"==typeof a&&"object"==typeof e.types[a]&&(delete i[r].type,t.extend(i[r],e.types[a])),"value"in i[r]&&("function"==typeof i[r].value?n.defaultGenerators[r]=i[r].value:n.defaults[r]=i[r].value),"function"==typeof i[r].Value&&!function(t){n.defaultGenerators[r]=function(){return new t}}(i[r].Value)}}
var i=t.Map.prototype._setupDefaults
t.Map.prototype._setupDefaults=function(t){var e=i.call(this),n={},r=this.constructor,a=this._get
this._get=function(t){return s=-1!==t.indexOf(".")?t.substr(0,t.indexOf(".")):s,s in e&&!(s in n)&&(this.attr(s,e[s]),n[s]=!0),a.apply(this,arguments)}
for(var s in r.defaultGenerators)t&&s in t||(e[s]=r.defaultGenerators[s].call(this))
return this._get=a,e}
var r=t.Map.prototype,a=r.__set
r.__set=function(e,i,r,s,o){var u,l=function(n){clearTimeout(u)
var i=o&&o.call(p,n)
return i!==!1&&t.trigger(p,"error",[e,n],!0),!1},p=this,f=n("set",e,this.define),c=n("get",e,this.define)
if(f){t.batch.start()
var h=!1,d=f.call(this,i,function(t){c?p[e](t):a.call(p,e,t,r,s,l),h=!0,clearTimeout(u)},l,c?this[e].computeInstance.lastSetValue.get():r)
return c?(void 0!==d&&!h&&f.length>=2&&this[e](d),void t.batch.stop()):void 0===d&&!h&&f.length>=2?(u=setTimeout(function(){t.dev.warn('can/map/setter.js: Setter "'+e+'" did not return a value or call the setter callback.')},t.dev.warnTimeout),void t.batch.stop()):(h||a.call(p,e,0===f.length&&void 0===d?i:d,r,s,l),t.batch.stop(),this)}return a.call(p,e,i,r,s,l),this},e.types={date:function(t){var e=typeof t
return"string"===e?(t=Date.parse(t),isNaN(t)?null:new Date(t)):"number"===e?new Date(t):t},number:function(t){return+t},"boolean":function(t){return"false"!==t&&"0"!==t&&t?!0:!1},htmlbool:function(t){return"string"==typeof t||!!t},"*":function(t){return t},string:function(t){return""+t},compute:{set:function(t,e,n,i){return t.isComputed?t:i&&i.isComputed?(i(t),i):t},get:function(t){return t&&t.isComputed?t():t}}}
var s=r.__type
r.__type=function(i,r){var a=n("type",r,this.define),o=n("Type",r,this.define),u=i
return"string"==typeof a&&(a=e.types[a]),a||o?(a&&(u=a.call(this,u,r)),!o||u instanceof o||(u=new o(u)),u):(t.isPlainObject(u)&&u.define&&(u=t.Map.extend(u),u=new u),s.call(this,u,r))}
var o=r._remove
r._remove=function(e,i){var r,a=n("remove",e,this.define)
return a?(t.batch.start(),r=a.call(this,i),r===!1?void t.batch.stop():(r=o.call(this,e,i),t.batch.stop(),r)):o.call(this,e,i)}
var u=r._setupComputes
r._setupComputes=function(e){u.apply(this,arguments)
for(var n in this.define){var i=this.define[n],r=i.get
r&&(this[n]=t.compute.async(e[n],r,this),this._computedBindings[n]={count:0})}}
var l=t.Map.helpers._serialize
t.Map.helpers._serialize=function(t,e,n){return p(t,e,n)}
var p=function(t,e,i){var r="*"===e?!1:n("serialize",e,t.define)
return void 0===r?l.apply(this,arguments):r!==!1?"function"==typeof r?r.call(t,i,e):l.apply(this,arguments):void 0},f=r.serialize
return r.serialize=function(t){var e=f.apply(this,arguments)
if(t)return e
var n,i
for(var r in this.define)r in e||(n=this.define&&this.define[r]&&this.define[r].serialize,n&&(i=p(this,r,this.attr(r)),void 0!==i&&(e[r]=i)))
return e},t.define})