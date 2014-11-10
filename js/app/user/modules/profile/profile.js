import Controller from 'controller';
import appState from 'core/appState';
// import import Cropper from 'lib/cropper/';

import Profile from 'js/app/user/modules/profile/profileModel'

export default Controller.extend(
	{
        defaults: {
            Model: Profile,
            input: '.editableInput',
            user: appState.attr('user'),
            css_path: 'css/user/'
        }
    }, {
		after_init: function(data) {
            this.data = appState.attr('user');

            if(!this.data.isAuth()) {
                can.route.attr({module: 'login'});
                return;
            }

            this.options.model = new Profile( this.data.options.user );

            this.bindTpl();
        },
        'change': function(el, ev) {
            var user = this.data.options.user;
            ev.preventDefault();

            this.options.model._data = user.attr();

            this.options.model.save().fail(function() {
                console.log(arguments);
            });
        },
        bindTpl: function() {
            var html, that = this;

            html = jadeTemplate.get('user/profile/content_mustache');

            can.view.mustache('prfl', html);

            $('#profile').html(can.view('prfl', this.data.options.user, {
                genderChecked: function(sex) {
                    var user = that.data.user(), gender;

                    if(!(gender = user.profile.gender)) {
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