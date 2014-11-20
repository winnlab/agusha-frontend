import can from 'can/';
import Viewport from 'lib/viewport/';
import PopUp from 'lib/popUp/';
import childPopUp from 'lib/childPopUp/';
import cropperPopUp from 'lib/cropperPopUp/';
import User from 'lib/user/';

var AppState = can.Map.extend({
    viewport: new Viewport('body'),
    popUp: new PopUp('body'),
    childPopUp: new childPopUp('body'),
    imageCropper: cropperPopUp,
    user: new User('body'),
    agushaUser: {
        image: 'agushaAvatar.png',
        first_name: 'Агуша',
        last_name: ''
    }
});

export default new AppState();
