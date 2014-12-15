import can from 'can/';
import _ from 'lodash';
import moment from 'moment';
import 'js/plugins/moment/locale/ru';

moment.locale('ru');

var monthNames = moment.months();

function getLvl (points, lvls) {
    return _.find(lvls, function (lvl) {
        return points + 200 > lvl.points;
    })
}
function computedVal (value) {
    if (typeof value === 'function') {
        value = value();
    }
    return value;
};

export default {
    lvl: function (points, lvls) {
        var points = computedVal(points);
        return points && getLvl(points, computedVal(lvls)).label;
    },
    isLast: function (index, all, options) {
        return index() == all() - 1 ? options.fn() : options.inverse();
    },
    isAchived: function (myPoints, points) {
        return Number(myPoints()) + 200 > points() ? '_achieve' : '';
    },
    gt: function (a, b, options) {
        return computedVal(a) > computedVal(b) ? options.fn() : options.inverse();
    },
    getLvlWidth: function (myPoints, points) {
        var diff = 200 - (+(points()) - (+myPoints()))
        return (diff > 0 && diff < 200) ? 'width: ' + (diff / 200 * 100) + '%;' : '';
    },
    minus: function (a, b) {
        return (computedVal(a) - computedVal(b)).toString();
    },
    myPoints: function (points) {
        var myPoints = points().toString(),
            result = '';

        _.each(myPoints, function (point) {
            result += '<div class="number"><div class="symbol">' + point + '</div></div>'
        });

        return result;
    },
    monthName: function (monthNumb) {
        return monthNames[computedVal(monthNumb) - 1];
    },
    getDate: function (time) {
        return moment( computedVal(time) ).format('DD.MM.YYYY');
    },
    getTime: function (time) {
        return moment( computedVal(time) ).format('hh:mm');
    },
    onWebSite: function (activatedAt) {
        activatedAt = computedVal(activatedAt);
        var now = moment(),
            diffYears = now.diff(moment(activatedAt), 'years'),
            diffMonths = now.diff(moment(activatedAt), 'months') % 12,
            diffDays = now.diff(moment().startOf('month'), 'days'),
            localeData = moment.localeData(),
            result = '';
        result += diffYears ? localeData.relativeTime(diffYears, true, 'yy') + ' ' : '';
        result += diffMonths ? localeData.relativeTime(diffMonths, true, 'MM') + ' ' : '';
        result += diffDays ? localeData.relativeTime(diffDays, true, 'dd') : '';
        return result;
    }
}
