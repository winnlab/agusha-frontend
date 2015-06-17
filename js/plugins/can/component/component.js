steal("can/util","can/view/callbacks","can/control","can/observe","can/view/mustache","can/view/bindings",function(t,e){var n=/^(dataViewId|class|id)$/i,o=/\{([^\}]+)\}/g,i=t.Component=t.Construct.extend({setup:function(){if(t.Construct.setup.apply(this,arguments),t.Component){var e=this,n=this.prototype.scope||this.prototype.viewModel
if(this.Control=s.extend(this.prototype.events),n&&("object"!=typeof n||n instanceof t.Map)?n.prototype instanceof t.Map&&(this.Map=n):this.Map=t.Map.extend(n||{}),this.attributeScopeMappings={},t.each(this.Map?this.Map.defaults:{},function(t,n){"@"===t&&(e.attributeScopeMappings[n]=n)}),this.prototype.template)if("function"==typeof this.prototype.template){var o=this.prototype.template
this.renderer=function(){return t.view.frag(o.apply(null,arguments))}}else this.renderer=t.view.mustache(this.prototype.template)
t.view.tag(this.prototype.tag,function(t,n){new e(t,n)})}}},{setup:function(o,i){var s,a,r={},c=this,p=(void 0===this.leakScope?!1:!this.leakScope)&&this.template,u={},l=this.scope||this.viewModel,h={},d=[],f=function(){for(var t=0,e=d.length;e>t;t++)d[t]()}
if(t.each(this.constructor.attributeScopeMappings,function(e,n){r[n]=o.getAttribute(t.hyphenate(e))}),t.each(t.makeArray(o.attributes),function(o){var a=t.camelize(o.nodeName.toLowerCase()),p=o.value
if(n.test(a)&&"{"===p[0]&&"}"===p[p.length-1]&&t.dev.warn("can/component: looks like you're trying to pass "+a+" as an attribute into a component, but it is not a supported attribute"),!(c.constructor.attributeScopeMappings[a]||n.test(a)||e.attr(o.nodeName))){if("{"===p[0]&&"}"===p[p.length-1])p=p.substr(1,p.length-2)
else if("legacy"!==i.templateType)return void(r[a]=p)
var l=i.scope.computeData(p,{args:[]}),f=l.compute,m=function(e,n){h[a]=(h[a]||0)+1,s.attr(a,n),t.batch.afterPreviousEvents(function(){--h[a]})}
f.bind("change",m),r[a]=f(),f.computeInstance.hasDependencies?(d.push(function(){f.unbind("change",m)}),u[a]=l):f.unbind("change",m)}}),this.constructor.Map)s=new this.constructor.Map(r)
else if(l instanceof t.Map)s=l
else if(t.isFunction(l)){var m=l.call(this,r,i.scope,o)
s=m instanceof t.Map?m:m.prototype instanceof t.Map?new m(r):new(t.Map.extend(m))(r)}var v={}
t.each(u,function(t,e){v[e]=function(n,o){h[e]||t.compute(o)},s.bind(e,v[e])}),t.isEmptyObject(this.constructor.attributeScopeMappings)&&"legacy"===i.templateType||t.bind.call(o,"attributes",function(e){var i=t.camelize(e.attributeName)
u[i]||n.test(i)||s.attr(i,o.getAttribute(e.attributeName))}),this.scope=this.viewModel=s,t.data(t.$(o),"scope",this.scope),t.data(t.$(o),"viewModel",this.scope)
var g=p?this.scope:i.scope.add(this.scope),b={helpers:{}}
if(t.each(this.helpers||{},function(e,n){t.isFunction(e)&&(b.helpers[n]=function(){return e.apply(s,arguments)})}),d.push(function(){t.each(v,function(t,e){s.unbind(e,v[e])})}),this._control=new this.constructor.Control(o,{scope:this.scope,viewModel:this.scope}),this._control&&this._control.destroy){var y=this._control.destroy
this._control.destroy=function(){y.apply(this,arguments),f()},this._control.on()}else t.bind.call(o,"removed",function(){f()})
var w=t.view.nodeLists.register([],void 0,!0)
d.push(function(){t.view.nodeLists.unregister(w)}),this.constructor.renderer?(b.tags||(b.tags={}),b.tags.content=function M(e,n){var o=i.subtemplate||n.subtemplate
if(o){delete b.tags.content
var s=p&&o===i.subtemplate?i:n
t.view.live.replace([e],o(s.scope,s.options)),b.tags.content=M}},a=this.constructor.renderer(g,i.options.add(b),w)):a="legacy"===i.templateType?t.view.frag(i.subtemplate?i.subtemplate(g,i.options.add(b)):""):i.subtemplate?i.subtemplate(g,i.options.add(b),w):document.createDocumentFragment(),t.appendChild(o,a),t.view.nodeLists.update(w,o.childNodes)}}),s=t.Control.extend({_lookup:function(t){return[t.scope,t,window]},_action:function(e,n,i){var s,a
if(o.lastIndex=0,s=o.test(e),i||!s){if(s){a=t.compute(function(){var i,s=e.replace(o,function(e,o){var s
return"scope"===o||"viewModel"===o?(i=n.scope,""):(o=o.replace(/^(scope|^viewModel)\./,""),s=t.compute.read(n.scope,o.split("."),{isArgument:!0}).value,void 0===s&&(s=t.getObject(o)),"string"==typeof s?s:(i=s,""))}),a=s.split(/\s+/g),r=a.pop()
return{processor:this.processors[r]||this.processors.click,parts:[s,a.join(" "),r],delegate:i||void 0}},this)
var r=function(t,n){i._bindings.control[e](i.element),i._bindings.control[e]=n.processor(n.delegate||i.element,n.parts[2],n.parts[1],e,i)}
return a.bind("change",r),i._bindings.readyComputes[e]={compute:a,handler:r},a()}return t.Control._action.apply(this,arguments)}}},{setup:function(e,n){return this.scope=n.scope,this.viewModel=n.viewModel,t.Control.prototype.setup.call(this,e,n)},off:function(){this._bindings&&t.each(this._bindings.readyComputes||{},function(t){t.compute.unbind("change",t.handler)}),t.Control.prototype.off.apply(this,arguments),this._bindings.readyComputes={}}}),a=t.$
return a.fn&&(a.fn.scope=a.fn.viewModel=function(){return t.viewModel.apply(t,[this].concat(t.makeArray(arguments)))}),i})