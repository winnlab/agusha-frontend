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
import moment from 'moment';
import friendsView from 'js/app/user/modules/profile/views/friends.mustache!';
import 'vk-openapi'
import 'js/plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css!';
import 'js/plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';

import 'js/plugins/select2/select2.css!'

import 'js/plugins/social/vk/vk_sdk';

import Profile from 'js/app/user/modules/profile/profileModel';
import PopUp from 'js/app/user/lib/popUp/popUp';

var invMessages = {
    vk: 'Привет, хало, слалют.'
};

var levels = [
    {
        name: 'novice',
        label: 'Новичок',
        points: 200
    },
    {
        name: 'disciple',
        label: 'Ученик',
        points: 400
    },
    {
        name: 'adept',
        label: 'Знаток',
        points: 600
    },
    {
        name: 'expert',
        label: 'Эксперт',
        points: 800
    },
    {
        name: 'pro',
        label: 'Профи',
        points: 1000
    }];

can.mustache.registerHelper('tooltip', function(errors, property, position, options) {
    var errors = options.context.user.attr('errors');

    return function(el) {


        errors.delegate('**', 'set', function(ev, newVal, oldVal, prop) {

            if(prop != property) {
                return;
            }

            if(newVal == null) {
                $(el).tooltipster('destroy');
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

can.mustache.registerHelper('userLevelNum', function(points, options) {
    var diff, level;

    points = typeof points === 'function' ? points() : points;

    for(var i in levels) {
        if(points > levels[i].points) {
            level = Number(i)+1;
        }
    }

    if(level == undefined) {
        level = 0;
    }

    return level+1;
});

can.mustache.registerHelper('userLevelText', function(points) {
    var diff, level;

    points = typeof points === 'function' ? points() : points;

    for(var i in levels) {
        if(points > levels[i].points) {
            level = levels[i].label;
        }
    }

    if(level == undefined) {
        level = levels[0].label;
    }

    return level;
});

can.mustache.registerHelper('isFilledStart', function(level, points, options) {
    var l;

    points = typeof points === 'function' ? points() : points;

    for(var i in levels) {
        if(points > levels[i].points) {
            l = levels[i];
        }
    }

    if(l == undefined) {
        l = levels[0];
    }

    if(l.points >= level.points) {
        return 'filled';
    }
});

can.mustache.registerHelper('isFilled', function(level, points, options) {
    var l;

    points = typeof points === 'function' ? points() : points;

    for(var i in levels) {
        if(points > levels[i].points) {
            l = levels[i];
        }
    }

    if(l == undefined) {
        return '';
    }

    if(l.points >= level.points) {
        return 'filled';
    }
});

can.mustache.registerHelper('diff', function(index, points, options) {
    var l, relItemVal, itemPoints;

    index = typeof index === 'function' ? index() : index;
    points = typeof points === 'function' ? points() : points;

    for(var i in levels) {
        if(points > levels[i].points) {
            l = levels[i];
        }
    }

    if(l == undefined) {
        l = levels[0];
    }

    relItemVal = l.points/7;
    itemPoints = points-(relItemVal*index);

    if(itemPoints < 0) {
        return 0;
    }

    return itemPoints/relItemVal*100;
});

can.mustache.registerHelper('leftNext', function(points) {
    var diff, level, left;

    points = typeof points === 'function' ? points() : points;

    for(var i in levels) {
        if(points > levels[i].points) {
            level = Number(i)+1;
        }
    }

    if(level == undefined) {
        level = 0;
    }

    left = levels[level].points - points;

    return "До "+(level+1)+"го осталось "+left+" баллов";
});

can.mustache.registerHelper('isChekedAgree', function(agree) {
    if(agree()) {
        return 'checked';
    }

    return ''
});

can.mustache.registerHelper('levelPrefix', function(points) {
    var lavel;

    points = typeof points === 'function' ? points() : points;

    lavel = _.filter(levels, function(item, i, list) {
        var ps = item.points, next = list[i+1], prev = list[i-1];

        if(points > ps && !next && prev) {
            return true;
        }

        if(points > ps && !prev && next && points < next.points) {
            return true;
        }

        if(points < ps && prev && prev.points && points > prev.points) {
            return true;
        }
    }).pop();

    if(lavel == undefined) {
        lavel = levels[0];
    }

    return lavel.name;
});


function getMonths() {
    return [ "Янв", "Фев", "Март", "Апр", "Май", "Июнь",
    "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек" ];
}

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];

    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }

    return days;
}

function startYear (startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1980;

        while ( startYear <= currentYear ) {
                years.push(startYear++);
        } 

        return years;
}

export default Controller.extend(
	{
        defaults: {
            Model: Profile,
            input: '.editableInput',
            user: appState.attr('user'),
            css_path: 'css/user/',
            facebookPermissions: '',
            vkLoginPermissions: ''
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
            this.dates = new can.Map({
                months: getMonths(),
                days: getDaysInMonth(0, 1950),
                years: startYear(1950)
            });
            this.countries = ['Украина', 'Россия', 'Беларусь', 'Германия', 'Израиль', 'Канада', 'Чехия', 'Польша', 'Казахстан', 'Другая страна'];

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

            //$('#country').select2(s3Options);
            $('#city').select2(s2Options);
            $('#city').select2('val', this.user.attr('contacts.city'));
            
            $('.phoneInput').inputmask("+3 8(999) 999 - 99 - 99");

            this.initCustomScrollbar();
            this.initSetPasswordTooltipster();
            this.initSpareEmailTooltipster();
            //this.initSocial();
        },

        initSocial: function () {

            FB.init({
                appId: 319137821610071,
                cookie: true,
                xfbml: true,
                version: 'v2.1'
            });
/*
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });*/
        },

        initSetPasswordTooltipster: function () {
            $('.newPasswordTooltip').tooltipster({
                position: 'right',
                theme: 'tooltipster-error',
                trigger: 'hover'
            });
        },

        initSpareEmailTooltipster: function () {
            $('.spareEmail').tooltipster({
                position: 'right',
                theme: 'tooltipster-error',
                trigger: 'hover'
            });
        },

        initCustomScrollbar: function () {
            var self = this;

            $(".customSelectList", self.element).mCustomScrollbar({
                theme: "dark-thick",
                axis: 'y',
                height: 300,
                scrollInertia: 400,
                scrollButtons: {
                    enable: false,
                    scrollAmount: 200,
                    scrollType: 'stepless'
                },
                advanced:{
                    updateOnContentResize: true
                }
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
            var self = this;

            VK.Auth.login(function(response) {
                self.vkLoginResponse(response);

            }, self.options.vkLoginPermissions);
        },

        vkLoginResponse: function (response, cb) {
            var self = this;

            if (response.session) {

                can.ajax({
                    url: '/login/linkVk',
                    type: 'POST',
                    data: {
                        response: response
                    }
                }).done(function (data) {
                    $('.button.vk').addClass('active');
                }).fail(function (data) {
                    console.error(data);
                });

            } else {
                alert('not auth');
            }
        },

        '.social_buttons .fb click': function() {
            window.location.href = '/registration/fb';

/*            var self = this;

            FB.login(function(response){
                console.log(response);
                self.fbLoginResponse(response);
            });*/
        },

        fbLoginResponse: function (response) {
            var self = this;

            if (response.status === 'connected') {

                FB.api('/me', function(userResponse) {

                    response.user = userResponse;

                    console.log(userResponse);

/*                    can.ajax({
                        url: '/user/facebook',
                        type: 'POST',
                        data: {
                            response: response
                        }
                    }).done(function (data) {
                        self.loginSuccess(data, cb);
                    }).fail(function (data) {
                        console.error(data);
                    });*/
                });

            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
            } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
            }
        },

        '.social_buttons .ok click': function () {
            window.location.href = '/registration/ok';
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

        '.user_birth_date select change': function(el, ev) {
            var clss = $(el).attr('class'),
                selectedValue = Number($(el, 'option:selected').val()),
                defYear = $('.user_birth_date option:selected').val() || 2000,
                defMonth = $('.user_birth_month option:selected').val() || 0;

            if(clss == 'birth_month') {
                this.dates.attr('days', getDaysInMonth(selectedValue, defYear));
            }

            if(clss == 'birth_year') {
                this.dates.attr('days', getDaysInMonth(defMonth, selectedValue));
            }
        },
        '.switcher click': function(el, e) {
            var id = $(e.target).data('passid');

            $(e.target).toggleClass('active');

            $('input[data-passid='+id+']').prop('type', function(idx, oldProp) {
                if(oldProp == 'password')
                    return 'text';

                return 'password'
            });
        },
        saveModel: function (callback) {
            var user = this.data.options.user;

            this.options.model._data = user.attr();

            this.options.model.save()
                .done(function(){
                    console.log('done saveModel');
                    appState.attr('moneybox', true);
                })
                .fail(function() {
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
                errs: this.errs,
                levels: levels,
                levelKeys: [1,2,3,4,5,6,7],
                dates: this.dates,
                countries: this.countries,
                months: getMonths()
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
                },
                getUserMonth: function (month) {
                    return getMonths()[month()];
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
        },
        /* VK friends invitation */
        '.profileInvite.vk click': function () {
            VK.Auth.login(_.bind(this.handleAuthVK, this), 8198);
        },
        handleAuthVK: function (response) {
            if (response.session) {
                return this.checkAuthVK(response.session);
            }
        },
        checkAuthVK: function (session) {
            can.ajax({
                url: '/profile/checkAuth',
                method: 'GET',
                data: {
                    expire: session.expire,
                    mid: session.mid,
                    sid: session.sid,
                    sig: session.sig,
                    secret: session.secret
                }
            }).done(_.bind(this.getFriendsVK, this));
        },
        getFriendsVK: function (response) {
            if (response) {
                VK.Api.call('friends.get', {
                    fields: 'uid,first_name,last_name,photo',
                    order: 'hints'
                }, _.bind(this.showFriendsVK, this));
            }
        },
        showFriendsVK: function (response) {
            var friends = response.response;

            if (friends instanceof Array && friends.length) {
                this.createFriendsPopup(friends, 'VKONTAKTE');
            }
        },
        createFriendsPopup: function (friends, network) {
            var self = this,
                renderer = can.view(friendsView, {
                    friends,
                    socialNetwork: network
                }, {
                    sendMessage: function () {
                        return function (el) {
                            $(el).on('click', function () {
                                var btn = $(this);

                                self.sendMessageVK(btn.data('id'), btn);
                            });
                        }
                    },
                    close: function () {
                        return function (el) {
                            $(el).on('click', function () {
                                $(this).closest('.pf-wrap').remove();
                            });
                        };
                    }
                });

            $('body').append(renderer);
        },
        sendMessageVK: function (uid, btn) {
            var self = this;

            can.ajax({
                url: '/profile/invitedVK',
                method: 'GET',
                data: {
                    uid
                }
            }).done(function (response) {
                if (typeof response === 'string') {
                    return appState.attr('popUp').show({
                        title: 'Ошибка!',
                        text: _.isString(response) ? response : 'Произошла неизвестная ошибка.'
                    });
                }

                if (response === true) {
                    if (!confirm('Этому пользователю уже было выслано приглашение, выслать все равно?')) {
                        return self.checkSocialButton(btn);
                    }
                }

                VK.Api.call('photos.getWallUploadServer', {}, _.bind(self.uploadImageToWallVK, self, uid, btn));
            }).fail(function (response) {
                appState.attr('popUp').show({
                    title: 'Ошибка!',
                    text: _.isString(response) ? response : 'Произошла неизвестная ошибка.'
                });
            });
        },
        uploadImageToWallVK: function (uid, btn, response) {
            can.ajax({
                url: '/profile/uploadVK',
                type: 'POST',
                data: {
                    uploadUrl: response.response.upload_url
                },
                success: _.bind(this.savePhotoToWallVK, this, uid, btn)
            });
        },
        savePhotoToWallVK: function (uid, btn, data) {
            data = JSON.parse(data);

            VK.Api.call('photos.saveWallPhoto', {
                server: data.server,
                photo: data.photo,
                hash: data.hash
            }, _.bind(this.sendFriendsMessageVK, this, uid, btn));
        },
        sendFriendsMessageVK: function (uid, btn, response) {
            var images = response.response,
                self = this;

            VK.Api.call('wall.post', {
                owner_id: uid,
                message: invMessages.vk,
                attachments: images && images[0] && images[0].id || ''
            }, function (response) {
                if (response) {
                    can.ajax({
                        url: '/profile/invitedVK',
                        method: 'POST',
                        data: {
                            uid
                        }
                    });

                    return self.checkSocialButton(btn);
                }

                appState.attr('moneybox', true);

                appState.attr('popUp').show({
                    title: 'Ошибка!',
                    text: 'Произошла ошибка при отправке сообщения, пожалуйста, попробуйте позже.'
                });
            })
        },

        checkSocialButton: function (btn) {
            btn
                .addClass('sended')
                .prop('disabled', true)
                .html('ОТПРАВЛЕНО')
                .off('click');
        },

        /* FB friends invitation */
        '.profileInvite.fb click': function () {
            FB.ui({
                method: 'send',
                link: window.location.origin
            });
        },
        /* end of FB friends invitation */

        '.newPasswordValidate keyup': function (el, ev) {
            this.newPasswordValidate(el);
        },

        newPasswordValidate: function (el) {
            var self = this;

            var $newPassword1 = $('.newPassword1', self.element).val();
            var $newPassword2 = $('.newPassword2', self.element).val();

            if ($newPassword1 != $newPassword2) {
                $('.newPasswordTooltip').tooltipster('content', 'Пароли не совпадают');
                $('.newPasswordTooltip').tooltipster('show', function() {  });
            } else {
                $('.newPasswordTooltip').tooltipster('hide', function() {  });
            }
        },

        '.customSelect .content click': function (el, ev) {
            ev.stopPropagation();

            var $list = el.parents('.customSelect').find('.customSelectList');

            if ($list.hasClass('active')) {
                $list.removeClass('active');
            } else {
                $list.addClass('active');
            }
        },

        '.customSelectListItem click': function (el, ev) {
            var selectValue = el.data('value');
            var selectHtml = el.html();
            var $customSelect = el.parents('.customSelect');
            var $customInput = el.parents('.customInput');
            var $content = $customSelect.find('.content .value');
            var $list = $customSelect.find('.customSelectList');
            var targetClass = $customSelect.data('target');

            var $targetSelect = $customSelect.parent().find('select.'+targetClass);

            if ($customSelect.hasClass('customDay')) {
                this.user.attr('birth_date.day', selectValue);
            } else if ($customSelect.hasClass('customMonth')) {
                this.user.attr('birth_date.month', selectValue);
            } else if ($customSelect.hasClass('customYear')) {
                this.user.attr('birth_date.year', selectValue);
            }

            $list.removeClass('active');
            $content.html(selectHtml);
            if ($customInput.length > 0) {
                var $targetInput = $customSelect.parent().find('input.'+targetClass);
                $targetInput.val(selectValue);
                $targetInput.trigger('change');
            } else {
                $targetSelect.find('option:selected').attr('selected', false);
                $targetSelect.find('option[value="'+selectValue+'"]').attr('selected', 'selected');

                this.saveModel();
            }
        },

        '.changePassword submit': function (el, ev) {
            ev.preventDefault();

            var form = can.deparam(el.serialize());

            if (form.oldPassword.length == 0 || form.newPassword.length == 0) {
                PopUp.showPopup({
                    title: 'Ошибка!',
                    content: 'Пожалуйста, заполните все поля'
                });
                return false;
            }
            if (form.newPassword != form.newPasswordCopy) {
                PopUp.showPopup({
                    title: 'Ошибка!',
                    content: 'Пароли не совпадают'
                });
                return false;
            }

            can.ajax({
                url: '/profile/changePassword',
                method: 'POST',
                data: form
            }).done(function (response) {
                PopUp.showPopup({
                    title: '',
                    content: 'Ваш пароль изменен'
                });
            }).fail(function (response) {
                PopUp.showPopup({
                    title: 'Ошибка!',
                    content: 'При изменении пароля произошла ошибка'
                });
            });
        },

        '.saveProfileData click': function (el, ev) {
            PopUp.showPopup({
                title: '',
                content: 'Ваши данные успешно сохранены'
            });
        },

        'click': function (el, ev) {
            var $list = $('.customSelectList');
            if ($list.hasClass('active')) {
                $list.removeClass('active');
            }
        },

        '.spareEmail keyup': function (el, ev) {
            var value = el.val();

            if (value) {
                var regexp;
                regexp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

                if(value.match(regexp)) {
                    el.tooltipster('hide', function() {  });
                } else {
                    el.tooltipster('content', 'Введите корректный e-mail');
                    el.tooltipster('show', function() {  });
                }

            }
        }
    }
);