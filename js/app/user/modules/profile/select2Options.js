
export default {
	width: '280px',
	minimumInputLength: 3,
	matcher: function() {
		console.log('123');
	},
	val: function() {
		console.log(arguments);
		return 'value';
	},
	initSelection: function(el, cb) {
		cb({
			id: $(el).val(),
			text: $(el).val()
		})
	},
	ajax: {
		url: '/profile/cities',
		type: 'post',
		dataType: 'json',
		quietMillis: 300,
		data: function (term, page) {
			return {
				term: term
			};
		},
		results: function (data, page) {
			console.log(data);
			return {results: data};
		}
	},
	createSearchChoice:function(term, data) {
		if ( $(data).filter( function() {
			return this.text.localeCompare(term)===0;
		}).length===0) {
			return {id:term, text:term};
		}
	},
	placeholder: 'Город проживания',
	formatSearching: 'Поиск...',
	formatNoMatches: 'За вашим запросом ничего не найдено',
	formatInputTooShort: function (input, min) {
		var n = min - input.length;
		return 'Пожалуйста, введите еще ' + n + ' символ' + (n == 1 ? '' : 'а') + ' города';
	}
}
