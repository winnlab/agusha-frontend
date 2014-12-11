import can from 'can/';
import PopUp from 'lib/popUp/';
import view from 'js/app/user/lib/childPopUp/views/index.mustache!';
import appState from 'core/appState';
import childMap from 'lib/user/children';
import _ from 'lodash';
import 'js/plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css!';
import 'js/plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';

function getMonths() {
    return [ "Янв", "Фев", "Март", "Апр", "Май", "Июнь",
        "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек" ];
}

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];

    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
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
                days: getDaysInMonth(0, 2007),
                years: startYear(2007)
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

        $(".customSelectList", this.element).mCustomScrollbar({
            theme: "dark-thick",
            axis: 'y',
            height: 300,
            scrollInertia: 400,
            scrollButtons: {
                enable: false,
                scrollAmount: 200,
                scrollType: 'stepless'
            },
            advanced:{
                updateOnContentResize: true
            }
        });
    },
    '.childBirthDate select change': function(el, ev) {
         var clss = $(el).attr('class'),
            selectedValue = Number($(el, 'option:selected').val()),
            defYear = $('.childBrithMonth option:selected').val() || 2000,
            defMonth = $('.childBrithYear option:selected').val() || 0;

        if(clss == 'childBrithMonth') {
            this.module.attr('dates.days', getDaysInMonth(selectedValue, defYear));
        }

        if(clss == 'childBrithYear') {
            this.module.attr('dates.days', getDaysInMonth(defMonth, selectedValue));
        }
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
    },

    '.customSelect .content click': function (el, ev) {
        var $list = el.parents('.customSelect').find('.customSelectList');

        if ($list.hasClass('active')) {
            $list.removeClass('active');
        } else {
            $list.addClass('active');
        }
    },

    '.customSelectListItem click': function (el, ev) {
        console.log('child select');

        var selectValue = el.data('value');
        var selectHtml = el.html();
        var $customSelect = el.parents('.customSelect');
        var $content = $customSelect.find('.content .value');
        var $list = $customSelect.find('.customSelectList');
        var targetClass = $customSelect.data('target');

        var $targetSelect = $customSelect.parent().find('select.'+targetClass);

        if ($customSelect.hasClass('customDay')) {
            this.child.attr('birth.day', selectValue);
        } else if ($customSelect.hasClass('customMonth')) {
            this.child.attr('birth.month', selectValue);
        } else if ($customSelect.hasClass('customYear')) {
            this.child.attr('birth.year', selectValue);
        }

        console.log(this.child);

        $list.removeClass('active');
        $content.html(selectHtml);
        $targetSelect.find('option:selected').attr('selected', false);
        $targetSelect.find('option[value="'+selectValue+'"]').attr('selected', 'selected');
    }
});
