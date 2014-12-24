import can from 'can/';
import view from 'js/app/user/lib/popUp/views/index.mustache!'

export default can.Control.extend({

    showPopup: function (data) {
        var $popupWrapper = $('.mainPopupWrapper');
        var $title = $popupWrapper.find('h1');
        var $content = $popupWrapper.find('p.content');

        if (data.title && data.title.length > 0) {
            $title.show();
            $title.html(data.title);
        } else {
            $title.hide();
        }

        if (data.content && data.content.length > 0) {
            $content.show();
            $content.html(data.content);
        } else {
            $content.hide();
        }

        $popupWrapper.fadeIn();
    }
},{

    init: function () {
        this.module = new can.Map({
            'close': true,
            'visible': null,
            'title': null,
            'text': null
        });

        this.element.append(can.view(view, this.module));
    },

    show: function (options) {
        this.def = options.def;

        this.module.attr({
            visible: true,
            title: options.title,
            text: options.text,
            status: options.status || 'info',
            cb: options.cb
        });
    },

    '.ok click': function() {
        this.closePopup(0);
    },

    '.yes click': function () {
        this.closePopup(1);
    },

    '.no click': function () {
        this.closePopup(-1);
    },

    '.close click': function () {
        this.closePopup(-1);
    },

    ' keyup': function (el, ev) {
        switch (ev.keyCode) {
            case 27:
                this.closePopup(-1);
                break;
            case 13:
                this.closePopup(1);
                break;
        }
    },

    closePopup: function (type) {

        if (this.def && type === 1) {
            this.def.resolve();
        }

        if (this.def && type === -1) {
            this.def.reject();
        }

        this.module.attr({
            'visible': false,
            'title': false,
            'text': false
        });

        this.def = null

        if (typeof this.module.cb === 'function') {
            this.module.cb();
        }
    }

});
