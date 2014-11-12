import Controller from 'controller';
import appState from 'core/appState';
// import childPopUp from 'lib/childPopUp/';

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
            this.child =  appState.attr('childPopUp.child')

            if(!this.data.isAuth()) {
                can.route.attr({module: 'login'});
                return;
            }

            this.options.model = new Profile( this.data.options.user );

            this.bindTpl();
            this.bindChild();
        },
        '.social_buttons .vk click': function() {
            window.location.href = '/registration/vk'
        },
        '.social_buttons .fb click': function() {
            window.location.href = '/registration/fb'
        },
        'change': function(el, ev) {
            ev.preventDefault();

            this.saveModel();
        },
        saveModel: function () {
            var user = this.data.options.user;

            this.options.model._data = user.attr();

            this.options.model.save().fail(function() {
                console.log(arguments);
            });
        },
        '.addChild click': function() {
            appState.attr('childPopUp').show({})
        },
        bindChild: function() {
            var that = this;

            appState.attr('childPopUp').child.bind('change', function(ev, attr, how, newVal, oldVal) {
                var child;

                if(ev.type != 'change' || attr != 'isSaved') {
                    return false;
                }

                if(this.attr(attr) == false) {
                    return false;
                }

                child = this.attr();


                that.data.options.user.attr('children').push(child);
                this.attr({isSaved: false}, {});

                that.saveModel();
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

            $('input.deletable').wrap('<span class="deleteicon" />').after($('<span/>').click(function() {
                $(this).prev('input').val('').focus();
            }));
        }
    }
);