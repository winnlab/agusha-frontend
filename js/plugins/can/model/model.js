steal("can/util","can/map","can/list",function(t){var e=function(e,r,i){var n=new t.Deferred
return e.then(function(){var e=t.makeArray(arguments),s=!0
try{e[0]=i.apply(r,e)}catch(o){s=!1,n.rejectWith(n,[o].concat(e))}s&&n.resolveWith(n,e)},function(){n.rejectWith(this,arguments)}),"function"==typeof e.abort&&(n.abort=function(){return e.abort()}),n},r=0,i=function(e){return t.__reading(e,e.constructor.id),e.__get(e.constructor.id)},n=function(e,r,i,n,s,o){var a={}
if("string"==typeof e){var u=e.split(/\s+/)
a.url=u.pop(),u.length&&(a.type=u.pop())}else t.extend(a,e)
return a.data="object"!=typeof r||t.isArray(r)?r:t.extend(a.data||{},r),a.url=t.sub(a.url,a.data,!0),t.ajax(t.extend({type:i||"post",dataType:n||"json",success:s,error:o},a))},s=function(r,n,s,o,a){var u
t.isArray(r)?(u=r[1],r=r[0]):u=r.serialize(),u=[u]
var c,d,l=r.constructor
return("update"===n||"destroy"===n)&&u.unshift(i(r)),d=l[n].apply(l,u),c=e(d,r,function(t){return r[a||n+"d"](t,d),r}),d.abort&&(c.abort=function(){d.abort()}),c.then(s,o),c},o={models:function(e,r,i){if(t.Model._reqs++,e){if(e instanceof this.List)return e
var n=this,s=[],o=n.List||f,a=r instanceof t.List?r:new o,u=e instanceof f,c=u?e.serialize():e
if(c=n.parseModels(c,i),c.data&&(e=c,c=c.data),void 0===c)throw Error("Could not get any raw data while converting using .models")
return c.length||t.dev.warn("model.js models has no data."),a.length&&a.splice(0),t.each(c,function(t){s.push(n.model(t,i))}),a.push.apply(a,s),t.isArray(e)||t.each(e,function(t,e){"data"!==e&&a.attr(e,t)}),setTimeout(t.proxy(this._clean,this),1),a}},model:function(e,r,i){if(e){e="function"==typeof e.serialize?e.serialize():this.parseModel(e,i)
var n=e[this.id];(n||0===n)&&this.store[n]&&(r=this.store[n])
var s=r&&t.isFunction(r.attr)?r.attr(e,this.removeAttr||!1):new this(e)
return s}}},a={parseModel:function(e){return function(r){return e?t.getObject(e,r):r}},parseModels:function(e){return function(r){if(t.isArray(r))return r
e=e||"data"
var i=t.getObject(e,r)
if(!t.isArray(i))throw Error("Could not get any raw data while converting using .models")
return i}}},u={create:{url:"_shortName",type:"post"},update:{data:function(e,r){r=r||{}
var i=this.id
return r[i]&&r[i]!==e&&(r["new"+t.capitalize(e)]=r[i],delete r[i]),r[i]=e,r},type:"put"},destroy:{type:"delete",data:function(t,e){return e=e||{},e.id=e[this.id]=t,e}},findAll:{url:"_shortName"},findOne:{}},c=function(t,e){return function(r){return r=t.data?t.data.apply(this,arguments):r,n(e||this[t.url||"_url"],r,t.type||"get")}},d=function(t,e){if(t.resource){var r=t.resource.replace(/\/+$/,"")
return"findAll"===e||"create"===e?r:r+"/{"+t.id+"}"}}
t.Model=t.Map.extend({fullName:"can.Model",_reqs:0,setup:function(e,i,n,s){if("string"!=typeof i&&(s=n,n=i),s||(t.dev.warn("can/model/model.js: can.Model extended without static properties."),s=n),this.store={},t.Map.setup.apply(this,arguments),t.Model){n&&n.List?(this.List=n.List,this.List.Map=this):this.List=e.List.extend({Map:this},{})
var l=this,p=t.proxy(this._clean,l)
t.each(u,function(r,i){if(n&&n[i]&&("string"==typeof n[i]||"object"==typeof n[i])?l[i]=c(r,n[i]):n&&n.resource&&!t.isFunction(n[i])&&(l[i]=c(r,d(l,i))),l["make"+t.capitalize(i)]){var s=l["make"+t.capitalize(i)](l[i])
t.Construct._overwrite(l,e,i,function(){t.Model._reqs++
var e=s.apply(this,arguments),r=e.then(p,p)
return r.abort=e.abort,r})}})
var h={}
t.each(o,function(r,i){var s="parse"+t.capitalize(i),o=n&&n[i]||l[i]
"string"==typeof o?(l[s]=o,t.Construct._overwrite(l,e,i,r)):n&&n[i]&&(h[s]=!0)}),t.each(a,function(r,i){var s=n&&n[i]||l[i]
if("string"==typeof s)t.Construct._overwrite(l,e,i,r(s))
else if(!(n&&t.isFunction(n[i])||l[i])){var o=r()
o.useModelConverter=h[i],t.Construct._overwrite(l,e,i,o)}}),"can.Model"!==l.fullName&&l.fullName||(l.fullName="Model"+ ++r),t.Model._reqs=0,this._url=this._shortName+"/{"+this.id+"}"}},_ajax:c,_makeRequest:s,_clean:function(){if(t.Model._reqs--,!t.Model._reqs)for(var e in this.store)this.store[e]._bindings||delete this.store[e]
return arguments[0]},models:o.models,model:o.model},{setup:function(e){var r=e&&e[this.constructor.id]
t.Model._reqs&&null!=r&&(this.constructor.store[r]=this),t.Map.prototype.setup.apply(this,arguments)},isNew:function(){var t=i(this)
return!(t||0===t)},save:function(t,e){return s(this,this.isNew()?"create":"update",t,e)},destroy:function(e,r){if(this.isNew()){var i=this,n=t.Deferred()
return n.then(e,r),n.done(function(t){i.destroyed(t)}).resolve(i)}return s(this,"destroy",e,r,"destroyed")},_bindsetup:function(){var e=this.__get(this.constructor.id)
return null!=e&&(this.constructor.store[e]=this),t.Map.prototype._bindsetup.apply(this,arguments)},_bindteardown:function(){return delete this.constructor.store[i(this)],t.Map.prototype._bindteardown.apply(this,arguments)},___set:function(e,r){t.Map.prototype.___set.call(this,e,r),e===this.constructor.id&&this._bindings&&(this.constructor.store[i(this)]=this)}})
var l=function(t){return function(e,r,i){return this[t](e,null,i)}},p=function(t){return this.parseModel.useModelConverter?this.model(t):this.parseModel(t)},h={makeFindAll:l("models"),makeFindOne:l("model"),makeCreate:p,makeUpdate:p,makeDestroy:p}
t.each(h,function(r,i){t.Model[i]=function(i){return function(){var n=t.makeArray(arguments),s=t.isFunction(n[1])?n.splice(0,1):n.splice(0,2),o=e(i.apply(this,s),this,r)
return o.then(n[0],n[1]),o}}}),t.each(["created","updated","destroyed"],function(e){t.Model.prototype[e]=function(r){var i=this,n=i.constructor
r&&"object"==typeof r&&this.attr(t.isFunction(r.attr)?r.attr():r),t.dispatch.call(this,{type:"change",target:this},[e]),t.dev.log("Model.js - "+n.shortName+" "+e),t.dispatch.call(n,e,[this])}})
var f=t.Model.List=t.List.extend({_bubbleRule:function(e,r){var i=t.List._bubbleRule(e,r)
return i.push("destroyed"),i}},{setup:function(e){t.isPlainObject(e)&&!t.isArray(e)?(t.List.prototype.setup.apply(this),this.replace(t.isDeferred(e)?e:this.constructor.Map.findAll(e))):t.List.prototype.setup.apply(this,arguments),this._init=1,this.bind("destroyed",t.proxy(this._destroyed,this)),delete this._init},_destroyed:function(t,e){if(/\w+/.test(e))for(var r;(r=this.indexOf(t.target))>-1;)this.splice(r,1)}})
return t.Model})