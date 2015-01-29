
import can from 'can/';

var defImages = {
	large: '',
	small: ''
}

export default can.Map.extend({
	image: {
		large: '',
		small: ''
	},
	removeImages: function(callback) {
		var options, that = this, name = this.attr('image.large')
			.match(/[a-zA-Z\d]{0,}.[a-zA-Z\d]{1,4}$/i);

		if(!name) {
			return false;
		}

		options = {
			name: name[0],
			type: 'child'
		};

		can.ajax({
			url: '/profile/upload?'+can.param(options),
			type: 'DELETE'
		}).success(function() {
			that.attr('image', defImages);

			callback();
		}).fail(function( ) {
			alert('fail');
		});
	},
	setImages: function(images) {
		var that = this;

		_.each(images, function (image, key, list) {
			that.attr('image.' + key, image);
		});
	}
});
