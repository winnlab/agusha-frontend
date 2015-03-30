/*modules/registration/registration*/
define("modules/registration/registration",["controller","lodash","core/appState","tooltipster","jquery-validation"],function(t,e,i,o,r){"use strict";t&&t.__esModule||(t={"default":t}),e&&e.__esModule||(e={"default":e}),i&&i.__esModule||(i={"default":i}),o&&o.__esModule||(o={"default":o}),r&&r.__esModule||(r={"default":r});var n=t["default"],l=(e["default"],i["default"]),s=can.Map.extend({define:{errors:{value:new can.Map({email:null,firstname:null,password:null})},email:{value:null},firstName:{value:null},password:{value:null}}}),a=function(){var t=this.element.find(".registration_inline"),e=this.element.find(".reg_box_inside"),i=e.filter(".registered"),o=e.filter(".not_registered"),r="active",n="bounce";t.addClass("drop"),setTimeout(function(){t.addClass(n)},1e3),setTimeout(function(){t.removeClass(n)},1200),setTimeout(function(){o.removeClass(r),i.addClass(r)},1400)},u=n.extend({defaults:{}},{after_init:function(){var t,e,i=$("#registration"),o=this,r=!1;return t=i.length?i.html():jadeTemplate.get("user/registration/content"),can.view.mustache("reg",t),this.data=new s,e=l.attr("user").auth,e&&e.isAuth?void can.route.attr({module:"profile"}):($("#registration").html(can.view("reg",this.data)),this.tooltip=this.element.find(".reg_box"),this.tooltip.tooltipster({position:"right",theme:"tooltipster-error",trigger:"custom"}),jQuery.validator.setDefaults({errorPlacement:function(){},showErrors:function(t,e){e.length?(o.tooltip.tooltipster("content",e[0].message),r||o.tooltip.tooltipster("show",function(){r=!0,setTimeout(function(){o.tooltip.tooltipster("disable")},5e3)})):r&&o.tooltip.tooltipster("hide",function(){r=!1,setTimeout(function(){o.tooltip.tooltipster("hide")},5e3)}),this.defaultShowErrors()},highlight:function(t,e,i){$(t).addClass(e).removeClass(i)},unhighlight:function(t,e,i){$(t).removeClass(e).addClass(i)}}),void this.element.find(".registration_form").validate({rules:{firstName:{minlength:3,required:!0},email:{email:!0,required:!0},password:{minlength:6,required:!0}},messages:{firstName:{minlength:"Имя должно быть человеческим",required:"Имя должно быть"},email:{email:"Почта введена неверно",required:"Почта должна быть"},password:{minlength:"Пароль должен быть не менее 6 символо",required:"Пароль должен быть"}}}))},".social .facebook click":function(t,e){e.preventDefault(),window.location.href="/registration/fb"},".social .vkontakte click":function(t,e){e.preventDefault(),window.location.href="/registration/vk"},".social .odnoklasniki click":function(t,e){e.preventDefault(),window.location.href="/registration/ok"},".registration_form .done click":function(t,e){var i,o=this,r=t.parents("form");return e.preventDefault(),r.valid()?(this.tooltip.tooltipster("hide"),ga("set","page",decodeURI(document.location.href)),ga("send","event","Registration","Usual"),i=this.data,void can.ajax({url:"/registration?ajax=true",method:"POST",data:i.serialize(),success:function(){i.attr({email:null,firstName:null,password:null}),a.call(o),can.route.attr({module:"registration",id:"success"},!0)},error:function(t){o.tooltip.tooltipster("content",t.responseJSON.err),o.tooltip.tooltipster("show",function(){setTimeout(function(){o.tooltip.tooltipster("hide")},5e3)})}})):(this.tooltip.tooltipster("content","Форма заполнена не верно"),void this.tooltip.tooltipster("show"))}});return{get default(){return u},__esModule:!0}});
