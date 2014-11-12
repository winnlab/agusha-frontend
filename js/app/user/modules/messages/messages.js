'use strict';

import Controller from 'controller'
import Model from 'module/messages/messagesModel'

export default Controller.extend(
    {
        defaults: {

        }
    }, {
        variables: function() {
            this.id = this.options.id != "messages" ? this.options.id : "undefined";
        },

        plugins: function() {

        },

        after_init: function(data) {

            Model.findAll()
                .done(function(data){
                    console.log(data);
                })
                .fail(function(data){
                    console.error(data);
                });
        }
    }
);