import Controller from 'controller';
import appState from 'core/appState';
// import import Cropper from 'lib/cropper/';
// import Remodal from 'js/plugins/Remodal/dist/jquery.remodal.min';


export default Controller.extend(
	{
        defaults: {
			// user: appState.attr('user.user')
        }
    }, {
		after_init: function(data) {
            // System.import('js/plugins/Remodal/dist/jquery.remodal.css!').then(can.proxy(this.request, this));
            appState.attr('cropper').show({});

			return true;
        }
    }
);