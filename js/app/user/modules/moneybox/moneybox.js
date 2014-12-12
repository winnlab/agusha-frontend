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
			this.classname = 'active';
			this.base_url = window.location.protocol + '//' + window.location.host;
			
			this.tab_selectors = this.element.find('.tab_selector');
			
			this.tab_blocks = this.element.find('.tab_block');
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
				activatedAt: data ? data.user.activated_at : (app.user ? app.user.activated_at : 0)
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

			if(tab_block.hasClass(this.classname)) {
				func = 'slideUp';
			}

			text.stop(true, false)[func](300);

			tab_block.toggleClass(this.classname);
		},

		'.tab click': 'changeTab',

		'.link-tab click': 'changeTab',

		changeTab: function(el) {
			var tab = el.data('tab'),
				block = el.data('block');
			
			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
			
			if(block) {
				this.tab_blocks.removeClass(this.classname);
				this.tab_blocks.find('.text').stop(true, false).slideUp(300);
				
				var tab_block = this.tab_blocks.filter('.' + block);
				
				tab_block.addClass(this.classname);
				tab_block.find('.text').stop(true, false).slideDown(300);
			}
			
			this.scrollTop();
		},

		'.up_button click': 'scrollTop',
		
		'scrollTop': function() {
			$('html, body').scrollTop(0);
		}
	}
);
