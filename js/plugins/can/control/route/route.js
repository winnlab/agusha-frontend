steal("can/util","can/route","can/control",function(t){return t.Control.processors.route=function(r,u,n,o,e){n=n||"",t.route.routes[n]||("/"===n[0]&&(n=n.substring(1)),t.route(n))
var c,a=function(r){if(t.route.attr("route")===n&&(void 0===r.batchNum||r.batchNum!==c)){c=r.batchNum
var u=t.route.attr()
delete u.route,t.isFunction(e[o])?e[o](u):e[e[o]](u)}}
return t.route.bind("change",a),function(){t.route.unbind("change",a)}},t})