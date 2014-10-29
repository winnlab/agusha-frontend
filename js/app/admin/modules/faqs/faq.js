import 'can/'
import Edit from 'edit'

import 'summernote'

export default Edit.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/faqs/views/',

        moduleName: 'faq',

        successMsg: 'Статья успешно сохранена.',
        errorMsg: 'Ошибка сохранения статьи.',

        form: '.setFaq'
    }
}, {
	init: function () {
		Edit.prototype.init.call(this);

		if(!this.options.doc.attr('_id')) {
            this.options.doc.attr('active', true);
			this.options.doc.attr('position', 99);
		}
	}
});