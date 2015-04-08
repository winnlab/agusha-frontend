import moment from 'moment';

var Counter = can.Map.extend({}, {
	define: {
		days: {
			value: new can.List(),
			get: function(currentValue) {
				var	options = {
						diff: this.attr('diff')
					},
					newValue,
					duration = moment.duration(options.diff);
				
				newValue = leftPad(duration._data.days + (duration._data.months > 0 ? 30 : 0), 2).split('');
				
				return newValue;
			}
		},
		
		hours: {
			value: new can.List(),
			get: function(currentValue) {
				var	options = {
						diff: this.attr('diff')
					},
					newValue,
					duration = moment.duration(options.diff);
				
				newValue = leftPad(duration._data.hours, 2).split('');
				
				return newValue;
			}
		},
		
		minutes: {
			value: new can.List(),
			get: function(currentValue) {
				var	options = {
						diff: this.attr('diff')
					},
					newValue,
					duration = moment.duration(options.diff);
				
				newValue = leftPad(duration._data.minutes, 2).split('');
				
				return newValue;
			}
		},
		
		diff: {
			value: 0
		}
	}
});

export default Counter;