steal("can/util",function(e){var r=e.isFunction,n=e.makeArray,t=1,i=function(e){var r=function(){return c.frag(e.apply(this,arguments))}
return r.render=function(){return e.apply(e,arguments)},r},a=function(r,n){if(!r.length)throw e.dev.log("can/view/view.js: There is no template or an empty template at "+n),"can.view: No template or empty template:"+n},u=function(n,t){if(r(n)){var i=e.Deferred()
return i.resolve(n)}var u,o,d,s="string"==typeof n?n:n.url,f=n.engine&&"."+n.engine||s.match(/\.[\w\d]+$/)
if(s.match(/^#/)&&(s=s.substr(1)),(o=document.getElementById(s))&&(f="."+o.type.match(/\/(x\-)?(.+)/)[2]),f||c.cached[s]||(s+=f=c.ext),e.isArray(f)&&(f=f[0]),d=c.toId(s),s.match(/^\/\//)&&(s=s.substr(2),s=window.steal?steal.config().root.mapJoin(""+steal.id(s)):s),window.require&&require.toUrl&&(s=require.toUrl(s)),u=c.types[f],c.cached[d])return c.cached[d]
if(o)return c.registerView(d,o.innerHTML,u)
var p=new e.Deferred
return e.ajax({async:t,url:s,dataType:"text",error:function(e){a("",s),p.reject(e)},success:function(e){a(e,s),c.registerView(d,e,u,p)}}),p},o=function(r){var n=[]
if(e.isDeferred(r))return[r]
for(var t in r)e.isDeferred(r[t])&&n.push(r[t])
return n},d=function(r){return e.isArray(r)&&"success"===r[1]?r[0]:r},c=e.view=e.template=function(e,n,t,i){return r(t)&&(i=t,t=void 0),c.renderAs("fragment",e,n,t,i)}
return e.extend(c,{frag:function(e,r){return c.hookup(c.fragment(e),r)},fragment:function(r){if("string"!=typeof r&&11===r.nodeType)return r
var n=e.buildFragment(r,document.body)
return n.childNodes.length||n.appendChild(document.createTextNode("")),n},toId:function(r){return e.map((""+r).split(/\/|\./g),function(e){return e?e:void 0}).join("_")},toStr:function(e){return null==e?"":""+e},hookup:function(r,n){var t,i,a=[]
return e.each(r.childNodes?e.makeArray(r.childNodes):r,function(r){1===r.nodeType&&(a.push(r),a.push.apply(a,e.makeArray(r.getElementsByTagName("*"))))}),e.each(a,function(e){e.getAttribute&&(t=e.getAttribute("data-view-id"))&&(i=c.hookups[t])&&(i(e,n,t),delete c.hookups[t],e.removeAttribute("data-view-id"))}),r},hookups:{},hook:function(e){return c.hookups[++t]=e," data-view-id='"+t+"'"},cached:{},cachedRenderers:{},cache:!0,register:function(r){this.types["."+r.suffix]=r,"undefined"!=typeof window&&window.steal&&steal.type&&steal.type(r.suffix+" view js",function(e,r){var n=c.types["."+e.type],t=c.toId(e.id+"")
e.text=n.script(t,e.text),r()}),e[r.suffix]=c[r.suffix]=function(e,n){var t,a
if(!n)return a=function(){return t||(t=r.fragRenderer?r.fragRenderer(null,e):i(r.renderer(null,e))),t.apply(this,arguments)},a.render=function(){var n=r.renderer(null,e)
return n.apply(n,arguments)},a
var u=function(){return t||(t=r.fragRenderer?r.fragRenderer(e,n):r.renderer(e,n)),t.apply(this,arguments)}
return r.fragRenderer?c.preload(e,u):c.preloadStringRenderer(e,u)}},types:{},ext:".ejs",registerScript:function(e,r,n){return"can.view.preloadStringRenderer('"+r+"',"+c.types["."+e].script(r,n)+");"},preload:function(r,n){var t=c.cached[r]=(new e.Deferred).resolve(function(e,r){return n.call(e,e,r)})
return t.__view_id=r,c.cachedRenderers[r]=n,n},preloadStringRenderer:function(e,r){return this.preload(e,i(r))},render:function(r,n,t,i){return e.view.renderAs("string",r,n,t,i)},renderTo:function(e,r,n,t){return("string"===e&&r.render?r.render:r)(n,t)},renderAs:function(t,i,a,s,f){r(s)&&(f=s,s=void 0)
var p,l,v,g,h,w=o(a)
if(w.length)return l=new e.Deferred,v=e.extend({},a),w.push(u(i,!0)),e.when.apply(e,w).then(function(r){var i,u=n(arguments),o=u.pop()
if(e.isDeferred(a))v=d(r)
else for(var c in a)e.isDeferred(a[c])&&(v[c]=d(u.shift()))
i=e.view.renderTo(t,o,v,s),l.resolve(i,v),f&&f(i,v)},function(){l.reject.apply(l,arguments)}),l
if(p=e.__clearReading(),g=r(f),l=u(i,g),p&&e.__setReading(p),g)h=l,l.then(function(r){f(a?e.view.renderTo(t,r,a,s):r)})
else{if("resolved"===l.state()&&l.__view_id){var y=c.cachedRenderers[l.__view_id]
return a?e.view.renderTo(t,y,a,s):y}l.then(function(r){h=a?e.view.renderTo(t,r,a,s):r})}return h},registerView:function(r,n,t,a){var u,o="object"==typeof t?t:c.types[t||c.ext]
return u=o.fragRenderer?o.fragRenderer(r,n):i(o.renderer(r,n)),a=a||new e.Deferred,c.cache&&(c.cached[r]=a,a.__view_id=r,c.cachedRenderers[r]=u),a.resolve(u)}}),"undefined"!=typeof window&&window.steal&&steal.type&&steal.type("view js",function(e,r){var n=c.types["."+e.type],t=c.toId(e.id),i=n.plugin||"can/view/"+e.type,a=n.fragRenderer?"preload":"preloadStringRenderer"
e.text="steal('can/view','"+i+"',function(can){return can.view."+a+"('"+t+"',"+e.text+");\n})",r()}),e})