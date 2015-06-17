steal("can/util","can/view/elements.js","can/view","can/view/node_lists","can/view/parser",function(e,t,n,r,a){t=t||e.view.elements,r=r||e.view.NodeLists,a=a||e.view.parser
var i=function(t,n,r){var a=!1,i=function(){return a||(a=!0,r(o),e.unbind.call(t,"removed",i)),!0},o={teardownCheck:function(e){return e?!1:i()}}
return e.bind.call(t,"removed",i),n(o),o},o=function(e,t,n){return i(e,function(){t.bind("change",n)},function(e){t.unbind("change",n),e.nodeList&&r.unregister(e.nodeList)})},c=function(e){var t,n={}
return a.parseAttrs(e,{attrStart:function(e){n[e]="",t=e},attrValue:function(e){n[t]+=e},attrEnd:function(){}}),n},u=[].splice,s=function(e){return e&&e.nodeType},d=function(e){e.childNodes.length||e.appendChild(document.createTextNode(""))},l={list:function(n,a,o,c,s,d){var f,p=d||[n],v=[],h=!1,g=function(n,a,i){if(h){var s=document.createDocumentFragment(),l=[],f=[]
e.each(a,function(t,n){var a=[]
d&&r.register(a,null,!0)
var u=e.compute(n+i),p=o.call(c,t,u,a),v="string"==typeof p,h=e.frag(p)
h=v?e.view.hookup(h):h
var g=e.makeArray(h.childNodes)
d?(r.update(a,g),l.push(a)):l.push(r.register(g)),s.appendChild(h),f.push(u)})
var g=i+1
if(p[g]){var b=r.first(p[g])
e.insertBefore(b.parentNode,s,b)}else t.after(1===g?[w]:[r.last(p[g-1])],s)
u.apply(p,[g,0].concat(l)),u.apply(v,[i,0].concat(f))
for(var m=i+f.length,N=v.length;N>m;m++)v[m](m)}},b=function(t,n,a,i,o){if(h&&(i||!A.teardownCheck(w.parentNode))){0>a&&(a=v.length+a)
var c=p.splice(a+1,n.length),u=[]
e.each(c,function(e){var t=r.unregister(e);[].push.apply(u,t)}),v.splice(a,n.length)
for(var s=a,d=v.length;d>s;s++)v[s](s)
o?r.unregister(p):e.remove(e.$(u))}},m=function(t,n,a,i){if(h){a+=1,i+=1
var o,c=p[a],u=e.frag(r.flatten(p[i]))
o=a>i?r.last(c).nextSibling:r.first(c)
var s=p[0].parentNode
s.insertBefore(u,o)
var d=p[i];[].splice.apply(p,[i,1]),[].splice.apply(p,[a,0,d])}},w=document.createTextNode(""),N=function(e){f&&f.unbind&&f.unbind("add",g).unbind("remove",b).unbind("move",m),b({},{length:p.length-1},0,!0,e)},k=function(t,n){N(),f=n||[],f.bind&&f.bind("add",g).bind("remove",b).bind("move",m),h=!0,g({},f,0),h=!1,e.batch.afterPreviousEvents(function(){h=!0})}
s=t.getParentNode(n,s)
var A=i(s,function(){e.isFunction(a)&&a.bind("change",k)},function(){e.isFunction(a)&&a.unbind("change",k),N(!0)})
d?(t.replace(p,w),r.update(p,[w]),d.unregistered=A.teardownCheck):l.replace(p,w,A.teardownCheck),k({},e.isFunction(a)?a():a)},html:function(n,a,i,c){var u
i=t.getParentNode(n,i),u=o(i,a,function(e,t){var n=r.first(l).parentNode
n&&f(t),u.teardownCheck(r.first(l).parentNode)})
var l=c||[n],f=function(n){var a="function"==typeof n,o=s(n),c=e.frag(a?"":n),u=e.makeArray(l)
d(c),o||a||(c=e.view.hookup(c,i)),u=r.update(l,c.childNodes),a&&n(c.childNodes[0]),t.replace(u,c)}
u.nodeList=l,c?c.unregistered=u.teardownCheck:r.register(l,u.teardownCheck),f(a())},replace:function(n,a,i){var o=n.slice(0),c=e.frag(a)
return r.register(n,i),"string"==typeof a&&(c=e.view.hookup(c,n[0].parentNode)),r.update(n,c.childNodes),t.replace(o,c),n},text:function(n,a,i,c){var u=t.getParentNode(n,i),s=o(u,a,function(t,n){"unknown"!=typeof d.nodeValue&&(d.nodeValue=e.view.toStr(n)),s.teardownCheck(d.parentNode)}),d=document.createTextNode(e.view.toStr(a()))
c?(c.unregistered=s.teardownCheck,s.nodeList=c,r.update(c,[d]),t.replace([n],d)):s.nodeList=l.replace([n],d,s.teardownCheck)},setAttributes:function(t,n){var r=c(n)
for(var a in r)e.attr.set(t,a,r[a])},attributes:function(n,r,a){var i={},u=function(r){var a,o=c(r)
for(a in o){var u=o[a],s=i[a]
u!==s&&e.attr.set(n,a,u),delete i[a]}for(a in i)t.removeAttr(n,a)
i=o}
o(n,r,function(e,t){u(t)}),arguments.length>=3?i=c(a):u(r())},attributePlaceholder:"__!!__",attributeReplace:/__!!__/g,attribute:function(n,r,a){o(n,a,function(){t.setAttr(n,r,u.render())})
var i,c=e.$(n)
i=e.data(c,"hooks"),i||e.data(c,"hooks",i={})
var u,s=t.getAttr(n,r),d=s.split(l.attributePlaceholder),f=[]
f.push(d.shift(),d.join(l.attributePlaceholder)),i[r]?i[r].computes.push(a):i[r]={render:function(){var e=0,n=s?s.replace(l.attributeReplace,function(){return t.contentText(u.computes[e++]())}):t.contentText(u.computes[e++]())
return n},computes:[a],batchNum:void 0},u=i[r],f.splice(1,0,a()),t.setAttr(n,r,f.join(""))},specialAttribute:function(e,n,r){o(e,r,function(r,a){t.setAttr(e,n,p(a))}),t.setAttr(e,n,p(r()))},simpleAttribute:function(e,n,r){o(e,r,function(r,a){t.setAttr(e,n,a)}),t.setAttr(e,n,r())}}
l.attr=l.simpleAttribute,l.attrs=l.attributes
var f=/(\r|\n)+/g,p=function(e){var n=/^["'].*["']$/
return e=e.replace(t.attrReg,"").replace(f,""),n.test(e)?e.substr(1,e.length-2):e}
return e.view.live=l,l})