steal("can/util/can.js",function(t){return t.addEvent=function(t,n){var e=this.__bindEvents||(this.__bindEvents={}),i=e[t]||(e[t]=[])
return i.push({handler:n,name:t}),this},t.listenTo=function(n,e,i){var s=this.__listenToEvents
s||(s=this.__listenToEvents={})
var r=t.cid(n),o=s[r]
o||(o=s[r]={obj:n,events:{}})
var a=o.events[e]
a||(a=o.events[e]=[]),a.push(i),t.bind.call(n,e,i)},t.stopListening=function(n,e,i){var s=this.__listenToEvents,r=s,o=0
if(!s)return this
if(n){var a=t.cid(n)
if((r={})[a]=s[a],!s[a])return this}for(var l in r){var v,h=r[l]
n=s[l].obj,e?(v={})[e]=h.events[e]:v=h.events
for(var u in v){var d=v[u]||[]
for(o=0;o<d.length;)i&&i===d[o]||!i?(t.unbind.call(n,u,d[o]),d.splice(o,1)):o++
d.length||delete h.events[u]}t.isEmptyObject(h.events)&&delete s[l]}return this},t.removeEvent=function(t,n,e){if(!this.__bindEvents)return this
for(var i,s=this.__bindEvents[t]||[],r=0,o="function"==typeof n;r<s.length;)i=s[r],(e?e(i,t,n):o&&i.handler===n||!o&&(i.cid===n||!n))?s.splice(r,1):r++
return this},t.dispatch=function(t,n){var e=this.__bindEvents
if(e){"string"==typeof t&&(t={type:t})
var i=t.type,s=(e[i]||[]).slice(0),r=[t]
n&&r.push.apply(r,n)
for(var o=0,a=s.length;a>o;o++)s[o].handler.apply(this,r)
return t}},t.one=function(n,e){var i=function(){return t.unbind.call(this,n,i),e.apply(this,arguments)}
return t.bind.call(this,n,i),this},t.event={on:function(){return 0===arguments.length&&t.Control&&this instanceof t.Control?t.Control.prototype.on.call(this):t.addEvent.apply(this,arguments)},off:function(){return 0===arguments.length&&t.Control&&this instanceof t.Control?t.Control.prototype.off.call(this):t.removeEvent.apply(this,arguments)},bind:t.addEvent,unbind:t.removeEvent,delegate:function(n,e,i){return t.addEvent.call(this,e,i)},undelegate:function(n,e,i){return t.removeEvent.call(this,e,i)},trigger:t.dispatch,one:t.one,addEvent:t.addEvent,removeEvent:t.removeEvent,listenTo:t.listenTo,stopListening:t.stopListening,dispatch:t.dispatch},t.event})