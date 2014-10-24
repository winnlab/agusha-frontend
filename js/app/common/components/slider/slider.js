import _ from 'lodash'

import 'css/common/components/slider.css!'

export default can.Component.extend({
  tag: "slider",
  template: can.view('/js/app/common/components/slider/views/slider.stache'),
  scope: {
    index: '@',
    position: 0,
    timeout: 5000,
    shift: function (back) {
      var count = this.attr('gallery').images.attr('length'),
          pos = this.attr('position');

      can.batch.start();

      pos += back ? -1 : 1;

      if (pos < 0) {
        pos = count - 1;
      }

      if (pos >= count) {
        pos = 0;
      }

      this.attr('position', pos);

      can.batch.stop();

      _.delay(this.shift.bind(this), this.attr('timeout'));
    }
  },
  events: {
    init: function () {
      console.log('slider initing')

      var images = this.scope.attr('images'),
          newGallery = _.where(images, {_id: this.scope.attr('index')});
      
      if (!newGallery[0]) {
        throw new Error('Unknown gallery ID in slider: ' + this.scope.attr('index'));
      }

      this.scope.attr('gallery', newGallery[0]);

      _.delay(this.scope.shift.bind(this.scope), this.scope.attr('timeout'));
    }
  }
});