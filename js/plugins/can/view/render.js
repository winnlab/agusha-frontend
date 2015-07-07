steal("can/view","./elements","can/view/live","can/util/string",function(t,n,e){var i,r=[],u=function(t){var e=n.tagMap[t]||"span"
return"span"===e?"@@!!@@":"<"+e+">"+u(e)+"</"+e+">"},o=function(n,e){if("string"==typeof n)return n
if(!n&&0!==n)return""
var i=n.hookup&&function(t,e){n.hookup.call(n,t,e)}||"function"==typeof n&&n
return i?e?"<"+e+" "+t.view.hook(i)+"></"+e+">":(r.push(i),""):""+n},c=function(n,e){return"string"==typeof n||"number"==typeof n?t.esc(n):o(n,e)},s=!1,a=function(){}
return t.extend(t.view,{live:e,setupLists:function(){var n,e=t.view.lists
return t.view.lists=function(t,e){return n={list:t,renderer:e},Math.random()},function(){return t.view.lists=e,n}},getHooks:function(){var t=r.slice(0)
return i=t,r=[],t},onlytxt:function(t,n){return c(n.call(t))},txt:function(f,p,l,v,h){var g,w,b,d,y=n.tagMap[p]||"span",k=!1,m=a
if(s)g=h.call(v)
else{("string"==typeof l||1===l)&&(s=!0)
var x=t.view.setupLists()
m=function(){b.unbind("change",a)},b=t.compute(h,v,!1),b.bind("change",a),w=x(),g=b(),s=!1,k=b.computeInstance.hasDependencies}if(w)return m(),"<"+y+t.view.hook(function(t,n){e.list(t,w.list,w.renderer,v,n)})+"></"+y+">"
if(!k||"function"==typeof g)return m(),(s||2===f||!f?o:c)(g,0===l&&y)
var M=n.tagToContentPropMap[p]
return 0!==l||M?1===l?(r.push(function(t){e.attributes(t,b,b()),m()}),b()):2===f?(d=l,r.push(function(t){e.specialAttribute(t,d,b),m()}),b()):(d=0===l?M:l,(0===l?i:r).push(function(t){e.attribute(t,d,b),m()}),e.attributePlaceholder):"<"+y+t.view.hook(f&&"object"!=typeof g?function(t,n){e.text(t,b,n),m()}:function(t,n){e.html(t,b,n),m()})+">"+u(y)+"</"+y+">"}}),t})