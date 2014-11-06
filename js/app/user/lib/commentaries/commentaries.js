'use strict';

import can from 'can/';
import Ratings from 'ratings';
import commentaryView from 'js/app/user/lib/commentaries/views/commentary.mustache!'

export default can.Control.extend({
    defaults: {
        viewpath: ''
    }
}, {
    init: function() {

    },

    '.comment_form submit': function (el, ev) {
        ev.preventDefault();
        var self = this;

        can.ajax({
            url: '/commentaries/addCommentary',
            type: 'POST',
            data: can.deparam(el.serialize()),
            success: function (data) {
                self.displayResponse(el, data)
            }
        });
    },

    displayResponse: function (el, data) {
        var self = this;

        console.log(data);

        if (data && data.data) {

            var id = data.data.doc._id;

            var $commentsWrap = el.parents('.comments');
            var $commentsList = $commentsWrap.find('.comments_container');

            $commentsList.append(can.view(commentaryView, data.data, {

                getDate: function(date) {
                    var day = null,
                        month = null;

                    if (date) {
                        var date = new Date(date);
                        var monthNames = [ "янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек" ];

                        day = date.getDate();
                        month = monthNames[date.getMonth()];
                    }

                    return day + ' ' + month;
                }
            }));

            console.log(el.find('textarea[name="content"]'));
            el.find('textarea[name="content"]').val('');

/*            var $counters = $(document).find('.count[data-component_id='+id+']');

            if ($counters.length > 0) {
                var likesAmount = data.data.doc.likes.length;

                $counters.html(likesAmount);
            }*/

        }
    },

    '.rating .plus click': function (el, ev) {
        ev.preventDefault();
        ev.stopPropagation();

        Ratings.toggleRating(1, el.data('model'), el.data('component_id'), el.data('commentary_id'));
    },

    '.rating .minus click': function (el, ev) {
        ev.preventDefault();
        ev.stopPropagation();

        Ratings.toggleRating(-1, el.data('model'), el.data('component_id'), el.data('commentary_id'));
    }
});
