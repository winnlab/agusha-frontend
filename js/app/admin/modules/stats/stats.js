'use strict';

import 'can/';
import _ from 'lodash';

export default can.Control.extend(
  {
    defaults: {
      groupsLabels: [
        '0-3',
        '4-5',
        '6-7',
        '8-9',
        '10-11',
        '12-17',
        '18',
        '19-24',
        '25-30',
        '31-35',
        '36-48',
        'Свыше 48'
      ]
    }
  },
  {
    init: function () {
      this.module = new can.Map({
        showList: true,
        items: [
          {
            name: 'Возраста детей',
            className: 't-children-ages'
          }
        ]
      });

      this.element.html(
        can.view('/js/app/admin/modules/stats/views/index.stache', this.module)
      );
    },

    '.t-back click': function () {
      this.module.attr('showList', true);
      this.module.attr('data', null);
    },

    '.t-children-ages click': function () {
      var self = this;

      can.ajax({
        url: '/admin/stats/children',
        method: 'GET'
      }).done(function (response) {
          var result = [];
          _.each(response, function (count, index) {
            var row = [];
            row.push(self.options.groupsLabels[index]);
            row.push(count);
            result.push(row);
          });

          self.module.attr('data', {
            title: 'Возраста детей',
            th: ['Возраст ребенка, месяцев', 'Количество'],
            rows: result
          });

          self.module.attr('showList', false);
      }).fail(function (response) {
        saError(JSON.stringify(response));
      });
    }
  }
);
