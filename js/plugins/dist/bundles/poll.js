/*modules/poll/poll*/
define("modules/poll/poll",["controller"],function(t){"use strict";t&&t.__esModule||(t={"default":t});var i=t["default"],e=i.extend({defaults:{}},{variables:function(){this.id="poll"!=this.options.id?this.options.id:"undefined"},plugins:function(){var t={type:"mini",height:20},i="{width:145,height:20,st:'rounded',sz:20,ck:1}";VK.Widgets.Like("vk_top_poll_"+this.id,t),VK.Widgets.Like("vk_bottom_poll_"+this.id,t),OK.CONNECT.insertShareWidget("ok_top_poll_"+this.id,document.URL,i),OK.CONNECT.insertShareWidget("ok_bottom_poll_"+this.id,document.URL,i)},after_init:function(){}});return{get default(){return e},__esModule:!0}});
