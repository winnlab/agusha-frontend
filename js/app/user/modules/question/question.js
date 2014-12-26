import Controller from 'controller'
import Model from 'module/question/questionModel'
import appState from 'core/appState';
import 'bx-slider';

export default Controller.extend(
	{
		defaults: {
			viewpath: '/js/app/user/modules/question/views/'
		}
	}, {
		variables: function() {
			this.id = this.options.id != "question" ? this.options.id : "undefined";
		},

		plugins: function() {
			var vk_options = {
					type: "mini",
					height: 20
				},
				ok_options = "{width:145,height:20,st:'rounded',sz:20,ck:1}";

			VK.Widgets.Like("vk_top_" + this.id, vk_options);
			VK.Widgets.Like("vk_bottom_" + this.id, vk_options);

			OK.CONNECT.insertShareWidget("ok_top_" + this.id, document.URL, ok_options);
			OK.CONNECT.insertShareWidget("ok_bottom_" + this.id, document.URL, ok_options);
		},

		after_init: function(data) {
			var id = this.id.split('-')[1];

			this.carousel();
			this.initIFrameEvents();
		},

		carousel: function () {
			var self = this;

			$('.interesting_content', self.element).bxSlider({
			    slideWidth: 280,
			    minSlides: 2,
			    maxSlides: 3,
			    moveSlides: 1,
			    slideMargin: 10
			});
		},

		'.slideRight click': function(el, ev) {
			$('.bx-wrapper .bx-next', this.element).trigger('click');
		},

		'.slideLeft click': function(el, ev) {
			$('.bx-wrapper .bx-prev', this.element).trigger('click');
		},

		'.consultationResponse submit': function (el, ev) {
			ev.preventDefault();
			var self = this;
			var formData = can.deparam(el.serialize());

			can.ajax({
				url: '/question/sendAnswer',
				type: 'POST',
				data: formData,
				success: function (data) {
					el.find('textarea').val('');
					self.renderNewAnswer(formData, data);
				},
				error: function (data) {
					console.error('error', data);
				}
			});
		},

		renderNewAnswer: function (formData, data) {
			var self = this;

			var $answersContainer = $('.question_items', self.element);

			$answersContainer.append(
				can.view(self.options.viewpath + 'answer.stache', {
					answer: formData.answer.text,
					user: appState.attr('user').user(),
					date: data.data.updated
				}, {
					getDate: function (date) {
						var result = null;

						var date = new Date(date);
						var day = date.getDate();
						var monthNames = [ "янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек" ];
						var month = monthNames[date.getMonth()];

						result = day + ' ' + month + '.';

						return result;
					}
				})
			);
		},

		'{window} scroll': function (el, ev) {
			if (this.element.hasClass('active')) {
				this.moveBackground();
			}
		},

		moveBackground: function () {
			var $bg = $('.questionBackground', this.element);
			var yPos = window.scrollY || $(window).scrollTop();
			var coords = '0px';

			if ($bg.find('img').length > 0) {

				var bgHeight = $bg.height();

				var limit = $('.socialWrapper', this.element).offset().top - bgHeight - 8;

				if ( yPos <= limit ) {
					coords = yPos + 'px';
				} else {
					coords = limit + 'px';
				}

				$bg.css({
					top: coords
				});
			}
		},

		initIFrameEvents: function () {
			var self = this;

			$('.social_button.fb iframe', self.element).iframeTracker({
				blurCallback: function(){
					self.sendSocialLike('fb');
				}
			});

			$('.social_button.vk iframe', self.element).iframeTracker({
				blurCallback: function(){
					self.sendSocialLike('vk');
				}
			});

			$('.social_button.ok iframe', self.element).iframeTracker({
				blurCallback: function(){
					self.sendSocialLike('ok');
				}
			});
		},

		sendSocialLike: function (network) {
			console.log(network);
			can.ajax({
				url: '/like/socialLike',
				type: 'POST',
				data: {network: network},
				success: function (data) {
					console.log('success');
				}
			});
		}
	}
);
