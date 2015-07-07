steal("can/util","can/util/bind","can/util/batch","can/compute/proto_compute.js",function(t){t.compute=function(n,u,e,o){var c=new t.Compute(n,u,e,o),r=function(t){return arguments.length?c.set(t):c.get()}
return r.bind=t.proxy(c.bind,c),r.unbind=t.proxy(c.unbind,c),r.isComputed=c.isComputed,r.clone=function(e){return"function"==typeof n&&(u=e),t.compute(n,u,e,o)},r.computeInstance=c,r}
var n,u=function(){},e=function(){for(var t=0,e=n.length;e>t;t++)n[t].unbind("change",u)
n=null}
return t.compute.temporarilyBind=function(t){t.bind("change",u),n||(n=[],setTimeout(e,10)),n.push(t)},t.compute.truthy=function(n){return t.compute(function(){var t=n()
return"function"==typeof t&&(t=t()),!!t})},t.compute.async=function(n,u,e){return t.compute(n,{fn:u,context:e})},t.compute.read=t.Compute.read,t.compute.set=t.Compute.set,t.compute})