/*modules/products/products*/
define("modules/products/products",["controller","select2"],function(t,e){"use strict";t&&t.__esModule||(t={"default":t}),e&&e.__esModule||(e={"default":e});var a=t["default"],s=(e["default"],can.Model.extend({findAll:"POST /products/findAll",parseModels:function(t){return t.data.products}},{})),i=a.extend({defaults:{}},{after_init:function(t){var e,a,i=this;this.first_call=!0,e=t?t.products:app.products;var c=can.Map.extend({define:{age:{value:null},category:{value:null},products:{value:new can.List(e),get:function(t){var e={age:this.attr("age"),category:this.attr("category")};return i.first_call||t.replace(s.findAll(e)),t}}}});this.data=new c;var l=$("#product_mustache");a=l.length?l.html():jadeTemplate.get("user/products/product_mustache"),can.view.mustache("product",a),$("#products_container").html(can.view("product",this.data,{ageValue:function(t){return t.context.age?t.context.age.value<12?t.fn():t.inverse():t.fn()}})),this.first_call=!1},variables:function(){this.about_ages=this.element.find("#about_ages"),this.about_blocks=this.element.find(".about_block"),this.video=this.element.find(".video"),this.player_bg=this.video.find(".player_bg"),this.left_menu=$("#left_menu"),this.active="active"},plugins:function(){this.select2()},select2:function(){var t=this.element.find(".products_age_select");t.select2({width:"off",formatSelection:this.format,formatResult:this.format,minimumResultsForSearch:-1})},format:function(t){var e=$(t.element),a=e.data("icon.normal"),s=e.data("icon.hover"),i='<div class="part left"><img class="icon normal" src="'+a+'" /><img class="icon hover" src="'+s+'" /></div><div class="part right adorable_table"><div class="adorable_cell">'+t.text+"</div></div>";return i},".products_age_select change":function(t,e){var a=+e.val||null;this.data.attr("age",a),"undefined"!=typeof a&&null!=a?(this.about_ages.addClass("active"),this.about_blocks.removeClass("active"),this.about_blocks.filter("#age_"+a).addClass("active")):this.about_ages.removeClass("active")},".choose_category click":function(t){var e=t.data("category"),a=this.element.find(".choose_category");a.removeClass("active"),t.addClass("active"),this.data.attr("category",e)},".open_close click":function(t){this.about_ages.toggleClass("opened")},".child click":function(){this.video.addClass(this.active)},".video .close click":function(){this.video.removeClass(this.active)},"{window} custom_resize":"custom_resize",custom_resize:function(){this.element.hasClass(this.active)&&this.player_bg.css({left:this.left_menu.width()})}});return{get default(){return i},__esModule:!0}});