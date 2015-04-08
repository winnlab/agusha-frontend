'use strict';

import can from 'can/';
import Viewport from 'lib/viewport/';
import PopUp from 'lib/popUp/';
import cropperPopUp from 'lib/cropperPopUp/';
import User from 'lib/user/';
import Counter from 'lib/counter/';
import moment from 'moment';

var AppState = can.Map.extend({
	moneybox: false,
	subsChanged: false,
	viewport: new Viewport('body'),
	popUp: new PopUp('body'),
	imageCropper: cropperPopUp,
	user: new User('body'),
	counter: Counter,
	agushaUser: {
		image: 'agushaAvatar.png',
		first_name: 'Агуша',
		last_name: ''
	},
	unreadConversationsAmount: 0
});

export default new AppState();