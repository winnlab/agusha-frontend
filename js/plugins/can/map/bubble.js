steal("can/util",function(n){var e=n.bubble={event:function(n,e){return n.constructor._bubbleRule(e,n)},childrenOf:function(n,i){n._each(function(b,r){b&&b.bind&&e.toParent(b,n,r,i)})},teardownChildrenFrom:function(n,i){n._each(function(b){e.teardownFromParent(n,b,i)})},toParent:function(e,i,b,r){n.listenTo.call(i,e,r,function(){var r=n.makeArray(arguments),t=r.shift()
r[0]=(n.List&&i instanceof n.List?i.indexOf(e):b)+(r[0]?"."+r[0]:""),t.triggeredNS=t.triggeredNS||{},t.triggeredNS[i._cid]||(t.triggeredNS[i._cid]=!0,n.trigger(i,t,r))})},teardownFromParent:function(e,i,b){i&&i.unbind&&n.stopListening.call(e,i,b)},isBubbling:function(n,e){return n._bubbleBindings&&n._bubbleBindings[e]},bind:function(n,i){if(!n._init){var b,r=e.event(n,i),t=r.length
n._bubbleBindings||(n._bubbleBindings={})
for(var u=0;t>u;u++)b=r[u],n._bubbleBindings[b]?n._bubbleBindings[b]++:(n._bubbleBindings[b]=1,e.childrenOf(n,b))}},unbind:function(i,b){for(var r,t=e.event(i,b),u=t.length,d=0;u>d;d++)r=t[d],i._bubbleBindings&&i._bubbleBindings[r]--,i._bubbleBindings&&!i._bubbleBindings[r]&&(delete i._bubbleBindings[r],e.teardownChildrenFrom(i,r),n.isEmptyObject(i._bubbleBindings)&&delete i._bubbleBindings)},add:function(i,b,r){if(b instanceof n.Map&&i._bubbleBindings)for(var t in i._bubbleBindings)i._bubbleBindings[t]&&(e.teardownFromParent(i,b,t),e.toParent(b,i,r,t))},removeMany:function(n,i){for(var b=0,r=i.length;r>b;b++)e.remove(n,i[b])},remove:function(i,b){if(b instanceof n.Map&&i._bubbleBindings)for(var r in i._bubbleBindings)i._bubbleBindings[r]&&e.teardownFromParent(i,b,r)},set:function(i,b,r,t){return n.Map.helpers.isObservable(r)&&e.add(i,r,b),n.Map.helpers.isObservable(t)&&e.remove(i,t),r}}
return e})