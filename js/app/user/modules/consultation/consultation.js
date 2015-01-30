import Controller from 'controller'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.id = this.options.id != "question" ? this.options.id : "undefined";
		},
		
		plugins: function() {
			var url = decodeURI(document.location.href) + '?utm_source=vkontakte&utm_medium=share&utm_campaign=site_articleshare',
				vk_options = {
					url: url
				},
				ok_options = "{width:145, height:20, st:'rounded', sz:20, ck:1}";
			
			var vk_top = $('#vk_top_question_' + this.id);
			if(vk_top.length) {
				vk_top.html(VK.Share.button(vk_options));
			}
			
			var vk_bottom = $('#vk_bottom_question_' + this.id);
			if(vk_bottom.length) {
				vk_bottom.html(VK.Share.button(vk_options));
			}
			
			var ok_url = decodeURI(document.location.href) + '?utm_source=Odnoklassniki&utm_medium=share&utm_campaign=site_articleshare';
			
			var ok_top = $('#ok_top_question_' + this.id);
			if(ok_top.length) {
				OK.CONNECT.insertShareWidget("ok_top_question_" + this.id, ok_url, ok_options);
			}
			
			var ok_bottom = $('#ok_bottom_question_' + this.id);
			if(ok_bottom.length) {
				OK.CONNECT.insertShareWidget("ok_bottom_question_" + this.id, ok_url, ok_options);
			}
			
			FB.XFBML.parse(this.element[0]);
		},
		
		after_init: function(data) {
			
		}	
	}
);