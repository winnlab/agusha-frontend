/*module/messages/messagesModel*/
define("module/messages/messagesModel",["baseModel","can/"],function(e,s){"use strict";e&&e.__esModule||(e={"default":e}),s&&s.__esModule||(s={"default":s});var o=e["default"],d=s["default"],l=d.Model.extend({id:"_id",resource:o.chooseResource("/conversations"),parseModel:o.parseModel,parseModels:o.parseModels},{});return{get default(){return l},__esModule:!0}});
/*module/messages/views/conversationsList.mustache!js/plugins/can/view/mustache/system*/
define("module/messages/views/conversationsList.mustache!js/plugins/can/view/mustache/system",["can/view/mustache/mustache"],function(s){return s.view.preloadStringRenderer("module/messages/views/conversationsList.mustache",s.Mustache(function(e,t){var i=[];return i.push('<div class="item conversationItem" data-conversation_id="'),i.push(s.view.txt(!0,"div","data-conversation_id",this,s.Mustache.txt({scope:e,options:t},null,{get:"conversation._id"}))),i.push('"',s.view.pending({scope:e,options:t}),">"),i.push('\n    <div class="item_table">\n        <div class="avatar_column">\n            <div class="avatar"><img '),i.push(s.view.txt(2,"img","src",this,function(){var i=[];return i.push('src="'),i.push("/img/"),i.push(s.view.toStr(s.Mustache.txt({scope:e,options:t,special:!0},null,{get:"lastMessage.user.image"})())),i.push('"'),i.join("")})),i.push(' class="rounded"',s.view.pending({scope:e,options:t}),">"),i.push('</div>\n        </div>\n        <div class="content_column">\n            <div class="info">\n                <div class="name">'),i.push(s.view.txt(1,"div",0,this,s.Mustache.txt({scope:e,options:t},null,{get:"lastMessage.user.first_name"}))),i.push(" "),i.push(s.view.txt(1,"div",0,this,s.Mustache.txt({scope:e,options:t},null,{get:"lastMessage.user.last_name"}))),i.push('</div>\n            </div>\n            <div class="text">'),i.push(s.view.txt(0,"div",0,this,s.Mustache.txt({scope:e,options:t},null,{get:"lastMessage.message.content"}))),i.push("</div>\n        </div>\n    </div>\n</div>"),i.join("")}))});
/*module/messages/views/messagesList.mustache!js/plugins/can/view/mustache/system*/
define("module/messages/views/messagesList.mustache!js/plugins/can/view/mustache/system",["can/view/mustache/mustache"],function(s){return s.view.preloadStringRenderer("module/messages/views/messagesList.mustache",s.Mustache(function(t,e){var i=[];return i.push('<div class="item">\n    <div class="date">'),i.push(s.view.txt(1,"div",0,this,s.Mustache.txt({scope:t,options:e},null,{get:"date"}))),i.push('</div>\n    <div class="item_table">\n        <div class="avatar_column">\n            <div class="avatar"><img '),i.push(s.view.txt(2,"img","src",this,function(){var i=[];return i.push('src="'),i.push("/img/"),i.push(s.view.toStr(s.Mustache.txt({scope:t,options:e,special:!0},null,{get:"author.image"})())),i.push('"'),i.join("")})),i.push(' class="rounded"',s.view.pending({scope:t,options:e}),">"),i.push('</div>\n        </div>\n        <div class="content_column">\n            <div class="info">\n                <div class="name">'),i.push(s.view.txt(1,"div",0,this,s.Mustache.txt({scope:t,options:e},null,{get:"author.first_name"}))),i.push(" "),i.push(s.view.txt(1,"div",0,this,s.Mustache.txt({scope:t,options:e},null,{get:"author.last_name"}))),i.push('</div>\n            </div>\n            <div class="text">'),i.push(s.view.txt(0,"div",0,this,s.Mustache.txt({scope:t,options:e},null,{get:"message.content"}))),i.push("</div>\n        </div>\n    </div>\n</div>"),i.join("")}))});
/*modules/messages/messages*/
define("modules/messages/messages",["controller","module/messages/messagesModel","core/appState","lodash","module/messages/views/conversationsList.mustache!","module/messages/views/messagesList.mustache!"],function(e,t,n,s,a,i){"use strict";e&&e.__esModule||(e={"default":e}),t&&t.__esModule||(t={"default":t}),n&&n.__esModule||(n={"default":n}),s&&s.__esModule||(s={"default":s}),a&&a.__esModule||(a={"default":a}),i&&i.__esModule||(i={"default":i});var o=e["default"],r=t["default"],u=n["default"],l=s["default"],d=a["default"],c=i["default"],f=o.extend({defaults:{viewpath:"/js/app/user/modules/messages/views/"}},{variables:function(){this.id="messages"!=this.options.id?this.options.id:"undefined"},plugins:function(){},after_init:function(e){var t=this;t.conversations=null,r.findAll().done(function(e){e&&(t.conversations=e,t.renderConversations(e))}).fail(function(e){console.error(e)})},renderConversations:function(e){var t=this,n=$(".left.items_container");n.html(""),0===e.length&&($(".search_container").hide(),$(".noMessagesInfo").show()),l.each(e,function(e){var s=t.getLastMessage(e);n.append(can.view(d,{conversation:e,lastMessage:s}))}),t.findUnreadConversations()},findUnreadConversations:function(){var e=this,t=u.attr("user").user()._id,n=l.filter(e.conversations,function(e){return l.find(e.interlocutors,function(e){return e.client._id==t?e.read===!1:void 0})});u.attr("unreadConversationsAmount",n.length)},getLastMessage:function(e){var t=null,n=u.attr("user").user()._id,s=null,a=l.findLast(e.messages,function(e){return e.author.toString()!==n.toString()});if("consultation"===e.type)s=u.attr("agushaUser");else{var i=l.find(e.interlocutors,function(e){return e.client._id===a.author});s={image:i.image?i.image.small:"user/helpers/stub/small.png",first_name:i.profile.first_name,last_name:i.profile.first_name}}return t={message:a,user:s}},".conversationItem click":function(e,t){var n=this,s=$(".right .items_container"),a=e.data("conversation_id");e.hasClass("active")||s.fadeOut(150,function(){var t=l.find(n.conversations,function(e){return e._id===a});s.html(""),l.each(t.messages,function(e){var a=n.getMessageAuthor(t,e),i=n.getMessageDate(e.date);s.append(can.view(c,{message:e,author:a,date:i}))}),$(".conversationItem.active").removeClass("active"),e.addClass("active");var i=$(".right .form_container");"consultation"===t.type?i.hide():i.show(),s.fadeIn(150,function(){$(".messageForm").css("display","block")})}),n.markConversationAsRead(a)},markConversationAsRead:function(e){var t=this;can.ajax({url:"/conversations/markConversationAsRead",type:"POST",data:{conversationId:e},success:function(e){e&&e.data&&t.updateConversationsArray(e.data)}})},updateConversationsArray:function(e){var t=this,n=l.findIndex(t.conversations,function(t){return t._id===e._id});t.conversations[n]=e,t.findUnreadConversations()},getMessageAuthor:function(e,t){var n=null,s=l.find(e.interlocutors,function(e){return e.client?e.client._id===t.author:void 0});return n=s?{image:s.client.image?s.client.image.small:"user/helpers/stub/small.png",first_name:s.client.profile.first_name,last_name:s.client.profile.last_name}:"consultation"===e.type?u.attr("agushaUser"):{image:"no_photo.png",first_name:"Неизвестный",last_name:""}},getMessageDate:function(e){var t=null,e=new Date(e),n=e.getDate(),s=["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"],a=s[e.getMonth()];return t=n+" "+a+"."}});return{get default(){return f},__esModule:!0}});