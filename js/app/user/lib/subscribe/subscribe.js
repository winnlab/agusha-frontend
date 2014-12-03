import can from 'can/';
import appState from 'core/appState';

export default {

    subscribe: function (theme_id, cb) {
        this.processingSubscribe('POST', theme_id, {
            text: 'Вы успешно подписались на тему. <br /> Теперь статьи темы будут попадать в Вашу ленту.'
        }, cb);
    },

    unsubscribe: function (theme_id, cb) {
        this.processingSubscribe('DELETE', theme_id, {
            text: 'Вы успешно отписались от темы.',
        }, cb);
    },

    processingSubscribe: function (method, theme_id, popUpObj, cb) {
        var self = this;
        can.ajax({
            url: '/subscribe',
            method: method,
            data: {
                theme_id: theme_id
            }
        }).done(function (data) {
            appState
                .attr('subsChanged', true)
                .attr('popUp').show(popUpObj);
            cb.call(self, data);
        }).fail(this.reqFail);
    },

    reqFail: function (data) {
        var err = data.responseJSON.err;
        appState.attr('popUp').show({
            text: typeof err == 'string' ? err : err.message,
        });
    }
}
