import can from 'can/';
import PopUp from 'lib/popUp/';
import view from 'js/app/user/lib/childPopUp/views/index.mustache!';
import appState from 'core/appState';
import childMap from 'lib/user/children'

export default PopUp.extend({
	init: function (el, options) {
		var that = this;

		this.child = options.child || new childMap({
            isSaved: false,
            birth: {
                value: {
                    
                }
            }
        });

		this.module = new can.Map({
            'close': true,
            'visible': null,
            'text': '',
            'child': this.child,
            'classes': 'addChildPopUp',
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
