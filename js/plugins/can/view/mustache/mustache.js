steal("can/util","can/view/scope","can/view","can/view/scanner.js","can/compute","can/view/render.js","can/view/bindings",function(e){e.view.ext=".mustache"
var n="scope",t="___h4sh",r="{scope:"+n+",options:options}",i="{scope:"+n+",options:options, special: true}",s=n+",options",o=/((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g,a=/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/,c=function(e){return'{get:"'+e.replace(/"/g,'\\"')+'"}'},u=function(e){return e&&"string"==typeof e.get},f=function(n){return n instanceof e.Map||n&&!!n._get},p=function(e){return e&&e.splice&&"number"==typeof e.length},l=function(n,t,r){var i=function(e,r){return n(e||t,r)}
return function(n,s){return void 0===n||n instanceof e.view.Scope||(n=t.add(n)),void 0===s||s instanceof e.view.Options||(s=r.add(s)),i(n,s||r)}},h=function(n){if(this.constructor!==h){var t=new h(n)
return function(e,n){return t.render(e,n)}}return"function"==typeof n?void(this.template={fn:n}):(e.extend(this,n),void(this.template=this.scanner.scan(this.text,this.name)))}
e.Mustache=e.global.Mustache=h,h.prototype.render=function(n,t){return n instanceof e.view.Scope||(n=new e.view.Scope(n||{})),t instanceof e.view.Options||(t=new e.view.Options(t||{})),t=t||{},this.template.fn.call(n,n,t)},e.extend(h.prototype,{scanner:new e.view.Scanner({text:{start:"",scope:n,options:",options: options",argNames:s},tokens:[["returnLeft","{{{","{{[{&]"],["commentFull","{{!}}","^[\\s\\t]*{{!.+?}}\\n"],["commentLeft","{{!","(\\n[\\s\\t]*{{!|{{!)"],["escapeFull","{{}}","(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",function(e){return{before:/^\n.+?\n$/.test(e)?"\n":"",content:e.match(/\{\{(.+?)\}\}/)[1]||""}}],["escapeLeft","{{"],["returnRight","}}}"],["right","}}"]],helpers:[{name:/^>[\s]*\w*/,fn:function(n){var t=e.trim(n.replace(/^>\s?/,"")).replace(/["|']/g,"")
return"can.Mustache.renderPartial('"+t+"',"+s+")"}},{name:/^\s*data\s/,fn:function(e){var t=e.match(/["|'](.*)["|']/)[1]
return"can.proxy(function(__){can.data(can.$(__),'"+t+"', this.attr('.')); }, "+n+")"}},{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(e){var t=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,r=e.match(t)
return"can.proxy(function(__){var "+r[1]+"=can.$(__);with("+n+".attr('.')){"+r[2]+"}}, this);"}},{name:/^.*$/,fn:function(n,u){var f=!1,p={content:"",startTxt:!1,startOnlyTxt:!1,end:!1}
if(n=e.trim(n),n.length&&(f=n.match(/^([#^/]|else$)/))){switch(f=f[0]){case"#":case"^":u.specialAttribute?p.startOnlyTxt=!0:(p.startTxt=!0,p.escaped=0)
break
case"/":return p.end=!0,p.content+='return ___v1ew.join("");}}])',p}n=n.substring(1)}if("else"!==f){var l,h=[],v=[],d=0
p.content+="can.Mustache.txt(\n"+(u.specialAttribute?i:r)+",\n"+(f?'"'+f+'"':"null")+",",(e.trim(n)+" ").replace(o,function(e,n){d&&(l=n.match(a))?l[2]?h.push(l[0]):v.push(l[4]+":"+(l[6]?l[6]:c(l[5]))):h.push(c(n)),d++}),p.content+=h.join(","),v.length&&(p.content+=",{"+t+":{"+v.join(",")+"}}")}switch(f&&"else"!==f&&(p.content+=",[\n\n"),f){case"^":case"#":p.content+="{fn:function("+s+"){var ___v1ew = [];"
break
case"else":p.content+='return ___v1ew.join("");}},\n{inverse:function('+s+"){\nvar ___v1ew = [];"
break
default:p.content+=")"}return f||(p.startTxt=!0,p.end=!0),p}}]})})
for(var v=e.view.Scanner.prototype.helpers,d=0;d<v.length;d++)h.prototype.scanner.helpers.unshift(v[d])
return h.txt=function(n,r,i){for(var s,o,a=n.scope,c=n.options,v=[],d={fn:function(){},inverse:function(){}},g=a.attr("."),m=!0,w=3;w<arguments.length;w++){var _=arguments[w]
if(r&&e.isArray(_))d=e.extend.apply(e,[d].concat(_))
else if(_&&_[t]){s=_[t]
for(var x in s)u(s[x])&&(s[x]=h.get(s[x].get,n,!1,!0))}else v.push(_&&u(_)?h.get(_.get,n,!1,!0,!0):_)}if(u(i)){var y=i.get
i=h.get(i.get,n,v.length,!1),m=y===i}if(d.fn=l(d.fn,a,c),d.inverse=l(d.inverse,a,c),"^"===r){var b=d.fn
d.fn=d.inverse,d.inverse=b}return(o=m&&"string"==typeof i&&h.getHelper(i,c)||e.isFunction(i)&&!i.isComputed&&{fn:i})?(e.extend(d,{context:g,scope:a,contexts:a,hash:s}),v.push(d),function(){return o.fn.apply(g,v)||""}):function(){var n
n=e.isFunction(i)&&i.isComputed?i():i
var t,s,o,a=v.length?v:[n],c=!0,u=[]
if(r)for(t=0;t<a.length;t++)o=a[t],s=void 0!==o&&f(o),p(o)?"#"===r?c=c&&!!(s?o.attr("length"):o.length):"^"===r&&(c=c&&!(s?o.attr("length"):o.length)):c="#"===r?c&&!!o:"^"===r?c&&!o:c
if(c){if("#"===r){if(p(n)){var l=f(n)
for(t=0;t<n.length;t++)u.push(d.fn(l?n.attr(""+t):n[t]))
return u.join("")}return d.fn(n||{})||""}return"^"===r?d.inverse(n||{})||"":""+(null!=n?n:"")}return""}},h.get=function(n,t,r,i,s){var o=t.scope.attr("."),a=t.options||{}
if(r){if(h.getHelper(n,a))return n
if(t.scope&&e.isFunction(o[n]))return o[n]
e.dev.warn('can/view/mustache/mustache.js: Unable to find helper "'+n+'".')}var c=t.scope.computeData(n,{isArgument:i,args:[o,t.scope]}),u=c.compute
e.compute.temporarilyBind(u)
var f=c.initialValue,p=h.getHelper(n,a)
return void 0!==f||r||p||e.dev.warn('can/view/mustache/mustache.js: Unable to find key "'+n+'".'),s||void 0!==f&&c.scope===t.scope||!h.getHelper(n,a)?u.computeInstance.hasDependencies?u:f:n},h.resolve=function(n){return f(n)&&p(n)&&n.attr("length")?n:e.isFunction(n)?n():n},e.view.Options=e.view.Scope.extend({init:function(n){n.helpers||n.partials||n.tags||(n={helpers:n}),e.view.Scope.prototype.init.apply(this,arguments)}}),h._helpers={},h.registerHelper=function(e,n){this._helpers[e]={name:e,fn:n}},h.getHelper=function(e,n){var t
return n&&(t=n.attr("helpers."+e)),t?{fn:t}:this._helpers[e]},h.render=function(n,t,r){if(!e.view.cached[n]){var i=e.__clearReading(),s=t.attr(n)
s&&(n=s),e.__setReading(i)}return e.view.render(n,t,r)},h.safeString=function(e){return{toString:function(){return e}}},h.renderPartial=function(n,t,r){var i=r.attr("partials."+n)
return i?i.render?i.render(t,r):i(t,r):e.Mustache.render(n,t,r)},e.each({"if":function(n,t){var r
return r=e.isFunction(n)?e.compute.truthy(n)():!!h.resolve(n),r?t.fn(t.contexts||this):t.inverse(t.contexts||this)},is:function(){var n,t,r=arguments[arguments.length-1]
if(arguments.length-2<=0)return r.inverse()
for(var i=0;i<arguments.length-1;i++){if(t=h.resolve(arguments[i]),t=e.isFunction(t)?t():t,i>0&&t!==n)return r.inverse()
n=t}return r.fn()},eq:function(){return h._helpers.is.fn.apply(this,arguments)},unless:function(n,t){return h._helpers["if"].fn.apply(this,[e.isFunction(n)?e.compute(function(){return!n()}):!n,t])},each:function(n,t){var r,i,s,o=h.resolve(n),a=[]
if(e.view.lists&&(o instanceof e.List||n&&n.isComputed&&void 0===o))return e.view.lists(n,function(e,n){return t.fn(t.scope.add({"@index":n}).add(e))})
if(n=o,n&&p(n)){for(s=0;s<n.length;s++)a.push(t.fn(t.scope.add({"@index":s}).add(n[s])))
return a.join("")}if(f(n)){for(r=e.Map.keys(n),s=0;s<r.length;s++)i=r[s],a.push(t.fn(t.scope.add({"@key":i}).add(n[i])))
return a.join("")}if(n instanceof Object){for(i in n)a.push(t.fn(t.scope.add({"@key":i}).add(n[i])))
return a.join("")}},"with":function(e,n){var t=e
return e=h.resolve(e),e?n.fn(t):void 0},log:function(e,n){"undefined"!=typeof console&&console.log&&(n?console.log(e,n.context):console.log(e.context))},"@index":function(n,t){t||(t=n,n=0)
var r=t.scope.attr("@index")
return""+((e.isFunction(r)?r():r)+n)}},function(e,n){h.registerHelper(n,e)}),e.view.register({suffix:"mustache",contentType:"x-mustache-template",script:function(e,n){return"can.Mustache(function("+s+") { "+new h({text:n,name:e}).template.out+" })"},renderer:function(e,n){return h({text:n,name:e})}}),e.mustache.registerHelper=e.proxy(e.Mustache.registerHelper,e.Mustache),e.mustache.safeString=e.Mustache.safeString,e})