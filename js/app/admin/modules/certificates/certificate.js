import 'can/'
import Edit from 'edit'

import 'summernote'
import 'upload'

export default Edit.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/certificates/views/',

        moduleName: 'certificate',

        form: '.setCertificate'
    }
}, {});