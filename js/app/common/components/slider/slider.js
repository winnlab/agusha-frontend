export default can.Component.extend({
  tag: "slider",
  template: can.view('/js/app/common/components/slider/views/slider.stache'),
  scope: {
    message: 'HELLO, I`M THE SLIDER!',
    index: '@',
    count: 0
  },
  events: {
    click: function () {
      this.scope.attr('count', this.scope.attr('count') + 1);
      this.scope.attr("message", "DON`T TOUCH ME YOU ... !!!" );
    }
  }
});