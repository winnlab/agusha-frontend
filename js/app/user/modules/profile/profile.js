import Controller from 'controller';
import appState from 'core/appState';
import tooltip from 'tooltipster';
import _ from 'lodash';
import view from 'js/app/user/modules/profile/views/index.mustache!';
import childPopUp from 'lib/childPopUp/';

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
            this.user = this.data.options.user;


            if(!this.data.auth.isAuth) {
                can.route.attr({module: 'login'});
                return;
            }

            this.options.model = new Profile( this.data.options.user );

            this.bindTpl();
            this.bindImages();

            $('.tooltip').tooltipster({
                position: 'right',
                theme: 'tooltipster-agusha',
                trigger: 'click'
            });
        },
        createChildPopUp: function(child) {
            var elem = $('<span class="childPopupWrap"></span>');
            this.childPopupElement = $('body').append(elem);

            this.childPopUp = new childPopUp(elem, {
                child: child
            });

            this.child = this.childPopUp.module.child;
            this.bindChild();
        },
        '.social_buttons .vk click': function() {
            window.location.href = '/registration/vk';
        },
        '.social_buttons .fb click': function() {
            window.location.href = '/registration/fb';
        },
        '.addChild click': function() {
            this.createChildPopUp();
            this.childPopUp.show({});
        },
        '.childPic click': function(el, ev) {
            var child = el.data('children');

            this.createChildPopUp(child);

            this.childPopUp.show({});
        },
        'change': function(el, ev) {
            ev.preventDefault();

            this.saveModel();
        },
        '.buttons .remove.button click': function() {
            this.user.removeImage();
        },
        '.switcher click': function(el, e) {
            var id = $(e.target).data('passid');

            $(e.target).toggleClass('active');

            $('input[data-passid='+id+']').prop('type', function(idx, oldProp) {
                if(oldProp == 'password')
                    return 'text'

                return 'password'
            });
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
        updateUser: function() {
            this.saveModel();
        },
        saveChild: function(ev, newVal, oldVal, prop) {
            var that = this,
                user = this.data.options.user,
                child;

            if(!this.childPopUp.module.attr) {
                return false;
            }

            child = this.childPopUp.module.attr('child');

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
            this.childPopUp
                .module
                .child.delegate(
                    'isSaved',
                    'set',
                    can.proxy(this.saveChild, this)
                );
        },
        bindTpl: function() {
            var html, that = this;

            $('#profile').html(can.view(view, this.data.options.user, {
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
        },
        bindImages: function () {
            var that = this;

            this.user.delegate('image', 'set', function() {
                that.saveModel();
            });
        }
    }
);