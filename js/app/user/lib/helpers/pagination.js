import $ from 'jquery';

var namespace = 'pagination',
  target = null,
  setTarget = function () {
    target = $('.loadMore:visible');
  },
  showMoreVisible = function (cb) {
    var threshold;

    if (!target.length || !target.is(':visible')) return;

    threshold = $(window).scrollTop() + $(window).height() - target.outerHeight();

    if (target.offset().top < threshold) {
        if (!target.data('visible')) {
            target.data('visible', true);
            cb()
        }
    } else {
        if (target.data('visible')) {
            target.data('visible', false);
        }
    }
  }

export default {
  on: function (cb) {
    setTarget();
    showMoreVisible(cb);
    $(window).on(`scroll.${namespace}`, function () {
      showMoreVisible(cb);
    });
  },
  off: function () {
    $(window).off(`scroll.${namespace}`);
  }
}
