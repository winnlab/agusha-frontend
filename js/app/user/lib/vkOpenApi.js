!function(a){function e(){var a="";for(i=0;5>i;i++)a+=Math.ceil(15*Math.random()).toString(16);return a}function f(a,b,c,d,e){a[b]?c.apply(d):(e=e||0,1e3>e&&setTimeout(function(){f(a,b,c,d,e+1)},0))}function g(b){setTimeout(function(){var c=document.createElement("script");c.type="text/javascript",c.src=b||a.fastXDM.helperUrl,f(document,"body",function(){document.getElementsByTagName("HEAD")[0].appendChild(c)})},0)}function h(a,b){switch(typeof a){case"string":return b?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):a.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&");case"object":if("[object Array]"===Object.prototype.toString.apply(a)){newValue=[];for(var c=0;c<a.length;c++)newValue[c]=h(a[c],b)}else for(var d in a)newValue={},Object.hasOwnProperty.call(a,d)&&(newValue[d]=h(a[d],b));default:newValue=a}return newValue}function j(a,b){d.loaded?a.apply(b,[d]):c.push([b,a])}function k(){d.loaded=!0;for(var a=c.length;a--;)c[a][1].apply(c[a][0],[d])}function l(a,b){j(function(c){var d=c.json.parse(a);if(d[0]){d[1]||(d[1]=[]);for(var e=d[1].length;e--;)if(d[1][e]._func){var f=d[1][e]._func;d[1][e]=function(){var a=Array.prototype.slice.call(arguments);a.unshift("_func"+f),b.callMethod.apply(b,a)}}else b.options.safe&&(d[1][e]=h(d[1][e],!0));setTimeout(function(){if(!b.methods[d[0]])throw Error("fastXDM: Method "+d[0]+" is undefined");b.methods[d[0]].apply(b,d[1])},0)}})}function m(a,b){for(var c in b)a[c]&&"object"==typeof a[c]?m(a[c],b[c]):a[c]=b[c]}if(!a.fastXDM){var b={},c=[],d={};a.fastXDM={_id:0,helperUrl:("https:"===location.protocol?"https:":"http:")+"//vk.com/js/api/xdmHelper.js",Server:function(c,d,f){this.methods=c||{},this.id=a.fastXDM._id++,this.options=f||{},this.filter=d,this.key=e(),this.methods["%init%"]=this.methods.__fxdm_i=function(){a.fastXDM.run(this.id),this.methods.onInit&&this.methods.onInit()},this.frameName="fXD"+this.key,this.server=!0,b[this.key]=[l,this]},Client:function(c,d){if(this.methods=c||{},this.id=a.fastXDM._id++,this.options=d||{},a.fastXDM.run(this.id),0!==window.name.indexOf("fXD"))throw Error("Wrong window.name property.");this.key=window.name.substr(3),this.caller=window.parent,b[this.key]=[l,this],this.client=!0,a.fastXDM.on("helper",function(){a.fastXDM.onClientStart(this)},this),j(function(a){a.send(this,a.json.stringify(["%init%"]));var b=this.methods;setTimeout(function(){b.onInit&&b.onInit()},0)},this)},onMessage:function(a){if(!a.data)return!1;var c=a.data;if("string"!=typeof c&&!(c instanceof String))return!1;var d=c.substr(0,5);if(b[d]){var e=b[d][1];!e||e.filter&&!e.filter(a.origin)||b[d][0](a.data.substr(6),e)}},setJSON:function(a){d.json=a},getJSON:function(a){return a?(j(function(b){a(b.json)}),void 0):d.json},setEnv:function(a){var b;for(b in a)d[b]=a[b];k()},_q:{},on:function(a,b,c){this._q[a]||(this._q[a]=[]),-1==this._q[a]?b.apply(c):this._q[a].push([b,c])},run:function(a){var b=(this._q[a]||[]).length;if(this._q[a]&&b>0)for(var c=0;b>c;c++)this._q[a][c][0].apply(this._q[a][c][1]);this._q[a]=-1},waitFor:f},a.fastXDM.Server.prototype.start=function(b,c){if(b.contentWindow)this.caller=b.contentWindow,this.frame=b,a.fastXDM.on("helper",function(){a.fastXDM.onServerStart(this)},this);else{var d=this;c=c||0,50>c&&setTimeout(function(){d.start.apply(d,[b,c+1])},100)}},a.fastXDM.Server.prototype.destroy=function(){b.splice(b.indexOf(this.key),1)},a.fastXDM.Server.prototype.append=function(a,b){var c=document.createElement("DIV");c.innerHTML='<iframe name="'+this.frameName+'" ></iframe>';var d=c.firstChild,e=this;return setTimeout(function(){d.frameBorder="0",b&&m(d,b),a.insertBefore(d,a.firstChild),e.start(d)},0),d},a.fastXDM.Client.prototype.callMethod=a.fastXDM.Server.prototype.callMethod=function(){for(var b=Array.prototype.slice.call(arguments),c=b.shift(),d=b.length;d--;)if("function"==typeof b[d]){this.funcsCount=(this.funcsCount||0)+1;var e=b[d],g="_func"+this.funcsCount;this.methods[g]=function(){e.apply(this,arguments),delete this.methods[g]},b[d]={_func:this.funcsCount}}else this.options.safe&&(b[d]=h(b[d],!1));f(this,"caller",function(){a.fastXDM.on(this.id,function(){j(function(a){a.send(this,a.json.stringify([c,b]))},this)},this)},this)},a.JSON&&"object"==typeof a.JSON&&a.JSON.parse&&a.JSON.stringify&&'{"a":[1,2,3]}'==a.JSON.stringify({a:[1,2,3]}).replace(/ /g,"")?d.json={parse:a.JSON.parse,stringify:a.JSON.stringify}:a.fastXDM._needJSON=!0,a.postMessage?(d.protocol="p",d.send=function(a,b){var c=a.frame?a.frame.contentWindow:a.caller;c.postMessage(a.key+":"+b,"*")},a.addEventListener?a.addEventListener("message",a.fastXDM.onMessage,!1):a.attachEvent("onmessage",a.fastXDM.onMessage),a.fastXDM._needJSON?(a.fastXDM._onlyJSON=!0,g()):k()):g()}}(window),window.VK||(window.VK={}),VK.MD5||(VK.MD5=function(a){var b=function(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c},c=function(a,b){return a<<b|a>>>32-b},d=function(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)},e=function(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)},f=function(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)},g=function(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)},h=function(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)},i=function(a,c){var l,m,n,o,d=1732584193,i=-271733879,j=-1732584194,k=271733878;a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;for(var p=0,q=a.length;q>p;p+=16)l=d,m=i,n=j,o=k,d=e(d,i,j,k,a[p+0],7,-680876936),k=e(k,d,i,j,a[p+1],12,-389564586),j=e(j,k,d,i,a[p+2],17,606105819),i=e(i,j,k,d,a[p+3],22,-1044525330),d=e(d,i,j,k,a[p+4],7,-176418897),k=e(k,d,i,j,a[p+5],12,1200080426),j=e(j,k,d,i,a[p+6],17,-1473231341),i=e(i,j,k,d,a[p+7],22,-45705983),d=e(d,i,j,k,a[p+8],7,1770035416),k=e(k,d,i,j,a[p+9],12,-1958414417),j=e(j,k,d,i,a[p+10],17,-42063),i=e(i,j,k,d,a[p+11],22,-1990404162),d=e(d,i,j,k,a[p+12],7,1804603682),k=e(k,d,i,j,a[p+13],12,-40341101),j=e(j,k,d,i,a[p+14],17,-1502002290),i=e(i,j,k,d,a[p+15],22,1236535329),d=f(d,i,j,k,a[p+1],5,-165796510),k=f(k,d,i,j,a[p+6],9,-1069501632),j=f(j,k,d,i,a[p+11],14,643717713),i=f(i,j,k,d,a[p+0],20,-373897302),d=f(d,i,j,k,a[p+5],5,-701558691),k=f(k,d,i,j,a[p+10],9,38016083),j=f(j,k,d,i,a[p+15],14,-660478335),i=f(i,j,k,d,a[p+4],20,-405537848),d=f(d,i,j,k,a[p+9],5,568446438),k=f(k,d,i,j,a[p+14],9,-1019803690),j=f(j,k,d,i,a[p+3],14,-187363961),i=f(i,j,k,d,a[p+8],20,1163531501),d=f(d,i,j,k,a[p+13],5,-1444681467),k=f(k,d,i,j,a[p+2],9,-51403784),j=f(j,k,d,i,a[p+7],14,1735328473),i=f(i,j,k,d,a[p+12],20,-1926607734),d=g(d,i,j,k,a[p+5],4,-378558),k=g(k,d,i,j,a[p+8],11,-2022574463),j=g(j,k,d,i,a[p+11],16,1839030562),i=g(i,j,k,d,a[p+14],23,-35309556),d=g(d,i,j,k,a[p+1],4,-1530992060),k=g(k,d,i,j,a[p+4],11,1272893353),j=g(j,k,d,i,a[p+7],16,-155497632),i=g(i,j,k,d,a[p+10],23,-1094730640),d=g(d,i,j,k,a[p+13],4,681279174),k=g(k,d,i,j,a[p+0],11,-358537222),j=g(j,k,d,i,a[p+3],16,-722521979),i=g(i,j,k,d,a[p+6],23,76029189),d=g(d,i,j,k,a[p+9],4,-640364487),k=g(k,d,i,j,a[p+12],11,-421815835),j=g(j,k,d,i,a[p+15],16,530742520),i=g(i,j,k,d,a[p+2],23,-995338651),d=h(d,i,j,k,a[p+0],6,-198630844),k=h(k,d,i,j,a[p+7],10,1126891415),j=h(j,k,d,i,a[p+14],15,-1416354905),i=h(i,j,k,d,a[p+5],21,-57434055),d=h(d,i,j,k,a[p+12],6,1700485571),k=h(k,d,i,j,a[p+3],10,-1894986606),j=h(j,k,d,i,a[p+10],15,-1051523),i=h(i,j,k,d,a[p+1],21,-2054922799),d=h(d,i,j,k,a[p+8],6,1873313359),k=h(k,d,i,j,a[p+15],10,-30611744),j=h(j,k,d,i,a[p+6],15,-1560198380),i=h(i,j,k,d,a[p+13],21,1309151649),d=h(d,i,j,k,a[p+4],6,-145523070),k=h(k,d,i,j,a[p+11],10,-1120210379),j=h(j,k,d,i,a[p+2],15,718787259),i=h(i,j,k,d,a[p+9],21,-343485551),d=b(d,l),i=b(i,m),j=b(j,n),k=b(k,o);return[d,i,j,k]},j=function(a){for(var e,f,b="",c=-1,d=a.length;++c<d;)e=a.charCodeAt(c),f=d>c+1?a.charCodeAt(c+1):0,e>=55296&&56319>=e&&f>=56320&&57343>=f&&(e=65536+((1023&e)<<10)+(1023&f),c++),127>=e?b+=String.fromCharCode(e):2047>=e?b+=String.fromCharCode(192|31&e>>>6,128|63&e):65535>=e?b+=String.fromCharCode(224|15&e>>>12,128|63&e>>>6,128|63&e):2097151>=e&&(b+=String.fromCharCode(240|7&e>>>18,128|63&e>>>12,128|63&e>>>6,128|63&e));return b},k=function(a){var c,d,b=Array(a.length>>2);for(c=0,d=b.length;d>c;c++)b[c]=0;for(c=0,d=8*a.length;d>c;c+=8)b[c>>5]|=(255&a.charCodeAt(c/8))<<c%32;return b},l=function(a){for(var b="",c=0,d=32*a.length;d>c;c+=8)b+=String.fromCharCode(255&a[c>>5]>>>c%32);return b},m=function(a){return l(i(k(a),8*a.length))},n=function(a){for(var d,b="0123456789abcdef",c="",e=0,f=a.length;f>e;e++)d=a.charCodeAt(e),c+=b.charAt(15&d>>>4)+b.charAt(15&d);return c};return n(m(j(a)))}),VK.extend=function(a,b,c){for(var d in b)(c||"undefined"==typeof a[d])&&(a[d]=b[d]);return a},"https:"!==VK._protocol&&(VK._protocol="https:"===location.protocol?"https:":"http:"),VK.xdConnectionCallbacks?(setTimeout(function(){for(var a;a=VK.xdConnectionCallbacks.pop();)a()},0),VK.Widgets&&!VK.Widgets._constructor&&(VK.Widgets=!1)):(VK.extend(VK,{version:1,_apiId:null,_session:null,_userStatus:"unknown",_domain:{main:"https://oauth.vk.com/",api:"https://api.vk.com/"},_path:{login:"authorize",proxy:"fxdm_oauth_proxy.html"},_rootId:"vk_api_transport",_nameTransportPath:"",xdReady:!1,access:{FRIENDS:2,PHOTOS:4,AUDIO:8,VIDEO:16,MATCHES:32,QUESTIONS:64,WIKI:128}}),VK.init=function(a){var b,c;if(VK._apiId=null,!a.apiId)throw Error("VK.init() called without an apiId");if(VK._apiId=a.apiId,a.onlyWidgets)return!0;a.nameTransportPath&&""!==a.nameTransportPath&&(VK._nameTransportPath=a.nameTransportPath),c=document.getElementById(VK._rootId),c||(c=document.createElement("div"),c.id=VK._rootId,b=document.getElementsByTagName("body")[0],b.insertBefore(c,b.childNodes[0])),c.style.position="absolute",c.style.top="-10000px";var d=VK.Cookie.load();d&&(VK.Auth._loadState="loaded",VK.Auth.setSession(d,d?"connected":"unknown"))},VK.Cookie||(VK.Cookie={_domain:null,load:function(){var b,a=document.cookie.match("\\bvk_app_"+VK._apiId+"=([^;]*)\\b");if(a){if(b=this.decode(a[1]),"oauth"!=b.secret)return!1;b.expire=parseInt(b.expire,10),VK.Cookie._domain="."+window.location.hostname}return b},setRaw:function(a,b,c,d){var e;e="vk_app_"+VK._apiId+"="+a;var f=d?(new Date).getTime()+1e3*d:1e3*b;e+=a&&0===b?"":"; expires="+new Date(f).toGMTString(),e+="; path=/",e+=c?"; domain=."+c:"",document.cookie=e,this._domain=c},set:function(a,b){a?this.setRaw(this.encode(a),a.expire,window.location.hostname,(b||{}).time):this.clear()},clear:function(){this.setRaw("",0,this._domain,0)},encode:function(a){var c,b=[];for(c in a)"user"!=c&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.sort(),b.join("&")},decode:function(a){var d,e,b={},c=a.split("&");for(d=0;d<c.length;d++)e=c[d].split("=",2),e&&e[0]&&(b[decodeURIComponent(e[0])]=decodeURIComponent(e[1]));return b}}),VK.Api||(VK.Api={_headId:null,_callbacks:{},ie6_7:function(){return VK.Api.ieTested||(VK.Api.isIE6_7=navigator.userAgent.match(/MSIE [6|7]/i),VK.Api.ieTested=!0),VK.Api.isIE6_7},attachScript:function(a){VK.Api._headId||(VK.Api._headId=document.getElementsByTagName("head")[0]);var b=document.createElement("script");b.type="text/javascript",b.setAttribute("encoding","UTF-8"),b.src=a,VK.Api._headId.appendChild(b)},checkMethod:function(a,b,c,d){var e=a.toLowerCase();if("wall.post"==e||"activity.set"==e){var f="activity.set"==e?b.text:b.message;f||(f="");var g=VK._protocol+"//vk.com/al_apps.php?act=wall_post_box&widget=1&method="+e+"&aid="+parseInt(VK._apiId,10)+"&text="+encodeURIComponent(f);"wall.post"==e&&(g+="&owner_id="+parseInt(b.owner_id||0,10)+"&attachments="+(b.attachments||b.attachment||"")+"&publish_date="+(b.publish_date||""));var h="_"+Math.random().toString(16).substr(2);g+="&method_access="+h,VK.UI.popup({url:g,width:460,height:249});var j=setInterval(function(){VK.UI.active.closed&&(clearInterval(j),b.method_access=h,VK.Api.call(a,b,c,d))},500);return!1}return!0},call:function(a,b,c,d){var f,g,e=b||{};if("object"!=typeof e||"function"!=typeof c)return!1;if(b.method_access||b.method_force||VK.Api.checkMethod(a,b,c,d)){if(d||(d=0),"loaded"!=VK.Auth._loadState){var h=function(d){d&&d.session&&(VK.Observer.unsubscribe("auth.loginStatus",h),VK.Api.call(a,b,c))};return VK.Observer.subscribe("auth.loginStatus",h),VK.Auth.getLoginStatus(),void 0}if(VK.Api.queryLength(e)<1500&&!VK.Api.ie6_7()){for(var i=!1,j=parseInt(1e7*Math.random(),10);VK.Api._callbacks[j];)j=parseInt(1e7*Math.random(),10);e.callback="VK.Api._callbacks["+j+"]"}else var i=!0;VK._session&&VK._session.sid&&(e.access_token=VK._session.sid),f=VK.Cookie.encode(e),g=function(e){if(!e.error||3!=e.error.error_code&&4!=e.error.error_code&&5!=e.error.error_code)c(e);else{if(d>3)return!1;var f=function(e){VK.Observer.unsubscribe("auth.sessionChange",f),delete b.access_token,e.session&&VK.Api.call(a,b,c,d+1)};VK.Observer.subscribe("auth.sessionChange",f),VK.Auth.getLoginStatus()}i||delete VK.Api._callbacks[j]},i?VK.xdReady?VK.XDM.remote.callMethod("apiCall",a,f,g):(VK.Observer.subscribe("xdm.init",function(){VK.XDM.remote.callMethod("apiCall",a,f,g)}),VK.XDM.init()):(VK.Api._callbacks[j]=g,VK.Api.attachScript(VK._domain.api+"method/"+a+"?"+f))}},queryLength:function(a){var c,b=100;for(c in a)b+=c.length+encodeURIComponent(a[c]).length+1;return b}},VK.api=function(a,b,c){VK.Api.call(a,b,c)}),VK.Auth||(VK.Auth={popup:null,lsCb:{},setSession:function(a,b,c,d){var e=!VK._session&&a,f=VK._session&&!a,g=VK._session&&a&&VK._session.mid!=a.mid,h=e||f||VK._session&&a&&VK._session.sid!=a.sid,i=b!=VK._userStatus,j={session:a,status:b,settings:c};return VK._session=a,VK._userStatus=b,VK.Cookie.set(a,d),(h||i||g)&&setTimeout(function(){i&&VK.Observer.publish("auth.statusChange",j),(f||g)&&VK.Observer.publish("auth.logout",j),(e||g)&&VK.Observer.publish("auth.login",j),h&&VK.Observer.publish("auth.sessionChange",j)},0),j},login:function(a,b){var c,d;if(!VK._apiId)return!1;c=window.location.protocol+"//"+window.location.hostname,d=VK._domain.main+VK._path.login+"?client_id="+VK._apiId+"&display=popup&redirect_uri=close.html&response_type=token",b&&parseInt(b,10)>0&&(d+="&scope="+b),VK.Observer.unsubscribe("auth.onLogin"),VK.Observer.subscribe("auth.onLogin",a),VK.UI.popup({width:665,height:370,url:d});var e=function(){VK.Auth.getLoginStatus(function(a){VK.Observer.publish("auth.onLogin",a),VK.Observer.unsubscribe("auth.onLogin")},!0)};VK.UI.popupOpened=!0;var f=function(){if(!VK.UI.popupOpened)return!1;try{if(!VK.UI.active.top||VK.UI.active.closed)return VK.UI.popupOpened=!1,e(),!0}catch(a){return VK.UI.popupOpened=!1,e(),!0}setTimeout(f,100)};setTimeout(f,100)},logout:function(a){VK.Auth.revokeGrants(a)},revokeGrants:function(a){var b=function(c){VK.Observer.unsubscribe("auth.statusChange",b),a&&a(c)};VK.Observer.subscribe("auth.statusChange",b),VK._session&&VK._session.sid&&VK.Api.attachScript("https://login.vk.com/?act=openapi&oauth=1&aid="+parseInt(VK._apiId,10)+"&location="+encodeURIComponent(window.location.hostname)+"&do_logout=1&token="+VK._session.sid),VK.Cookie.clear()},getSession:function(){return VK._session},getLoginStatus:function(a,b){if(VK._apiId){if(a){if(!b&&"loaded"==VK.Auth._loadState)return a({status:VK._userStatus,session:VK._session}),void 0;VK.Observer.subscribe("auth.loginStatus",a)}if(b||"loading"!=VK.Auth._loadState){VK.Auth._loadState="loading";for(var c=parseInt(1e7*Math.random(),10);VK.Auth.lsCb[c];)c=parseInt(1e7*Math.random(),10);VK.Auth.lsCb[c]=function(a){if(delete VK.Auth.lsCb[c],VK.Auth._loadState="loaded",a&&a.auth){var d={mid:a.user.id,sid:a.access_token,sig:a.sig,secret:a.secret,expire:a.expire};b&&(d.user=a.user);var e="connected"}else{var d=null,e=a.user?"logined":"unknown";VK.Cookie.clear()}VK.Auth.setSession(d,e,!1,a),VK.Observer.publish("auth.loginStatus",{session:d,status:e}),VK.Observer.unsubscribe("auth.loginStatus")},VK.Api.attachScript("https://login.vk.com/?act=openapi&oauth=1&aid="+parseInt(VK._apiId,10)+"&location="+encodeURIComponent(window.location.hostname)+"&rnd="+c)}}}})),VK.UI||(VK.UI={active:null,_buttons:[],popup:function(a){var b="undefined"!=typeof window.screenX?window.screenX:window.screenLeft,c="undefined"!=typeof window.screenY?window.screenY:window.screenTop,d="undefined"!=typeof window.outerWidth?window.outerWidth:document.body.clientWidth,e="undefined"!=typeof window.outerHeight?window.outerHeight:document.body.clientHeight-22,f=a.width,g=a.height,h=parseInt(b+(d-f)/2,10),i=parseInt(c+(e-g)/2.5,10),j="width="+f+",height="+g+",left="+h+",top="+i;this.active=window.open(a.url,"vk_openapi",j)},button:function(a){var c="";"string"==typeof a&&(a=document.getElementById(a)),this._buttons.push(a),index=this._buttons.length-1,c='<table cellspacing="0" cellpadding="0" id="openapi_UI_'+index+'" onmouseover="VK.UI._change(1, '+index+');" onmouseout="VK.UI._change(0, '+index+');" onmousedown="VK.UI._change(2, '+index+');" onmouseup="VK.UI._change(1, '+index+');" style="cursor: pointer; border: 0px; font-family: tahoma, arial, verdana, sans-serif, Lucida Sans; font-size: 10px;"><tr style="vertical-align: middle">'+'<td><div style="border: 1px solid #3b6798;border-radius: 2px 0px 0px 2px;-moz-border-radius: 2px 0px 0px 2px;-webkit-border-radius: 2px 0px 0px 2px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 4px 0px 6px;line-height: 13px;">&#1042;&#1086;&#1081;&#1090;&#1080;</div></div></td>'+'<td><div style="background: url('+VK._protocol+'//vk.com/images/btns.png) 0px -42px no-repeat; width: 21px; height: 21px"></div></td>'+'<td><div style="border: 1px solid #3b6798;border-radius: 0px 2px 2px 0px;-moz-border-radius: 0px 2px 2px 0px;-webkit-border-radius: 0px 2px 2px 0px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 6px 0px 4px;line-height: 13px;">&#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1077;</div></div></td>'+"</tr></table>",a.innerHTML=c,a.style.width=a.childNodes[0].offsetWidth+"px"},_change:function(a,b){for(var c=document.getElementById("openapi_UI_"+b).rows[0],d=[c.cells[0].firstChild.firstChild,c.cells[2].firstChild.firstChild],e=0;2>e;++e){var f=d[e];0===a?(f.style.backgroundColor="#6D8DB1",f.style.borderTopColor="#7E9CBC",f.style.borderLeftColor=f.style.borderRightColor=f.style.borderBottomColor="#5C82AB"):1==a?(f.style.backgroundColor="#7693B6",f.style.borderTopColor="#88A4C4",f.style.borderLeftColor=f.style.borderRightColor=f.style.borderBottomColor="#6088B4"):2==a&&(f.style.backgroundColor="#6688AD",f.style.borderBottomColor="#7495B8",f.style.borderLeftColor=f.style.borderRightColor=f.style.borderTopColor="#51779F")}0===a||2==a?c.cells[2].firstChild.style.backgroundPosition="0px -42px":1==a&&(c.cells[2].firstChild.style.backgroundPosition="0px -63px")}}),VK.XDM||(VK.XDM={remote:null,init:function(){if(this.remote)return!1;var a=VK._domain.api+VK._path.proxy;this.remote=new fastXDM.Server({onInit:function(){VK.xdReady=!0,VK.Observer.publish("xdm.init")}}),this.remote.append(document.getElementById(VK._rootId),{src:a})},xdHandler:function(code){try{eval("VK."+code)}catch(e){}}}),VK.Observer||(VK.Observer={_subscribers:function(){return this._subscribersMap||(this._subscribersMap={}),this._subscribersMap},publish:function(a){var d,e,b=Array.prototype.slice.call(arguments),a=b.shift(),c=this._subscribers()[a];if(c)for(d=0,e=c.length;e>d;d++)null!=c[d]&&c[d].apply(this,b)},subscribe:function(a,b){var c=this._subscribers();return"function"!=typeof b?!1:(c[a]?c[a].push(b):c[a]=[b],void 0)},unsubscribe:function(a,b){var d,e,c=this._subscribers()[a];if(!c)return!1;if("function"==typeof b)for(d=0,e=c.length;e>d;d++)c[d]==b&&(c[d]=null);else delete this._subscribers()[a]}}),VK.Widgets||(VK.Widgets={},VK.Widgets.count=0,VK.Widgets.RPC={},VK.Widgets.loading=function(a,b){a.style.background=b?'url("'+VK._protocol+'//vk.com/images/upload.gif") center center no-repeat transparent':"none"},VK.Widgets.Comments=function(a,b,c){var d=VK.Util.getPageData();if(!VK._apiId)throw Error("VK not initialized. Please use VK.init");b=b||{};var h,i,e={limit:b.limit||10,height:b.height||0,mini:void 0===b.mini?"auto":b.mini,norealtime:b.norealtime?1:0},f=function(){return i.callMethod("mouseUp"),!1},g=function(a){i.callMethod("mouseMove",{screenY:a.screenY})};if(b.browse)e.browse=1,e.replies=b.replies||0;else{var j=b.pageUrl||d.url;"/"==j.substr(0,1)&&(j=location.protocol+"//"+location.host+j),VK.extend(e,{page:c||0,status_publish:void 0===b.autoPublish?1:b.autoPublish,attach:void 0===b.attach?"*":b.attach?b.attach:"",url:j,title:b.pageTitle||d.title,description:b.pageDescription||d.description,image:b.pageImage||d.image})}return b.onChange&&(VK.Observer.subscribe("widgets.comments.new_comment",b.onChange),VK.Observer.subscribe("widgets.comments.delete_comment",b.onChange)),VK.Widgets._constructor("widget_comments.php",a,b,e,{showBox:function(a){var d=VK.Util.Box((b.base_domain||VK._protocol+"//vk.com")+"/"+a,[],{proxy:function(){i.callMethod.apply(i,arguments)}});d.show()},startDrag:function(){cursorBack=window.document.body.style.cursor,window.document.body.style.cursor="pointer",VK.Util.addEvent("mousemove",g),VK.Util.addEvent("mouseup",f)},stopDrag:function(){window.document.body.style.cursor=cursorBack,VK.Util.removeEvent("mousemove",g),VK.Util.removeEvent("mouseup",f)}},{startHeight:133,minWidth:300,width:"100%"},function(a,b,c){h=b,i=c})},VK.Widgets.CommentsBrowse=function(a,b){return b=b||{},b.browse=1,VK.Widgets.Comments(a,b)},VK.Widgets.Recommended=function(a,b){if(VK.Util.getPageData(),!VK._apiId)throw Error("VK not initialized. Please use VK.init");b=b||{};var d={limit:b.limit||5,max:b.max||0,sort:b.sort||"friend_likes",verb:b.verb||0,period:b.period||"week",target:b.target||"parent"};return VK.Widgets._constructor("widget_recommended.php",a,b,d,{},{startHeight:90+30*d.limit,minWidth:150,width:"100%"})},VK.Widgets.Post=function(a,b,c,d,e){e=e||{};var g,h,i,f={owner_id:b,post_id:c,hash:d||"",width:e.width||500};return VK.Widgets._constructor("widget_post.php",a,e,f,{showBox:function(a){var c=VK.Util.Box((e.base_domain||VK._protocol+"//vk.com")+"/"+a,[],{proxy:function(){h.callMethod.apply(h,arguments)}});c.show()},startDrag:function(){i=window.document.body.style.cursor,window.document.body.style.cursor="pointer"},stopDrag:function(){window.document.body.style.cursor=i}},{startHeight:90,minWidth:250,width:"100%"},function(a,b,c){g=b,h=c})},VK.Widgets.Like=function(a,b,c){function s(a){if((k||a)&&p&&o&&p&&("none"==o.style.display||"yes"==o.getAttribute("vkhidden"))){var c=b.getScrollTop?b.getScrollTop():document.body.scrollTop||document.documentElement.scrollTop||0,d=VK.Util.getXY(l,b.fixed),f=j?0:d[1];c>d[1]-120&&"top"!=b.tooltipPos||"vertical"==e||"bottom"==b.tooltipPos?(o.style.top=f+h+2+"px",p.callMethod("show",!1)):(o.style.top=f-125+"px",p.callMethod("show",!0)),VK.Util.ss(o,{left:(j?0:d[0])-("vertical"==e||"mini"==e?36:2)+"px",display:"block",opacity:1,filter:"none"}),o.setAttribute("vkhidden","no"),k=!0}}function t(a){k&&!a||!p||(p.callMethod("hide"),n.callMethod("hide"),setTimeout(function(){o.style.display="none"},400))}function u(){t(!0),r=VK.Util.Box(m.src+"&act=a_stats_box&widget_width=620"),r.show()}var d=VK.Util.getPageData();if(!VK._apiId)throw Error("VK not initialized. Please use VK.init");b=VK.extend(b||{},{allowTransparency:!0}),("button"==b.type||"vertical"==b.type||"mini"==b.type)&&delete b.width;var l,m,n,o,p,q,r,e="full"==b.type||"button"==b.type||"vertical"==b.type||"mini"==b.type?b.type:"full",f="full"==e?Math.max(200,b.width||350):"button"==e?180:"mini"==e?100:41,g=parseInt(b.height,10)||22,h="vertical"==e?2*g+7:"full"==e?g+1:g,i={page:c||0,url:b.pageUrl||d.url,type:e,verb:1==b.verb?1:0,color:b.color||"",title:b.pageTitle||d.title,description:b.pageDescription||d.description,image:b.pageImage||d.image,text:(b.text||"").substr(0,140),h:g},j=b.ttHere||!1,k=!1;return VK.Widgets._constructor("widget_like.php",a,b,i,{initTooltip:function(a){p=new fastXDM.Server({onInit:a?function(){s(!0)}:function(){},proxy:function(){n.callMethod.apply(n,arguments)},showBox:function(a,c){var d=VK.Util.Box((b.base_domain||VK._protocol+"//vk.com/")+a,[c.width,c.height],{proxy:function(){p.callMethod.apply(p,arguments)}});d.show()},statsBox:u},!1,{safe:!0}),o=p.append(j?l:document.body,{src:m.src+"&act=a_like_tooltip",scrolling:"no",allowTransparency:!0,id:m.id+"_tt",style:{position:"absolute",padding:0,display:"block",opacity:.01,filter:"alpha(opacity=1)",border:"0",width:"238px",height:"124px",zIndex:5e3,overflow:"hidden"}}),o.setAttribute("vkhidden","yes"),l.onmouseover=o.onmouseover=function(){clearTimeout(q),k=!0},l.onmouseout=o.onmouseout=function(){clearTimeout(q),k=!1,q=setTimeout(function(){t()},200)}},statsBox:u,showTooltip:s,hideTooltip:t,showBox:function(a){var d=VK.Util.Box((b.base_domain||VK._protocol+"//vk.com/")+a,[],{proxy:function(){n.callMethod.apply(n,arguments)}});d.show()},proxy:function(){p&&p.callMethod.apply(p,arguments)}},{startHeight:h,minWidth:f},function(a,b,c){n=c,VK.Util.ss(l=a,{height:h+"px",width:f+"px",position:"relative",clear:"both"}),VK.Util.ss(m=b,{height:h+"px",width:f+"px",overflow:"hidden",zIndex:150})})},VK.Widgets.Poll=function(a,b,c){var d=VK.Util.getPageData();if(!c)throw Error("No poll id passed");b=b||{};var e={poll_id:c,url:b.pageUrl||d.url||location.href,title:b.pageTitle||d.title,description:b.pageDescription||d.description};return VK.Widgets._constructor("widget_poll.php",a,b,e,{},{startHeight:133,minWidth:300,width:"100%"})},VK.Widgets.PagePoll=function(a,b,c){var d=VK.Util.getPageData();b=b||{};var e={page:c||0,norealtime:b.norealtime?1:0,poll_id:b.pollId||"",url:b.pageUrl||d.url||location.href,title:b.pageTitle||d.title,description:b.pageDescription||d.description};return VK.Widgets._constructor("al_widget_poll.php",a,b,e,{},{startHeight:133,minWidth:300,width:"100%"})},VK.Widgets.Community=VK.Widgets.Group=function(a,b,c){function g(){return d.callMethod("mouseUp"),!1}function h(a){return d.callMethod("mouseMove",{screenY:a.screenY}),!1}c=parseInt(c,10);var d;if(!c)throw Error("No group_id passed");b.mode=parseInt(b.mode,10).toString();var e={gid:c,mode:b.mode?b.mode:"0"};b.width||(b.width=200),b.wall&&(e.wall=b.wall),e.color1=b.color1||"",e.color2=b.color2||"",e.color3=b.color3||"",b.no_head&&(e.no_head=1),b.height||(b.height=290),b.wide&&(e.wide=1,b.width<300&&(b.width=300));var f;return VK.Widgets._constructor("widget_community.php",a,b,e,{showBox:function(a){var d=VK.Util.Box((b.base_domain||VK._protocol+"//vk.com/")+a,[],{proxy:function(){rpc.callMethod.apply(rpc,arguments)}});d.show()},startDrag:function(){f=window.document.body.style.cursor,window.document.body.style.cursor="pointer",VK.Util.addEvent("mousemove",h),VK.Util.addEvent("mouseup",g)},stopDrag:function(){window.document.body.style.cursor=f,VK.Util.removeEvent("mousemove",h),VK.Util.removeEvent("mouseup",g)},auth:function(){VK.Auth.login(null,1)}},{minWidth:120,width:"200",height:"290",startHeight:200},function(a,b,c){d=c})},VK.Widgets.Auth=function(a,b){if(VK.Util.getPageData(),!VK._apiId)throw Error("VK not initialized. Please use VK.init");return b.width||(b.width=200),type=b.type?1:0,VK.Widgets._constructor("widget_auth.php",a,b,{},{makeAuth:function(a){if(a.session&&(VK.Auth._loadState="loaded",VK.Auth.setSession(a.session,"connected"),VK.Observer.publish("auth.loginStatus",{session:a.session,status:"connected"}),VK.Observer.unsubscribe("auth.loginStatus")),b.onAuth)b.onAuth(a);else{if(b.authUrl)var c=b.authUrl;else var c=window.location.href;c+=-1==c.indexOf("?")?"?":"&";var d=[];for(var e in a)"session"!=e&&d.push(e+"="+decodeURIComponent(a[e]).replace(/&/g,"%26").replace(/\?/,"%3F"));window.location.href=c+d.join("&")}}},{startHeight:80})},VK.Widgets.Subscribe=function(a,b,c){c=parseInt(c,10);var d;if(!c)throw Error("No owner_id passed");var e={oid:c};return b.mode&&(e.mode=b.mode),b.soft&&(e.soft=b.soft),VK.Widgets._constructor("widget_subscribe.php",a,b,e,{showBox:function(a){var d=VK.Util.Box((b.base_domain||VK._protocol+"//vk.com/")+a,[],{proxy:function(){rpc.callMethod.apply(rpc,arguments)}});d.show()},auth:function(){VK.Auth.login(null,1)}},{minWidth:220,startHeight:22,height:b.height||22},function(a,b,c){d=c})},VK.Widgets.Ads=function(a,b,c){function p(a){VK.Widgets.loading(g,!0),r(a)}function q(a,c){VK.Widgets.loading(g,!1),s(c),b.onAdsReady&&b.onAdsReady.apply(b.onAdsReady,Array.prototype.slice.call(arguments)),t(a)}function r(a){if("vk__adsLight"in window)window.vk__adsLight&&vk__adsLight.userHandlers&&vk__adsLight.userHandlers.onInit&&vk__adsLight.userHandlers.onInit(!1);else{window.vk__adsLight=!1,a=parseInt(a);var c=VK.Api&&VK.Api.attachScript||VK.addScript,d=b.base_domain||VK._protocol+"//vk.com";c(d+"/js/al/aes_light.js?"+a)}}function s(a){if(a)for(var b in a){var c=a[b];"ads_ad_unit_width"===b||"ads_ad_unit_height"===b?b in j||(k[b]=parseInt(c)||"auto"===c&&j[b+"_auto"]||l[b]):b in k||(k[b]=c)}}function t(a){var b=u(k.ads_handler,a);if(0>=a&&b!==!0){try{console.log("VK: ad_unit_id = "+j.ads_ad_unit_id,", errorCode = ",a)}catch(c){}v(k.ads_handler_empty_html,k.ads_ad_unit_width,k.ads_ad_unit_height)}}function u(a){function k(a){return"[object Function]"===Object.prototype.toString.call(a)}function l(a){return"[object String]"===Object.prototype.toString.call(a)}var b=!1;try{if(!a)return!1;var c=!1;if(k(a))c=a;else if(l(a)){var d=a.split(".");c=window;for(var e=0,f=d.length;f>e&&(c=c[d[e]],c);e++);if(!c){"function"===a.substr(0,8)&&(a="return "+a+";");var g=new Function(a)();k(g)?c=g:b=g}}if(c){var h=Array.prototype.slice.call(arguments,1);b=c.apply(c,h)}}catch(i){try{console.error(i)}catch(j){}}return b}function v(a,b,c){function f(){if(!c)try{var a=e.contentWindow.document.body.firstChild.getBoundingClientRect(),b=Math.ceil(a.bottom-a.top);b&&(e.style.height=b,g.style.height=b)}catch(d){}}if(a&&g){b=b?b+"px":"",c=c?c+"px":"";var d='<html><head></head><body style="padding: 0; margin: 0;"><div>'+a+"</div></body></html>",e=document.createElement("iframe");e.onload=f,e.id=(h?h.id:"vkwidget-"+Math.round(1e6*Math.random()))+"_ads_html_handler",e.src="about:blank",e.width="100%",e.height="100%",e.scrolling="no",e.frameBorder="0",e.allowTransparency=!0,e.style.overflow="hidden",e.style.width=b,e.style.height=c,g.style.width=b,g.style.height=c,g.appendChild(e),e.contentWindow.vk_ads_html_handler=d,e.src='javascript:window["vk_ads_html_handler"]'}}function w(a,b,c){for(var d=c||0,e=(a||[]).length;e>d;d++)if(a[d]==b)return d;return-1}function x(a,b){return-1!=w(b,a)}function y(a,b,c){g=a,h=b,i=c}b=b||{},c=c||{};var h,i,d={},e={},f={},g=document.getElementById(a),j={},k={},l={};for(var m in c){var n=x(m,["hash"])?m:"ads_"+m;j[n]=c[m]}if(g&&g.getBoundingClientRect){g.style.width="100%",g.style.height="100%";var o=g.getBoundingClientRect();g.style.width="",g.style.height="",j.ads_ad_unit_width_auto=Math.floor(o.right-o.left),j.ads_ad_unit_height_auto=Math.floor(o.bottom-o.top)}return l.ads_ad_unit_width=100,l.ads_ad_unit_height=100,k.ads_ad_unit_width=parseInt(j.ads_ad_unit_width)||"auto"===j.ads_ad_unit_width&&j.ads_ad_unit_width_auto||l.ads_ad_unit_width,k.ads_ad_unit_height=parseInt(j.ads_ad_unit_height)||"auto"===j.ads_ad_unit_height&&j.ads_ad_unit_height_auto||l.ads_ad_unit_height,j.ads_handler&&(k.ads_handler=j.ads_handler),j.ads_handler_empty_html&&(k.ads_handler_empty_html=j.ads_handler_empty_html),delete j.ads_handler,delete j.ads_handler_empty_html,d.act="ads_web",d.url=location.href,VK.extend(d,j),b.noDefaultParams=!0,b.width=k.ads_ad_unit_width,b.allowTransparency=!0,e.startHeight=k.ads_ad_unit_height,e.minWidth=k.ads_ad_unit_width,f.adsOnInitLoader=p,f.adsOnInit=q,VK.Widgets._constructor("ads_rotate.php",a,b,d,f,e,y)},VK.Widgets._constructor=function(a,b,c,d,e,f,g,h,i){var j=document.getElementById(b);if(h=h||++VK.Widgets.count,!j){if(i=i||0,i>10)throw Error("VK.Widgets: object #"+b+" not found.");return setTimeout(function(){VK.Widgets._constructor(a,b,c,d,e,f,g,h,i+1)
},500),h}var l,m,n,o,p,q,r,s;c=c||{},f=f||{},e=e||{},l=c.base_domain||VK._protocol+"//vk.com",m="auto"==c.width?j.clientWidth||"100%":parseInt(c.width,10),c.height?(d.height=c.height,j.style.height=c.height+"px"):j.style.height=(f.startHeight||200)+"px",m=m?Math.max(f.minWidth||200,Math.min(1e4,m))+"px":"100%",d.url||(d.url=c.pageUrl||location.href.replace(/#.*$/,"")),n=l+"/"+a,o="",c.noDefaultParams||(o+="&app="+(VK._apiId||"0")+"&width="+m),o+="&_ver="+VK.version,VK._iframeAppWidget&&(d.iframe_app=1);for(s in d){if("title"==s&&d[s].length>80&&(d[s]=d[s].substr(0,80)+"..."),"description"==s&&d[s].length>160&&(d[s]=d[s].substr(0,160)+"..."),"number"==typeof d[s])p=d[s];else try{p=encodeURIComponent(d[s])}catch(t){p=""}o+="&"+s+"="+p}return o+="&"+(+new Date).toString(16),n+="?"+o.substr(1),j.style.width=m,VK.Widgets.loading(j,!0),e.publish=function(){var a=Array.prototype.slice.call(arguments);a.push(h),VK.Observer.publish.apply(VK.Observer,a)},e.onInit=function(){VK.Widgets.loading(j,!1),e.onReady&&e.onReady(),c.onReady&&c.onReady()},e.resize=function(a){j.style.height=a+"px";var c=document.getElementById("vkwidget"+h);c&&(c.style.height=a+"px")},e.resizeWidget=function(a,b){a=parseInt(a),b=parseInt(b);var d=document.getElementById("vkwidget"+h);isFinite(a)&&(j.style.width=a+"px",d&&(d.style.width=a+"px")),isFinite(b)&&(j.style.height=b+"px",d&&(d.style.height=b+"px")),c.onResizeWidget&&c.onResizeWidget()},e.updateVersion=function(a){a>1&&VK.Api.attachScript("//vk.com/js/api/openapi_update.js?"+parseInt(a))},q=VK.Widgets.RPC[h]=new fastXDM.Server(e,function(a){return a?(a=a.toLowerCase(),a.match(/(\.|\/)vk\.com($|\/|\?)/)):!0},{safe:!0}),r=VK.Widgets.RPC[h].append(j,{src:n,width:-1!=m.indexOf("%")?m:parseInt(m)||m,height:f.startHeight||"100%",scrolling:"no",id:"vkwidget"+h,allowTransparency:c.allowTransparency||!1,style:{overflow:"hidden"}}),g&&setTimeout(function(){g(j,r||j.firstChild,q)},10),h}),VK.Util||(VK.Util={getPageData:function(){if(!VK._pData){var d,a=document.getElementsByTagName("meta"),b={},c=["description","title","url","image","app_id"];for(var e in a)if(a[e].getAttribute&&a[e].getAttribute&&((d=a[e].getAttribute("name"))||(d=a[e].getAttribute("property"))))for(var f in c)(d==c[f]||d=="og:"+c[f]||d=="vk:"+c[f])&&(b[c[f]]=a[e].content);b.app_id&&!VK._apiId&&(VK._apiId=b.app_id),b.title=b.title||document.title||"",b.description=b.description||"",b.image=b.image||"",!b.url&&VK._iframeAppWidget&&VK._apiId&&(b.url="/app"+VK._apiId,VK._browserHash&&(b.url+=VK._browserHash));var g=location.href.replace(/#.*$/,"");b.url&&b.url.indexOf(g)||(b.url=g),VK._pData=b}return VK._pData},getStyle:function(a,b){var c,d=document.defaultView||window;if(d.getComputedStyle){b=b.replace(/([A-Z])/g,"-$1").toLowerCase();var e=d.getComputedStyle(a,null);e&&(c=e.getPropertyValue(b))}else if(a.currentStyle){var f=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()});c=a.currentStyle[b]||a.currentStyle[f]}return c},getXY:function(a,b){if(a&&void 0!==a){var c=0,d=0;if(void 0!==a.getBoundingClientRect){var e=a.getBoundingClientRect();c=e.left,d=e.top,b=!0}else if(a.offsetParent)do c+=a.offsetLeft,d+=a.offsetTop,b&&(c-=a.scrollLeft,d-=a.scrollTop);while(a=a.offsetParent);return b&&(d+=window.pageYOffset||window.scrollNode&&scrollNode.scrollTop||document.documentElement.scrollTop,c+=window.pageXOffset||window.scrollNode&&scrollNode.scrollLeft||document.documentElement.scrollLeft),[c,d]}},Box:function(a,b,c){c=c||{};var e=document.body.style.overflow,f=document.createElement("DIV"),g=new fastXDM.Server(VK.extend(c,{onInit:function(){h.style.background="transparent",h.style.visibility="visible",document.body.style.overflow="hidden",document.body.removeChild(f)},hide:function(){h.style.display="none"},tempHide:function(){h.style.left="-10000px",h.style.top="-10000px",h.style.width="10px",h.style.height="10px",document.body.style.overflow=e},destroy:function(){try{h.src="about: blank;"}catch(a){}h.parentNode.removeChild(h),document.body.style.overflow=e},resize:function(){}},!0),!1,{safe:!0}),h=g.append(document.body,{src:a.replace(/&amp;/g,"&"),scrolling:"no",allowTransparency:!0,style:{position:"fixed",left:0,top:0,zIndex:1002,background:VK._protocol+"//vk.com/images/upload.gif center center no-repeat transparent",padding:"0",border:"0",width:"100%",height:"100%",overflow:"hidden",visibility:"hidden"}});return f.innerHTML='<div style="position: fixed;left: 50%;top: 50%;margin: 0px auto 0px -60px;z-index: 1002;width: 100px;"><div style="background: url(//vk.com/images/upload_inv_mono'+(window.devicePixelRatio>=2?"_2x":"")+'.gif) no-repeat 50% 50%;background-size: 64px 16px;height: 50px;position: absolute;width: 100%;z-index: 100;"></div><div style="background-color: #000;opacity: 0.7;filter: alpha(opacity=70);height: 50px;-webkit-border-radius: 5px;-khtml-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);-moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);"></div></div>',document.body.insertBefore(f,document.body.firstChild),{show:function(){h.style.display="block",document.body.style.overflow="hidden"},hide:function(){h.style.display="none",document.body.style.overflow=e},iframe:h,rpc:g}},addEvent:function(a,b){window.document.addEventListener?window.document.addEventListener(a,b,!1):window.document.attachEvent&&window.document.attachEvent("on"+a,b)},removeEvent:function(a,b){window.document.removeEventListener?window.document.removeEventListener(a,b,!1):window.document.detachEvent&&window.document.detachEvent("on"+a,b)},ss:function(a,b){VK.extend(a.style,b,!0)}}),window.vkAsyncInit&&setTimeout(vkAsyncInit,0),window.vkAsyncInitCallbacks&&vkAsyncInitCallbacks.length&&setTimeout(function(){for(var a;a=vkAsyncInitCallbacks.pop();)try{a()}catch(b){try{console.error(b)}catch(c){}}},0);try{window.stManager&&stManager.done("api/openapi.js")}catch(e){}