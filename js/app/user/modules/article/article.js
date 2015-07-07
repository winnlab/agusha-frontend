'use strict';

import Controller from 'controller';
import Model from 'module/article/articleModel';
import appState from 'core/appState';
import pollResults from 'module/article/views/pollResults.mustache!'
import 'bx-slider';
import 'js/plugins/jquery.autosize/jquery.autosize.min';
import 'js/plugins/jquery.iframetracker/jquery.iframetracker';

export default Controller.extend(
	{
		defaults: {
            viewpath: '/js/app/user/modules/article/views/'
		}
	}, {
		variables: function() {
			this.base_url = window.location.protocol + '//' + window.location.host;

			this.id = this.options.id != "article" ? this.options.id : "undefined";
		},

		plugins: function(data) {
			this.article = null;

			if(data) {
				this.article = data.article;
			} else {
				this.article = app.article;
			}

			var	url = decodeURI(document.location.href) + '?utm_source=vkontakte&utm_medium=share&utm_campaign=site_articleshare',
				vk_options = {
					url: url,
					title: this.article.title
				},
				ok_options = "{width:145, height:20, st:'rounded', sz:20, ck:1}";

			if(this.article.image && this.article.image.SOCIAL) {
				vk_options.image = this.base_url + '/img/uploads/' + this.article.image.SOCIAL;
			}

			var vk_top = $('#vk_top_' + this.id);
			if(vk_top.length) {
				vk_top.html(VK.Share.button(vk_options));
			}

			var vk_bottom = $('#vk_bottom_' + this.id);
			if(vk_bottom.length) {
				vk_bottom.html(VK.Share.button(vk_options));
			}

			var ok_url = decodeURI(document.location.href) + '?utm_source=Odnoklassniki&utm_medium=share&utm_campaign=site_articleshare';

			var ok_top = $('#ok_top_' + this.id);
			if(ok_top.length) {
				OK.CONNECT.insertShareWidget("ok_top_" + this.id, ok_url, ok_options);
			}

			var ok_bottom = $('#ok_bottom_' + this.id);
			if (ok_bottom.length) {
				OK.CONNECT.insertShareWidget("ok_bottom_" + this.id, ok_url, ok_options);
			}

			if (typeof FB !== 'undefined') {
				FB.XFBML.parse(this.element[0]);
			}
		},

		after_init: function(data) {
			var id = this.id.split('-')[1];

			this.carousel();
			this.moveBackground();
			this.initResizableTextarea();
			this.initIFrameEvents();
		},

		initResizableTextarea: function () {
			$('.comment_form textarea').autosize();
		},

		carousel: function () {
			var self = this;

			$('.interesting_content', self.element).bxSlider({
			    slideWidth: 280,
			    minSlides: 2,
			    maxSlides: 4,
			    moveSlides: 1
			});


			$('.articleGallery', self.element).bxSlider({
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 1,
				controls: true,
				pager: true
			});
		},

		'.pollForm submit': function (el, ev) {
			var self = this;
			ev.preventDefault();

	        can.ajax({
		        url: '/pollVote',
		        type: 'POST',
		        data: can.deparam(el.serialize()),
		        success: function (data) {
		        	self.displayPollFormData(el, data);
		        }
	        });
		},

		displayPollFormData: function (el, data) {
			var self = this;
            var $pollAnsweredWrapper = $('.answered');
            var $pollResults = $pollAnsweredWrapper.find('.pollResults');

			$('.pollUnvoted').slideUp();

			$pollResults.html(
                can.view(pollResults, {
                	article: data.data
                })
            );

            if ($pollAnsweredWrapper.css('display') == 'none') {
	            $pollAnsweredWrapper.slideDown();
            }
		},

		'.slideRight click': function(el, ev) {
			$('.bx-wrapper .bx-next', this.element).trigger('click');

			ga('set', 'page', decodeURI(document.location.href));
			ga('send', 'event', 'ArticleCarousel', 'Right');
		},

		'.slideLeft click': function(el, ev) {
			$('.bx-wrapper .bx-prev', this.element).trigger('click');

			ga('set', 'page', decodeURI(document.location.href));
			ga('send', 'event', 'ArticleCarousel', 'Left');
		},

		'.registration_link click': function() {
			ga('set', 'page', decodeURI(document.location.href));
			ga('send', 'event', 'Registration', 'ArticleComment');
		},

		'{window} scroll': function (el, ev) {
			if (this.element.hasClass('active')) {
				this.moveBackground();
			}
		},

/*		moveBackground: function () {
			var $bg = $('.articleBackground', this.element);
			var yPos = window.scrollY || $(window).scrollTop();
			var coords = 'center';

			var img = new Image;
			var bgImage = $bg.css('background-image');

			if ($bg.css('background-image').length > 0) {
				img.src = $bg.css('background-image').replace(/url\(|\)$/ig, "");

				if (img.src && img.src.length > 0) {
					var bgImgHeight = img.height;

					var limit = $('.article_bottom', this.element).offset().top - bgImgHeight;

					if ( yPos <= limit ) {
						coords = '50% '+ yPos + 'px';
					} else {
						coords = '50% '+ limit + 'px';
					}

					$bg.css({
						backgroundPosition: coords
					});
				}
			}
		}*/

		moveBackground: function () {
			var $bg = $('.articleBackground', this.element);
			var yPos = window.scrollY || $(window).scrollTop();
			var coords = '0px';

			if ($bg.find('img').length > 0) {

				var bgHeight = $bg.height();

				var limit = $('.article_bottom', this.element).offset().top - bgHeight - 8;

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

		'.scrollToComments click': function (el, ev) {
			var self = this;

			var $comments = self.element.find('.comments');

			$('html, body').animate({
				scrollTop: $comments.offset().top
			}, 500);
		},

		initIFrameEvents: function () {
			var self = this;

			$('.social_button.fb iframe', self.element).iframeTracker({
				blurCallback: function(){
					self.sendSocialLike('fb');
				}
			});

			setTimeout(function() {
				$('.social_button.vk iframe', self.element).iframeTracker({
					blurCallback: function(){
						self.sendSocialLike('vk');
					}
				});
			}, 1000);

			$('.social_button.ok iframe', self.element).iframeTracker({
				blurCallback: function(){
					self.sendSocialLike('ok');
				}
			});
		},

		sendSocialLike: function (network) {
			can.ajax({
				url: '/like/socialLike',
				type: 'POST',
				data: {network: network},
				success: function (data) {
					appState.attr('moneybox', true);
				}
			});
		}
	}
);
