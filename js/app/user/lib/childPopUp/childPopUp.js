import can from 'can/';
import PopUp from 'lib/popUp/';
import view from 'js/app/user/lib/childPopUp/views/index.mustache!';
import appState from 'core/appState';
import childMap from 'lib/user/children';
import _ from 'lodash';

function getMonths() {
    return [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];
}

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];

    console.log('date', date.getMonth());
    console.log(date.getMonth() === month);

    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }

    console.log('days', days);

    if(month == 2) {
        if(days[length-1] == 28) {
            days.push(29);
        }
    }

    return days;
}

function startYear (startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1980;

        while ( startYear <= currentYear ) {
                years.push(startYear++);
        } 

        return years;
}

export default PopUp.extend({
	init: function (el, options) {
		var that = this;

		this.child = options.child || new childMap({
            isSaved: false,
            birth: {
                value: {
                    month: null,
                    day: null,
                    year: null  
                }
            }
        });

		this.module = new can.Map({
            'close': true,
            'visible': null,
            'text': '',
            'child': this.child,
            'classes': 'addChildPopUp',
            dates: {
                months: getMonths(),
                days: getDaysInMonth(1, 2001),
                years: startYear(200)
            }
        });

        this.element.append(can.view(view, this.module, {
            genderChecked: function(sex) {
                var child = that.child, gender;

                if(!(gender = child.gender)) {
                    return '';
                }

                if(gender == 1 && sex == 'female') {
                    return 'checked';
                }

                if(gender == 2 && sex == 'male') {
                    return 'checked';
                }

                return '';
            }
        }));
	},
    '.addChildPopUp .button.ok click': function() {
        this.child.attr('isSaved', true);
        this.closePopup();
    },
    '.addChildPopUp .button.remove click': function() {
        this.child.removeImages();
    },
    '.ok click': function() {

    },
	show: function (options) {
		var that = this;

        this.module.attr({
            visible: true,
            title: '<h1>О вашем малыше</h1>',
            cb: options.cb
        });
	},
    closePopup: function() {
        this.module.attr({
            'visible': false
        });

        this.element.remove();
    }
});
