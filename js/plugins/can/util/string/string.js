steal("can/util",function(e){var r=/_|-/,n=/\=\=/,t=/([A-Z]+)([A-Z][a-z])/g,a=/([a-z\d])([A-Z])/g,u=/([a-z\d])([A-Z])/g,c=/\{([^\}]+)\}/g,o=/"/g,i=/'/g,l=/-+(.)?/g,p=/[a-z][A-Z]/g,f=function(e,r,n){var t=e[r]
return void 0===t&&n===!0&&(t=e[r]={}),t},g=function(e){return/^f|^o/.test(typeof e)},d=function(e){var r=null===e||void 0===e||isNaN(e)&&""+e=="NaN"
return""+(r?"":e)}
return e.extend(e,{esc:function(e){return d(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(o,"&#34;").replace(i,"&#39;")},getObject:function(r,n,t){var a,u,c,o,i=r?r.split("."):[],l=i.length,p=0
if(n=e.isArray(n)?n:[n||window],o=n.length,!l)return n[0]
for(p;o>p;p++){for(a=n[p],c=void 0,u=0;l>u&&g(a);u++)c=a,a=f(c,i[u])
if(void 0!==c&&void 0!==a)break}if(t===!1&&void 0!==a&&delete c[i[u-1]],t===!0&&void 0===a)for(a=n[0],u=0;l>u&&g(a);u++)a=f(a,i[u],!0)
return a},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},camelize:function(e){return d(e).replace(l,function(e,r){return r?r.toUpperCase():""})},hyphenate:function(e){return d(e).replace(p,function(e){return e.charAt(0)+"-"+e.charAt(1).toLowerCase()})},underscore:function(e){return e.replace(n,"/").replace(t,"$1_$2").replace(a,"$1_$2").replace(u,"_").toLowerCase()},sub:function(r,n,t){var a=[]
return r=r||"",a.push(r.replace(c,function(r,u){var c=e.getObject(u,n,t===!0?!1:void 0)
return void 0===c||null===c?(a=null,""):g(c)&&a?(a.push(c),""):""+c})),null===a?a:a.length<=1?a[0]:a},replacer:c,undHash:r}),e})