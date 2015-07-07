/*module/article/articleModel*/
define("module/article/articleModel",["baseModel","can/"],function(e,d){"use strict";e&&e.__esModule||(e={"default":e}),d&&d.__esModule||(d={"default":d});var l=e["default"],o=d["default"],t=o.Model.extend({id:"_id",resource:l.chooseResource("/article"),parseModel:l.parseModel,parseModels:l.parseModels},{});return{get default(){return t},__esModule:!0}});
/*module/article/views/pollResults.mustache!js/plugins/can/view/mustache/system*/
define("module/article/views/pollResults.mustache!js/plugins/can/view/mustache/system",["can/view/mustache/mustache"],function(e){return e.view.preloadStringRenderer("module/article/views/pollResults.mustache",e.Mustache(function(s,t){var i=[];return i.push("<h1>Результаты опроса:</h1>"),i.push("\n"),i.push(e.view.txt(0,"undefined",0,this,e.Mustache.txt({scope:s,options:t},"#",{get:"each"},{get:"article.answer"},[{fn:function(s,t){var i=[];return i.push('	<div class="option">\n		<div class="radio_cell">'),i.push(e.view.txt(1,"div",0,this,e.Mustache.txt({scope:s,options:t},null,{get:"percent"}))),i.push('%</div>\n		<div class="label">\n			<div>'),i.push(e.view.txt(1,"div",0,this,e.Mustache.txt({scope:s,options:t},null,{get:"text"}))),i.push('</div>\n			<div class="progress_line">\n				<div class="progress" '),i.push(e.view.txt(2,"div","style",this,function(){var i=[];return i.push('style="'),i.push("width: "),i.push(e.view.toStr(e.Mustache.txt({scope:s,options:t,special:!0},null,{get:"percent"})())),i.push('%;"'),i.join("")})),i.push("",e.view.pending({scope:s,options:t}),">"),i.push("</div>\n			</div>\n		</div>\n	</div>"),i.join("")}}]))),i.join("")}))});
/*js/plugins/jquery.autosize/jquery.autosize.min*/
System.define("js/plugins/jquery.autosize/jquery.autosize.min",'!function(e){var t,o={className:"autosizejs",id:"autosizejs",append:"\\n",callback:!1,resizeDelay:10,placeholder:!0},i=\'<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>\',a=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent","whiteSpace"],n=e(i).data("autosize",!0)[0];n.style.lineHeight="99px","99px"===e(n).css("lineHeight")&&a.push("lineHeight"),n.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),n.parentNode!==document.body&&e(document.body).append(n),this.each(function(){function o(){var t,o=window.getComputedStyle?window.getComputedStyle(u,null):null;o?(t=parseFloat(o.width),("border-box"===o.boxSizing||"border-box"===o.webkitBoxSizing||"border-box"===o.mozBoxSizing)&&e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){t-=parseFloat(o[i])})):t=p.width(),n.style.width=Math.max(t,0)+"px"}function s(){var s={};if(t=u,n.className=i.className,n.id=i.id,d=parseFloat(p.css("maxHeight")),e.each(a,function(e,t){s[t]=p.css(t)}),e(n).css(s).attr("wrap",p.attr("wrap")),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,a;t!==u?s():o(),n.value=!u.value&&i.placeholder?p.attr("placeholder")||"":u.value,n.value+=i.append||"",n.style.overflowY=u.style.overflowY,a=parseFloat(u.style.height)||0,n.scrollTop=0,n.scrollTop=9e4,e=n.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=z,Math.abs(a-e)>.01&&(u.style.height=e+"px",n.className=n.className,w&&i.callback.call(u,u),p.trigger("autosize.resized"))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==b&&(b=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),z=0,w=e.isFunction(i.callback),f={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},b=p.width(),g=p.css("resize");p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(z=p.outerHeight()-p.height()),c=Math.max(parseFloat(p.css("minHeight"))-z||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===g?p.css("resize","none"):"both"===g&&p.css("resize","horizontal"),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(f).removeData("autosize")}),r())})):this}}(jQuery||$);',{address:"js/plugins/jquery.autosize/jquery.autosize.min",metadata:{deps:[],format:"global"}});
/*modules/article/article*/
define("modules/article/article",["controller","module/article/articleModel","core/appState","module/article/views/pollResults.mustache!","bx-slider","js/plugins/jquery.autosize/jquery.autosize.min","js/plugins/jquery.iframetracker/jquery.iframetracker"],function(e,t,i,a,o,l,n){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),i&&i.__esModule||(i={"default":i}),a&&a.__esModule||(a={"default":a}),o&&o.__esModule||(o={"default":o}),l&&l.__esModule||(l={"default":l}),n&&n.__esModule||(n={"default":n});var s=e["default"],r=(t["default"],i["default"]),c=a["default"],u=s.extend({defaults:{viewpath:"/js/app/user/modules/article/views/"}},{request:function(){var e=this,t=can.route.attr("id"),i=!!can.route.attr("param2");can.ajax({url:"/"+(i?"news":"article")+"/"+t+"?ajax=true",success:function(t){e.successRequest(t)},error:function(e,t,i){console.error(i)}})},variables:function(){this.base_url=window.location.protocol+"//"+window.location.host,this.id="article"!=this.options.id?this.options.id:"undefined"},plugins:function(e){this.article=null,e?this.article=e.article:this.article=app.article;var t=decodeURI(document.location.href)+"?utm_source=vkontakte&utm_medium=share&utm_campaign=site_articleshare",i={url:t,title:this.article.title},a="{width:145, height:20, st:'rounded', sz:20, ck:1}";this.article.image&&this.article.image.SOCIAL&&(i.image=this.base_url+"/img/uploads/"+this.article.image.SOCIAL);var o=$("#vk_top_"+this.id);o.length&&o.html(VK.Share.button(i));var l=$("#vk_bottom_"+this.id);l.length&&l.html(VK.Share.button(i));var n=decodeURI(document.location.href)+"?utm_source=Odnoklassniki&utm_medium=share&utm_campaign=site_articleshare",s=$("#ok_top_"+this.id);s.length&&OK.CONNECT.insertShareWidget("ok_top_"+this.id,n,a);var r=$("#ok_bottom_"+this.id);r.length&&OK.CONNECT.insertShareWidget("ok_bottom_"+this.id,n,a),"undefined"!=typeof FB&&FB.XFBML.parse(this.element[0])},after_init:function(e){this.id.split("-")[1];this.carousel(),this.moveBackground(),this.initResizableTextarea(),this.initIFrameEvents()},initResizableTextarea:function(){$(".comment_form textarea").autosize()},carousel:function(){var e=this;$(".interesting_content",e.element).bxSlider({slideWidth:280,minSlides:2,maxSlides:4,moveSlides:1}),$(".articleGallery",e.element).bxSlider({minSlides:1,maxSlides:1,moveSlides:1,controls:!0,pager:!0})},".pollForm submit":function(e,t){var i=this;t.preventDefault(),can.ajax({url:"/pollVote",type:"POST",data:can.deparam(e.serialize()),success:function(t){i.displayPollFormData(e,t)}})},displayPollFormData:function(e,t){var i=$(".answered"),a=i.find(".pollResults");$(".pollUnvoted").slideUp(),a.html(can.view(c,{article:t.data})),"none"==i.css("display")&&i.slideDown()},".slideRight click":function(e,t){$(".bx-wrapper .bx-next",this.element).trigger("click"),ga("set","page",decodeURI(document.location.href)),ga("send","event","ArticleCarousel","Right")},".slideLeft click":function(e,t){$(".bx-wrapper .bx-prev",this.element).trigger("click"),ga("set","page",decodeURI(document.location.href)),ga("send","event","ArticleCarousel","Left")},".registration_link click":function(){ga("set","page",decodeURI(document.location.href)),ga("send","event","Registration","ArticleComment")},"{window} scroll":function(e,t){this.element.hasClass("active")&&this.moveBackground()},moveBackground:function(){var e=$(".articleBackground",this.element),t=window.scrollY||$(window).scrollTop(),i="0px";if(e.find("img").length>0){var a=e.height(),o=$(".article_bottom",this.element).offset().top-a-8;i=o>=t?t+"px":o+"px",e.css({top:i})}},".scrollToComments click":function(e,t){var i=this,a=i.element.find(".comments");$("html, body").animate({scrollTop:a.offset().top},500)},initIFrameEvents:function(){var e=this;$(".social_button.fb iframe",e.element).iframeTracker({blurCallback:function(){e.sendSocialLike("fb")}}),setTimeout(function(){$(".social_button.vk iframe",e.element).iframeTracker({blurCallback:function(){e.sendSocialLike("vk")}})},1e3),$(".social_button.ok iframe",e.element).iframeTracker({blurCallback:function(){e.sendSocialLike("ok")}})},sendSocialLike:function(e){can.ajax({url:"/like/socialLike",type:"POST",data:{network:e},success:function(e){r.attr("moneybox",!0)}})}});return{get default(){return u},__esModule:!0}});