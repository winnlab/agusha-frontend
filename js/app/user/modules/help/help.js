import Controller from 'controller'

import googlemaps_api from 'googlemaps_api'
import googlemaps_main from 'googlemaps_main'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.search_timeout = false;
			this.search_query = '';
			this.classname = 'active';
			this.base_url = window.location.protocol + '//' + window.location.host;
			
			this.tab_selectors = this.element.find('.tab_selector');
			
			this.tab_blocks = this.element.find('.tab_block');
			this.faq_blocks = this.tab_blocks.filter('.faq_block');
			
			this.tab_content_contacts = this.tab_selectors.filter('.tab_content.contacts');
			
			this.mapLatLng = new google.maps.LatLng(50.4300000, 30.389388);
			this.vishnevoeLatLng = new google.maps.LatLng(50.3856838, 30.3471481);
		},
		
		plugins: function() {
			this.init_map();
		},
		
		init_map: function() {
			var	options = {
					center: this.mapLatLng,
					zoom: 12
				};
			
			this.map = new google.maps.Map(document.getElementById('contacts_map'), options);
			
			this.draw_markers();
		},
		
		draw_markers: function() {
			new google.maps.Marker({
				position: this.vishnevoeLatLng,
				map: this.map,
				icon: this.base_url + '/img/user/help/agusha_marker.png'
			});
		},
		
		after_init: function(data) {
			if(data) {
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
		
		'.tab click': function(el) {
			var tab = el.data('tab');
			
			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
			
			if(this.tab_content_contacts.hasClass(this.classname)) {
				this.init_map();
			}
		}
	}
);