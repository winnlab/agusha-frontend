steal("can/util","can/route",function(t){"use strict"
if(window.history&&history.pushState){t.route.bindings.pushstate={root:"/",matchSlashes:!1,paramsMatcher:/^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,querySeparator:"?",bind:function(){t.delegate.call(t.$(document.documentElement),"a","click",e),t.each(o,function(e){r[e]=window.history[e],window.history[e]=function(n,a,o){var i=0===o.indexOf("http"),l=window.location.search+window.location.hash;(!i&&o!==window.location.pathname+l||i&&o!==window.location.href+l)&&(r[e].apply(window.history,arguments),t.route.setState())}}),t.bind.call(window,"popstate",t.route.setState)},unbind:function(){t.undelegate.call(t.$(document.documentElement),"click","a",e),t.each(o,function(t){window.history[t]=r[t]}),t.unbind.call(window,"popstate",t.route.setState)},matchingPartOfURL:function(){var t=n(),e=location.pathname+location.search,a=e.indexOf(t)
return e.substr(a+t.length)},setURL:function(e,n){var o="pushState"
if(i&&-1===e.indexOf("#")&&window.location.hash&&(e+=window.location.hash),l.length>0){for(var r=[],u=0,c=n.length;c>u;u++)-1!==t.inArray(n[u],l)&&(o="replaceState"),-1!==t.inArray(n[u],l.once)&&r.push(n[u])
r.length>0&&(a(l,r),a(l.once,r))}window.history[o](null,null,t.route._call("root")+e)}}
var e=function(e){if(!(e.isDefaultPrevented?e.isDefaultPrevented():e.defaultPrevented===!0)){var a=this._node||this,o=a.host||window.location.host
if(window.location.host===o){var r=n()
if(0===a.pathname.indexOf(r)){var l=(a.pathname+a.search).substr(r.length),u=t.route.deparam(l)
u.hasOwnProperty("route")&&(i=!0,window.history.pushState(null,null,a.href),e.preventDefault&&e.preventDefault())}}}},n=function(){var e=location.protocol+"//"+location.host,n=t.route._call("root"),a=n.indexOf(e)
return 0===a?n.substr(e.length):n},a=function(e,n){for(var a,o=n.length-1;o>=0;o--)-1!==(a=t.inArray(n[o],e))&&e.splice(a,1)},o=["pushState","replaceState"],r={},i=!1,l=[]
t.route.defaultBinding="pushstate",t.extend(t.route,{replaceStateOn:function(){var e=t.makeArray(arguments)
Array.prototype.push.apply(l,e)},replaceStateOnce:function(){var e=t.makeArray(arguments)
l.once=t.makeArray(l.once),Array.prototype.push.apply(l.once,e),t.route.replaceStateOn.apply(this,arguments)},replaceStateOff:function(){var e=t.makeArray(arguments)
a(l,e)}})}return t})