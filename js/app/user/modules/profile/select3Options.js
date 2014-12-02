
export default {
	width: '280px',
	minimumInputLength: 3,
	data: [{id: 'Россия', text: "Россия"},{id: 'США', text: "США"},{id: 'Украина', text: "Украина"}],
	createSearchChoice:function(term, data) {
		term = term.trim();

		if ( $(data).filter( function() {
			return this.text.localeCompare(term)===0;
		}).length===0) {
			return {id:term, text:term};
		}
	},
	matcher: function(term, text) {
		term = term.trim();
		text = text.trim();

		return text.toUpperCase().indexOf(term.toUpperCase()) >= 0;
	},
	placeholder: 'Город проживания',
	formatSearching: 'Поиск...',
	formatNoMatches: 'За вашим запросом ничего не найдено',
	formatInputTooShort: function (input, min) {
		var n = min - input.length;
		return 'Пожалуйста, введите еще ' + n + ' символ' + (n == 1 ? '' : 'а') + ' города';
	}
}
