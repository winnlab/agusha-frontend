import 'swal'

window.saMessage = function(title = '', text = '', type = 'info') {
	swal(title, text, type);
}

window.saConfirm = function (title = '', text = '', cb) {
	swal({
		title: title,
		text: text,
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Да",
		cancelButtonText: "Нет",
		closeOnConfirm: false,
		closeOnCancel: true
	}, cb);
};

window.saError = function (text) {
	saMessage('Ошибка!', text, 'error');
};

window.saSuccess = function(title, text) {
	if(text === undefined) {
		text = title;
		title = 'ОК!';
	}

	saMessage(title, text, 'success');
};