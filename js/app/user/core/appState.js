import can from 'can/';
import Viewport from 'lib/viewport/';
import PopUp from 'lib/popUp/';
import childPopUp from 'lib/childPopUp/';
import User from 'lib/user/';

var AppState = can.Map.extend({
    viewport: new Viewport('body'),
    popUp: new PopUp('body'),
    childPopUp: new childPopUp('body'),
    user: new User('body')
});

export default new AppState();
