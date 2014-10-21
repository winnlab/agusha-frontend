var baseModel = {
    chooseResource: function (resource) {
        return document.location.pathname.indexOf('admin/') !== -1
            ? '/admin' + resource
            : resource;
    },
    parseModel: function (data) {
        return data.data && !data.err ? data.data : data;
    },
    parseModels: function (data) {
        return data.data ? data.data : [];
    },
    simpleUploaded: function (name, value) {
        this.attr(name, value);
    },
    simpleRemoveUploaded: function (name) {
        this.attr(name, undefined);
    },
    uploaded: function (name, value) {
        if (!this.attr(name)) {
            this.attr(name, []);
        }

        var images = this.attr(name).attr();

        if(value instanceof Array){
            value.forEach(function (val){
                images.push(val.name);
             });
            this.attr(name, images);
        } else if(value instanceof Object) {
            images.push(value.name);
            this.attr(name, images);
        } else {
            swal("Ошибка!", "Некорректно задано значение входящих аргументов при загрузке изображений.", "success")
        }
    },
    removeUploaded: function (name, index) {
       this.attr(name).splice(index, 1);
    }
};

export default baseModel;