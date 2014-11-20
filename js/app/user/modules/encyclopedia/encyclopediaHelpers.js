import can from 'can/';
import _ from 'lodash';
import appState from 'core/appState';

function computedVal (value) {
    if (typeof value === 'function') {
        value = value();
    }
    return value;
};

export default {
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
    getClassName: function (entity, index, type) {
        var i = computedVal(index),
            e = entity;
        var classname = entity.attr('XL')
            ? 'x2'
            : entity.attr(computedVal(type) == 'main' ? 'hasBigView' : 'theme.0.hasBigView')
                ? 'double'
                : '';

        classname += (!e.attr('image.background') ? ' no-image' : '')
        classname += e.attr('is_quiz') ? ' poll' : '';

        return classname;
    },
    getBg: function (entity, index, type) {
        var i = computedVal(index),
            e = entity,
            size = entity.attr('XL')
               ? 'XL'
               : entity.attr(computedVal(type) == 'main' ? 'hasBigView' : 'theme.0.hasBigView')
                   ? 'L'
                   : 'S',
            img;
        img = entity.attr('image.' + size);
        return img && entity.attr('type.name') !== 'Статья от специалиста' ? 'background-image: url(/img/uploads/' + img + ');' : '';
    },

    // Sorting articles functions
    sortArticles: function (sourceData, order, isXL, byMain) {
        order = order || 'desc';
        if (!sourceData.length)
            return [];
        var data = _.clone(sourceData, true);
        data = _.sortBy(data, function (item) {
            var position;
            if (byMain) {
                position = item.position ? (order == 'desc' ? -1 : 1) * item.position : 0;
            } else {
                position = item.theme[0].position ? (order == 'desc' ? -1 : 1) * item.theme[0].position : 0;
            }
            return position;
        });

        var self = this,
            result = new Array(data.length),
            isXL = typeof isXL == 'function' ? isXL() : isXL,
            lineWidth = 0,
            row = 0,
            width = appState.attr('viewport').getViewportWidth(),
            elementWidth,
            lineWidthConst;

        if (width <= 1180)
            lineWidthConst = 2;
        if (width > 1180 && width < 1600)
            lineWidthConst = 3;
        if (width >= 1600)
            lineWidthConst = 4;

        result[0] = data[0];

        if (isXL) {
            result[0].XL = true;
        }

        if (result[0].type.name == 'Статья от специалиста' 
            || result[0].type.name == 'Статья от пользователя') {
            result[0].XL = false;
            isXL = false;
        }

        _.each(result, function (element, i) {
            if (i == 0) {
                if (byMain) {
                    elementWidth = element.hasBigView || isXL ? 2 : 1;
                } else {
                    elementWidth = element.theme[0].hasBigView || isXL ? 2 : 1;
                }
                lineWidth += elementWidth;
            } else {
                if (lineWidth == lineWidthConst) {
                    row += 1;
                    if (row == 1 && isXL == 1 && lineWidthConst !== 2) {
                        lineWidth = 2;
                    } else {
                        lineWidth = 0;
                    }
                }
                result[i] = self.findSuitableEl(data, lineWidthConst - lineWidth, lineWidthConst, byMain);
                if (byMain) {
                    elementWidth = result[i].hasBigView ? 2 : 1;
                } else {
                    elementWidth = result[i].theme[0].hasBigView ? 2 : 1;
                }
                lineWidth += elementWidth;
            }
        });

        return result;
    },

    findSuitableEl: function (data, delta, lineWidthConst, byMain) {
        var iteration,
            element = _.find(data, function (el, i) {
                iteration = i;
                if (i == 0 || el == undefined)
                    return false;
                if (delta == 0 || delta > 1)
                    return true;
                if (delta == 1 && (byMain ? el.hasBigView : el.theme[0].hasBigView) == false)
                    return true;
            });

        if (!element) {
            element = _.find(data, function (el, i) {
                iteration = i;
                if (el && i !== 0) {
                    if (byMain) {
                        el.hasBigView = false;
                    } else {
                        el.theme[0].hasBigView = false;
                    }
                    return true;
                }
                return false;
            });
        }

        if (iteration) {
            data[iteration] = undefined;
        }

        return element;
    }
}
