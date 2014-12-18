import can from 'can/';
import appState from 'core/appState';
import Controller from 'controller'
import moneyboxHelpers from 'modules/moneybox/moneyboxHelpers';

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		variables: function() {
			this.active = 'active';
			this.base_url = window.location.protocol + '//' + window.location.host;
			
			this.left_menu = $('#left_menu');

			this.tab_selectors = this.element.find('.tab_selector');

			this.tab_blocks = this.element.find('.tab_block');

			this.prizes_buttons = this.element.find('.all_prizes button');
			
			this.modal = this.element.find('.modal');
			this.modal_bg = this.modal.find('.modal_bg');
		},

		after_init: function(data) {
			var self = this;
			this.tab_blocks.filter(':not(.active)').find('.text').hide();
			this.module = new can.Map({
				lvls: data ? data.lvls : app.lvls,
				actions: data ? data.actions : app.actions,
				points: data ? data.user.points : (app.user ? app.user.points : 0),
				year: new Date().getFullYear(),
				activatedAt: data ? data.user.activated_at : (app.user ? app.user.activated_at : 0),
				allPrizes: false,
				prizes: data ? data.prizes : app.prizes
			});

			var moneybox_mustache = $('#moneybox_mustache'),
				html;

			if(!moneybox_mustache.length) {
				html = jadeTemplate.get('user/moneybox/moneybox_mustache');
			} else {
				html = moneybox_mustache.html();
			}

			can.view.mustache('moneybox_mustache', html);

			this.element.find('.moneyBoxWrap').html(can.view('moneybox_mustache', this.module, moneyboxHelpers));

			appState.delegate('moneybox', 'set', can.proxy(self.moneyboxed, self));
			
			this.init_sliders();
		},
		
		init_sliders: function() {
			var prizeGroups = this.element.find('.prizeGroup'),
				i, j;
			
			this.images = [];
			
			for(i = prizeGroups.length; i--;) {
				var prizeGroup = $(prizeGroups[i]),
					imagesInside = prizeGroup.find('.images_inside'),
					cards = imagesInside.find('.moneybox_card'),
					pages = Math.ceil(cards.length / 2);
				
				this.images[i] = {
					prizeGroup: prizeGroup,
					imagesInside: imagesInside,
					cards: [],
					pages: pages,
					currentPage: 1,
					currentPageSpan: prizeGroup.find('.currentPage')
				}
				
				for(j = cards.length; j--;) {
					var card = $(cards[j]),
						imageSelectors = card.find('.card_image_selector');
					
					this.images[i].cards[j] = {
						el: card,
						imageSelectors: imageSelectors,
						images: imageSelectors.length / 2,
						currentImage: 1
					}
				}
				
				prizeGroup.find('.pages').html(pages);
			}
		},
		
		'.moneybox_card .left click': 'prev_card_image',
		'.moneybox_card .right click': 'next_card_image',
		
		prev_card_image: function(el) {
			this.change_card_image(el, 'prev', ':last-child')
		},
		
		next_card_image: function(el) {
			this.change_card_image(el, 'next', ':first-child')
		},
		
		change_card_image: function(el, next, selector) {
			var	groupIndex = el.closest('.prizeGroup').data('index'),
				image = this.images[groupIndex],
				cardIndex = el.closest('.moneybox_card').data('index'),
				card = image.cards[cardIndex],
				images = card.imageSelectors,
				next = images.filter('.active')[next](),
				target, imageIndex;
			
			if(next.length) {
				target = next;
			} else {
				target = images.filter(selector);
			}
			
			imageIndex = target.data('index');
			
			images.removeClass(this.active);
			card.el.find('.card_image_' + imageIndex).addClass(this.active);
		},
		
		'.prizeGroup .left_arrow click': 'prev_cards_page',
		'.prizeGroup .right_arrow click': 'next_cards_page',
		
		prev_cards_page: function(el) {
			var index = el.closest('.prizeGroup').data('index'),
				image = this.images[index];
			
			if(image.currentPage == 1) {
				image.currentPage = image.pages;
			} else {
				image.currentPage--;
			}
			
			this.change_cards_page(image);
		},
		
		next_cards_page: function(el) {
			var index = el.closest('.prizeGroup').data('index'),
				image = this.images[index];
			
			if(image.currentPage == image.pages) {
				image.currentPage = 1;
			} else {
				image.currentPage++;
			}
			
			this.change_cards_page(image);
		},
		
		change_cards_page: function(image) {
			var index = (image.currentPage - 1) * 2,
				card = image.cards[index].el,
				offset = card.position().left;
			
			image.imagesInside.css({
				'margin-left': -(offset | 0)
			});
			
			image.currentPageSpan.html(image.currentPage);
		},
		
		'.modal_group_card .left click': 'prev_modal_image',
		'.modal_group_card .right click': 'next_modal_image',
		
		prev_modal_image: function(el) {
			var	modal_group_card = el.closest('.modal_group_card'),
				card_selectors = modal_group_card.find('.card_image_selector'),
				current_image = card_selectors.filter('.active'),
				current_index = current_image.data('index');
			
			if(current_index == 0) {
				var images = modal_group_card.data('images');
				
				current_index = images - 1;
			} else {
				current_index--;
			}
			
			this.change_modal_image(card_selectors, current_index);
		},
		
		next_modal_image: function(el) {
			var	modal_group_card = el.closest('.modal_group_card'),
				card_selectors = modal_group_card.find('.card_image_selector'),
				current_image = card_selectors.filter('.active'),
				current_index = current_image.data('index'),
				images = modal_group_card.data('images');
			
			if(current_index == images - 1) {
				current_index = 0;
			} else {
				current_index++;
			}
			
			this.change_modal_image(card_selectors, current_index);
		},
		
		change_modal_image: function(card_selectors, current_index) {
			
			card_selectors.removeClass(this.active);
			card_selectors.filter('.card_image_' + current_index).addClass(this.active);
		},
		
		moneyboxed: function (ev, newVal) {
			if (!newVal) {
				return;
			}
			var self = this;
			can.ajax({
				url: '/moneybox-points',
				dataType: 'json',
				method: 'get'
			}).done(function (data) {
				self.module.attr('actions', data.data.actions);
				self.module.attr('points', data.data.points);
			});
		},
		
		'.moneybox_card .card_image click': function(el) {
			this.modal.addClass(this.active);
			
			if(!this.modal_image_container) {
				this.modal_image_container = $("<div>").attr({
					'class': 'image_container'
				});
				
				this.modal_bg.append(this.modal_image_container);
			}
			
			var	groupIndex = el.closest('.prizeGroup').data('index'),
				cardIndex = el.closest('.moneybox_card').data('index'),
				selector = 'modal_group_' + groupIndex + '_card_' + cardIndex,
				card = this.images[groupIndex].cards[cardIndex];
			
			if(!this[selector]) {
				this[selector] = $("<div>").attr({
					'class': 'modal_group_card ' + selector,
					'data-images': card.images
				});
				
				this.modal_image_container.append(this[selector]);
				
				this[selector].append(card.el.html());
			}
			
			this.modal_image_container.find('.modal_group_card').removeClass(this.active);
			this[selector].addClass(this.active);
			
			var index = el.data('index'),
				card_selectors = this[selector].find('.card_image_selector');
			
			card_selectors.removeClass(this.active);
			card_selectors.filter('.card_image_' + index).addClass(this.active);
		},
		
		'.tab_block .title click': function(el) {
			var tab_block = el.parent(),
				text = el.next(),
				func = 'slideDown';

			if(tab_block.hasClass(this.active)) {
				func = 'slideUp';
			}

			text.stop(true, false)[func](300);

			tab_block.toggleClass(this.active);
		},

		'.tab click': 'changeTab',

		'.link-tab click': 'changeTab',

		changeTab: function(el) {
			var tab = el.data('tab'),
				block = el.data('block');

			this.tab_selectors.removeClass(this.active);
			this.tab_selectors.filter('.' + tab).addClass(this.active);

			if(block) {
				this.tab_blocks.removeClass(this.active);
				this.tab_blocks.find('.text').stop(true, false).slideUp(300);

				var tab_block = this.tab_blocks.filter('.' + block);

				tab_block.addClass(this.active);
				tab_block.find('.text').stop(true, false).slideDown(300);
			}

			this.scrollTop();
		},

		'.up_button click': 'scrollTop',

		'scrollTop': function() {
			$('html, body').scrollTop(0);
		},

		'.all_prizes button click': function(el) {
			var prizes_buttons = this.element.find('.all_prizes button');

			prizes_buttons.removeClass(this.active);
			el.siblings().addClass(this.active);
			this.module.attr('allPrizes', !this.module.attr('allPrizes'));
		},

		'.blueTable thead click': function(el) {
			el.parent().toggleClass(this.active);
		},
		
		'.modal .close click': function() {
			this.modal.removeClass(this.active);
		},
		
		'{window} custom_resize': 'custom_resize',
		
		custom_resize: function() {
			if(!this.element.hasClass(this.active)){
				return;
			}
			
			this.modal_bg.css({
				left: this.left_menu.width()
			});
		}
	}
);
