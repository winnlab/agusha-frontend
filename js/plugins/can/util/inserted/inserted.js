steal("can/util/can.js",function(e){e.inserted=function(n){n=e.makeArray(n)
for(var r,t,i=!1,a=e.$(document.contains?document:document.body),d=0;void 0!==(t=n[d]);d++){if(!i){if(!t.getElementsByTagName)continue
if(!e.has(a,t).length)return
i=!0}if(i&&t.getElementsByTagName){r=e.makeArray(t.getElementsByTagName("*")),e.trigger(t,"inserted",[],!1)
for(var o,s=0;void 0!==(o=r[s]);s++)e.trigger(o,"inserted",[],!1)}}},e.appendChild=function(n,r){var t
t=11===r.nodeType?e.makeArray(r.childNodes):[r],n.appendChild(r),e.inserted(t)},e.insertBefore=function(n,r,t){var i
i=11===r.nodeType?e.makeArray(r.childNodes):[r],n.insertBefore(r,t),e.inserted(i)}})