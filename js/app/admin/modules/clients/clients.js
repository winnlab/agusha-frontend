'use strict';

import 'can/';
import List from 'list';
import _ from 'lodash';
import 'pagination';
import moment from 'js/plugins/moment/min/moment.min';
import 'swal';
import 'daterangepicker';
import 'bootstrap';

import ClientModel from 'js/app/admin/modules/clients/clientModel';
import Client from 'js/app/admin/modules/clients/client';

export default List.extend(
	{
		defaults: {
      viewpath: '/js/app/admin/modules/clients/views/',
      viewName: 'index.stache',

      moduleName: 'clients',
      Model: ClientModel,

      Edit: Client,

      successMsg: 'Сущность успешно сохранена.',
      errorMsg: 'Ошибка сохранения сущности.',

      add: '.addClient',
      edit: '.editClient',
      remove: '.removeClient',

      formWrap: '.clientForm',

      parentData: '.client',

      limit: 100,

			momentFormat: 'DD/MM/YYYY HH:mm'
    }
	},
  {
    init: function () {
      var self = this;

      List.prototype.init.call(self);

      self.module.attr('currentPage', 1);
      self.module.attr('searchString', '');

      self.module.attr('count', self.options.Model.pages);
      self.module.attr('limit', self.options.limit);

      self.module.bind('currentPage', function () {
        if(!self.blocked) {
          self.populateModel();
        }
      });

			self.element.find('#t-export-range').daterangepicker({
				timePicker: true,
				timePickerIncrement: 5,
				format: self.options.momentFormat,
				timePicker12Hour: true,
				startDate: moment().subtract('months', 1),
				endDate: moment(),
				maxDate: moment()
		});

		self.element.find('#t-export-range')
			.val(
				moment().subtract('months', 1).format(self.options.momentFormat) +
				' - ' +
				moment().format(self.options.momentFormat)
			);
    },

    populateModel: function () {
      var o = this.options,
        searchString = this.module.attr('searchString'),
        params = {
          page: this.module.attr('currentPage') || 1,
          limit: o.limit
        };

      if (searchString && !_.isEqual(this.oldSearchString, searchString)) {

        this.oldSearchString = searchString;
        params.page = 1;

        can.batch.start();
        this.blocked = true;
        this.module.attr('currentPage', 1);
        this.blocked = false;
        can.batch.stop();

        params.$or = [
          {'profile.first_name' : searchString},
          {'profile.last_name' : searchString},
          {'email' : searchString}
        ];
      }

      this.module.attr(o.moduleName, new o.Model.List(params));
    },

    '.t-do-search click': function () {
      this.populateModel();
    },

    '{remove} click': function (el) {
      var self = this,
        doc = self.getDocHandle(el);

      if(!doc.attr('active')) {
        return swal({
          title: "Уже сделано",
          text: "Пользователь уже деактивирован!",
          type: "info"
        });
      }

      swal({
        title: "Деактивация пользователя",
        text: "Вы уверены? Активировать пользователя вручную после выполнения данной операции невозможно.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Продолжай!",
        cancelButtonText: "Нет!",
        closeOnConfirm: false,
        closeOnCancel: true
      }, function (isConfirm) {
        if (isConfirm) {
          can.batch.start();
          doc.attr('active', false);
          doc.save()
            .always(function () {
              can.batch.stop();
            })
            .done(function (response) {
              if(response.err) {
                doc.attr('active', true);
                return self.processError(response.err);
              }
              swal("Пользователь деактивирован!", "Мы лишь сделали то, что вы просили...", "success");
            })
            .fail(function () {
              doc.attr('active', true);
              swal("Упс!", "Произошла ошибка при сохранении. Возможно, у вас отсутствует подключение к сети.", "error");
            });
        }
      });
    },

    processError: function (err) {
      var msg = err.err, json;

      if (!msg && err.errors && err.errors.title) {
        msg = err.errors.title.message;
      }

      if (!msg && err.message) {
        msg = err.message;
      }

			if (!msg && err.responseJSON) {
				json = err.responseJSON;
        msg = _.isString(json.err) && json.err ||
					json.data && json.data.message;
      }

			if (!msg && err.responseText) {
				msg = err.responseText;
			}

			if (!msg && err.statusText) {
				msg = err.statusText;
			}

			if (!msg) {
				msg = err.toString();
			}


      swal('Упс!', msg, 'error');
    },

		download: function (url, token) {
			$('<form action="' + url +
				'" method="post" enctype="multipart/form-data">' +
				'<input type="hidden" name="token" value="' + token + '" />' +
				'</form>'
			)
				.appendTo('body')
				.submit()
				.remove();
		},

		waitForExport: function () {
			if (!_.isString(this.token)) {
				return;
			}

			$.post('/admin/clients/export', {token: this.token})
				.done(_.bind(function (body, data, response) {
					if (response.status === 200) {
						this.element.find('#export-popup').remove();
						this.download('/admin/clients/downloadFile', this.token);
					} else {
						_.delay(_.bind(this.waitForExport, this), 2000);
					}
				}, this))
				.fail(_.bind(function () {
					_.delay(_.bind(this.waitForExport, this), 2000);
				}, this));
		},

		'#export-form submit': function (el, ev) {
			var self = this;

			ev.preventDefault();

			$.post('/admin/clients/export', el.serialize())
				.done(function (data) {
					self.token = data;
					self.showExportingPopup();
					self.waitForExport();
				})
				.fail(this.processError);
		},

		showExportingPopup: function () {
			if (this.element.find('#export-popup').size()) {
				return;
			}

			this.element.append(
				'<div id="export-popup" class="alert alert-warning alert-dismissible" role="alert" style="position:fixed;top:40%;left:40%;width:40%;">' +
			    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
			        '<span aria-hidden="true">&times;</span>' +
			    '</button>' +
			    '<strong>Данные экспортируются!</strong> Данная процедура может занять около 5 минут... Скачивание файла начнется автоматически.' +
				'</div>'
			);
		},

		'#t-export-last click': function () {
			this.download('/admin/clients/downloadFile', 'last');
		}
  }
);
