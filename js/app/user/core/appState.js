import can from 'can/';
import Viewport from 'lib/viewport/';
import PopUp from 'lib/popUp/';

var AppState = can.Map.extend({
    viewport: new Viewport('body'),
    popUp: new PopUp('body')
});

export default new AppState();
