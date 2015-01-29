/*js/app/user/modules/encyclopedia/encyclopediaHelpers*/
define("js/app/user/modules/encyclopedia/encyclopediaHelpers",["can/","lodash","core/appState"],function(e,t,i){"use strict";function a(e){return"function"==typeof e&&(e=e()),e}e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),i&&i.__esModule||(i={"default":i});var n=(e["default"],t["default"]),r=i["default"],o={articleType:function(e){var t=e.attr("type.name"),i="";return t?i="Статья от редакции"===t?"redaction":"Тема недели"===t?"week":"author":""},getClassName:function(e,t,i){var n=(a(t),e),r=e.attr("XL")?"x2":e.attr("main"==a(i)?"hasBigView":"theme.0.hasBigView")?"double":"";return r+=n.attr("image.background")?"":" no-image",r+=n.attr("is_quiz")?" poll":""},getBg:function(e,t,i){var n,r=(a(t),e.attr("XL")?"XL":e.attr("main"==a(i)?"hasBigView":"theme.0.hasBigView")?"L":"S");return n=e.attr("image."+r),n&&"Статья от специалиста"!==e.attr("type.name")?"background-image: url(/img/uploads/"+n+");":""},sortArticles:function(e,t,i,a){if(t=t||"desc",!e.length)return[];var o=n.clone(e,!0);o=n.sortBy(o,function(e){var i;return i=a?e.position?("desc"==t?-1:1)*e.position:0:e.theme[0]&&e.theme[0].position?("desc"==t?-1:1)*e.theme[0].position:0});var u,s,c=this,h=new Array(o.length),i="function"==typeof i?i():i,d=0,l=0,f=r.attr("viewport").getViewportWidth();return 1180>=f&&(s=2),f>1180&&1600>f&&(s=3),f>=1600&&(s=4),h[0]=o[0],i&&(h[0].XL=!0),!h[0].type||"Статья от специалиста"!=h[0].type.name&&"Статья от пользователя"!=h[0].type.name||(h[0].XL=!1,i=!1),n.each(h,function(e,t){0==t?(u=a?e.hasBigView||i?2:1:e.theme[0]&&e.theme[0].hasBigView||i?2:1,d+=u):(d==s&&(l+=1,d=1==l&&1==i&&2!==s?2:0),h[t]=c.findSuitableEl(o,s-d,s,a),u=a?h[t].hasBigView?2:1:h[t].theme[0]&&h[t].theme[0].hasBigView?2:1,d+=u)}),h},findSuitableEl:function(e,t,i,a){var r,o=n.find(e,function(e,i){return r=i,0==i||void 0==e?!1:0==t||t>1?!0:1==t&&0==(a?e.hasBigView:e.theme[0]&&e.theme[0].hasBigView?e.theme[0].hasBigView:!1)?!0:void 0});return o||(o=n.find(e,function(e,t){return r=t,e&&0!==t?(a?e.hasBigView=!1:e.theme[0].hasBigView=!1,!0):!1})),r&&(e[r]=void 0),o}};return{get default(){return o},__esModule:!0}});
/*lib/subscribe/subscribe*/
define("lib/subscribe/subscribe",["can/","core/appState"],function(e,t){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t});var s=e["default"],r=t["default"],i={subscribe:function(e,t){this.processingSubscribe("POST",e,{text:"Вы успешно подписались на тему. <br /> Теперь статьи темы будут попадать в Вашу ленту."},t)},unsubscribe:function(e,t){this.processingSubscribe("DELETE",e,{text:"Вы успешно отписались от темы."},t)},processingSubscribe:function(e,t,i,u){var n=this;s.ajax({url:"/subscribe",method:e,data:{theme_id:t}}).done(function(e){r.attr("subsChanged",!0).attr("popUp").show(i),u.call(n,e)}).fail(this.reqFail)},reqFail:function(e){var t=e.responseJSON.err;r.attr("popUp").show({text:"string"==typeof t?t:t.message})}};return{get default(){return i},__esModule:!0}});
