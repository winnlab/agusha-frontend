/*modules/springregistration/springregistration*/
define("modules/springregistration/springregistration",["controller","core/appState"],function(e,t){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t});var i=e["default"],n=(t["default"],i.extend({},{variables:function(){this.active="active",this.winner_items=this.element.find(".winner_item")},plugins:function(){},after_init:function(){this.winner_items.filter(":not(.active)").find(".winner_bottom").hide()},".winner_item .winner_topper click":function(e){var t=e.closest(".winner_item"),i=t.find(".winner_bottom"),n="slideDown";t.hasClass(this.active)&&(n="slideUp"),i.stop(!0,!1)[n](300),t.toggleClass(this.active)}}));return{get default(){return n},__esModule:!0}});