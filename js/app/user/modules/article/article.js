'use strict';

import Controller from 'controller'
import Model from 'module/article/articleModel'
import 'bx-slider'


export default Controller.extend(
	{
		defaults: {
            viewpath: '/js/app/user/modules/article/views/'
		}
	}, {
		variables: function() {
			this.id = this.options.id != "article" ? this.options.id : "undefined";
		},
		
		plugins: function() {
			var vk_options = {
					type: "mini",
					height: 20
				},
				ok_options = "{width:145,height:20,st:'rounded',sz:20,ck:1}";
			
			VK.Widgets.Like("vk_top_article_" + this.id, vk_options);
			VK.Widgets.Like("vk_bottom_article_" + this.id, vk_options);
			
			OK.CONNECT.insertShareWidget("ok_top_article_" + this.id, document.URL, ok_options);
			OK.CONNECT.insertShareWidget("ok_bottom_article_" + this.id, document.URL, ok_options);
		},
		
		after_init: function(data) {
			var id = this.id.split('-')[1];

			this.carousel();
			this.moveBackground();
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
            var $pollAnsweredWrapper = $('.poll_container.answered');
            var $pollResults = $pollAnsweredWrapper.find('.pollResults');
            var $plz = $pollAnsweredWrapper.find('.plz');

			el.slideUp();
			el.parent().find('.plz').html('Вы уже проголосовали в этом опросе');

            $('.options_container.pollResults').html(
                can.view(self.options.viewpath + 'pollResults.stache', {
                	article: data.data
                })
            );

            if ($pollResults.css('display') == 'none') {
            	$pollResults.slideDown();
            }
            $plz.slideUp();
		},

		'.slideRight click': function(el, ev) {
			$('.bx-wrapper .bx-next', this.element).trigger('click');
		},

		'.slideLeft click': function(el, ev) {
			$('.bx-wrapper .bx-prev', this.element).trigger('click');
		},

		'{window} scroll': function (el, ev) {
			if (this.element.hasClass('active')) {
				this.moveBackground();
			}
		},

		moveBackground: function () {
			var $bg = $('.articleBackground', this.element);
			var yPos = window.scrollY || $(window).scrollTop();
			var coords = 'center';

			var img = new Image;
			var bgImage = $bg.css('background-image');

			if ($bg.css('background-image').length > 0) {
				img.src = $bg.css('background-image').replace(/url\(|\)$/ig, "");
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
	}
);