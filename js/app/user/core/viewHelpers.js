'use strict';

import can from 'can/';
import appState from 'core/appState';

function computedVal (value) {
    if (typeof value === 'function') {
        value = value();
    }
    return value;
}

can.mustache.registerHelper('getUserImg', function (article) {
    var result = '/img/user/helpers/stub/medium.png';

    if (article.author
        && article.author.author_id
        && article.author.author_id.image
        && article.author.author_id.image.medium
    ) {
        result = article.author.author_id.image.medium;
    }

    return result;
});

can.mustache.registerHelper('isnt', function (a, b, options) {
    var result = computedVal(a) !== computedVal(b);
    return result ? options.fn() : options.inverse();
});

can.mustache.registerHelper('is', function () {
    var options = arguments[arguments.length - 1],
        comparator = computedVal(arguments[0]),
        result = true;

    for (var i = 1, ln = arguments.length - 1; i < ln; i += 1) {
        if (comparator !== computedVal(arguments[i])) {
            result = false;
            break;
        }
    }

    return result ? options.fn() : options.inverse();
});

can.mustache.registerHelper('plus', function () {
    var result = 0;
    for (var i = 0, ln = arguments.length - 1; i < ln; i += 1) {
        result += +computedVal(arguments[i]);
    }
    return result;
});

can.mustache.registerHelper('sortBy', function (collection, prop, direction, options) {
    if (arguments.length === 3) {
        options = direction;
        direction = false;
    }
    collection = computedVal(collection);
    direction = computedVal(direction);
    if (collection && collection.attr('length') && prop) {
        var sorted = _.sortBy(collection, function (member) {
            var p = member.attr(prop);
            if (typeof p === 'object' && p.attr) {
                p = p.attr();
            }
            if (_.isArray(p)) {
                return p.length;
            }
            return p;
        });

        if (direction && direction === 'desc') {
            sorted.reverse();
        }

        return _.map(sorted, function (member, index) {
            return options.fn(options.scope
                .add({'@index': index})
                .add(member)
            );
        }).join('');
    }
});

can.mustache.registerHelper('arrContains', function (array, value, strict, reverse, options) {
    strict = computedVal(strict);
    value = computedVal(value);

    if (strict && !value) {
        return false;
    }

    array = computedVal(array);

    if(!_.isArray(array) && !array[0]) {
        return false;
    }

    return (array.indexOf(value) > -1) ^ reverse ? options.fn() : false;
});

can.mustache.registerHelper('isLiked', function (article) {
    var result = false,
        user = appState.attr('user').user();
    if (appState.attr('user').auth.attr('isAuth')) {
        result = _.find(article.likes, { client: user._id });
    }
    return !!result ? 'isLiked' : '';
});

can.mustache.registerHelper('isWatched', function (article) {
    var result = false,
        user = appState.attr('user').user();
    if (appState.attr('user').auth.attr('isAuth')) {
        result = _.findIndex(article.watchers, function (watch) {
            return user._id == watch;
        });
    }
    return (result !== false && result !== -1) ? 'isWatched' : '';
});

can.mustache.registerHelper('isSpecAns', function (article, options) {
    var result = _.find(article.answer, function (answer) {
            return !!answer.specialist;
        });
    return !!result ? options.fn() : options.inverse();
});

can.mustache.registerHelper('checkAnswer', function (article) {
    var result = false,
        user = appState.attr('user').user();
    if (appState.attr('user').auth.attr('isAuth')) {
        result = _.find(article.answer, function (answer) {
            return _.find(answer.clients, { client: user._id });
        });
    }
    return !!result ? 'Я уже' : 'Я тоже';
});

can.mustache.registerHelper('getProfileImage', function(label, images) {
    var module = appState.attr('user'),
        user = module.options.user;
    images = computedVal(images);
    return user.getImage(label);
});

can.mustache.registerHelper('showChildImage', function(image, gender) {
    var result = '/img/user/helpers/stub/ava_child.png';

    if (image() && image().length > 0) {
        result = image();
    } else if (gender() == 1) {
        result = '/img/user/helpers/stub/ava_boy.png';
    } else if (gender() == 2) {
        result = '/img/user/helpers/stub/ava_girl.png';
    }

    return result;
});

can.mustache.registerHelper('countAnswersAmount', function (answer) {
    var result = 0;

    if (answer && answer() && answer().length > 0) {

        for (var ans in answer()) {
            if (answer().hasOwnProperty(ans)) {
                if (answer()[ans].clients) {
                    result += answer()[ans].clients.length;
                }
            }
        }
    }

    return result;
});
