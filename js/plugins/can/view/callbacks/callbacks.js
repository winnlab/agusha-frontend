steal("can/util","can/view",function(t){var e=t.view.attr=function(t,e){if(!e){var n=a[t]
if(!n)for(var i=0,o=r.length;o>i;i++){var s=r[i]
if(s.match.test(t)){n=s.handler
break}}return n}"string"==typeof t?a[t]=e:r.push({match:t,handler:e})},a={},r=[],n=/[-\:]/,i=t.view.tag=function(e,a){if(!a){var r=o[e.toLowerCase()]
return!r&&n.test(e)&&(r=function(){}),r}void 0!==o[e.toLowerCase()]&&t.dev.warn("Custom tag: "+e.toLowerCase()+"is already defined"),t.global.html5&&(t.global.html5.elements+=" "+e,t.global.html5.shivDocument()),o[e.toLowerCase()]=a},o={}
return t.view.callbacks={_tags:o,_attributes:a,_regExpAttributes:r,tag:i,attr:e,tagHandler:function(e,a,r){var n,i=r.options.attr("tags."+a),s=i||o[a],l=r.scope
if(s){var c=t.__clearReading()
n=s(e,r),t.__setReading(c)}else n=l
if(s||t.dev.warn("can/view/scanner.js: No custom element found for "+a),n&&r.subtemplate){l!==n&&(l=l.add(n))
var v=r.subtemplate(l,r.options),f="string"==typeof v?t.view.frag(v):v
t.appendChild(e,f)}}},t.view.callbacks})