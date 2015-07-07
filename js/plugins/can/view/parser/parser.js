steal("can/view",function(e){function t(e){for(var t={},r=e.split(","),a=0;a<r.length;a++)t[r[a]]=!0
return t}function r(e,t){for(var r=0,a=e.length;a>r;r++){var s=e[r]
t[s.tokenType].apply(t,s.args)}return e}var a="-:A-Za-z0-9_",s="[a-zA-Z_:]["+a+":.]*",n="\\s*=\\s*",i='"((?:\\\\.|[^"])*)"',o="'((?:\\\\.|[^'])*)'",l="(?:"+n+"(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?",c="\\{\\{[^\\}]*\\}\\}\\}?",u="\\{\\{([^\\}]*)\\}\\}\\}?",p=RegExp("^<(["+a+"]+)((?:\\s*(?:(?:(?:"+s+")?"+l+")|(?:"+c+")+))*)\\s*(\\/?)>"),f=RegExp("^<\\/(["+a+"]+)[^>]*>"),d=RegExp("(?:(?:("+s+")|"+u+")(?:"+n+"(?:(?:"+i+")|(?:"+o+")|([^>\\s]+)))?)","g"),g=RegExp(u,"g"),h=/<|\{\{/,m=t("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),b=t("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),v=t("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),x=t("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),y=t("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),k=t("script,style"),E="start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","),A=function(){},w=function(t,a,s){function n(e,t,r,s){if(t=t.toLowerCase(),b[t])for(;y.last()&&v[y.last()];)i("",y.last())
x[t]&&y.last()===t&&i("",t),s=m[t]||!!s,a.start(t,s),s||y.push(t),w.parseAttrs(r,a),a.end(t,s)}function i(e,t){var r
if(t)for(r=y.length-1;r>=0&&y[r]!==t;r--);else r=0
if(r>=0){for(var s=y.length-1;s>=r;s--)a.close&&a.close(y[s])
y.length=r}}function o(e,t){a.special&&a.special(t)}if("object"==typeof t)return r(t,a)
var l=[]
a=a||{},s&&e.each(E,function(t){var r=a[t]||A
a[t]=function(){r.apply(this,arguments)!==!1&&l.push({tokenType:t,args:e.makeArray(arguments)})}})
var c,u,d,y=[],O=t
for(y.last=function(){return this[this.length-1]};t;){if(u=!0,y.last()&&k[y.last()])t=t.replace(RegExp("([\\s\\S]*?)</"+y.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),a.chars&&a.chars(t),""}),i("",y.last())
else if(0===t.indexOf("<!--")?(c=t.indexOf("-->"),c>=0&&(a.comment&&a.comment(t.substring(4,c)),t=t.substring(c+3),u=!1)):0===t.indexOf("</")?(d=t.match(f),d&&(t=t.substring(d[0].length),d[0].replace(f,i),u=!1)):0===t.indexOf("<")?(d=t.match(p),d&&(t=t.substring(d[0].length),d[0].replace(p,n),u=!1)):0===t.indexOf("{{")&&(d=t.match(g),d&&(t=t.substring(d[0].length),d[0].replace(g,o))),u){c=t.search(h)
var R=0>c?t:t.substring(0,c)
t=0>c?"":t.substring(c),a.chars&&R&&a.chars(R)}if(t===O)throw"Parse Error: "+t
O=t}return i(),a.done(),l}
return w.parseAttrs=function(e,t){(null!=e?e:"").replace(d,function(e,r,a,s,n,i){if(a&&t.special(a),r||s||n||i){var o=arguments[3]?arguments[3]:arguments[4]?arguments[4]:arguments[5]?arguments[5]:y[r.toLowerCase()]?r:""
t.attrStart(r||"")
for(var l,c=g.lastIndex=0,u=g.exec(o);u;)l=o.substring(c,g.lastIndex-u[0].length),l.length&&t.attrValue(l),t.special(u[1]),c=g.lastIndex,u=g.exec(o)
l=o.substr(c,o.length),l&&t.attrValue(l),t.attrEnd(r||"")}})},e.view.parser=w,w})