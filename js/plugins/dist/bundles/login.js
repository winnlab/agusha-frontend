/*modules/login/login*/
define("modules/login/login",["controller","core/appState","lodash","tooltipster","jquery-validation","js/plugins/tooltipster/css/tooltipster.css!","js/plugins/tooltipster/css/themes/tooltipster-agusha.css!","js/plugins/tooltipster/css/themes/tooltipster-error.css!"],function(t,e,o,i,l,s,r,n){"use strict";t&&t.__esModule||(t={"default":t}),e&&e.__esModule||(e={"default":e}),o&&o.__esModule||(o={"default":o}),i&&i.__esModule||(i={"default":i}),l&&l.__esModule||(l={"default":l}),s&&s.__esModule||(s={"default":s}),r&&r.__esModule||(r={"default":r}),n&&n.__esModule||(n={"default":n});var a=t["default"],u=e["default"],d=(o["default"],can.Map.extend({define:{email:{value:null},password:{value:null},restoreEmail:{value:null}}})),p=a.extend({defaults:{}},{variables:function(){this.reminder="reminder"},after_init:function(){var t,e,o,i=$("#login"),l=this;return t=i.length?i.html():jadeTemplate.get("user/login/content"),can.view.mustache("signin",t),this.data=new d,o=u.attr("user").auth,o&&o.isAuth?void can.route.attr({module:"profile"}):($("#login").html(can.view("signin",this.data)),this.tooltip=this.element.find(".reg_box"),this.tooltip.tooltipster({position:"right",theme:"tooltipster-error",trigger:"hover"}),jQuery.validator.setDefaults({errorPlacement:function(){},showErrors:function(t,o){o.length?(l.tooltip.tooltipster("content",o[0].message),e||l.tooltip.tooltipster("show",function(){e=!0,setTimeout(function(){l.tooltip.tooltipster("hide")},300)})):e&&l.tooltip.tooltipster("hide",function(){e=!1}),this.defaultShowErrors()},highlight:function(t,e,o){$(t).addClass(e).removeClass(o)},unhighlight:function(t,e,o){$(t).removeClass(e).addClass(o)}}),this.element.find(".login_form").validate({rules:{email:{email:!0,required:!0},password:{minlength:6,required:!0}},messages:{email:{email:"Почта введена неверно",required:"Почта должна быть"},password:{minlength:"Пароль должен быть не менее 6 символо",required:"Пароль должен быть"}}}),void this.element.find(".reminder_form").validate({rules:{email:{email:!0,required:!0}},messages:{email:{email:"Почта введена неверно",required:"Почта должна быть"}}}))},".social .facebook click":function(t,e){e.preventDefault(),window.location.href="/login/fb"},".social .vkontakte click":function(t,e){e.preventDefault(),window.location.href="/login/vk"},".social .odnoklasniki click":function(t,e){e.preventDefault(),window.location.href="/registration/ok"},".login_form .done click":function(t,e){var o,i=t.parents("form"),l=this;return e.preventDefault(),i.valid()?(this.tooltip.tooltipster("hide"),o=this.data,void can.ajax({url:"/login?ajax=true",method:"POST",data:i.serialize(),success:function(t){var e=u.attr("user");return o.attr({email:null,password:null}),t.message&&t.message.user?(i.find("input").val(""),e.options.user.attr(t.message.user),e.auth.attr("isAuth",!0),void can.route.attr({module:"profile"})):(l.tooltip.tooltipster("content","Произошла ошибка. Обратитесь к администратору."),void l.tooltip.tooltipster("show",function(){setTimeout(function(){l.tooltip.tooltipster("hide")},300)}))},error:function(t){var e="Произошла неведомая ошибка";t&&t.responseJSON&&t.responseJSON.err&&(e=t.responseJSON.err.message),l.tooltip.tooltipster("content",e),l.tooltip.tooltipster("show",function(){setTimeout(function(){l.tooltip.tooltipster("hide")},2e3)})}})):(this.tooltip.tooltipster("content","Форма заполнена не верно"),void this.tooltip.tooltipster("show"))},".reminder_form .done click":function(t,e){e.preventDefault();var o=this.element.find(".reminder_form"),i=this;return o.valid()?(this.tooltip.tooltipster("hide"),void can.ajax({url:"/login/restore?ajax=true",method:"POST",data:{email:this.data.attr("restoreEmail")},success:function(t){return t.message?(i.tooltip.tooltipster("hide"),i.tooltip.tooltipster("content","Новый пароль отправлен Вам на почту"),void i.tooltip.tooltipster("show",function(){setTimeout(function(){i.tooltip.tooltipster("hide")},2e3)})):(i.tooltip.tooltipster("content","Произошла ошибка. Обратитесь к администратору."),void i.tooltip.tooltipster("show"))},error:function(){i.tooltip.tooltipster("content","Произошла ошибка. Обратитесь к администратору."),i.tooltip.tooltipster("show",function(){setTimeout(function(){i.tooltip.tooltipster("hide")},2e3)})}})):(this.tooltip.tooltipster("content","Форма заполнена не верно"),void this.tooltip.tooltipster("show"))},".forgot_btn click":function(t,e){e.preventDefault(),this.element.find(".reg_box").toggleClass(this.reminder)},".close click":function(){this.element.find(".reg_box").removeClass(this.reminder)}});return{get default(){return p},__esModule:!0}});
