'use strict';

import Controller from 'controller'
import Model from 'module/article/articleModel'
import 'bx-slider'


export default Controller.extend(
	{
		defaults: {
            viewpath: '/js/app/user/modules/article/views/',
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
		        	self.displayPollFormData(data);
		        }
	        });
		},

		displayPollFormData: function (data) {
			var self = this;
            var $pollAnsweredWrapper = $('.poll_container.answered');
            var $pollResults = $pollAnsweredWrapper.find('.pollResults');
            var $plz = $pollAnsweredWrapper.find('.plz');

			console.log(data);

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
		}
	}
);