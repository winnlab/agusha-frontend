import can from 'can/';
import PopUp from 'lib/popUp/';
import view from 'js/app/user/lib/childPopUp/views/index.mustache!';

var childMap;

childMap = can.Map.extend({});

export default PopUp.extend({
	init: function () {
		var that = this;

		this.child = new childMap({
            birth_date: {
                value: {}
            }
        });

		this.module = new can.Map({
            'close': true,
            'visible': null,
            'text': '',
            'child': this.child,
            'classes': 'addChildPopUp',
        });

        this.element.append(can.view(view, this.module));
	},
    '.button.ok click': function() {
        console.log(this.child);
    },
	show: function (options) {
		var that = this;

        this.def = options.def;

        this.module.attr({
            visible: true,
            text: '<h1>Hello world</h1>',
            title: '<h1>О вашем малыше</h1>',
            child: this.child,
            cb: options.cb
        });
	}
});
