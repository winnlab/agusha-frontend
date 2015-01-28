'use strict';
import can from 'can/';
import _ from 'lodash';
import PopUp from 'lib/popUp/';
import view from 'lib/cropperPopUp/views/index.mustache!';
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

can.mustache.registerHelper('cropper', function (entity) {
    return function (el) {

        entity.bind("change", function (ev, newVal) {
            $(el).cropper("destroy");
            $(el).attr('src', newVal);

            $(el).cropper({
                dashed: false,
                aspectRatio: 1
            });
        });

        $(el).cropper({
            dashed: false,
            aspectRatio: 1
        });

        return el;
    };
});

Cropper = PopUp.extend({
    init: function() {
        this.module = new can.Map({
            'close': true,
            'visible': null,
            'text': '',
            'file': null,
            'image': new imageMap(),
            'classes': 'addPhotoCropper'
        });

        this.element.append(can.view(view, this.module));
    },

    '.addPhotoCropper .button.ok click': function() {
        var img = this.module.attr('file'),
            imgDom = this.element.find(
                '.popUpWrap.cropper .innerImage img.cropImageNode'
            ),
            imgData = imgDom.cropper('getData'),
            data = new FormData(),
            module = this.module,
            type = module.attr('type'), lvar,
            that = this;

        lvar = can.param(
            _.extend(imgData, uploadOptions[type].uploads)
        );

        data.append(type, img);

        can.ajax({
            url: '/profile/upload/?'+lvar,
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST'
        }).success(function (resp) {
            var owner = module.owner;
            owner.setImages(resp.data.images);
            that.closePopup();
        }).fail(function () {
            alert('fail');
        });
    },

    '.ok click': function() {

    },

    show: function (options) {
        this.parent = options.parent;
        this.module.attr({
            visible: true,
            file: options.file,
            owner: options.owner,
            cb: options.cb
        });
        this.module.attr('image.url', options.url);
    },

    closePopup: function() {
        this.module.attr({
            'visible': false
        });

    }
});

cropper = new Cropper('body');

can.mustache.registerHelper('uploader', function (type, options) {
    var input, owner,
        clojureBind;

    owner = options.context.child || options.context.user;

    input = $('<input id="imageToCrop" type="file" accept="image/x-png, image/gif, image/jpeg" />').addClass('uploader uploader'+type);

    clojureBind = function (ow, tp, inp) {
        inp.change(function () {

            var input = this;

            cropper.module.attr('type', tp);

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    cropper.show({
                        type: tp || 'default',
                        url: e.target.result,
                        file: input.files[0],
                        owner: ow
                    });
                };

                reader.readAsDataURL(input.files[0]);
            }
        });
    };

    clojureBind(owner, type, input);

    return function(el) {
        $(el).on('click', function() {
            input.click();
        });

        return el;
    };
});

export default cropper;
