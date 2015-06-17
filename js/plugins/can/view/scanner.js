steal("can/view","./elements","can/view/callbacks",function(can,elements,viewCallbacks){var newLine=/(\r|\n)+/g,notEndTag=/\//,clean=function(t){return t.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("	").join("\\t")},getTag=function(t,e,n){if(t)return t
for(;n<e.length;){if("<"===e[n]&&!notEndTag.test(e[n+1]))return elements.reverseTagMap[e[n+1]]||"span"
n++}return""},bracketNum=function(t){return--t.split("{").length- --t.split("}").length},myEval=function(script){eval(script)},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",put_cmd="___v1ew.push(\n",insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,getAttrName=function(){var t=beforeQuote.match(attrReg)
return t&&t[1]},status=function(){return quote?"'"+getAttrName()+"'":htmlTag?1:0},top=function(t){return t[t.length-1]},Scanner
return can.view.Scanner=Scanner=function(t){can.extend(this,{text:{},tokens:[]},t),this.text.options=this.text.options||"",this.tokenReg=[],this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"},this.tokenComplex=[],this.tokenMap={}
for(var e,n=0;e=this.tokens[n];n++)e[2]?(this.tokenReg.push(e[2]),this.tokenComplex.push({abbr:e[1],re:RegExp(e[2]),rescan:e[3]})):(this.tokenReg.push(e[1]),this.tokenSimple[e[1]]=e[0]),this.tokenMap[e[0]]=e[1]
this.tokenReg=RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g")},Scanner.prototype={helpers:[],scan:function(t,e){var n=[],s=0,a=this.tokenSimple,r=this.tokenComplex
t=t.replace(newLine,"\n"),this.transform&&(t=this.transform(t)),t.replace(this.tokenReg,function(e,i){var o=arguments[arguments.length-2]
if(o>s&&n.push(t.substring(s,o)),a[e])n.push(e)
else for(var u,c=0;u=r[c];c++)if(u.re.test(e)){n.push(u.abbr),u.rescan&&n.push(u.rescan(i))
break}s=o+i.length}),s<t.length&&n.push(t.substr(s))
var i,o,u,c,l="",p=[startTxt+(this.text.start||"")],h=function(t,e){p.push(put_cmd,'"',clean(t),'"'+(e||"")+");")},g=[],f=null,m=!1,k={attributeHookups:[],tagHookups:[],lastTagHookup:""},b=function(){k.lastTagHookup=k.tagHookups.pop()+k.tagHookups.length},v="",x=[],T=!1,d=!1,w=0,_=this.tokenMap
for(htmlTag=quote=beforeQuote=null;void 0!==(u=n[w++]);){if(null===f)switch(u){case _.left:case _.escapeLeft:case _.returnLeft:m=htmlTag&&1
case _.commentLeft:f=u,l.length&&h(l),l=""
break
case _.escapeFull:m=htmlTag&&1,rescan=1,f=_.escapeLeft,l.length&&h(l),rescan=n[w++],l=rescan.content||rescan,rescan.before&&h(rescan.before),n.splice(w,0,_.right)
break
case _.commentFull:break
case _.templateLeft:l+=_.left
break
case"<":0!==n[w].indexOf("!--")&&(htmlTag=1,m=0),l+=u
break
case">":htmlTag=0
var H="/"===l.substr(l.length-1)||"--"===l.substr(l.length-2),N=""
if(k.attributeHookups.length&&(N="attrs: ['"+k.attributeHookups.join("','")+"'], ",k.attributeHookups=[]),v+k.tagHookups.length!==k.lastTagHookup&&v===top(k.tagHookups))H&&(l=l.substr(0,l.length-1)),p.push(put_cmd,'"',clean(l),'"',",can.view.pending({tagName:'"+v+"',"+N+"scope: "+(this.text.scope||"this")+this.text.options),H?(p.push("}));"),l="/>",b()):"<"===n[w]&&n[w+1]==="/"+v?(p.push("}));"),l=u,b()):(p.push(",subtemplate: function("+this.text.argNames+"){\n"+startTxt+(this.text.start||"")),l="")
else if(m||!T&&elements.tagToContentPropMap[x[x.length-1]]||N){var R=",can.view.pending({"+N+"scope: "+(this.text.scope||"this")+this.text.options+'}),"'
H?h(l.substr(0,l.length-1),R+'/>"'):h(l,R+'>"'),l="",m=0}else l+=u;(H||T)&&(x.pop(),v=x[x.length-1],T=!1),k.attributeHookups=[]
break
case"'":case'"':if(htmlTag)if(quote&&quote===u){quote=null
var L=getAttrName()
if(viewCallbacks.attr(L)&&k.attributeHookups.push(L),d){l+=u,h(l),p.push(finishTxt,"}));\n"),l="",d=!1
break}}else if(null===quote&&(quote=u,beforeQuote=i,c=getAttrName(),"img"===v&&"src"===c||"style"===c)){h(l.replace(attrReg,"")),l="",d=!0,p.push(insert_cmd,"can.view.txt(2,'"+getTag(v,n,w)+"',"+status()+",this,function(){",startTxt),h(c+"="+u)
break}default:if("<"===i){v="!--"===u.substr(0,3)?"!--":u.split(/\s/)[0]
var S,y=!1
0===v.indexOf("/")&&(y=!0,S=v.substr(1)),y?(top(x)===S&&(v=S,T=!0),top(k.tagHookups)===S&&(h(l.substr(0,l.length-1)),p.push(finishTxt+"}}) );"),l="><",b())):(v.lastIndexOf("/")===v.length-1&&(v=v.substr(0,v.length-1)),"!--"!==v&&viewCallbacks.tag(v)&&("content"===v&&elements.tagMap[top(x)]&&(u=u.replace("content",elements.tagMap[top(x)])),k.tagHookups.push(v)),x.push(v))}l+=u}else switch(u){case _.right:case _.returnRight:switch(f){case _.left:o=bracketNum(l),1===o?(p.push(insert_cmd,"can.view.txt(0,'"+getTag(v,n,w)+"',"+status()+",this,function(){",startTxt,l),g.push({before:"",after:finishTxt+"}));\n"})):(s=g.length&&-1===o?g.pop():{after:";"},s.before&&p.push(s.before),p.push(l,";",s.after))
break
case _.escapeLeft:case _.returnLeft:o=bracketNum(l),o&&g.push({before:finishTxt,after:"}));\n"})
for(var j=f===_.escapeLeft?1:0,C={insert:insert_cmd,tagName:getTag(v,n,w),status:status(),specialAttribute:d},q=0;q<this.helpers.length;q++){var E=this.helpers[q]
if(E.name.test(l)){l=E.fn(l,C),E.name.source===/^>[\s]*\w*/.source&&(j=0)
break}}"object"==typeof l?l.startTxt&&l.end&&d?p.push(insert_cmd,"can.view.toStr( ",l.content,"() ) );"):(l.startTxt?p.push(insert_cmd,"can.view.txt(\n"+("string"==typeof status()||(null!=l.escaped?l.escaped:j))+",\n'"+v+"',\n"+status()+",\nthis,\n"):l.startOnlyTxt&&p.push(insert_cmd,"can.view.onlytxt(this,\n"),p.push(l.content),l.end&&p.push("));")):d?p.push(insert_cmd,l,");"):p.push(insert_cmd,"can.view.txt(\n"+("string"==typeof status()||j)+",\n'"+v+"',\n"+status()+",\nthis,\nfunction(){ "+(this.text.escape||"")+"return ",l,o?startTxt:"}));\n"),rescan&&rescan.after&&rescan.after.length&&(h(rescan.after.length),rescan=null)}f=null,l=""
break
case _.templateLeft:l+=_.left
break
default:l+=u}i=u}l.length&&h(l),p.push(";")
var M=p.join(""),A={out:(this.text.outStart||"")+M+" "+finishTxt+(this.text.outEnd||"")}
return myEval.call(A,"this.fn = (function("+this.text.argNames+"){"+A.out+"});\r\n//# sourceURL="+e+".js"),A}},can.view.pending=function(t){var e=can.view.getHooks()
return can.view.hook(function(n){can.each(e,function(t){t(n)}),t.templateType="legacy",t.tagName&&viewCallbacks.tagHandler(n,t.tagName,t),can.each(t&&t.attrs||[],function(e){t.attributeName=e
var s=viewCallbacks.attr(e)
s&&s(n,t)})})},can.view.tag("content",function(t,e){return e.scope}),can.view.Scanner=Scanner,Scanner})