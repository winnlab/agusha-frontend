import Controller from 'controller'
import Model from 'module/question/questionModel'

export default Controller.extend(
	{
		defaults: {
			
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
			
			VK.Widgets.Like("vk_top_question_" + this.id, vk_options);
			VK.Widgets.Like("vk_bottom_question_" + this.id, vk_options);
			
			OK.CONNECT.insertShareWidget("ok_top_question_" + this.id, document.URL, ok_options);
			OK.CONNECT.insertShareWidget("ok_bottom_question_" + this.id, document.URL, ok_options);
		},
		
		after_init: function(data) {
			var id = this.id.split('-')[1];
			Model.findOne({_id: id})
				.done(function(data){
					console.log(data);
				})
				.fail(function(data){});
		}	
	}
);