import can from 'can/';

function setViewWidth (state) {
    var width = (window.innerWidth
        ? window.innerWidth
        : (document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : document.body.offsetWidth));
    if (width < 1180) {
        width = 1180;
    }

    state.attr('width', width);
}

function setViewHeight (state) {
    var viewportHeight = (window.innerHeight
        ? window.innerHeight
        : (document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : document.body.offsetHeight));

    if (viewportHeight < 624) {
        viewportHeight = 624
    }

    state.attr('height', viewportHeight);
}

export default can.Control.extend({

    init: function () {
        var self = this;
        self.state = new can.Map({
            width: 0,
            height: 0
        });

        setViewWidth(self.state);
        setViewHeight(self.state);
    },

    '{window} resize': function () {
        setViewWidth(this.state);
        setViewHeight(this.state);
    },

    getViewportWidth: function () {
        return this.state.attr('width');
    },

    getViewportHeight: function () {
        return this.state.attr('height');
    }

});
