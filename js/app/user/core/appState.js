import can from 'can/';
import Viewport from 'lib/viewport/';

var AppState = can.Map.extend({
    viewport: new Viewport('body')
});

export default new AppState();
