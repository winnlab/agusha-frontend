import 'can/'
import _ from 'lodash'
import appState from 'appState'

can.Component.extend({
	tag: 'pagination',
	template: can.view('/js/app/admin/components/pagination/views/pagination.stache'),
	scope: {
		page: 1,
		pages: 1,
		pagesArray: function () {
			return _.range(1, this.attr('pages') + 1);
		}
	},
	events: {


		giveAwayData: function (results = false) {
			try {
			    this.scope.attr("visible", false);
			    this.scope.attr('fn').exec(results);
			} catch(e) {
				console.error(e);
				console.error("`articlefilter` component seems do not have callback argument (fn) or it has no function in `exec` property");
			}
		}
	}
});