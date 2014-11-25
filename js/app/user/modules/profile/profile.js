import Controller from 'controller';
import appState from 'core/appState';
import tooltip from 'tooltipster';
import _ from 'lodash';
import childPopUp from 'lib/childPopUp/';
import view from 'js/app/user/modules/profile/views/index.mustache!';
import inputMask from 'js/plugins/jquery.inputmask/dist/jquery.inputmask.bundle.min';
import select2 from 'select2';
import s2Options from 'js/app/user/modules/profile/select2Options';
import s3Options from 'js/app/user/modules/profile/select3Options';

System.import('./js/plugins/select2/select2.css!');

import Profile from 'js/app/user/modules/profile/profileModel';

can.mustache.registerHelper('tooltip', function(errors, property, position, options) {
    var errors = options.context.user.attr('errors');

    return function(el) {
        // errors.bind('change', function() {
        //     console.log('change', arguments);
        //     console.log('error', errors);
        // });

        // errors.delegate('*', 'set', function(ev, newVal, oldVal, prop) {
        //     console.log('remove', arguments);
        //     if(prop != property) {
        //         return;
        //     }

        //     if(!errors.attr(property)) {
        //         return;
        //     }

        //     $(el).tooltipster('destroy');
        // });

        errors.delegate('*', 'set', function(ev, newVal, oldVal, prop) {
            if(newVal == null) {
                $(el).tooltipster('destroy');
                return;
            }

            if(prop != property) {
                return;
            }

            var errProp;

            if(!errors.attr(property)) {
                return;
            }

            errProp = errors.attr(property);

            $(el).tooltipster({
                content: errProp,
                position: position || 'right',
                theme: 'tooltipster-error'
            });

            $(el).tooltipster('show');
        });
    };
});

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
            System.import('./js/plugins/tooltipster/css/themes/tooltipster-error.css!');

            System.import('./css/user/profile/select2Profile.css!');

            this.data = appState.attr('user');
            this.user = this.data.options.user;
            this.errs = new can.Map();


            if(!this.data.auth.isAuth) {
                can.route.attr({module: 'login'});
                return;
            }

            this.options.model = new Profile( this.data.options.user );

            this.bindTpl();
            this.bindImages();

            $('.tooltip.agushaTooltip').tooltipster({
                position: 'right',
                theme: 'tooltipster-agusha',
                trigger: 'hover'
            });

            $('#country').select2(s3Options);
            $('#city').select2(s2Options);
            $('#city').select2('val', this.user.attr('contacts.city'));
            
            $('.phoneInput').inputmask("+3 8(999) 999 - 99 - 99");
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
        saveModel: function (callback) {
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
            var html, that = this, viewModel;

            viewModel = new can.Map({
                user: this.data.options.user, 
                errs: this.errs
            });

            $('#profile').html(can.view(view, viewModel, {
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