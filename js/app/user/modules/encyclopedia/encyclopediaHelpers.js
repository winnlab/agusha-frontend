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
        var classname = i == 0 ? 'x2' : '',
            doubles = [3, 6, 11, 12, 15, 20, 24];

        if (doubles.indexOf(i) !== -1) {
            classname = 'double';
        }

        classname += (!e.attr('image.background') ? ' no-image' : '')
        classname += e.attr('is_quiz') ? ' poll' : '';

        return classname;
    },
    getBg: function (entity, index) {
        var i = computedVal(index),
            e = entity,
            size = 'S',
            img,
            doubles = [3, 6, 11, 12, 15, 20, 24];

        if (i == 0) {
            size = 'XL';
        }

        if (doubles.indexOf(i) !== -1) {
            size = 'L';
        }

        img = entity.attr('image.' + size);

        return img ? 'background-image: url(/img/uploads/' + img + ');' : '';
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
                var p = member.attr(prop);
                if (_.isArray(p)) {
                    return p.length;
                }
                return p;
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
    },
    arrContains: function (array, value, strict, reverse, options) {
    	strict = computedVal(strict);
    	value = computedVal(value)

    	if (strict && !value) {
    		return false;
    	}

    	array = computedVal(array);

    	if(!_.isArray(array) && !array[0]) {
    		return false;
    	}

    	return (array.indexOf(value) > -1) ^ reverse ? options.fn() : false;
    }
}
