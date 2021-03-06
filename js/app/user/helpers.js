'use strict';

window.strip_tags = function(str) {
	return str.replace(/<\/?[^>]+>/gi, '');
};

window.escape = function(text) {
	if (text && text.length > 0) {
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}
};

window.jadeTemplate = {
	viewPath: '/views/',
	savedViewFuncs: [],

	get: function(name, data) {
		if(!(typeof(this.savedViewFuncs[name]) != 'undefined' && this.savedViewFuncs[name])) {
			var response = $.ajax({
				url: this.viewPath + name,
				dataType: 'view',
				async: false
			});

			this.savedViewFuncs[name] = new Function('return ' + response.responseText)();
		}

		return this.savedViewFuncs[name](data);
	}
};

window.requestAnimFrame = (function() {
	return	window.requestAnimationFrame	 ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback){
			var timestamp = new Date().getTime();
			window.setTimeout(function() {
				callback(timestamp);
			}, 1000 / 30);
		};
})();

window.leftPad = function(value, length) {
	var value = value.toString();
	return (value.length < length) ? leftPad("0" + value, length) : value;
};

// facebook

window.fbAsyncInit = function() {
	FB.init({
		appId:		'812840382107432',
		xfbml:		true,
		version:	'v2.2'
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// twitter

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// vk
/*

VK.init({apiId: 4603722, onlyWidgets: true});*/
