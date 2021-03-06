'use strict';

import can from 'can/';

export default {

    toggleRating: function (el, ratingValue, model, component_id, commentary_id, callback) {

        if (model && component_id && commentary_id) {

            can.ajax({
                url: '/commentaries/ratings/toggleRating',
                type: 'POST',
                data: {
                    _id: component_id,
                    model: model,
                    commentary_id: commentary_id,
                    ratingValue: ratingValue
                },
                success: function (data) {
                    callback(el, data);
                }
            });

        } else {
            console.error('Not all parameters were passed to toggle rating function');
        }

    }

}