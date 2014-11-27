'use strict';

import Controller from 'controller'
import Model from 'module/messages/messagesModel'
import appState from 'core/appState';
import _ from 'lodash';

export default Controller.extend(
    {
        defaults: {
            viewpath: '/js/app/user/modules/messages/views/'
        }
    }, {
        variables: function() {
            this.id = this.options.id != "messages" ? this.options.id : "undefined";
        },

        plugins: function() {

        },

        after_init: function(data) {
            var self = this;
            self.conversations = null;

            Model.findAll()
                .done(function(data){
                    if (data && data.length > 0) {
                        self.conversations = data;
                        self.renderConversations(data);
                    }
                })
                .fail(function(data){
                    console.error(data);
                });
        },

        renderConversations: function (data) {
            var self = this;
            var $container = $('.left.items_container');

            $container.html('');

            _.each(data, function(conversation) {
                var lastMessageUser = null;

                var lastMessage = self.getLastMessage(conversation);

                $container.append(
                    can.view(self.options.viewpath + 'conversationsList.stache', {
                        conversation: conversation,
                        lastMessage: lastMessage
                    })
                );
            });

            self.findUnreadConversations();
        },

        findUnreadConversations: function () {
            var self = this;
            var userId = appState.attr('user').user()._id;

            var unreadConversations = _.filter(self.conversations, function(conversation) {
                return _.find(conversation.interlocutors, function(interlocutor) {
                    if (interlocutor.client._id == userId) {
                        return interlocutor.read === false
                    }
                });
            });

            appState.attr('unreadConversationsAmount', unreadConversations.length);
        },

        getLastMessage: function (conversation) {
            var self = this;
            var result = null;
            var userId = appState.attr('user').user()._id;
            var user = null;

            var lastMessage = _.findLast(conversation.messages, function (message) {
                return message.author.toString() !== userId.toString();
            });

            if (conversation.type === 'consultation') {
                user = appState.attr('agushaUser');
            } else {
                var lastMessageUser = _.find(conversation.interlocutors, function(interlocutor) {
                    return interlocutor.client._id === lastMessage.author;
                });

                user = {
                    image: lastMessageUser.image ? lastMessageUser.image.small : 'user/helpers/stub/small.png',
                    first_name: lastMessageUser.profile.first_name,
                    last_name: lastMessageUser.profile.first_name
                };
            }

            result = {
                message: lastMessage,
                user: user
            };

            return result;
        },

        '.conversationItem click': function (el, ev) {
            var self = this;
            var $messagesContainer = $('.right .items_container');
            var conversationId = el.data('conversation_id');

            if (!el.hasClass('active')) {
                $messagesContainer.fadeOut(150, function() {

                    var conversation = _.find(self.conversations, function(conversation) {
                        return conversation._id === conversationId;
                    });

                    $messagesContainer.html('');

                    _.each(conversation.messages, function(message) {

                        var author = self.getMessageAuthor(conversation, message);
                        var messageDate = self.getMessageDate(message.date);

                        $messagesContainer.append(
                            can.view(self.options.viewpath + 'messagesList.stache', {
                                message: message,
                                author: author,
                                date: messageDate
                            })
                        );
                    });

                    $('.conversationItem.active').removeClass('active');
                    el.addClass('active');

                    var responseForm = $('.right .form_container');
                    if (conversation.type === 'consultation') {
                        responseForm.hide();
                    } else {
                        responseForm.show();
                    }

                    $messagesContainer.fadeIn(150);
                });
            }

            self.markConversationAsRead(conversationId);
        },

        markConversationAsRead: function(conversationId) {
            var self = this;

            can.ajax({
                url: '/conversations/markConversationAsRead',
                type: 'POST',
                data: {
                    conversationId: conversationId
                },
                success: function (data) {
                    if (data && data.data) {
                        self.updateConversationsArray(data.data);
                    }
                }
            });
        },

        updateConversationsArray: function (conversation) {
            var self = this;

            var conversationIndex = _.findIndex(self.conversations, function (element) {
                return element._id === conversation._id;
            });

            self.conversations[conversationIndex] = conversation;
            self.findUnreadConversations();
        },

        getMessageAuthor: function (conversation, message) {
            var self = this;
            var result = null;

            var interlocutor = _.find(conversation.interlocutors, function(interlocutor) {
                if (interlocutor.client) {
                    return interlocutor.client._id === message.author;
                }
            });

            if (!interlocutor) {
                if (conversation.type === 'consultation') {
                    result = appState.attr('agushaUser');
                } else {
                    result = {
                        image: 'no_photo.png',
                        first_name: 'Неизвестный',
                        last_name: ''
                    }
                }
            } else {
                result = {
                    image: interlocutor.client.image ? interlocutor.client.image.small : 'user/helpers/stub/small.png',
                    first_name: interlocutor.client.profile.first_name,
                    last_name: interlocutor.client.profile.last_name
                };
            }

            return result;
        },

        getMessageDate: function (date) {
            var result = null;

            var date = new Date(date);
            var day = date.getDate();
            var monthNames = [ "янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек" ];
            var month = monthNames[date.getMonth()];

            result = day + ' ' + month + '.';

            return result;
        }
    }
);