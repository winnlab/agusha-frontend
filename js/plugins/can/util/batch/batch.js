steal("can/util/can.js",function(t){var n=1,a=0,i=[],e=[],c=null
t.batch={start:function(t){a++,t&&e.push(t)},stop:function(l,u){if(l?a=0:a--,0===a){if(null!==c)return
c=i.slice(0)
var r,s,h=e.slice(0)
for(i=[],e=[],t.batch.batchNum=n,n++,u&&t.batch.start(),r=0;r<c.length;r++)t.dispatch.apply(c[r][0],c[r][1])
for(c=null,r=0,s=h.length;r<h.length;r++)h[r]()
t.batch.batchNum=void 0}},trigger:function(e,l,u){if(!e._init)if(l="string"==typeof l?{type:l}:l,c)c.push([e,[l,u]])
else{if(0===a)return t.dispatch.call(e,l,u)
l.batchNum=n,i.push([e,[l,u]])}},afterPreviousEvents:function(n){if(c){var a={}
t.bind.call(a,"ready",n),c.push([a,[{type:"ready"},[]]])}else n()}}})