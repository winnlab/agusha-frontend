import Controller from 'controller'
import Model from 'module/article/articleModel'
import 'bx-slider'


export default Controller.extend(
	{
		defaults: {
			
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
			console.log(this.id);
			var id = this.id.split('-')[1];
			Model.findOne({_id: id})
				.done(function(data){
					console.log(data);
				})
				.fail(function(data){
					console.error(data);
				});

			this.carousel();
		},

		carousel: function () {
			var self = this;
			console.log($('.interesting_content'));
			$('.interesting_content').bxSlider({
			    slideWidth: 280,
			    minSlides: 2,
			    maxSlides: 3,
			    moveSlides: 1,
			    slideMargin: 10
			});
		}
	}
);