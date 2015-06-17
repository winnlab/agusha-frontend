steal("can/util","./utils","./mustache_helpers","can/view/live","can/view/elements.js","can/view/scope","can/view/node_lists",function(e,t,n,r,i,a,s){r=r||e.view.live,i=i||e.view.elements,a=a||e.view.Scope,s=s||e.view.nodeLists
var o=/((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,u=/^(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(?:(.+?)=(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(.+))))$/,c=/(?:(?:^|(\r?)\n)(\s*)(\{\{([^\}]*)\}\}\}?)([^\S\n\r]*)($|\r?\n))|(\{\{([^\}]*)\}\}\}?)/g,l=function(e){return e&&"string"==typeof e.get},f=function(e,t,n,r){for(var i=document.createDocumentFragment(),a=0,s=e.length;s>a;a++)p(i,n.fn(t?e.attr(""+a):e[a],r))
return i},p=function(e,t){t&&e.appendChild("string"==typeof t?document.createTextNode(t):t)},d=function(e,t,n,r){for(var i="",a=0,s=e.length;s>a;a++)i+=n.fn(t?e.attr(""+a):e[a],r)
return i},h=function(t,n,r){var i=n.computeData(t,{isArgument:r,args:[n.attr("."),n]})
return e.compute.temporarilyBind(i.compute),i},v=function(e,t){var n=h(e,t,!0)
return n.compute.computeInstance.hasDependencies?n.compute:n.initialValue},g=function(e,t,n,r,i,a){i&&(e.fn=m(i,t,n,r)),a&&(e.inverse=m(a,t,n,r))},m=function(t,n,r,i){var a=function(e,r,i){return t(e||n,r,i)}
return function(t,s,o){var u=e.__clearReading()
void 0===t||t instanceof e.view.Scope||(t=n.add(t)),void 0===s||s instanceof x.Options||(s=r.add(s))
var c=a(t,s||r,o||i)
return e.__setReading(u),c}},x={expressionData:function(n){var r=[],i={},a=0
return(e.trim(n)+" ").replace(o,function(e,n){var s
a&&(s=n.match(u))?s[1]||s[2]?r.push(t.jsonParse(s[1]||s[2])):i[s[3]]=s[6]?{get:s[6]}:t.jsonParse(s[4]||s[5]):r.push({get:n}),a++}),{name:r.shift(),args:r,hash:i}},makeEvaluator:function(r,i,a,s,o,u,c,p){for(var m,x,y=[],_={},w={fn:function(){},inverse:function(){}},b=r.attr("."),k=o.name,O=o.args.length||!e.isEmptyObject(o.hash),D=0,j=o.args.length;j>D;D++){var E=o.args[D]
y.push(E&&l(E)?v(E.get,r,!0):E)}for(var L in o.hash)l(o.hash[L])?_[L]=v(o.hash[L].get,r):_[L]=o.hash[L]
if(l(k)){if(O&&(m=n.getHelper(k.get,i),m||"function"!=typeof b[k.get]||(m={fn:b[k.get]})),!m){var R=k.get,A=h(k.get,r,!1),N=A.compute
x=A.initialValue,A.reads&&1===A.reads.length&&A.root instanceof e.Map&&!e.isFunction(A.root[A.reads[0]])&&(N=e.compute(A.root,A.reads[0])),k=A.compute.computeInstance.hasDependencies?N:x,O||void 0!==x?"function"==typeof x&&(m={fn:x}):m=n.getHelper(R,i)}m||void 0!==x||e.dev.warn(O?'can/view/stache/mustache_core.js: Unable to find helper "'+o.name.get+'".':'can/view/stache/mustache_core.js: Unable to find key or helper "'+o.name.get+'".')}if("^"===s){var S=u
u=c,c=S}if(m)return g(w,r,i,a,u,c),e.simpleExtend(w,{context:b,scope:r,contexts:r,hash:_,nodeList:a,exprData:o}),y.push(w),function(){return m.fn.apply(b,y)||""}
if(!s)return k&&k.isComputed?k:function(){return""+(null!=k?k:"")}
if("#"===s||"^"===s){g(w,r,i,a,u,c)
var B=function(){var n
if(n=e.isFunction(k)&&k.isComputed?k():k,t.isArrayLike(n)){var a=t.isObserveLike(n)
return(a?n.attr("length"):n.length)?(p?d:f)(n,a,w,i):w.inverse(r,i)}return n?w.fn(n||r,i):w.inverse(r,i)}
return B.bindOnce=!1,B}},makeLiveBindingPartialRenderer:function(t,n){return t=e.trim(t),function(i,a,o){var u=[this]
u.expression=">"+t,s.register(u,null,n.directlyNested?o||!0:!0)
var c=e.compute(function(){var n,r=t,s=a.attr("partials."+r)
if(s)n=s.render?s.render(i,a):s(i,a)
else{var o=i.read(r,{isArgument:!0,returnObserveMethods:!0,proxyMethods:!1}).value
o&&(r=o),n=e.view.render(r,i,a)}return e.frag(n)})
r.html(this,c,this.parentNode,u)}},makeStringBranchRenderer:function(e,t){var n=_(t),r=e+t
return function(t,i,a,s){var o=t.__cache[r];(e||!o)&&(o=y(t,i,null,e,n,a,s,!0),e||(t.__cache[r]=o))
var u=o()
return null==u?"":""+u}},makeLiveBindingBranchRenderer:function(t,n,a){var o=_(n)
return function(u,c,l,f,p){var d=[this]
d.expression=n,s.register(d,null,a.directlyNested?l||!0:!0)
var h=y(u,c,d,t,o,f,p,a.tag),v=e.compute(h,null,!1,h.bindOnce===!1?!1:!0)
v.bind("change",e.k)
var g=v()
if("function"==typeof g){var m=e.__clearReading()
g(this),e.__setReading(m)}else v.computeInstance.hasDependencies?a.attr?r.simpleAttribute(this,a.attr,v):a.tag?r.attributes(this,v):a.text&&"object"!=typeof g?r.text(this,v,this.parentNode,d):r.html(this,v,this.parentNode,d):a.attr?e.attr.set(this,a.attr,g):a.tag?r.setAttributes(this,g):a.text&&"string"==typeof g?this.nodeValue=g:g&&i.replace([this],e.frag(g))
v.unbind("change",e.k)}},splitModeFromExpression:function(t,n){t=e.trim(t)
var r=t.charAt(0)
return"#/{&^>!".indexOf(r)>=0?t=e.trim(t.substr(1)):r=null,"{"===r&&n.node&&(r=null),{mode:r,expression:t}},cleanLineEndings:function(e){return e.replace(c,function(e,t,n,r,i,a,s,o,u,c){a=a||"",t=t||"",n=n||""
var l=w(i||u,{})
return o||">{".indexOf(l.mode)>=0?e:"^#!/".indexOf(l.mode)>=0?r+(0!==c&&s.length?t+"\n":""):n+r+a+(n.length||0!==c?t+"\n":"")})},Options:e.view.Scope.extend({init:function(t){t.helpers||t.partials||t.tags||(t={helpers:t}),e.view.Scope.prototype.init.apply(this,arguments)}})},y=x.makeEvaluator,_=x.expressionData,w=x.splitModeFromExpression
return x})