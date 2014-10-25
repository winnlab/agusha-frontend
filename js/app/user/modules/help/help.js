import Controller from 'controller'

export default Controller.extend(
	{
        defaults: {
			
        }
    }, {
		variables: function() {
			this.search_timeout = false;
			this.search_query = '';
			this.tab_selectors = this.element.find('.tab_selector');
			this.faq_blocks = this.element.find('.faq_block');
			this.classname = 'active';
		},
		
		after_init: function(data) {
			if(data) {
				this.faq = data.faq;
			} else {
				this.faq = app.faq;
			}
			
			this.faq_blocks.filter(':not(.active)').find('.text').hide();
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
			
			var filtered =  _.filter(this.faq, function(faq) {
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
		
		'.faq_block .title click': function(el) {
			var faq_block = el.parent(),
				text = el.next(),
				func = 'slideDown';
			
			if(faq_block.hasClass(this.classname)) {
				func = 'slideUp';
			}
			
			text.stop(true, false)[func](300);
			
			faq_block.toggleClass(this.classname);
		},
		
		'.tab click': function(el) {
			var tab = el.data('tab');
			
			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
		}
    }
);