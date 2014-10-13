import 'can/'
import Edit from 'edit'
import 'js/app/admin/components/upload/'
import appState from 'appState'
import _ from 'lodash'

import 'bootstrap-wysihtml5'

export default Edit.extend(
	{
	    defaults: {
	        viewpath: '/js/app/admin/modules/clients/views/',

	        moduleName: 'client',

	        successMsg: 'Статья успешно сохранена.',
	        errorMsg: 'Ошибка сохранения статьи.',

	        form: '.setClient'
	    }
	}, 
	{

	}
);