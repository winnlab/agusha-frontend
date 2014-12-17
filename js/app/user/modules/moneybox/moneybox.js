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

			this.tab_selectors = this.element.find('.tab_selector');

			this.tab_blocks = this.element.find('.tab_block');

			this.prizes_buttons = this.element.find('.all_prizes button');
		},

		plugins: function() {

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
				i;
			
			this.images = [];
			
			for(i = prizeGroups.length; i--;) {
				var prizeGroup = $(prizeGroups[i]),
					imagesInside = prizeGroup.find('.images_inside'),
					cards = imagesInside.find('.moneybox_card'),
					pages = Math.ceil(cards.length / 2);
				
				this.images[i] = {
					prizeGroup: prizeGroup,
					imagesInside: imagesInside,
					cards: cards,
					pages: pages,
					currentPage: 1,
					currentPageSpan: prizeGroup.find('.currentPage')
				}
				
				prizeGroup.find('.pages').html(pages);
			}
		},
		
		'.moneybox_card .left click': 'prev_card_image',
		'.moneybox_card .right click': 'next_card_image',
		
		prev_card_image: function(el) {
			var	groupIndex = el.closest('.prizeGroup').data('index'),
				image = this.images[groupIndex],
				cardIndex = el.closest('.moneybox_card').data('index'),
				card = $(image.cards[cardIndex]),
				images = card.find('.card_image_selector'),
				prev = images.filter('.active').prev(),
				target, imageIndex;
			
			if(prev.length) {
				target = prev;
			} else {
				target = images.filter(':last-child');
			}
			
			imageIndex = target.data('index');
			
			images.removeClass(this.active);
			card.find('.card_image_' + imageIndex).addClass(this.active);
		},
		
		next_card_image: function(el) {
			var	groupIndex = el.closest('.prizeGroup').data('index'),
				image = this.images[groupIndex],
				cardIndex = el.closest('.moneybox_card').data('index'),
				card = $(image.cards[cardIndex]),
				images = card.find('.card_image_selector'),
				next = images.filter('.active').next(),
				target, imageIndex;
			
			if(next.length) {
				target = next;
			} else {
				target = images.filter(':first-child');
			}
			
			imageIndex = target.data('index');
			
			images.removeClass(this.active);
			card.find('.card_image_' + imageIndex).addClass(this.active);
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
				card = $(image.cards[index]),
				offset = card.position().left;
			
			image.imagesInside.css({
				'margin-left': -(offset | 0)
			});
			
			image.currentPageSpan.html(image.currentPage);
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
		}
	}
);
