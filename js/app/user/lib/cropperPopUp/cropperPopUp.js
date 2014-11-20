
import can from 'can/';
import PopUp from 'lib/popUp/';
import view from 'js/app/user/lib/cropperPopUp/views/index.mustache!';
import _ from 'lodash';

import 'cropper';

var imageMap = can.Map.extend({}), Cropper, cropper,
    uploadOptions;

uploadOptions = {
    defaults: {
        uploads: {
            uploadDir: './public/img/uploads/'
        }
    },
    profile: {
        uploads: {
            uploadDir: './public/img/uploads/profile'
        }
    },
    child: {
        uploads: {
            uploadDir: './public/img/uploads/child'
        }
    }
};

function computedVal (value) {
    if (typeof value === 'function') {
        value = value();
    }
    // and again
    if (typeof value === 'function') {
        value = value();
    }
    return value;
}

can.mustache.registerHelper('cropper', function (entity) {
    return function (el) {
        entity.bind("change", function (ev, newVal) {
            $(el).cropper("destroy");
            $(el).attr('src', newVal);

            $(el).cropper({
                data: {
                    width: 250,
                    height: 250
                }
            });
        });

        $(el).cropper({
            data: {
                width: 250,
                height: 250
            }
        });

        return el
    };
});

Cropper = PopUp.extend({
    init: function() {
        var that = this;

        System.import('js/plugins/cropper/dist/cropper.css!');

        this.module = new can.Map({
            'close': true,
            'visible': null,
            'text': '',
            'file': null,
            'image': new imageMap,
            'classes': 'addPhotoCropper'
        });

        this.element.append(can.view(view, this.module));
    },
    '.addPhotoCropper .button.ok click': function() {
        var img = this.module.attr('file'),
            imgDom = this.element.find('.popUpWrap.cropper .innerImage img.cropImageNode'),
            imgData = imgDom.cropper('getData'),
            data = new FormData(), module = this.module,
            type = module.attr('type'),
            form = $('<form></form>'), lvar;

        lvar = can.param(
            _.extend(imgData, uploadOptions[type]['uploads'])
        );

        data.append(type, img);

        can.ajax({
            url: '/profile/upload?'+lvar,
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST'
        }).success(function () {

        }).fail(function () {

        });
    },
    setClasses: function(selector, input) {
        this.on(selector, 'click', function() {
            input.click();
        });
    },
    show: function (options) {
        var that = this;

        this.def = options.def;
        this.parent = options.parent;

        this.module.attr({
            visible: true,
            file: options.file,
            cb: options.cb
        });

        this.module.attr('image.url', options.url);
    }
});

cropper = new Cropper('body');

can.mustache.registerHelper('uploader', function (type, classes) {
    var input, button, btnString, selector;

    input = $('<input type="file" />').addClass('uploader uploader'+type);

    selector = "."+classes.replace(' ', '.');

    cropper.setClasses(selector, input)

    input.change(function(ev) {
        var target = $(ev.target).data('target'),
            input = this;

        cropper.module.attr('type', type);

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                cropper.show({
                    type: type || 'default',
                    url: e.target.result,
                    file: input.files[0]
                });
            };

            reader.readAsDataURL(input.files[0]);
        }
    });

    return true;
});

export default cropper;
