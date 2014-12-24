import Controller from 'controller';
import select2 from 'select2';
import appState from 'core/appState';
import validator from 'jquery-validation';

var ViewModel = can.Map.extend({
		isAuth: appState.attr('user').auth.attr('isAuth'),
		sort: 'asc',
		filter: ''
	});

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		variables: function() {
			this.formWrap = this.element.find('.column.double');
			this.icons = this.element.find('.icon');
			this.itemsContainer = this.element.find('.items_container');
			this.select2Options = {
				width: '100%',
				minimumResultsForSearch: -1,
				formatResult: this.format
			}
		},

		plugins: function() {},

		select2: function() {
			var	specialist_age_select = this.element.find('.specialist_age_select'),
				specialist_theme_select = this.element.find('.specialist_theme_select'),
				specialist_question_select = this.element.find('.specialist_question_select'),
				specialist_sort_select = this.element.find('.specialist_sort_select');

			specialist_age_select.select2(this.select2Options);
			specialist_theme_select.select2(this.select2Options);

			this.select2Options.width = 'off';

			specialist_question_select.select2(this.select2Options);
			specialist_sort_select.select2(this.select2Options);
		},

		format: function(state) {
			// var	el = $(state.element);

			var html = 	'<div class="adorable_table specialist_select2_result">' +
							'<div class="adorable_cell">' +
								state.text +
							'</div>' +
						'</div>';

			return html;
		},

		after_init: function(data) {
			var that = this,
				specHtml,
				html;

			this.data = new ViewModel({
				articles: data ? data.articles : app.consultations,
				ages: data ? data.ages : app.ages,
				ageId: data ? data.ages[0]._id : app.ages[0]._id,
				themes: data ? data.themes : app.themes
			});

			var consultation_mustache = $('#consultation_mustache'),
				specialist_mustache = $('#specialist_mustache');

			if(!consultation_mustache.length) {
				html = jadeTemplate.get('user/specialist/consultation_mustache');
				specHtml = jadeTemplate.get('user/specialist/specialist_mustache');
			} else {
				html = consultation_mustache.html();
				specHtml = specialist_mustache.html();
			}

			can.view.mustache('consultation_view', html);
			can.view.mustache('specialist_view', specHtml);

			this.formWrap.html(can.view('consultation_view', this.data));
			this.itemsContainer.html(can.view('specialist_view', this.data, {
				getClassName: function (index) {
					return (index - 4) % 5 == 0 ? 'double' : '';
				},
				filterIt: function (entity, filter) {
					filter = filter();
					if (filter == 'recommended') {
						return !entity.attr('recommended') ? 'display: none' : '';
					}
					if (filter == 'watchers') {
						var userId = appState.attr('user').user().attr('_id');
						if (!userId) {
							return !entity.attr('watchers').length ? 'display: none' : '';
						}
						return entity.attr('watchers').indexOf(userId) === -1 ? 'display: none' : '';
					}
					if (filter == 'spec') {
						return !!_.find(entity.attr('answer'), function (answer) {
							return !!answer.attr('specialist');
						}) ? '' : 'display: none';
					}
					return '';
				}
			}));

			this.select2();

			var auth = appState.attr('user').auth;

			auth.delegate('isAuth', 'set', function (ev, newVal) {
				that.data.attr('isAuth', newVal);
				that.select2Options.width = '100%'
				that.element.find('select.specialist_theme_select, select.specialist_age_select').select2(that.select2Options);
			});
			can.bind.call(appState, "toggleWatch", can.proxy(that.toggleWatch, that))
		},

		toggleWatch: function (ev, id) {
			var userId = appState.attr('user').user().attr('_id'),
				consIndex = _.findIndex(this.data.attr('articles'), { _id: id }),
				userIndex = this.data.attr('articles.' + consIndex + '.watchers').indexOf(userId);

			if (userIndex !== -1) {
				this.data.attr('articles.' + consIndex + '.watchers').splice(userIndex, 1);
			} else {
				this.data.attr('articles.' + consIndex + '.watchers').push(userId);
			}
		},

		'.icon click': function (el) {
			this.icons.removeClass('active');
			el.addClass('active');
			var oldFilter = this.data.attr('filter'),
				newFilter = el.data('filter');
			this.data.attr('filter', oldFilter == newFilter ? '' : newFilter);
		},

		'.specialist_sort_select change': function (el)  {
			this.data.attr('sort', el.val() === 1 ? 'asc' : 'desc');
		},

		'.specialist_age_select change': function (el)  {
			var self = this;
			this.data.attr('ageId', el.val());
			setTimeout(function () {
				self.select2Options.width = '100%'
				self.element.find('select.specialist_theme_select').select2(self.select2Options);
			}, 1);

		},

		'form submit': function (el, ev) {
			ev.preventDefault();
			this.validate(el);

			var self = this,
				data = can.deparam(el.serialize());
			data.age_id = self.element.find('select.specialist_age_select').val();
			data.theme_id = self.element.find('select.specialist_theme_select').val();

			if (!el.valid()) {
				// return appState.attr('popUp').show({
				// 	text: 'Пожалуйста заполните все поля.'
				// });
				return;
			}

			can.ajax({
				url: '/consultation',
				type: 'POST',
				data: data
			}).done(function (data) {
				appState.attr('popUp').show({
					text: 'Ваш вопрос успешно отправлен консультанту.'
				});
				el[0].reset();
			}).fail(function (data) {
				var text = data.responseJSON.err.message || data.responseJSON.err.err;

				if (text.indexOf('AgushaHuge.consultation.$transliterated_1') !== -1) {
					text = 'Такой вопрос уже был задан!';
				}

				appState.attr('popUp').show({
					text: text
				});
			});
		},

		validate: function (form) {
			return form.validate({
				errorPlacement: function() {},
				rules: {
					name: {
						maxlength: 100,
						required: true
					},
					text: {
						maxlength: 300,
						required: true
					}
				},
				messages: {
					name: {
						maxlength: "Максимальное количество символов для вопроса - 100.",
						required: "Вопрос это обязательное поле."
					},
					text: {
						maxlength: "Максимальное количество символов для описания вопроса - 300.",
						required: "Описание вопроса это обязательное поле."
					}
				},
				showErrors: function (errors) {
					return appState.attr('popUp').show({
						text: (errors.name ? errors.name + "<br />" : '') + (errors.text ? errors.text : ''),
						status: 'error'
					});
				}
			});
		}
    }
);
