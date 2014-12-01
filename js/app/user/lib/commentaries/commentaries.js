'use strict';

import can from 'can/';
import Ratings from 'ratings';
import commentaryView from 'js/app/user/lib/commentaries/views/commentary.mustache!'
import _ from 'lodash';
import appState from 'core/appState';


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
                appState.attr('moneybox', true);
                self.displayResponse(el, data)
            }
        });
    },

    displayResponse: function (el, data) {
        var self = this;

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

            el.find('textarea[name="content"]').val('');

            var $counters = $(document).find('.commentariesCount[data-component_id='+id+']');

            if ($counters.length > 0) {
                var commentariesAmount = data.data.doc.commentaries.length;

                $counters.html(' ' + commentariesAmount);
            }
        }
    },

    '.rating .plus click': function (el, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var self = this;

        Ratings.toggleRating(el, 1, el.data('model'), el.data('component_id'), el.data('commentary_id'), self.displayRatingResponse);
    },

    '.rating .minus click': function (el, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var self = this;

        Ratings.toggleRating(el, -1, el.data('model'), el.data('component_id'), el.data('commentary_id'), self.displayRatingResponse);
    },

    displayRatingResponse: function (el, data) {
        var commentaryId = el.data('commentary_id');

        if (data && data.data && data.data.doc) {
            var ratedCommentary = _.find(data.data.doc.commentaries, function(commentary){
                return commentaryId === commentary._id;
            });

            if (ratedCommentary && ratedCommentary != -1) {
                var rating = ratedCommentary.scoreInc - ratedCommentary.scoreDec;

                el.parent().find('.number').html(rating);
            }
        }
    },

    '.comments_all click': function (el, ev) {
        var $comments = el.parents('.comments');
        var $commentsList = $comments.find('.comments_container');

        if ($commentsList.hasClass('allVisible')) {
            $commentsList.removeClass('allVisible');
            $comments.find('.comments_all.all').css('display', 'inline');
            $comments.find('.comments_all.hide').css('display', 'none');
        } else {
            $commentsList.addClass('allVisible');
            $comments.find('.comments_all.all').css('display', 'none');
            $comments.find('.comments_all.hide').css('display', 'inline');
        }
    }
});
