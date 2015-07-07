/*controller*/
define("controller",["can/","can/route/","can/view/","can/map/define/"],function(e,t,s,i){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),s&&s.__esModule||(s={"default":s}),i&&i.__esModule||(i={"default":i});var r=e["default"],n=r.Control.extend({defaults:{css_path:"css/user/"}},{init:function(){this.window=$(window);var e=$("#modules").find(".module.server");return this.server=e.length,this.module_preload=this.element.find(".module_preload"),this.module_preload.height(this.window.height()),this.server?(e.children().appendTo(this.element),e.remove(),this.after_request()):void System["import"](this.options.css_path+this.options.name+"/index.css!").then(r.proxy(this.request,this))},request:function(){var e,t,s,i,n=this.options.path.server,o=["name","entity_id","param2"],u=this;for(i=o.length;i--;)t=o[i],s=new RegExp(":"+t,"g"),n=n.replace(s,this.options[t]?this.options[t]:"");n=n.replace(/\/+(?=\/)/g,""),e=n.length-1,"/"==n[e]&&(n=n.substr(0,e)),r.ajax({url:"/"+n+"?ajax=true",success:function(e){u.successRequest(e)},error:function(e,t,s){console.error(s)}})},successRequest:function(e){if(e.err)return console.error(err);var t=jadeTemplate.get("user/"+this.options.name+"/content",e.data);this.element.append(t),this.after_request(e.data)},after_request:function(e){this.variables(),this.plugins(e),this.window.trigger("custom_resize"),this.module_preload.hide(),this.after_init(e),this.server&&$(window).trigger("custom_ready")},after_init:function(){},variables:function(){},plugins:function(){},sizes:function(){},"{window} custom_resize":"resize","{window} resize":"resize",resize:function(){return this.element.hasClass("active")?void this.sizes():!1}});return{get default(){return n},__esModule:!0}});
