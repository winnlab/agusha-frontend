var OkSocialApi = function(params, callback) {
	var instance = this;

	// params
	params = jQuery.extend({
		ok_sanbox: false,
		width: 760
	}, params);

	var wrap = function() {
		return window[params.wrapperName];
	};

	var apiUrl = 'http://api.odnoklassniki.ru/js/fapi.js';
	if (params.ok_sanbox) {
		apiUrl = 'http://api-sandbox.odnoklassniki.ru:8088/js/fapi.js';
	}
	// private

	var callRaw = function(method, params, callback) {
		params = jQuery.extend({
			method: method
		}, params);

		FAPI.Client.call(params, callback);
	};

	var moduleExport = {
		// raw api object - returned from remote social network
		raw: null,

		unifyFields: {
			id: 'uid',
			first_name: 'first_name',
			last_name: 'last_name',
			birthdate: 'birthday',
			nickname: 'name',

			photo: 'pic_1',
			//pic_2
			//pic_3
			//pic_4

			gender: function() {
				var value = arguments.length ? arguments[0] : false;
				if (value === false) { return 'gender'; }
				return value == 'male' ? 'male' : 'female';
			}
		},

		// information methods
		getProfiles : function(uids, callback, errback) {
			if (! (uids instanceof Array)) {
				uids = (uids+'').split(',');
			}
			callRaw('users.getInfo', {fields: wrap().getApiFields(params.fields), uids: uids.join(',')}, function(status, data, error) {
				if (status == 'ok') {
					return callback(wrap().unifyProfileFields(data));
				}
				else {
					return errback ? errback(error) : callback(error);
				}
			});
		},
		getFriends : function(callback, errback) {
			callRaw('friends.get', {}, function(status, data, error) {
				if (status == 'ok') {
					moduleExport.getProfiles(data.join(','), callback, errback);
				}
				else {
					return errback ? errback(error) : callback(error);
				}
			});
		},
		getCurrentUser : function(callback, errback) {
			moduleExport.getProfiles(Object(FAPI.Util.getRequestParameters()).logged_user_id, function(data) { callback(data[0]); }, errback);
		},
		getAppFriends : function(callback, errback) {
			callRaw('friends.getAppUsers', {}, function(status, data, error) {
				if (status == 'ok') {
					moduleExport.getProfiles(data.uids.join(','), callback, errback);
				}
				else {
					return errback ? errback(error) : callback(error);
				}
			});
		},
		// utilities
		inviteFriends : function() {
			var local_params = arguments[0] || null;
			var local_callback = arguments[1] || null;
			if (typeof local_params == 'function') {
				local_callback = local_params;
			}
			FAPI.UI.showInvite(local_params.install_message);

			return local_callback ? local_callback() : null;
		},
		resizeCanvas : function(params, callback) {
			FAPI.UI.setWindowSize(params.width, params.height);

			return callback ? callback() : null;
		},
		// service methods
		postWall : function(params, callback, errback) {
			params = jQuery.extend({id: FAPI.Client.uid}, params);

			window.API_callback = function(method, status, attributes) {
				delete window.API_callback;
				// в апи не реализован вызов callback на отмене приглашения запостить на стену
				if (status != 'ok') {
					return errback ? errback(attributes) : callback(attributes);
				}
				if (method == 'showConfirmation' && status == 'ok') {
					publishMessage.resig = attributes;
					callRaw('stream.publish', publishMessage, function(data) {
						// @todo доделать errback(data);
						return callback(data);
					});
				}
			};
			// @todo добавить обработку с uid
			var publishMessage = {
				message: params.message,
				method: "stream.publish",
				application_key: FAPI.Client.applicationKey,
				session_key: FAPI.Client.sessionKey,
				format: FAPI.Client.format
			};
			publishMessage.sig = FAPI.Util.calcSignature(publishMessage, FAPI.Client.sessionSecretKey);

			FAPI.UI.showConfirmation("stream.publish", params.message, publishMessage.sig);
		},
		makePayment : function(params, callback, errback, closeDialogback) {
			window.API_callback = function(method, result, data) {
				delete window.API_callback;

				// @todo проверка ошибки, errback, closeDialogback

				// @todo какие тут приходят данные?
				data = jQuery.parseJSON(data);
				data.result = result;
				return callback(data);
			};
			FAPI.UI.showPayment(params.name, params.description, null, null, JSON.stringify(params.items), [], 'ok', true);
		}
	};

	// constructor
	jQuery.getScript(apiUrl, function() {
		var FAPI_Params = Object(FAPI.Util.getRequestParameters());

		FAPI.init(FAPI_Params.api_server, FAPI_Params.apiconnection, function() {
			moduleExport.raw = FAPI;

			// export methods
			instance.moduleExport = moduleExport;

			callback ? callback() : null;
		});
	});
};