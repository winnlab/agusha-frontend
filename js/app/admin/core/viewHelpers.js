import can from'can/'
import _ from 'lodash'
import 'js/app/admin/lib/viewport'

'use strict';

function computedVal (value) {
	if (typeof value === 'function') {
		value = value();
	}
	// and again
	if (typeof value === 'function') {
		value = value();
	}
	return value;
};

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


can.mustache.registerHelper('isnt', function (a, b, options) {
	var result = computedVal(a) !== computedVal(b);
	return result ? options.fn() : options.inverse();
});

can.mustache.registerHelper('or', function () {
	var options = arguments[arguments.length - 1],
		result = false;

	for (var i = arguments.length - 1; i--; ) {
		if (computedVal(arguments[i])) {
			result = true;
			break;
		}
	}

	return result ? options.fn() : options.inverse();
});

can.mustache.registerHelper('gt', function (a, b, options) {
	return computedVal(a) > computedVal(b)
		? options.fn()
		: options.inverse();
});

can.mustache.registerHelper('plus', function (a, b) {
	return computedVal(a) + computedVal(b);
});

can.mustache.registerHelper('minus', function (a, b) {
	return computedVal(a) - computedVal(b);
});

can.mustache.registerHelper('indexOfInc', function (array, element) {
	return computedVal(array).indexOf(computedVal(element)) + 1;
});

can.mustache.registerHelper('arrFind', function (array, id, findKey, key) {
	var item;
	id = computedVal(id);
	findKey = computedVal(findKey);
	key = computedVal(key);
	array = computedVal(array);
	if (id) {
		item = _.find(array, function (a) {
			return a.attr(findKey) === id;
		});
		if (item) {
			return item.attr(key);
		}
	}
	return '';
});

can.mustache.registerHelper('getArrayObjValue', function (array, index, key) {
	return array() ? array().attr(index() + '.' + key) : '';
});

can.mustache.registerHelper('sortedBy', function (collection, prop, direction, options) {
	if (arguments.length == 3) {
		options = direction;
		direction = false;
	}
	collection = computedVal(collection);
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
});

can.mustache.registerHelper('getBoxName', function (index, options) {
	var classes = ['bg-light-blue', 'bg-red', 'bg-green', 'bg-yellow', 'bg-maroon', 'bg-purple', 'bg-aqua'];
	index = computedVal(index);
	if (!index && index !== 0) {
		index = ~~(Math.random() * classes.length - 1);
	}
	return classes[index % classes.length];
});

var wysiwyg = function (slider, module, options) {
	if (options === undefined) {
		if (module === undefined) {
			options = slider;
			slider = undefined;
		} else {
			options = module;
			module = undefined;
		}
	}

	return function (el) {
		_.defer(function (slider) {
			var opts = {
				height: 300,
				module: module,
				toolbar: [
					['style', ['style']],
					['font', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
					['fontname', ['fontname']],
					['fontsize', ['fontsize']],
					['color', ['color']],
					['para', ['ul', 'ol', 'paragraph']],
					['height', ['height']],
					['table', ['table']],
					['insert', ['link', 'picture', 'video', 'hr']],
					['view', ['fullscreen', 'codeview']],
					['help', ['help']]
				]
			};

			if (slider) {
				opts.toolbar[8][1].splice(2, 0, 'slider');
			}
			$(el).summernote(opts);
		}, slider);
	};
};

can.mustache.registerHelper('wysihtml5', wysiwyg);
can.mustache.registerHelper('wysiwyg', wysiwyg);

var wysiwyg = function (slider, module, options) {
	if (options === undefined) {
		if (module === undefined) {
			options = slider;
			slider = undefined;
		} else {
			options = module;
			module = undefined;
		}
	}

	return function (el) {
		_.defer(function (slider) {
			var opts = {
				height: 300,
				module: module,
				toolbar: [
					['style', ['style']],
					['font', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
					['fontname', ['fontname']],
					['fontsize', ['fontsize']],
					['color', ['color']],
					['para', ['ul', 'ol', 'paragraph']],
					['height', ['height']],
					['table', ['table']],
					['insert', ['link', 'picture', 'video', 'hr']],
					['view', ['fullscreen', 'codeview']],
					['help', ['help']]
				]
			};

			if (slider) {
				opts.toolbar[8][1].splice(2, 0, 'slider');
			}
			$(el).summernote(opts);
		}, slider);
	};
};

can.mustache.registerHelper('cropper', function (img, data, options) {
	if (options === undefined) {
		options = data;
		data = {};
	}

	return function (el) {
		var params = {
			multiple: true,
			dashed: false,
			done: function(data) {
				console.log('cropper data', data);
			}
		};

		if (data) {
			params.data = data;
		}

		$(el).cropper(params);
	};
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

can.mustache.registerHelper('parseDate', function (date) {
	date = computedVal(date);
	return date
		? moment(date).format('DD.MM.YYYY hh:mm:s')
		: "Нет данных";
});

can.mustache.registerHelper('stringContains', function (string, needle, options) {
	return computedVal(string).indexOf(computedVal(needle)) >= 0
		? options.fn()
		: options.inverse();
});

can.mustache.registerHelper('arrOfObjectsContains', function (array, property, value, reverse, options) {
	array = computedVal(array);
	property = computedVal(property);
	value = computedVal(value);

	if (! array instanceof can.List && ! _.isArray(array)) {
		return false;
	}

	if (!array[0]) {
		return reverse ? options.fn() : false;
	}

	var result = [];
	if (value instanceof can.List || _.isArray(value)) {
		result = _.find(array, function (item) {
			return value.indexOf(item[property]) >= 0;
		});
	} else {
		var props = {};
		props[property] = value;
		result = _.where(array, props);
	}

	return Boolean(result) ^ reverse ? options.fn() : false;
});

can.mustache.registerHelper('getURLRoot', function () {
	var url = document.URL;
	return url.split('/')[0] || url;
});