'use strict';

import can from 'can/';

export default can.Control.extend({
    defaults: {

    }
}, {
    init: function() {

    },

    '.like click': function (el, ev) {
        ev.preventDefault();
        ev.stopPropagation();

        this.toggleLike(el, el.data('component'), el.data('component_id'), this.displayResponse);
    },

    displayResponse: function (el, data) {

        if (data && data.data) {

            var id = el.data('component_id');
            var $counters = $('.count.like[data-component_id='+id+']');

            if ($counters.length > 0) {
                var likesAmount = data.data.doc.likes.length;

                $counters.html(likesAmount);
                $counters.parents('.footer').toggleClass('isLiked');
                $counters.parents('.toggleLike').toggleClass('isLiked');
            }

        }
    },

    toggleLike: function (el, model, docId, callback) {
        var self = this;

        if (model && docId && callback) {

            can.ajax({
                url: '/like/toggleLike',
                type: 'POST',
                data: {model: model, _id: docId},
                success: function (data) {
                    callback(el, data);
                }
            });
        } else {
            console.log('param is missing');
        }
    }
});
