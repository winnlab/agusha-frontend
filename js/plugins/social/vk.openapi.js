!function(t){function e(){var t=""
for(i=0;5>i;i++)t+=Math.ceil(15*Math.random()).toString(16)
return t}function o(t,e,i,n,r){t[e]?i.apply(n):(r=r||0,1e3>r&&setTimeout(function(){o(t,e,i,n,r+1)},0))}function n(e){setTimeout(function(){var i=document.createElement("script")
i.type="text/javascript",i.src=e||t.fastXDM.helperUrl,o(document,"body",function(){document.getElementsByTagName("HEAD")[0].appendChild(i)})},0)}function r(t,e){switch(typeof t){case"string":return e?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):t.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")
case"object":if("[object Array]"===Object.prototype.toString.apply(t)){newValue=[]
for(var o=0;o<t.length;o++)newValue[o]=r(t[o],e)}else for(var i in t)newValue={},Object.hasOwnProperty.call(t,i)&&(newValue[i]=r(t[i],e))
default:newValue=t}return newValue}function s(t,e){p.loaded?t.apply(e,[p]):u.push([e,t])}function a(){p.loaded=!0
for(var t=u.length;t--;)u[t][1].apply(u[t][0],[p])}function d(t,e){s(function(o){var i=o.json.parse(t)
if(i[0]){i[1]||(i[1]=[])
for(var n=i[1].length;n--;)if(i[1][n]._func){var s=i[1][n]._func
i[1][n]=function(){var t=Array.prototype.slice.call(arguments)
t.unshift("_func"+s),e.callMethod.apply(e,t)}}else e.options.safe&&(i[1][n]=r(i[1][n],!0))
setTimeout(function(){if(!e.methods[i[0]])throw Error("fastXDM: Method "+i[0]+" is undefined")
e.methods[i[0]].apply(e,i[1])},0)}})}function l(t,e){for(var o in e)t[o]&&"object"==typeof t[o]?l(t[o],e[o]):t[o]=e[o]}if(!t.fastXDM){var c={},u=[],p={}
t.fastXDM={_id:0,helperUrl:("https:"===location.protocol?"https:":"http:")+"//vk.com/js/api/xdmHelper.js",Server:function(o,i,n){this.methods=o||{},this.id=t.fastXDM._id++,this.options=n||{},this.filter=i,this.key=e(),this.methods["%init%"]=this.methods.__fxdm_i=function(){t.fastXDM.run(this.id),this.methods.onInit&&this.methods.onInit()},this.frameName="fXD"+this.key,this.server=!0,c[this.key]=[d,this]},Client:function(e,o){if(this.methods=e||{},this.id=t.fastXDM._id++,this.options=o||{},t.fastXDM.run(this.id),0!==window.name.indexOf("fXD"))throw Error("Wrong window.name property.")
this.key=window.name.substr(3),this.caller=window.parent,c[this.key]=[d,this],this.client=!0,t.fastXDM.on("helper",function(){t.fastXDM.onClientStart(this)},this),s(function(t){t.send(this,t.json.stringify(["%init%"]))
var e=this.methods
setTimeout(function(){e.onInit&&e.onInit()},0)},this)},onMessage:function(t){if(!t.data)return!1
var e=t.data
if("string"!=typeof e&&!(e instanceof String))return!1
var o=e.substr(0,5)
if(c[o]){var i=c[o][1]
!i||i.filter&&!i.filter(t.origin)||c[o][0](t.data.substr(6),i)}},setJSON:function(t){p.json=t},getJSON:function(t){return t?void s(function(e){t(e.json)}):p.json},setEnv:function(t){var e
for(e in t)p[e]=t[e]
a()},_q:{},on:function(t,e,o){this._q[t]||(this._q[t]=[]),-1==this._q[t]?e.apply(o):this._q[t].push([e,o])},run:function(t){var e=(this._q[t]||[]).length
if(this._q[t]&&e>0)for(var o=0;e>o;o++)this._q[t][o][0].apply(this._q[t][o][1])
this._q[t]=-1},waitFor:o},t.fastXDM.Server.prototype.start=function(e,o){if(e.contentWindow)this.caller=e.contentWindow,this.frame=e,t.fastXDM.on("helper",function(){t.fastXDM.onServerStart(this)},this)
else{var i=this
o=o||0,50>o&&setTimeout(function(){i.start.apply(i,[e,o+1])},100)}},t.fastXDM.Server.prototype.destroy=function(){c.splice(c.indexOf(this.key),1)},t.fastXDM.Server.prototype.append=function(t,e){var o=document.createElement("DIV")
o.innerHTML='<iframe name="'+this.frameName+'" ></iframe>'
var i=o.firstChild,n=this
return setTimeout(function(){i.frameBorder="0",e&&l(i,e),t.insertBefore(i,t.firstChild),n.start(i)},0),i},t.fastXDM.Client.prototype.callMethod=t.fastXDM.Server.prototype.callMethod=function(){for(var e=Array.prototype.slice.call(arguments),i=e.shift(),n=e.length;n--;)if("function"==typeof e[n]){this.funcsCount=(this.funcsCount||0)+1
var a=e[n],d="_func"+this.funcsCount
this.methods[d]=function(){a.apply(this,arguments),delete this.methods[d]},e[n]={_func:this.funcsCount}}else this.options.safe&&(e[n]=r(e[n],!1))
o(this,"caller",function(){t.fastXDM.on(this.id,function(){s(function(t){t.send(this,t.json.stringify([i,e]))},this)},this)},this)},t.JSON&&"object"==typeof t.JSON&&t.JSON.parse&&t.JSON.stringify&&'{"a":[1,2,3]}'==t.JSON.stringify({a:[1,2,3]}).replace(/ /g,"")?p.json={parse:t.JSON.parse,stringify:t.JSON.stringify}:t.fastXDM._needJSON=!0,t.postMessage?(p.protocol="p",p.send=function(t,e){var o=t.frame?t.frame.contentWindow:t.caller
o.postMessage(t.key+":"+e,"*")},t.addEventListener?t.addEventListener("message",t.fastXDM.onMessage,!1):t.attachEvent("onmessage",t.fastXDM.onMessage),t.fastXDM._needJSON?(t.fastXDM._onlyJSON=!0,n()):a()):n()}}(window),window.VK||(window.VK={}),VK.MD5||(VK.MD5=function(t){var e=function(t,e){var o=(65535&t)+(65535&e),i=(t>>16)+(e>>16)+(o>>16)
return i<<16|65535&o},o=function(t,e){return t<<e|t>>>32-e},i=function(t,i,n,r,s,a){return e(o(e(e(i,t),e(r,a)),s),n)},n=function(t,e,o,n,r,s,a){return i(e&o|~e&n,t,e,r,s,a)},r=function(t,e,o,n,r,s,a){return i(e&n|o&~n,t,e,r,s,a)},s=function(t,e,o,n,r,s,a){return i(e^o^n,t,e,r,s,a)},a=function(t,e,o,n,r,s,a){return i(o^(e|~n),t,e,r,s,a)},d=function(t,o){var i,d,l,c,u=1732584193,p=-271733879,h=-1732584194,f=271733878
t[o>>5]|=128<<o%32,t[(o+64>>>9<<4)+14]=o
for(var g=0,m=t.length;m>g;g+=16)i=u,d=p,l=h,c=f,u=n(u,p,h,f,t[g+0],7,-680876936),f=n(f,u,p,h,t[g+1],12,-389564586),h=n(h,f,u,p,t[g+2],17,606105819),p=n(p,h,f,u,t[g+3],22,-1044525330),u=n(u,p,h,f,t[g+4],7,-176418897),f=n(f,u,p,h,t[g+5],12,1200080426),h=n(h,f,u,p,t[g+6],17,-1473231341),p=n(p,h,f,u,t[g+7],22,-45705983),u=n(u,p,h,f,t[g+8],7,1770035416),f=n(f,u,p,h,t[g+9],12,-1958414417),h=n(h,f,u,p,t[g+10],17,-42063),p=n(p,h,f,u,t[g+11],22,-1990404162),u=n(u,p,h,f,t[g+12],7,1804603682),f=n(f,u,p,h,t[g+13],12,-40341101),h=n(h,f,u,p,t[g+14],17,-1502002290),p=n(p,h,f,u,t[g+15],22,1236535329),u=r(u,p,h,f,t[g+1],5,-165796510),f=r(f,u,p,h,t[g+6],9,-1069501632),h=r(h,f,u,p,t[g+11],14,643717713),p=r(p,h,f,u,t[g+0],20,-373897302),u=r(u,p,h,f,t[g+5],5,-701558691),f=r(f,u,p,h,t[g+10],9,38016083),h=r(h,f,u,p,t[g+15],14,-660478335),p=r(p,h,f,u,t[g+4],20,-405537848),u=r(u,p,h,f,t[g+9],5,568446438),f=r(f,u,p,h,t[g+14],9,-1019803690),h=r(h,f,u,p,t[g+3],14,-187363961),p=r(p,h,f,u,t[g+8],20,1163531501),u=r(u,p,h,f,t[g+13],5,-1444681467),f=r(f,u,p,h,t[g+2],9,-51403784),h=r(h,f,u,p,t[g+7],14,1735328473),p=r(p,h,f,u,t[g+12],20,-1926607734),u=s(u,p,h,f,t[g+5],4,-378558),f=s(f,u,p,h,t[g+8],11,-2022574463),h=s(h,f,u,p,t[g+11],16,1839030562),p=s(p,h,f,u,t[g+14],23,-35309556),u=s(u,p,h,f,t[g+1],4,-1530992060),f=s(f,u,p,h,t[g+4],11,1272893353),h=s(h,f,u,p,t[g+7],16,-155497632),p=s(p,h,f,u,t[g+10],23,-1094730640),u=s(u,p,h,f,t[g+13],4,681279174),f=s(f,u,p,h,t[g+0],11,-358537222),h=s(h,f,u,p,t[g+3],16,-722521979),p=s(p,h,f,u,t[g+6],23,76029189),u=s(u,p,h,f,t[g+9],4,-640364487),f=s(f,u,p,h,t[g+12],11,-421815835),h=s(h,f,u,p,t[g+15],16,530742520),p=s(p,h,f,u,t[g+2],23,-995338651),u=a(u,p,h,f,t[g+0],6,-198630844),f=a(f,u,p,h,t[g+7],10,1126891415),h=a(h,f,u,p,t[g+14],15,-1416354905),p=a(p,h,f,u,t[g+5],21,-57434055),u=a(u,p,h,f,t[g+12],6,1700485571),f=a(f,u,p,h,t[g+3],10,-1894986606),h=a(h,f,u,p,t[g+10],15,-1051523),p=a(p,h,f,u,t[g+1],21,-2054922799),u=a(u,p,h,f,t[g+8],6,1873313359),f=a(f,u,p,h,t[g+15],10,-30611744),h=a(h,f,u,p,t[g+6],15,-1560198380),p=a(p,h,f,u,t[g+13],21,1309151649),u=a(u,p,h,f,t[g+4],6,-145523070),f=a(f,u,p,h,t[g+11],10,-1120210379),h=a(h,f,u,p,t[g+2],15,718787259),p=a(p,h,f,u,t[g+9],21,-343485551),u=e(u,i),p=e(p,d),h=e(h,l),f=e(f,c)
return[u,p,h,f]},l=function(t){for(var e,o,i="",n=-1,r=t.length;++n<r;)e=t.charCodeAt(n),o=r>n+1?t.charCodeAt(n+1):0,e>=55296&&56319>=e&&o>=56320&&57343>=o&&(e=65536+((1023&e)<<10)+(1023&o),n++),127>=e?i+=String.fromCharCode(e):2047>=e?i+=String.fromCharCode(192|e>>>6&31,128|63&e):65535>=e?i+=String.fromCharCode(224|e>>>12&15,128|e>>>6&63,128|63&e):2097151>=e&&(i+=String.fromCharCode(240|e>>>18&7,128|e>>>12&63,128|e>>>6&63,128|63&e))
return i},c=function(t){var e,o,i=Array(t.length>>2)
for(e=0,o=i.length;o>e;e++)i[e]=0
for(e=0,o=8*t.length;o>e;e+=8)i[e>>5]|=(255&t.charCodeAt(e/8))<<e%32
return i},u=function(t){for(var e="",o=0,i=32*t.length;i>o;o+=8)e+=String.fromCharCode(t[o>>5]>>>o%32&255)
return e},p=function(t){return u(d(c(t),8*t.length))},h=function(t){for(var e,o="0123456789abcdef",i="",n=0,r=t.length;r>n;n++)e=t.charCodeAt(n),i+=o.charAt(e>>>4&15)+o.charAt(15&e)
return i}
return h(p(l(t)))}),VK.extend=function(t,e,o){for(var i in e)(o||void 0===t[i])&&(t[i]=e[i])
return t},"https:"!==VK._protocol&&(VK._protocol="https:"===location.protocol?"https:":"http:"),VK.xdConnectionCallbacks?(setTimeout(function(){for(var t;t=VK.xdConnectionCallbacks.pop();)t()},0),VK.Widgets&&!VK.Widgets._constructor&&(VK.Widgets=!1)):(VK.extend(VK,{version:1,_apiId:null,_session:null,_userStatus:"unknown",_domain:{main:"https://oauth.vk.com/",api:"https://api.vk.com/"},_path:{login:"authorize",proxy:"fxdm_oauth_proxy.html"},_rootId:"vk_api_transport",_nameTransportPath:"",xdReady:!1,access:{FRIENDS:2,PHOTOS:4,AUDIO:8,VIDEO:16,MATCHES:32,QUESTIONS:64,WIKI:128}}),VK.init=function(t){var e,o
if(VK._apiId=null,!t.apiId)throw Error("VK.init() called without an apiId")
if(VK._apiId=t.apiId,t.onlyWidgets)return!0
t.nameTransportPath&&""!==t.nameTransportPath&&(VK._nameTransportPath=t.nameTransportPath),o=document.getElementById(VK._rootId),o||(o=document.createElement("div"),o.id=VK._rootId,e=document.getElementsByTagName("body")[0],e.insertBefore(o,e.childNodes[0])),o.style.position="absolute",o.style.top="-10000px"
var i=VK.Cookie.load()
i&&(VK.Auth._loadState="loaded",VK.Auth.setSession(i,i?"connected":"unknown"))},VK.Cookie||(VK.Cookie={_domain:null,load:function(){var t,e=document.cookie.match("\\bvk_app_"+VK._apiId+"=([^;]*)\\b")
if(e){if(t=this.decode(e[1]),"oauth"!=t.secret)return!1
t.expire=parseInt(t.expire,10),VK.Cookie._domain="."+window.location.hostname}return t},setRaw:function(t,e,o,i){var n
n="vk_app_"+VK._apiId+"="+t
var r=i?(new Date).getTime()+1e3*i:1e3*e
n+=t&&0===e?"":"; expires="+new Date(r).toGMTString(),n+="; path=/",n+=o?"; domain=."+o:"",document.cookie=n,this._domain=o},set:function(t,e){t?this.setRaw(this.encode(t),t.expire,window.location.hostname,(e||{}).time):this.clear()},clear:function(){this.setRaw("",0,this._domain,0)},encode:function(t){var e,o=[]
for(e in t)"user"!=e&&o.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]))
return o.sort(),o.join("&")},decode:function(t){var e,o,i={},n=t.split("&")
for(e=0;e<n.length;e++)o=n[e].split("=",2),o&&o[0]&&(i[decodeURIComponent(o[0])]=decodeURIComponent(o[1]))
return i}}),VK.Api||(VK.Api={_headId:null,_callbacks:{},ie6_7:function(){return VK.Api.ieTested||(VK.Api.isIE6_7=navigator.userAgent.match(/MSIE [6|7]/i),VK.Api.ieTested=!0),VK.Api.isIE6_7},attachScript:function(t){VK.Api._headId||(VK.Api._headId=document.getElementsByTagName("head")[0])
var e=document.createElement("script")
e.type="text/javascript",e.setAttribute("encoding","UTF-8"),e.src=t,VK.Api._headId.appendChild(e)},checkMethod:function(t,e,o,i){var n=t.toLowerCase()
if("wall.post"==n||"activity.set"==n){var r="activity.set"==n?e.text:e.message
r||(r="")
var s=VK._protocol+"//vk.com/al_apps.php?act=wall_post_box&widget=1&method="+n+"&aid="+parseInt(VK._apiId,10)+"&text="+encodeURIComponent(r)
"wall.post"==n&&(s+="&owner_id="+parseInt(e.owner_id||0,10)+"&attachments="+(e.attachments||e.attachment||"")+"&publish_date="+(e.publish_date||""))
var a="_"+Math.random().toString(16).substr(2)
s+="&method_access="+a
var d=(VK.UI.popup({url:s,width:460,height:249}),setInterval(function(){VK.UI.active.closed&&(clearInterval(d),e.method_access=a,VK.Api.call(t,e,o,i))},500))
return!1}return!0},call:function(t,e,o,i){var n,r,s=e||{}
if("object"!=typeof s||"function"!=typeof o)return!1
if(e.method_access||e.method_force||VK.Api.checkMethod(t,e,o,i)){if(i||(i=0),"loaded"!=VK.Auth._loadState){var a=function(i){i&&i.session&&(VK.Observer.unsubscribe("auth.loginStatus",a),VK.Api.call(t,e,o))}
return VK.Observer.subscribe("auth.loginStatus",a),void VK.Auth.getLoginStatus()}if(VK.Api.queryLength(s)<1500&&!VK.Api.ie6_7()){for(var d=!1,l=parseInt(1e7*Math.random(),10);VK.Api._callbacks[l];)l=parseInt(1e7*Math.random(),10)
s.callback="VK.Api._callbacks["+l+"]"}else var d=!0
VK._session&&VK._session.sid&&(s.access_token=VK._session.sid),n=VK.Cookie.encode(s),r=function(n){if(!n.error||3!=n.error.error_code&&4!=n.error.error_code&&5!=n.error.error_code)o(n)
else{if(i>3)return!1
var r=function(n){VK.Observer.unsubscribe("auth.sessionChange",r),delete e.access_token,n.session&&VK.Api.call(t,e,o,i+1)}
VK.Observer.subscribe("auth.sessionChange",r),VK.Auth.getLoginStatus()}d||delete VK.Api._callbacks[l]},d?VK.xdReady?VK.XDM.remote.callMethod("apiCall",t,n,r):(VK.Observer.subscribe("xdm.init",function(){VK.XDM.remote.callMethod("apiCall",t,n,r)}),VK.XDM.init()):(VK.Api._callbacks[l]=r,VK.Api.attachScript(VK._domain.api+"method/"+t+"?"+n))}},queryLength:function(t){var e,o=100
for(e in t)o+=e.length+encodeURIComponent(t[e]).length+1
return o}},VK.api=function(t,e,o){VK.Api.call(t,e,o)}),VK.Auth||(VK.Auth={popup:null,lsCb:{},setSession:function(t,e,o,i){var n=!VK._session&&t,r=VK._session&&!t,s=VK._session&&t&&VK._session.mid!=t.mid,a=n||r||VK._session&&t&&VK._session.sid!=t.sid,d=e!=VK._userStatus,l={session:t,status:e,settings:o}
return VK._session=t,VK._userStatus=e,VK.Cookie.set(t,i),(a||d||s)&&setTimeout(function(){d&&VK.Observer.publish("auth.statusChange",l),(r||s)&&VK.Observer.publish("auth.logout",l),(n||s)&&VK.Observer.publish("auth.login",l),a&&VK.Observer.publish("auth.sessionChange",l)},0),l},login:function(t,e){var o,i
if(!VK._apiId)return!1
o=window.location.protocol+"//"+window.location.hostname,i=VK._domain.main+VK._path.login+"?client_id="+VK._apiId+"&display=popup&redirect_uri=close.html&response_type=token",e&&parseInt(e,10)>0&&(i+="&scope="+e),VK.Observer.unsubscribe("auth.onLogin"),VK.Observer.subscribe("auth.onLogin",t),VK.UI.popup({width:665,height:370,url:i})
var n=function(){VK.Auth.getLoginStatus(function(t){VK.Observer.publish("auth.onLogin",t),VK.Observer.unsubscribe("auth.onLogin")},!0)}
VK.UI.popupOpened=!0
var r=function(){if(!VK.UI.popupOpened)return!1
try{if(!VK.UI.active.top||VK.UI.active.closed)return VK.UI.popupOpened=!1,n(),!0}catch(t){return VK.UI.popupOpened=!1,n(),!0}setTimeout(r,100)}
setTimeout(r,100)},logout:function(t){VK.Auth.revokeGrants(t)},revokeGrants:function(t){var e=function(o){VK.Observer.unsubscribe("auth.statusChange",e),t&&t(o)}
VK.Observer.subscribe("auth.statusChange",e),VK._session&&VK._session.sid&&VK.Api.attachScript("https://login.vk.com/?act=openapi&oauth=1&aid="+parseInt(VK._apiId,10)+"&location="+encodeURIComponent(window.location.hostname)+"&do_logout=1&token="+VK._session.sid),VK.Cookie.clear()},getSession:function(){return VK._session},getLoginStatus:function(t,e){if(VK._apiId){if(t){if(!e&&"loaded"==VK.Auth._loadState)return void t({status:VK._userStatus,session:VK._session})
VK.Observer.subscribe("auth.loginStatus",t)}if(e||"loading"!=VK.Auth._loadState){VK.Auth._loadState="loading"
for(var o=parseInt(1e7*Math.random(),10);VK.Auth.lsCb[o];)o=parseInt(1e7*Math.random(),10)
VK.Auth.lsCb[o]=function(t){if(delete VK.Auth.lsCb[o],VK.Auth._loadState="loaded",t&&t.auth){var i={mid:t.user.id,sid:t.access_token,sig:t.sig,secret:t.secret,expire:t.expire}
e&&(i.user=t.user)
var n="connected"}else{var i=null,n=t.user?"logined":"unknown"
VK.Cookie.clear()}VK.Auth.setSession(i,n,!1,t),VK.Observer.publish("auth.loginStatus",{session:i,status:n}),VK.Observer.unsubscribe("auth.loginStatus")},VK.Api.attachScript("https://login.vk.com/?act=openapi&oauth=1&aid="+parseInt(VK._apiId,10)+"&location="+encodeURIComponent(window.location.hostname)+"&rnd="+o)}}}})),VK.UI||(VK.UI={active:null,_buttons:[],popup:function(t){var e=void 0!==window.screenX?window.screenX:window.screenLeft,o=void 0!==window.screenY?window.screenY:window.screenTop,i=void 0!==window.outerWidth?window.outerWidth:document.body.clientWidth,n=void 0!==window.outerHeight?window.outerHeight:document.body.clientHeight-22,r=t.width,s=t.height,a=parseInt(e+(i-r)/2,10),d=parseInt(o+(n-s)/2.5,10),l="width="+r+",height="+s+",left="+a+",top="+d
this.active=window.open(t.url,"vk_openapi",l)},button:function(t){var e=""
"string"==typeof t&&(t=document.getElementById(t)),this._buttons.push(t),index=this._buttons.length-1,e='<table cellspacing="0" cellpadding="0" id="openapi_UI_'+index+'" onmouseover="VK.UI._change(1, '+index+');" onmouseout="VK.UI._change(0, '+index+');" onmousedown="VK.UI._change(2, '+index+');" onmouseup="VK.UI._change(1, '+index+');" style="cursor: pointer; border: 0px; font-family: tahoma, arial, verdana, sans-serif, Lucida Sans; font-size: 10px;"><tr style="vertical-align: middle"><td><div style="border: 1px solid #3b6798;border-radius: 2px 0px 0px 2px;-moz-border-radius: 2px 0px 0px 2px;-webkit-border-radius: 2px 0px 0px 2px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 4px 0px 6px;line-height: 13px;">&#1042;&#1086;&#1081;&#1090;&#1080;</div></div></td><td><div style="background: url('+VK._protocol+'//vk.com/images/btns.png) 0px -42px no-repeat; width: 21px; height: 21px"></div></td><td><div style="border: 1px solid #3b6798;border-radius: 0px 2px 2px 0px;-moz-border-radius: 0px 2px 2px 0px;-webkit-border-radius: 0px 2px 2px 0px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 6px 0px 4px;line-height: 13px;">&#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1077;</div></div></td></tr></table>',t.innerHTML=e,t.style.width=t.childNodes[0].offsetWidth+"px"},_change:function(t,e){for(var o=document.getElementById("openapi_UI_"+e).rows[0],i=[o.cells[0].firstChild.firstChild,o.cells[2].firstChild.firstChild],n=0;2>n;++n){var r=i[n]
0===t?(r.style.backgroundColor="#6D8DB1",r.style.borderTopColor="#7E9CBC",r.style.borderLeftColor=r.style.borderRightColor=r.style.borderBottomColor="#5C82AB"):1==t?(r.style.backgroundColor="#7693B6",r.style.borderTopColor="#88A4C4",r.style.borderLeftColor=r.style.borderRightColor=r.style.borderBottomColor="#6088B4"):2==t&&(r.style.backgroundColor="#6688AD",r.style.borderBottomColor="#7495B8",r.style.borderLeftColor=r.style.borderRightColor=r.style.borderTopColor="#51779F")}0===t||2==t?o.cells[2].firstChild.style.backgroundPosition="0px -42px":1==t&&(o.cells[2].firstChild.style.backgroundPosition="0px -63px")}}),VK.XDM||(VK.XDM={remote:null,init:function(){if(this.remote)return!1
var t=VK._domain.api+VK._path.proxy
this.remote=new fastXDM.Server({onInit:function(){VK.xdReady=!0,VK.Observer.publish("xdm.init")}}),this.remote.append(document.getElementById(VK._rootId),{src:t})},xdHandler:function(code){try{eval("VK."+code)}catch(e){}}}),VK.Observer||(VK.Observer={_subscribers:function(){return this._subscribersMap||(this._subscribersMap={}),this._subscribersMap},publish:function(t){var e,o,i=Array.prototype.slice.call(arguments),t=i.shift(),n=this._subscribers()[t]
if(n)for(e=0,o=n.length;o>e;e++)null!=n[e]&&n[e].apply(this,i)},subscribe:function(t,e){var o=this._subscribers()
return"function"!=typeof e?!1:void(o[t]?o[t].push(e):o[t]=[e])},unsubscribe:function(t,e){var o,i,n=this._subscribers()[t]
if(!n)return!1
if("function"==typeof e)for(o=0,i=n.length;i>o;o++)n[o]==e&&(n[o]=null)
else delete this._subscribers()[t]}}),VK.Widgets||(VK.Widgets={},VK.Widgets.count=0,VK.Widgets.RPC={},VK.Widgets.loading=function(t,e){t.style.background=e?'url("'+VK._protocol+'//vk.com/images/upload.gif") center center no-repeat transparent':"none"},VK.Widgets.Comments=function(t,e,o){var i=VK.Util.getPageData()
if(!VK._apiId)throw Error("VK not initialized. Please use VK.init")
e=e||{}
var n,r,s={limit:e.limit||10,height:e.height||0,mini:void 0===e.mini?"auto":e.mini,norealtime:e.norealtime?1:0},a=function(){return r.callMethod("mouseUp"),!1},d=function(t){r.callMethod("mouseMove",{screenY:t.screenY})}
if(e.browse)s.browse=1,s.replies=e.replies||0
else{var l=e.pageUrl||i.url
"/"==l.substr(0,1)&&(l=location.protocol+"//"+location.host+l),VK.extend(s,{page:o||0,status_publish:void 0===e.autoPublish?1:e.autoPublish,attach:void 0===e.attach?"*":e.attach?e.attach:"",url:l,title:e.pageTitle||i.title,description:e.pageDescription||i.description,image:e.pageImage||i.image})}return e.onChange&&(VK.Observer.subscribe("widgets.comments.new_comment",e.onChange),VK.Observer.subscribe("widgets.comments.delete_comment",e.onChange)),VK.Widgets._constructor("widget_comments.php",t,e,s,{showBox:function(t){var o=VK.Util.Box((e.base_domain||VK._protocol+"//vk.com")+"/"+t,[],{proxy:function(){r.callMethod.apply(r,arguments)}})
o.show()},startDrag:function(){cursorBack=window.document.body.style.cursor,window.document.body.style.cursor="pointer",VK.Util.addEvent("mousemove",d),VK.Util.addEvent("mouseup",a)},stopDrag:function(){window.document.body.style.cursor=cursorBack,VK.Util.removeEvent("mousemove",d),VK.Util.removeEvent("mouseup",a)}},{startHeight:133,minWidth:300,width:"100%"},function(t,e,o){n=e,r=o})},VK.Widgets.CommentsBrowse=function(t,e){return e=e||{},e.browse=1,VK.Widgets.Comments(t,e)},VK.Widgets.Recommended=function(t,e){VK.Util.getPageData()
if(!VK._apiId)throw Error("VK not initialized. Please use VK.init")
e=e||{}
var o={limit:e.limit||5,max:e.max||0,sort:e.sort||"friend_likes",verb:e.verb||0,period:e.period||"week",target:e.target||"parent"}
return VK.Widgets._constructor("widget_recommended.php",t,e,o,{},{startHeight:90+30*o.limit,minWidth:150,width:"100%"})},VK.Widgets.Post=function(t,e,o,i,n){n=n||{}
var r,s,a,d={owner_id:e,post_id:o,hash:i||"",width:n.width||500}
return VK.Widgets._constructor("widget_post.php",t,n,d,{showBox:function(t){var e=VK.Util.Box((n.base_domain||VK._protocol+"//vk.com")+"/"+t,[],{proxy:function(){s.callMethod.apply(s,arguments)}})
e.show()},startDrag:function(){a=window.document.body.style.cursor,window.document.body.style.cursor="pointer"},stopDrag:function(){window.document.body.style.cursor=a}},{startHeight:90,minWidth:250,width:"100%"},function(t,e,o){r=e,s=o})},VK.Widgets.Like=function(t,e,o){function i(t){if((y||t)&&u&&c&&u&&("none"==c.style.display||"yes"==c.getAttribute("vkhidden"))){var o=e.getScrollTop?e.getScrollTop():document.body.scrollTop||document.documentElement.scrollTop||0,i=VK.Util.getXY(a,e.fixed),n=w?0:i[1]
o>i[1]-120&&"top"!=e.tooltipPos||"vertical"==f||"bottom"==e.tooltipPos?(c.style.top=n+_+2+"px",u.callMethod("show",!1)):(c.style.top=n-125+"px",u.callMethod("show",!0)),VK.Util.ss(c,{left:(w?0:i[0])-("vertical"==f||"mini"==f?36:2)+"px",display:"block",opacity:1,filter:"none"}),c.setAttribute("vkhidden","no"),y=!0}}function n(t){y&&!t||!u||(u.callMethod("hide"),l.callMethod("hide"),setTimeout(function(){c.style.display="none"},400))}function r(){n(!0),h=VK.Util.Box(d.src+"&act=a_stats_box&widget_width=620"),h.show()}var s=VK.Util.getPageData()
if(!VK._apiId)throw Error("VK not initialized. Please use VK.init")
e=VK.extend(e||{},{allowTransparency:!0}),("button"==e.type||"vertical"==e.type||"mini"==e.type)&&delete e.width
var a,d,l,c,u,p,h,f="full"==e.type||"button"==e.type||"vertical"==e.type||"mini"==e.type?e.type:"full",g="full"==f?Math.max(200,e.width||350):"button"==f?180:"mini"==f?100:41,m=parseInt(e.height,10)||22,_="vertical"==f?2*m+7:"full"==f?m+1:m,v={page:o||0,url:e.pageUrl||s.url,type:f,verb:1==e.verb?1:0,color:e.color||"",title:e.pageTitle||s.title,description:e.pageDescription||s.description,image:e.pageImage||s.image,text:(e.text||"").substr(0,140),h:m},w=e.ttHere||!1,y=!1
return VK.Widgets._constructor("widget_like.php",t,e,v,{initTooltip:function(t){u=new fastXDM.Server({onInit:t?function(){i(!0)}:function(){},proxy:function(){l.callMethod.apply(l,arguments)},showBox:function(t,o){var i=VK.Util.Box((e.base_domain||VK._protocol+"//vk.com/")+t,[o.width,o.height],{proxy:function(){u.callMethod.apply(u,arguments)}})
i.show()},statsBox:r},!1,{safe:!0}),c=u.append(w?a:document.body,{src:d.src+"&act=a_like_tooltip",scrolling:"no",allowTransparency:!0,id:d.id+"_tt",style:{position:"absolute",padding:0,display:"block",opacity:.01,filter:"alpha(opacity=1)",border:"0",width:"238px",height:"124px",zIndex:5e3,overflow:"hidden"}}),c.setAttribute("vkhidden","yes"),a.onmouseover=c.onmouseover=function(){clearTimeout(p),y=!0},a.onmouseout=c.onmouseout=function(){clearTimeout(p),y=!1,p=setTimeout(function(){n()},200)}},statsBox:r,showTooltip:i,hideTooltip:n,showBox:function(t){var o=VK.Util.Box((e.base_domain||VK._protocol+"//vk.com/")+t,[],{proxy:function(){l.callMethod.apply(l,arguments)}})
o.show()},proxy:function(){u&&u.callMethod.apply(u,arguments)}},{startHeight:_,minWidth:g},function(t,e,o){l=o,VK.Util.ss(a=t,{height:_+"px",width:g+"px",position:"relative",clear:"both"}),VK.Util.ss(d=e,{height:_+"px",width:g+"px",overflow:"hidden",zIndex:150})})},VK.Widgets.Poll=function(t,e,o){var i=VK.Util.getPageData()
if(!o)throw Error("No poll id passed")
e=e||{}
var n={poll_id:o,url:e.pageUrl||i.url||location.href,title:e.pageTitle||i.title,description:e.pageDescription||i.description}
return VK.Widgets._constructor("widget_poll.php",t,e,n,{},{startHeight:133,minWidth:300,width:"100%"})},VK.Widgets.PagePoll=function(t,e,o){var i=VK.Util.getPageData()
e=e||{}
var n={page:o||0,norealtime:e.norealtime?1:0,poll_id:e.pollId||"",url:e.pageUrl||i.url||location.href,title:e.pageTitle||i.title,description:e.pageDescription||i.description}
return VK.Widgets._constructor("al_widget_poll.php",t,e,n,{},{startHeight:133,minWidth:300,width:"100%"})},VK.Widgets.Community=VK.Widgets.Group=function(t,e,o){function i(){return r.callMethod("mouseUp"),!1}function n(t){return r.callMethod("mouseMove",{screenY:t.screenY}),!1}o=parseInt(o,10)
var r
if(!o)throw Error("No group_id passed")
e.mode=""+parseInt(e.mode,10)
var s={gid:o,mode:e.mode?e.mode:"0"}
e.width||(e.width=200),e.wall&&(s.wall=e.wall),s.color1=e.color1||"",s.color2=e.color2||"",s.color3=e.color3||"",e.no_head&&(s.no_head=1),e.height||(e.height=290),e.wide&&(s.wide=1,e.width<300&&(e.width=300))
var a
return VK.Widgets._constructor("widget_community.php",t,e,s,{showBox:function(t){var o=VK.Util.Box((e.base_domain||VK._protocol+"//vk.com/")+t,[],{proxy:function(){rpc.callMethod.apply(rpc,arguments)}})
o.show()},startDrag:function(){a=window.document.body.style.cursor,window.document.body.style.cursor="pointer",VK.Util.addEvent("mousemove",n),VK.Util.addEvent("mouseup",i)},stopDrag:function(){window.document.body.style.cursor=a,VK.Util.removeEvent("mousemove",n),VK.Util.removeEvent("mouseup",i)},auth:function(){VK.Auth.login(null,1)}},{minWidth:120,width:"200",height:"290",startHeight:200},function(t,e,o){r=o})},VK.Widgets.Auth=function(t,e){VK.Util.getPageData()
if(!VK._apiId)throw Error("VK not initialized. Please use VK.init")
return e.width||(e.width=200),type=e.type?1:0,VK.Widgets._constructor("widget_auth.php",t,e,{},{makeAuth:function(t){if(t.session&&(VK.Auth._loadState="loaded",VK.Auth.setSession(t.session,"connected"),VK.Observer.publish("auth.loginStatus",{session:t.session,status:"connected"}),VK.Observer.unsubscribe("auth.loginStatus")),e.onAuth)e.onAuth(t)
else{if(e.authUrl)var o=e.authUrl
else var o=window.location.href
o+=-1==o.indexOf("?")?"?":"&"
var i=[]
for(var n in t)"session"!=n&&i.push(n+"="+decodeURIComponent(t[n]).replace(/&/g,"%26").replace(/\?/,"%3F"))
window.location.href=o+i.join("&")}}},{startHeight:80})},VK.Widgets.Subscribe=function(t,e,o){o=parseInt(o,10)
var i
if(!o)throw Error("No owner_id passed")
var n={oid:o}
return e.mode&&(n.mode=e.mode),e.soft&&(n.soft=e.soft),VK.Widgets._constructor("widget_subscribe.php",t,e,n,{showBox:function(t){var o=VK.Util.Box((e.base_domain||VK._protocol+"//vk.com/")+t,[],{proxy:function(){rpc.callMethod.apply(rpc,arguments)}})
o.show()},auth:function(){VK.Auth.login(null,1)}},{minWidth:220,startHeight:22,height:e.height||22},function(t,e,o){i=o})},VK.Widgets.Ads=function(t,e,o){function i(t){VK.Widgets.loading(v,!0),r(t)}function n(t,o){VK.Widgets.loading(v,!1),s(o),e.onAdsReady&&e.onAdsReady.apply(e.onAdsReady,Array.prototype.slice.call(arguments)),a(t)}function r(t){if("vk__adsLight"in window)window.vk__adsLight&&vk__adsLight.userHandlers&&vk__adsLight.userHandlers.onInit&&vk__adsLight.userHandlers.onInit(!1)
else{window.vk__adsLight=!1,t=parseInt(t)
var o=VK.Api&&VK.Api.attachScript||VK.addScript,i=e.base_domain||VK._protocol+"//vk.com"
o(i+"/js/al/aes_light.js?"+t)}}function s(t){if(t)for(var e in t){var o=t[e]
"ads_ad_unit_width"===e||"ads_ad_unit_height"===e?e in w||(y[e]=parseInt(o)||"auto"===o&&w[e+"_auto"]||b[e]):e in y||(y[e]=o)}}function a(t){var e=d(y.ads_handler,t)
if(0>=t&&e!==!0){try{console.log("VK: ad_unit_id = "+w.ads_ad_unit_id,", errorCode = ",t)}catch(o){}l(y.ads_handler_empty_html,y.ads_ad_unit_width,y.ads_ad_unit_height)}}function d(t){function e(t){return"[object Function]"===Object.prototype.toString.call(t)}function o(t){return"[object String]"===Object.prototype.toString.call(t)}var i=!1
try{if(!t)return!1
var n=!1
if(e(t))n=t
else if(o(t)){var r=t.split(".")
n=window
for(var s=0,a=r.length;a>s&&(n=n[r[s]],n);s++);if(!n){"function"===t.substr(0,8)&&(t="return "+t+";")
var d=Function(t)()
e(d)?n=d:i=d}}if(n){var l=Array.prototype.slice.call(arguments,1)
i=n.apply(n,l)}}catch(c){try{console.error(c)}catch(u){}}return i}function l(t,e,o){function i(){if(!o)try{var t=r.contentWindow.document.body.firstChild.getBoundingClientRect(),e=Math.ceil(t.bottom-t.top)
e&&(r.style.height=e,v.style.height=e)}catch(i){}}if(t&&v){e=e?e+"px":"",o=o?o+"px":""
var n='<html><head></head><body style="padding: 0; margin: 0;"><div>'+t+"</div></body></html>",r=document.createElement("iframe")
r.onload=i,r.id=(h?h.id:"vkwidget-"+Math.round(1e6*Math.random()))+"_ads_html_handler",r.src="about:blank",r.width="100%",r.height="100%",r.scrolling="no",r.frameBorder="0",r.allowTransparency=!0,r.style.overflow="hidden",r.style.width=e,r.style.height=o,v.style.width=e,v.style.height=o,v.appendChild(r),r.contentWindow.vk_ads_html_handler=n,r.src='javascript:window["vk_ads_html_handler"]'}}function c(t,e,o){for(var i=o||0,n=(t||[]).length;n>i;i++)if(t[i]==e)return i
return-1}function u(t,e){return-1!=c(e,t)}function p(t,e,o){v=t,h=e,f=o}e=e||{},o=o||{}
var h,f,g={},m={},_={},v=document.getElementById(t),w={},y={},b={}
for(var V in o){var K=u(V,["hash"])?V:"ads_"+V
w[K]=o[V]}if(v&&v.getBoundingClientRect){v.style.width="100%",v.style.height="100%"
var x=v.getBoundingClientRect()
v.style.width="",v.style.height="",w.ads_ad_unit_width_auto=Math.floor(x.right-x.left),w.ads_ad_unit_height_auto=Math.floor(x.bottom-x.top)}return b.ads_ad_unit_width=100,b.ads_ad_unit_height=100,y.ads_ad_unit_width=parseInt(w.ads_ad_unit_width)||"auto"===w.ads_ad_unit_width&&w.ads_ad_unit_width_auto||b.ads_ad_unit_width,y.ads_ad_unit_height=parseInt(w.ads_ad_unit_height)||"auto"===w.ads_ad_unit_height&&w.ads_ad_unit_height_auto||b.ads_ad_unit_height,w.ads_handler&&(y.ads_handler=w.ads_handler),w.ads_handler_empty_html&&(y.ads_handler_empty_html=w.ads_handler_empty_html),delete w.ads_handler,delete w.ads_handler_empty_html,g.act="ads_web",g.url=location.href,VK.extend(g,w),e.noDefaultParams=!0,e.width=y.ads_ad_unit_width,e.allowTransparency=!0,m.startHeight=y.ads_ad_unit_height,m.minWidth=y.ads_ad_unit_width,_.adsOnInitLoader=i,_.adsOnInit=n,VK.Widgets._constructor("ads_rotate.php",t,e,g,_,m,p)},VK.Widgets._constructor=function(t,e,o,i,n,r,s,a,d){var l=document.getElementById(e)
if(a=a||++VK.Widgets.count,!l){if(d=d||0,d>10)throw Error("VK.Widgets: object #"+e+" not found.")
return setTimeout(function(){VK.Widgets._constructor(t,e,o,i,n,r,s,a,d+1)},500),a}var c,u,p,h,f,g,m,_
o=o||{},r=r||{},n=n||{},c=o.base_domain||VK._protocol+"//vk.com",u="auto"==o.width?l.clientWidth||"100%":parseInt(o.width,10),o.height?(i.height=o.height,l.style.height=o.height+"px"):l.style.height=(r.startHeight||200)+"px",u=u?Math.max(r.minWidth||200,Math.min(1e4,u))+"px":"100%",i.url||(i.url=o.pageUrl||location.href.replace(/#.*$/,"")),p=c+"/"+t,h="",o.noDefaultParams||(h+="&app="+(VK._apiId||"0")+"&width="+u),h+="&_ver="+VK.version,VK._iframeAppWidget&&(i.iframe_app=1)
for(_ in i){if("title"==_&&i[_].length>80&&(i[_]=i[_].substr(0,80)+"..."),"description"==_&&i[_].length>160&&(i[_]=i[_].substr(0,160)+"..."),"number"==typeof i[_])f=i[_]
else try{f=encodeURIComponent(i[_])}catch(v){f=""}h+="&"+_+"="+f}return h+="&"+(+new Date).toString(16),p+="?"+h.substr(1),l.style.width=u,VK.Widgets.loading(l,!0),n.publish=function(){var t=Array.prototype.slice.call(arguments)
t.push(a),VK.Observer.publish.apply(VK.Observer,t)},n.onInit=function(){VK.Widgets.loading(l,!1),n.onReady&&n.onReady(),o.onReady&&o.onReady()},n.resize=function(t){l.style.height=t+"px"
var e=document.getElementById("vkwidget"+a)
e&&(e.style.height=t+"px")},n.resizeWidget=function(t,e){t=parseInt(t),e=parseInt(e)
var i=document.getElementById("vkwidget"+a)
isFinite(t)&&(l.style.width=t+"px",i&&(i.style.width=t+"px")),isFinite(e)&&(l.style.height=e+"px",i&&(i.style.height=e+"px")),o.onResizeWidget&&o.onResizeWidget()},n.updateVersion=function(t){t>1&&VK.Api.attachScript("//vk.com/js/api/openapi_update.js?"+parseInt(t))},g=VK.Widgets.RPC[a]=new fastXDM.Server(n,function(t){return t?(t=t.toLowerCase(),t.match(/(\.|\/)vk\.com($|\/|\?)/)):!0},{safe:!0}),m=VK.Widgets.RPC[a].append(l,{src:p,width:-1!=u.indexOf("%")?u:parseInt(u)||u,height:r.startHeight||"100%",scrolling:"no",id:"vkwidget"+a,allowTransparency:o.allowTransparency||!1,style:{overflow:"hidden"}}),s&&setTimeout(function(){s(l,m||l.firstChild,g)},10),a}),VK.Util||(VK.Util={getPageData:function(){if(!VK._pData){var t,e=document.getElementsByTagName("meta"),o={},i=["description","title","url","image","app_id"]
for(var n in e)if(e[n].getAttribute&&e[n].getAttribute&&((t=e[n].getAttribute("name"))||(t=e[n].getAttribute("property"))))for(var r in i)(t==i[r]||t=="og:"+i[r]||t=="vk:"+i[r])&&(o[i[r]]=e[n].content)
o.app_id&&!VK._apiId&&(VK._apiId=o.app_id),o.title=o.title||document.title||"",o.description=o.description||"",o.image=o.image||"",!o.url&&VK._iframeAppWidget&&VK._apiId&&(o.url="/app"+VK._apiId,VK._browserHash&&(o.url+=VK._browserHash))
var s=location.href.replace(/#.*$/,"")
o.url&&o.url.indexOf(s)||(o.url=s),VK._pData=o}return VK._pData},getStyle:function(t,e){var o,i=document.defaultView||window
if(i.getComputedStyle){e=e.replace(/([A-Z])/g,"-$1").toLowerCase()
var n=i.getComputedStyle(t,null)
n&&(o=n.getPropertyValue(e))}else if(t.currentStyle){var r=e.replace(/\-(\w)/g,function(t,e){return e.toUpperCase()})
o=t.currentStyle[e]||t.currentStyle[r]}return o},getXY:function(t,e){if(t&&void 0!==t){var o=0,i=0
if(void 0!==t.getBoundingClientRect){var n=t.getBoundingClientRect()
o=n.left,i=n.top,e=!0}else if(t.offsetParent)do o+=t.offsetLeft,i+=t.offsetTop,e&&(o-=t.scrollLeft,i-=t.scrollTop)
while(t=t.offsetParent)
return e&&(i+=window.pageYOffset||window.scrollNode&&scrollNode.scrollTop||document.documentElement.scrollTop,o+=window.pageXOffset||window.scrollNode&&scrollNode.scrollLeft||document.documentElement.scrollLeft),[o,i]}},Box:function(t,e,o){o=o||{}
var i=document.body.style.overflow,n=document.createElement("DIV"),r=new fastXDM.Server(VK.extend(o,{onInit:function(){s.style.background="transparent",s.style.visibility="visible",document.body.style.overflow="hidden",document.body.removeChild(n)},hide:function(){s.style.display="none"},tempHide:function(){s.style.left="-10000px",s.style.top="-10000px",s.style.width="10px",s.style.height="10px",document.body.style.overflow=i},destroy:function(){try{s.src="about: blank;"}catch(t){}s.parentNode.removeChild(s),document.body.style.overflow=i},resize:function(){}},!0),!1,{safe:!0}),s=r.append(document.body,{src:t.replace(/&amp;/g,"&"),scrolling:"no",allowTransparency:!0,style:{position:"fixed",left:0,top:0,zIndex:1002,background:VK._protocol+"//vk.com/images/upload.gif center center no-repeat transparent",padding:"0",border:"0",width:"100%",height:"100%",overflow:"hidden",visibility:"hidden"}})
return n.innerHTML='<div style="position: fixed;left: 50%;top: 50%;margin: 0px auto 0px -60px;z-index: 1002;width: 100px;"><div style="background: url(//vk.com/images/upload_inv_mono'+(window.devicePixelRatio>=2?"_2x":"")+'.gif) no-repeat 50% 50%;background-size: 64px 16px;height: 50px;position: absolute;width: 100%;z-index: 100;"></div><div style="background-color: #000;opacity: 0.7;filter: alpha(opacity=70);height: 50px;-webkit-border-radius: 5px;-khtml-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);-moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);"></div></div>',document.body.insertBefore(n,document.body.firstChild),{show:function(){s.style.display="block",document.body.style.overflow="hidden"},hide:function(){s.style.display="none",document.body.style.overflow=i},iframe:s,rpc:r}},addEvent:function(t,e){window.document.addEventListener?window.document.addEventListener(t,e,!1):window.document.attachEvent&&window.document.attachEvent("on"+t,e)},removeEvent:function(t,e){window.document.removeEventListener?window.document.removeEventListener(t,e,!1):window.document.detachEvent&&window.document.detachEvent("on"+t,e)},ss:function(t,e){VK.extend(t.style,e,!0)}}),window.vkAsyncInit&&setTimeout(vkAsyncInit,0),window.vkAsyncInitCallbacks&&vkAsyncInitCallbacks.length&&setTimeout(function(){for(var t;t=vkAsyncInitCallbacks.pop();)try{t()}catch(e){try{console.error(e)}catch(o){}}},0)
try{window.stManager&&stManager.done("api/openapi.js")}catch(e){}