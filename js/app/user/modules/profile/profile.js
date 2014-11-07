import Controller from 'controller';
import appState from 'core/appState';
// import import Cropper from 'lib/cropper/';
// import Remodal from 'js/plugins/Remodal/dist/jquery.remodal.min';

// var viewModel = new can.Map appState.attr('user')

export default Controller.extend(
	{
        defaults: {
        }
    }, {
		after_init: function(data) {
            // appState.attr('cropper').show({});

            this.data = appState.attr('user');

            this.bindTpl();
        },
        bindTpl: function() {
            var html, that = this;

            html = jadeTemplate.get('user/profile/content_mustache');

            can.view.mustache('prfl', html);

            $('#profile').html(can.view('prfl', this.data, {
                genderChecked: function(sex) {
                    var data = that.data, gender;

                    console.log('gender', data.user);

                    if(!(gender = data.user.profile.gender)) {
                        return '';
                    }

                    if(gender == 1 && sex == 'female') {
                        return 'checked';
                    }

                    if(gender == 2 && sex == 'male') {
                        return 'checked';
                    }

                    return '';
                }
            }));
        }
    }
);