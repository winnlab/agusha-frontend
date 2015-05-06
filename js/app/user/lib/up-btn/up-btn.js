import can from 'can/';

export default can.Control.extend({
  init: function () {
    this.element.append('<div id="up-btn" class="up-btn"></div>');
    this.visible = false;
    this.btn = $('#up-btn');
    this.wind = $(window)
    this.toggle();
  },

  '{window} scroll': 'toggle',

  '.up-btn click': function (el) {
    if (!this.visible) return;
    $('html, body').animate({
      scrollTop: 0,
      duration: 500
    })
  },

  toggle: function () {
    var scrollTop = window.scrollY || this.wind.scrollTop();
    if (scrollTop > 1 && !this.visible) {
      this.btn.addClass('visible');
      this.visible = true;
    }
    if (scrollTop < 1 && this.visible) {
      this.btn.removeClass('visible');
      this.visible = false;
    }
  }

});
