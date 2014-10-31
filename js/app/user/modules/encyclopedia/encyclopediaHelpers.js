import can from 'can/';
import _ from 'lodash';

function computedVal (value) {
    if (typeof value === 'function') {
        value = value();
    }
    return value;
};

export default {
    filterBy: function (entity, filter) {
        filter = computedVal(filter);
        if (filter == 0) {
            return 'display: block;';
        }
        if (entity.attr('type.name') !== filter) {
            return 'display: none;'
        }
    },
    articleType: function (entity) {
        var type = entity.attr('type.name'),
            result = '';

        if (type === 'Статья от редакции') {
            result = 'redaction'
        } else if (type === 'Тема недели') {
            result = 'week'
        } else {
            result = 'author'
        }

        return result;
    },
    getClassName: function (entity, index) {
        var i = computedVal(index),
            e = entity;
        var classname = i == 0 ? 'x2' : i === 3 ? 'double' : '';

        classname += (!e.attr('image.background') ? ' no-image' : '')
        classname += e.attr('is_quiz') ? ' poll' : '';

        return classname;
    },
    is: function () {
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
    },
    sortBy:  function (collection, prop, direction, options) {
        if (arguments.length == 3) {
            options = direction;
            direction = false;
        }
        collection = computedVal(collection);
        direction = computedVal(direction);
        if (collection && collection.attr('length') && prop) {
            var sorted = _.sortBy(collection, function (member) {
                return member.attr(prop);
            });

            if (direction && direction == 'desc') {
                sorted.reverse();
            }

            return _.map(sorted, function (member, index) {
                return options.fn(options.scope
                    .add({'@index': index})
                    .add(member)
                );
            }).join('');
        }
    }
}
