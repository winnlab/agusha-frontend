import can from 'can/';
import Viewport from 'lib/viewport/';
import PopUp from 'lib/popUp/';
import Cropper from 'lib/cropper/';
import User from 'lib/user/';

var AppState = can.Map.extend({
    viewport: new Viewport('body'),
    popUp: new PopUp('body'),
    cropper: new Cropper('body'),
    user: new User()
});

export default new AppState();
