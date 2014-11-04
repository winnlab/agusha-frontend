'use strict';

import can from 'can/';

export default {

    toggleLike: function (el, model, docId, callback) {
        var self = this;

        var authData = localStorage.getItem('isAuth');

        if (/*authData && authData.data*/ true) {

/*            var userId = authData.data._id;*/

            var userId = '54563d70b73d83ef44da53f1';

            if (model && docId && userId && callback) {

                can.ajax({
                    url: '/like/toggleLike',
                    type: 'POST',
                    data: {model: model, userId: userId, _id: docId},
                    success: function (data) {
                        callback(el, data);
                    }
                });
            } else {
                console.log('param is missing');
            }

        }
    }
}