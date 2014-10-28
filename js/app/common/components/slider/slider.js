import _ from 'lodash'

import 'css/common/components/slider.css!'

export default can.Component.extend({
  tag: "slider",
  template: can.view('/js/app/common/components/slider/views/slider.stache'),
  scope: {
    index: '@',
    position: 0,
    timeout: 5000,
    gallery: can.Deferred(),
    shift: function (back) {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }

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

      this.timerId = _.delay(this.shift.bind(this), this.attr('timeout'));
    }
  },
  events: {
    init: function () {
      var scope = this.scope,
          timerId;

      scope.attr('gallery').done(function (gallery) {
        scope.attr('gallery', gallery);
        timerId = _.delay(scope.shift.bind(scope), scope.attr('timeout'));
        scope.attr('timerId', timerId);
      });

      can.when(scope.attr('images')).then(function (images) {
        var newGallery = _.where(images, {_id: scope.attr('index')});

        if (!newGallery[0]) {
          throw new Error('Unknown gallery ID in slider: ' + scope.attr('index'));
        }

        
        if (scope.attr('gallery').resolve) {
          scope.attr('gallery').resolve(newGallery[0]);
        } else {
          scope.attr('gallery', newGallery[0]);
          timerId = _.delay(scope.shift.bind(scope), scope.attr('timeout'));
          scope.attr('timerId', timerId);
        }
      });
    },

    '.slider-arrow click': function(el) {
      var scope = this.scope;

      scope.shift($(el).hasClass('left'));
    }
  }
});