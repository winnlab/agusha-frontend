import 'can/'
import Edit from 'edit'
import appState from 'appState'

import _ from 'lodash'
import 'summernote'
import 'upload'

export default Edit.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/partners/views/',

        moduleName: 'partner',

        form: '.setPartner'
    }
}, {
	
});