import can from 'can/';
import _ from 'lodash';
import moment from 'moment';
import 'js/plugins/moment/locale/ru';

moment.locale('ru');

var monthNames = moment.months();

function getLvl (points, lvls) {
    return _.find(lvls, function (lvl) {
        return points < lvl.points;
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
        myPoints = computedVal(myPoints) || 0;
        return Number(myPoints) + 200 > points() ? '_achieve' : '';
    },
    gt: function (a, b, options) {
        return computedVal(a) > computedVal(b) ? options.fn() : options.inverse();
    },
    isStarred: function (a, b, options) {
        return computedVal(a) + 200 > computedVal(b) ? options.fn() : options.inverse();
    },
    getLvlWidth: function (myPoints, points) {
        myPoints = computedVal(myPoints) || 0;
        var diff = 200 - (+(points()) - (+myPoints));
        return (diff > 0 && diff < 200) ? 'width: ' + (diff / 200 * 100) + '%;' : '';
    },
    minus: function (a, b) {
        return (computedVal(a) - computedVal(b)).toString();
    },
    myPoints: function (points) {
        points = points();
        var myPoints = points ? points.toString() : '0',
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
        return moment( computedVal(time) ).format('HH:mm');
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
    },
    showPrizes: function (allPrizes, points, lvl) {
        points = +computedVal(points);
        var result = 'display: none;',
            lvlPoints = +computedVal(lvl).points;
        if (computedVal(allPrizes)) {
            return 'display: block;';
        }
        if (points + 400 >= lvlPoints && points <= lvlPoints) {
            result = 'display: block;'
        }
        return result;
    },
    lvlLabel: function (points, lvl) {
        points = +computedVal(points);
        var lvlPoints = +computedVal(lvl).points;
        if (points + 200 >= lvlPoints && points <= lvlPoints) {
            return 'Ваш уровень';
        }
        if (points + 400 >= lvlPoints && points <= lvlPoints) {
            return 'Ваш следующий уровень';
        }
        return 'Уровень';
    },
    raffleLable: function (points, lvl) {
        points = +computedVal(points);
        var result = '',
            lvlPoints = +computedVal(lvl).points;
        if (points + 200 >= lvlPoints && points <= lvlPoints) {
            result = 'Вы участвуете в розыгрыше для ';
        } else {
            result = 'Розыгрыш для ';
        }
        switch (computedVal(lvl).label) {
            case 'Новичок':
                result += 'новичков';
                break;
            case 'Ученик':
                result += 'учеников';
                break;
            case 'Знаток':
                result += 'знатоков';
                break;
            case 'Эксперт':
                result += 'экспертов';
                break;
            case 'Профи':
                result += 'профи';
                break;
        }
        return result;
    }
}
