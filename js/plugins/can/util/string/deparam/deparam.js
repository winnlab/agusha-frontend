steal("can/util","can/util/string",function(t){var n=/^\d+$/,e=/([^\[\]]+)|(\[\])/g,r=/([^?#]*)(#.*)?$/,a=function(t){return decodeURIComponent(t.replace(/\+/g," "))}
return t.extend(t,{deparam:function(i){var c,o,u={}
return i&&r.test(i)&&(c=i.split("&"),t.each(c,function(t){var r=t.split("="),i=a(r.shift()),c=a(r.join("=")),p=u
if(i){r=i.match(e)
for(var s=0,f=r.length-1;f>s;s++)p[r[s]]||(p[r[s]]=n.test(r[s+1])||"[]"===r[s+1]?[]:{}),p=p[r[s]]
o=r.pop(),"[]"===o?p.push(c):p[o]=c}})),u}}),t})