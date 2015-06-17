steal("can/util","can/view/elements.js",function(e){var n=!0
try{document.createTextNode("")._=0}catch(t){n=!1}var r={},a={},s="ejs_"+Math.random(),i=0,u=function(e,t){var r=t||a,u=l(e,r)
return u?u:n||3!==e.nodeType?(++i,e[s]=(e.nodeName?"element_":"obj_")+i):(++i,r["text_"+i]=e,"text_"+i)},l=function(e,t){if(n||3!==e.nodeType)return e[s]
for(var r in t)if(t[r]===e)return r},c=[].splice,o=[].push,p=function(e){for(var n=0,t=0,r=e.length;r>t;t++){var a=e[t]
a.nodeType?n++:n+=p(a)}return n},f=function(e,n){for(var t={},r=0,a=e.length;a>r;r++){var s=d.first(e[r])
t[u(s,n)]=e[r]}return t},d={id:u,update:function(n,t){var r=d.unregisterChildren(n)
t=e.makeArray(t)
var a=n.length
return c.apply(n,[0,a].concat(t)),n.replacements?d.nestReplacements(n):d.nestList(n),r},nestReplacements:function(e){for(var n=0,t={},r=f(e.replacements,t),a=e.replacements.length;n<e.length&&a;){var s=e[n],i=r[l(s,t)]
i&&(e.splice(n,p(i),i),a--),n++}e.replacements=[]},nestList:function(e){for(var n=0;n<e.length;){var t=e[n],a=r[u(t)]
a?a!==e&&e.splice(n,p(a),a):r[u(t)]=e,n++}},last:function(e){var n=e[e.length-1]
return n.nodeType?n:d.last(n)},first:function(e){var n=e[0]
return n.nodeType?n:d.first(n)},flatten:function(e){for(var n=[],t=0;t<e.length;t++){var r=e[t]
r.nodeType?n.push(r):n.push.apply(n,d.flatten(r))}return n},register:function(e,n,t){return e.unregistered=n,e.parentList=t,t===!0?e.replacements=[]:t?(t.replacements.push(e),e.replacements=[]):d.nestList(e),e},unregisterChildren:function(n){var t=[]
return e.each(n,function(e){e.nodeType?(n.replacements||delete r[u(e)],t.push(e)):o.apply(t,d.unregister(e))}),t},unregister:function(e){var n=d.unregisterChildren(e)
if(e.unregistered){var t=e.unregistered
delete e.unregistered,delete e.replacements,t()}return n},nodeMap:r}
return e.view.nodeLists=d,d})