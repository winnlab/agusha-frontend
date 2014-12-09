import Controller from 'controller';

import select2 from 'select2';
import 'validate';

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.search_timeout = false;
			this.search_query = '';
			this.classname = 'active';
			
			this.tab_blocks = this.element.find('.tab_block');
			this.faq_blocks = this.tab_blocks.filter('.faq_block');
			
			this.feedback_form = this.element.find('.feedback_form');
			
			this.form_processing = 0;
		},
		
		plugins: function() {	
			this.select2();
		},
		
		select2: function() {
			var	selector = this.element.find('.feedback_select2');
			
			selector.select2({
				width: 'off',
				formatSelection: this.format,
				formatResult: this.format,
				minimumResultsForSearch: -1
			});
		},
		
		format: function(state) {
			var	el = $(state.element),
				normal = el.data('icon.normal'),
				hover = el.data('icon.hover'),
				html = 	'<div class="help_feedback_select adorable_table">' +
							'<div class="adorable_cell">' +
								state.text +
							'</div>' +
						'</div>';
			
			return html;
		},
		
		after_init: function(data) {
			if(data && data.faq) {
				this.faq = data.faq;
			} else {
				this.faq = app.faq;
			}
			
			this.tab_blocks.filter(':not(.active)').find('.text').hide();
		},
		
		'#faq_search keyup': function(el, ev) {
			var that = this;
			
			clearTimeout(this.search_timeout);
			
			this.search_timeout = setTimeout(function() {
				that.search(el.val());
			}, 300);
		},
		
		search: function(val) {
			var words, i, word, escaped_val;
			
			val = val.trim();
			val = val.replace(/ +(?= )/g,''); // remove double spaces
			
			escaped_val = escape(val).toLowerCase();
			
			if(this.search_query == escaped_val) {
				return;
			}
			
			this.search_query = escaped_val;
			
			words = val.split(' ');
			
			for(i = words.length; i--;) {
				word = words[i];
				
				word = escape(word).toLowerCase();
			}
			
			var filtered =	_.filter(this.faq, function(faq) {
				var title = faq.title.toLowerCase(),
					text = faq.text.toLowerCase(),
					match = false;
				
				for(i = words.length; i--;) {
					word = words[i];
					
					match = (title.indexOf(word) != -1 || text.indexOf(word) != -1);
					
					if(!match) {
						break;
					}
				}
				
				return match;
			});
			
			this.show_filtered(filtered);
		},
		
		show_filtered: function(filtered) {
			var i,
				j,
				found,
				block,
				flt,
				func;
			
			for(i = this.faq_blocks.length; i--;) {
				block = this.faq_blocks[i];
				
				found = false;
				
				for(j = filtered.length; j--;) {
					flt = filtered[j];
					
					if(block.id == 'faq_block_' + flt.id) {
						found = true;
						break;
					}
				}
				
				if(!found) {
					func = 'hide';
				} else {
					func = 'show';
				}
				
				$(block)[func]();
			}
		},
		
		'.tab_block .title click': function(el) {
			var tab_block = el.parent(),
				text = el.next(),
				func = 'slideDown';
			
			if(tab_block.hasClass(this.classname)) {
				func = 'slideUp';
			}
			
			text.stop(true, false)[func](300);
			
			tab_block.toggleClass(this.classname);
		},
		
		'.feedback_form submit': function(el, ev) {
			ev.preventDefault();
			
			if(this.form_processing) {
				return false;
			}
			
			this.feedback_validate(el);
			
			if(!el.valid()) {
				return false;
			}
			
			this.form_processing = 1;
			
			var	that = this,
				data = el.serialize();
			
			can.ajax({
				url: '/send_feedback',
				data: data,
				type: 'POST',
				success: function(data) {
					that.form_processing = 0;
					
					if(data.err) {
						return console.error(data.err);
					}
					
					that.feedback_form.find('input, textarea').val('');
				},
				error: function(jqXHR, textStatus, errorThrown) {
					that.form_processing = 0;
					console.error(errorThrown);
				}
			});
		},
		
		feedback_validate: function(element){
			var required = 'Это обязательное поле';
			
			element.validate({
				rules: {
					name: {
						required: true,
						maxlength: 128,
						minlength: 2
					},
					email: {
						required: true,
						maxlength: 64,
						minlength: 6,
						email: true
					},
					text: {
						required: true,
						maxlength: 8000,
						minlength: 3
					}
				},
				messages: {
					name: {
						required: required,
						maxlength: 'Максимальное количество символов - 128',
						minlength: 'Минимальное количество символов - 3'
					},
					email: {
						required: required,
						maxlength: 'Максимальное количество символов - 64',
						minlength: 'Минимальное количество символов - 6',
						email: 'Введите корректный e-mail'
					},
					text: {
						required: required,
						maxlength: 'Максимальное количество символов - 8000',
						minlength: 'Минимальное количество символов - 7'
					}
				},
				
				errorPlacement: function(error, el){
					el.next().append(error).animate({
						opacity: "1"
					}, 1000);
				}
			});
		}
	}
);