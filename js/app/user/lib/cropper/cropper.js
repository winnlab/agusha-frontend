import can from 'can/';
import PopUp from 'lib/popUp/';
import view from 'js/app/user/lib/cropper/views/index.mustache!'

export default PopUp.extend({
	init: function () {
		this.module = new can.Map({
            'close': true,
            'visible': null,
            'text': null
        });

        this.element.append(can.view(view, this.module));
	}
});
