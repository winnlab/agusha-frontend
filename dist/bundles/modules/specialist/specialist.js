/*modules/specialist/specialist*/
define("modules/specialist/specialist",["controller","select2","core/appState","lib/helpers/pagination","jquery-validation"],function(t,e,s,a,i){"use strict";t&&t.__esModule||(t={"default":t}),e&&e.__esModule||(e={"default":e}),s&&s.__esModule||(s={"default":s}),a&&a.__esModule||(a={"default":a}),i&&i.__esModule||(i={"default":i});var n=t["default"],l=(e["default"],s["default"]),r=a["default"],c=can.Map.extend({isAuth:l.attr("user").auth.attr("isAuth"),sort:"desc",filter:""}),o=n.extend({defaults:{}},{variables:function(){this.formWrap=this.element.find(".column.double"),this.icons=this.element.find(".icon"),this.itemsContainer=this.element.find(".items_container"),this.select2Options={width:"100%",minimumResultsForSearch:-1,formatResult:this.format}},plugins:function(){},select2:function(){var t=this.element.find(".specialist_age_select"),e=this.element.find(".specialist_theme_select"),s=this.element.find(".specialist_question_select"),a=this.element.find(".specialist_sort_select");t.select2(this.select2Options),e.select2(this.select2Options),this.select2Options.width="off",s.select2(this.select2Options),a.select2(this.select2Options)},format:function(t){var e='<div class="adorable_table specialist_select2_result"><div class="adorable_cell">'+t.text+"</div></div>";return e},after_init:function(t){var e,s,a=this;this.articlesNextId=t?t.articles.nextAnchorId:app.consultations.nextAnchorId,this.data=new c({articles:t?t.articles.documents:app.consultations.documents,ages:t?t.ages:app.ages,ageId:t?t.ages[0]._id:app.ages[0]._id,themes:t?t.themes:app.themes}),(this.data.attr("articles.length")<24||1==this.articlesNextId||!this.articlesNextId)&&(this.noMoreArts=!0,this.element.find(".loadMore").hide());var i=$("#consultation_mustache"),n=$("#specialist_mustache");i.length?(s=i.html(),e=n.html()):(s=jadeTemplate.get("user/specialist/consultation_mustache"),e=jadeTemplate.get("user/specialist/specialist_mustache")),can.view.mustache("consultation_view",s),can.view.mustache("specialist_view",e),this.formWrap.html(can.view("consultation_view",this.data)),this.itemsContainer.html(can.view("specialist_view",this.data,{getClassName:function(t){return(t-4)%5==0?"double":""},filterIt:function(t,e){if(e=e(),"recommended"==e)return t.attr("recommended")?"":"display: none";if("watchers"==e){var s=l.attr("user").user().attr("_id");return s?-1===t.attr("watchers").indexOf(s)?"display: none":"":t.attr("watchers").length?"":"display: none"}return"spec"==e?_.find(t.attr("answer"),function(t){return!!t.attr("specialist")})?"":"display: none":""}})),this.select2();var o=l.attr("user").auth;o.delegate("isAuth","set",function(t,e){a.data.attr("isAuth",e),a.select2Options.width="100%",a.element.find("select.specialist_theme_select, select.specialist_age_select").select2(a.select2Options)}),can.bind.call(l,"toggleWatch",can.proxy(a.toggleWatch,a)),r.on(can.proxy(this.loadMore,this))},toggleWatch:function(t,e){var s=l.attr("user").user().attr("_id"),a=_.findIndex(this.data.attr("articles"),{_id:e}),i=this.data.attr("articles."+a+".watchers").indexOf(s);-1!==i?this.data.attr("articles."+a+".watchers").splice(i,1):this.data.attr("articles."+a+".watchers").push(s)},".icon click":function(t){var e=this.data.attr("filter"),s=t.data("filter");this.icons.removeClass("active"),e!==s&&t.addClass("active"),this.data.attr("filter",e==s?"":s)},".specialist_sort_select change":function(t){this.data.attr("sort",1===+t.val()?"desc":"asc")},".specialist_age_select change":function(t){var e=this;this.data.attr("ageId",t.val()),setTimeout(function(){e.select2Options.width="100%",e.element.find("select.specialist_theme_select").select2(e.select2Options)},1)},"form submit":function(t,e){e.preventDefault(),this.validate(t);var s=this,a=can.deparam(t.serialize());a.age_id=s.element.find("select.specialist_age_select").val(),a.theme_id=s.element.find("select.specialist_theme_select").val(),t.valid()&&can.ajax({url:"/consultation",type:"POST",data:a}).done(function(e){l.attr("popUp").show({status:"info",text:"Ваш вопрос успешно отправлен консультанту."}),l.attr("moneybox",!0),t[0].reset()}).fail(function(t){var e=t.responseJSON.err.message||t.responseJSON.err.err;-1!==e.indexOf("AgushaHuge.consultation.$transliterated_1")&&(e="Такой вопрос уже был задан!"),l.attr("popUp").show({status:"error",text:e})})},".registration_link click":function(){ga("set","page",decodeURI(document.location.href)),ga("send","event","Registration","Specialist")},loadMore:function(){var t=this,e={lastId:t.articlesNextId},s=t.data.attr("articles");t.noMoreArts||can.ajax({url:"/consultations",method:"get",dataType:"json",data:e}).done(function(e){t.articlesNextId=e.nextAnchorId,can.batch.start(),_.each(e.documents,function(t){s.push(t)}),can.batch.stop(),(e.documents.length<24||1==t.articlesNextId||!t.articlesNextId)&&(t.noMoreArts=!0,$(".loadMore").hide())})},validate:function(t){return t.validate({errorPlacement:function(){},rules:{name:{maxlength:100,required:!0},text:{maxlength:300,required:!0}},messages:{name:{maxlength:"Максимальное количество символов для вопроса - 100.",required:"Вопрос это обязательное поле."},text:{maxlength:"Максимальное количество символов для описания вопроса - 300.",required:"Описание вопроса это обязательное поле."}},showErrors:function(t){return l.attr("popUp").show({text:(t.name?t.name+"<br />":"")+(t.text?t.text:""),status:"error"})}})},destroy:function(){l.attr("user").auth.undelegate("isAuth"),can.unbind.call(l,"toggleWatch"),r.off(),can.Control.prototype.destroy.call(this)}});return{get default(){return o},__esModule:!0}});