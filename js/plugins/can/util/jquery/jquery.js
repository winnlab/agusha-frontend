steal("jquery","can/util/can.js","can/util/attr","can/event","can/util/array/each.js","can/util/inserted",function(t,e,n){var r=function(t){return t.nodeName&&(1===t.nodeType||9===t.nodeType)||t==window}
t=t||window.jQuery,t.extend(e,t,{trigger:function(n,a,i,u){r(n)?t.event.trigger(a,i,n,!u):n.trigger?n.trigger(a,i):("string"==typeof a&&(a={type:a}),a.target=a.target||n,i&&(i.length&&"string"==typeof i?i=[i]:i.length||(i=[i])),i||(i=[]),e.dispatch.call(n,a,i))},event:e.event,addEvent:e.addEvent,removeEvent:e.removeEvent,buildFragment:function(e,n){var r
return e=[e],n=n||document,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,r=t.buildFragment(e,n),r.cacheable?t.clone(r.fragment):r.fragment||r},$:t,each:e.each,bind:function(n,a){return this.bind&&this.bind!==e.bind?this.bind(n,a):r(this)?t.event.add(this,n,a):e.addEvent.call(this,n,a),this},unbind:function(n,a){return this.unbind&&this.unbind!==e.unbind?this.unbind(n,a):r(this)?t.event.remove(this,n,a):e.removeEvent.call(this,n,a),this},delegate:function(n,a,i){return this.delegate?this.delegate(n,a,i):r(this)?t(this).delegate(n,a,i):e.bind.call(this,a,i),this},undelegate:function(n,a,i){return this.undelegate?this.undelegate(n,a,i):r(this)?t(this).undelegate(n,a,i):e.unbind.call(this,a,i),this},proxy:function(t,e){return function(){return t.apply(e,arguments)}},attr:n}),e.on=e.bind,e.off=e.unbind,t.each(["append","filter","addClass","remove","data","get","has"],function(t,n){e[n]=function(t){return t[n].apply(t,e.makeArray(arguments).slice(1))}})
var a=t.cleanData
t.cleanData=function(n){t.each(n,function(t,n){n&&e.trigger(n,"removed",[],!1)}),a(n)}
var i,u=t.fn.domManip
if(t.fn.domManip=function(){for(var t=1;t<arguments.length;t++)if("function"==typeof arguments[t]){i=t
break}return u.apply(this,arguments)},t(document.createElement("div")).append(document.createElement("div")),t.fn.domManip=2===i?function(t,n,r){return u.call(this,t,n,function(t){var n
11===t.nodeType&&(n=e.makeArray(t.childNodes))
var a=r.apply(this,arguments)
return e.inserted(n?n:[t]),a})}:function(t,n){return u.call(this,t,function(t){var r
11===t.nodeType&&(r=e.makeArray(t.childNodes))
var a=n.apply(this,arguments)
return e.inserted(r?r:[t]),a})},e.attr.MutationObserver)t.event.special.attributes={setup:function(){var t=this,n=new e.attr.MutationObserver(function(n){n.forEach(function(n){var r=e.simpleExtend({},n)
e.trigger(t,r,[])})})
n.observe(this,{attributes:!0,attributeOldValue:!0}),e.data(e.$(this),"canAttributesObserver",n)},teardown:function(){e.data(e.$(this),"canAttributesObserver").disconnect(),t.removeData(this,"canAttributesObserver")}}
else{var s=t.attr
t.attr=function(t,n){var r,a
arguments.length>=3&&(r=s.call(this,t,n))
var i=s.apply(this,arguments)
return arguments.length>=3&&(a=s.call(this,t,n)),a!==r&&e.attr.trigger(t,n,r),i}
var d=t.removeAttr
t.removeAttr=function(t,n){var r=s.call(this,t,n),a=d.apply(this,arguments)
return null!=r&&e.attr.trigger(t,n,r),a},t.event.special.attributes={setup:function(){e.data(e.$(this),"canHasAttributesBindings",!0)},teardown:function(){t.removeData(this,"canHasAttributesBindings")}}}return function(){var t="<-\n>",n=e.buildFragment(t,document)
if(t!==n.childNodes[0].nodeValue){var r=e.buildFragment
e.buildFragment=function(t,e){var n=r(t,e)
return 1===n.childNodes.length&&3===n.childNodes[0].nodeType&&(n.childNodes[0].nodeValue=t),n}}}(),t.event.special.inserted={},t.event.special.removed={},e})