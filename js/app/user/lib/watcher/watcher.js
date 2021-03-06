'use strict';

import can from 'can/';
import appState from 'core/appState';

export default can.Control.extend({

    '.watch click': function (el, ev) {
        ev.preventDefault();
        ev.stopPropagation();

        this.toggleWatch(el, el.data('component_id'), this.displayResponse);
    },

    displayResponse: function (el, data) {

        if (data && data.data) {
            // Todo change selectors and counters

            var id = el.data('component_id');
            var $counters = $('.count.watch[data-component_id=' + id + ']');

            can.trigger(appState, "toggleWatch", [id, data.data.doc]);

            if ($counters.length > 0) {
                var likesAmount = data.data.doc.watchers.length;

                $counters.html(likesAmount);
                $counters.parents('.toggleWatch').toggleClass('isWatched');
            }

        }
    },

    toggleWatch: function (el, docId, callback) {
        if (docId && callback) {
            can.ajax({
                url: '/watch/toggleWatch',
                type: 'POST',
                data: { _id: docId },
                success: function (data) {
                    callback(el, data);
                }
            });
        } else {
            console.log('param is missing');
        }
    }
});
