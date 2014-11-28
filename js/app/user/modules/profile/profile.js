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
import friendsView from 'js/app/user/modules/profile/views/friends.mustache!';
import 'vk-openapi'

System.import('./js/plugins/select2/select2.css!');

import Profile from 'js/app/user/modules/profile/profileModel';

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

can.mustache.registerHelper('userLevelNum', function(points, options) {
    var diff, level;

    points = points();

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

    points = points();

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

can.mustache.registerHelper('isFilled', function(level, points, options) {
    var diff;

    points = points();

    diff = 200 - (Number(level.points) - Number(points));

    if (Number(points) > level.points) {
        return 'filled';
    }

    return '';
});

can.mustache.registerHelper('diff', function(k, points, options) {
    var diff, level, relVal, nextLevelVal, getLevel, relItemVal;

    points = points();

    level = _.filter(levels, function(item, i, list) {
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
    }).pop()

    if(level == undefined) {
        level = levels[0];
    }

    relVal = (level.points / k)/100;
    relItemVal = level.points/7;

    if(relVal > 1) {
        return 100
    }

    var left =(level.points-((k-1)*100))+(points-((k-1)*100));

    if(left > 0) {
        return left/relItemVal*100;
    }
    return 0;
});

can.mustache.registerHelper('leftNext', function(points) {
    var diff, level, left;

    points = points();

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

    points = points();

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
})

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

            console.log(this.user);


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

            VK.init({
              apiId: 4581691
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
                errs: this.errs,
                levels: levels,
                levelKeys: [1,2,3,4,5,6,7]
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
        },
        /* VK friends invitation */
        '.block.vk click': function () {
            VK.Auth.login(_.bind(this.handleVkAuth, this), 2);
        },
        handleVkAuth: function () {
            if (response.session) {
                return this.getVkFriends();
            }
        },
        getVkFriends: function () {
            // should check `secret` before this func?

            VK.Api.call('friends.get', {
                fields: 'uid,first_name,last_name,photo',
                order: 'hints'
            }, _.bind(this.showVkFriends, this));
        },
        showVkFriends: function (response) {
            var friends = response.response;

            if (friends instanceof Array && friends.length) {
                this.createFriendsPopup(friends);
            }
        },
        createFriendsPopup: function (friends) {
            var self = this;

            var renderer = can.view(view, {
                friends
            });

            this.$friends = renderer();

            $(body).append(this.$friends);
        },
        toggleSelected: function (el) {
            (el.hasClass('selected') ? el.addClass : el.removeClass)('selected');
        },
        sendVKMessage: function () {
            this.friends = _.map(this.$friends.find('.pf-friend.selected'), function (item) {
                return $(item).data('friend');
            });

            if (friends.length) {
                VK.Api.call('photos.getWallUploadServer', {}, _.bind(this.uploadImageToWall, this));
            }
        },
        uploadImageToWall: function (res) {
            can.ajax({
                url: '/vk/upload',
                type: 'POST',
                data: {
                    uploadUrl: res.response.upload_url
                },
                success: _.bind(this.savePhotoToWall, this),
                    function (photoRes) {
                        cb(photoRes.response[0].id);
                    });
                },
                error: function (shr, status, data) {
                    console.log('error', data);
                }
            });
        },
        savePhotoToWall: function (data) {
            data = JSON.parse(data);
            VK.Api('photos.saveWallPhoto', {
                server: data.server,
                photo: data.photo,
                hash: data.hash
            }, _.bind(this.sendFriendsMessage, this));
        },
        sendFriendsMessage: function (imageId) {
            var self = this;

            _(this.friends).each(function (friend) {
                _.defer(_.bind(self.postToFriendWall, self, friend));
            });
        },
        postToFriendWall: function(friend) {
            VK.Api.call('wall.post', {
                owner_id: friend.uid,
                message: 'some random message',
                attachments: imageId
            }, function (response) {
                // should be posted
            })
        }
    }
);