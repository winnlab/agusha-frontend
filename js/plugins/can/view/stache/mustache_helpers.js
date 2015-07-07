steal("can/util","./utils.js","can/view/live",function(n,e,t){t=t||n.view.live
var i=function(t){return e.isObserveLike(t)&&e.isArrayLike(t)&&t.attr("length")?t:n.isFunction(t)?t():t},r={each:function(r,o){var s,u,a,c=i(r),f=[]
if(c instanceof n.List)return function(n){var e=function(n,e,t){return o.fn(o.scope.add({"@index":e}).add(n),o.options,t)}
t.list(n,r,e,o.context,n.parentNode,o.nodeList)}
var l=c
if(l&&e.isArrayLike(l))for(a=0;a<l.length;a++)f.push(o.fn(o.scope.add({"@index":a}).add(l[a])))
else if(e.isObserveLike(l))for(s=n.Map.keys(l),a=0;a<s.length;a++)u=s[a],f.push(o.fn(o.scope.add({"@key":u}).add(l[u])))
else if(l instanceof Object)for(u in l)f.push(o.fn(o.scope.add({"@key":u}).add(l[u])))
return f},"@index":function(e,t){t||(t=e,e=0)
var i=t.scope.attr("@index")
return""+((n.isFunction(i)?i():i)+e)},"if":function(e,t){var r
return r=n.isFunction(e)?n.compute.truthy(e)():!!i(e),r?t.fn(t.scope||this):t.inverse(t.scope||this)},is:function(){var e,t,r=arguments[arguments.length-1]
if(arguments.length-2<=0)return r.inverse()
for(var o=0;o<arguments.length-1;o++){if(t=i(arguments[o]),t=n.isFunction(t)?t():t,o>0&&t!==e)return r.inverse()
e=t}return r.fn()},eq:function(){return r.is.apply(this,arguments)},unless:function(e,t){return r["if"].apply(this,[n.isFunction(e)?n.compute(function(){return!e()}):!e,t])},"with":function(n,e){var t=n
return n=i(n),n?e.fn(t):void 0},log:function(n,e){"undefined"!=typeof console&&console.log&&(e?console.log(n,e.context):console.log(n.context))},data:function(e){var t=2===arguments.length?this:arguments[1]
return function(i){n.data(n.$(i),e,t||this.context)}}}
return{registerHelper:function(n,e){r[n]=e},getHelper:function(n,e){var t=e.attr("helpers."+n)
return t||(t=r[n]),t?{fn:t}:void 0}}})