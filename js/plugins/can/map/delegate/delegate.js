steal("can/util","can/map",function(t){var e=function(t,e){var a,r=t.length,s=0,l=[]
for(s;r>s;s++){if(a=e[s],"string"!=typeof a)return null
if("**"===t[s])return e.join(".")
if("*"===t[s])l.push(a)
else{if(a!==t[s])return null
l.push(a)}}return l.join(".")},a=function(a,r,s,l,n){var i,u,c,h,o,p=r.split("."),g=(this._observe_delegates||[]).slice(0)
a.attr=r,a.lastAttr=p[p.length-1]
for(var v=0;i=g[v++];)if(!(a.batchNum&&i.batchNum===a.batchNum||i.undelegated)){h=void 0,o=!0
for(var b=0;b<i.attrs.length;b++)u=i.attrs[b],c=e(u.parts,p),c&&(h=c),u.value&&o?o=u.value===""+this.attr(u.attr):o&&i.attrs.length>1&&(o=void 0!==this.attr(u.attr))
if(h&&o){var d=r.replace(h+".","")
a.batchNum&&(i.batchNum=a.batchNum),"change"===i.event?(r=d,a.curAttr=h,i.callback.apply(this.attr(h),t.makeArray(arguments))):i.event===s?i.callback.apply(this.attr(h),[a,l,n,d]):"set"===i.event&&"add"===s&&i.callback.apply(this.attr(h),[a,l,n,d])}}}
return t.extend(t.Map.prototype,{delegate:function(e,r,s){e=t.trim(e)
for(var l,n=this._observe_delegates||(this._observe_delegates=[]),i=[],u=/([^\s=,]+)(?:=("[^",]*"|'[^',]*'|[^\s"',]*))?(,?)\s*/g;null!==(l=u.exec(e));)l[2]&&t.inArray(l[2].substr(0,1),['"',"'"])>=0&&(l[2]=l[2].substr(1,-1)),i.push({attr:l[1],parts:l[1].split("."),value:l[2],or:","===l[3]})
return n.push({selector:e,attrs:i,callback:s,event:r}),1===n.length&&this.bind("change",a),this},undelegate:function(e,r,s){e=e&&t.trim(e)
var l,n=0,i=this._observe_delegates||[]
if(e)for(;n<i.length;)l=i[n],l.callback===s||!s&&l.selector===e?(l.undelegated=!0,i.splice(n,1)):n++
else i=[]
return i.length||this.unbind("change",a),this}}),t.Map.prototype.delegate.matches=e,t.Map})