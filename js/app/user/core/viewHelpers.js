import can from 'can/';

function computedVal (value) {
    if (typeof value === 'function') {
        value = value();
    }
    return value;
};

can.mustache.registerHelper('filterBy', function (entity, filter) {
    filter = computedVal(filter);
    if (filter == 0) {
        return 'display: block;';
    }
    if (entity.attr('type.name') !== filter) {
        return 'display: none;'
    }
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

can.mustache.registerHelper('sortBy', function (collection, prop, direction, options) {
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
});

can.mustache.registerHelper('arrContains', function (array, value, strict, reverse, options) {
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
});
