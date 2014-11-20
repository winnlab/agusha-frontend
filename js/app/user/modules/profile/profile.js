import Controller from 'controller';
import appState from 'core/appState';
import tooltip from 'tooltipster';
import _ from 'lodash';

import Profile from 'js/app/user/modules/profile/profileModel';


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
            System.import('./js/plugins/tooltipster/css/tooltipster.css!');
            System.import('./js/plugins/tooltipster/css/themes/tooltipster-agusha.css!');

            this.data = appState.attr('user');
            this.child =  appState.attr('childPopUp.child');
            this.user = this.data.options.user;

            if(!this.data.auth.isAuth) {
                can.route.attr({module: 'login'});
                return;
            }

            this.options.model = new Profile( this.data.options.user );

            this.bindTpl();
            this.bindChild();

            $('.tooltip').tooltipster({
                position: 'right',
                theme: 'tooltipster-agusha'
            });

        },
        '.social_buttons .vk click': function() {
            window.location.href = '/registration/vk';
        },
        '.social_buttons .fb click': function() {
            window.location.href = '/registration/fb';
        },
        '.addChild click': function() {
            appState.attr('childPopUp').show({});
        },
        '.childPic click': function(el, ev) {
            var child = el.data('children');

            appState.attr('childPopUp').show({child: child});
        },
        'change': function(el, ev) {
            ev.preventDefault();

            this.saveModel();
        },
        saveModel: function () {
            var user = this.data.options.user;

            this.options.model._data = user.attr();

            this.options.model.save().fail(function() {
                if(callback) {
                    callback(user);
                }
            });
        },
        updateUser: function(child) {
            this.saveModel();
        },
        saveChild: function(ev, newVal, oldVal, prop) {
            var that = this,
                user = this.data.options.user,
                child;

            if(!appState.attr('childPopUp').module.attr) {
                return false;
            }

            child = appState.attr('childPopUp').module.attr('child');

            if(!child.attr) {
                return false;
            }

            if(child.attr('_id')) {
                return this.updateUser(child);
            }

            user.attr('children').push(child);

            this.saveModel(function() {
                child.attr({isSaved: false});
            });
        },
        bindChild: function() {
            var that = this;
            appState
                .attr('childPopUp')
                .child.delegate(
                    'isSaved',
                    'set',
                    can.proxy(this.saveChild, this)
                );
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

            $('input.deletable').wrap('<span class="deleteicon" />').after($('<span/>').click(function() {
                $(this).prev('input').val('').focus();
            }));
        }
    }
);