import can from 'can/';
import moment from 'moment';

var Counter = new can.Map({
	diff: 0,
	days: [],
	hours: [],
	minutes: []
});

var fn60sec = function() {
	var	currentDate = moment(),
		endDate = moment('21.05.2015', 'DD.MM.YYYY'),
		diff = endDate.diff(currentDate),
		duration = moment.duration(diff);
	
	Counter.attr('diff', diff);
	Counter.attr('days').replace(leftPad(duration._data.days + (duration._data.months > 0 ? 30 : 0), 2).split(''));
	Counter.attr('hours').replace(leftPad(duration._data.hours, 2).split(''));
	Counter.attr('minutes').replace(leftPad(duration._data.minutes, 2).split(''));
}
fn60sec();
setInterval(fn60sec, 60 * 1000);

export default Counter;