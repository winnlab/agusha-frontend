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
    counter: new Counter('body'),
    agushaUser: {
        image: 'agushaAvatar.png',
        first_name: 'Агуша',
        last_name: ''
    },
    unreadConversationsAmount: 0
});

var appState = new AppState();

var fn60sec = function() {
	var	currentDate = moment(),
		endDate = moment('20.05.2015', 'DD.MM.YYYY'),
		diff = endDate.diff(currentDate);
	
	appState.attr('counter').attr('diff', diff);
}
fn60sec();
setInterval(fn60sec, 60 * 1000);

export default appState;